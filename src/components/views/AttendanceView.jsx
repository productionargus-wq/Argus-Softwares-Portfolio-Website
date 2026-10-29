import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  Calendar,
  LayoutGrid,
  Shield,
  Mail,
  CheckCircle2,
  Clock,
  Download,
  ZoomIn,
  X,
  ChevronUp,
  Lock,
  ShieldCheck,
  MapPin,
  Cpu,
  Eye,
  Building2,
  Smartphone,
  HelpCircle,
  Sparkles,
  DollarSign
} from 'lucide-react';
import {
  ATTENDANCE_MANUAL_METADATA,
  PLATFORM_ADVANTAGES,
  ARCHITECTURE_COMPONENTS,
  MANUAL_SECTIONS
} from '../../data/attendanceManualData';

const SECTION_ICONS = {
  'section-1': <Lock style={{ width: '18px', height: '18px' }} />,
  'section-2': <LayoutGrid style={{ width: '18px', height: '18px' }} />,
  'section-3': <Cpu style={{ width: '18px', height: '18px' }} />,
  'section-4': <Users style={{ width: '18px', height: '18px' }} />,
  'section-5': <Eye style={{ width: '18px', height: '18px' }} />,
  'section-6': <Calendar style={{ width: '18px', height: '18px' }} />,
  'section-7': <DollarSign style={{ width: '18px', height: '18px' }} />,
  'section-8': <MapPin style={{ width: '18px', height: '18px' }} />,
  'section-9': <Building2 style={{ width: '18px', height: '18px' }} />,
  'section-10': <Smartphone style={{ width: '18px', height: '18px' }} />,
  'section-11': <HelpCircle style={{ width: '18px', height: '18px' }} />,
  'section-12': <ShieldCheck style={{ width: '18px', height: '18px' }} />
};

