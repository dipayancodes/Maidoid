import { html } from 'hono/html'

export const AboutPage = () => {
  return html`
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <p class="section-label reveal">ABOUT</p>
        <h1 class="page-title reveal">A Company Built<br>on Conviction</h1>
        <p class="page-intro reveal">Maidoid Company Ltd. was founded with a singular purpose: to bring intelligent, safe, and capable humanoid robots into the domestic environment.</p>
      </div>
    </section>

    <!-- Our Vision -->
    <section class="section-black">
      <div class="container container-narrow">
        <p class="section-label-light reveal">OUR VISION</p>
        <h2 class="section-title-light reveal">Redefining Domestic Life</h2>
        <div class="about-text-block reveal">
          <p class="about-text-light">We believe that the next great shift in human living will not come from smaller screens or faster networks. It will come from intelligent machines that share our physical space and shoulder the burden of daily domestic work.</p>
          <p class="about-text-light">Maidoid exists to make that future real. Not in decades. Now.</p>
        </div>
      </div>
    </section>

    <!-- Engineering Standards -->
    <section class="section-white">
      <div class="container">
        <p class="section-label reveal">ENGINEERING STANDARDS</p>
        <h2 class="section-title reveal">Precision Without Compromise</h2>
        <div class="standards-grid">
          <div class="standard-card reveal">
            <div class="standard-number">2,000+</div>
            <h3 class="standard-title">Quality Checkpoints</h3>
            <p class="standard-text">Every unit passes through over two thousand inspection and test points before certification.</p>
          </div>
          <div class="standard-card reveal">
            <div class="standard-number">0.01mm</div>
            <h3 class="standard-title">Manufacturing Tolerance</h3>
            <p class="standard-text">Aerospace-grade precision across all mechanical components and assembly processes.</p>
          </div>
          <div class="standard-card reveal">
            <div class="standard-number">10,000h</div>
            <h3 class="standard-title">Endurance Testing</h3>
            <p class="standard-text">Each system undergoes ten thousand hours of continuous operational testing before production approval.</p>
          </div>
          <div class="standard-card reveal">
            <div class="standard-number">ISO 13482</div>
            <h3 class="standard-title">Safety Certified</h3>
            <p class="standard-text">Full compliance with international safety standards for personal care robots.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dubai Innovation -->
    <section class="section-black">
      <div class="container container-narrow">
        <p class="section-label-light reveal">GLOBAL INNOVATION</p>
        <h2 class="section-title-light reveal">Dubai-Based. Globally Minded.</h2>
        <div class="about-text-block reveal">
          <p class="about-text-light">Headquartered in Dubai, United Arab Emirates, Maidoid operates at the intersection of ambition and execution. Dubai's commitment to innovation, world-class infrastructure, and global connectivity provides the ideal foundation for a company building the next generation of intelligent machines.</p>
          <p class="about-text-light">Our research and development, manufacturing, and testing facilities are centralized in Dubai, with engineering partnerships across Asia, Europe, and North America.</p>
        </div>
        <div class="location-badge reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" width="20" height="20">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <span>Dubai, United Arab Emirates</span>
        </div>
      </div>
    </section>

    <!-- Responsible Robotics -->
    <section class="section-white">
      <div class="container container-narrow">
        <p class="section-label reveal">RESPONSIBILITY</p>
        <h2 class="section-title reveal">Committed to Responsible Robotics</h2>
        <div class="responsibility-content">
          <div class="responsibility-item reveal">
            <h3 class="responsibility-title">Ethical AI Development</h3>
            <p class="responsibility-text">All cognitive systems are developed within strict ethical guidelines. Decision-making processes are transparent, auditable, and aligned with human values.</p>
          </div>
          <div class="responsibility-item reveal">
            <h3 class="responsibility-title">Data Privacy</h3>
            <p class="responsibility-text">User data is processed on-device. No household data is transmitted, stored, or shared externally. Complete privacy by design.</p>
          </div>
          <div class="responsibility-item reveal">
            <h3 class="responsibility-title">Environmental Responsibility</h3>
            <p class="responsibility-text">Manufactured with sustainable materials and designed for long operational life. Full end-of-life recycling program for all components.</p>
          </div>
          <div class="responsibility-item reveal">
            <h3 class="responsibility-title">Human Employment</h3>
            <p class="responsibility-text">Maidoid is designed to assist, not replace. Our mission is to free humans from repetitive domestic labor so they can pursue higher-value activities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-black cta-section-dark">
      <div class="container">
        <h2 class="cta-headline-light reveal">Join the Mission</h2>
        <p class="cta-sub-light reveal">We are assembling a world-class team of engineers, researchers, and visionaries.</p>
        <a href="/careers" class="btn btn-white reveal">VIEW CAREERS</a>
      </div>
    </section>
  `
}
