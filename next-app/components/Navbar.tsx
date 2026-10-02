"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { type PageKey, PAGE_PATHS, href, switchLangPath } from "@/lib/routes";

const LABELS = {
  en: { home: "Home", products: "Products", about: "About Us", contact: "Contact", demo: "Request Demo", isNew: "New", menu: "Menu" },
  ne: { home: "गृहपृष्ठ", products: "उत्पादनहरू", about: "हाम्रोबारे", contact: "सम्पर्क", demo: "डेमो अनुरोध", isNew: "नयाँ", menu: "मेनु" },
} as const;

const PRODUCT_LINKS: { page: PageKey; label: string; isNew?: boolean }[] = [
  { page: "cbs", label: "Premium CBS" },
  { page: "cbs-lite", label: "Premium CBS Lite", isNew: true },
  { page: "mobile", label: "Mobile Banking" },
  { page: "atm", label: "ATM Banking" },
  { page: "sms", label: "SMS Banking" },
  { page: "tablet", label: "Premium Mobile Collector" },
];

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const l = LABELS[lang];

  const rest = pathname.replace(/^\/(en|ne)/, "") || "";
  const isActive = (page: PageKey) =>
    page === "products" ? rest.startsWith(PAGE_PATHS.products) : rest === PAGE_PATHS[page];

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, []);

  useEffect(() => {
    // React listens on the document too, so stopPropagation() in JSX handlers doesn't shield these.
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!navRef.current?.contains(target)) setMenuOpen(false);
      if (!target.closest?.('[data-menu="products"] > a')) setProductsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [closeAll]);

  const langHref = (target: Lang) => switchLangPath(pathname, target);

  return (
    <nav ref={navRef} className={menuOpen ? "menu-open" : undefined}>
      <Link className="nav-logo" href={href(lang, "home")} onClick={closeAll}>
        <Image className="brand-logo" src="/assets/images/brand/premium-logo.svg" alt="Premium Technologies" width={518} height={138} unoptimized loading="eager" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href={href(lang, "home")} className={isActive("home") ? "active" : undefined} onClick={closeAll}>{l.home}</Link>
        </li>
        <li className={`nav-item${productsOpen ? " open" : ""}`} data-menu="products">
          <a
            href={href(lang, "products")}
            className={isActive("products") ? "active" : undefined}
            aria-expanded={productsOpen}
            onClick={(e) => {
              e.preventDefault();
              setProductsOpen((open) => !open);
            }}
          >
            {l.products} <span className="nav-caret">▾</span>
          </a>
          <ul className="nav-dropdown">
            <li className="nav-dropdown-panel">
              {PRODUCT_LINKS.map((p) => (
                <Link key={p.page} href={href(lang, p.page)} className={isActive(p.page) ? "active" : undefined} onClick={closeAll}>
                  {p.label}
                  {p.isNew && <> <span className="nav-chip">{l.isNew}</span></>}
                </Link>
              ))}
            </li>
          </ul>
        </li>
        <li>
          <Link href={href(lang, "about")} className={isActive("about") ? "active" : undefined} onClick={closeAll}>{l.about}</Link>
        </li>
        <li>
          <Link href={href(lang, "contact")} className={isActive("contact") ? "active" : undefined} onClick={closeAll}>{l.contact}</Link>
        </li>
        <li className="nav-mobile-cta">
          <Link className="nav-cta" href={href(lang, "contact")} onClick={closeAll}>{l.demo}</Link>
        </li>
      </ul>
      <div className="nav-right">
        <button
          type="button"
          className="nav-toggle"
          aria-label={l.menu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="lang-toggle">
          <Link className={`lang-btn${lang === "en" ? " active" : ""}`} href={langHref("en")} hrefLang="en" scroll={false}>EN</Link>
          <Link className={`lang-btn${lang === "ne" ? " active" : ""}`} href={langHref("ne")} hrefLang="ne" scroll={false}>नेपाली</Link>
        </div>
        <Link className="nav-cta" href={href(lang, "contact")}>{l.demo}</Link>
      </div>
    </nav>
  );
}
