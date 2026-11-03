import React from 'react';
import { Package, Calculator, Users, Database, Headset, Shield, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import HeroSection from './HeroSection';

export default function SolutionsView({ onNavigate }) {
  return (
    <>
      <HeroSection
        eyebrow="Enterprise Capabilities"
        line1="Company"
        line2="Solutions"
        desc="Purpose-built engineering, automation, and operational software solutions designed to empower modern manufacturing plants, CNC machine shops, and corporate enterprises."
        mainIcon="LayoutGrid"
      />

      <div className="split">
        {/* Left Box: Core Industry Solutions */}
        <div className="box">
          <h3>Core Industry Solutions</h3>
          <p>
            ARGUS delivers specialized software built around the real-world operational challenges of precision engineering, plant management, and human capital administration.
          </p>

          <div className="upload-grid" style={{ marginTop: '18px' }}>
            <div className="tile">
              <div className="tile-top">
                <div className="ti">
                  <Calculator />
                </div>
                <h4>CNC Estimation & Costing</h4>
              </div>
              <p>
                Volumetric weight formulas across 8 geometric profiles, CAD blueprint dimension extraction, scrap metal recovery, and GST-ready quotation maker.
              </p>
              <div className="cta" style={{ marginTop: '10px' }}>
                <button className="btn secondary sm" onClick={() => onNavigate('metalcalc')}>
                  Explore MetalCalc
                </button>
              </div>
            </div>

            <div className="tile">
              <div className="tile-top">
                <div className="ti blue">
                  <Users />
                </div>
                <h4>Attendance & HR Intelligence</h4>
              </div>
              <p>
                Touchless facial biometric recognition, anti-spoofing fraud prevention, GPS geofencing radius locking, and single-click automated payroll with payslips.
              </p>
              <div className="cta" style={{ marginTop: '10px' }}>
                <button className="btn secondary sm" onClick={() => onNavigate('attendance')}>
                  View Attendance
                </button>
              </div>
            </div>

            <div className="tile">
              <div className="tile-top">
                <div className="ti purple">
                  <Database />
                </div>
                <h4>Business & Plant Intelligence</h4>
              </div>
              <p>
                Live raw material inventory control, warehouse stock management, shop-floor barcode scanning, sales/purchase registers, and financial reporting.
              </p>
              <div className="cta" style={{ marginTop: '10px' }}>
                <button className="btn secondary sm" onClick={() => onNavigate('erp')}>
                  View Operations
                </button>
              </div>
            </div>

            <div className="tile">
              <div className="tile-top">
                <div className="ti green">
                  <Package />
                </div>
                <h4>Custom Software Engineering</h4>
              </div>
              <p>
                Tailored desktop, mobile, and web applications built specifically around your organization's unique manufacturing workflows and requirements.
              </p>
              <div className="cta" style={{ marginTop: '10px' }}>
                <button className="btn secondary sm" onClick={() => onNavigate('contact')}>
                  Discuss Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box: Why Choose ARGUS */}
        <div className="box">
          <h3>Why Enterprises Choose ARGUS</h3>
          <p>
            Our software products are crafted to deliver immediate operational efficiency, reduce costly manual errors, and provide seamless adoption for shop-floor and office teams.
          </p>

          <div className="feature-row" style={{ flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
            <div className="mini-card" style={{ width: '100%' }}>
              <Shield style={{ color: 'var(--orange)' }} />
              <div>
                <b>Built for Manufacturing & Fabrication</b>
                <span>Engineered specifically for machine shops, tooling manufacturers, and production facilities.</span>
              </div>
            </div>

            <div className="mini-card" style={{ width: '100%' }}>
              <CheckCircle2 style={{ color: 'var(--green)' }} />
              <div>
                <b>Zero Expensive Hardware Lock-In</b>
                <span>Deploy instantly on existing laptops, tablets, or smartphones without purchasing proprietary scanners.</span>
              </div>
            </div>

            <div className="mini-card" style={{ width: '100%' }}>
              <Sparkles style={{ color: 'var(--blue)' }} />
              <div>
                <b>Offline Reliability with Cloud Sync</b>
                <span>Work offline uninterrupted on the factory floor while syncing to the cloud for live executive reporting.</span>
              </div>
            </div>

            <div className="mini-card" style={{ width: '100%' }}>
              <Headset style={{ color: 'var(--purple)' }} />
              <div>
                <b>Dedicated Onboarding & Ongoing Support</b>
                <span>Hands-on setup, team training, and prompt direct support from our experienced engineering division.</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '22px', padding: '16px', background: 'var(--card-bg, #f8fafc)', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 6px', fontSize: '14.5px', color: 'var(--text)' }}>
              Looking for a custom solution for your facility?
            </h4>
            <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#64748b' }}>
              We collaborate closely with production managers and directors to create customized software solutions that match their exact processes.
            </p>
            <button className="btn" style={{ fontSize: '13px' }} onClick={() => onNavigate('contact')}>
              <span>Talk to our Solutions Team</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
