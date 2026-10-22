import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'VP of Operations, Apex Precision Engineering',
      product: 'Argus Attendance',
      quote:
        'Argus Attendance revolutionized our shift tracking across 12 facilities. Facial verification eliminated proxy punches overnight with sub-second response times and seamless payroll sync.',
      initials: 'RK',
      theme: 'red',
      colorText: 'text-primary',
      bgInitial: 'bg-primary/10 text-primary',
    },
    {
      name: 'David Vance',
      role: 'Chief Estimator, Titan Aerospace & Fabrication',
      product: 'MetalCalc Quote',
      quote:
        'MetalCalc Quote cut our sheet-metal estimation cycle from 4 hours to instant under 0.1s. It directly accelerated our RFQ conversion rate by 42% while guaranteeing exact laser toolpath precision.',
      initials: 'DV',
      theme: 'emerald',
      colorText: 'text-emerald-neon',
      bgInitial: 'bg-emerald-neon/10 text-emerald-neon',
    },
    {
      name: 'S. Meenakshi',
      role: 'Director of Industrial Automation, Synergy Tech',
      product: 'Timeline CNC',
      quote:
        'Timeline CNC gave our shop floor supervisors real-time spindle metrics and Gantt visibility that saved us hundreds of machine-idle hours each month. Indispensable for high-mix machining.',
      initials: 'SM',
      theme: 'blue',
      colorText: 'text-electric-blue',
      bgInitial: 'bg-electric-blue/10 text-electric-blue',
    },
  ];

  return (
    <section id="testimony" className="py-16 sm:py-20 relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-sunburst-orange animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-widest text-sunburst-orange font-bold">
                CLIENT SUCCESS &amp; TESTIMONY
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight uppercase">
              CLIENT TESTIMONIALS
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-2xl mt-1">
              Trusted by industrial leaders and enterprise operators across biometric security, CNC manufacturing, and retail networks.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-neon/10 text-emerald-neon font-label text-xs font-bold flex items-center gap-1.5 border border-emerald-neon/20">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Verified Client Reviews
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-surface-elevated p-6 sm:p-7 shadow-[0_12px_36px_rgba(30,36,43,0.06)] hover:shadow-[0_20px_50px_rgba(30,36,43,0.12)] border border-white/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] fill-1">
                        star
                      </span>
                    ))}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full ${t.bgInitial} font-label text-xs font-bold uppercase tracking-wider`}
                  >
                    {t.product}
                  </span>
                </div>

                <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-3 pt-5 border-t border-surface-container mt-5">
                <div
                  className={`w-11 h-11 rounded-full ${t.bgInitial} font-extrabold flex items-center justify-center font-headline text-sm shadow-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-on-surface">
                    {t.name}
                  </span>
                  <span className="font-label text-xs text-on-surface-variant font-medium">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
