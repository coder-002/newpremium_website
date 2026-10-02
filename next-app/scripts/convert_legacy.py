#!/usr/bin/env python3
"""One-off converter: legacy ../index.html -> TSX server components.

Usage (from next-app/):  python3 scripts/convert_legacy.py

Each `<div id="page-*">` becomes components/pages/<Name>Page.tsx and the
<footer> becomes components/Footer.tsx. Text nodes and attributes that have a
Nepali dictionary entry are wrapped in t()/ta(); data-en/data-ne pairs become
pick(); navigate() handlers become <Link>/<NavArea>; images become next/image.
"""
import json
import os
import re
from html.parser import HTMLParser

from PIL import Image as PILImage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEGACY = os.path.dirname(ROOT)

VOID = {"br", "img", "input", "meta", "link", "hr", "source"}
SVG_TAGS = {"lineargradient": "linearGradient", "fedropshadow": "feDropShadow", "clippath": "clipPath",
            "radialgradient": "radialGradient", "fegaussianblur": "feGaussianBlur", "textpath": "textPath"}
ATTR_MAP = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "viewbox": "viewBox",
            "stddeviation": "stdDeviation", "patternunits": "patternUnits", "allowfullscreen": "allowFullScreen",
            "referrerpolicy": "referrerPolicy", "maxlength": "maxLength", "autocomplete": "autoComplete",
            "readonly": "readOnly", "gradientunits": "gradientUnits", "preserveaspectratio": "preserveAspectRatio",
            "srcset": "srcSet", "crossorigin": "crossOrigin", "novalidate": "noValidate", "colspan": "colSpan",
            "frameborder": "frameBorder", "xlink:href": "xlinkHref"}
BOOL_ATTRS = {"required", "allowfullscreen", "selected", "disabled", "checked", "hidden", "novalidate", "multiple"}
TRANSLATED_ATTRS = {"alt", "placeholder", "aria-label", "title"}
FONT_VARS = {"Inter": "var(--font-inter)", "Plus Jakarta Sans": "var(--font-jakarta)", "JetBrains Mono": "var(--font-mono)"}

PAGES = {
    "home": "HomePage", "products": "ProductsPage", "cbs": "CbsPage", "cbs-lite": "CbsLitePage",
    "mobile": "MobilePage", "atm": "AtmPage", "sms": "SmsPage", "tablet": "TabletPage",
    "about": "AboutPage", "contact": "ContactPage",
}


def load_dict():
    src = open(os.path.join(ROOT, "lib/dictionaries/ne.ts"), encoding="utf8").read()
    text = json.loads(re.search(r"NE_TEXT: Record<string, string> = (\{.*?\n\});", src, re.S).group(1))
    attrs = json.loads(re.search(r"NE_ATTR: Record<string, string> = (\{.*?\n\});", src, re.S).group(1))
    return text, attrs


NE_TEXT, NE_ATTR = load_dict()


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs or []), parent, []


class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root")
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.cur)
        self.cur.children.append(node)
        if tag not in VOID:
            self.cur = node

    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not self.root and n.tag != tag:
            n = n.parent
        if n is not self.root:
            self.cur = n.parent

    def handle_data(self, data):
        self.cur.children.append(data)


def find(node, pred):
    if isinstance(node, str):
        return None
    if pred(node):
        return node
    for c in node.children:
        r = find(c, pred)
        if r is not None:
            return r
    return None


def classes(node):
    return node.attrs.get("class", "").split()


def collapse(s):
    return re.sub(r"\s+", " ", s).strip()


def js(s):
    return json.dumps(s, ensure_ascii=False)


def camel(name):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), name)


def style_obj(css):
    parts = []
    for decl in css.split(";"):
        if ":" not in decl:
            continue
        k, v = decl.split(":", 1)
        k, v = k.strip(), v.strip()
        if not k:
            continue
        key = js(k) if k.startswith("--") else camel(k)
        parts.append(f"{key}: {js(v)}")
    obj = "{ " + ", ".join(parts) + " }"
    if "--" in css:
        return "{" + obj + " as CSSProperties}"
    return "{" + obj + "}"


NAV_RE = re.compile(r"navigate\('([\w-]+)'(?:\s*,\s*'([\w-]+)')?\)")


