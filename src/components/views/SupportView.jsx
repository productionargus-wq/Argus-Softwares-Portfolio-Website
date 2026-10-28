import React from 'react';
import { Headset, Download, Mail, Settings, Users, Shield } from 'lucide-react';
import HeroSection from './HeroSection';

export default function SupportView({ onNavigate }) {
  return (
    <>
      <HeroSection
        eyebrow="Help & Assistance"
        line1="Help &"
        line2="Support"
        desc="Keep support information in a dedicated window that users can reach instantly from the right side rail."
        mainIcon="Headset"
      />

      <div className="section-grid">
        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Headset />
            </div>
            <h4>Product support</h4>
          </div>
          <p>Installation, system setup, database backups, and daily usage questions for ARGUS software products.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti">
              <Download />
            </div>
            <h4>Downloads & updates</h4>
          </div>
          <p>Direct users to the installer and update area for the latest version builds and patch notes.</p>
          <div className="cta">
            <button className="btn secondary sm" onClick={() => onNavigate('downloads')}>
              Go to Downloads
            </button>
          </div>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti purple">
              <Mail />
            </div>
            <h4>Raise an enquiry</h4>
          </div>
          <p>Collect a clear problem summary through our structured contact and ticket submission window.</p>
          <div className="cta">
            <button className="btn secondary sm" onClick={() => onNavigate('contact')}>
              Open Contact
            </button>
          </div>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti green">
              <Settings />
            </div>
            <h4>Implementation help</h4>
          </div>
          <p>Dedicated setup guidance for on-premise server deployment, multi-workstation networking, and staff onboarding.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Users />
            </div>
            <h4>User guidance</h4>
          </div>
          <p>Comprehensive video tutorials and illustrated guides for machine operators and administrative coordinators.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti">
              <Shield />
            </div>
            <h4>Structured communication</h4>
          </div>
          <p>Keep support response time within guaranteed SLAs while maintaining an organized resolution audit trail.</p>
        </div>
      </div>
    </>
  );
}
