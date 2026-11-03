import React, { useState } from 'react';
import { Calculator, Users, Database, Download } from 'lucide-react';
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
        desc="Explore the main software directions under ARGUS Softwares. Click any product to access cross-platform installation packages."
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
            <li><i>•</i><span>8 geometric profiles & dynamic CAD preview</span></li>
            <li><i>•</i><span>Desktop (.exe, .dmg) & Mobile (.apk, .ipa)</span></li>
          </ul>

          <button
            className="btn"
            style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(180deg, var(--orange), #d94800)' }}
            onClick={(e) => openDownloadModal('metalcalc', e)}
            title="Download MetalCalc for Windows, macOS, Android, iOS"
          >
            <Download style={{ width: '16px', height: '16px' }} />
            <span>Download</span>
          </button>
          <div className="small">Click card to open full interactive feature guide & manual</div>
        </article>

        {/* Attendance Intelligence Card */}
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
            <li><i>•</i><span>AI Face Recognition & GPS Geofencing</span></li>
            <li><i>•</i><span>Automated payroll, shifts & report generation</span></li>
            <li><i>•</i><span>Desktop Console (.exe) & Mobile Punch (.apk)</span></li>
          </ul>

          <button
            className="btn"
            style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(180deg, var(--green), #00936b)' }}
            onClick={(e) => openDownloadModal('attendance', e)}
            title="Download Attendance Intelligence for Windows, macOS, Android, iOS"
          >
            <Download style={{ width: '16px', height: '16px' }} />
            <span>Download</span>
          </button>
          <div className="small">Click card to open full interactive feature guide & manual</div>
        </article>

        {/* Business Intelligence Card */}
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
            <li><i>•</i><span>Complete sales, purchases & billing suite</span></li>
            <li><i>•</i><span>Shop-Floor Barcode Scanner (.apk, .ipa)</span></li>
          </ul>

          <button
            className="btn"
            style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(180deg, var(--purple), #5e1cb0)' }}
            onClick={(e) => openDownloadModal('erp', e)}
            title="View download files for Windows, Mac, Android, iOS"
          >
            <Download style={{ width: '16px', height: '16px' }} />
            <span>Download</span>
          </button>
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
