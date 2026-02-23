/* ============================================
   MAIDOID — Frontend Application v2
   Premium interactions & animations
   ============================================ */
(function () {
  'use strict';

  // --- Page Loader ---
  var loader = document.getElementById('pageLoader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
      }, 400);
    });
    // Fallback
    setTimeout(function () {
      if (loader) loader.classList.add('hidden');
    }, 2000);
  }

  // --- Custom Cursor ---
  var cursor = document.getElementById('cursorDot');
  if (cursor && window.innerWidth > 768) {
    var cx = 0, cy = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
    });
    (function animateCursor() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    })();
    // Enlarge on interactive elements
    var interactiveEls = document.querySelectorAll('a, button, .job-row, .feature-card, .usecase');
    interactiveEls.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.opacity = '0.5';
      });
      el.addEventListener('mouseleave', function () {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.opacity = '1';
      });
    });
  }

  // --- Navigation ---
  var nav = document.getElementById('mainNav');
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuOpen = false;

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
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

  // --- Scroll Reveal ---
  var revealEls = document.querySelectorAll('.reveal');
  var revealIndex = 0;

  function revealOnScroll() {
    var wh = window.innerHeight;
    revealEls.forEach(function (el, i) {
      var rect = el.getBoundingClientRect();
      if (rect.top < wh * 0.9 && !el.classList.contains('visible')) {
        el.style.transitionDelay = Math.min(i * 0.04, 0.3) + 's';
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  setTimeout(revealOnScroll, 150);
  setTimeout(revealOnScroll, 500);

  // --- Counter Animation ---
  var counted = new Set();

  function animateCounters() {
    var counters = document.querySelectorAll('[data-count]');
    counters.forEach(function (el) {
      if (counted.has(el)) return;
      var rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      counted.add(el);

      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 1800;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        el.textContent = formatNumber(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = formatNumber(target);
        }
      }
      requestAnimationFrame(step);
    });
  }

  function formatNumber(n) {
    if (n >= 1000) {
      return n.toLocaleString();
    }
    return n.toString();
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  setTimeout(animateCounters, 600);

  // --- Robot Head Tracking (Mouse Follow) ---
  var robotHead = document.getElementById('robotHead');
  var prodRobotHead = document.getElementById('prodRobotHead');

  if (robotHead || prodRobotHead) {
    document.addEventListener('mousemove', function (e) {
      var heads = [robotHead, prodRobotHead].filter(Boolean);
      heads.forEach(function (head) {
        var rect = head.getBoundingClientRect();
        var hx = rect.left + rect.width / 2;
        var hy = rect.top + rect.height / 2;
        var dx = (e.clientX - hx) / window.innerWidth;
        var dy = (e.clientY - hy) / window.innerHeight;
        var rotateY = dx * 12;
        var rotateX = -dy * 8;
        head.style.transform = 'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)';
      });
    });
  }

  // --- Robot Parallax on Scroll ---
  var robotContainer = document.getElementById('robotContainer');
  if (robotContainer) {
    window.addEventListener('scroll', function () {
      var rect = robotContainer.getBoundingClientRect();
      var viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        var progress = (viewH - rect.top) / (viewH + rect.height);
        var shift = (progress - 0.5) * 20;
        robotContainer.style.transform = 'translateY(' + shift + 'px)';
      }
    }, { passive: true });
  }

  // --- Eye blink effect ---
  function blinkEyes() {
    var eyes = document.querySelectorAll('.robot-eye');
    eyes.forEach(function (eye) {
      eye.style.transition = 'transform 0.15s';
      eye.style.transform = 'scaleY(0.1)';
      setTimeout(function () {
        eye.style.transform = 'scaleY(1)';
      }, 150);
    });
  }
  // Blink every 4-7 seconds
  function scheduleBlink() {
    var delay = 4000 + Math.random() * 3000;
    setTimeout(function () {
      blinkEyes();
      scheduleBlink();
    }, delay);
  }
  scheduleBlink();

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

  // --- Stagger children in grids ---
  function staggerGrids() {
    var grids = document.querySelectorAll('.features-grid, .numbers-grid, .usecases-grid, .benefits-grid');
    grids.forEach(function (grid) {
      var children = grid.querySelectorAll('.reveal');
      children.forEach(function (child, i) {
        if (child.classList.contains('visible')) {
          child.style.transitionDelay = (i * 0.08) + 's';
        }
      });
    });
  }
  window.addEventListener('scroll', staggerGrids, { passive: true });

})();
