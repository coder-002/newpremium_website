// Generated from the legacy index.html by scripts/convert_legacy.py, then maintained by hand.
import { type CSSProperties, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Lang, t } from "@/lib/i18n";
import { href } from "@/lib/routes";
import PageEffects from "@/components/PageEffects";
import { TEAM_GROUPS } from "@/data/team";

export default function AboutPage({ lang }: { lang: Lang }) {
  return (
    <div id="page-about" className="page active">
      <section className="page-hero about-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="about-hero-inner">
          <div className="about-hero-text">
            <div className="page-hero-badge">{t(lang, "🇳🇵 Kathmandu, Nepal · Est. 2015")}</div>
            <h1 className="page-hero-title">{t(lang, "Transforming Financial Institutions Through Smart Digital Banking Solutions")}</h1>
            <p className="page-hero-lead">{t(lang, "Empowering Cooperatives & Microfinance Institutions with Secure, Scalable and Innovative Technology.")}</p>
          </div>
          <div className="about-hero-chips">
            <div className="about-hero-chip">
              <strong>12+</strong>
              <span>{t(lang, "Years of industry experience")}</span>
            </div>
            <div className="about-hero-chip">
              <strong>450+</strong>
              <span>{t(lang, "BFIs served")}</span>
            </div>
            <div className="about-hero-chip">
              <strong>7/7</strong>
              <span>{t(lang, "Provinces covered")}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="section about-story">
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
      <section className="section about-commitment">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Our Commitment")}</div>
          <h2 className="section-title">{t(lang, "Technology that creates meaningful value.")}</h2>
          <p className="section-desc">
            {t(lang, "At Premium Technologies, we believe technology should not only automate processes but also create meaningful value for financial institutions and their customers. Our solutions are built around:")}
          </p>
          <div className="why-cbs-grid">
            <div className="why-cbs-card">
              <div className="why-cbs-icon">💡</div>
              <div className="why-cbs-title">{t(lang, "Innovation")}</div>
              <div className="why-cbs-desc">{t(lang, "Continuously adopting modern technologies and improving our products to meet changing industry requirements.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🔒</div>
              <div className="why-cbs-title">{t(lang, "Security")}</div>
              <div className="why-cbs-desc">{t(lang, "Providing reliable and secure digital banking environments for financial operations.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🤝</div>
              <div className="why-cbs-title">{t(lang, "Customer Partnership")}</div>
              <div className="why-cbs-desc">{t(lang, "Building long-term relationships by understanding customer needs and delivering practical solutions.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🏆</div>
              <div className="why-cbs-title">{t(lang, "Excellence")}</div>
              <div className="why-cbs-desc">{t(lang, "Maintaining quality, reliability, and performance across every solution we provide.")}</div>
            </div>
          </div>
          <p className="section-desc" style={{ marginTop: "2rem" }}>
            {t(lang, "Our management team brings extensive experience and expertise in financial technology solutions, software product development, and banking platforms, enabling us to understand the unique challenges of the financial sector.")}
          </p>
        </div>
      </section>
      <section className="vision-band">
        <div className="vision-inner">
          <div className="section-eyebrow" style={{ color: "var(--gold)", display: "block", textAlign: "center", marginBottom: "1rem" } as CSSProperties}>{t(lang, "Our Vision")}</div>
          <h2 className="vision-title">Driving Innovation, Excellence & Digital Growth.</h2>
          <div className="vm-divider" aria-hidden="true"></div>
          <div className="section-eyebrow" style={{ color: "var(--gold)", display: "block", textAlign: "center", marginBottom: "1rem" } as CSSProperties}>{t(lang, "Our Mission")}</div>
          <p className="vm-mission">
            {t(lang, "Empowering organizations with innovative, Secure and Sustainable technology solutions that drive growth and digital transformation.")}
          </p>
        </div>
      </section>
      <section className="section about-core-values">
        <div className="section-inner">
          <div style={{ textAlign: "center" }}>
            <div className="section-eyebrow" style={{ display: "inline-block" }}>{t(lang, "Our Core Values")}</div>
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>{t(lang, "The principles that guide how we work.")}</h2>
          <div className="why-cbs-grid values-grid">
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🔍</div>
              <div className="why-cbs-title">{t(lang, "Transparency")}</div>
              <div className="why-cbs-desc">{t(lang, "We ensure that decisions related to employment, performance, and compensation are fair, clear, and transparent.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">💡</div>
              <div className="why-cbs-title">{t(lang, "Innovation")}</div>
              <div className="why-cbs-desc">{t(lang, "We encourage employees to contribute innovative ideas, embrace new approaches, and continuously improve our processes.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">✅</div>
              <div className="why-cbs-title">{t(lang, "Accountability")}</div>
              <div className="why-cbs-desc">{t(lang, "We take ownership of our responsibilities and remain committed to delivering quality results on time.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🌍</div>
              <div className="why-cbs-title">{t(lang, "Inclusiveness")}</div>
              <div className="why-cbs-desc">{t(lang, "We promote equal opportunity for everyone, regardless of gender, ethnicity, religion, disability, or background.")}</div>
            </div>
            <div className="why-cbs-card">
              <div className="why-cbs-icon">🤝</div>
              <div className="why-cbs-title">{t(lang, "Cooperation")}</div>
              <div className="why-cbs-desc">{t(lang, "We believe in teamwork, mutual support, and collective growth guided by the principles of cooperation.")}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section timeline-section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <div className="section-eyebrow" style={{ display: "inline-block" }}>{t(lang, "Our Journey")}</div>
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>{t(lang, "From one cooperative to 450+ BFIs nationwide.")}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content-left">
                <div className="timeline-year">2015</div>
                <div className="timeline-event-title">{t(lang, "Company Founded")}</div>
                <div className="timeline-event-desc">
                  {t(lang, "Premium Technologies Pvt. Ltd. was established in Kathmandu with a vision to transform banking through innovative technology solutions. The first version of Premium CBS was successfully deployed at a cooperative institution, marking the beginning of our digital banking journey.")}
                </div>
              </div>
              <div className="timeline-dot">15</div>
              <div className="timeline-content-empty" />
            </div>
            <div className="timeline-item">
              <div className="timeline-content-empty" />
              <div className="timeline-dot">18</div>
              <div className="timeline-content-right">
                <div className="timeline-year">2018</div>
                <div className="timeline-event-title">{t(lang, "SMS Banking & Mobile Collector Launch")}</div>
                <div className="timeline-event-desc">
                  {t(lang, "We expanded our digital banking ecosystem by launching SMS Banking, enabling financial institutions to extend banking communication services to members without smartphones. We also introduced Premium Mobile Collector to help field officers manage collections digitally with greater efficiency.")}
                </div>
                <div className="timeline-list-label">{t(lang, "Milestone")}</div>
                <ul className="timeline-list">
                  <li>{t(lang, "Deployed across 100+ institutions")}</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content-left">
                <div className="timeline-year">2021</div>
                <div className="timeline-event-title">{t(lang, "ATM Integration & Mobile Banking Expansion")}</div>
                <div className="timeline-event-desc">
                  {t(lang, "We integrated with the SCT ATM network and launched mobile banking applications (iSmart and mBank) on iOS and Android platforms. During this period, we achieved nationwide digital banking expansion.")}
                </div>
                <div className="timeline-list-label">{t(lang, "Milestone")}</div>
                <ul className="timeline-list">
                  <li>{t(lang, "Crossed 350+ client institutions nationwide")}</li>
                  <li>{t(lang, "Achieved deployment across all 7 provinces of Nepal for the first time")}</li>
                </ul>
              </div>
              <div className="timeline-dot">21</div>
              <div className="timeline-content-empty" />
            </div>
            <div className="timeline-item">
              <div className="timeline-content-empty" />
              <div className="timeline-dot">24</div>
              <div className="timeline-content-right">
                <div className="timeline-year">2024</div>
                <div className="timeline-event-title">{t(lang, "Premium CBS 2.0 — Next-Generation Banking")}</div>
                <div className="timeline-event-desc">
                  {t(lang, "We launched Premium CBS 2.0, a next-generation Core Banking Solution designed with enhanced scalability, security, performance, and operational efficiency. We also introduced major compliance enhancements aligned with the NCRA Cooperative Directives 2079.")}
                </div>
                <div className="timeline-list-label">{t(lang, "Launched")}</div>
                <ul className="timeline-list">
                  <li>{t(lang, "Updated MIS Dashboard")}</li>
                  <li>{t(lang, "Custom Report Builder")}</li>
                </ul>
                <div className="timeline-event-desc" style={{ marginTop: "0.5rem" }}>{t(lang, "Expanded our product team to support continuous innovation and future growth.")}</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content-left">
                <div className="timeline-year">2026</div>
                <div className="timeline-event-title">{t(lang, "Premium CBS Lite")}</div>
                <div className="timeline-event-desc">
                  {t(lang, "We introduced Premium CBS Lite — a simplified, efficient, and affordable banking solution designed to make modern digital banking technology accessible to institutions of every scale.")}
                </div>
              </div>
              <div className="timeline-dot">26</div>
              <div className="timeline-content-empty" />
            </div>
            <div className="timeline-item">
              <div className="timeline-content-empty" />
              <div className="timeline-dot" style={{ background: "var(--emerald)", boxShadow: "0 0 0 2px var(--emerald)", fontSize: "9px" } as CSSProperties}>{t(lang, "Now")}</div>
              <div className="timeline-content-right">
                <div className="timeline-year">{t(lang, "Today")}</div>
                <div className="timeline-event-title">{t(lang, "450+ BFIs & Growing")}</div>
                <div className="timeline-event-desc">{t(lang, "Today, Premium Technologies continues to empower financial institutions across Nepal through:")}</div>
                <ul className="timeline-list">
                  <li>{t(lang, "Secure digital banking solutions")}</li>
                  <li>{t(lang, "Scalable cloud-based technology")}</li>
                  <li>{t(lang, "Future-ready financial platforms")}</li>
                </ul>
                <div className="timeline-event-desc" style={{ marginTop: "0.5rem" }}>
                  {t(lang, "Our journey continues with a commitment to Driving Innovation Excellence & Digital Growth through technology, trust, and continuous transformation.")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-team" className="section team-section">
        <div className="section-inner">
          <div className="section-eyebrow">{t(lang, "Our Team")}</div>
          <h2 className="section-title">{t(lang, "The people behind the platform.")}</h2>
          <p className="section-desc">Meet the leaders guiding Premium Technologies, backed by a dedicated team of developers, support specialists, and banking domain experts.</p>
          {TEAM_GROUPS.map((group) => (
            <Fragment key={group.title}>
              <h3 className="team-group-title">{t(lang, group.title)}</h3>
              <div className="team-grid team-grid-3">
                {group.members.map((m) => (
                  <article key={m.name} className="team-card" style={{ "--team-a": m.colors[0], "--team-b": m.colors[1] } as CSSProperties}>
                    <div className="team-card-top">
                      <div className="team-avatar has-photo">
                        <Image src={m.photo} width={400} height={400} alt={m.name} />
                      </div>
                    </div>
                    <div className="team-card-body">
                      <div className="team-name">{m.name}</div>
                      <div className="team-role">{t(lang, m.role)}</div>
                      <div className="team-divider" />
                    </div>
                  </article>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-eyebrow" style={{ color: "var(--blue-light)", display: "block", textAlign: "center", marginBottom: "1.5rem" } as CSSProperties}>{t(lang, "Work With Us")}</div>
          <h2 className="cta-title">{t(lang, "Transform Your Institution with Premium Tech")}</h2>
          <p className="cta-desc" style={{ marginBottom: "0.75rem" }}>{t(lang, "Join 450+ institutions powered by Premium CBS and experience smarter, secure, and scalable digital banking solutions.")}</p>
          <p className="cta-desc">{t(lang, "Talk with our experts about your institution’s needs and discover how technology can help you grow.")}</p>
          <div className="cta-actions">
            <Link href={href(lang, "contact")} className="btn-primary" style={{ background: "var(--emerald)", boxShadow: "0 4px 20px rgba(16,185,129,0.4)" } as CSSProperties}>{t(lang, "Get in Touch")}</Link>
            <Link href={href(lang, "products")} className="btn-ghost">{t(lang, "View Products")}</Link>
          </div>
        </div>
      </section>
      <PageEffects />
    </div>
  );
}
