// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import type { CSSProperties } from "react";
import DemoForm from "@/components/DemoForm";
import Image from "next/image";
import { type Lang, t, ta } from "@/lib/i18n";
import PageEffects from "@/components/PageEffects";

export default function ContactPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-contact" className="page active">
      <section className="page-hero" style={{ paddingBottom: "3rem" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner contact-hero-inner">
          <div>
            <div className="page-hero-badge">{t(lang, "📅 Request a Demo")}</div>
            <h1 className="page-hero-title">{t(lang, "Ready to Build a Smarter Digital Banking Future?")}</h1>
            <p className="page-hero-desc">
              {t(lang, "Explore the power of Premium CBS — a complete cloud-based Core Banking Solution designed to connect your operations, digital channels, and customer services through one intelligent platform.")}
            </p>
          </div>
          <div className="contact-hero-visual">
            <Image src="/assets/images/company/contact-us.webp" width={1100} height={754} loading="eager" alt={ta(lang, "alt", "Contact Premium Technologies by email, phone, WhatsApp, Viber or visit our office")} />
          </div>
        </div>
      </section>
      <section className="contact-section section">
        <div className="section-inner">
          <div className="contact-grid">
            <DemoForm lang={lang} />
            <div className="contact-info">
              <div>
                <div className="contact-info-title">{t(lang, "Talk to us directly.")}</div>
                <div className="contact-info-desc">
                  {t(lang, "Whether you are exploring a Core Banking Solution for the first time or upgrading your existing system, our experts are here to understand your needs and provide honest guidance — with no pressure, just the right insights for your institution.")}
                </div>
                <div className="contact-info-desc">{t(lang, "Discover how Premium CBS can empower your institution with secure, efficient, and future-ready digital banking solutions.")}</div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Image src="/assets/images/icons/location.svg" width={20} height={20} alt="" unoptimized /></div>
                <div>
                  <div className="contact-card-title">{t(lang, "Office address")}</div>
                  <div className="contact-card-val">
                    {t(lang, "Subidhanagar 32, Tinkune")}
                    <br />
                    {t(lang, "Kathmandu, Nepal 44600")}
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Image src="/assets/images/icons/call.svg" width={20} height={20} alt="" unoptimized /></div>
                <div>
                  <div className="contact-card-title">{t(lang, "Phone")}</div>
                  <div className="contact-card-val">
                    <a href="tel:+9779801130700">+977 9801905102</a>
                    <br />
                    <a href="tel:+9779801130459">+977 9801-130459</a>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Image src="/assets/images/icons/email.svg" width={20} height={20} alt="" unoptimized /></div>
                <div>
                  <div className="contact-card-title">{t(lang, "Email")}</div>
                  <div className="contact-card-val">
                    <a href="mailto:info@premiumtech.com.np">info@premiumtech.com.np</a>
                    <br />
                    <a href="mailto:shekhar@premiumtech.com.np">shekhar@premiumtech.com.np</a>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">🌐</div>
                <div>
                  <div className="contact-card-title">{t(lang, "Follow us")}</div>
                  <div className="contact-card-val">{t(lang, "Updates, product news, and job openings.")}</div>
                  <div className="contact-social">
                    <a className="contact-social-btn is-facebook" href="https://www.facebook.com/techpremium" target="_blank" rel="noopener" aria-label="Premium Technologies on Facebook">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                      </svg>
                      Facebook{" "}
                    </a>
                    <a className="contact-social-btn is-linkedin" href="https://www.linkedin.com/company/premium%C2%AE-technologies/" target="_blank" rel="noopener" aria-label="Premium Technologies on LinkedIn">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.9 8.8H3.6V20h3.3V8.8zM5.2 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.6c0-3-.7-5.1-4.1-5.1-1.6 0-2.7.9-3.2 1.7V8.8H10V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h3.3v-6.4z" />
                      </svg>
                      LinkedIn{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-hours">
                <div className="contact-hours-title">{t(lang, "Office Hours")}</div>
                <div className="hours-row">
                  <span className="hours-day">{t(lang, "Monday – Friday")}</span>
                  <span className="hours-time open">{t(lang, "10:00 AM – 5:00 PM")}</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">{t(lang, "Saturday – Sunday")}</span>
                  <span className="hours-time">{t(lang, "Closed")}</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">{t(lang, "Public Holidays")}</span>
                  <span className="hours-time">{t(lang, "Closed")}</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">{t(lang, "Support (existing clients)")}</span>
                  <span className="hours-time open">{t(lang, "7 days / on-call")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map-section">
        <div className="map-inner">
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(10,37,64,0.08)" } as CSSProperties}>
            <div style={{ background: "var(--navy)", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px" } as CSSProperties}>
              <span style={{ fontSize: "16px" }}>📍</span>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: "700", color: "white", fontSize: "13px" }}>{t(lang, "Premium Technologies Pvt. Ltd.")}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{t(lang, "Subidhanagar 32, Tinkune, Kathmandu 44600")}</div>
              </div>
              <a href="https://www.google.com/maps?q=27.684529255037663,85.34576405767051" target="_blank" rel="noopener" style={{ marginLeft: "auto", fontSize: "12px", fontWeight: "600", color: "var(--blue-light)", textDecoration: "none", whiteSpace: "nowrap" } as CSSProperties}>
                {t(lang, "Open in Maps →")}
              </a>
            </div>
            <iframe className="map-frame" src={"https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s27.684529255037663,85.34576405767051!6i17!3m1!1sen!5m1!1sen"} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={ta(lang, "title", "Premium Technologies office location — Tinkune, Kathmandu")}>
            </iframe>
          </div>
        </div>
      </div>
      <section className="section faq-section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <div className="section-eyebrow" style={{ display: "inline-block" }}>{t(lang, "FAQ")}</div>
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>{t(lang, "Frequently Asked Questions")}</h2>
          <div className="faq-list">
            <div className="faq-group-title">{t(lang, "About the Product")}</div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "What is Premium CBS?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Premium CBS is a cloud-based Core Banking Solution designed for cooperatives, microfinance institutions, and financial organizations. It helps institutions manage their complete banking operations through a secure, integrated, and efficient digital platform.")}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "What services are included with Premium CBS?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "Premium CBS provides a complete banking ecosystem with integrated modules and services, including:")}</p>
                <ul>
                  <li>{t(lang, "Customer & Member Management")}</li>
                  <li>{t(lang, "Deposit and Savings Management")}</li>
                  <li>{t(lang, "Loan Management")}</li>
                  <li>{t(lang, "Accounting and Reporting")}</li>
                  <li>{t(lang, "SMS Banking")}</li>
                  <li>{t(lang, "Mobile Banking")}</li>
                  <li>{t(lang, "ATM Banking")}</li>
                  <li>{t(lang, "Mobile Collector")}</li>
                  <li>{t(lang, "Third-Party Integrations")}</li>
                </ul>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Can Premium CBS support multiple branches?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Yes. Premium CBS supports multi-branch operations, allowing institutions to manage multiple locations through a centralized banking platform with consistent data, real-time transaction processing, and efficient branch management.")}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "How secure is Premium CBS?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "Premium CBS is built with a strong focus on security and reliability to protect financial data and transactions. The system includes:")}</p>
                <ul>
                  <li>{t(lang, "Secure digital certificates")}</li>
                  <li>{t(lang, "Role-based access control")}</li>
                  <li>{t(lang, "Multi-factor authentication (MFA)")}</li>
                  <li>{t(lang, "Reliable database management")}</li>
                  <li>{t(lang, "Real-time database replication")}</li>
                  <li>{t(lang, "Continuous system monitoring by our expert technical team")}</li>
                </ul>
                <p>{t(lang, "These security measures help ensure safe, reliable, and uninterrupted banking operations.")}</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Can Premium CBS be customized according to institutional requirements?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Yes. Premium CBS can be customized based on your institution’s operational workflows, reporting requirements, and specific business needs. Our team works closely with institutions to configure solutions that best fit their processes.")}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Is Premium CBS compliant with the latest NCRA directives?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "Yes. We continuously monitor NCRA circulars and regulatory directives to keep Premium CBS aligned with changing requirements.")}</p>
                <p>
                  {t(lang, "Whenever new reporting requirements or regulatory updates are introduced, we enhance the system and notify our clients, helping institutions stay compliant without having to manage regulatory changes independently.")}
                </p>
              </div>
            </div>
            <div className="faq-group-title">{t(lang, "Migration & Implementation")}</div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "How does the migration process from an existing software system to Premium CBS work?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "Premium Technologies follows a structured and secure migration process to ensure a smooth transition from your existing banking software to Premium CBS.")}</p>
                <p>{t(lang, "Our migration team works closely with your institution to understand your current system, prepare a migration plan, validate data, and ensure minimal operational disruption.")}</p>
                <p>{t(lang, "The migration process includes:")}</p>
                <ol className="faq-steps">
                  <li>
                    <strong>{t(lang, "System Assessment & Planning")}</strong>
                    <span>{t(lang, "We analyze your existing software, database structure, available data, and institutional requirements to create a customized migration plan.")}</span>
                  </li>
                  <li>
                    <strong>{t(lang, "Data Extraction & Transformation")}</strong>
                    <span>{t(lang, "Existing data is securely extracted from your current system and transformed into a format compatible with Premium CBS while maintaining accuracy and data integrity.")}</span>
                  </li>
                  <li>
                    <strong>{t(lang, "Data Validation & Verification")}</strong>
                    <span>{t(lang, "Migrated data is carefully verified to ensure customer records, accounts, deposits, loans, transactions, and other critical information are transferred accurately.")}</span>
                  </li>
                  <li>
                    <strong>{t(lang, "Testing & User Training")}</strong>
                    <span>{t(lang, "Before going live, we perform migration testing and provide necessary training to your team to ensure smooth system adoption.")}</span>
                  </li>
                  <li>
                    <strong>{t(lang, "Go-Live & Post-Migration Support")}</strong>
                    <span>{t(lang, "After successful validation, Premium CBS is deployed for daily operations with continuous support from our technical team.")}</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Can existing data from our current software be migrated to Premium CBS?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Yes. Existing data from your current banking software can be migrated to Premium CBS. Our team assists institutions in transferring essential information while maintaining data accuracy, security, and business continuity.")}
                </p>
                <p>{t(lang, "The migration may include:")}</p>
                <ul>
                  <li>{t(lang, "Customer and member records")}</li>
                  <li>{t(lang, "Deposit and savings accounts")}</li>
                  <li>{t(lang, "Loan accounts and repayment details")}</li>
                  <li>{t(lang, "Transaction history")}</li>
                  <li>{t(lang, "Share information")}</li>
                  <li>{t(lang, "Required operational data")}</li>
                </ul>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Will there be any disruption during the migration process?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Our migration process is carefully planned to minimize operational disruption. We coordinate with your institution, schedule migration activities, perform necessary validations, and ensure a smooth transition before the final go-live.")}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "How long does implementation take?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Implementation timelines depend on the institution’s size, operational requirements, data migration needs, and customization scope. Our team works closely with each institution throughout the implementation, testing, and go-live process.")}
                </p>
              </div>
            </div>
            <div className="faq-group-title">{t(lang, "Beyond Implementation: Continuous Support")}</div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Do you provide training and support after implementation?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  {t(lang, "Yes. Premium Technologies provides complete implementation assistance, user training, technical support, and regular product updates to help institutions operate Premium CBS effectively.")}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "What kind of support do you provide after go-live?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "All Premium CBS clients receive continuous support through multiple channels, including:")}</p>
                <ul>
                  <li>{t(lang, "Phone")}</li>
                  <li>{t(lang, "Viber and WhatsApp")}</li>
                  <li>{t(lang, "Email")}</li>
                  <li>{t(lang, "Ticket-based support portal")}</li>
                </ul>
                <p>
                  {t(lang, "Our support team is based in Kathmandu and provides on-site assistance whenever required. Client-raised tickets are tracked until resolution, and critical issues are prioritized for immediate attention.")}
                </p>
              </div>
            </div>
            <div className="faq-group-title">{t(lang, "Pricing & Demo")}</div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "What does the pricing look like?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "Premium CBS pricing is based on factors such as institution size, number of branches, required modules, and selected services.")}</p>
                <p>{t(lang, "We provide flexible pricing models, including:")}</p>
                <ul>
                  <li>{t(lang, "One-time licensing options")}</li>
                  <li>{t(lang, "Annual subscription models")}</li>
                </ul>
                <p>{t(lang, "Since every institution has different requirements, our team provides customized pricing based on your specific needs.")}</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-faq-toggle>
                {t(lang, "Can we get a demo before implementation?")}{" "}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                <p>{t(lang, "Yes. Premium Technologies provides a personalized demonstration of Premium CBS before implementation.")}</p>
                <p>{t(lang, "Our experts understand your institution’s requirements and demonstrate relevant features, workflows, and modules based on your operational needs.")}</p>
                <p>{t(lang, "A demo helps you explore the capabilities of Premium CBS and understand how it can support your institution’s digital transformation journey.")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
