import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactPage from "@/components/pages/ContactPage";
import { hasLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  return hasLang(lang) ? pageMetadata(lang, "contact") : {};
}

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();
  return <ContactPage lang={lang} />;
}
