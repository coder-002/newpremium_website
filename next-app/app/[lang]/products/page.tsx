import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductsPage from "@/components/pages/ProductsPage";
import { hasLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  return hasLang(lang) ? pageMetadata(lang, "products") : {};
}

export default async function Page({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();
  return <ProductsPage lang={lang} />;
}
