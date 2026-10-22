import React from 'react';

export default function TechStackTicker() {
  const stack = [
    { name: 'Python Engine', icon: 'terminal', color: 'text-primary' },
    { name: 'React & Next.js', icon: 'code', color: 'text-electric-blue' },
    { name: 'Node.js Runtimes', icon: 'deployed_code', color: 'text-emerald-neon' },
    { name: 'Three.js / WebGL', icon: 'view_in_ar', color: 'text-vivid-violet' },
    { name: 'PostgreSQL', icon: 'database', color: 'text-secondary' },
    { name: 'AWS Cloud Edge', icon: 'cloud', color: 'text-sunburst-orange' },
    { name: 'Docker Clusters', icon: 'layers', color: 'text-energetic-cyan' },
    { name: 'Tailwind CSS', icon: 'palette', color: 'text-electric-blue' },
  ];

  // Duplicate for smooth seamless loop
  const doubleStack = [...stack, ...stack];

  return (
    <div className="w-full py-8 border-y border-surface-container bg-surface-elevated/40 backdrop-blur-sm overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
        <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
          ENGINEERING STACK SPECTRUM
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient fade masks on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-canvas-base to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-canvas-base to-transparent z-10 pointer-events-none"></div>

        <div className="ticker-track flex items-center gap-4">
          {doubleStack.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-elevated shadow-sm border border-white/80 shrink-0 hover:shadow-md hover:scale-105 transition-all cursor-default"
            >
              <span className={`material-symbols-outlined text-[20px] ${tech.color}`}>
                {tech.icon}
              </span>
              <span className="font-label text-sm font-bold text-on-surface">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
