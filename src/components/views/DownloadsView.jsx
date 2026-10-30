import React, { useRef } from 'react';
import { Download, Calculator, Users, Database, Upload, ArrowRight, Shield, Globe, ExternalLink } from 'lucide-react';
import HeroSection from './HeroSection';

export default function DownloadsView({ onNavigate, uploads, onUpload, onDownload, showToast }) {
  const fileInputRef = useRef(null);

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
        <article className="card">
          <div className="top">
            <div className="ic">
              <Calculator />
            </div>
            <div>
              <h3>MetalCalc</h3>
              <div className="sub">Precision calculations for modern manufacturing.</div>
            </div>
            <div className="ver">v1.0.1</div>
          </div>
          <div className="thumb">
            <div className="mock">
              <b>Metal Weight Calculator</b>
              Pipe • Sheet • Angle<br />
              Channel • I-Beam<br />
              Custom Section
            </div>
            <div className="shape"></div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>Fast & accurate machine shop calculations</span></li>
            <li><i>•</i><span>Windows 10 / 11 64-bit native application</span></li>
            <li><i>•</i><span>Offline standalone executable</span></li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Primary Unified Brand Action */}
            <a
              href="https://metalcalcquote.arguscnc.com/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Open MetalCalc Live Web Application in a new tab"
            >
              <Globe style={{ width: '16px', height: '16px' }} />
              <span>Launch Live Web App</span>
              <ExternalLink style={{ width: '14px', height: '14px', opacity: 0.85 }} />
            </a>

            {/* Compact Secondary 2-Column Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
              <a
                href="https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/download/v1.0.1/MetalCalculator-Setup-Windows.exe"
                className="btn secondary sm"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{ justifyContent: 'center' }}
                title="Download Windows Setup (.exe 44.7 MB)"
              >
                <Download style={{ width: '14px', height: '14px' }} />
                <span>Windows (.exe 44.7 MB)</span>
              </a>

              <button
                className="btn secondary sm"
                onClick={() => onNavigate('products')}
                title="View Mac, Android, iOS downloads"
              >
                <span>All Platforms</span>
              </button>
            </div>
          </div>
          <div className="small">
            Official MetalCalc v1.0.1 • Direct GitHub Release CDN
          </div>
        </article>

        {/* Attendance Intelligence Download Card */}
        <article className="card">
          <div className="top">
            <div className="ic blue">
              <Users />
            </div>
            <div>
              <h3>Attendance Intelligence</h3>
              <div className="sub">Smart attendance for productive teams.</div>
            </div>
            <div className="ver blue">v2.0.0</div>
          </div>
          <div className="thumb">
            <div className="mock">
              <b>Today's Attendance</b>
              Present 48<br />
              Absent 3<br />
              On Leave 2
            </div>
            <div className="mock">
              <b>Company Login</b>
              Dashboard<br />
              Attendance<br />
              Reports
            </div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>Employee biometric & check-in sync</span></li>
            <li><i>•</i><span>Shift & overtime automated calculations</span></li>
            <li><i>•</i><span>Export-ready Excel & PDF generation</span></li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Primary Unified Brand Action */}
            <a
              href="https://argusattendanceintelligence.argussoftwares.com/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Open AI Attendance Live Web Application in a new tab"
            >
              <Globe style={{ width: '16px', height: '16px' }} />
              <span>Launch Live Web App</span>
              <ExternalLink style={{ width: '14px', height: '14px', opacity: 0.85 }} />
            </a>

            {/* Compact Secondary 2-Column Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
              <a
                href="https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-Setup-Windows.exe"
                className="btn secondary sm"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{ justifyContent: 'center' }}
                title="Download Windows Setup (.exe 152.1 MB)"
              >
                <Download style={{ width: '14px', height: '14px' }} />
                <span>Windows (.exe 152.1 MB)</span>
              </a>

              <button
                className="btn secondary sm"
                onClick={() => onNavigate('products')}
                title="View Mac, Android, iOS downloads"
              >
                <span>All Platforms</span>
              </button>
            </div>
          </div>
          <div className="small">
            Official AI Attendance v2.0.0 • Auto-sync with GitHub CDN
          </div>
        </article>

        {/* ERP App Download Card */}
        <article className="card">
          <div className="top">
            <div className="ic purple">
              <Database />
            </div>
            <div>
              <h3>ERP App</h3>
              <div className="sub">Manage your entire business in one place.</div>
            </div>
            <div className="ver purple">v2.4.3</div>
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
            <li><i>•</i><span>Purchase, GRN and automated billing flow</span></li>
            <li><i>•</i><span>Multi-tier permission management</span></li>
          </ul>
          {uploads['erp'] ? (
            <button className="btn" onClick={() => onDownload('erp')}>
              <Download />
              <span>Download ({uploads['erp'].name})</span>
            </button>
          ) : (
            <button className="btn" onClick={() => triggerUpload('erp')}>
              <Upload />
              <span>Load Local Installer</span>
            </button>
          )}
          <div className="small">
            {uploads['erp']
              ? `Loaded: ${(uploads['erp'].size / 1024 / 1024).toFixed(1)} MB installer ready`
              : 'Add a local EXE / MSI / ZIP in the browser preview'}
          </div>
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
              <p>Choose a local setup file from your computer and connect it to MetalCalc, Attendance or ERP in the preview.</p>
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
    </>
  );
}
