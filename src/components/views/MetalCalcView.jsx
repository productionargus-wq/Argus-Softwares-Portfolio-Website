import React, { useState } from 'react';
import { Calculator, Settings, LayoutGrid, Shield, Download, Mail } from 'lucide-react';
import HeroSection from './HeroSection';

export default function MetalCalcView({ onNavigate }) {
  // Live Interactive Calculator demo state
  const [shape, setShape] = useState('round');
  const [material, setMaterial] = useState('7.85'); // Mild steel default
  const [dimension1, setDimension1] = useState(50); // Diameter or Width in mm
  const [dimension2, setDimension2] = useState(5);  // Thickness/Wall in mm
  const [length, setLength] = useState(1000);       // Length in mm

  // Calculate weight in kg
  const density = parseFloat(material) || 7.85; // g/cm³ = kg/dm³
  let volumeCm3 = 0;

  if (shape === 'round') {
    const rCm = (dimension1 / 2) / 10;
    const lCm = length / 10;
    volumeCm3 = Math.PI * rCm * rCm * lCm;
  } else if (shape === 'pipe') {
    const rOuterCm = (dimension1 / 2) / 10;
    const rInnerCm = Math.max(0, (dimension1 / 2 - dimension2) / 10);
    const lCm = length / 10;
    volumeCm3 = Math.PI * (rOuterCm * rOuterCm - rInnerCm * rInnerCm) * lCm;
  } else if (shape === 'square') {
    const sideCm = dimension1 / 10;
    const lCm = length / 10;
    volumeCm3 = sideCm * sideCm * lCm;
  } else if (shape === 'hex') {
    const aCm = (dimension1 / 10);
    const lCm = length / 10;
    volumeCm3 = (Math.sqrt(3) / 2) * aCm * aCm * lCm;
  } else if (shape === 'sheet') {
    const wCm = dimension1 / 10;
    const tCm = dimension2 / 10;
    const lCm = length / 10;
    volumeCm3 = wCm * tCm * lCm;
  }

  const weightKg = ((volumeCm3 * density) / 1000).toFixed(2);

  return (
    <>
      <HeroSection
        eyebrow="Engineering Product"
        line1="Metal"
        line2="Calc"
        desc="MetalCalc combines industrial calculations, costing support and software-friendly workflows for machine shops and manufacturers."
        mainIcon="Calculator"
      />

      {/* Interactive Live Quick Calculator Widget */}
      <div className="box interactive-calc-preview">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calculator style={{ width: '20px', height: '20px', color: 'var(--orange)' }} />
              Live MetalCalc Quick-Estimator
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
              Test instant weight calculation directly in this interactive preview.
            </p>
          </div>
          <span className="ver" style={{ fontSize: '11px' }}>Interactive Tool</span>
        </div>

        <div className="calc-grid">
          <div className="calc-field">
            <label htmlFor="calc-shape">Shape</label>
            <select id="calc-shape" value={shape} onChange={(e) => setShape(e.target.value)}>
              <option value="round">Round Bar</option>
              <option value="pipe">Hollow Pipe</option>
              <option value="square">Square Bar</option>
              <option value="hex">Hex Bar</option>
              <option value="sheet">Plate / Sheet</option>
            </select>
          </div>

          <div className="calc-field">
            <label htmlFor="calc-material">Material</label>
            <select id="calc-material" value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option value="7.85">Mild Steel (7.85 g/cm³)</option>
              <option value="8.00">Stainless Steel (8.00 g/cm³)</option>
              <option value="2.70">Aluminum (2.70 g/cm³)</option>
              <option value="8.50">Brass (8.50 g/cm³)</option>
              <option value="8.96">Copper (8.96 g/cm³)</option>
            </select>
          </div>

          <div className="calc-field">
            <label htmlFor="calc-d1">
              {shape === 'sheet' ? 'Width (mm)' : shape === 'pipe' ? 'Outer Dia (mm)' : 'Dia / Side (mm)'}
            </label>
            <input
              id="calc-d1"
              type="number"
              min="1"
              value={dimension1}
              onChange={(e) => setDimension1(Number(e.target.value))}
            />
          </div>

          {(shape === 'pipe' || shape === 'sheet') && (
            <div className="calc-field">
              <label htmlFor="calc-d2">
                {shape === 'pipe' ? 'Wall Thick (mm)' : 'Thickness (mm)'}
              </label>
              <input
                id="calc-d2"
                type="number"
                min="0.5"
                step="0.5"
                value={dimension2}
                onChange={(e) => setDimension2(Number(e.target.value))}
              />
            </div>
          )}

          <div className="calc-field">
            <label htmlFor="calc-length">Length (mm)</label>
            <input
              id="calc-length"
              type="number"
              min="10"
              step="50"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc-result-box">
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 700, color: '#475569' }}>
              Calculated Total Weight
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              Based on {shape.toUpperCase()} at {length}mm length
            </div>
          </div>
          <div className="val">{weightKg} kg</div>
        </div>
      </div>

      {/* 6 Capabilities Section Grid */}
      <div className="section-grid">
        <div className="tile">
          <div className="tile-top">
            <div className="ti">
              <Calculator />
            </div>
            <h4>Weight calculation</h4>
          </div>
          <p>Round, square, flat, pipe, hex, angle, channel and other section-based calculations.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Settings />
            </div>
            <h4>Costing support</h4>
          </div>
          <p>Layer material estimation with processing-oriented commercial logic and scrap factor allowances.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti purple">
              <LayoutGrid />
            </div>
            <h4>Quotation readiness</h4>
          </div>
          <p>Prepare result-oriented output that can support quoting workflows and customer proposals.</p>
          <div className="cta">
            <button className="btn secondary sm" onClick={() => onNavigate('contact')}>
              Contact for demo
            </button>
          </div>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti green">
              <Shield />
            </div>
            <h4>Practical usage</h4>
          </div>
          <p>Made for day-to-day engineering reference and repeated shop-floor use with zero training.</p>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti">
              <Download />
            </div>
            <h4>Installer flow</h4>
          </div>
          <p>Use the Downloads page to present Windows setup files professionally with update checks.</p>
          <div className="cta">
            <button className="btn secondary sm" onClick={() => onNavigate('downloads')}>
              Go to Downloads
            </button>
          </div>
        </div>

        <div className="tile">
          <div className="tile-top">
            <div className="ti blue">
              <Mail />
            </div>
            <h4>Sales enquiry</h4>
          </div>
          <p>Convert product interest into a quick communication-ready enquiry directly to our engineers.</p>
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
