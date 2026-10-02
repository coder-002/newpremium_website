// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import { type Lang, t, ta } from "@/lib/i18n";
import PageEffects from "@/components/PageEffects";

export default function SmsPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-sms" className="page active">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <div className="page-hero-badge">{t(lang, "💬 Alerts · Notices · Any handset")}</div>
            <h1 className="page-hero-title">
              {t(lang, "SMS Banking")}
              <br />
              {t(lang, "that reaches the member first.")}
            </h1>
            <p className="page-hero-desc">
              {t(lang, "A mobile phone is one of the most personal channels an institution has. More organizations are using text to improve how they talk to customers. In a crowded financial market, SMS gives you a faster way to exchange information and to keep that work orderly. Households and businesses both see the transactions they have done with you, quickly and in a secured way.")}
            </p>
          </div>
          <div>
            <Image src="/assets/images/products/sms-banking.png" width={1536} height={1024} loading="eager" className="cbs-detail-shot" alt={ta(lang, "alt", "SMS Banking on a phone, showing balance, transaction alert, and mini statement messages")} />
          </div>
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Features")}</div>
          <h2 className="section-title">
            {t(lang, "Alerts for the transaction,")}
            <br />
            {t(lang, "and notices you write yourself.")}
          </h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-item-icon">💰</div>
              <div className="feature-item-title">{t(lang, "Deposit alerts")}</div>
              <div className="feature-item-desc">
                {t(lang, "When a deposit is posted in Premium CBS, the member can receive a text confirming the amount. The household sees the credit without waiting for a passbook update.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🏧</div>
              <div className="feature-item-title">{t(lang, "Withdrawal alerts")}</div>
              <div className="feature-item-desc">{t(lang, "A withdrawal — at the counter, on a card, or from a collector — can trigger its own alert, so the member knows the debit came from their account.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📅</div>
              <div className="feature-item-title">{t(lang, "Loan due and receipt alerts")}</div>
              <div className="feature-item-desc">{t(lang, "Remind the member before an installment is due, and confirm when the receipt is posted. Both messages come from the loan already sitting in CBS.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📆</div>
              <div className="feature-item-title">{t(lang, "FD maturity alerts")}</div>
              <div className="feature-item-desc">{t(lang, "Fixed deposits mature on a date the core already knows. The SMS goes out around that date so the member can renew or withdraw on time.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔁</div>
              <div className="feature-item-title">{t(lang, "Recurring installment alerts")}</div>
              <div className="feature-item-desc">{t(lang, "Recurring deposits have a schedule. Members get a reminder for the next installment instead of discovering a missed payment at the branch.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📋</div>
              <div className="feature-item-title">{t(lang, "Loan maturity alerts")}</div>
              <div className="feature-item-desc">{t(lang, "When a loan reaches maturity, the member is told before the date passes, with enough notice to close, renew, or talk to the branch.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">✉️</div>
              <div className="feature-item-title">{t(lang, "Wishes, news, and advertisements")}</div>
              <div className="feature-item-desc">
                {t(lang, "Compose occasion wishes, news, and advertisement notifications yourself. The same text service carries both automatic alerts and the messages your institution writes.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔒</div>
              <div className="feature-item-title">{t(lang, "Secured, and tied to the member")}</div>
              <div className="feature-item-desc">
                {t(lang, "Messages go to the mobile number on the member record. Staff do not keep a second phone list, and the member receives transaction information in a secured way.")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section arch-section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "How it works")}</div>
          <h2 className="section-title">{t(lang, "From the ledger to the handset.")}</h2>
          <div className="why-points" style={{ marginTop: "2rem", maxWidth: "720px" }}>
            <div className="why-point">
              <div className="why-check">1</div>
              <div>
                <div className="why-point-title">{t(lang, "Use the number already on the member")}</div>
                <div className="why-point-desc">
                  {t(lang, "The mobile number captured with the member is the destination. Households and businesses receive news of their own transactions, not a general broadcast.")}
                </div>
              </div>
            </div>
            <div className="why-point">
              <div className="why-check">2</div>
              <div>
                <div className="why-point-title">{t(lang, "Turn on the alerts you need")}</div>
                <div className="why-point-desc">
                  {t(lang, "Choose deposit, withdrawal, loan due, loan receipt, FD maturity, recurring installment, and loan maturity alerts. Add occasion wishes, news, and advertisements when you want to write them.")}
                </div>
              </div>
            </div>
            <div className="why-point">
              <div className="why-check">3</div>
              <div>
                <div className="why-point-title">{t(lang, "Send as the transaction posts")}</div>
                <div className="why-point-desc">{t(lang, "Premium CBS raises the message when the entry is made, so the member hears about the movement quickly, without a separate typing job at the branch.")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
