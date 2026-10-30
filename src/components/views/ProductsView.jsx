import React, { useState } from 'react';
import { Calculator, Users, Database, Download, ExternalLink, Globe } from 'lucide-react';
import HeroSection from './HeroSection';
import ProductDownloadModal from './ProductDownloadModal';

export default function ProductsView({ onNavigate, showToast }) {
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const openDownloadModal = (productKey, e) => {
    e?.stopPropagation();
    setActiveModalProduct(productKey);
  };

  return (
    <>
      <HeroSection
        eyebrow="Software Universe"
        line1="Our"
        line2="Products"
        desc="Explore the main software directions under ARGUS Softwares. Click any product to access cross-platform installation packages (.exe, .dmg, .apk, .ipa)."
        mainIcon="Package"
      />

      <div className="grid3">
        {/* MetalCalc Card */}
        <article className="card clickable-card" onClick={() => onNavigate('metalcalc')}>
          <div className="top">
            <div className="ic">
              <Calculator />
            </div>
            <div>
              <h3>MetalCalc Suite</h3>
              <div className="sub">Enterprise CNC quotation & CAD weight manual.</div>
            </div>
            <div className="ver">v7.5.0</div>
          </div>
          <div className="thumb">
            <div className="mock">
              <b>MetalCalc v7.5.0</b>
              8 Geometric Profiles<br />
              Parametric Vector SVG<br />
              Live Metals-API Ticker
            </div>
            <div className="mock">
              <b>Enterprise Modules</b>
              Gemini AI Vision Estimator<br />
              GST Multi-Item BOM Maker<br />
              Resend Transactional Email
            </div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>8 geometric profiles, CAD SVG & Metals-API live ticker</span></li>
            <li><i>•</i><span>Gemini AI 2D drawing cycle time & tooling estimation</span></li>
            <li><i>•</i><span>Commercial BOM, machining routings & statutory GST PDFs</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', alignItems: 'center' }}>
            <button
              className="btn"
              style={{ flex: 1, background: 'linear-gradient(180deg, var(--orange), #d94800)' }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('metalcalc');
              }}
              title="Explore full interactive enterprise manual & operating guide"
            >
              <ExternalLink style={{ width: '15px', height: '15px' }} />
              <span>Explore Guide</span>
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
            <button
              className="btn secondary"
              style={{ padding: '0 10px', flexShrink: 0 }}
              onClick={(e) => openDownloadModal('metalcalc', e)}
              title="View download files for Windows, Mac, Android, iOS"
            >
              <Download style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          <div className="small">Click card to open full interactive feature guide & manual</div>
        </article>

        {/* Attendance App Card */}
        <article className="card clickable-card" onClick={() => onNavigate('attendance')}>
          <div className="top">
            <div className="ic blue">
              <Users />
            </div>
            <div>
              <h3>AI Attendance</h3>
              <div className="sub">Enterprise AI biometrics & operating manual.</div>
            </div>
            <div className="ver blue">v5.1</div>
          </div>
          <div className="thumb">
            <div className="mock">
              <b>ARGUS Attendance v5.1</b>
              128D Deep Face Engine<br />
              Haversine GPS Geofence<br />
              Automated Payroll & OT
            </div>
            <div className="mock">
              <b>Enterprise Modules</b>
              Live Camera Stream<br />
              Leaves & Balance Sheet<br />
              Field Worker Tracking
            </div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>128D Face Biometrics & Anti-Spoofing Liveness</span></li>
            <li><i>•</i><span>GPS Geofence Locking (100m–500m radius)</span></li>
            <li><i>•</i><span>Automated Payroll, Disbursals & ReportLab Payslips</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', alignItems: 'center' }}>
            <button
              className="btn"
              style={{ flex: 1, background: 'linear-gradient(180deg, var(--green), #00936b)' }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('attendance');
              }}
              title="Explore full interactive enterprise manual & operating guide"
            >
              <ExternalLink style={{ width: '15px', height: '15px' }} />
              <span>Explore Guide</span>
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
            <button
              className="btn secondary"
              style={{ padding: '0 10px', flexShrink: 0 }}
              onClick={(e) => openDownloadModal('attendance', e)}
              title="View download files for Windows, Mac, Android, iOS"
            >
              <Download style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          <div className="small">Click card to open full interactive feature guide & manual</div>
        </article>

        {/* ERP App Card */}
        <article className="card clickable-card" onClick={(e) => openDownloadModal('erp', e)}>
          <div className="top">
            <div className="ic purple">
              <Database />
            </div>
            <div>
              <h3>ERP App</h3>
              <div className="sub">Business operations in one place.</div>
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
              <Download />
              <span>Download Files</span>
            </button>
            <button
              className="btn secondary"
              style={{ padding: '0 12px' }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('erp');
              }}
              title="Explore live ERP operations dashboard"
            >
              <ExternalLink style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          <div className="small">Click to view .exe, .dmg, .apk packages</div>
        </article>
      </div>

      <div className="footer-mini">
        <span>Click on any product to open the download files page.</span>
        <span>Powered by <strong>ARGUSCNC™</strong></span>
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
