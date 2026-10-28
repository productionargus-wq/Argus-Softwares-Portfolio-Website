import React, { useState } from 'react';
import { Star, CheckCircle2, Building2, Quote, ArrowRight, Sparkles } from 'lucide-react';
import HeroSection from './HeroSection';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Rajesh Verma',
    role: 'Managing Director',
    company: 'Precision CNC Works',
    location: 'Coimbatore, TN',
    product: 'MetalCalc',
    rating: 5,
    quote: 'MetalCalc slashed our quotation and raw material estimation time from 2 hours to under 3 minutes. The section weight calculations for round, hex, and hollow pipes are spot on for our CNC shop.',
    metric: '90% faster estimation',
    metricDetail: 'Zero calculation discrepancies on raw stock quotes',
    category: 'MetalCalc'
  },
  {
    id: 2,
    name: 'Meera Sundaram',
    role: 'Operations Head',
    company: 'Apex Engineering Solutions',
    location: 'Chennai, TN',
    product: 'Attendance App',
    rating: 5,
    quote: 'Biometric and contactless shift attendance integration transformed our shop-floor discipline. Daily muster rolls and overtime calculations are generated in a single click with zero manual data entry.',
    metric: '450+ operators tracked',
    metricDetail: '100% automated shift & payroll sync',
    category: 'Attendance App'
  },
  {
    id: 3,
    name: 'Vikramaditya Singh',
    role: 'Plant General Manager',
    company: 'Titan Industrial Components',
    location: 'Pune, MH',
    product: 'ERP Suite',
    rating: 5,
    quote: 'Complete inventory visibility across raw steel bars, machine shop work-in-progress, and finished dispatch. ARGUS ERP brought true operational transparency across our three plant locations.',
    metric: '₹2.4Cr inventory managed',
    metricDetail: 'Real-time multi-branch stock reconciliation',
    category: 'ERP Suite'
  },
  {
    id: 4,
    name: 'S. Swaminathan',
    role: 'Quality & Planning Lead',
    company: 'Maruti Machining Center',
    location: 'Bangalore, KA',
    product: 'MetalCalc',
    rating: 5,
    quote: 'The software is lightweight, reliable, and runs smoothly offline on our shop floor computers. Their technical support team responds within minutes whenever we need custom density formulas.',
    metric: '5-minute SLA response',
    metricDetail: '99.9% uptime on standalone workstations',
    category: 'MetalCalc'
  },
  {
    id: 5,
    name: 'Anandhi Raman',
    role: 'HR & Admin Manager',
    company: 'Kavitha Automations',
    location: 'Hosur, TN',
    product: 'Attendance App',
    rating: 5,
    quote: 'The geofenced mobile check-in and multi-tier leave approval workflow simplified our administrative duties completely. Our shop floor workers and shift managers find the interface extremely intuitive.',
    metric: '15 hrs saved / month',
    metricDetail: '100% paperless leave & permission records',
    category: 'Attendance App'
  },
  {
    id: 6,
    name: 'Harish Patel',
    role: 'Chief Technical Officer',
    company: 'Delta Fabtech Engineering',
    location: 'Ahmedabad, GJ',
    product: 'ERP Suite',
    rating: 5,
    quote: 'The clean single-screen UI feels like a modern industrial control room. It eliminated paperwork between our stores, procurement, and billing departments with seamless traceability.',
    metric: '38% operational turnaround',
    metricDetail: 'Unified workflow from PO to tax invoicing',
    category: 'ERP Suite'
  }
];

