import React, { useState } from 'react';
import { Calculator, Users, Database, Download, ExternalLink } from 'lucide-react';
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
        <article className="card clickable-card" onClick={(e) => openDownloadModal('metalcalc', e)}>
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
            <li><i>•</i><span>Windows (.exe, .msi) & macOS (.dmg)</span></li>
            <li><i>•</i><span>Android (.apk) & iOS (.ipa) mobile support</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <button
              className="btn"
              style={{ flex: 1 }}
              onClick={(e) => openDownloadModal('metalcalc', e)}
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
                onNavigate('metalcalc');
              }}
              title="Explore live interactive calculator demo"
            >
              <ExternalLink style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          <div className="small">Click to view .exe, .dmg, .apk packages</div>
        </article>

        {/* Attendance App Card */}
        <article className="card clickable-card" onClick={(e) => openDownloadModal('attendance', e)}>
          <div className="top">
            <div className="ic blue">
              <Users />
            </div>
            <div>
              <h3>Attendance App</h3>
              <div className="sub">Track workforce activity and reporting.</div>
            </div>
            <div className="ver blue">v2.0.0</div>
          </div>
          <div className="thumb">
            <div className="mock">
              <b>Today's Attendance</b>
              Present: 46<br />
              Absent: 3<br />
              On Leave: 2
            </div>
            <div className="mock">
              <b>Dashboard</b>
              Check-in / Check-out<br />
              Employee Records<br />
              Reports & Analytics
            </div>
          </div>
          <ul className="bullets">
            <li><i>•</i><span>Employee check-in & biometric sync</span></li>
            <li><i>•</i><span>Desktop Admin Console (.exe, .dmg)</span></li>
            <li><i>•</i><span>Mobile Punch & Geofence (.apk, .ipa)</span></li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <button
              className="btn"
              style={{ flex: 1, background: 'linear-gradient(180deg, var(--blue), #005ecb)' }}
              onClick={(e) => openDownloadModal('attendance', e)}
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
                onNavigate('attendance');
              }}
              title="Explore live attendance shift simulator"
            >
              <ExternalLink style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          <div className="small">Click to view .exe, .dmg, .apk packages</div>
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
