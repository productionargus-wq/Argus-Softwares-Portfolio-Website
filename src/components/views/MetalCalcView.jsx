import React, { useState, useEffect, useRef } from 'react';
import {
  Calculator,
  Lock,
  Receipt,
  FileSpreadsheet,
  Cpu,
  Users,
  Package,
  BookOpen,
  FileText,
  Sliders,
  Building2,
  Palette,
  Download,
  Mail,
  CheckCircle2,
  ZoomIn,
  X,
  ChevronUp,
  Sparkles,
  Laptop
} from 'lucide-react';
import {
  METALCALC_MANUAL_METADATA,
  METALCALC_EXECUTIVE_SUMMARY,
  METALCALC_MODULES,
  TECHNICAL_SPECIFICATIONS,
  DIVISION_INFO
} from '../../data/metalCalcManualData';

const MODULE_ICONS = {
  'module-01': <Lock style={{ width: '18px', height: '18px' }} />,
  'module-02': <Calculator style={{ width: '18px', height: '18px' }} />,
  'module-03': <Receipt style={{ width: '18px', height: '18px' }} />,
  'module-04': <FileSpreadsheet style={{ width: '18px', height: '18px' }} />,
  'module-05': <Cpu style={{ width: '18px', height: '18px' }} />,
  'module-06': <Users style={{ width: '18px', height: '18px' }} />,
  'module-07': <Package style={{ width: '18px', height: '18px' }} />,
  'module-08': <BookOpen style={{ width: '18px', height: '18px' }} />,
  'module-09': <FileText style={{ width: '18px', height: '18px' }} />,
  'module-10': <Sliders style={{ width: '18px', height: '18px' }} />,
  'module-11': <Building2 style={{ width: '18px', height: '18px' }} />,
  'module-12': <Palette style={{ width: '18px', height: '18px' }} />
};

