import React, { useState } from 'react';

export default function BookDemoModal({ isOpen, onClose, defaultProduct, onShowToast }) {
  const [demoProduct, setDemoProduct] = useState(defaultProduct || 'Argus Enterprise Suite');
  const [demoDate, setDemoDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if defaultProduct changed
  React.useEffect(() => {
    if (defaultProduct) {
      setDemoProduct(defaultProduct);
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      onShowToast(
        `Demo requested for ${name} (${company || 'Your Enterprise'}) on ${demoProduct}! Our solutions engineer will email you a calendar invite.`,
        'verified'
      );
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-surface-elevated p-6 sm:p-8 shadow-[0_25px_70px_rgba(15,23,42,0.35)] border border-white/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-container">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">calendar_today</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">Book a Live Demo</h3>
              <p className="font-body text-xs text-on-surface-variant">
                1-on-1 walkthrough with our platform architects
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-5">
          <div className="flex flex-col gap-1.5">
            <label className="font-label text-xs font-bold text-on-surface">Target Platform</label>
            <select
              value={demoProduct}
              onChange={(e) => setDemoProduct(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface outline-none transition-all"
            >
              <option value="Argus Attendance">Argus Attendance (Facial Biometric AI)</option>
              <option value="Timeline CNC">Timeline CNC (Machine Floor Intelligence)</option>
              <option value="MetalCalc Quote">MetalCalc Quote (Instant CAD Parser)</option>
              <option value="Franchise OS">Franchise Operating System (FOS)</option>
              <option value="Argus Enterprise Suite">Complete Argus Enterprise Suite</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label text-xs font-bold text-on-surface">Full Name *</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full px-3 py-2 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label text-xs font-bold text-on-surface">Work Email *</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full px-3 py-2 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label text-xs font-bold text-on-surface">Company / Facility</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Industrial Ltd."
                className="w-full px-3 py-2 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label text-xs font-bold text-on-surface">Preferred Date</label>
              <input
                type="date"
                value={demoDate}
                onChange={(e) => setDemoDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-surface-container/60 border border-transparent focus:border-primary focus:bg-white text-sm font-body text-on-surface outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-gradient-to-r from-primary via-vivid-violet to-electric-blue text-white font-label text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Scheduling Walkthrough...</span>
                </>
              ) : (
                <>
                  <span>Confirm Demo Booking</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
