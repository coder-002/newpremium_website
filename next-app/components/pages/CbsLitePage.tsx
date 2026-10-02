// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import Link from "next/link";
import { type Lang, pick, t, ta } from "@/lib/i18n";
import { href } from "@/lib/routes";
import PageEffects from "@/components/PageEffects";

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
              <a className="btn-primary" href="http://web.nextcbs.com/" target="_blank" rel="noopener">{t(lang, "Start Free Trial ↗")}</a>
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
      <PageEffects />
    </div>
  );
}
