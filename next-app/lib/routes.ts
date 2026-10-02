import type { Lang } from "./i18n";

export const PAGE_PATHS = {
  home: "",
  products: "/products",
  cbs: "/products/premium-cbs",
  "cbs-lite": "/products/premium-cbs-lite",
  mobile: "/products/mobile-banking",
  atm: "/products/atm-banking",
  sms: "/products/sms-banking",
  tablet: "/products/mobile-collector",
  about: "/about",
  contact: "/contact",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

export const PRODUCT_SLUGS = [
  "premium-cbs",
  "premium-cbs-lite",
  "mobile-banking",
  "atm-banking",
  "sms-banking",
  "mobile-collector",
] as const;
export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export function href(lang: Lang, page: PageKey, section?: string): string {
  return `/${lang}${PAGE_PATHS[page]}${section ? `#${section}` : ""}`;
}

/** Swap the language prefix of a pathname, e.g. /en/about -> /ne/about. */
export function switchLangPath(pathname: string, lang: Lang): string {
  const rest = pathname.replace(/^\/(en|ne)(?=\/|$)/, "");
  return `/${lang}${rest}`;
}