def nav_href(handler):
    m = NAV_RE.search(handler or "")
    if not m:
        return None
    page, section = m.group(1), m.group(2)
    return f"{{href(lang, {js(page)}{', ' + js(section) if section else ''})}}"


def image_size(src):
    path = os.path.join(LEGACY, src)
    if src.endswith(".svg"):
        svg = open(path, encoding="utf8").read(4000)
        vb = re.search(r'viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)"', svg)
        return (round(float(vb.group(1))), round(float(vb.group(2)))) if vb else (200, 60)
    with PILImage.open(path) as im:
        return im.size


class Emitter:
    def __init__(self):
        self.imports = set()

    def attrs(self, node, skip=()):
        out = []
        for k, v in node.attrs.items():
            if k in skip or k.startswith("on") or k in ("data-en", "data-ne"):
                continue
            if k == "font-family" and v is not None:
                fam = v.split(",")[0].strip()
                out.append(f"style={{{{ fontFamily: {js(FONT_VARS.get(fam, fam) + ', sans-serif')} }}}}")
                continue
            name = ATTR_MAP.get(k, k if k.startswith(("data-", "aria-")) else camel(k))
            if k in BOOL_ATTRS and (v is None or v == "" or v == k):
                out.append(name)
            elif v is None:
                out.append(f'{name}=""')
            elif k == "style":
                out.append(f"style={style_obj(v)}")
            elif k in TRANSLATED_ATTRS and f"{k}::{collapse(v)}" in NE_ATTR:
                out.append(f"{name}={{ta(lang, {js(k)}, {js(v)})}}")
            elif k == "value" and node.tag in ("input", "textarea") and node.attrs.get("type") not in ("hidden", "checkbox", "radio"):
                out.append(f"defaultValue={js(v)}" if '"' in v else f'defaultValue="{v}"')
            elif any(ch in v for ch in '"&\\{}\n'):
                out.append(f"{name}={{{js(v)}}}")
            else:
                out.append(f'{name}="{v}"')
        return out

    def text(self, s):
        if not s.strip():
            return None if "\n" in s else '{" "}'
        lead = '{" "}' if s[0].isspace() else ""
        trail = '{" "}' if s[-1].isspace() else ""
        key = collapse(s)
        if key in NE_TEXT:
            body = f"{{t(lang, {js(key)})}}"
        elif re.search(r"[{}<>'\"]|&\w+;", key):
            body = f"{{{js(key)}}}"
        else:
            body = key
        return lead + body + trail

    def tag_open(self, tag, attrs, selfclose=False):
        inner = (" " + " ".join(attrs)) if attrs else ""
        return f"<{tag}{inner}{' /' if selfclose else ''}>"

    def node(self, n, ind):
        pad = "  " * ind
        if isinstance(n, str):
            t = self.text(n)
            return [pad + t] if t else []
        tag = SVG_TAGS.get(n.tag, n.tag)
        cls = classes(n)
        onclick = n.attrs.get("onclick", "")

        # ── component substitutions ──
        if "type-text" in cls:
            self.imports.add('import TypeEyebrow from "@/components/TypeEyebrow";')
            return [pad + f'<TypeEyebrow text={{t(lang, {js(n.attrs.get("data-text", ""))})}} />']
        if "logo-bar-wrap" in cls:
            self.imports.add('import ClientLogoBar from "@/components/ClientLogoBar";')
            return [pad + "<ClientLogoBar />"]
        if n.attrs.get("id") == "aboutClients":
            self.imports.add('import ClientGrid from "@/components/ClientGrid";')
            return [pad + "<ClientGrid limit={20} />"]
        if "contact-form-card" in cls:
            self.imports.add('import DemoForm from "@/components/DemoForm";')
            return [pad + "<DemoForm lang={lang} />"]

        attrs = self.attrs(n)
        if "toggleFaq" in onclick:
            attrs.append("data-faq-toggle")
        m = re.search(r"showTab\('([\w-]+)'\)", onclick)
        if m:
            attrs.append(f'data-tab="{m.group(1)}"')

        link = nav_href(onclick)
        if link:
            if tag in ("a", "button"):
                self.imports.add('import Link from "next/link";')
                attrs = [a for a in attrs if not a.startswith(("type=", "href="))]
                tag = "Link"
                attrs.insert(0, f"href={link}")
            else:
                self.imports.add('import NavArea from "@/components/NavArea";')
                attrs.insert(0, f"href={link}")
                attrs.insert(0, f'as="{tag}"')
                tag = "NavArea"

        if n.tag == "img":
            src = n.attrs.get("src", "")
            if src.startswith("assets/"):
                self.imports.add('import Image from "next/image";')
                w, h = image_size(src)
                attrs = [a for a in self.attrs(n, skip=("src", "loading", "decoding", "width", "height"))]
                in_hero = self.ancestor(n, lambda a: bool({"hero", "page-hero"} & set(classes(a))))
                lazy = n.attrs.get("loading") == "lazy"
                extra = [f'src="/{src}"', f"width={{{w}}}", f"height={{{h}}}"]
                if in_hero and not lazy:
                    extra.append('loading="eager"')
                if src.endswith(".svg"):
                    extra.append("unoptimized")
                return [pad + self.tag_open("Image", extra + attrs, True)]

        if "data-en" in n.attrs:
            en, ne = n.attrs.get("data-en", ""), n.attrs.get("data-ne", "")
            attrs.append(f"dangerouslySetInnerHTML={{{{ __html: pick(lang, {js(en)}, {js(ne)}) }}}}")
            return [pad + self.tag_open(tag, attrs, True)]

        if n.tag in VOID or not n.children:
            if n.tag in VOID or tag not in ("iframe", "textarea", "script"):
                return [pad + self.tag_open(tag, attrs, True)]

        if n.tag == "textarea":
            content = "".join(c for c in n.children if isinstance(c, str))
            if content:
                attrs.append(f"defaultValue={{{js(content)}}}")
            return [pad + self.tag_open(tag, attrs, True)]

        kids = [c for c in n.children if not (isinstance(c, str) and not c.strip() and "\n" in c)]
        if len(kids) == 1 and isinstance(kids[0], str):
            body = self.text(kids[0]) or ""
            line = pad + self.tag_open(tag, attrs) + body + f"</{tag}>"
            if len(line) < 220:
                return [line]
        out = [pad + self.tag_open(tag, attrs)]
        for c in n.children:
            out += self.node(c, ind + 1)
        out.append(pad + f"</{tag}>")
        return out

    @staticmethod
    def ancestor(n, pred):
        p = n.parent
        while p is not None:
            if pred(p):
                return p
            p = p.parent
        return None


