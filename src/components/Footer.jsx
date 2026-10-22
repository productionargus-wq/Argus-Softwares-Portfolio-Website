import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.02)] border-t border-surface-container">
      {/* Top Gradient Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-vivid-violet to-electric-blue"></div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-surface-container">
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-sm border border-surface-container flex items-center justify-center">
                <img
                  src="/assets/argus-logo-clean.png"
                  alt="Argus Softwares Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline font-extrabold text-lg text-on-surface tracking-tight uppercase">
                ARGUS SOFTWARES
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Next-Generation Digital Engineering &amp; Industrial Automation. Building scalable, production-grade intelligence and CNC telemetry systems with sub-second computation.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="#connect"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant transition-all shadow-sm"
                title="Support"
              >
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
              </a>
              <a
                href="mailto:support@argussoftwares.com"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-container hover:bg-electric-blue hover:text-white text-on-surface-variant transition-all shadow-sm"
                title="Email"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                href="tel:+919944484944"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-container hover:bg-emerald-neon hover:text-white text-on-surface-variant transition-all shadow-sm"
                title="Phone"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
              <a
                href="https://maps.google.com/maps?q=61/10,%20Bharathiyar%20Road,%20Maniyakaranpalayam,%20Ganapathy,%20Coimbatore,%20Tamil%20Nadu%20641006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-container hover:bg-sunburst-orange hover:text-white text-on-surface-variant transition-all shadow-sm"
                title="Location"
              >
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Our Company
            </span>
            <div className="flex flex-col gap-2 font-body text-xs sm:text-sm">
              <a href="#home" className="text-on-surface-variant hover:text-primary transition-colors">
                Home
              </a>
              <a href="#products" className="text-on-surface-variant hover:text-primary transition-colors">
                Products
              </a>
              <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors">
                About Architecture
              </a>
              <a href="#testimony" className="text-on-surface-variant hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#connect" className="text-on-surface-variant hover:text-primary transition-colors">
                Contact &amp; HQ
              </a>
            </div>
          </div>

          {/* Products (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-electric-blue font-bold">
              Our Products
            </span>
            <div className="flex flex-col gap-2 font-body text-xs sm:text-sm">
              <a
                href="https://argusattendance.argussoftwares.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-primary text-[16px]">face</span>
                <span>Argus Attendance</span>
              </a>
              <a
                href="https://timeline.arguscnc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-electric-blue transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-electric-blue text-[16px]">
                  precision_manufacturing
                </span>
                <span>Timeline CNC</span>
              </a>
              <a
                href="https://metalcalcquote.arguscnc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-emerald-neon transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-emerald-neon text-[16px]">calculate</span>
                <span>MetalCalc Quote</span>
              </a>
              <a
                href="https://argus-franchise-operating-system.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-sunburst-orange transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-sunburst-orange text-[16px]">storefront</span>
                <span>Franchise OS (FOS)</span>
              </a>
            </div>
          </div>

          {/* Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-emerald-neon font-bold">
              HQ Details
            </span>
            <div className="flex flex-col gap-2.5 font-body text-xs sm:text-sm text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-neon text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="leading-relaxed">
                  61/10, Bharathiyar Road, Maniyakaranpalayam, Ganapathy, Coimbatore, Tamil Nadu, India - 641006
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  call
                </span>
                <div className="flex flex-col font-semibold">
                  <a href="tel:+919944484944" className="hover:text-primary transition-colors">
                    +91 99444 84944
                  </a>
                  <a href="tel:+919092992995" className="hover:text-primary transition-colors">
                    +91 90929 92995
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-electric-blue text-[18px] shrink-0">
                  mail
                </span>
                <a
                  href="mailto:support@argussoftwares.com"
                  className="hover:text-electric-blue transition-colors font-semibold"
                >
                  support@argussoftwares.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-on-surface-variant">
          <div>
            Copyright © 2026 Argus Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Enterprise Precision Engineering</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-primary transition-colors inline-flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
