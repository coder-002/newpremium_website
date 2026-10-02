import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutPage from "@/components/pages/AboutPage";
import { hasLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return hasLang(lang) ? pageMetadata(lang, "about") : {};
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();
  return <AboutPage lang={lang} />;
}