HEADER = '''// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
'''


def write_component(path, name, node, wrap_page=None, effects=False):
    em = Emitter()
    body = []
    for c in node.children:
        body += em.node(c, 3)
    imports = sorted(em.imports)
    text = "\n".join(body)
    helpers = [h for h in ("pick", "t", "ta") if re.search(rf"\b{h}\(lang", text)]
    imports.append("import { " + ", ".join(["type Lang"] + helpers) + ' } from "@/lib/i18n";')
    if "href(lang" in text:
        imports.append('import { href } from "@/lib/routes";')
    if "as CSSProperties" in text:
        imports.insert(0, 'import type { CSSProperties } from "react";')
    if effects:
        imports.append('import PageEffects from "@/components/PageEffects";')
    src = HEADER + "\n".join(imports) + "\n\n"
    src += f"export default function {name}({{ lang }}: {{ lang: Lang }}) {{\n  return (\n"
    if wrap_page:
        src += f'    <div id="page-{wrap_page}" className="page active">\n'
        src += "\n".join(body) + "\n"
        if effects:
            src += "      <PageEffects />\n"
        src += "    </div>\n"
    else:
        tag_attrs = em.attrs(node)
        src += f"    <{node.tag}{(' ' + ' '.join(tag_attrs)) if tag_attrs else ''}>\n" + "\n".join(body) + f"\n    </{node.tag}>\n"
    src += "  );\n}\n"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf8").write(src)
    print("wrote", os.path.relpath(path, ROOT))


def main():
    tb = TreeBuilder()
    tb.feed(open(os.path.join(LEGACY, "index.html"), encoding="utf8").read())
    for key, name in PAGES.items():
        node = find(tb.root, lambda n: n.attrs.get("id") == f"page-{key}")
        write_component(os.path.join(ROOT, f"components/pages/{name}.tsx"), name, node, wrap_page=key, effects=True)
    footer = find(tb.root, lambda n: n.tag == "footer")
    write_component(os.path.join(ROOT, "components/Footer.tsx"), "Footer", footer)


if __name__ == "__main__":
    main()
