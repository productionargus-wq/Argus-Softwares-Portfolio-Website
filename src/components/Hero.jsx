import React, { useEffect, useState } from 'react';
import ThreeHeroScene from './ThreeHeroScene';

export default function Hero({ onOpenDemo }) {
  const [stats, setStats] = useState({ platforms: 0, uptime: 0, ops: 0 });

  useEffect(() => {
    let start = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setStats({
        platforms: Math.floor(4 * ease),
        uptime: parseFloat((99.98 * ease).toFixed(2)),
        ops: Math.floor(100 * ease),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setStats({ platforms: 4, uptime: 99.98, ops: 100 });
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-[450px] h-[450px] rounded-full bg-electric-blue/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: High-Impact Typography & Action */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 z-10">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 shadow-[0_4px_16px_rgba(30,36,43,0.06)] border border-white/80 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-neon"></span>
              </span>
              <span className="font-label text-xs uppercase tracking-wider text-on-surface font-semibold">
                Live Production Systems
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="font-label text-xs text-primary font-bold">Argus Softwares</span>
            </div>

            {/* Punchy Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.08] uppercase">
              ENGINEERED FOR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-vivid-violet to-electric-blue">
                SCALE.
              </span>
              <br />
              CRAFTED FOR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-energetic-cyan to-emerald-neon">
                SPEED.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Industrial-grade intelligence platforms, sub-second CAD geometry computation, biometric facial verification, and real-time shop floor telemetry built for enterprise rigor.
            </p>

            {/* Quick Interaction Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-[#D01C21] text-white font-label text-sm font-bold shadow-[0_10px_24px_rgba(229,37,42,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Explore Products</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>

              <a
                href="#connect"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-elevated hover:bg-white text-on-surface font-label text-sm font-bold shadow-[0_6px_20px_rgba(30,36,43,0.08)] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-surface-container"
              >
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-[18px] text-vivid-violet">bolt</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenDemo('Flagship Demonstration')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container/80 hover:bg-surface-container text-on-surface font-label text-sm font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-electric-blue">play_circle</span>
                <span>Watch Live Demo</span>
              </button>
            </div>

            {/* Live Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-4">
              <div className="bg-surface-elevated/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-[0_4px_20px_rgba(30,36,43,0.04)] border border-white/80 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  {stats.platforms}
                </span>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-wide text-on-surface-variant font-medium mt-0.5">
                  Enterprise Platforms
                </span>
              </div>

              <div className="bg-surface-elevated/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-[0_4px_20px_rgba(30,36,43,0.04)] border border-white/80 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-neon tracking-tight">
                  {stats.uptime}%
                </span>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-wide text-on-surface-variant font-medium mt-0.5">
                  Verified Uptime
                </span>
              </div>

              <div className="bg-surface-elevated/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-[0_4px_20px_rgba(30,36,43,0.04)] border border-white/80 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-electric-blue tracking-tight">
                  {stats.ops}K+
                </span>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-wide text-on-surface-variant font-medium mt-0.5">
                  Daily Operations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene Viewport */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Ring Backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-vivid-violet/20 to-electric-blue/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>
            <ThreeHeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
