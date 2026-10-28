import React, { useState } from 'react';
import { Database, Settings, LayoutGrid, Calendar, Users, Mail, TrendingUp, CheckCircle } from 'lucide-react';
import HeroSection from './HeroSection';

export default function ErpView({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('inventory');

  const tabData = {
    inventory: {
      title: 'Real-Time Inventory Status',
      stats: [
        { label: 'Raw Stock (MT)', val: '42.8' },
        { label: 'Finished Parts', val: '1,420' },
        { label: 'Low Stock Alerts', val: '3' },
        { label: 'Warehouse Utilization', val: '86%' }
      ],
      desc: 'Live tracking of raw material bars, sheets, machine consumables and semi-finished parts across multiple plant locations.'
    },
    purchases: {
      title: 'Procurement & Vendor Orders',
      stats: [
        { label: 'Active POs', val: '28' },
        { label: 'Pending Deliveries', val: '6' },
        { label: 'Vendor Rating', val: '4.8/5' },
        { label: 'Avg Lead Time', val: '4.2 Days' }
      ],
      desc: 'Automated Purchase Requisitions, multi-tier approval workflows, and GRN (Goods Receipt Note) synchronization.'
    },
    sales: {
      title: 'Sales & Dispatch Performance',
      stats: [
        { label: 'Monthly Invoiced', val: '₹14.8L' },
        { label: 'Pending Shipments', val: '12' },
        { label: 'Dispatch Accuracy', val: '99.4%' },
        { label: 'GST E-Way Bills', val: 'Ready' }
      ],
      desc: 'Seamless quotation-to-sales conversion, GST compliant electronic invoicing, packing slips, and delivery tracking.'
    }
  };

  const currentTab = tabData[activeTab];

  return (
    <>
      <HeroSection
        eyebrow="Business Management"
        line1="ARGUS"
        line2="ERP"
        desc="A central operational view for inventory, purchases, sales and record-based business workflows."
        mainIcon="Database"
      />

      {/* Interactive ERP Operations Widget */}
      <div className="box interactive-calc-preview">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp style={{ width: '20px', height: '20px', color: 'var(--purple)' }} />
              ARGUS ERP Operational Control Dashboard
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
              Connected plant workflow preview across shop-floor operations.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['inventory', 'purchases', 'sales'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '999px',
                  border: '1px solid',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  borderColor: activeTab === tab ? 'var(--purple)' : 'var(--line)',
                  background: activeTab === tab ? 'var(--purple-light)' : '#ffffff',
                  color: activeTab === tab ? 'var(--purple)' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab === 'inventory' ? 'Inventory' : tab === 'purchases' ? 'Purchases' : 'Sales & Dispatch'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
          {currentTab.stats.map((item, idx) => (
            <div key={idx} className="stat">
              <b style={{ color: idx === 0 ? 'var(--purple)' : idx === 1 ? 'var(--blue)' : idx === 2 ? 'var(--orange)' : 'var(--green)' }}>
                {item.val}
              </b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '12px', padding: '10px 14px', borderRadius: '12px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: '#334155' }}>
          <CheckCircle style={{ width: '16px', height: '16px', color: 'var(--green)', flexShrink: 0 }} />
          <span>{currentTab.desc}</span>
        </div>
      </div>

      {/* 6 Capabilities Section Grid */}
      <div className="section-grid">
        <div className="tile">
          <div className="tile-top">
            <div className="ti purple">
              <Database />
            </div>
            <h4>Inventory visibility</h4>
          </div>
          <p>See item records, batch allocation and stock movement in a connected manufacturing workflow.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Settings />
            </div>
            <h4>Purchases</h4>
          </div>
          <p>Organize supplier purchase activity, vendor rate contracts and reference item history.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti">
              <LayoutGrid />
            </div>
            <h4>Sales & billing</h4>
          </div>
          <p>Use structured workflows for quotation approvals, tax invoicing and delivery dispatch notes.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti green">
              <Calendar />
            </div>
            <h4>Reports & insights</h4>
          </div>
          <p>Turn operational records into management-friendly financial summaries and production trends.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Users />
            </div>
            <h4>Roles & access</h4>
          </div>
          <p>Granular role-based security across accounts, stores, quality control, and management levels.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti purple">
              <Mail />
            </div>
            <h4>Implementation enquiry</h4>
          </div>
          <p>Schedule an on-site or remote ERP requirement analysis and custom module deployment review.</p>
          <div className="cta">
            <button className="btn secondary sm" onClick={() => onNavigate('contact')}>
              Ask about ERP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
