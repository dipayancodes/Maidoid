import { html } from 'hono/html'

export const Layout = (props: { title: string; children: any; currentPath: string }) => {
  return html`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="Maidoid Company Ltd. - Humanoid robotics designed to live and work alongside humans. Dubai-based global innovation in AI and robotics.">
  <meta name="keywords" content="humanoid robotics, AI, artificial intelligence, domestic robots, Dubai, Maidoid, home assistant robot">
  <meta name="author" content="Maidoid Company Ltd.">
  <meta name="theme-color" content="#000000">
  <meta property="og:title" content="${props.title}">
  <meta property="og:description" content="Humanoid robotics designed to live and work alongside humans.">
  <meta property="og:type" content="website">
  <title>${props.title}</title>
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="/static/styles.css" rel="stylesheet">
</head>
<body>
  <!-- Page Loader -->
  <div class="page-loader" id="pageLoader">
    <div class="loader-inner">
      <div class="loader-ring-outer"></div>
      <div class="loader-ring"></div>
      <span class="loader-mark">M</span>
    </div>
  </div>

  <!-- Cursor Follower (Desktop only) -->
  <div class="cursor-dot" id="cursorDot"></div>
  <div class="cursor-ring" id="cursorRing"></div>

  <!-- Motion Graphics Background -->
  <div class="geo-shapes" aria-hidden="true">
    <div class="geo-shape geo-shape--1"></div>
    <div class="geo-shape geo-shape--circle geo-shape--2"></div>
    <div class="geo-shape geo-shape--circle geo-shape--3"></div>
    <div class="geo-shape geo-shape--circle geo-shape--4"></div>
    <div class="geo-shape geo-shape--5"></div>
  </div>
  <div class="grid-overlay" aria-hidden="true"></div>

  <!-- Scan Line Effect -->
  <div class="scanline" aria-hidden="true"></div>

  <!-- Navigation -->
  <nav class="nav" id="mainNav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="Maidoid Home">
        <span class="logo-mark" aria-hidden="true">M</span>
        <span class="logo-text">MAIDOID</span>
      </a>
      <div class="nav-links" id="navLinks">
        <a href="/" class="nav-link ${props.currentPath === '/' ? 'active' : ''}">Home</a>
        <a href="/technology" class="nav-link ${props.currentPath === '/technology' ? 'active' : ''}">Technology</a>
        <a href="/product" class="nav-link ${props.currentPath === '/product' ? 'active' : ''}">Product</a>
        <a href="/about" class="nav-link ${props.currentPath === '/about' ? 'active' : ''}">About</a>
        <a href="/careers" class="nav-link ${props.currentPath === '/careers' ? 'active' : ''}">Careers</a>
        <a href="/contact" class="nav-link nav-link-cta ${props.currentPath === '/contact' ? 'active' : ''}">Contact</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
    <div class="mobile-menu-bg"></div>
    <div class="mobile-menu-inner">
      <a href="/" class="mobile-link"><span class="mobile-link-num">01</span>Home</a>
      <a href="/technology" class="mobile-link"><span class="mobile-link-num">02</span>Technology</a>
      <a href="/product" class="mobile-link"><span class="mobile-link-num">03</span>Product</a>
      <a href="/about" class="mobile-link"><span class="mobile-link-num">04</span>About</a>
      <a href="/careers" class="mobile-link"><span class="mobile-link-num">05</span>Careers</a>
      <a href="/contact" class="mobile-link"><span class="mobile-link-num">06</span>Contact</a>
      <div class="mobile-menu-footer">
        <p>Maidoid Company Ltd.</p>
        <p>Dubai, United Arab Emirates</p>
      </div>
    </div>
  </div>

  <!-- Progress Bar -->
  <div class="progress-bar" id="progressBar" aria-hidden="true"></div>

  <!-- Page Content -->
  <main id="mainContent">
    ${props.children}
  </main>

  <!-- Footer -->
  <footer class="footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <span class="logo-mark">M</span>
            <span class="logo-text">MAIDOID</span>
          </a>
          <p class="footer-tagline">Human Intelligence. Engineered.</p>
          <p class="footer-desc">Pioneering the next generation of humanoid robotics for domestic environments. Headquartered in Dubai, operating globally.</p>
        </div>
        <div class="footer-columns">
          <div class="footer-col">
            <h4 class="footer-col-title">COMPANY</h4>
            <a href="/about" class="footer-link">About Us</a>
            <a href="/careers" class="footer-link">Careers</a>
            <a href="/contact" class="footer-link">Contact</a>
            <a href="#" class="footer-link">Press</a>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">EXPLORE</h4>
            <a href="/technology" class="footer-link">Technology</a>
            <a href="/product" class="footer-link">Product</a>
            <a href="#" class="footer-link">Research</a>
            <a href="#" class="footer-link">Safety</a>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">CONNECT</h4>
            <a href="#" class="footer-link">LinkedIn</a>
            <a href="#" class="footer-link">X (Twitter)</a>
            <a href="#" class="footer-link">YouTube</a>
            <a href="mailto:info@maidoid.com" class="footer-link">info@maidoid.com</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">2026 Maidoid Company Ltd. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy</a>
          <a href="#" class="footer-legal-link">Terms</a>
          <a href="#" class="footer-legal-link">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/static/app.js"></script>
</body>
</html>`
}