export default function MetalCalcView({ onNavigate, showToast }) {
  const [activeModuleId, setActiveModuleId] = useState('module-01');
  const [lightbox, setLightbox] = useState(null); // { src, caption }
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Live Interactive Quick-Estimator State (Integrated into Module 02)
  const [shape, setShape] = useState('round');
  const [material, setMaterial] = useState('7.85'); // Mild steel default
  const [dimension1, setDimension1] = useState(50); // Diameter or Width in mm
  const [dimension2, setDimension2] = useState(5);  // Thickness/Wall in mm
  const [length, setLength] = useState(1000);       // Length in mm

  const containerRef = useRef(null);

  // Calculate weight in kg
  const density = parseFloat(material) || 7.85; // g/cm³ = kg/dm³
  let volumeCm3 = 0;

  if (shape === 'round') {
    const rCm = (dimension1 / 2) / 10;
    const lCm = length / 10;
    volumeCm3 = Math.PI * rCm * rCm * lCm;
  } else if (shape === 'pipe') {
    const rOuterCm = (dimension1 / 2) / 10;
    const rInnerCm = Math.max(0, (dimension1 / 2 - dimension2) / 10);
    const lCm = length / 10;
    volumeCm3 = Math.PI * (rOuterCm * rOuterCm - rInnerCm * rInnerCm) * lCm;
  } else if (shape === 'square') {
    const sideCm = dimension1 / 10;
    const lCm = length / 10;
    volumeCm3 = sideCm * sideCm * lCm;
  } else if (shape === 'hex') {
    const aCm = (dimension1 / 10);
    const lCm = length / 10;
    volumeCm3 = (Math.sqrt(3) / 2) * aCm * aCm * lCm;
  } else if (shape === 'sheet') {
    const wCm = dimension1 / 10;
    const tCm = dimension2 / 10;
    const lCm = length / 10;
    volumeCm3 = wCm * tCm * lCm;
  }

  const weightKg = ((volumeCm3 * density) / 1000).toFixed(2);

  // Scrollspy & Reading Progress
  useEffect(() => {
    const stage = document.querySelector('.stage');
    if (!stage) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = stage;
      const totalScroll = scrollHeight - clientHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 450);

      const moduleElements = METALCALC_MODULES.map((m) => ({
        id: m.id,
        el: document.getElementById(m.id)
      })).filter((item) => item.el !== null);

      const stageTop = stage.getBoundingClientRect().top;
      let currentActive = 'module-01';

      for (const item of moduleElements) {
        const rect = item.el.getBoundingClientRect();
        if (rect.top - stageTop <= 160) {
          currentActive = item.id;
        }
      }
      setActiveModuleId(currentActive);
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
      setActiveModuleId(id);
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

  return (
    <div className="attendance-manual-view" ref={containerRef}>
      {/* 1. DOCUMENT COVER & HEADER BANNER */}
      <section className="manual-cover-card" id="manual-cover">
        <div className="manual-brand-row">
          <div className="manual-brand-left">
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0072f5, #005ecb)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 114, 245, 0.25)'
              }}
            >
              <Calculator style={{ width: '28px', height: '28px' }} />
            </div>
            <div className="manual-title-group">
              <h1>{METALCALC_MANUAL_METADATA.title}</h1>
              <div className="doc-type" style={{ color: '#0072f5' }}>
                {METALCALC_MANUAL_METADATA.subtitle}
              </div>
            </div>
          </div>
          <div className="manual-actions-group">
            <a
              href={METALCALC_MANUAL_METADATA.pdfDownloadUrl}
              download="ARGUS-MetalCalculator-Operating-Manual-v7.5.0.pdf"
              className="btn-pdf-download"
              title="Download official 14-page vector PDF manual"
              onClick={() => showToast?.('Downloading Official Vector PDF Operating Manual...')}
            >
              <Download style={{ width: '16px', height: '16px' }} />
              <span>Download PDF Manual</span>
            </a>
            <button
              className="btn secondary sm"
              onClick={() => onNavigate?.('contact')}
              title="Request CNC Estimation Suite On-Premise or Cloud Trial"
            >
              <Mail style={{ width: '15px', height: '15px' }} />
              <span>Request Trial</span>
            </button>
          </div>
        </div>

        <p className="manual-tagline">{METALCALC_MANUAL_METADATA.tagline}</p>

        {/* Technical Metadata Grid */}
        <div className="manual-meta-grid">
          <div className="manual-meta-item">
            <span className="manual-meta-label">System Release</span>
            <span className="manual-meta-value">{METALCALC_MANUAL_METADATA.version}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Deployed Organisation</span>
            <span className="manual-meta-value">{METALCALC_MANUAL_METADATA.organisation}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Scope</span>
            <span className="manual-meta-value">{METALCALC_MANUAL_METADATA.scope}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Publisher</span>
            <span className="manual-meta-value">{METALCALC_MANUAL_METADATA.publisher}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Release Date</span>
            <span className="manual-meta-value">{METALCALC_MANUAL_METADATA.releaseDate}</span>
          </div>
          <div className="manual-meta-item">
            <span className="manual-meta-label">Target Industry</span>
            <span className="manual-meta-value">CNC Machine Shops & Precision Fabricators</span>
          </div>
        </div>

        {/* Hero Figure: Figure 2 */}
        <div
          className="manual-figure-box"
          onClick={() =>
            openLightbox(
              METALCALC_MANUAL_METADATA.heroImage,
              METALCALC_MANUAL_METADATA.heroCaption
            )
          }
          title="Click to zoom Metal Calculator interface screenshot"
        >
          <img
            src={METALCALC_MANUAL_METADATA.heroImage}
            alt={METALCALC_MANUAL_METADATA.heroCaption}
            loading="eager"
          />
          <div className="manual-figure-overlay">
            <ZoomIn style={{ width: '14px', height: '14px' }} />
            <span>Click to Inspect Full Resolution (2080×1187)</span>
          </div>
          <div className="manual-figure-caption">
            {METALCALC_MANUAL_METADATA.heroCaption}
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION & TABLE OF CONTENTS */}
      <nav className="manual-sticky-toc" aria-label="Operating Manual Table of Contents">
        <div className="manual-toc-header">
          <span>Table of Contents • Quick Module Jump</span>
          <span>{Math.round(scrollProgress)}% Scrolled</span>
        </div>
        <div className="manual-toc-scroll">
          <button
            className={`manual-toc-pill ${activeModuleId === 'exec-summary' ? 'active' : ''}`}
            onClick={() => scrollToSection('exec-summary')}
          >
            <Sparkles style={{ width: '14px', height: '14px' }} />
            <span>Summary</span>
          </button>
          {METALCALC_MODULES.map((mod) => (
            <button
              key={mod.id}
              className={`manual-toc-pill ${activeModuleId === mod.id ? 'active' : ''}`}
              onClick={() => scrollToSection(mod.id)}
            >
              <span className="num">{mod.number}</span>
              {MODULE_ICONS[mod.id]}
              <span>{mod.shortTitle}</span>
            </button>
          ))}
          <button
            className={`manual-toc-pill ${activeModuleId === 'tech-specs' ? 'active' : ''}`}
            onClick={() => scrollToSection('tech-specs')}
          >
            <Laptop style={{ width: '14px', height: '14px' }} />
            <span>Specs & Arch</span>
          </button>
        </div>
        <div className="manual-progress-bar">
          <div
            className="manual-progress-indicator"
            style={{
              width: `${scrollProgress}%`,
              background: 'linear-gradient(90deg, #0072f5, #ff5500)'
            }}
          ></div>
        </div>
      </nav>

      {/* 3. EXECUTIVE SUMMARY & PLATFORM HIGHLIGHTS */}
      <section className="manual-section-card" id="exec-summary">
        <div className="manual-sec-header">
          <div className="manual-sec-title-wrap">
            <div className="manual-sec-badge-num" style={{ color: '#0072f5', borderColor: 'rgba(0, 114, 245, 0.25)', background: 'rgba(0, 114, 245, 0.08)' }}>
              <Sparkles style={{ width: '18px', height: '18px' }} />
            </div>
            <div className="manual-sec-titles">
              <span className="manual-sec-tag">Enterprise Overview</span>
              <h2>Executive Summary & Operations Scope</h2>
            </div>
          </div>
        </div>

        <p className="manual-sec-summary">{METALCALC_EXECUTIVE_SUMMARY.text}</p>

        {/* 6 Platform Capabilities Highlights */}
        <div className="manual-feature-grid">
          {METALCALC_EXECUTIVE_SUMMARY.highlights.map((h, idx) => (
            <div key={idx} className="manual-feature-item">
              <h4>
                <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--blue)' }} />
                <span>{h.title}</span>
              </h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE 12 FUNCTIONAL ENTERPRISE MODULES */}
      {METALCALC_MODULES.map((mod) => (
        <section key={mod.id} className="manual-section-card" id={mod.id}>
          {/* Module Header */}
          <div className="manual-sec-header">
            <div className="manual-sec-title-wrap">
              <div
                className="manual-sec-badge-num"
                style={{
                  color: '#0072f5',
                  borderColor: 'rgba(0, 114, 245, 0.25)',
                  background: 'rgba(0, 114, 245, 0.08)'
                }}
              >
                {mod.number}
              </div>
              <div className="manual-sec-titles">
                <span className="manual-sec-tag">{mod.badge}</span>
                <h2>MODULE {mod.number}: {mod.title.toUpperCase()}</h2>
              </div>
            </div>
          </div>

          <p className="manual-sec-summary">{mod.summary}</p>

          {/* Ultra-HD Screenshot Figure (2080px) */}
          {mod.image && (
            <div
              className="manual-figure-box"
              onClick={() => openLightbox(mod.image, mod.caption)}
              title="Click to zoom ultra-high-resolution screenshot (2080px)"
            >
              <img src={mod.image} alt={mod.caption} loading="lazy" />
              <div className="manual-figure-overlay">
                <ZoomIn style={{ width: '14px', height: '14px' }} />
                <span>Click to Inspect Full Resolution (2080px)</span>
              </div>
              <div className="manual-figure-caption">{mod.caption}</div>
            </div>
          )}

          {/* Module 02: Embedded Interactive Live Metal Weight Estimator */}
          {mod.hasCalculator && (
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
                    <Calculator style={{ width: '20px', height: '20px', color: 'var(--orange)' }} />
                    Live MetalCalc Quick-Estimator (Interactive Preview)
                  </h3>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
                    Select shape, density and dimensions to calculate raw billet piece mass in real time.
                  </p>
                </div>
                <span className="ver" style={{ fontSize: '11px' }}>Interactive CAD Engine</span>
              </div>

              <div className="calc-grid" style={{ marginTop: '16px' }}>
                <div className="calc-field">
                  <label htmlFor="metal-shape">Shape / Profile</label>
                  <select id="metal-shape" value={shape} onChange={(e) => setShape(e.target.value)}>
                    <option value="round">Round Bar / Wire</option>
                    <option value="pipe">Hollow Pipe / Tube</option>
                    <option value="square">Square Bar</option>
                    <option value="hex">Hexagonal Bar</option>
                    <option value="sheet">Flat Bar / Plate / Sheet</option>
                  </select>
                </div>

                <div className="calc-field">
                  <label htmlFor="metal-mat">Metallurgical Material</label>
                  <select id="metal-mat" value={material} onChange={(e) => setMaterial(e.target.value)}>
                    <option value="7.85">Carbon Steel / Mild Steel (7.85 g/cm³)</option>
                    <option value="8.00">Stainless Steel 304/316 (8.00 g/cm³)</option>
                    <option value="2.70">Aluminium Alloys (2.70 g/cm³)</option>
                    <option value="8.50">Brass (8.50 g/cm³)</option>
                    <option value="8.96">Copper (8.96 g/cm³)</option>
                  </select>
                </div>

                <div className="calc-field">
                  <label htmlFor="metal-d1">
                    {shape === 'sheet' ? 'Width (mm)' : shape === 'pipe' ? 'Outer Dia (mm)' : 'Dia / Side (mm)'}
                  </label>
                  <input
                    id="metal-d1"
                    type="number"
                    min="1"
                    value={dimension1}
                    onChange={(e) => setDimension1(Number(e.target.value))}
                  />
                </div>

                {(shape === 'pipe' || shape === 'sheet') && (
                  <div className="calc-field">
                    <label htmlFor="metal-d2">
                      {shape === 'pipe' ? 'Wall Thick (mm)' : 'Thickness (mm)'}
                    </label>
                    <input
                      id="metal-d2"
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={dimension2}
                      onChange={(e) => setDimension2(Number(e.target.value))}
                    />
                  </div>
                )}

                <div className="calc-field">
                  <label htmlFor="metal-length">Length (mm)</label>
                  <input
                    id="metal-length"
                    type="number"
                    min="10"
                    step="50"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-result-box" style={{ marginTop: '16px' }}>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.6px',
                      fontWeight: 700,
                      color: '#475569'
                    }}
                  >
                    Calculated Raw Billet Weight
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Profile: {shape.toUpperCase()} | Length: {length}mm | Density: {density} g/cm³
                  </div>
                </div>
                <div className="val" style={{ color: '#0072f5' }}>{weightKg} kg</div>
              </div>
            </div>
          )}

          {/* Specifications & Capabilities Table */}
          {mod.specs && (
            <div className="manual-table-container">
              <table className="manual-table">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Functional Capability</th>
                    <th style={{ width: '68%' }}>Engineering Scope & Operational Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {mod.specs.map((s, sIdx) => (
                    <tr key={sIdx}>
                      <td className="bold">{s.label}</td>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Operational Tip Callout Box */}
          {mod.tip && (
            <div className={`manual-callout ${mod.tip.type}`}>
              <div className="manual-callout-icon">
                <CheckCircle2 style={{ width: '22px', height: '22px' }} />
              </div>
              <div className="manual-callout-content">
                <h4>{mod.tip.title}</h4>
                <p>{mod.tip.text}</p>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* 5. SUMMARY: OPERATIONS & PLATFORM ARCHITECTURE */}
      <section className="manual-section-card" id="tech-specs">
        <div className="manual-sec-header">
          <div className="manual-sec-title-wrap">
            <div
              className="manual-sec-badge-num"
              style={{
                color: '#0072f5',
                borderColor: 'rgba(0, 114, 245, 0.25)',
                background: 'rgba(0, 114, 245, 0.08)'
              }}
            >
              14
            </div>
            <div className="manual-sec-titles">
              <span className="manual-sec-tag">Technical Benchmark</span>
              <h2>System Specifications & Architecture Summary</h2>
            </div>
          </div>
        </div>

        <p className="manual-sec-summary">
          The Argus Quotation Suite & Metal Calculator delivers an end-to-end digital workflow that bridges the gap between workshop CAD engineering and front-office commercial sales. By integrating geometric CAD volume calculations, daily live commodity market rates, AI-driven cycle time estimation, multi-entity branding, and seamless PDF quotation generation, the suite empowers modern CNC job shops and precision manufacturers to win more tenders, eliminate estimation errors, and accelerate cash flow.
        </p>

        <div className="manual-table-container">
          <table className="manual-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Technical Specification</th>
                <th style={{ width: '70%' }}>Enterprise Configuration & Performance Benchmark</th>
              </tr>
            </thead>
            <tbody>
              {TECHNICAL_SPECIFICATIONS.map((item, idx) => (
                <tr key={idx}>
                  <td className="bold">{item.spec}</td>
                  <td>{item.benchmark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Division Footer */}
        <div className="manual-division-footer">
          <strong>{DIVISION_INFO.division}</strong>
          <div>{DIVISION_INFO.tagline}</div>
          <div style={{ marginTop: '4px' }}>
            {DIVISION_INFO.location} | Web:{' '}
            <a
              href={`https://${DIVISION_INFO.web}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DIVISION_INFO.web}
            </a>{' '}
            | Email:{' '}
            <a href={`mailto:${DIVISION_INFO.email}`}>
              {DIVISION_INFO.email}
            </a>
          </div>
          <div style={{ marginTop: '8px', fontSize: '11.5px', opacity: 0.8 }}>
            {DIVISION_INFO.copyright}
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX MODAL FOR ULTRA-HD SCREENSHOT INSPECTION */}
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

      {/* 7. FLOATING BACK TO TOP BUTTON */}
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
