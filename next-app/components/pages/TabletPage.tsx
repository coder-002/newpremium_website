// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import { type Lang, t, ta } from "@/lib/i18n";
import PageEffects from "@/components/PageEffects";

export default function TabletPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-tablet" className="page active">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <div className="page-hero-badge">{t(lang, "📋 Field collection · Real-time recording")}</div>
            <h1 className="page-hero-title">{t(lang, "Premium Mobile Collector")}</h1>
            <p className="page-hero-lead">{t(lang, "Smart Digital Collection Solution for Field Operations")}</p>
            <p className="page-hero-desc">
              {t(lang, "Premium Mobile Collector is a powerful digital collection application designed to simplify and automate field collection activities of cooperatives and financial institutions.")}
            </p>
            <p className="page-hero-desc">
              {t(lang, "Traditionally, field representatives relied on manual collection sheets, causing delays, data entry errors, incorrect account details, and challenges in maintaining accurate records. Premium Mobile Collector eliminates these limitations by enabling real-time transaction recording, reducing operational risks, and improving collection efficiency.")}
            </p>
            <p className="page-hero-desc">
              {t(lang, "With an easy-to-use mobile interface, collectors can securely record transactions, synchronize data directly with the banking system, and provide members with instant deposit and loan collection receipts at the time of collection.")}
            </p>
          </div>
          <div>
            <Image src="/assets/images/products/collector.png" width={1293} height={1216} loading="eager" className="cbs-detail-shot" alt={ta(lang, "alt", "Premium Mobile Collector handheld device printing a collection receipt")} />
          </div>
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "How it works")}</div>
          <h2 className="section-title">
            {t(lang, "Record it in the field.")}
            <br />
            {t(lang, "The member gets the receipt.")}
          </h2>
          <div className="feature-grid feature-grid-2">
            <div className="feature-item">
              <div className="feature-item-icon">📝</div>
              <div className="feature-item-title">{t(lang, "Real-time transaction recording")}</div>
              <div className="feature-item-desc">
                {t(lang, "Collectors record transactions as they happen, instead of writing them on a collection sheet and entering them later. That removes the delays, data entry errors, and incorrect account details that come with manual sheets.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔄</div>
              <div className="feature-item-title">{t(lang, "Direct sync with the banking system")}</div>
              <div className="feature-item-desc">{t(lang, "Collection data synchronizes directly with the banking system, so the institution keeps an accurate record without retyping from paper.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🧾</div>
              <div className="feature-item-title">{t(lang, "Instant deposit & loan collection receipts")}</div>
              <div className="feature-item-desc">{t(lang, "Members receive a deposit & loan receipt at the time of collection, while the collector is still with them.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">💳</div>
              <div className="feature-item-title">{t(lang, "Loan collection receipts")}</div>
              <div className="feature-item-desc">
                {t(lang, "When a collector takes a loan installment, the member gets a receipt showing the amount paid, the principal and interest split, the remaining balance, and the next due date.")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
