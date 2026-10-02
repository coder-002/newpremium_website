// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import NavArea from "@/components/NavArea";
import { type Lang, t, ta } from "@/lib/i18n";
import { href } from "@/lib/routes";
import PageEffects from "@/components/PageEffects";

export default function ProductsPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-products" className="page active">
      <section className="page-hero" style={{ paddingBottom: "4rem" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: "2", padding: "0 2rem" }}>
          <div className="page-hero-badge">{t(lang, "Product Suite · Nepal-built")}</div>
          <h1 className="page-hero-title">
            {t(lang, "Every channel your")}
            <br />
            {t(lang, "institution needs.")}
          </h1>
          <p className="page-hero-desc" style={{ maxWidth: "640px" }}>
            {t(lang, "Core banking, CBS Lite, mobile, ATM, SMS, and mobile collector — each product connects to the same ledger and is built for Nepal's cooperatives, microfinances, and credit unions.")}
          </p>
        </div>
      </section>
      <section className="section products-section">
        <div className="section-inner">
          <div className="products-grid">
            <NavArea as="div" href={href(lang, "cbs")} className="product-card featured">
              <div className="product-icon product-icon-logo">
                <Image src="/assets/images/brand/premium-cbs.png" width={857} height={315} className="product-logo" alt={ta(lang, "alt", "Premium CBS")} />
              </div>
              <div className="product-title">{t(lang, "Premium CBS — Core Banking Solution")}</div>
              <div className="product-desc">
                {t(lang, "The backbone of your institution. A fully integrated, multi-branch core banking platform purpose-built for Nepal's cooperatives and microfinances. NCRA-compliant, real-time, and built to handle deposits, loans, GL, and MIS reporting.")}
              </div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Multi-Branch")}</span>
                <span className="product-feature-tag">{t(lang, "Deposit & Savings")}</span>
                <span className="product-feature-tag">{t(lang, "Loan & EMI")}</span>
                <span className="product-feature-tag">{t(lang, "NCRA Reports")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore Premium CBS →")}</span>
            </NavArea>
            <NavArea as="div" href={href(lang, "cbs-lite")} className="product-card lite">
              <span className="new-ribbon">{t(lang, "New")}</span>
              <Image src="/assets/images/brand/premium-cbs-lite.webp" width={600} height={220} className="lite-logo-card" alt={ta(lang, "alt", "Premium CBS Lite")} />
              <div className="lite-badge">{t(lang, "New Edition of Premium CBS")}</div>
              <div className="product-title">{t(lang, "Premium CBS Lite")}</div>
              <div className="product-desc">{t(lang, "The lighter, cloud-first edition of Premium CBS — the same trusted core, simplified for smaller cooperatives.")}</div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Modular")}</span>
                <span className="product-feature-tag">{t(lang, "Cloud-based")}</span>
                <span className="product-feature-tag">{t(lang, "Compliant")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore Premium CBS Lite →")}</span>
            </NavArea>
            <NavArea as="div" href={href(lang, "mobile")} className="product-card">
              <div className="product-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A7EFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2.5" width="10" height="19" rx="2" />
                  <path d="M11 18.5h2" />
                </svg>
              </div>
              <div className="product-title">{t(lang, "Mobile Banking")}</div>
              <div className="product-desc">{t(lang, "Secure mobile banking and payments for members: balances, bills, wallets, QR, and cardless ATM withdrawals.")}</div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Account Access")}</span>
                <span className="product-feature-tag">{t(lang, "Utility Payments")}</span>
                <span className="product-feature-tag">{t(lang, "QR Payments")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore Mobile Banking →")}</span>
            </NavArea>
            <NavArea as="div" href={href(lang, "atm")} className="product-card">
              <div className="product-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A7EFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <rect x="7.5" y="5" width="9" height="5.5" rx="1" />
                  <path d="M8 13.2h2.2M11 13.2h2.2M14 13.2h2M8 16.2h2.2M11 16.2h2.2M14 16.2h2" />
                </svg>
              </div>
              <div className="product-title">{t(lang, "ATM Banking — SCT Integration")}</div>
              <div className="product-desc">
                {t(lang, "Premium CBS is already integrated with Smart Choice Technologies, Nepal's ATM provider. Issue SCT debit and prepaid chip cards, reach the nationwide ATM and POS networks, and settle through the SCT report, request, and dispute portals.")}
              </div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "SCT Debit Card")}</span>
                <span className="product-feature-tag">{t(lang, "ATM & POS")}</span>
                <span className="product-feature-tag">{t(lang, "CRMS & DMS")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore ATM Banking →")}</span>
            </NavArea>
            <NavArea as="div" href={href(lang, "sms")} className="product-card">
              <div className="product-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A7EFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 16.5H9.2L5 19.5v-3H4A1.5 1.5 0 0 1 2.5 15V8A1.5 1.5 0 0 1 4 6.5z" />
                  <path d="M7 10.5h10M7 13.5h6" />
                </svg>
              </div>
              <div className="product-title">{t(lang, "SMS Banking")}</div>
              <div className="product-desc">
                {t(lang, "Text members when money moves: deposits, withdrawals, loan dues and receipts, FD maturity, recurring installments, and loan maturity. You can also send occasion wishes, news, and advertisements.")}
              </div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Deposit Alerts")}</span>
                <span className="product-feature-tag">{t(lang, "Loan Alerts")}</span>
                <span className="product-feature-tag">{t(lang, "FD Maturity")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore SMS Banking →")}</span>
            </NavArea>
            <NavArea as="div" href={href(lang, "tablet")} className="product-card">
              <div className="product-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A7EFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="3.5" width="12" height="17" rx="2" />
                  <path d="M9 3.5h6v2.2H9zM9 10.5h6M9 14h4" />
                </svg>
              </div>
              <div className="product-title">{t(lang, "Premium Mobile Collector")}</div>
              <div className="product-desc">
                {t(lang, "A digital collection app for field teams. Collectors record transactions in real time, sync directly with the banking system, and give members instant deposit and loan collection receipts.")}
              </div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Real-time Recording")}</span>
                <span className="product-feature-tag">{t(lang, "Direct Sync")}</span>
                <span className="product-feature-tag">{t(lang, "Instant Receipt")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore Mobile Collector →")}</span>
            </NavArea>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
