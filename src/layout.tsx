import { html } from 'hono/html'

export const Layout = (props: { title: string; children: any; currentPath: string }) => {
  return html`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Maidoid Company Ltd. - Humanoid robotics designed to live and work alongside humans. Dubai-based global innovation in AI and robotics.">
  <meta name="keywords" content="humanoid robotics, AI, artificial intelligence, domestic robots, Dubai, Maidoid, home assistant robot">
  <meta name="author" content="Maidoid Company Ltd.">
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
      <span class="loader-mark">M</span>
    </div>
  </div>

  <!-- Cursor Follower -->
  <div class="cursor-dot" id="cursorDot"></div>

  <!-- Navigation -->
  <nav class="nav" id="mainNav">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <span class="logo-mark">M</span>
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
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-bg"></div>
    <div class="mobile-menu-inner">
      <a href="/" class="mobile-link">Home</a>
      <a href="/technology" class="mobile-link">Technology</a>
      <a href="/product" class="mobile-link">Product</a>
      <a href="/about" class="mobile-link">About</a>
      <a href="/careers" class="mobile-link">Careers</a>
      <a href="/contact" class="mobile-link">Contact</a>
      <div class="mobile-menu-footer">
        <p>Maidoid Company Ltd.</p>
        <p>Dubai, United Arab Emirates</p>
      </div>
    </div>
  </div>

  <!-- Page Content -->
  <main id="mainContent">
    ${props.children}
  </main>

  <!-- Footer -->
  <footer class="footer">
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
