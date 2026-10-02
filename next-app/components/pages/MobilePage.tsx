// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import { type Lang, t, ta } from "@/lib/i18n";
import PageEffects from "@/components/PageEffects";

export default function MobilePage({ lang }: { lang: Lang }) {
  return (
    <div id="page-mobile" className="page active">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <div className="page-hero-badge">📱 mBank Technologies · DevanaSoft</div>
            <h1 className="page-hero-title">{t(lang, "Mobile Banking")}</h1>
            <p className="page-hero-lead">{t(lang, "Empowering Financial Institutions with Smart & Seamless Digital Banking Experiences")}</p>
            <p className="page-hero-desc">
              {t(lang, "Premium Technologies, in collaboration with mBank Technologies Pvt. Ltd. and DevanaSoft Pvt. Ltd., delivers a complete mobile banking and payment solution designed to help cooperatives and financial institutions provide secure, convenient, and anytime-anywhere banking services to their members.")}
            </p>
            <p className="page-hero-desc">
              {t(lang, "With digital transformation becoming essential for modern financial services, our mobile banking platform enables institutions to extend their services beyond branches and deliver a faster, smarter, and more connected banking experience.")}
            </p>
          </div>
          <div className="app-stage" data-app-slider="">
            <div className="app-stage-glow" aria-hidden="true" />
            <div className="app-slides">
              <figure className="app-slide is-active" data-name="mBank" data-note="mBank Technologies">
                <Image src="/assets/images/products/mbank.png" width={704} height={957} loading="eager" alt={ta(lang, "alt", "mBank app on a phone")} />
              </figure>
              <figure className="app-slide" data-name="iSmart" data-note="DevanaSoft">
                <Image src="/assets/images/products/ismart.png" width={705} height={957} loading="eager" alt={ta(lang, "alt", "iSmart digital banking app on a phone")} />
              </figure>
            </div>
            <div className="app-stage-bar">
              <button type="button" className="app-nav" data-dir="-1" aria-label={ta(lang, "aria-label", "Previous app")}>‹</button>
              <div className="app-caption">
                <strong>mBank</strong>
                <span>mBank Technologies</span>
              </div>
              <button type="button" className="app-nav" data-dir="1" aria-label={ta(lang, "aria-label", "Next app")}>›</button>
            </div>
            <div className="app-dots">
              <button type="button" className="is-active" aria-label={ta(lang, "aria-label", "Show mBank")} />
              <button type="button" aria-label={ta(lang, "aria-label", "Show iSmart")} />
            </div>
          </div>
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Key Features")}</div>
          <h2 className="section-title">
            {t(lang, "Banking that reaches members")}
            <br />
            {t(lang, "beyond the branch.")}
          </h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-item-icon">👤</div>
              <div className="feature-item-title">{t(lang, "Account Access & Inquiry")}</div>
              <ul className="feature-list feature-item-desc">
                <li>{t(lang, "Balance & Account Statement")}</li>
                <li>{t(lang, "Loan Due & Loan Statement")}</li>
                <li>{t(lang, "Cheque Book Request")}</li>
                <li>{t(lang, "Balance Transfer")}</li>
              </ul>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">💡</div>
              <div className="feature-item-title">{t(lang, "Digital Payments & Utility Services")}</div>
              <ul className="feature-list feature-item-desc">
                <li>{t(lang, "NTC & Ncell Recharge / Bill Payments")}</li>
                <li>{t(lang, "Electricity & Drinking Water Payments")}</li>
                <li>{t(lang, "Insurance Premium Payments")}</li>
                <li>{t(lang, "DishHome / Sim TV Recharge")}</li>
                <li>{t(lang, "Flight, Internet, Movie & Hotel Booking Services")}</li>
              </ul>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">👛</div>
              <div className="feature-item-title">{t(lang, "Wallet & Fund Transfer Integration")}</div>
              <ul className="feature-list feature-item-desc">
                <li>{t(lang, "Wallet Loading (eSewa, Khalti, IME Pay, PrabhuPay & more)")}</li>
                <li>{t(lang, "ConnectIPS Direct Bank Transfer")}</li>
                <li>{t(lang, "Inter-bank Fund Transfer Services")}</li>
              </ul>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1A7EFF" strokeWidth="1.75">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <path d="M14 14h3.5v3.5H14zM18 18h3v3h-3z" />
                </svg>
              </div>
              <div className="feature-item-title">{t(lang, "QR Payment Solution")}</div>
              <ul className="feature-list feature-item-desc">
                <li>{t(lang, "Secure QR-based Payments")}</li>
                <li>{t(lang, "Digital Payment Acceptance")}</li>
                <li>{t(lang, "Fast & Cashless Transactions")}</li>
              </ul>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🏧</div>
              <div className="feature-item-title">{t(lang, "Cardless ATM Banking")}</div>
              <ul className="feature-list feature-item-desc">
                <li>{t(lang, "Cardless Cash Withdrawal")}</li>
                <li>{t(lang, "Secure OTP-Based ATM Transactions")}</li>
              </ul>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔔</div>
              <div className="feature-item-title">{t(lang, "Alerts & Notifications")}</div>
              <ul className="feature-list feature-item-desc">
                <li>{t(lang, "Deposit & Withdrawal Alerts")}</li>
                <li>{t(lang, "Loan Due Notifications")}</li>
                <li>{t(lang, "Transaction Updates")}</li>
                <li>{t(lang, "Personalized Messages & Announcements")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
