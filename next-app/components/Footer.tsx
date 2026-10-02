// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import Image from "next/image";
import Link from "next/link";
import { type Lang, t, ta } from "@/lib/i18n";
import { href } from "@/lib/routes";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer id="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Link href={href(lang, "home")} className="nav-logo" style={{ marginBottom: "0" }}>
              <Image src="/assets/images/brand/premium-logo.svg" width={518} height={138} unoptimized className="brand-logo" alt={ta(lang, "alt", "Premium Technologies")} />
            </Link>
            <p className="footer-tagline">{t(lang, "Nepal's trusted CBS provider — powering cooperatives, microfinances, and credit unions across all 7 provinces since 2015.")}</p>
            <div className="footer-contact-item">{t(lang, "📍 Subidhanagar 32, Tinkune, Kathmandu")}</div>
            <div className="footer-contact-item">📞 +977 9801905102 / 9801-130459</div>
            <div className="footer-contact-item">✉️ info@premiumtech.com.np</div>
            <div className="footer-iso">
              <Image src="/assets/images/company/iso-9001.webp" width={180} height={180} alt={ta(lang, "alt", "ISO 9001:2015 Certified Company")} />
              <div>
                <div className="footer-iso-title">{t(lang, "Quality Certified. Trust Delivered.")}</div>
                <div className="footer-iso-sub">{t(lang, "ISO 9001:2015 Certified Company")}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="footer-col-title">{t(lang, "Products")}</div>
            <ul className="footer-links">
              <li>
                <Link href={href(lang, "cbs")}>{t(lang, "Premium CBS")}</Link>
              </li>
              <li>
                <Link href={href(lang, "cbs-lite")}>
                  {t(lang, "Premium CBS Lite")}{" "}
                  <span className="nav-chip">{t(lang, "New")}</span>
                </Link>
              </li>
              <li>
                <Link href={href(lang, "mobile")}>{t(lang, "Mobile Banking")}</Link>
              </li>
              <li>
                <Link href={href(lang, "atm")}>{t(lang, "ATM Banking")}</Link>
              </li>
              <li>
                <Link href={href(lang, "sms")}>{t(lang, "SMS Banking")}</Link>
              </li>
              <li>
                <Link href={href(lang, "tablet")}>{t(lang, "Premium Mobile Collector")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">{t(lang, "Company")}</div>
            <ul className="footer-links">
              <li>
                <Link href={href(lang, "about", "about-us")}>{t(lang, "About Us")}</Link>
              </li>
              <li>
                <Link href={href(lang, "about", "our-team")}>{t(lang, "Our Team")}</Link>
              </li>
              <li>
                <Link href={href(lang, "about", "clients")}>{t(lang, "Clients")}</Link>
              </li>
              <li>
                <Link href={href(lang, "contact")}>{t(lang, "Contact")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">{t(lang, "Get Started")}</div>
            <ul className="footer-links">
              <li>
                <Link href={href(lang, "contact")}>{t(lang, "Request a Demo")}</Link>
              </li>
              <li>
                <Link href={href(lang, "contact")}>{t(lang, "Talk to Sales")}</Link>
              </li>
              <li>
                <Link href={href(lang, "contact")}>{t(lang, "Support Portal")}</Link>
              </li>
              <li>
                <Link href={href(lang, "contact")}>{t(lang, "FAQ")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">{t(lang, "© 2024 Premium Technologies Pvt. Ltd. All rights reserved.")}</div>
          <div className="footer-bottom-right">
            <div className="footer-social">
              <a className="social-link social-facebook" href="https://www.facebook.com/techpremium" target="_blank" rel="noopener" aria-label="Premium Technologies on Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                </svg>
              </a>
              <a className="social-link social-linkedin" href="https://www.linkedin.com/company/premium%C2%AE-technologies/" target="_blank" rel="noopener" aria-label="Premium Technologies on LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.9 8.8H3.6V20h3.3V8.8zM5.2 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.6c0-3-.7-5.1-4.1-5.1-1.6 0-2.7.9-3.2 1.7V8.8H10V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h3.3v-6.4z" />
                </svg>
              </a>
            </div>
            <div className="footer-legal">
              <a href="#">{t(lang, "Privacy Policy")}</a>
              <a href="#">{t(lang, "Terms of Use")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
