// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import type { CSSProperties } from "react";
import ClientLogoBar from "@/components/ClientLogoBar";
import Image from "next/image";
import Link from "next/link";
import NavArea from "@/components/NavArea";
import TypeEyebrow from "@/components/TypeEyebrow";
import { type Lang, pick, t, ta } from "@/lib/i18n";
import { href } from "@/lib/routes";
import PageEffects from "@/components/PageEffects";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <div id="page-home" className="page active">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div>
            <p className="hero-vision">Driving Innovation, Excellence & Digital Growth.</p>
            <div className="hero-eyebrow">
              <span className="pulse" />
              <TypeEyebrow text={t(lang, "Nepal's Trusted CBS Provider")} />
            </div>
            <h1 className="hero-title">{t(lang, "Transforming Financial Institutions Through Smart Digital Banking Solutions")}</h1>
            <p className="hero-lead">{t(lang, "Empowering Cooperatives & Microfinance Institutions with Secure, Scalable and Innovative Technology.")}</p>
            <p className="hero-desc">
              {t(lang, "Premium Technologies Pvt. Ltd. is a Nepal-based software solution provider specializing in customized banking and financial technology solutions for Cooperatives, Microfinance Institutions, and Small to Medium Financial Organizations.")}
            </p>
            <div className="hero-actions">
              <Link href={href(lang, "contact")} className="btn-primary">{t(lang, "Schedule a Demo →")}</Link>
              <Link href={href(lang, "products")} className="btn-ghost">{t(lang, "View Products")}</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-slider" data-hero-slider="">
              <div className="hero-slides">
                <figure className="hero-slide is-active">
                  <Image src="/assets/images/hero/cbs.webp" width={1200} height={672} loading="eager" className="hero-shot" alt={ta(lang, "alt", "Premium CBS dashboard on a laptop, tablet, and phone")} />
                  <figcaption>{t(lang, "Premium CBS")}</figcaption>
                </figure>
                <figure className="hero-slide">
                  <Image src="/assets/images/hero/lite.webp" width={1200} height={694} className="hero-shot" alt={ta(lang, "alt", "Premium CBS Lite apps screen on a tablet")} />
                  <figcaption>{t(lang, "Premium CBS Lite")}</figcaption>
                </figure>
                <figure className="hero-slide">
                  <Image src="/assets/images/hero/collector.webp" width={940} height={900} className="hero-shot" alt={ta(lang, "alt", "Premium Mobile Collector handheld device printing a collection receipt")} />
                  <figcaption>{t(lang, "Premium Mobile Collector")}</figcaption>
                </figure>
                <figure className="hero-slide">
                  <Image src="/assets/images/hero/atm.webp" width={1200} height={765} className="hero-shot" alt={ta(lang, "alt", "ATM Banking for cooperative members")} />
                  <figcaption>{t(lang, "ATM Banking")}</figcaption>
                </figure>
                <figure className="hero-slide">
                  <Image src="/assets/images/hero/sms.webp" width={955} height={900} className="hero-shot" alt={ta(lang, "alt", "SMS Banking alerts on a phone")} />
                  <figcaption>{t(lang, "SMS Banking")}</figcaption>
                </figure>
              </div>
              <div className="hero-slider-dots" role="tablist" aria-label="Hero images" />
            </div>
          </div>
        </div>
      </section>
      <div className="stats-bar" id="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number" id="s1">
              12
              <span className="plus">+</span>
            </div>
            <div className="stat-label">{t(lang, "Years of Experience")}</div>
            <div className="stat-sublabel">{t(lang, "Est. 2015 · Kathmandu")}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="s2">
              450
              <span className="plus">+</span>
            </div>
            <div className="stat-label">{t(lang, "Clients")}</div>
            <div className="stat-sublabel">{t(lang, "Cooperatives · Microfinance · BFIs")}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="s3">
              7
              <span className="plus">/7</span>
            </div>
            <div className="stat-label">{t(lang, "Provinces Covered")}</div>
            <div className="stat-sublabel">{t(lang, "Nationwide coverage")}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="s4">
              30
              <span className="plus">+</span>
            </div>
            <div className="stat-label">{t(lang, "Expert Team")}</div>
            <div className="stat-sublabel">{t(lang, "Specialists on the ground")}</div>
          </div>
        </div>
      </div>
      <section className="lite-banner-wrap">
        <NavArea as="div" href={href(lang, "cbs-lite")} className="lite-banner">
          <div className="lite-banner-text">
            <div className="lite-banner-tags">
              <span className="lite-banner-new">{t(lang, "New product")}</span>
              <span className="lite-banner-kicker">{t(lang, "A Dozen Years of Innovation")}</span>
            </div>
            <Image src="/assets/images/brand/premium-cbs-lite-light.webp" width={600} height={220} className="lite-banner-logo" alt={ta(lang, "alt", "Premium CBS Lite")} />
            <h2 className="lite-banner-title">{t(lang, "Introducing Premium CBS Lite")}</h2>
            <p className="lite-banner-desc">
              {t(lang, "A simplified, efficient, and affordable core banking solution that makes modern digital banking accessible to institutions of every scale. Cloud-based, modular, and secure, with no hardware to set up.")}
            </p>
          </div>
          <div className="lite-banner-side">
            <ul className="lite-banner-points">
              <li>{t(lang, "Modular & individually customizable")}</li>
              <li>{t(lang, "Protected by encryption architecture")}</li>
              <li>{t(lang, "Complete cloud-based, instant access")}</li>
            </ul>
            <div className="lite-banner-actions">
              <Link href={href(lang, "cbs-lite")} className="btn-primary">{t(lang, "Explore Premium CBS Lite →")}</Link>
              <a className="btn-ghost" href="https://premiumcbs.com/register-trial" target="_blank" rel="noopener">{t(lang, "Start Free Trial ↗")}</a>
            </div>
          </div>
        </NavArea>
      </section>
      <section className="section products-section">
        <div className="section-inner">
          <div className="products-header">
            <div>
              <div className="section-eyebrow">{t(lang, "Product Suite")}</div>
              <h2 className="section-title">{t(lang, "One Platform. Multiple Solutions. Unlimited Possibilities.")}</h2>
            </div>
            <p className="section-desc" style={{ maxWidth: "760px" }}>
              {t(lang, "Driving the future of financial services through powerful technology solutions that combine core banking, digital innovation, automation, and seamless integrations—built to help institutions transform, adapt, and thrive.")}
            </p>
          </div>
          <div className="products-grid">
            <NavArea as="div" href={href(lang, "cbs")} className="product-card featured">
              <div className="product-icon product-icon-logo">
                <Image src="/assets/images/brand/premium-cbs.png" width={857} height={315} className="product-logo" alt={ta(lang, "alt", "Premium CBS")} />
              </div>
              <div className="product-title">{t(lang, "Premium CBS — Core Banking System")}</div>
              <div className="product-desc">
                {t(lang, "Premium CBS is an advanced cloud-ready Core Banking Solution designed to help cooperatives, microfinance institutions, and financial organizations simplify operations, improve efficiency, and deliver better digital banking experiences.")}
                <br />
                <br />
                {t(lang, "Built with the latest technology frameworks, Premium CBS provides high performance, enhanced security, scalability, and long-term sustainability to support the evolving needs of modern financial institutions.")}
              </div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Multi-Branch")}</span>
                <span className="product-feature-tag">{t(lang, "Deposit & Savings")}</span>
                <span className="product-feature-tag">{t(lang, "Loan & EMI")}</span>
                <span className="product-feature-tag">{t(lang, "Share Management")}</span>
                <span className="product-feature-tag">{t(lang, "NCRA Reports")}</span>
                <span className="product-feature-tag">{t(lang, "GL & Accounting")}</span>
                <span className="product-feature-tag">Member KYM</span>
                <span className="product-feature-tag">{t(lang, "Audit Trail")}</span>
              </div>
              <div className="product-card-actions">
                <span className="product-link">{t(lang, "Explore Premium CBS →")}</span>
                <Link href={href(lang, "contact")} className="product-demo">{t(lang, "Request a Demo")}</Link>
              </div>
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
                <Image src="/assets/images/icons/mobile-banking.svg" width={30} height={30} alt="" unoptimized />
              </div>
              <div className="product-title">{t(lang, "Mobile Banking")}</div>
              <div className="product-desc">
                {t(lang, "A complete mobile banking and payment solution, built with mBank Technologies and DevanaSoft, so members can check accounts, pay bills, transfer funds, and pay by QR anytime.")}
              </div>
              <div className="product-features">
                <span className="product-feature-tag">{t(lang, "Account Access")}</span>
                <span className="product-feature-tag">{t(lang, "Utility Payments")}</span>
                <span className="product-feature-tag">{t(lang, "QR Payments")}</span>
                <span className="product-feature-tag">{t(lang, "Cardless ATM")}</span>
              </div>
              <span className="product-link">{t(lang, "Explore Mobile Banking →")}</span>
            </NavArea>
            <NavArea as="div" href={href(lang, "atm")} className="product-card">
              <div className="product-icon" aria-hidden="true">
                <Image src="/assets/images/icons/auto%20int.svg" width={30} height={30} alt="" unoptimized />
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
                <Image src="/assets/images/icons/sms.svg" width={30} height={30} alt="" unoptimized />
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
      <section className="section about-story">
        <div className="section-inner">
          <div className="about-intro-text">
            <div className="section-eyebrow">{t(lang, "About Us")}</div>
            <p>
              {t(lang, "Premium Technologies Pvt. Ltd. is a Nepal-based software product development company dedicated to delivering innovative, reliable, and customized banking and financial technology solutions. We specialize in developing digital solutions for Cooperatives, Microfinance Institutions, and Small to Medium-sized Financial Organizations, helping them modernize their operations and embrace the future of digital banking.")}
            </p>
            <p>
              {t(lang, "With years of experience in the financial technology sector, we have developed and continuously enhanced our flagship product Premium CBS — Core Banking Solution, a comprehensive and cloud-based banking platform designed to meet the evolving requirements of modern financial institutions.")}
            </p>
          </div>
          <div className="about-stats-row">
            <div className="about-stat-box">
              <div className="about-stat-num">
                12
                <span className="accent">+</span>
              </div>
              <div className="about-stat-label">{t(lang, "Years of industry experience")}</div>
            </div>
            <div className="about-stat-box">
              <div className="about-stat-num">
                450
                <span className="accent">+</span>
              </div>
              <div className="about-stat-label">{t(lang, "BFIs served")}</div>
            </div>
            <div className="about-stat-box">
              <div className="about-stat-num">
                7
                <span className="accent">/7</span>
              </div>
              <div className="about-stat-label">{t(lang, "Provinces covered")}</div>
            </div>
            <div className="about-stat-box">
              <div className="about-stat-num">
                5
                <span className="accent">+</span>
              </div>
              <div className="about-stat-label">{t(lang, "Solution partners")}</div>
            </div>
            <div className="about-stat-box">
              <div className="about-stat-num">
                5
                <span className="accent">+</span>
              </div>
              <div className="about-stat-label">{t(lang, "Major products")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-journey">
        <div className="section-inner">
          <div className="about-intro-text" style={{ maxWidth: "820px" }}>
            <div className="section-eyebrow">{t(lang, "Our Journey")}</div>
            <h2 className="section-title">From Vision to Digital Transformation.</h2>
            <p>
              {t(lang, "Established in 2015, Premium Technologies has been focused on building affordable, secure, and user-friendly technology solutions for the banking and financial service industry. Our commitment to innovation, quality, and continuous improvement has enabled us to create solutions that support institutions in improving efficiency, strengthening governance, and delivering better services to their members and customers.")}
            </p>
            <div className="about-highlight">
              <p>{t(lang, "Today, we proudly serve 450+ BFIs through our digital banking solutions, including Premium Core Banking Solution, SMS Banking, Mobile Banking, and Mobile Collector solutions.")}</p>
            </div>
            <p>{t(lang, "We support financial institutions in their journey toward digital transformation.")}</p>
          </div>
        </div>
      </section>
      <section className="province-section" id="coverage">
        <div className="province-inner">
          <div>
            <div className="section-eyebrow">{t(lang, "Our Nationwide Coverage")}</div>
            <h2 className="section-title">{t(lang, "Empowering Financial Institutions Across All 7 Provinces of Nepal")}</h2>
            <div className="coverage-copy">
              <p>{t(lang, "Premium Technologies brings secure, future-ready banking technology to cooperatives, microfinance institutions, and financial organizations across all seven provinces of Nepal.")}</p>
              <p>
                {t(lang, "PremiumCBS sits at the center, alongside SMS Banking, Mobile Banking, Mobile Collector, and more. From implementation and training to ongoing support, we help institutions in major cities and emerging communities deliver smarter digital banking across Nepal.")}
              </p>
            </div>
          </div>
          <div className="nepal-map-wrap">
            <div className="nepal-svg-container">
              <svg id="coverageMap" viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} role="img" aria-label={ta(lang, "aria-label", "Nepal, all seven provinces")}>
                <line className="cov-link" x1="74.7" y1="108.1" x2="142.3" y2="103.9" />
                <line className="cov-link" x1="142.3" y1="103.9" x2="176.3" y2="181.5" />
                <line className="cov-link" x1="176.3" y1="181.5" x2="255.3" y2="165.5" />
                <line className="cov-link" x1="255.3" y1="165.5" x2="335.5" y2="213.9" />
                <line className="cov-link" x1="335.5" y1="213.9" x2="359.5" y2="263.9" />
                <line className="cov-link" x1="359.5" y1="263.9" x2="434.7" y2="248.5" />
                <g className="cov-prov" data-name="Sudurpashchim">
                  <path d="M73.5,25.5L82.1,41.0L98.7,40.8L101.7,42.4L102.1,49.5L112.5,45.6L121.7,48.8L115.6,63.7L121.6,70.6L119.5,75.4L121.6,82.0L118.1,86.9L112.7,87.8L110.6,84.4L104.3,88.2L102.0,91.1L103.1,97.8L107.7,100.9L98.5,109.6L108.6,125.8L105.1,126.3L99.8,115.4L86.3,115.6L77.1,110.9L73.0,113.4L80.2,119.8L82.7,117.9L86.2,121.7L86.4,118.7L91.2,132.0L78.1,150.2L48.5,130.4L44.6,131.9L45.5,139.6L29.7,125.7L19.2,121.2L18.2,115.0L22.8,108.9L23.3,102.4L30.9,99.8L29.5,94.5L32.4,95.6L33.5,88.2L29.1,79.5L32.7,78.9L39.0,69.3L36.5,58.9L44.0,55.9L50.1,45.3L59.0,41.8L66.9,33.4L68.0,27.8L73.5,25.5Z" />
                  <text x="74.7" y="84.1" textAnchor="middle" fill="white" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Sudur")}</text>
                  <text x="74.7" y="96.1" textAnchor="middle" fill="white" fontSize="9" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Pashchim")}</text>
                  <circle className="cov-pulse" cx="74.7" cy="108.1" r="9" />
                  <circle cx="74.7" cy="108.1" r="3.5" fill="#10B981" />
                </g>
                <g className="cov-prov" data-name="Karnali">
                  <path d="M111.4,12.1L132.9,20.5L139.8,18.6L139.4,26.0L145.8,31.7L143.8,37.7L166.2,44.6L171.7,50.8L170.5,53.0L176.8,53.2L174.6,58.0L178.3,57.9L182.7,63.0L189.2,61.9L198.1,68.8L201.9,67.4L209.5,71.1L208.9,75.2L217.6,81.1L220.5,90.8L233.2,99.5L229.6,102.8L229.6,110.2L222.7,117.7L221.7,124.0L209.5,128.1L189.9,120.9L179.1,122.3L171.9,118.3L167.0,125.0L170.2,130.3L166.5,133.4L162.7,132.3L168.1,137.3L158.4,141.1L154.4,148.3L155.2,155.2L159.6,160.1L157.2,165.3L151.4,160.2L139.6,159.3L134.0,166.5L118.4,155.6L119.7,151.8L92.9,133.8L86.4,118.7L86.2,121.7L82.7,117.9L80.2,119.8L73.0,113.5L77.1,110.9L86.3,115.6L99.8,115.4L105.1,126.3L108.7,125.6L98.5,109.6L107.7,100.9L103.1,97.8L102.0,91.1L104.3,88.2L110.6,84.4L112.7,87.8L118.1,86.9L121.6,82.0L119.5,75.4L121.6,70.6L115.6,63.7L121.7,48.8L112.5,45.6L102.1,49.5L101.7,42.4L90.3,39.0L89.4,32.2L97.7,28.0L98.4,13.7L106.9,17.2L107.5,13.3L111.3,12.1Z" />
                  <text x="142.3" y="89.9" textAnchor="middle" fill="white" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Karnali")}</text>
                  <circle className="cov-pulse" cx="142.3" cy="103.9" r="9" />
                  <circle cx="142.3" cy="103.9" r="3.5" fill="#10B981" />
                </g>
                <g className="cov-prov" data-name="Lumbini">
                  <path d="M173.4,119.3L179.1,122.3L189.9,120.9L201.6,126.4L199.9,134.2L191.6,134.4L191.8,139.6L188.0,138.7L186.0,145.7L198.6,159.4L204.0,158.5L218.2,168.3L225.9,168.8L228.9,176.9L219.2,181.2L254.1,186.4L251.8,193.6L233.2,195.7L234.3,199.5L241.3,199.4L240.0,203.3L246.4,210.4L245.8,219.9L229.5,212.4L216.1,211.7L217.3,216.2L211.1,221.7L204.2,213.4L177.3,210.2L178.5,204.5L175.7,195.4L160.2,198.3L137.8,181.9L131.7,181.5L126.8,186.3L102.6,171.2L100.6,165.8L96.4,164.8L93.0,167.7L86.8,152.6L77.7,149.2L92.4,131.4L119.7,151.8L118.4,155.6L134.0,166.5L139.6,159.3L151.4,160.2L157.2,165.3L159.6,160.1L155.2,155.2L154.4,148.2L158.4,141.1L168.1,137.3L162.7,132.3L169.2,131.6L167.0,125.0L173.4,119.3Z" />
                  <text x="176.3" y="167.5" textAnchor="middle" fill="white" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Lumbini")}</text>
                  <circle className="cov-pulse" cx="176.3" cy="181.5" r="9" />
                  <circle cx="176.3" cy="181.5" r="3.5" fill="#10B981" />
                </g>
                <g className="cov-prov" data-name="Gandaki">
                  <path d="M250.3,87.1L264.4,93.2L262.1,96.9L263.7,106.2L267.2,106.9L265.9,116.5L276.7,119.3L279.8,126.1L289.7,127.1L293.7,133.9L303.4,138.3L310.9,136.9L315.3,130.8L323.6,134.5L323.0,140.8L317.8,146.0L318.3,153.4L309.8,162.1L309.3,168.2L302.6,168.9L300.7,176.5L296.8,179.4L298.9,189.2L293.1,189.5L289.3,184.8L278.9,188.6L280.5,193.3L278.0,196.6L264.7,201.0L259.3,206.8L247.9,207.4L250.6,209.6L246.2,214.6L245.4,208.5L239.9,203.2L241.3,199.4L234.3,199.5L233.2,195.7L251.8,193.6L254.1,186.4L219.2,181.2L228.9,176.9L225.9,168.8L218.2,168.3L204.0,158.5L198.6,159.4L188.0,149.6L185.7,142.0L188.3,138.5L191.7,139.9L191.6,134.4L199.9,134.2L201.6,126.4L209.5,128.1L221.7,124.0L222.7,117.7L229.6,110.2L229.6,102.8L233.4,101.1L232.0,95.7L240.4,92.6L241.3,89.1L250.2,87.1Z" />
                  <text x="255.3" y="151.5" textAnchor="middle" fill="white" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Gandaki")}</text>
                  <circle className="cov-pulse" cx="255.3" cy="165.5" r="9" />
                  <circle cx="255.3" cy="165.5" r="3.5" fill="#10B981" />
                </g>
                <g className="cov-prov" data-name="Bagmati">
                  <path d="M354.2,150.7L356.4,160.7L362.3,164.3L370.6,182.3L378.7,181.6L376.2,170.6L382.4,165.0L385.2,178.4L395.7,183.0L400.9,179.6L403.9,181.5L405.3,193.2L402.6,200.2L393.7,205.8L384.5,218.3L385.6,224.6L383.4,227.2L387.1,226.5L394.5,231.9L389.5,236.7L392.9,237.3L392.3,246.4L386.7,249.5L377.6,243.0L370.8,242.4L367.6,235.8L354.9,230.9L349.3,234.8L341.6,234.4L341.6,232.2L322.5,227.3L317.0,219.7L307.5,219.5L299.4,214.6L285.8,212.9L284.5,218.0L280.4,220.1L269.8,218.1L261.1,209.1L254.1,214.8L248.3,213.8L250.6,209.3L247.9,207.4L259.3,206.8L264.7,201.0L278.0,196.6L280.5,193.3L278.9,188.6L289.3,184.8L293.1,189.5L298.9,189.3L296.8,179.4L300.7,176.5L302.6,168.9L309.3,168.2L309.6,162.4L315.9,153.8L334.3,158.0L342.0,154.2L347.6,156.2L348.0,159.4L354.2,150.7Z" />
                  <text x="335.5" y="199.9" textAnchor="middle" fill="white" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Bagmati")}</text>
                  <circle className="cov-pulse" cx="335.5" cy="213.9" r="9" />
                  <circle cx="335.5" cy="213.9" r="5" fill="#1A7EFF" />
                  <text x="335.5" y="225.9" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t(lang, "HQ")}</text>
                </g>
                <g className="cov-prov" data-name="Madhesh">
                  <path d="M286.0,212.8L316.9,219.7L322.5,227.3L341.6,232.2L341.6,234.4L349.3,234.8L354.9,230.9L361.2,232.8L367.6,235.9L370.8,242.4L385.2,247.4L386.7,249.8L384.5,251.5L380.6,249.5L385.8,253.1L394.1,250.1L399.8,251.5L404.3,255.4L402.8,258.1L405.6,258.5L406.2,264.5L421.7,264.8L426.1,259.7L431.3,263.5L430.3,272.8L424.4,280.2L414.7,282.9L391.1,269.7L384.2,271.7L372.9,266.5L362.3,273.0L362.4,270.4L355.5,267.5L355.5,257.8L349.6,252.6L331.7,261.4L324.5,260.3L323.2,252.8L313.2,253.8L315.4,251.6L309.9,249.7L309.6,246.7L290.6,240.9L293.4,229.0L289.4,221.4L281.2,219.5L286.0,212.8Z" />
                  <text x="359.5" y="249.9" textAnchor="middle" fill="white" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Madhesh")}</text>
                  <circle className="cov-pulse" cx="359.5" cy="263.9" r="9" />
                  <circle cx="359.5" cy="263.9" r="3.5" fill="#10B981" />
                </g>
                <g className="cov-prov" data-name="Koshi">
                  <path d="M405.8,169.3L409.0,172.0L415.2,169.7L416.0,174.2L433.1,180.0L440.9,188.8L455.6,186.0L457.5,188.7L464.2,185.7L467.1,189.5L473.8,189.8L480.2,179.9L482.2,182.7L501.8,186.5L492.8,210.6L494.1,221.4L489.4,236.0L498.2,245.0L501.3,259.4L495.9,281.7L491.9,286.8L483.5,278.6L481.2,281.9L477.6,279.7L476.3,283.6L471.0,282.0L466.7,285.7L458.4,281.7L452.6,283.9L451.0,287.9L436.2,281.0L435.0,271.9L425.0,278.5L430.3,272.8L431.5,266.1L426.1,259.7L421.7,264.8L407.6,265.0L404.2,261.1L405.6,258.5L402.8,258.1L404.1,255.1L399.8,251.5L394.1,250.1L386.0,253.2L380.6,249.6L384.5,251.5L393.0,245.4L392.9,237.3L389.5,236.7L394.5,231.9L387.1,226.5L383.4,227.2L385.6,224.6L384.5,218.3L393.7,205.8L403.3,198.9L405.3,193.2L401.8,177.7L405.7,169.2Z" />
                  <text x="434.7" y="234.5" textAnchor="middle" fill="white" fontSize="10" style={{ fontFamily: "var(--font-inter), sans-serif" }} fontWeight="700">{t(lang, "Koshi")}</text>
                  <circle className="cov-pulse" cx="434.7" cy="248.5" r="9" />
                  <circle cx="434.7" cy="248.5" r="3.5" fill="#10B981" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="clients-section">
        <div className="clients-inner">
          <div className="clients-label" dangerouslySetInnerHTML={{ __html: pick(lang, "Trusted by 450+ institutions across all 7 provinces of Nepal", "नेपालका सबै ७ प्रदेशका ४५०+ संस्थाहरूद्वारा विश्वसनीय") }} />
        </div>
        <ClientLogoBar />
      </section>
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-eyebrow" style={{ color: "var(--blue-light)", display: "block", textAlign: "center", marginBottom: "1.5rem" } as CSSProperties}>{t(lang, "Get Started")}</div>
          <h2 className="cta-title">{t(lang, "Build the Future of Banking with Premium Tech")}</h2>
          <p className="cta-desc" style={{ marginBottom: "0.75rem" }}>
            {t(lang, "Discover how Premium Tech can help your institution simplify operations, enhance security, and deliver better digital banking experiences.")}
          </p>
          <p className="cta-desc" style={{ marginBottom: "0.75rem" }}>{t(lang, "Connect with our experts for a personalized demo and explore a banking solution designed for your institution's growth.")}</p>
          <p className="cta-desc" style={{ color: "#fff", fontWeight: "600" }}>{t(lang, "Let’s create a smarter digital banking future together.")}</p>
          <div className="cta-actions">
            <Link href={href(lang, "contact")} className="btn-primary">{t(lang, "Schedule a Free Demo")}</Link>
            <a href="https://wa.me/9779801130700" target="_blank" rel="noopener" className="btn-ghost">📞 +977 9801905102</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", marginTop: "1.5rem" }}>{t(lang, "Tinkune, Kathmandu · info@premiumtech.com.np")}</p>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
