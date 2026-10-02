// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import Link from "next/link";
import { type Lang, pick, t, ta } from "@/lib/i18n";
import { href } from "@/lib/routes";
import PageEffects from "@/components/PageEffects";

const TRIAL_URL = "http://premiumcbs.com/register-trial";

type Feature = { icon: string; title: string; desc: string };
type Module = { id: string; icon: string; label: string; summary: string; features: Feature[] };

const MODULES: Module[] = [
  {
    id: "members",
    icon: "👥",
    label: "Members",
    summary: "Member registration, KYM verification, and documents in one place.",
    features: [
      { icon: "👤", title: "Member Registration & KYM", desc: "Register individual and institutional members with photo, signature, citizenship, address, family relations, and income details." },
      { icon: "✅", title: "KYM Verification", desc: "Maker-checker approval for new members and edits, so every profile is verified before accounts are opened." },
      { icon: "⏰", title: "Expired KYM Tracking", desc: "See which members need their KYM renewed and update details before records go out of date." },
      { icon: "🧾", title: "Account List & Cheques", desc: "View every account a member holds, issue cheque books, and track the status of each cheque leaf." },
    ],
  },
  {
    id: "deposits",
    icon: "🐷",
    label: "Deposits",
    summary: "Savings, fixed, and recurring deposit products with automatic interest.",
    features: [
      { icon: "💰", title: "Savings Products", desc: "Configure savings products with their own interest rates, minimum balances, and withdrawal rules." },
      { icon: "📅", title: "Fixed & Recurring Deposits", desc: "Open fixed and recurring deposits with maturity dates, installment schedules, and interest calculated automatically." },
      { icon: "🔄", title: "Account Renewal", desc: "Renew matured deposit accounts in a few clicks, carrying the balance forward to the new term." },
      { icon: "📊", title: "Installment Tracking", desc: "Track due and missed recurring deposit installments so staff can follow up on time." },
    ],
  },
  {
    id: "loans",
    icon: "💳",
    label: "Loans",
    summary: "Loan disbursement, repayment, and portfolio tracking.",
    features: [
      { icon: "🏦", title: "Disbursement & Schedules", desc: "Disburse loans and generate repayment schedules for every installment, ready to print or share with members." },
      { icon: "💵", title: "Loan Payments", desc: "Collect principal, interest, and penalty at the counter with an instant receipt and automatic ledger posting." },
      { icon: "⚠️", title: "Overdue Tracking", desc: "See overdue loans and how long they have been due, so collection teams know where to start." },
      { icon: "🔁", title: "Renew & Reschedule", desc: "Renew or reschedule a loan when terms change, with the new schedule calculated for you." },
      { icon: "👨‍👩‍👧", title: "Group Return", desc: "Record repayments for group loans in one entry instead of posting each member separately." },
      { icon: "🔗", title: "Collateral & Guarantors", desc: "Record collateral and guarantors against each loan for a complete view of the security held." },
    ],
  },
  {
    id: "share",
    icon: "📈",
    label: "Share Capital",
    summary: "Membership shares, transfers, and dividends.",
    features: [
      { icon: "🪪", title: "Open Share Account", desc: "Open share accounts for members and record share purchases with a clear certificate trail." },
      { icon: "📜", title: "Share Register", desc: "Keep an up-to-date register of every member's share holding." },
      { icon: "🔄", title: "Share Transfer", desc: "Transfer shares between members with full history of who held what and when." },
      { icon: "🎁", title: "Dividends", desc: "Calculate and distribute dividends to shareholders as a single batch." },
    ],
  },
  {
    id: "accounts",
    icon: "📒",
    label: "Accounts & GL",
    summary: "Chart of accounts, bank accounts, vouchers, and day close.",
    features: [
      { icon: "🗂️", title: "Chart of Accounts", desc: "A multi-level chart of accounts where every banking transaction posts to the right ledger automatically." },
      { icon: "🏛️", title: "Bank Accounts", desc: "Manage the institution's own bank accounts and keep their balances in step with the ledger." },
      { icon: "🧮", title: "Voucher Entry & Verification", desc: "Enter journal, payment, and receipt vouchers, then approve them through maker-checker verification." },
      { icon: "🔒", title: "Day Close & Fiscal Years", desc: "Close the day branch by branch and at head office, and manage fiscal years from one screen." },
    ],
  },
  {
    id: "operations",
    icon: "⚙️",
    label: "Operations",
    summary: "Daily counter operations, transfers, and end-of-day.",
    features: [
      { icon: "🧑‍💼", title: "Teller Transactions", desc: "Deposits, withdrawals, and loan payments at the counter, each with a printed receipt." },
      { icon: "🔀", title: "Transfers", desc: "Move funds between member accounts and between branches in real time." },
      { icon: "🌙", title: "End-of-Day Batch", desc: "Run interest and end-of-day processing as one batch, without manual journal entries." },
    ],
  },
  {
    id: "reports",
    icon: "📊",
    label: "Reports",
    summary: "Financial statements and operational reports, ready to print.",
    features: [
      { icon: "⚖️", title: "Trial Balance & Day Book", desc: "Trial balance, day book, cash book, and closing balance reports for any date range." },
      { icon: "🧾", title: "Account Statements", desc: "Statements for deposit, loan, share, and GL accounts, in English or Nepali." },
      { icon: "📆", title: "Loan Schedule & Aging", desc: "Loan schedules and aging reports that show portfolio quality at a glance." },
      { icon: "📋", title: "Transaction Reports", desc: "Deposit and loan transactions, installments, closed accounts, vouchers, and transaction summaries." },
    ],
  },
  {
    id: "admin",
    icon: "🛡️",
    label: "Administration & Audit",
    summary: "Users, roles, branches, and a complete audit trail.",
    features: [
      { icon: "🏢", title: "Organization & Branches", desc: "Set up your organization profile, logo, and branches from one place." },
      { icon: "🔑", title: "Users, Roles & Permissions", desc: "Give each staff member exactly the access they need with role-based permissions." },
      { icon: "🎛️", title: "Preferences", desc: "Tune deposit, loan, and accounting settings to match your institution's policies." },
      { icon: "🔍", title: "Audit Trail", desc: "Every transaction and admin change is logged with who did it and when." },
    ],
  },
  {
    id: "migrations",
    icon: "📥",
    label: "Data Migration",
    summary: "Bring your existing data across from your current system.",
    features: [
      { icon: "📚", title: "GL & Product Import", desc: "Import your chart of accounts and deposit and loan products to get started quickly." },
      { icon: "👥", title: "Member Import", desc: "Bring member records across in bulk instead of re-entering them by hand." },
      { icon: "🏦", title: "Account & Loan Import", desc: "Import deposit accounts, loans, and cheques with their current balances." },
      { icon: "🧾", title: "Transaction Import", desc: "Import transaction history so statements stay complete from day one." },
    ],
  },
];

