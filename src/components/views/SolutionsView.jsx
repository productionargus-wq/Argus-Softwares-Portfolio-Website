import React from 'react';
import { Package, Download, Headset, Mail, ArrowRight, Shield, Sparkles } from 'lucide-react';
import HeroSection from './HeroSection';

export default function SolutionsView({ onNavigate }) {
  return (
    <>
      <HeroSection
        eyebrow="What We Build"
        line1="Digital"
        line2="Solutions"
        desc="ARGUS Softwares can present tools, applications and implementation direction in one immersive website screen."
        mainIcon="LayoutGrid"
      />

      <div className="split">
        {/* Left Box: Where this UI helps */}
        <div className="box">
          <h3>Where this UI helps</h3>
          <p>
            This layout works well when you want a very different software-company website: narrow left and right navigation rails, and nearly the entire screen dedicated to the active content window. It feels like a product control room instead of a normal menu website.
          </p>
          <div className="upload-grid" style={{ marginTop: '18px' }}>
            <div className="tile">
              <div className="tile-top">
                <div className="ti">
                  <Package />
                </div>
                <h4>Software showcase</h4>
              </div>
              <p>Present apps like MetalCalc, Attendance and ERP clearly in clean modular screens.</p>
            </div>

            <div className="tile">
              <div className="tile-top">
                <div className="ti blue">
                  <Download />
                </div>
                <h4>Download experience</h4>
              </div>
              <p>Show Windows installers, versions, file checks, and release notes effortlessly.</p>
            </div>

            <div className="tile">
              <div className="tile-top">
                <div className="ti purple">
                  <Headset />
                </div>
                <h4>Support direction</h4>
              </div>
              <p>Guide customers to support tickets, implementation and onboarding help content.</p>
            </div>

            <div className="tile">
              <div className="tile-top">
                <div className="ti green">
                  <Mail />
                </div>
                <h4>Lead capture</h4>
              </div>
              <p>Turn interest into immediate client inquiries with copy-ready specs.</p>
              <div className="cta">
                <button className="btn secondary sm" onClick={() => onNavigate('contact')}>
                  Open Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box: Interaction model */}
        <div className="box">
          <h3>Interaction model</h3>
          <p>
            The website changes automatically every 5 seconds. If a visitor manually moves to any side hotspot, that section opens instantly and the auto cycle restarts from there. This creates a living, always-moving presentation while preserving manual control.
          </p>

          <div className="feature-row" style={{ flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <div className="mini-card" style={{ width: '100%' }}>
              <Download style={{ color: 'var(--orange)' }} />
              <div>
                <b>Auto Play</b>
                <span>Smooth automatic presentation rotation across all company capabilities</span>
              </div>
            </div>

            <div className="mini-card" style={{ width: '100%' }}>
              <ArrowRight style={{ color: 'var(--blue)' }} />
              <div>
                <b>Manual Override</b>
                <span>Immediate section switch on side rail hover, click, or mobile tap</span>
              </div>
            </div>

            <div className="mini-card" style={{ width: '100%' }}>
              <Shield style={{ color: 'var(--purple)' }} />
              <div>
                <b>Focused Center</b>
                <span>Full screen real estate dedicated entirely to the active product workspace</span>
              </div>
            </div>

            <div className="mini-card" style={{ width: '100%' }}>
              <Sparkles style={{ color: 'var(--green)' }} />
              <div>
                <b>Modern Light Palette</b>
                <span>High-contrast crisp typography, radiant gradients, and vibrant visual accents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