export default function TestimonialsView({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'MetalCalc', 'ERP Suite', 'Attendance App'];

  const filteredTestimonials = selectedCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <>
      <HeroSection
        eyebrow="Client Trust & Success"
        line1="Client"
        line2="Stories"
        desc="Discover how manufacturing machine shops, fabrication units, and engineering enterprises streamline daily operations with ARGUS software solutions."
        mainIcon="MessageSquareQuote"
      />

      {/* Trust & Performance Metrics Strip */}
      <div className="box interactive-calc-preview" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles style={{ width: '20px', height: '20px', color: 'var(--amber)' }} />
              Verified Client Satisfaction & Industrial Impact
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
              Trusted by 450+ precision machine shops, fabrication facilities, and industrial manufacturing plants.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: '1px solid',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  borderColor: selectedCategory === cat ? 'var(--orange)' : 'var(--line)',
                  background: selectedCategory === cat ? 'var(--orange-light)' : '#ffffff',
                  color: selectedCategory === cat ? 'var(--orange)' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat === 'All' ? 'All Stories' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Quantitative Metrics */}
        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
          <div className="stat">
            <b style={{ color: 'var(--amber)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              4.9 <Star style={{ width: '16px', height: '16px', fill: 'var(--amber)', stroke: 'var(--amber)' }} />
            </b>
            <span>Average Rating</span>
          </div>
          <div className="stat">
            <b style={{ color: 'var(--blue)' }}>450+</b>
            <span>Active Machine Shops</span>
          </div>
          <div className="stat">
            <b style={{ color: 'var(--green)' }}>99.2%</b>
            <span>Client Retention Rate</span>
          </div>
          <div className="stat">
            <b style={{ color: 'var(--purple)' }}>90%</b>
            <span>Estimation Speedup</span>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid3" style={{ marginTop: '18px' }}>
        {filteredTestimonials.map((item) => (
          <article key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Top Rating & Category Tag */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      width: '15px',
                      height: '15px',
                      fill: 'var(--amber)',
                      stroke: 'var(--amber)'
                    }}
                  />
                ))}
              </div>
              <span
                className="ver"
                style={{
                  fontSize: '11px',
                  background: item.category === 'MetalCalc' ? 'var(--orange-light)' : item.category === 'ERP Suite' ? 'var(--purple-light)' : 'var(--blue-light)',
                  color: item.category === 'MetalCalc' ? 'var(--orange)' : item.category === 'ERP Suite' ? 'var(--purple)' : 'var(--blue)',
                  borderColor: 'transparent'
                }}
              >
                {item.product}
              </span>
            </div>

            {/* Testimonial Quote */}
            <div style={{ position: 'relative', flex: 1, marginBottom: '14px' }}>
              <Quote
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  width: '24px',
                  height: '24px',
                  color: 'rgba(255, 85, 0, 0.12)',
                  pointerEvents: 'none'
                }}
              />
              <p style={{ margin: '0 0 10px 0', fontSize: '13px', lineHeight: '1.65', color: '#334155', fontWeight: 500, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                "{item.quote}"
              </p>
            </div>

            {/* Quantified Impact Chip */}
            <div
              style={{
                padding: '8px 12px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--green)', flexShrink: 0 }} />
              <div>
                <b style={{ display: 'block', fontSize: '12px', color: '#0f172a' }}>{item.metric}</b>
                <span style={{ fontSize: '11px', color: '#64748b' }}>{item.metricDetail}</span>
              </div>
            </div>

            {/* Author Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: '1px solid var(--line)', marginTop: 'auto' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--orange), #ff8c00)',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '13px',
                  flexShrink: 0
                }}
              >
                {item.name.charAt(0)}
              </div>
              <div style={{ minWidth: 0 }}>
                <h4 style={{ margin: 0, fontSize: '13.5px', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.name}
                </h4>
                <div style={{ fontSize: '11.5px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.role} • <strong>{item.company}</strong>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Industries Served & Demo CTA */}
      <div className="box" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '17px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Building2 style={{ width: '20px', height: '20px', color: 'var(--orange)' }} />
            Powering Diverse Manufacturing Sectors
          </h3>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
            Precision CNC Machine Shops • Automotive Ancillaries • Fabrication Units • Tool & Die • Aerospace Components
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn" onClick={() => onNavigate('contact')}>
            <span>Schedule Live Demo</span>
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      <div className="footer-mini">
        <span>Verified client reviews from active industrial deployments.</span>
        <span>Powered by <strong>ARGUSCNC™</strong></span>
      </div>
    </>
  );
}
