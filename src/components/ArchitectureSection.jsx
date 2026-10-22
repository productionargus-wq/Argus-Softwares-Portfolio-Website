import React from 'react';
import ThreeCadViewer from './ThreeCadViewer';

export default function ArchitectureSection() {
  const capabilities = [
    {
      title: 'Cloud Architecture',
      desc: 'Zero-downtime automated scaling with distributed multi-region Docker clusters and edge caching.',
      tag: 'Zero-downtime scaling',
      icon: 'cloud_sync',
      color: 'text-electric-blue',
      bg: 'bg-electric-blue/10',
    },
    {
      title: 'CAD & Geometric Engine',
      desc: 'Sub-second parsing of 2D/3D parametric curves, bend allowances, and laser toolpath calculation.',
      tag: 'Sub-second mesh parsing',
      icon: 'view_in_ar',
      color: 'text-emerald-neon',
      bg: 'bg-emerald-neon/10',
    },
    {
      title: 'Biometrics & AI Vision',
      desc: 'Hardware-level biometric encryption, anti-spoofing infrared verification, and geofencing compliance.',
      tag: 'Hardware-level encryption',
      icon: 'shield',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      title: 'Distributed Telemetry',
      desc: 'Microsecond spindle vibration streaming, shop floor Gantt sequencing, and centralized P&L metrics.',
      tag: 'Streaming multi-unit data',
      icon: 'monitoring',
      color: 'text-vivid-violet',
      bg: 'bg-vivid-violet/10',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-vivid-violet"></span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
            ABOUT ARGUS SOFTWARES
          </span>
        </div>

        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight uppercase mb-8">
          OUR PRECISION ARCHITECTURE
        </h2>

        {/* 2-Column Layout: Left (4 Pillars), Right (3D CAD Visualizer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 4 Architecture Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-surface-elevated shadow-[0_8px_30px_rgba(30,36,43,0.04)] border border-white/80 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.color} mb-3 shadow-inner`}
                  >
                    <span className="material-symbols-outlined text-[26px]">
                      {c.icon}
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-on-surface">
                    {c.title}
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-1.5 mt-3 pt-3 border-t border-surface-container ${c.color} font-label text-xs font-bold`}
                >
                  <span>{c.tag}</span>
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive 3D CAD Mesh Viewport */}
          <div className="lg:col-span-5">
            <ThreeCadViewer />
          </div>
        </div>
      </div>
    </section>
  );
}
