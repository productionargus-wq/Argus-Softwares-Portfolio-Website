/**
 * Argus Softwares - Scroll Animations & Interactions
 * Features:
 * - Top Scroll Reading Progress Bar
 * - Native View Timeline Support & IntersectionObserver Fallback
 * - Dynamic Metric Counter Animations
 * - Scrollspy Active Nav Highlighting
 * - 3D Card Hover Depth Tilt
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgressBar();
    initScrollReveals();
    initCounterAnimations();
    initScrollspy();
    initCard3DTilt();
  });

  // 1. Top Reading Scroll Progress Bar
  function initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        progressBar.style.width = `${Math.min(Math.max(scrolled, 0), 100)}%`;
      }
    }, { passive: true });
  }

  // 2. IntersectionObserver Fallback for Scroll Reveals
  function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    // Check if browser already supports native scroll-driven view timelines
    const supportsViewTimeline = window.CSS && CSS.supports && CSS.supports('(animation-timeline: view()) and (animation-range: entry)');

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach((el) => el.classList.add('is-revealed'));
    }
  }

  // 3. Dynamic Animated Number Counters
  function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter-target]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetStr = el.getAttribute('data-counter-target');
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
          const targetNum = parseFloat(targetStr);

          if (!isNaN(targetNum)) {
            animateValue(el, 0, targetNum, 1600, prefix, suffix, decimals);
          }

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  function animateValue(obj, start, end, duration, prefix, suffix, decimals) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (end - start) * easeProgress;
      obj.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`;
      }
    };
    window.requestAnimationFrame(step);
  }

  // 4. Scrollspy Active Nav Highlighting
  function initScrollspy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('nav a[data-path]');
    if (!sections.length || !navLinks.length) return;

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const path = link.getAttribute('data-path');
            const isActive = path === id || (id === 'hero' && path === 'home');
            
            if (isActive) {
              link.classList.add('bg-surface-elevated', 'text-primary', 'shadow-sm', 'font-bold');
              link.classList.remove('text-on-surface-variant');
            } else {
              link.classList.remove('bg-surface-elevated', 'text-primary', 'shadow-sm', 'font-bold');
              link.classList.add('text-on-surface-variant');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    sections.forEach((sec) => navObserver.observe(sec));
  }

  // 5. 3D Card Hover Depth Tilt (for Desktop)
  function initCard3DTilt() {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const cards = document.querySelectorAll('.tilt-card');

      cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -7;
          const rotateY = ((x - centerX) / centerX) * 7;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
      });
    }
  }
})();
