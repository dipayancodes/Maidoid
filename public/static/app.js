/* ============================================
   MAIDOID — Frontend Application v4
   Modern Motion Graphics + Full Responsive
   Particle Systems, Parallax, Smooth Transitions
   ============================================ */
(function () {
  'use strict';

  // =============================================
  // PAGE LOADER
  // =============================================
  var loader = document.getElementById('pageLoader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () { loader.classList.add('hidden'); }, 300);
    });
    setTimeout(function () { if (loader) loader.classList.add('hidden'); }, 2000);
  }

  // =============================================
  // CUSTOM CURSOR (Desktop only)
  // =============================================
  var cursorDot = document.getElementById('cursorDot');
  var cursorRing = document.getElementById('cursorRing');
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (cursorDot && cursorRing && !isTouch && window.innerWidth > 1024) {
    var dotX = 0, dotY = 0, ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    (function animCursor() {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animCursor);
    })();

    // Hover effects on interactive elements
    document.querySelectorAll('a, button, .job-row, .feature-card, .usecase, .benefit-card, input, textarea, select').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursorDot.style.width = '20px';
        cursorDot.style.height = '20px';
        cursorDot.style.opacity = '0.4';
        cursorRing.style.width = '52px';
        cursorRing.style.height = '52px';
        cursorRing.style.borderColor = 'rgba(255,255,255,.8)';
      });
      el.addEventListener('mouseleave', function () {
        cursorDot.style.width = '6px';
        cursorDot.style.height = '6px';
        cursorDot.style.opacity = '1';
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'rgba(255,255,255,.5)';
      });
    });
  }

  // =============================================
  // SCROLL PROGRESS BAR
  // =============================================
  var progressBar = document.getElementById('progressBar');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // =============================================
  // NAVIGATION
  // =============================================
  var nav = document.getElementById('mainNav');
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuOpen = false;

  function handleNavScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      menuOpen = !menuOpen;
      navToggle.classList.toggle('open', menuOpen);
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuOpen = false;
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // =============================================
  // SCROLL REVEAL with stagger
  // =============================================
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = null;

  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger children in grids
          var parent = entry.target.parentElement;
          if (parent) {
            var siblings = parent.querySelectorAll('.reveal');
            siblings.forEach(function (sib, i) {
              if (sib === entry.target) {
                entry.target.style.transitionDelay = Math.min(i * 0.06, 0.4) + 's';
              }
            });
          }
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Fallback
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // =============================================
  // COUNTER ANIMATION
  // =============================================
  var counted = new Set();

  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      if (counted.has(el)) return;
      var rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      counted.add(el);

      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 2000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        el.textContent = current >= 1000 ? current.toLocaleString() : current.toString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target >= 1000 ? target.toLocaleString() : target.toString();
        }
      }
      requestAnimationFrame(step);
    });
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  setTimeout(animateCounters, 600);

  // =============================================
  // ROBOT HEAD TRACKING (Mouse Follow)
  // =============================================
  var robotHead = document.getElementById('robotHead');
  var prodRobotHead = document.getElementById('prodRobotHead');

  if ((robotHead || prodRobotHead) && !isTouch) {
    document.addEventListener('mousemove', function (e) {
      [robotHead, prodRobotHead].filter(Boolean).forEach(function (head) {
        var rect = head.getBoundingClientRect();
        var hx = rect.left + rect.width / 2;
        var hy = rect.top + rect.height / 2;
        var dx = (e.clientX - hx) / window.innerWidth;
        var dy = (e.clientY - hy) / window.innerHeight;
        head.style.transform = 'rotateY(' + (dx * 15) + 'deg) rotateX(' + (-dy * 10) + 'deg)';
      });
    });
  }

  // =============================================
  // ROBOT PARALLAX ON SCROLL
  // =============================================
  var robotContainer = document.getElementById('robotContainer');
  if (robotContainer && window.innerWidth > 768) {
    window.addEventListener('scroll', function () {
      var rect = robotContainer.getBoundingClientRect();
      var viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        var progress = (viewH - rect.top) / (viewH + rect.height);
        robotContainer.style.transform = 'translateY(' + ((progress - 0.5) * 24) + 'px)';
      }
    }, { passive: true });
  }

  // =============================================
  // EYE BLINK EFFECT
  // =============================================
  function blinkEyes() {
    document.querySelectorAll('.robot-eye').forEach(function (eye) {
      eye.style.transition = 'transform 0.12s';
      eye.style.transform = 'scaleY(0.05)';
      setTimeout(function () { eye.style.transform = 'scaleY(1)'; }, 120);
    });
  }
  function scheduleBlink() {
    setTimeout(function () { blinkEyes(); scheduleBlink(); }, 3000 + Math.random() * 4000);
  }
  scheduleBlink();

  // =============================================
  // MAGNETIC TILT EFFECT ON CARDS (Desktop)
  // =============================================
  if (!isTouch && window.innerWidth > 1024) {
    document.querySelectorAll('.feature-card, .usecase, .benefit-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // =============================================
  // CONTACT FORM
  // =============================================
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

      submitBtn.innerHTML = 'SENDING...<span class="btn-arrow">&rarr;</span>';
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
            formStatus.textContent = data.error || 'Something went wrong.';
            formStatus.className = 'form-status error';
          }
        })
        .catch(function () {
          formStatus.textContent = 'Network error. Please try again.';
          formStatus.className = 'form-status error';
        })
        .finally(function () {
          submitBtn.innerHTML = 'SEND MESSAGE<span class="btn-arrow">&rarr;</span>';
          submitBtn.disabled = false;
        });
    });
  }

  // =============================================
  // SMOOTH SECTION TRANSITIONS (opacity on scroll)
  // =============================================
  if (window.innerWidth > 768) {
    var sections = document.querySelectorAll('.sect-light, .sect-dark, .sect-cta');
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.05 });

    sections.forEach(function (s) {
      s.style.transition = 'opacity .6s ease, transform .6s ease';
      sectionObserver.observe(s);
    });
  }

  // =============================================
  // FORM INPUT ANIMATION (focus underline expand)
  // =============================================
  document.querySelectorAll('.form-input').forEach(function (input) {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      this.parentElement.classList.remove('focused');
    });
  });

  // =============================================
  // KEYBOARD ACCESSIBILITY — ESC closes mobile menu
  // =============================================
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen && navToggle && mobileMenu) {
      menuOpen = false;
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });

  // =============================================
  // TOUCH-FRIENDLY: Add active states for mobile
  // =============================================
  if (isTouch) {
    document.querySelectorAll('.btn, .feature-card, .usecase, .benefit-card, .job-row').forEach(function (el) {
      el.addEventListener('touchstart', function () { this.style.opacity = '0.85'; }, { passive: true });
      el.addEventListener('touchend', function () { this.style.opacity = ''; }, { passive: true });
    });
  }

})();
