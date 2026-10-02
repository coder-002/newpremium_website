import { type Lang, pick, t, ta } from "@/lib/i18n";
import DemoFormClient, { type DemoFormCopy } from "./DemoFormClient";

const INSTITUTION_TYPES = ["Savings & Credit Cooperative", "Microfinance Institution", "Credit Union", "SACCOS", "Other"];
const BRANCH_RANGES = ["1 (head office only)", "2–5 branches", "6–15 branches", "16–30 branches", "30+ branches"];
const PRODUCTS = ["Premium CBS", "Premium CBS Lite", "Mobile Banking", "ATM Banking", "SMS Banking", "Premium Mobile Collector", "Full Suite"];

/** Builds the translated copy on the server so the client bundle doesn't carry the dictionary. */
export default function DemoForm({ lang }: { lang: Lang }) {
  const copy: DemoFormCopy = {
    title: pick(lang, "Schedule a Demo", "डेमो तालिका गर्नुहोस्"),
    subtitle: pick(lang, "Fill in your details — our team will reach out within one business day.", "आफ्नो विवरण भर्नुहोस् — हाम्रो टोलीले एक कार्य दिनभित्र सम्पर्क गर्नेछ।"),
    name: pick(lang, "Your name *", "तपाईंको नाम *"),
    namePh: ta(lang, "placeholder", "Rajesh Shrestha"),
    designation: pick(lang, "Designation *", "पद *"),
    designationPh: ta(lang, "placeholder", "CEO / Manager / IT Head"),
    institution: pick(lang, "Institution name *", "संस्थाको नाम *"),
    institutionPh: ta(lang, "placeholder", "Kumari Savings & Credit Cooperative"),
    institutionType: pick(lang, "Institution type *", "संस्थाको प्रकार *"),
    selectType: t(lang, "Select type"),
    institutionTypes: INSTITUTION_TYPES.map((v) => ({ value: v, label: t(lang, v) })),
    branches: pick(lang, "Number of branches", "शाखाहरूको संख्या"),
    selectRange: t(lang, "Select range"),
    branchRanges: BRANCH_RANGES.map((v) => ({ value: v, label: t(lang, v) })),
    phone: pick(lang, "Phone number *", "फोन नम्बर *"),
    phoneHint: t(lang, "We'll call to confirm your demo time."),
    email: pick(lang, "Email address", "इमेल ठेगाना"),
    products: pick(lang, "Products you're interested in", "रुचि भएका उत्पादनहरू"),
    selectProduct: pick(lang, "Select a product", "उत्पादन छान्नुहोस्"),
    productOptions: PRODUCTS.map((p) => ({ value: p, label: p === "Full Suite" ? pick(lang, "Full Suite (all products)", "सबै उत्पादनहरू") : p })),
    message: pick(lang, "Anything you'd like us to know", "थप जानकारी"),
    messagePh: ta(lang, "placeholder", "Your current system, key challenges, or specific features you're looking for…"),
    submit: pick(lang, "Send Demo Request →", "डेमो अनुरोध पठाउनुहोस् →"),
    sending: pick(lang, "Sending…", "पठाउँदै…"),
    sendError: pick(lang, "Sorry, we couldn't send your request. Please try again or call us at +977 9801905102.", "माफ गर्नुहोस्, अनुरोध पठाउन सकिएन। कृपया फेरि प्रयास गर्नुहोस् वा +977 9801905102 मा फोन गर्नुहोस्।"),
    required: pick(lang, "Please fill in all required fields.", "कृपया सबै आवश्यक फिल्डहरू भर्नुहोस्।"),
    successTitle: pick(lang, "Request received!", "अनुरोध प्राप्त भयो!"),
    successDesc: pick(lang, "Thank you. Our team will contact you within one business day to confirm your demo.", "धन्यवाद। हाम्रो टोलीले एक कार्य दिनभित्र तपाईंलाई सम्पर्क गर्नेछ।"),
    meantime: t(lang, "In the meantime, feel free to call us at"),
  };
  return <DemoFormClient copy={copy} />;
}
