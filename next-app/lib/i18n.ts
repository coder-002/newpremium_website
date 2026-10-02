import { NE_ATTR, NE_TEXT } from "./dictionaries/ne";

export const LANGS = ["en", "ne"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export function hasLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

const collapse = (s: string) => s.replace(/\s+/g, " ").trim();

/** Translate visible text. English is the key; missing entries fall back to English. */
export function t(lang: Lang, en: string): string {
  if (lang !== "ne") return en;
  return NE_TEXT[collapse(en)] ?? en;
}

/** Translate an attribute value (alt, placeholder, aria-label, title). */
export function ta(lang: Lang, attr: string, en: string): string {
  if (lang !== "ne") return en;
  return NE_ATTR[`${attr}::${collapse(en)}`] ?? en;
}

/** Pick between inline English / Nepali variants (formerly data-en / data-ne). */
export function pick(lang: Lang, en: string, ne: string): string {
  return lang === "ne" ? ne : en;
}
