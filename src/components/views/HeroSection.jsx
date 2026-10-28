import React from 'react';
import { Package, Calculator, Database, LayoutGrid, Users, Download, Headset, Mail, Settings, MessageSquareQuote, Star } from 'lucide-react';

const iconMap = {
  Package: <Package />,
  Calculator: <Calculator />,
  Database: <Database />,
  LayoutGrid: <LayoutGrid />,
  Users: <Users />,
  Download: <Download />,
  Headset: <Headset />,
  Mail: <Mail />,
  Settings: <Settings />,
  MessageSquareQuote: <MessageSquareQuote />,
  Star: <Star />
};

export default function HeroSection({ eyebrow, line1, line2, desc, mainIcon = 'Package' }) {
  const IconComponent = iconMap[mainIcon] || <Package />;

  return (
    <section className="hero">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>
          {line1} <em>{line2}</em>
        </h2>
        <p>{desc}</p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="ring"></div>
        <div className="screen">
          {IconComponent}
        </div>
        <div className="tile t1">
          <Package />
        </div>
        <div className="tile t2">
          <Download />
        </div>
        <div className="tile t3">
          <Settings />
        </div>
      </div>
    </section>
  );
}
