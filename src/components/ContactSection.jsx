import React, { useState } from 'react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    product: 'Argus Attendance',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productOptions = [
    { label: 'Argus Attendance', theme: 'peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary' },
    { label: 'Timeline CNC', theme: 'peer-checked:bg-electric-blue/10 peer-checked:border-electric-blue peer-checked:text-electric-blue' },
    { label: 'MetalCalc Quote', theme: 'peer-checked:bg-emerald-neon/10 peer-checked:border-emerald-neon peer-checked:text-emerald-neon' },
    { label: 'Franchise OS', theme: 'peer-checked:bg-sunburst-orange/10 peer-checked:border-sunburst-orange peer-checked:text-sunburst-orange' },
    { label: 'Custom Platform', theme: 'peer-checked:bg-vivid-violet/10 peer-checked:border-vivid-violet peer-checked:text-vivid-violet' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(
        `Thank you, ${formData.fullName || 'Valued Partner'}! Your inquiry regarding ${formData.product} has been delivered to our Coimbatore engineering team.`,
        'mark_email_read'
      );
      setFormData({
        fullName: '',
        workEmail: '',
        phone: '',
        product: 'Argus Attendance',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="connect" className="py-16 sm:py-20 relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                GLOBAL HEADQUARTERS &amp; SUPPORT
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight uppercase">
              CONNECT WITH US
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xl mt-1">
              Partner with Argus engineers to evaluate, architect, deploy, and scale enterprise automation systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-neon/10 text-emerald-neon font-label text-xs font-bold flex items-center gap-1.5 border border-emerald-neon/20">
              <span className="w-2 h-2 rounded-full bg-emerald-neon animate-pulse"></span>
              Open For Consultations
            </span>
            <span className="px-3 py-1.5 rounded-full bg-electric-blue/10 text-electric-blue font-label text-xs font-bold">
              HQ Coimbatore, India
            </span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact Details & Live Map (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Direct Contact Card */}
            <div className="relative rounded-3xl bg-surface-elevated p-6 sm:p-7 shadow-[0_12px_36px_rgba(30,36,43,0.06)] border border-white/80 overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col gap-5">
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-xs font-bold uppercase tracking-wider">
                    Direct Communications
                  </span>
                  <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight mt-2">
                    Get In Direct Touch
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Connect directly with our core engineering leadership and software specialists.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Phone */}
                  <div className="p-3.5 rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-colors flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                        Phone Support &amp; Sales
                      </span>
                      <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-0.5 font-bold text-sm text-on-surface">
                        <a href="tel:+919944484944" className="hover:text-primary transition-colors">
                          +91 99444 84944
                        </a>
                        <span className="text-outline-variant font-normal">/</span>
                        <a href="tel:+919092992995" className="hover:text-primary transition-colors">
                          +91 90929 92995
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-3.5 rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-colors flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-electric-blue text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                        Official Email
                      </span>
                      <a
                        href="mailto:support@argussoftwares.com"
                        className="font-headline text-sm text-on-surface font-bold hover:text-electric-blue transition-colors mt-0.5"
                      >
                        support@argussoftwares.com
                      </a>
                    </div>
                  </div>

                  {/* Registered Office */}
                  <div className="p-3.5 rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-colors flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-neon text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                        Registered Office
                      </span>
                      <span className="font-body text-xs text-on-surface font-medium leading-relaxed mt-0.5">
                        61/10, Bharathiyar Road, Maniyakaranpalayam, Ganapathy, Coimbatore, Tamil Nadu, India - 641006
                      </span>
                    </div>
                  </div>
                </div>
              </div>

                <div className="relative z-10 flex flex-wrap items-center gap-2 pt-4 border-t border-surface-container mt-4">
                <a
                  href="tel:+919944484944"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-elevated text-on-surface font-label text-xs font-bold shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-emerald-neon text-[16px]">phone_in_talk</span>
                  <span>Schedule Call</span>
                </a>
                <a
                  href="https://maps.google.com/maps?q=61/10,%20Bharathiyar%20Road,%20Maniyakaranpalayam,%20Ganapathy,%20Coimbatore,%20Tamil%20Nadu%20641006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-elevated text-on-surface font-label text-xs font-bold shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-electric-blue text-[16px]">map</span>
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>

            {/* Interactive Office Map Card */}
            <div className="relative rounded-3xl bg-surface-elevated p-2.5 shadow-[0_12px_36px_rgba(30,36,43,0.06)] border border-white/80 overflow-hidden flex flex-col justify-between">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-surface-container">
                <iframe
                  title="Argus Softwares Coimbatore Office Location"
                  className="w-full h-full rounded-2xl border-0"
                  src="https://maps.google.com/maps?q=61/10,%20Bharathiyar%20Road,%20Maniyakaranpalayam,%20Ganapathy,%20Coimbatore,%20Tamil%20Nadu%20641006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center gap-1 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="font-label text-[11px] text-on-surface font-bold tracking-wider">
                    HQ OFFICE
                  </span>
                </div>
              </div>
              <div className="p-2.5 mt-2 bg-surface-container/60 rounded-xl flex items-center justify-between text-xs">
                <span className="text-on-surface font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-emerald-neon text-[16px]">verified</span>
                  In-person visits welcome
                </span>
                <a
                  href="https://maps.google.com/maps?q=61/10,%20Bharathiyar%20Road,%20Maniyakaranpalayam,%20Ganapathy,%20Coimbatore,%20Tamil%20Nadu%20641006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  <span>Directions</span>
                  <span className="material-symbols-outlined text-[13px]">north_east</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl bg-surface-elevated p-6 sm:p-8 shadow-[0_12px_36px_rgba(30,36,43,0.06)] border border-white/80 overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-electric-blue/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-5 flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue font-label text-xs font-bold uppercase tracking-wider">
                      Rapid Inquiry
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-neon font-label text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-neon animate-pulse"></span> Active Dispatch
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight mt-2">
                    Start a Conversation
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
                    Tell us about your requirements, platform evaluation, or customized software scope.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1 justify-between">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label text-xs font-bold text-on-surface">
                        Full Name *
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                          person
                        </span>
                        <input
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label text-xs font-bold text-on-surface">
                        Work Email *
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                          mail
                        </span>
                        <input
                          required
                          type="email"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="e.g. name@company.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-surface-container/60 border border-transparent focus:border-electric-blue focus:bg-white text-sm font-body text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label text-xs font-bold text-on-surface">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                        call
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-surface-container/60 border border-transparent focus:border-emerald-neon focus:bg-white text-sm font-body text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Product Interest Radio Selector Chips */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs font-bold text-on-surface">
                      Product or Solution of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {productOptions.map((opt) => (
                        <label key={opt.label} className="cursor-pointer">
                          <input
                            type="radio"
                            name="product_interest"
                            value={opt.label}
                            checked={formData.product === opt.label}
                            onChange={() => setFormData({ ...formData, product: opt.label })}
                            className="hidden peer"
                          />
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-container/70 text-on-surface-variant border border-transparent ${opt.theme} transition-all`}
                          >
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Scope */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="font-label text-xs font-bold text-on-surface">
                      Message / Project Scope *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your operational requirements, facilities, or timeline..."
                      className="w-full p-3 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all resize-none flex-1"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary via-vivid-violet to-electric-blue hover:shadow-[0_10px_24px_rgba(229,37,42,0.35)] hover:-translate-y-0.5 text-white font-label text-sm font-bold transition-all shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="material-symbols-outlined text-[18px]">send</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-on-surface-variant font-label text-xs">
                      <span className="material-symbols-outlined text-emerald-neon text-[16px]">schedule</span>
                      <span>We typically respond within 2-4 business hours.</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
