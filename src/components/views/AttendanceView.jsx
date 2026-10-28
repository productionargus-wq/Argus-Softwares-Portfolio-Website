import React, { useState } from 'react';
import { Users, Calendar, LayoutGrid, Shield, Settings, Mail, CheckCircle2, Clock } from 'lucide-react';
import HeroSection from './HeroSection';

export default function AttendanceView({ onNavigate, showToast }) {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const toggleCheckIn = () => {
    if (!checkedIn) {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCheckedIn(true);
      setCheckInTime(now);
      showToast(`Punched In Successfully at ${now}`);
    } else {
      setCheckedIn(false);
      showToast(`Punched Out Successfully. Total shift logged.`);
    }
  };

  return (
    <>
      <HeroSection
        eyebrow="Workforce Management"
        line1="Attendance"
        line2="App"
        desc="Attendance-focused workflows for employee records, shift scheduling, real-time reporting and administrative control."
        mainIcon="Users"
      />

      {/* Interactive Workforce Widget */}
      <div className="box interactive-calc-preview">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users style={{ width: '20px', height: '20px', color: 'var(--green)' }} />
              Live Shift & Workforce Punch-In Simulator
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
              Experience contactless employee check-in and instantaneous shop-floor attendance logging.
            </p>
          </div>
          <button
            className="btn"
            onClick={toggleCheckIn}
            style={{
              padding: '8px 16px',
              fontSize: '12.5px',
              background: checkedIn ? 'linear-gradient(180deg, #dc2626, #b91c1c)' : 'linear-gradient(180deg, var(--green), #00936b)'
            }}
          >
            <Clock style={{ width: '15px', height: '15px' }} />
            <span>{checkedIn ? `Punch Out (Logged at ${checkInTime})` : 'Simulate Punch-In Now'}</span>
          </button>
        </div>

        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
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

        <div style={{ marginTop: '12px', padding: '10px 14px', borderRadius: '12px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: '#334155' }}>
          <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--green)', flexShrink: 0 }} />
          <span>Biometric Hardware Integration • Geofenced Mobile App • Overtime & Shift Payroll Sync</span>
        </div>
      </div>

      {/* 6 Capabilities Section Grid */}
      <div className="section-grid">
        <div className="tile">
          <div className="tile-top">
            <div className="ti green">
              <Users />
            </div>
            <h4>Employee records</h4>
          </div>
          <p>Keep employee contact details, department assignments, shift rules, and documents in one hub.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Calendar />
            </div>
            <h4>Leave & permission</h4>
          </div>
          <p>Seamless employee leave applications with multi-tier managerial approval and balance tracking.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti purple">
              <LayoutGrid />
            </div>
            <h4>Daily & monthly reports</h4>
          </div>
          <p>One-click export of muster rolls, shift summaries, late-coming penalties, and payroll-ready formats.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti">
              <Shield />
            </div>
            <h4>Control & policy</h4>
          </div>
          <p>Define grace periods, minimum half-day hours, overtime multipliers, and automated holiday schedules.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti green">
              <Settings />
            </div>
            <h4>Company setup</h4>
          </div>
          <p>Configure multiple branches, factory shifts, departmental categories, and administrative permissions.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Mail />
            </div>
            <h4>Get a live demo</h4>
          </div>
          <p>Schedule a live walkthrough tailored to your company's workforce size and biometric hardware.</p>
          <div className="cta">
            <button className="btn secondary sm" onClick={() => onNavigate('contact')}>
              Open Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
