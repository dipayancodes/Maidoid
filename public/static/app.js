/* ============================================
   MAIDOID COMPANY LTD.
   Frontend Application JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Navigation ---
  const nav = document.getElementById('mainNav');
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  // Scroll behavior for nav
  function handleNavScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Mobile menu toggle
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      menuOpen = !menuOpen;
      navToggle.classList.toggle('open', menuOpen);
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });

    // Close on link click
    var mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuOpen = false;
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal ---
  function revealElements() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;

    reveals.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var triggerPoint = windowHeight * 0.88;

      if (rect.top < triggerPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealElements, { passive: true });
  window.addEventListener('resize', revealElements, { passive: true });

  // Initial reveal check
  setTimeout(revealElements, 100);
  setTimeout(revealElements, 300);

  // --- Contact Form ---
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  var submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.className = 'form-status error';
        return;
      }

      // Update button state
      submitBtn.textContent = 'SENDING...';
      submitBtn.disabled = true;

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, subject: subject, message: message })
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            formStatus.textContent = data.message;
            formStatus.className = 'form-status success';
            contactForm.reset();
          } else {
            formStatus.textContent = data.error || 'Something went wrong. Please try again.';
            formStatus.className = 'form-status error';
          }
        })
        .catch(function () {
          formStatus.textContent = 'Network error. Please try again.';
          formStatus.className = 'form-status error';
        })
        .finally(function () {
          submitBtn.textContent = 'SEND MESSAGE';
          submitBtn.disabled = false;
        });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Stagger reveal for grid items ---
  function staggerReveal() {
    var grids = document.querySelectorAll('.tech-grid, .philosophy-grid, .standards-grid, .benefits-grid, .responsibility-content');
    grids.forEach(function (grid) {
      var items = grid.querySelectorAll('.reveal.visible');
      items.forEach(function (item, index) {
        item.style.transitionDelay = (index * 0.1) + 's';
      });
    });
  }

  window.addEventListener('scroll', staggerReveal, { passive: true });

})();
