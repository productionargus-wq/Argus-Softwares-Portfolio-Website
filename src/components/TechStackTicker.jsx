import React, { useState } from 'react';

export default function TechStackTicker() {
  const [isPaused, setIsPaused] = useState(false);

  const stack = [
    { name: 'Python Engine', icon: 'terminal', color: 'text-primary' },
    { name: 'React & Next.js', icon: 'code', color: 'text-electric-blue' },
    { name: 'Node.js Runtimes', icon: 'deployed_code', color: 'text-emerald-neon' },
    { name: 'Three.js / WebGL', icon: 'view_in_ar', color: 'text-vivid-violet' },
    { name: 'PostgreSQL', icon: 'database', color: 'text-secondary' },
    { name: 'AWS Cloud Edge', icon: 'cloud', color: 'text-sunburst-orange' },
    { name: 'Docker Clusters', icon: 'layers', color: 'text-energetic-cyan' },
    { name: 'Tailwind CSS', icon: 'palette', color: 'text-electric-blue' },
    { name: 'FastAPI Runtimes', icon: 'bolt', color: 'text-emerald-neon' },
    { name: 'TypeScript Architecture', icon: 'integration_instructions', color: 'text-electric-blue' },
  ];

  const renderBadge = (tech, idx, prefix) => (
    <div
      key={`${prefix}-${idx}`}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-elevated shadow-sm border border-white/80 shrink-0 hover:shadow-md hover:scale-105 transition-all cursor-default"
    >
      <span className={`material-symbols-outlined text-[20px] ${tech.color}`}>
        {tech.icon}
      </span>
      <span className="font-label text-sm font-bold text-on-surface whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );

  return (
    <div className="w-full py-7 border-y border-surface-container bg-surface-elevated/40 backdrop-blur-sm overflow-hidden">
      {/* Title & Status Indicator */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
            ENGINEERING STACK SPECTRUM
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-container/70 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          title={isPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
        >
          <span className="material-symbols-outlined text-[15px]">
            {isPaused ? 'play_arrow' : 'pause'}
          </span>
          <span>{isPaused ? 'Resume' : 'Hover to Pause'}</span>
        </button>
      </div>

      {/* Marquee Viewport with Edge Gradient Fade */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-canvas-base via-canvas-base/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-canvas-base via-canvas-base/80 to-transparent z-10 pointer-events-none"></div>

        {/* Dual Seamless Synchronized Strips */}
        <div
          className={`marquee-scroller flex overflow-hidden select-none w-full ${
            isPaused ? '[&_.animate-marquee-continuous]:![animation-play-state:paused]' : ''
          }`}
        >
          {/* Primary Strip */}
          <div className="animate-marquee-continuous flex shrink-0 items-center gap-4 pr-4">
            {stack.map((tech, i) => renderBadge(tech, i, 'p1'))}
          </div>

          {/* Sibling Duplicate Strip (Loops seamlessly without jump or gap) */}
          <div
            className="animate-marquee-continuous flex shrink-0 items-center gap-4 pr-4"
            aria-hidden="true"
          >
            {stack.map((tech, i) => renderBadge(tech, i, 'p2'))}
          </div>

          {/* Sibling Triplicate Strip (Guarantees seamless flow on ultra-wide / 4K displays) */}
          <div
            className="animate-marquee-continuous flex shrink-0 items-center gap-4 pr-4"
            aria-hidden="true"
          >
            {stack.map((tech, i) => renderBadge(tech, i, 'p3'))}
          </div>
        </div>
      </div>
    </div>
  );
}
