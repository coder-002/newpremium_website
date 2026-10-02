import type { Metadata } from "next";
import { type Lang, LANGS, pick } from "./i18n";
import { type PageKey, PAGE_PATHS } from "./routes";

const META: Record<PageKey, { title: [string, string]; description: [string, string] }> = {
  home: {
    title: ["Premium Technologies Pvt. Ltd. — Core Banking Solution Nepal", "प्रिमियम टेक्नोलोजिज प्रा. लि. — नेपालको कोर बैंकिङ समाधान"],
    description: [
      "Nepal-based provider of Premium CBS, Premium CBS Lite, mobile, ATM, and SMS banking for cooperatives, microfinance institutions, and financial organizations.",
      "सहकारी, लघुवित्त र वित्तीय संस्थाहरूका लागि Premium CBS, Premium CBS Lite, मोबाइल, ATM र SMS बैंकिङ प्रदायक नेपाली कम्पनी।",
    ],
  },
  products: {
    title: ["Products", "उत्पादनहरू"],
    description: [
      "Core banking, CBS Lite, mobile, ATM, SMS, and mobile collector — every product connects to the same ledger.",
      "कोर बैंकिङ, CBS Lite, मोबाइल, ATM, SMS र मोबाइल कलेक्टर — सबै उत्पादन एउटै लेजरमा जोडिन्छन्।",
    ],
  },
  cbs: {
    title: ["Premium CBS — Core Banking Solution", "Premium CBS — कोर बैंकिङ समाधान"],
    description: [
      "A complete cloud-based Core Banking Solution for cooperatives, microfinance institutions, and financial organizations.",
      "सहकारी, लघुवित्त र वित्तीय संस्थाहरूका लागि पूर्ण क्लाउडमा आधारित कोर बैंकिङ समाधान।",
    ],
  },
  "cbs-lite": {
    title: ["Premium CBS Lite", "Premium CBS Lite"],
    description: [
      "Seamless, efficient, and secure core banking for institutions that want to start simple.",
      "सरल रूपमा सुरु गर्न चाहने संस्थाहरूका लागि सहज, प्रभावकारी र सुरक्षित कोर बैंकिङ।",
    ],
  },
  mobile: {
    title: ["Mobile Banking", "Mobile Banking"],
    description: ["Secure, anytime-anywhere mobile banking for cooperative members.", "सहकारी सदस्यहरूका लागि सुरक्षित, जुनसुकै बेला जहाँसुकै मोबाइल बैंकिङ।"],
  },
  atm: {
    title: ["ATM Banking", "ATM Banking"],
    description: ["Connect your institution to the nationwide SCT ATM network through Premium CBS.", "Premium CBS मार्फत आफ्नो संस्थालाई राष्ट्रव्यापी SCT ATM नेटवर्कमा जोड्नुहोस्।"],
  },
  sms: {
    title: ["SMS Banking", "SMS Banking"],
    description: ["Transaction alerts and balance enquiries by SMS for every member.", "हरेक सदस्यका लागि SMS मार्फत कारोबार सूचना र ब्यालेन्स जानकारी।"],
  },
  tablet: {
    title: ["Premium Mobile Collector", "Premium Mobile Collector"],
    description: ["Digital collection app for field teams with real-time sync and instant receipts.", "वास्तविक समय सिंक र तुरुन्त रसिदसहित फिल्ड टोलीका लागि डिजिटल सङ्कलन एप।"],
  },
  about: {
    title: ["About Us", "हाम्रोबारे"],
    description: ["Premium Technologies has served Nepal's cooperatives and microfinances since 2015.", "प्रिमियम टेक्नोलोजिजले २०१५ देखि नेपालका सहकारी र लघुवित्तहरूलाई सेवा दिँदै आएको छ।"],
  },
  contact: {
    title: ["Contact & Request a Demo", "सम्पर्क र डेमो अनुरोध"],
    description: ["Schedule a Premium CBS demo or talk to our team in Tinkune, Kathmandu.", "Premium CBS डेमो तालिका गर्नुहोस् वा तिनकुने, काठमाडौंस्थित हाम्रो टोलीसँग कुरा गर्नुहोस्।"],
  },
};

export function pageMetadata(lang: Lang, page: PageKey): Metadata {
  const m = META[page];
  const title = pick(lang, ...m.title);
  return {
    title: page === "home" ? { absolute: title } : title,
    description: pick(lang, ...m.description),
    alternates: {
      canonical: `/${lang}${PAGE_PATHS[page]}`,
      languages: Object.fromEntries(LANGS.map((l) => [l, `/${l}${PAGE_PATHS[page]}`])),
    },
  };
}