export default function AttendanceView({ onNavigate, showToast }) {
  const [activeSectionId, setActiveSectionId] = useState('section-1');
  const [lightbox, setLightbox] = useState(null); // { src, caption }
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Live Simulator State (integrated within Section 3)
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const containerRef = useRef(null);

  // Scrollspy & Progress calculation
  useEffect(() => {
    // Find the scrolling parent container (.stage)
    const stage = document.querySelector('.stage');
    if (!stage) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = stage;
      const totalScroll = scrollHeight - clientHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 450);

      // Determine active section by offset
      const sectionElements = MANUAL_SECTIONS.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id)
      })).filter((item) => item.el !== null);

      const stageTop = stage.getBoundingClientRect().top;

      let currentActive = 'section-1';
      for (const item of sectionElements) {
        const rect = item.el.getBoundingClientRect();
        if (rect.top - stageTop <= 160) {
          currentActive = item.id;
        }
      }
      setActiveSectionId(currentActive);
    };

    stage.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => stage.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionId(id);
    }
  };

  const scrollToTop = () => {
    const stage = document.querySelector('.stage');
    if (stage) {
      stage.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openLightbox = (src, caption) => {
    setLightbox({ src, caption });
  };

  const toggleCheckIn = () => {
    if (!checkedIn) {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCheckedIn(true);
      setCheckInTime(now);
      showToast?.(`Facial Biometrics Verified! Punched In Successfully at ${now}`);
    } else {
      setCheckedIn(false);
      showToast?.(`Punched Out Successfully. Total duty shift calculated.`);
    }
  };

  return (
    <div className="attendance-manual-view" ref={containerRef}>
      {/* 1. DOCUMENT COVER & HEADER BANNER */}
      <section className="manual-cover-card" id="manual-cover">
        <div className="manual-brand-row">
          <div className="manual-brand-left">
            <img
              src="/attendance-manual/argus_logo.png"
              alt="ARGUS Technologies Logo"
              className="manual-logo-img"
            />
            <div className="manual-title-group">
              <h1>{ATTENDANCE_MANUAL_METADATA.title}</h1>
              <div className="doc-type">{ATTENDANCE_MANUAL_METADATA.subtitle}</div>
            </div>
          </div>
          <div className="manual-actions-group">
            <a
              href={ATTENDANCE_MANUAL_METADATA.pdfDownloadUrl}
              download="ARGUS-Attendance-Operating-Manual-v5.1.pdf"
              className="btn-pdf-download"
              title="Download full 17-page vector PDF manual"
              onClick={() => showToast?.('Downloading Official Vector PDF Operating Manual...')}
            >
              <Download style={{ width: '16px', height: '16px' }} />
              <span>Download PDF Manual</span>
            </a>
            <button
              className="btn secondary sm"
              onClick={() => onNavigate?.('contact')}
              title="Request Enterprise On-Premise or Cloud Trial"
            >
              <Mail style={{ width: '15px', height: '15px' }} />
              <span>Request Trial</span>
            </button>
          </div>
        </div>

        <p className="manual-tagline">{ATTENDANCE_MANUAL_METADATA.tagline}</p>

        {/* Technical Metadata Grid */}
        <div className="manual-meta-grid">
          <div className="manual-meta-item">
            <span className="manual-meta-label">Document Version</span>
            <span className="manual-meta-value">{ATTENDANCE_MANUAL_METADATA.version}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Target Audience</span>
            <span className="manual-meta-value">{ATTENDANCE_MANUAL_METADATA.targetAudience}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Core Platform</span>
            <span className="manual-meta-value">{ATTENDANCE_MANUAL_METADATA.corePlatform}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Security & Compliance</span>
            <span className="manual-meta-value">{ATTENDANCE_MANUAL_METADATA.securityCompliance}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Publisher</span>
            <span className="manual-meta-value">{ATTENDANCE_MANUAL_METADATA.publisher}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Release Date</span>
            <span className="manual-meta-value">{ATTENDANCE_MANUAL_METADATA.releaseDate}</span>
          </div>
        </div>

        {/* Hero Figure: Figure 0 */}
        <div
          className="manual-figure-box"
          onClick={() =>
            openLightbox(
              ATTENDANCE_MANUAL_METADATA.heroImage,
              ATTENDANCE_MANUAL_METADATA.heroCaption
            )
          }
          title="Click to zoom executive dashboard screenshot"
        >
          <img
            src={ATTENDANCE_MANUAL_METADATA.heroImage}
            alt={ATTENDANCE_MANUAL_METADATA.heroCaption}
            loading="eager"
          />
          <div className="manual-figure-overlay">
            <ZoomIn style={{ width: '14px', height: '14px' }} />
            <span>Click to Inspect Full Resolution (1422×798)</span>
          </div>
          <div className="manual-figure-caption">
            {ATTENDANCE_MANUAL_METADATA.heroCaption}
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION & TABLE OF CONTENTS */}
      <nav className="manual-sticky-toc" aria-label="Operating Manual Table of Contents">
        <div className="manual-toc-header">
          <span>Table of Contents • Quick Section Jump</span>
          <span>{Math.round(scrollProgress)}% Scrolled</span>
        </div>
        <div className="manual-toc-scroll">
          <button
            className={`manual-toc-pill ${activeSectionId === 'arch-overview' ? 'active' : ''}`}
            onClick={() => scrollToSection('arch-overview')}
          >
            <Sparkles style={{ width: '14px', height: '14px' }} />
            <span>Architecture</span>
          </button>
          {MANUAL_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              className={`manual-toc-pill ${activeSectionId === sec.id ? 'active' : ''}`}
              onClick={() => scrollToSection(sec.id)}
            >
              <span className="num">{sec.number}</span>
              {SECTION_ICONS[sec.id]}
              <span>{sec.shortTitle}</span>
            </button>
          ))}
        </div>
        <div className="manual-progress-bar">
          <div
            className="manual-progress-indicator"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

      {/* 3. EXECUTIVE SUMMARY & PLATFORM ARCHITECTURE */}
      <section className="manual-section-card" id="arch-overview">
        <div className="manual-sec-header">
          <div className="manual-sec-title-wrap">
            <div className="manual-sec-badge-num">
              <Sparkles style={{ width: '18px', height: '18px' }} />
            </div>
            <div className="manual-sec-titles">
              <span className="manual-sec-tag">Foundational Overview</span>
              <h2>Executive Summary & Platform Architecture</h2>
            </div>
          </div>
        </div>

        <p className="manual-sec-summary">
          The <strong>ARGUS AI Attendance System</strong> is a multi-tenant enterprise human capital platform engineered to automate staff identification, attendance logging, leave governance, and end-to-end payroll computation without requiring expensive biometric hardware. Utilizing computer vision neural networks, the system converts standard webcams and smartphone cameras into sub-second facial recognition terminals with anti-spoofing liveness verification.
        </p>

        {/* 5 Operational Advantages */}
        <div className="manual-feature-grid">
          {PLATFORM_ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="manual-feature-item">
              <h4>
                <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--green)' }} />
                <span>{adv.title}</span>
              </h4>
              <p>{adv.desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture Table */}
        <h3 style={{ fontSize: '16px', margin: '22px 0 10px', color: 'var(--text)' }}>
          Core Technological Architecture Matrix
        </h3>
        <div className="manual-table-container">
          <table className="manual-table">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Component</th>
                <th style={{ width: '38%' }}>Technology / Implementation</th>
                <th style={{ width: '40%' }}>Function & Enterprise Advantage</th>
              </tr>
            </thead>
            <tbody>
              {ARCHITECTURE_COMPONENTS.map((row, idx) => (
                <tr key={idx}>
                  <td className="bold">{row.component}</td>
                  <td><code>{row.tech}</code></td>
                  <td>{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. THE 12 FUNCTIONAL ENTERPRISE MODULES */}
      {MANUAL_SECTIONS.map((sec) => (
        <section key={sec.id} className="manual-section-card" id={sec.id}>
          {/* Section Header */}
          <div className="manual-sec-header">
            <div className="manual-sec-title-wrap">
              <div className="manual-sec-badge-num">{sec.number}</div>
              <div className="manual-sec-titles">
                <span className="manual-sec-tag">{sec.badge}</span>
                <h2>SECTION {sec.number}: {sec.title.toUpperCase()}</h2>
              </div>
            </div>
          </div>

          <p className="manual-sec-summary">{sec.summary}</p>

          {/* Main Section Image (if present) */}
          {sec.image && (
            <div
              className="manual-figure-box"
              onClick={() => openLightbox(sec.image, sec.caption)}
              title="Click to zoom screenshot"
            >
              <img src={sec.image} alt={sec.caption} loading="lazy" />
              <div className="manual-figure-overlay">
                <ZoomIn style={{ width: '14px', height: '14px' }} />
                <span>Click to Inspect Full Resolution</span>
              </div>
              <div className="manual-figure-caption">{sec.caption}</div>
            </div>
          )}

          {/* Subsections (e.g. 1.1, 1.2, 1.3, etc.) */}
          {sec.subsections && sec.subsections.map((sub, sIdx) => (
            <div key={sIdx} className="manual-subsection">
              <h3>{sub.title}</h3>
              <p>{sub.text}</p>

              {/* Single Image */}
              {sub.image && (
                <div
                  className="manual-figure-box"
                  onClick={() => openLightbox(sub.image, sub.caption)}
                  title="Click to zoom screenshot"
                >
                  <img src={sub.image} alt={sub.caption} loading="lazy" />
                  <div className="manual-figure-overlay">
                    <ZoomIn style={{ width: '14px', height: '14px' }} />
                    <span>Click to Inspect Full Resolution</span>
                  </div>
                  <div className="manual-figure-caption">{sub.caption}</div>
                </div>
              )}

              {/* Dual Side-by-Side Images */}
              {sub.dualImages && (
                <div className="manual-dual-figures">
                  {sub.dualImages.map((dimg, dIdx) => (
                    <div
                      key={dIdx}
                      className="manual-figure-box"
                      onClick={() => openLightbox(dimg.image, dimg.caption)}
                      title="Click to zoom screenshot"
                    >
                      <img src={dimg.image} alt={dimg.caption} loading="lazy" />
                      <div className="manual-figure-overlay">
                        <ZoomIn style={{ width: '14px', height: '14px' }} />
                        <span>Zoom</span>
                      </div>
                      <div className="manual-figure-caption">{dimg.caption}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Metrics Table (Section 2) */}
          {sec.metricsTable && (
            <div className="manual-table-container">
              <table className="manual-table">
                <thead>
                  <tr>
                    <th style={{ width: '28%' }}>Metric Card</th>
                    <th style={{ width: '72%' }}>Description & Business Value</th>
                  </tr>
                </thead>
                <tbody>
                  {sec.metricsTable.map((m, mIdx) => (
                    <tr key={mIdx}>
                      <td className="bold">{m.metric}</td>
                      <td>{m.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Feature List (Section 3, 9, 10) */}
          {sec.features && (
            <div className="manual-feature-grid">
              {sec.features.map((feat, fIdx) => (
                <div key={fIdx} className="manual-feature-item">
                  <h4>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--green)' }} />
                    <span>{feat.title}</span>
                  </h4>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Parameters Table (Section 4, 8) */}
          {sec.parameters && (
            <div className="manual-table-container">
              <table className="manual-table">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Configurable Parameter</th>
                    <th style={{ width: '68%' }}>Operational Function & Business Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {sec.parameters.map((p, pIdx) => (
                    <tr key={pIdx}>
                      <td className="bold">{p.param}</td>
                      <td>{p.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Security Specifications Matrix (Section 12) */}
          {sec.securitySpecs && (
            <div className="manual-table-container">
              <table className="manual-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Domain</th>
                    <th style={{ width: '35%' }}>Specification / Standard</th>
                    <th style={{ width: '40%' }}>Enterprise Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {sec.securitySpecs.map((spec, sIdx) => (
                    <tr key={sIdx}>
                      <td className="bold">{spec.domain}</td>
                      <td><code>{spec.standard}</code></td>
                      <td>{spec.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Callout Alert */}
          {sec.callout && (
            <div className={`manual-callout ${sec.callout.type}`}>
              <div className="manual-callout-icon">
                {sec.callout.type === 'security' && <Shield style={{ width: '22px', height: '22px' }} />}
                {sec.callout.type === 'bestpractice' && <Sparkles style={{ width: '22px', height: '22px' }} />}
                {sec.callout.type === 'compliance' && <ShieldCheck style={{ width: '22px', height: '22px' }} />}
              </div>
              <div className="manual-callout-content">
                <h4>{sec.callout.title}</h4>
                {sec.callout.text && <p>{sec.callout.text}</p>}
                {sec.callout.bullets && (
                  <ul>
                    {sec.callout.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Interactive Biometric Punch Simulator (Embedded within Section 3) */}
          {sec.hasSimulator && (
            <div
              className="box interactive-calc-preview"
              style={{ marginTop: '20px', border: '1px solid #cbd5e1' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: '17px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Cpu style={{ width: '20px', height: '20px', color: 'var(--green)' }} />
                    Live Biometric Punch-In / Out Simulation Terminal
                  </h3>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
                    Simulate real-time 128D face vector detection and immediate shop-floor logging.
                  </p>
                </div>
                <button
                  className="btn"
                  onClick={toggleCheckIn}
                  style={{
                    padding: '8px 18px',
                    fontSize: '13px',
                    background: checkedIn
                      ? 'linear-gradient(180deg, #dc2626, #b91c1c)'
                      : 'linear-gradient(180deg, var(--green), #00936b)'
                  }}
                >
                  <Clock style={{ width: '15px', height: '15px' }} />
                  <span>
                    {checkedIn
                      ? `Punch Out (Logged at ${checkInTime})`
                      : 'Simulate Biometric Punch-In'}
                  </span>
                </button>
              </div>

              <div
                style={{
                  marginTop: '16px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '10px'
                }}
              >
                <div className="stat green">
                  <b>{checkedIn ? 47 : 46}</b>
                  <span>Present Today</span>
                </div>
                <div className="stat orange">
                  <b>3</b>
                  <span>Late Arrivals</span>
                </div>
                <div className="stat blue">
                  <b>2</b>
                  <span>On Paid Leave</span>
                </div>
                <div className="stat purple">
                  <b>95.8%</b>
                  <span>Shift Compliance</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '12.5px',
                  color: '#334155'
                }}
              >
                <CheckCircle2
                  style={{
                    width: '16px',
                    height: '16px',
                    color: 'var(--green)',
                    flexShrink: 0
                  }}
                />
                <span>
                  Anti-Spoofing Liveness Verified • Sub-400ms 128D Vector Match • Auto-Directional Direction IN/OUT
                </span>
              </div>
            </div>
          )}

          {/* Division Contact Information (Section 12 footer) */}
          {sec.contactInfo && (
            <div className="manual-division-footer">
              <strong>{sec.contactInfo.division}</strong>
              <div>
                {sec.contactInfo.location} | Web:{' '}
                <a
                  href={`https://${sec.contactInfo.web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sec.contactInfo.web}
                </a>{' '}
                | Support:{' '}
                <a href={`mailto:${sec.contactInfo.email}`}>
                  {sec.contactInfo.email}
                </a>
              </div>
              <div style={{ marginTop: '8px', fontSize: '11.5px', opacity: 0.8 }}>
                {sec.contactInfo.copyright}
              </div>
            </div>
          )}
        </section>
      ))}

      {/* 5. LIGHTBOX MODAL FOR HIGH-RES SCREENSHOT INSPECTION */}
      {lightbox && (
        <div
          className="manual-lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="manual-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="manual-lightbox-header">
              <span className="manual-lightbox-title">{lightbox.caption}</span>
              <button
                className="manual-lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close high-resolution preview"
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
            <div className="manual-lightbox-image-wrap">
              <img src={lightbox.src} alt={lightbox.caption} />
            </div>
          </div>
        </div>
      )}

      {/* 6. FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          className="manual-back-to-top"
          onClick={scrollToTop}
          title="Scroll back to top of Operating Manual"
          aria-label="Back to top"
        >
          <ChevronUp style={{ width: '20px', height: '20px' }} />
        </button>
      )}
    </div>
  );
}
