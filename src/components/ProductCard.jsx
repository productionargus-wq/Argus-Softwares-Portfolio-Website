import React, { useRef } from 'react';

export default function ProductCard({ product, onOpenDemo }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  // Color classes mapping
  const colorMap = {
    red: {
      accentText: 'text-primary',
      accentBg: 'bg-primary/10',
      glowBg: 'bg-primary/10',
      badgeBorder: 'border-primary/20',
      btnBg: 'bg-primary hover:bg-[#d01c21]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(229,37,42,0.18)]',
      pulseBg: 'bg-primary',
    },
    blue: {
      accentText: 'text-electric-blue',
      accentBg: 'bg-electric-blue/10',
      glowBg: 'bg-electric-blue/10',
      badgeBorder: 'border-electric-blue/20',
      btnBg: 'bg-electric-blue hover:bg-[#0070e0]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(10,132,255,0.18)]',
      pulseBg: 'bg-electric-blue',
    },
    emerald: {
      accentText: 'text-emerald-neon',
      accentBg: 'bg-emerald-neon/10',
      glowBg: 'bg-emerald-neon/10',
      badgeBorder: 'border-emerald-neon/20',
      btnBg: 'bg-emerald-neon hover:bg-[#0ea572]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]',
      pulseBg: 'bg-emerald-neon',
    },
    orange: {
      accentText: 'text-sunburst-orange',
      accentBg: 'bg-sunburst-orange/10',
      glowBg: 'bg-sunburst-orange/10',
      badgeBorder: 'border-sunburst-orange/20',
      btnBg: 'bg-sunburst-orange hover:bg-[#e05e00]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(255,107,0,0.18)]',
      pulseBg: 'bg-sunburst-orange',
    },
  };

  const c = colorMap[product.theme] || colorMap.red;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-3xl bg-surface-elevated shadow-[0_12px_36px_rgba(30,36,43,0.06)] ${c.hoverGlow} border border-white/80 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden will-change-transform`}
    >
      {/* Top Corner Radial Glow */}
      <div
        className={`absolute top-0 right-0 w-48 h-48 ${c.glowBg} rounded-full blur-2xl group-hover:scale-125 transition-transform pointer-events-none`}
      ></div>

      <div>
        {/* Category Pill & Icon */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full ${c.accentBg} ${c.accentText} font-label text-xs font-bold tracking-wider uppercase border ${c.badgeBorder}`}
          >
            {product.category}
          </span>
          <span className={`material-symbols-outlined ${c.accentText} text-[24px]`}>
            {product.icon}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-on-surface-variant mt-1.5 leading-relaxed">
          {product.description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-surface-container font-label text-xs text-on-surface-variant font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Product UI Preview Screen */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container shadow-inner mb-5 border border-surface-container/60">
        <img
          src={product.image}
          alt={`${product.title} Dashboard UI`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Card Footer: Metrics & Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-surface-container">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${c.pulseBg} animate-pulse`}></span>
          <span className="font-label text-xs text-on-surface font-semibold">
            {product.metric}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenDemo(product.title)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-elevated text-on-surface font-label text-xs font-bold transition-all shadow-sm"
          >
            <span>Demo</span>
          </button>

          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full ${c.btnBg} text-white font-label text-xs font-bold shadow-md transition-all group-hover:translate-x-0.5`}
          >
            <span>Launch App</span>
            <span className="material-symbols-outlined text-[15px]">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
}
