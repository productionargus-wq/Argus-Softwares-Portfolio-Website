import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsSection({ onOpenDemo }) {
  const products = [
    {
      id: 'argus-attendance',
      title: 'Argus Attendance',
      category: 'Biometric & Facial AI',
      icon: 'face',
      theme: 'red',
      description: 'Zero-touch facial recognition attendance with anti-spoofing liveness detection and geofenced enterprise shifts.',
      tags: ['Facial Recognition', 'Live Staff Logs', 'Geofenced Punch', 'Audit Logs'],
      image: '/assets/argus-attendance.png',
      metric: '99.4% Match Accuracy',
      url: 'https://argusattendance.argussoftwares.com/',
    },
    {
      id: 'timeline-cnc',
      title: 'Timeline CNC',
      category: 'Machine Floor Tracking',
      icon: 'precision_manufacturing',
      theme: 'blue',
      description: 'Complete CNC shop floor intelligence, spindle vibration telemetry, live Gantt milestones, and automated machining queues.',
      tags: ['Gantt Milestones', 'Spindle Analytics', 'Shop Kanban', 'OEE Tracking'],
      image: '/assets/timeline-cnc.png',
      metric: 'Live Tasks Telemetry',
      url: 'https://timeline.arguscnc.com/',
    },
    {
      id: 'metalcalc-quote',
      title: 'MetalCalc Quote',
      category: 'CAD Geometry Pricing',
      icon: 'calculate',
      theme: 'emerald',
      description: 'Instant sheet-metal CAD parsing, automated laser cutting path math, press brake unfolding, and sub-second RFQ estimates.',
      tags: ['Instant CAD Parser', 'Bending & Laser Math', 'Automated RFQ', 'Nesting Engine'],
      image: '/assets/metalcalc-quote.png',
      metric: '<0.1s Automated Quotes',
      url: 'https://metalcalcquote.arguscnc.com/',
    },
    {
      id: 'franchise-os',
      title: 'Franchise Operating System (FOS)',
      category: 'Multi-Store Operations',
      icon: 'storefront',
      theme: 'orange',
      description: 'Centralized multi-store chain telemetry, automated supply chain sync, real-time store P&L analytics, and compliance audits.',
      tags: ['Multi-Unit KPI Gauges', 'Real-Time P&L', 'Supply Chain Sync', 'Store Audits'],
      image: '/assets/franchise-os.png',
      metric: 'Store Network Synced',
      url: 'https://argus-franchise-operating-system.vercel.app/',
    },
  ];

  return (
    <section id="products" className="py-16 sm:py-20 relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                FLAGSHIP SUITE
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight uppercase">
              ENTERPRISE PRODUCTS
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xl mt-1">
              Engineered from the ground up for industrial scale, sub-second response times, and mission-critical reliability.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-xs font-bold">
              Production Ready
            </span>
            <span className="px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue font-label text-xs font-bold">
              Cloud Synced
            </span>
          </div>
        </div>

        {/* 2x2 Grid of Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpenDemo={onOpenDemo} />
          ))}
        </div>
      </div>
    </section>
  );
}
