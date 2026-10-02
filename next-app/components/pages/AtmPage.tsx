// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import { type Lang, t, ta } from "@/lib/i18n";
import PageEffects from "@/components/PageEffects";

export default function AtmPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-atm" className="page active">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <div className="page-hero-badge">{t(lang, "🏧 Smart Choice Technologies · Nationwide network")}</div>
            <h1 className="page-hero-title">
              {t(lang, "ATM Banking")}
              <br />
              {t(lang, "on a tested CBS.")}
            </h1>
            <p className="page-hero-desc">
              {t(lang, "Premium CBS connects to the fintech services your members expect. Smart Choice Technologies is Nepal's ATM service provider, joined to the nationwide ATM network used by commercial banks, development banks, finance companies, and cooperatives. We have already integrated SCT ATM services for our clients. If your institution wants to offer ATM service, the platform is ready and tested.")}
            </p>
          </div>
          <div>
            <Image src="/assets/images/products/atm-banking.png" width={1573} height={1000} loading="eager" className="cbs-detail-shot" alt={ta(lang, "alt", "A member inserting an SCT chip card into an ATM")} />
          </div>
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Features")}</div>
          <h2 className="section-title">
            {t(lang, "Cards, ATMs, POS,")}
            <br />
            {t(lang, "and the reports behind them.")}
          </h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-item-icon">💳</div>
              <div className="feature-item-title">{t(lang, "SCT debit chip card")}</div>
              <div className="feature-item-desc">{t(lang, "Issue an SCT debit chip card against the member account in Premium CBS, so cash withdrawal is a core transaction and not a separate register.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🏧</div>
              <div className="feature-item-title">{t(lang, "Nationwide ATM network")}</div>
              <div className="feature-item-desc">{t(lang, "Members reach the SCT ATM network used across Nepal by banks, finances, and cooperatives. Your institution does not have to build a switch of its own.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📊</div>
              <div className="feature-item-title">{t(lang, "SCT Report Portal")}</div>
              <div className="feature-item-desc">{t(lang, "Open the SCT report portal for the daily report and settlement, so card activity and the CBS ledger can be matched the same day.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🗂️</div>
              <div className="feature-item-title">{t(lang, "Customer Request Management")}</div>
              <div className="feature-item-desc">
                {t(lang, "SCT CRMS is the customer request management system. Card requests, replacements, and member follow-ups stay in one place instead of on paper at the branch.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🏦</div>
              <div className="feature-item-title">{t(lang, "Deploy your own ATM")}</div>
              <div className="feature-item-desc">{t(lang, "Place an ATM at your office or a high-traffic point. It sits on the same SCT connection already linked to Premium CBS.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🎫</div>
              <div className="feature-item-title">{t(lang, "SCT prepaid chip card")}</div>
              <div className="feature-item-desc">{t(lang, "Issue a prepaid chip card when a full deposit account is not the right product, and still keep issuance inside the institution's control.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🛍️</div>
              <div className="feature-item-title">{t(lang, "POS, ecommerce, and mobile commerce")}</div>
              <div className="feature-item-desc">{t(lang, "The same card reaches the SCT POS network, ecommerce, and mobile commerce, so members can pay beyond the ATM.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">⚖️</div>
              <div className="feature-item-title">{t(lang, "Dispute Management System")}</div>
              <div className="feature-item-desc">
                {t(lang, "SCT DMS is the dispute management system. Questioned ATM or POS transactions are raised and tracked there, with the CBS entry available for the amount and the account.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🖨️</div>
              <div className="feature-item-title">{t(lang, "Deploy your own POS")}</div>
              <div className="feature-item-desc">{t(lang, "Run your own point-of-sale device for card acceptance at the counter or with a field team, on the SCT POS network.")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section arch-section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "How it works")}</div>
          <h2 className="section-title">{t(lang, "From CBS to the SCT network.")}</h2>
          <div className="why-points" style={{ marginTop: "2rem", maxWidth: "720px" }}>
            <div className="why-point">
              <div className="why-check">1</div>
              <div>
                <div className="why-point-title">{t(lang, "Link Premium CBS to SCT")}</div>
                <div className="why-point-desc">{t(lang, "The core is already built to sit with SCT. We connect your institution so card activity, settlement, and member accounts share one platform.")}</div>
              </div>
            </div>
            <div className="why-point">
              <div className="why-check">2</div>
              <div>
                <div className="why-point-title">{t(lang, "Issue the chip card")}</div>
                <div className="why-point-desc">{t(lang, "Staff issue an SCT debit or prepaid chip card. Members then reach ATMs, POS, ecommerce, and mobile commerce. You can also deploy your own ATM or POS.")}</div>
              </div>
            </div>
            <div className="why-point">
              <div className="why-check">3</div>
              <div>
                <div className="why-point-title">{t(lang, "Settle and resolve in SCT's tools")}</div>
                <div className="why-point-desc">
                  {t(lang, "Daily reports and settlement come from the SCT Report Portal. Member requests go through CRMS. Disputed transactions go through DMS, the dispute management system.")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
