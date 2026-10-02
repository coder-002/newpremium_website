import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LANGS, hasLang, pick } from "@/lib/i18n";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-mono" });
const tiro = Tiro_Devanagari_Hindi({ subsets: ["devanagari", "latin"], weight: "400", style: ["normal", "italic"], variable: "--font-tiro" });

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLang(lang)) return {};
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://premiumtech.com.np"),
    title: {
      default: pick(lang, "Premium Technologies Pvt. Ltd. — Core Banking Solution Nepal", "प्रिमियम टेक्नोलोजिज प्रा. लि. — नेपालको कोर बैंकिङ समाधान"),
      template: pick(lang, "%s | Premium Technologies", "%s | प्रिमियम टेक्नोलोजिज"),
    },
    description: pick(
      lang,
      "Premium Technologies builds Premium CBS, a cloud-based Core Banking Solution for cooperatives, microfinance institutions, and financial organizations across Nepal.",
      "प्रिमियम टेक्नोलोजिजले नेपालभरका सहकारी, लघुवित्त र वित्तीय संस्थाहरूका लागि क्लाउडमा आधारित कोर बैंकिङ समाधान Premium CBS बनाउँछ।",
    ),
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();

  return (
    <html lang={lang} className={`${jakarta.variable} ${inter.variable} ${mono.variable} ${tiro.variable}`}>
      <body className={lang === "ne" ? "ne" : undefined}>
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
