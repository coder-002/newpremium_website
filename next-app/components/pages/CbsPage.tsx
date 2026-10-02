// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Lang, t, ta } from "@/lib/i18n";
import { href } from "@/lib/routes";
import PageEffects from "@/components/PageEffects";

export default function CbsPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-cbs" className="page active">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <Image src="/assets/images/brand/premium-cbs.png" width={857} height={315} loading="eager" className="cbs-hero-logo" alt={ta(lang, "alt", "Premium CBS")} />
            <div className="page-hero-badge">{t(lang, "🛡️ NCRA Compliant · Nepal-built")}</div>
            <h1 className="page-hero-title">
              {t(lang, "Premium CBS")}
              <br />
              {t(lang, "Core Banking Solution")}
            </h1>
            <p className="page-hero-desc">
              Premium CBS is a complete cloud-based Core Banking Solution designed for cooperatives, microfinance institutions, and financial organizations. With integrated modules for deposits, lending, customer management, digital banking, reporting, and third-party integrations. Premium CBS delivers secure, scalable, and future-ready banking solutions through one powerful platform.
            </p>
            <div className="page-hero-actions">
              <Link href={href(lang, "contact")} className="btn-primary">{t(lang, "Request a Demo")}</Link>
              <Link href={href(lang, "contact")} className="btn-ghost">{t(lang, "Talk to Sales")}</Link>
            </div>
          </div>
          <div>
            <Image src="/assets/images/products/cbs-devices.webp" width={1536} height={1024} loading="eager" className="cbs-detail-shot" alt={ta(lang, "alt", "Premium CBS dashboard on a laptop, tablet, and phone")} />
          </div>
        </div>
      </section>
      <section className="section why-section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Premium CBS")}</div>
          <h2 className="section-title">{t(lang, "Why Premium CBS ?")}</h2>
          <div className="why-cbs-grid">
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/experience.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "15+ Years Expertise")}</div>
              <div className="why-cbs-desc">{t(lang, "Experienced team with deep financial technology knowledge")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/cloud-svgrepo-com.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "Secure Cloud Platform")}</div>
              <div className="why-cbs-desc">{t(lang, "Reliable, scalable, and accessible banking infrastructure")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/cooperative.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "Cooperative Banking Solution")}</div>
              <div className="why-cbs-desc">{t(lang, "Built specifically for cooperatives & microfinance institutions")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/secure.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "Advanced Security")}</div>
              <div className="why-cbs-desc">{t(lang, "Multi-layer protection with backup and approval controls")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🔄</div>
              <div className="why-cbs-title">{t(lang, "Hassle-free migration")}</div>
              <div className="why-cbs-desc">{t(lang, "Hassle-free migration from existing systems")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/setting.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "Best Implementation")}</div>
              <div className="why-cbs-desc">{t(lang, "Professional deployment, training, and support")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/attachment-2-svgrepo-com.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "Open Integration")}</div>
              <div className="why-cbs-desc">{t(lang, "Connect with fintech and digital services")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon"><Image src="/assets/images/icons/support-svgrepo-com.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="why-cbs-title">{t(lang, "24×7 Support")}</div>
              <div className="why-cbs-desc">{t(lang, "Continuous assistance through multiple channels")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section feature-matrix">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Features")}</div>
          <h2 className="section-title">
            {t(lang, "Built for every function")}
            <br />
            {t(lang, "of your institution.")}
          </h2>
          <div className="feature-tabs" style={{ marginTop: "2rem" }}>
            <button className="feature-tab active" data-tab="deposits">{t(lang, "Deposits & Savings")}</button>
            <button className="feature-tab" data-tab="loans">{t(lang, "Loans & Credit")}</button>
            <button className="feature-tab" data-tab="accounting">{t(lang, "Accounting & GL")}</button>
            <button className="feature-tab" data-tab="members">{t(lang, "Member Management")}</button>
            <button className="feature-tab" data-tab="reports">{t(lang, "Reports & Compliance")}</button>
          </div>
          <div id="tab-deposits" className="feature-panel active">
            <div className="feature-item">
              <div className="feature-item-icon"><Image src="/assets/images/icons/deposit.svg" width={24} height={24} alt="" unoptimized /></div>
              <div className="feature-item-title">{t(lang, "Fixed & Recurring Deposits")}</div>
              <div className="feature-item-desc">
                {t(lang, "Configure FD and RD products with custom tenures, interest rates, and auto-renewal rules. Interest calculation is automatic and posted to GL in real time.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon"><Image src="/assets/images/icons/saving-svgrepo-com.svg" width={24} height={24} alt="" unoptimized /></div>
              <div className="feature-item-title">{t(lang, "Savings Account Management")}</div>
              <div className="feature-item-desc">{t(lang, "Multiple savings account types — mandatory, voluntary, children's, and group savings — each with configurable interest slabs and withdrawal limits.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon"><Image src="/assets/images/icons/investment-money-capital-funds-svgrepo-com.svg" width={24} height={24} alt="" unoptimized /></div>
              <div className="feature-item-title">{t(lang, "Share Capital Management")}</div>
              <div className="feature-item-desc">
                {t(lang, "Track member share purchases, transfers, refunds, and dividend distribution. Supports cooperative and SACCOS share structures as per Nepal Cooperative Act.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔄</div>
              <div className="feature-item-title">{t(lang, "Inter-Account Transfers")}</div>
              <div className="feature-item-desc">{t(lang, "Real-time fund transfers between member accounts, branches, or to external banks. Full transaction history with timestamps and teller IDs.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📅</div>
              <div className="feature-item-title">{t(lang, "Auto-Interest Posting")}</div>
              <div className="feature-item-desc">{t(lang, "Scheduled daily, monthly, or quarterly interest posting with automatic GL entries. No manual journal entries required for routine interest accrual.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🧾</div>
              <div className="feature-item-title">{t(lang, "Passbook & Statement")}</div>
              <div className="feature-item-desc">{t(lang, "Print-ready passbook templates and digital statements with full transaction history. Supports both English and Nepali printing.")}</div>
            </div>
          </div>
          <div id="tab-loans" className="feature-panel">
            <div className="feature-item">
              <div className="feature-item-icon">📋</div>
              <div className="feature-item-title">{t(lang, "Loan Application & Appraisal")}</div>
              <div className="feature-item-desc">
                {t(lang, "Digital loan application capture with customizable appraisal checklists. Supports individual and group loans, including agriculture, business, and personal loan types.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📈</div>
              <div className="feature-item-title">{t(lang, "EMI Schedule Generation")}</div>
              <div className="feature-item-desc">{t(lang, "Automatic EMI calculation with flat, diminishing balance, or equal principal methods. Generate loan schedules instantly and email to members.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">⚠️</div>
              <div className="feature-item-title">{t(lang, "Overdue & NPA Tracking")}</div>
              <div className="feature-item-desc">{t(lang, "Real-time overdue loan tracking with aging buckets (0–30, 31–60, 61–90, 90+ days). NPA classification follows NCRA directives automatically.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔗</div>
              <div className="feature-item-title">{t(lang, "Collateral Management")}</div>
              <div className="feature-item-desc">{t(lang, "Record and track collateral against loans — property, gold, FD lien, guarantor details. Collateral revaluation schedules and expiry alerts included.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">💳</div>
              <div className="feature-item-title">{t(lang, "Partial Payment & Prepayment")}</div>
              <div className="feature-item-desc">{t(lang, "Accept partial EMI payments, advance payments, and full prepayments with automatic recalculation of remaining schedule and interest rebate.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📝</div>
              <div className="feature-item-title">{t(lang, "Loan Document Generation")}</div>
              <div className="feature-item-desc">{t(lang, "Auto-generate sanction letters, agreement templates, demand notices, and repayment cards. Fully customizable with your institution's letterhead.")}</div>
            </div>
          </div>
          <div id="tab-accounting" className="feature-panel">
            <div className="feature-item">
              <div className="feature-item-icon">📒</div>
              <div className="feature-item-title">{t(lang, "General Ledger")}</div>
              <div className="feature-item-desc">{t(lang, "Full double-entry GL with multi-level chart of accounts. Every banking transaction auto-posts to the appropriate GL account without manual entries.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🏢</div>
              <div className="feature-item-title">{t(lang, "Multi-Branch Consolidation")}</div>
              <div className="feature-item-desc">{t(lang, "Consolidate financials from all branches in real time. View branch-wise P&L, balance sheet, and trial balance from head office.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📅</div>
              <div className="feature-item-title">{t(lang, "Day-End & Month-End Close")}</div>
              <div className="feature-item-desc">
                {t(lang, "Structured EOD process with automated balance checks, interest posting, and provision entries. Month-end close generates financial statements automatically.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">💱</div>
              <div className="feature-item-title">{t(lang, "Expense & Income Vouchers")}</div>
              <div className="feature-item-desc">
                {t(lang, "Record operational expenses and non-banking income with department and cost-center coding. Approval workflows for expenses above configurable thresholds.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📊</div>
              <div className="feature-item-title">{t(lang, "Financial Statements")}</div>
              <div className="feature-item-desc">{t(lang, "Auto-generated Balance Sheet, Income Statement, Trial Balance, and Cash Flow Statement — NCRA and cooperative act format ready.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔍</div>
              <div className="feature-item-title">{t(lang, "Full Audit Trail")}</div>
              <div className="feature-item-desc">
                {t(lang, "Every transaction, modification, and reversal is logged with user ID, timestamp, and before/after values. Tamper-proof and available for regulatory inspection.")}
              </div>
            </div>
          </div>
          <div id="tab-members" className="feature-panel">
            <div className="feature-item">
              <div className="feature-item-icon">👤</div>
              <div className="feature-item-title">Member Onboarding & KYM</div>
              <div className="feature-item-desc">Complete digital member registration with KYM document capture, photo, signature, and citizenship scan. Supports individual, joint, and group member types.</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🆔</div>
              <div className="feature-item-title">{t(lang, "Member ID & Account Linking")}</div>
              <div className="feature-item-desc">{t(lang, "Unique member IDs linked to all their accounts, loans, shares, and transaction history. Full 360° member view in one screen.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">👨‍👩‍👧</div>
              <div className="feature-item-title">{t(lang, "Group & Committee Management")}</div>
              <div className="feature-item-desc">{t(lang, "Manage member groups, committees, and boards. Track group savings, group loans, and attendance records for group meetings.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📞</div>
              <div className="feature-item-title">{t(lang, "Member Communication Log")}</div>
              <div className="feature-item-desc">{t(lang, "Record calls, visits, and notices against member profiles. Automated SMS and email alerts for dues, maturity, and announcements.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔒</div>
              <div className="feature-item-title">{t(lang, "Role-Based Access Control")}</div>
              <div className="feature-item-desc">
                {t(lang, "Define user roles — teller, supervisor, manager, auditor — with granular permission sets. No user can access what they're not authorized to see or modify.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📍</div>
              <div className="feature-item-title">{t(lang, "Branch & Department Setup")}</div>
              <div className="feature-item-desc">{t(lang, "Configure unlimited branches, sub-branches, and departments with individual bank accounts, staff assignments, and independent operating limits.")}</div>
            </div>
          </div>
          <div id="tab-reports" className="feature-panel">
            <div className="feature-item">
              <div className="feature-item-icon"><Image src="/assets/images/icons/bank-svgrepo-com.svg" width={24} height={24} alt="" unoptimized /></div>
              <div className="feature-item-title">{t(lang, "NCRA Regulatory Returns")}</div>
              <div className="feature-item-desc">{t(lang, "Auto-generate NCRA quarterly and annual returns in the prescribed formats. Deposit and loan return templates updated to match current NCRA circulars.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📊</div>
              <div className="feature-item-title">{t(lang, "MIS Dashboard")}</div>
              <div className="feature-item-desc">{t(lang, "Live management information system with branch-wise performance, loan portfolio health, deposit growth, and member activity — updated in real time.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📉</div>
              <div className="feature-item-title">{t(lang, "Portfolio Quality Reports")}</div>
              <div className="feature-item-desc">
                {t(lang, "PAR (Portfolio at Risk) ratios by product, branch, and loan officer. Provision requirement calculations and write-off schedules following NCRA guidelines.")}
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🧮</div>
              <div className="feature-item-title">{t(lang, "Custom Report Builder")}</div>
              <div className="feature-item-desc">{t(lang, "Build your own reports from any data point in CBS — select fields, apply filters, group by branch or product, and export to Excel or PDF.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">📆</div>
              <div className="feature-item-title">{t(lang, "Scheduled Report Delivery")}</div>
              <div className="feature-item-desc">{t(lang, "Set up automated daily, weekly, or monthly reports to be emailed to management and board members — no manual generation needed.")}</div>
            </div>
            <div className="feature-item">
              <div className="feature-item-icon">🔎</div>
              <div className="feature-item-title">{t(lang, "Internal Audit Reports")}</div>
              <div className="feature-item-desc">{t(lang, "Transaction exception reports, teller reconciliation, and dormant account summaries designed for internal and external audit support.")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section arch-section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Architecture")}</div>
          <h2 className="section-title">{t(lang, "How Premium CBS Connects Your Financial Ecosystem")}</h2>
          <div className="arch-grid" style={{ marginTop: "3rem" }}>
            <div>
              <p className="arch-lead">
                {t(lang, "Premium CBS is designed as the central technology platform for modern financial institutions, connecting every banking channel and operational service through a secure, real-time, and unified ecosystem.")}
              </p>
              <p className="arch-lead">
                {t(lang, "From branch operations to digital banking services, every transaction flows through a single reliable core engine, ensuring consistency, accuracy, security, and seamless connectivity across all channels.")}
              </p>
              <div className="arch-engine">
                <div className="arch-card-title">{t(lang, "Real-Time Core Banking Engine")}</div>
                <p className="arch-card-desc">
                  {t(lang, "At the center of the ecosystem is the Premium CBS Core Engine, which acts as a single source of truth for all financial transactions. All customer-facing channels and operational modules communicate with the core system to ensure real-time processing and accurate data synchronization.")}
                </p>
                <div className="arch-channels-label">{t(lang, "Connected Channels")}</div>
                <ul className="arch-channels">
                  <li>
                    <strong>{t(lang, "Teller Operations")}</strong>
                    {" "}{t(lang, "— Branch counter transactions")}
                  </li>
                  <li>
                    <strong>{t(lang, "Mobile Banking")}</strong>
                    {" "}{t(lang, "— Digital banking services")}
                  </li>
                  <li>
                    <strong>{t(lang, "ATM Integration")}</strong>
                    {" "}{t(lang, "— SCT ATM network connectivity")}
                  </li>
                  <li>
                    <strong>{t(lang, "SMS Banking")}</strong>
                    {" "}{t(lang, "— Alerts and customer communication")}
                  </li>
                  <li>
                    <strong>{t(lang, "Mobile Collector")}</strong>
                    {" "}{t(lang, "— Field collection management")}
                  </li>
                  <li>
                    <strong>{t(lang, "Regulatory Reporting")}</strong>
                    {" "}{t(lang, "— Compliance and reporting requirements")}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <svg className="arch-diagram" viewBox="0 0 480 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={ta(lang, "aria-label", "Premium CBS at the center, connected in real time to Teller, Mobile, ATM, SMS, Collector, and Regulatory Reporting")}>
                <defs>
                  <linearGradient id="archCore" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#061A5F" />
                    <stop offset="1" stopColor="#0E3A8A" />
                  </linearGradient>
                  <pattern id="archDots" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#1A7EFF" opacity="0.12" />
                  </pattern>
                  <filter id="archShadow" x="-20%" y="-20%" width="140%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#061A5F" floodOpacity="0.08" />
                  </filter>
                  <filter id="archGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#1A7EFF" floodOpacity="0.35" />
                  </filter>
                </defs>
                <rect width="480" height="440" rx="22" fill="#F5F8FD" />
                <rect width="480" height="440" rx="22" fill="url(#archDots)" />
                <g fill="none" strokeWidth="2" strokeLinecap="round">
                  <path className="arch-flow" d="M85 100 C85 140 200 130 200 168" stroke="#1A7EFF" />
                  <path className="arch-flow" d="M240 100 L240 168" stroke="#1A7EFF" />
                  <path className="arch-flow" d="M395 100 C395 140 280 130 280 168" stroke="#1A7EFF" />
                  <path className="arch-flow" d="M85 320 C85 285 200 300 200 264" stroke="#10B981" />
                  <path className="arch-flow" d="M240 320 L240 264" stroke="#10B981" />
                  <path className="arch-flow" d="M395 320 C395 285 280 300 280 264" stroke="#10B981" />
                </g>
                <g style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                  <rect x="206" y="126" width="68" height="17" rx="8.5" fill="white" stroke="#1A7EFF" strokeOpacity="0.35" />
                  <text x="240" y="138" textAnchor="middle" fill="#1A7EFF" fontSize="9" fontWeight="700">{t(lang, "Real-time")}</text>
                  <rect x="210" y="283" width="60" height="17" rx="8.5" fill="white" stroke="#10B981" strokeOpacity="0.4" />
                  <text x="240" y="295" textAnchor="middle" fill="#0F9F6E" fontSize="9" fontWeight="700">{t(lang, "Synced")}</text>
                </g>
                <rect className="arch-pulse" x="150" y="158" width="180" height="116" rx="24" fill="none" stroke="#1A7EFF" strokeWidth="1.5" />
                <rect x="160" y="168" width="160" height="96" rx="18" fill="url(#archCore)" filter="url(#archGlow)" />
                <path d="M184 168 H296" stroke="#FFB41D" strokeWidth="3" strokeLinecap="round" />
                <text x="240" y="208" textAnchor="middle" fill="white" fontSize="17" style={{ fontFamily: "var(--font-jakarta), sans-serif" }} fontWeight="800">{t(lang, "Premium CBS")}</text>
                <text x="240" y="226" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Core Engine")}</text>
                <circle cx="199" cy="245" r="3.5" fill="#10B981" />
                <text x="207" y="248.5" fill="rgba(255,255,255,0.8)" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Live · Single ledger")}</text>
                <g style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                  <g transform="translate(20 36)">
                    <rect width="130" height="64" rx="14" fill="white" stroke="#E2E8F0" filter="url(#archShadow)" />
                    <circle cx="26" cy="32" r="15" fill="#EAF3FF" />
                    <g transform="translate(18.8 24.8) scale(0.6)" fill="none" stroke="#1A7EFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M8 20h8M12 16v4" />
                    </g>
                    <text x="50" y="29" fill="#061A5F" fontSize="12" fontWeight="700">{t(lang, "Teller")}</text>
                    <text x="50" y="45" fill="#6B7280" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Branch counter")}</text>
                  </g>
                  <g transform="translate(175 36)">
                    <rect width="130" height="64" rx="14" fill="white" stroke="#E2E8F0" filter="url(#archShadow)" />
                    <circle cx="26" cy="32" r="15" fill="#EAF3FF" />
                    <g transform="translate(18.8 24.8) scale(0.6)" fill="none" stroke="#1A7EFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2.5" width="10" height="19" rx="2" />
                      <path d="M11 18.5h2" />
                    </g>
                    <text x="50" y="29" fill="#061A5F" fontSize="12" fontWeight="700">{t(lang, "Mobile")}</text>
                    <text x="50" y="45" fill="#6B7280" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Digital banking")}</text>
                  </g>
                  <g transform="translate(330 36)">
                    <rect width="130" height="64" rx="14" fill="white" stroke="#E2E8F0" filter="url(#archShadow)" />
                    <circle cx="26" cy="32" r="15" fill="#EAF3FF" />
                    <g transform="translate(18.8 24.8) scale(0.6)" fill="none" stroke="#1A7EFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="10" rx="2" />
                      <path d="M7 14v6h10v-6M10 17h4" />
                    </g>
                    <text x="50" y="29" fill="#061A5F" fontSize="12" fontWeight="700">{t(lang, "ATM")}</text>
                    <text x="50" y="45" fill="#6B7280" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "SCT network")}</text>
                  </g>
                  <g transform="translate(20 320)">
                    <rect width="130" height="64" rx="14" fill="white" stroke="#E2E8F0" filter="url(#archShadow)" />
                    <circle cx="26" cy="32" r="15" fill="#E7F8F1" />
                    <g transform="translate(18.8 24.8) scale(0.6)" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5h16v11H9l-5 4z" />
                    </g>
                    <text x="50" y="29" fill="#061A5F" fontSize="12" fontWeight="700">{t(lang, "SMS")}</text>
                    <text x="50" y="45" fill="#6B7280" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Alerts & comms")}</text>
                  </g>
                  <g transform="translate(175 320)">
                    <rect width="130" height="64" rx="14" fill="white" stroke="#E2E8F0" filter="url(#archShadow)" />
                    <circle cx="26" cy="32" r="15" fill="#E7F8F1" />
                    <g transform="translate(18.8 24.8) scale(0.6)" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="4" width="14" height="17" rx="2" />
                      <path d="M9 4V3h6v1M9 10h6M9 14h4" />
                    </g>
                    <text x="50" y="29" fill="#061A5F" fontSize="12" fontWeight="700">{t(lang, "Collector")}</text>
                    <text x="50" y="45" fill="#6B7280" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Field collection")}</text>
                  </g>
                  <g transform="translate(330 320)">
                    <rect width="130" height="64" rx="14" fill="white" stroke="#E2E8F0" filter="url(#archShadow)" />
                    <circle cx="26" cy="32" r="15" fill="#E7F8F1" />
                    <g transform="translate(18.8 24.8) scale(0.6)" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
                    </g>
                    <text x="50" y="29" fill="#061A5F" fontSize="12" fontWeight="700">{t(lang, "Reporting")}</text>
                    <text x="50" y="45" fill="#6B7280" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "Regulatory")}</text>
                  </g>
                </g>
                <g style={{ fontFamily: "var(--font-inter), sans-serif" }} fontSize="10" fill="#6B7280">
                  <path d="M112 414 H132" stroke="#1A7EFF" strokeWidth="2" strokeLinecap="round" />
                  <text x="138" y="417.5">{t(lang, "Customer channels")}</text>
                  <path d="M272 414 H292" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                  <text x="298" y="417.5">{t(lang, "Operations & reporting")}</text>
                </g>
              </svg>
              <p className="arch-tagline">
                <span>{t(lang, "Premium CBS — More Than Core Banking.")}</span>{" "}
                <span className="arch-tagline-accent">{t(lang, "A Complete Digital Banking Ecosystem.")}</span>
              </p>
            </div>
          </div>
          <div className="arch-cards">
            <div className="arch-card">
              <div className="arch-card-title">{t(lang, "Web-Based & Centralized Platform")}</div>
              <p className="arch-card-desc">
                {t(lang, "Access Premium CBS through modern web browsers without requiring local software installation on individual computers. The centralized architecture simplifies management, improves accessibility, and enables institutions to operate efficiently from multiple locations.")}
              </p>
              <ul className="arch-checks">
                <li>{t(lang, "Browser-based application")}</li>
                <li>{t(lang, "Centralized database management")}</li>
                <li>{t(lang, "Multi-branch accessibility")}</li>
                <li>{t(lang, "Reduced infrastructure complexity")}</li>
              </ul>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">{t(lang, "Cloud-Ready & Flexible Deployment")}</div>
              <p className="arch-card-desc">
                {t(lang, "Premium CBS supports flexible deployment models based on institutional requirements. Organizations can deploy the solution on their own infrastructure or utilize secure cloud hosting for improved scalability, availability, and operational efficiency.")}
              </p>
              <ul className="arch-checks">
                <li>{t(lang, "Cloud-based architecture")}</li>
                <li>{t(lang, "On-premise deployment support")}</li>
                <li>{t(lang, "Scalable infrastructure")}</li>
                <li>{t(lang, "Secure data management")}</li>
              </ul>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">{t(lang, "Secure Data & Automated Backup")}</div>
              <p className="arch-card-desc">
                {t(lang, "Premium CBS is designed with a strong focus on data security and reliability. Automated backup mechanisms help protect critical financial information and support business continuity.")}
              </p>
              <ul className="arch-checks">
                <li>{t(lang, "Automated data backup")}</li>
                <li>{t(lang, "Secure transaction processing")}</li>
                <li>{t(lang, "Reliable recovery mechanism")}</li>
                <li>{t(lang, "Protection against data loss")}</li>
              </ul>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">{t(lang, "Designed for Nepal’s Banking Environment")}</div>
              <p className="arch-card-desc">
                {t(lang, "Premium CBS is built considering the practical operational requirements of financial institutions in Nepal, including connectivity challenges in remote locations and the need for reliable banking operations.")}
              </p>
              <ul className="arch-checks">
                <li>{t(lang, "Optimized for low-bandwidth environments")}</li>
                <li>{t(lang, "Supports remote branch operations")}</li>
                <li>{t(lang, "Reliable performance over different network conditions")}</li>
                <li>{t(lang, "Suitable for cooperatives and financial institutions across Nepal")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="compliance-section">
        <div className="compliance-inner">
          <div className="section-eyebrow">{t(lang, "Compliance & Security")}</div>
          <h2 className="section-title">{t(lang, "Built to meet Nepal's regulatory standards.")}</h2>
          <p className="section-desc">{"Every module in Premium CBS is designed with NCRA directives in mind. We stay current with regulatory changes so your institution doesn't have to."}</p>
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="compliance-icon"><Image src="/assets/images/icons/bank-svgrepo-com.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="compliance-title">{t(lang, "NCRA Directives")}</div>
              <div className="compliance-desc">{t(lang, "Compliant with all applicable NCRA directives for cooperative and microfinance institutions.")}</div>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon"><Image src="/assets/images/icons/cooperative.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="compliance-title">{t(lang, "Cooperative Act")}</div>
              <div className="compliance-desc">{t(lang, "Aligned with Nepal's Cooperative Act 2074 for share management, dividend, and governance.")}</div>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon"><Image src="/assets/images/icons/encryption.svg" width={36} height={36} alt="" unoptimized /></div>
              <div className="compliance-title">{t(lang, "Data Encryption")}</div>
              <div className="compliance-desc">{t(lang, "All data at rest and in transit is encrypted. No plain-text passwords or financial data ever stored.")}</div>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon">📋</div>
              <div className="compliance-title">{t(lang, "AML/KYM Ready")}</div>
              <div className="compliance-desc">{t(lang, "Built-in KYM document storage and member risk categorization following AML guidelines.")}</div>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon">📊</div>
              <div className="compliance-title">{t(lang, "Karja Suchana Kendra")}</div>
              <div className="compliance-desc">{t(lang, "Integrated with Karja Suchana Kendra Ltd. (Credit Information Bureau) for monthly credit reporting and borrower credit checks.")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section integrations-section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Integrations")}</div>
          <h2 className="section-title">
            {t(lang, "Connects with the tools")}
            <br />
            {t(lang, "your institution already uses.")}
          </h2>
          <div className="integrations-grid">
            <div className="integration-chip">
              <div className="integration-icon"><Image src="/assets/images/icons/auto%20int.svg" width={32} height={32} alt="" unoptimized /></div>
              <div className="integration-name">{t(lang, "SCT ATM Network")}</div>
              <div className="integration-type">{t(lang, "Card switching")}</div>
            </div>
            <div className="integration-chip">
              <div className="integration-icon"><Image src="/assets/images/icons/mobile-banking.svg" width={32} height={32} alt="" unoptimized /></div>
              <div className="integration-name">{t(lang, "Mobile Banking")}</div>
              <div className="integration-type">{t(lang, "Member payments")}</div>
            </div>
            <div className="integration-chip">
              <div className="integration-icon"><Image src="/assets/images/icons/sms.svg" width={32} height={32} alt="" unoptimized /></div>
              <div className="integration-name">{t(lang, "SMS Gateway")}</div>
              <div className="integration-type">{t(lang, "Alert delivery")}</div>
            </div>
            <div className="integration-chip">
              <div className="integration-icon">📋</div>
              <div className="integration-name">{t(lang, "Mobile Collector")}</div>
              <div className="integration-type">{t(lang, "Field collection")}</div>
            </div>
            {" "}
          </div>
        </div>
      </section>
      <section className="lite-strip-wrap">
        <div className="lite-strip">
          <div>
            <div className="lite-strip-title">{t(lang, "Need something lighter?")}</div>
            <p className="lite-strip-desc">A new edition of Premium CBS-Designed to deliver simplicity, security, and full regulatory compliance.</p>
          </div>
          <Link href={href(lang, "cbs-lite")} className="btn-primary">{t(lang, "Explore Premium CBS Lite →")}</Link>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-eyebrow" style={{ color: "var(--blue-light)", display: "block", textAlign: "center", marginBottom: "1.5rem" } as CSSProperties}>{t(lang, "Get Started with CBS")}</div>
          <h2 className="cta-title">{t(lang, "See Premium CBS in Action")}</h2>
          <p className="cta-desc" style={{ marginBottom: "0.75rem" }}>
            {t(lang, "Experience how Premium CBS can simplify your banking operations, enhance efficiency, and empower your institution with secure, scalable, and future-ready digital banking solutions.")}
          </p>
          <p className="cta-desc">
            {t(lang, "Book a personalized demo with our experts and discover how Premium CBS can support your institution’s unique workflows — with practical insights, not generic presentations.")}
          </p>
          <div className="cta-actions">
            <Link href={href(lang, "contact")} className="btn-primary" style={{ background: "var(--emerald)", boxShadow: "0 4px 20px rgba(16,185,129,0.4)" } as CSSProperties}>{t(lang, "Book a Live Demo")}</Link>
            <Link href={href(lang, "contact")} className="btn-ghost">{t(lang, "Talk to Our Team")}</Link>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