export default function CbsLitePage({ lang }: { lang: Lang }) {
  return (
    <div id="page-cbs-lite" className="page active">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <Image src="/assets/images/brand/premium-cbs-lite-light.webp" width={600} height={220} loading="eager" className="lite-logo-hero" alt={ta(lang, "alt", "Premium CBS Lite")} />
            <div className="lite-launch">
              <span className="lite-launch-tag">{t(lang, "A Dozen Years of Innovation")}</span>
              {" "}{t(lang, "We proudly announce the official launch of")}
            </div>
            <div className="page-hero-badge">✨ New product</div>
            <h1 className="page-hero-title">{t(lang, "Premium CBS Lite")}</h1>
            <p className="page-hero-lead">{t(lang, "Seamless, Efficient, and Secure Core Banking Solution for the Digital Future.")}</p>
            <p className="page-hero-desc">{t(lang, "A lighter edition of Premium CBS, built on the same core for institutions that want to start simple.")}</p>
            <p className="page-hero-desc">{t(lang, "Designed to deliver simplicity, security, and full regulatory compliance.")}</p>
            <div className="page-hero-actions">
              <a className="btn-primary" href={TRIAL_URL} target="_blank" rel="noopener">{t(lang, "Start Free Trial ↗")}</a>
              <Link href={href(lang, "contact")} className="btn-ghost">{t(lang, "Request a Demo")}</Link>
            </div>
          </div>
          <div>
            <Image src="/assets/images/products/cbs-lite-tablet.webp" width={1300} height={754} loading="eager" className="cbs-detail-shot" alt={ta(lang, "alt", "Premium CBS Lite apps screen on a tablet")} />
          </div>
        </div>
      </section>
      <section className="lite-quote-band">
        <div className="lite-quote">
          <div className="lite-quote-tagline" dangerouslySetInnerHTML={{ __html: pick(lang, "Simple, strong, and secure.", "सहज, सबल र सुरक्षित") }} />
          <p className="lite-quote-text" dangerouslySetInnerHTML={{ __html: pick(lang, "Premium CBS Lite is a modern core banking system that makes everyday operations easy and secure while fully complying with regulatory requirements. Built on the same trusted core as Premium CBS, it gives financial institution and microfinance institutions everything they need to manage members, deposits, and loans from the cloud, with no hardware to set up and nothing to install.", "Premium CBS Lite — नियामक निकायका नियमहरूको पूर्ण पालना गर्दै सुरक्षा र सहजता प्रदान गर्ने आधुनिक कोर बैंकिङ प्रणाली।") }} />
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Modules")}</div>
          <h2 className="section-title">{t(lang, "Everything your institution runs on, in one system.")}</h2>
          <div className="why-cbs-grid values-grid">
            {MODULES.map((module) => (
              <div key={module.id} className="why-cbs-card">
                <div className="why-cbs-icon">{module.icon}</div>
                <div className="why-cbs-title">{t(lang, module.label)}</div>
                <div className="why-cbs-desc">{t(lang, module.summary)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Features")}</div>
          <h2 className="section-title">{t(lang, "A closer look at each module.")}</h2>
          <div className="feature-tabs" style={{ marginTop: "2rem" }}>
            {MODULES.map((module, index) => (
              <button key={module.id} className={index === 0 ? "feature-tab active" : "feature-tab"} data-tab={`lite-${module.id}`}>
                {t(lang, module.label)}
              </button>
            ))}
          </div>
          {MODULES.map((module, index) => (
            <div key={module.id} id={`tab-lite-${module.id}`} className={index === 0 ? "feature-panel active" : "feature-panel"}>
              {module.features.map((feature) => (
                <div key={feature.title} className="feature-item">
                  <div className="feature-item-icon">{feature.icon}</div>
                  <div className="feature-item-title">{t(lang, feature.title)}</div>
                  <div className="feature-item-desc">{t(lang, feature.desc)}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "What it delivers")}</div>
          <h2 className="section-title">
            {t(lang, "Creating real value")}
            <br />
            {t(lang, "for a stronger tomorrow.")}
          </h2>
          <div className="why-cbs-grid">
            <div className="why-cbs-card">
              <div className="why-cbs-title">{t(lang, "Member Service Excellence")}</div>
              <div className="why-cbs-desc">{t(lang, "Faster counter service, accurate balances, and instant statements, so members get answers without waiting.")}</div>
              <ul className="lite-points">
                <li>{t(lang, "Happier members.")}</li>
                <li>{t(lang, "Stronger cooperatives.")}</li>
              </ul>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-title">{t(lang, "Operational Efficiency")}</div>
              <div className="why-cbs-desc">{t(lang, "Automated interest, day-end, and reports replace manual work, so staff spend less time on paperwork.")}</div>
              <ul className="lite-points">
                <li>{t(lang, "Simpler processes.")}</li>
                <li>{t(lang, "Greater productivity.")}</li>
              </ul>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-title">{t(lang, "Better Governance & Compliance")}</div>
              <div className="why-cbs-desc">{t(lang, "Role-based access, audit trails, and regulator-ready reports keep every transaction controlled and traceable.")}</div>
              <ul className="lite-points">
                <li>{t(lang, "Safer operations.")}</li>
                <li>{t(lang, "Lasting trust.")}</li>
              </ul>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-title">{t(lang, "Scalable Digital Transformation")}</div>
              <div className="why-cbs-desc">{t(lang, "Start with the essentials and add mobile, SMS, and more branches as the cooperative grows.")}</div>
              <ul className="lite-points">
                <li>{t(lang, "Ready for today.")}</li>
                <li>{t(lang, "Built for tomorrow.")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "How it is built")}</div>
          <h2 className="section-title">{t(lang, "Modular, secure, and cloud-based.")}</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-item-icon">🧩</div>
              <div className="feature-item-title">{t(lang, "Modular")}</div>
              <div className="feature-item-tag">{t(lang, "Individually customizable.")}</div>
              <div className="feature-item-desc">{t(lang, "Choose only the modules you need, such as deposits, loans, or share capital, and turn on more when you're ready.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon"><Image src="/assets/images/icons/encryption.svg" width={24} height={24} alt="" unoptimized /></div>
              <div className="feature-item-title">{t(lang, "Secure")}</div>
              <div className="feature-item-tag">{t(lang, "Protected by encryption architecture.")}</div>
              <div className="feature-item-desc">{t(lang, "Data is encrypted in transit and at rest, with user permissions and daily backups to keep member records safe.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon"><Image src="/assets/images/icons/cloud-svgrepo-com.svg" width={24} height={24} alt="" unoptimized /></div>
              <div className="feature-item-title">{t(lang, "A Complete Cloud Based")}</div>
              <div className="feature-item-tag">{t(lang, "No hardware setup & installation, instant access.")}</div>
              <div className="feature-item-desc">{t(lang, "No servers to buy and nothing to install. Log in from any browser and start working the same day.")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="lite-strip-wrap" style={{ paddingTop: "1rem" }}>
        <div className="lite-strip">
          <div>
            <div className="lite-strip-title">{t(lang, "Try Premium CBS Lite free")}</div>
            <div className="lite-strip-desc">{t(lang, "Sign up for a free trial and explore every module with your own team. No hardware, no installation.")}</div>
          </div>
          <div className="lite-banner-actions">
            <a className="btn-primary" href={TRIAL_URL} target="_blank" rel="noopener">{t(lang, "Start Free Trial ↗")}</a>
            <Link href={href(lang, "contact")} className="btn-ghost">{t(lang, "Request a Demo")}</Link>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
