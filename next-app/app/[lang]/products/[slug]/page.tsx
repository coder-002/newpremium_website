import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import AtmPage from "@/components/pages/AtmPage";
import CbsLitePage from "@/components/pages/CbsLitePage";
import CbsPage from "@/components/pages/CbsPage";
import MobilePage from "@/components/pages/MobilePage";
import SmsPage from "@/components/pages/SmsPage";
import TabletPage from "@/components/pages/TabletPage";
import { type Lang, hasLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { type PageKey, type ProductSlug, PRODUCT_SLUGS } from "@/lib/routes";

const PRODUCTS: Record<ProductSlug, { page: PageKey; Component: ComponentType<{ lang: Lang }> }> = {
  "premium-cbs": { page: "cbs", Component: CbsPage },
  "premium-cbs-lite": { page: "cbs-lite", Component: CbsLitePage },
  "mobile-banking": { page: "mobile", Component: MobilePage },
  "atm-banking": { page: "atm", Component: AtmPage },
  "sms-banking": { page: "sms", Component: SmsPage },
  "mobile-collector": { page: "tablet", Component: TabletPage },
};

const isSlug = (slug: string): slug is ProductSlug => slug in PRODUCTS;

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/products/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  return hasLang(lang) && isSlug(slug) ? pageMetadata(lang, PRODUCTS[slug].page) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/products/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLang(lang) || !isSlug(slug)) notFound();
  const { Component } = PRODUCTS[slug];
  return <Component lang={lang} />;
}
