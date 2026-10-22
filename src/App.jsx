import React, { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackTicker from './components/TechStackTicker';
import ProductsSection from './components/ProductsSection';
import ArchitectureSection from './components/ArchitectureSection';
import StatsBanner from './components/StatsBanner';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import BookDemoModal from './components/BookDemoModal';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProduct, setSelectedDemoProduct] = useState('Argus Attendance');
  const [toasts, setToasts] = useState([]);

  // Top reading scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        setScrollProgress(Math.min(Math.max(scrolled, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDemo = (product = 'Argus Enterprise Suite') => {
    setSelectedDemoProduct(product);
    setDemoModalOpen(true);
  };

  const handleShowToast = (message, icon = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, icon }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  return (
    <div className="relative min-h-screen bg-canvas-base font-body text-on-surface antialiased overflow-x-hidden">
      {/* 1. Top Reading Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-vivid-violet to-electric-blue z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Scroll-Reactive 3D Ambient WebGL Background */}
      <ThreeBackground />

      {/* 3. Sticky Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* 4. Main Page Content */}
      <main className="relative z-10 w-full">
        <Hero onOpenDemo={handleOpenDemo} />
        <TechStackTicker />
        <ProductsSection onOpenDemo={handleOpenDemo} />
        <ArchitectureSection />
        <StatsBanner />
        <TestimonialsSection />
        <ContactSection onShowToast={handleShowToast} />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Book Demo Modal */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultProduct={selectedDemoProduct}
        onShowToast={handleShowToast}
      />

      {/* 7. Floating Toast Notifications */}
      <div className="fixed bottom-6 right-6 z-[120] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#161c23]/95 backdrop-blur-xl text-white shadow-[0_12px_36px_rgba(0,0,0,0.25)] border border-white/15 text-sm font-medium animate-slide-up"
          >
            <span className="material-symbols-outlined text-primary text-[22px]">
              {toast.icon}
            </span>
            <span className="leading-snug max-w-sm">{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
