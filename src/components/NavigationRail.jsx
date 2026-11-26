import React from 'react';
import { Package, Calculator, Database, LayoutGrid, Users, Download, MessageSquareQuote, Headset, Mail } from 'lucide-react';
import { SECTIONS_CONFIG } from '../data/sectionsData';
import argusLogo from '../assets/argus-logo.jpg';

const iconMap = {
  Package: <Package />,
  Calculator: <Calculator />,
  Database: <Database />,
  LayoutGrid: <LayoutGrid />,
  Users: <Users />,
  Download: <Download />,
  MessageSquareQuote: <MessageSquareQuote />,
  Headset: <Headset />,
  Mail: <Mail />
};

export default function NavigationRail({ side = 'left', activeSection, onSelectSection }) {
  const sections = SECTIONS_CONFIG.filter((s) => s.rail === side);

  return (
    <aside className={`rail ${side}`} aria-label={`${side} navigation rail`}>
      <div className="rail-group">
        {side === 'left' && (
          <button
            type="button"
            className={`brand-mark ${activeSection === 'products' ? 'active-home' : ''}`}
            onClick={() => onSelectSection('products', true)}
            title="ARGUS Softwares - Return to Products Home"
            aria-label="ARGUS Softwares Home"
          >
            <img src={argusLogo} alt="ARGUS Softwares" className="brand-mark-img" />
          </button>
        )}

        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              className={`hotspot ${isActive ? 'active' : ''}`}
              data-id={section.id}
              onClick={() => onSelectSection(section.id, true)}
              onMouseEnter={() => onSelectSection(section.id, false)}
              title={section.name}
              aria-label={`${section.name} section`}
              aria-pressed={isActive}
            >
              <span className="icon">
                {iconMap[section.icon]}
              </span>
              <span className="mini">{section.railLabel || section.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
