import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDemo }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'products', 'about', 'testimony', 'connect'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'testimony', label: 'Testimony' },
    { id: 'connect', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(30,36,43,0.06)] border-b border-white/80'
          : 'bg-white/65 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-[1320px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 rounded-xl bg-white p-1 shadow-[0_4px_16px_rgba(229,37,42,0.25)] border border-white/90 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/assets/argus-logo-clean.png"
              alt="Argus Softwares Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-lg sm:text-xl text-on-surface tracking-tight uppercase group-hover:text-primary transition-colors">
              ARGUS SOFTWARES
            </span>
          </div>
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-neon/10 text-emerald-neon font-label text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-neon animate-pulse"></span>
            Innovating in Software
          </span>
        </a>

        {/* Desktop Navigation Pills */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-surface-container/70 backdrop-blur-md border border-white/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-surface-elevated text-primary shadow-[0_2px_12px_rgba(30,36,43,0.06)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenDemo('General Demo')}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary via-vivid-violet to-electric-blue text-white font-label text-sm font-bold shadow-[0_8px_20px_rgba(229,37,42,0.25)] hover:shadow-[0_12px_26px_rgba(229,37,42,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Book Demo</span>
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-surface-container/80 text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 py-4 bg-white/95 backdrop-blur-2xl border-b border-surface-container shadow-xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                activeSection === link.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-surface-container">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('General Demo');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-white font-bold text-sm shadow-md"
            >
              <span>Book Demo</span>
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
