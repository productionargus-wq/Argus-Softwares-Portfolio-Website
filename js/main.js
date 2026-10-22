/**
 * Argus Softwares - Core App Interactions & UI Logic
 * Handles:
 * - Mobile Menu drawer toggle
 * - Book Demo native <dialog> modal
 * - Interactive Contact Form with validation and toast alerts
 * - Back to top smooth scroll
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initDemoModal();
    initContactForm();
    initBackToTop();
  });

  // 1. Mobile Navigation Drawer Toggle
  function initMobileNav() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('mobile-close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !mobileDrawer) return;

    function openMenu() {
      mobileDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileDrawer.classList.add('hidden');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  // 2. Demo Modal Handling (<dialog>)
  function initDemoModal() {
    const dialog = document.getElementById('demo-modal');
    const openBtns = document.querySelectorAll('.open-demo-modal');
    const closeBtn = document.getElementById('close-demo-modal');
    const form = document.getElementById('demo-form');

    if (!dialog) return;

    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = btn.getAttribute('data-product') || 'Argus Enterprise Suite';
        const productSelect = document.getElementById('demo-product-select');
        if (productSelect) {
          productSelect.value = productName;
        }
        dialog.showModal();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => dialog.close());
    }

    dialog.addEventListener('click', (e) => {
      // Close on backdrop click
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="demo_name"]')?.value || 'Guest';
        dialog.close();
        form.reset();
        showToast(`Thank you, ${name}! Your demo request has been prioritized. Our solutions architect will contact you.`, 'verified');
      });
    }
  }

  // 3. Contact Form Submission
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('[name="full_name"]');
      const emailInput = form.querySelector('[name="work_email"]');
      const productInput = form.querySelector('input[name="product_interest"]:checked');

      const name = nameInput ? nameInput.value.trim() : 'Valued Client';
      const product = productInput ? productInput.value : 'Argus Suite';

      // Submit feedback simulation
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        <span>Sending Message...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        showToast(`Thank you, ${name}! Your inquiry regarding ${product} was dispatched to our Coimbatore engineering team.`, 'mark_email_read');
      }, 1000);
    });
  }

  // 4. Back to top button
  function initBackToTop() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Toast Notification System
  window.showToast = function (message, icon = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="material-symbols-outlined text-primary text-[20px]">${icon}</span>
      <span class="text-sm font-medium leading-snug">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 4500);
  };
})();
