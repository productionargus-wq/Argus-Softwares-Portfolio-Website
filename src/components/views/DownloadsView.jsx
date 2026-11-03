import React, { useState, useRef } from 'react';
import { Download, Calculator, Users, Database, Upload, ArrowRight, Shield, Globe, ExternalLink } from 'lucide-react';
import HeroSection from './HeroSection';
import ProductDownloadModal from './ProductDownloadModal';

export default function DownloadsView({ onNavigate, uploads, onUpload, onDownload, showToast }) {
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const fileInputRef = useRef(null);

  const openDownloadModal = (productKey, e) => {
    e?.stopPropagation();
    setActiveModalProduct(productKey);
  };

  const handleFileChange = (e, productKey = 'metalcalc') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const valid = /\.(exe|msi|zip)$/i.test(file.name);
    if (!valid) {
      showToast('Please choose .exe, .msi, or .zip files only.');
      return;
    }

    onUpload(productKey, file);
    showToast(`Installer "${file.name}" linked to ${productKey.toUpperCase()} preview.`);
    e.target.value = '';
  };

  const triggerUpload = (productKey) => {
    if (fileInputRef.current) {
      fileInputRef.current.dataset.product = productKey;
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <HeroSection
        eyebrow="Software Delivery"
        line1="Down"
        line2="loads"
        desc="A professional download center where center content does all the work while the left and right rails stay minimal."
        mainIcon="Download"
      />

      <input
        type="file"
        ref={fileInputRef}
        hidden
        accept=".exe,.msi,.zip"
        onChange={(e) => handleFileChange(e, fileInputRef.current?.dataset.product || 'metalcalc')}
      />

      <div className="grid3">
        {/* MetalCalc Download Card */}
        <article className="card clickable-card" onClick={() => onNavigate('metalcalc')}>
          <div className="top">
            <div className="ic">
              <Calculator />
            </div>
            <div>
              <h3>MetalCalc</h3>
              <div className="sub">Engineering calculations for manufacturing.</div>
            </div>
            <div className="ver">v1.0.1</div>
          </div>
          <div className="thumb">
            <div className="mock">
              <b>Metal Weight Calculator</b>
              Round • Square • Flat<br />
              Pipe • Hex • Angle<br />
              Channel • I-Beam
            </div>
            <div className="shape"></div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>Fast & accurate machine shop calculations</span></li>
            <li><i>•</i><span>8 geometric profiles, CAD SVG & Metals-API</span></li>
            <li><i>•</i><span>Desktop (.exe, .dmg) & Mobile (.apk, .ipa)</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', alignItems: 'center' }}>
            <button
              className="btn"
              style={{ flex: 1, background: 'linear-gradient(180deg, var(--orange), #d94800)' }}
              onClick={(e) => openDownloadModal('metalcalc', e)}
              title="Download MetalCalc for Windows, macOS, Android, iOS"
            >
              <Download style={{ width: '16px', height: '16px' }} />
              <span>Download</span>
            </button>
            <a
              href="https://metalcalcquote.arguscnc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
              style={{ padding: '0 10px', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={(e) => e.stopPropagation()}
              title="Launch MetalCalc Live Online Web App in a new tab"
            >
              <Globe style={{ width: '16px', height: '16px', color: 'var(--orange)' }} />
            </a>
          </div>
          <div className="small">Click card to open full interactive feature guide & manual</div>
        </article>

        {/* Attendance Intelligence Download Card */}
        <article className="card clickable-card" onClick={() => onNavigate('attendance')}>
          <div className="top">
            <div className="ic blue">
              <Users />
            </div>
            <div>
              <h3>Attendance Intelligence</h3>
              <div className="sub">Track workforce activity and reporting.</div>
            </div>
            <div className="ver blue">v2.0.0</div>
          </div>
          <div className="stats">
            <div className="stat green">
              <b>48</b>
              Present Today
            </div>
            <div className="stat orange">
              <b>3</b>
              Absent Workers
            </div>
            <div className="stat blue">
              <b>2</b>
              On Leave
            </div>
            <div className="stat teal">
              <b>100%</b>
              Biometric & GPS Sync
            </div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>128D Face Biometrics & GPS Geofencing</span></li>
            <li><i>•</i><span>Automated payroll, shifts & report generation</span></li>
            <li><i>•</i><span>Desktop Console (.exe) & Mobile Punch (.apk)</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', alignItems: 'center' }}>
            <button
              className="btn"
              style={{ flex: 1, background: 'linear-gradient(180deg, var(--green), #00936b)' }}
              onClick={(e) => openDownloadModal('attendance', e)}
              title="Download Attendance Intelligence for Windows, macOS, Android, iOS"
            >
              <Download style={{ width: '16px', height: '16px' }} />
              <span>Download</span>
            </button>
            <a
              href="https://argusattendanceintelligence.argussoftwares.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
              style={{ padding: '0 10px', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={(e) => e.stopPropagation()}
              title="Launch AI Attendance Live Online Web App in a new tab"
            >
              <Globe style={{ width: '16px', height: '16px', color: 'var(--green)' }} />
            </a>
          </div>
          <div className="small">Click card to open full interactive feature guide & manual</div>
        </article>

        {/* Business Intelligence Download Card */}
        <article className="card clickable-card" onClick={(e) => openDownloadModal('erp', e)}>
          <div className="top">
            <div className="ic purple">
              <Database />
            </div>
            <div>
              <h3>Business Intelligence</h3>
              <div className="sub">Business operations in one place.</div>
            </div>
            <div className="ver purple">v2.0.0</div>
          </div>
          <div className="stats">
            <div className="stat green">
              <b>₹12.4L</b>
              Total Sales
            </div>
            <div className="stat blue">
              <b>₹8.1L</b>
              Total Purchase
            </div>
            <div className="stat purple">
              <b>320</b>
              Total Items
            </div>
            <div className="stat orange">
              <b>48</b>
              Total Customers
            </div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>Inventory & warehouse live stock control</span></li>
            <li><i>•</i><span>Server & Workstation install (.exe, .msi)</span></li>
            <li><i>•</i><span>Shop-Floor Barcode Scanner (.apk, .ipa)</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <button
              className="btn"
              style={{ flex: 1, background: 'linear-gradient(180deg, var(--purple), #5e1cb0)' }}
              onClick={(e) => openDownloadModal('erp', e)}
              title="View download files for Windows, Mac, Android, iOS"
            >
              <Download style={{ width: '16px', height: '16px' }} />
              <span>Download</span>
            </button>
            <button
              className="btn secondary"
              style={{ padding: '0 12px' }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('erp');
              }}
              title="Explore live Business Intelligence operations dashboard"
            >
              <ExternalLink style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          <div className="small">Click to view .exe, .dmg, .apk packages</div>
        </article>
      </div>

      <div className="split">
        {/* Admin Upload Simulator Box */}
        <div className="box">
          <h3>Admin upload preview</h3>
          <p>
            This front-end preview lets you choose a local installer file and attach it to a software card inside the browser only. Nothing is uploaded online. This is useful to test the UI flow before building the real backend.
          </p>
          <div className="upload-grid">
            <div className="upload-drop">
              <b>EXE, MSI or ZIP file</b>
              <p>Choose a local setup file from your computer and connect it to MetalCalc, Attendance or Business Intelligence in the preview.</p>
              <button className="btn secondary" onClick={() => triggerUpload('metalcalc')}>
                <Upload style={{ width: '16px', height: '16px' }} />
                <span>Choose installer file</span>
              </button>
            </div>
            <div className="upload-drop">
              <b>Professional publishing</b>
              <p>For live website deployment, connect this UI to a secure admin-only backend upload panel and release manager.</p>
              <button className="btn secondary" onClick={() => onNavigate('contact')}>
                Discuss implementation
              </button>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="box">
          <h3>What happens here</h3>
          <p>
            Every 5 seconds this website can automatically move to the next concept. If the visitor manually interacts with the side rails, the selected window is shown immediately and the timer restarts from that point.
          </p>
          <div className="feature-row" style={{ flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
            <div className="mini-card" style={{ width: '100%' }}>
              <Download style={{ color: 'var(--orange)' }} />
              <div>
                <b>Auto play</b>
                <span>Presentation-like smooth browsing across products</span>
              </div>
            </div>
            <div className="mini-card" style={{ width: '100%' }}>
              <ArrowRight style={{ color: 'var(--blue)' }} />
              <div>
                <b>Manual override</b>
                <span>Immediate section switch on rail click or hover</span>
              </div>
            </div>
            <div className="mini-card" style={{ width: '100%' }}>
              <Shield style={{ color: 'var(--green)' }} />
              <div>
                <b>Focused center</b>
                <span>Main content always retains primary screen focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Downloads Modal */}
      {activeModalProduct && (
        <ProductDownloadModal
          productKey={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          showToast={showToast}
        />
      )}
    </>
  );
}
