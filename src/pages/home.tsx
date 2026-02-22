import { html } from 'hono/html'

export const HomePage = () => {
  return html`
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-headline fade-in">Human Intelligence.<br>Engineered.</h1>
        <p class="hero-sub fade-in delay-1">Humanoid robotics designed to live and work alongside humans.</p>
        <div class="hero-actions fade-in delay-2">
          <a href="/technology" class="btn btn-dark">EXPLORE TECHNOLOGY</a>
          <a href="/contact" class="btn btn-outline">REQUEST PRIVATE DEMO</a>
        </div>
      </div>
      <div class="scroll-indicator fade-in delay-3">
        <div class="scroll-line"></div>
        <span class="scroll-text">SCROLL</span>
      </div>
    </section>

    <!-- Statement Block -->
    <section class="section-black">
      <div class="container">
        <h2 class="statement reveal">We are building the future<br>of domestic assistance.</h2>
      </div>
    </section>

    <!-- Technology Overview -->
    <section class="section-white">
      <div class="container">
        <p class="section-label reveal">TECHNOLOGY</p>
        <h2 class="section-title reveal">Core Systems</h2>
        <div class="tech-grid">
          <div class="tech-card reveal">
            <div class="tech-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="24" cy="12" r="6"/>
                <path d="M12 44V36a12 12 0 0124 0v8"/>
                <path d="M18 26l-4 4M30 26l4 4"/>
              </svg>
            </div>
            <h3 class="tech-card-title">Human Motion System</h3>
            <p class="tech-card-text">Precision actuators and joint systems replicating natural human movement with sub-millimeter accuracy.</p>
          </div>
          <div class="tech-card reveal">
            <div class="tech-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="24" cy="24" r="18"/>
                <circle cx="24" cy="24" r="8"/>
                <path d="M24 6v4M24 38v4M6 24h4M38 24h4"/>
                <circle cx="24" cy="24" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="tech-card-title">AI Cognitive Engine</h3>
            <p class="tech-card-text">Multi-layered neural architecture enabling contextual understanding, reasoning, and adaptive decision-making.</p>
          </div>
          <div class="tech-card reveal">
            <div class="tech-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <ellipse cx="24" cy="24" rx="20" ry="12"/>
                <circle cx="24" cy="24" r="6"/>
                <circle cx="24" cy="24" r="2" fill="currentColor"/>
                <path d="M8 10l4 4M36 10l-4 4M8 38l4-4M36 38l-4-4"/>
              </svg>
            </div>
            <h3 class="tech-card-title">Vision & Perception</h3>
            <p class="tech-card-text">Stereo vision with depth mapping and environmental awareness for spatial intelligence and object recognition.</p>
          </div>
          <div class="tech-card reveal">
            <div class="tech-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M16 8c-4 2-8 8-8 16s4 14 8 16"/>
                <path d="M32 8c4 2 8 8 8 16s-4 14-8 16"/>
                <path d="M20 14c-2 2-4 6-4 10s2 8 4 10"/>
                <path d="M28 14c2 2 4 6 4 10s-2 8-4 10"/>
                <line x1="24" y1="4" x2="24" y2="44"/>
              </svg>
            </div>
            <h3 class="tech-card-title">Synthetic Human Skin</h3>
            <p class="tech-card-text">Advanced polymer skin with embedded pressure sensors delivering lifelike texture and haptic feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Philosophy -->
    <section class="section-black">
      <div class="container container-narrow">
        <p class="section-label-light reveal">PHILOSOPHY</p>
        <h2 class="section-title-light reveal">Built on Principles</h2>
        <div class="philosophy-grid">
          <div class="philosophy-item reveal">
            <h3 class="philosophy-title">Safety-First Design</h3>
            <p class="philosophy-text">Every system, every component, every line of code is engineered with human safety as the absolute priority. Redundant fail-safes ensure complete operational security.</p>
          </div>
          <div class="philosophy-item reveal">
            <h3 class="philosophy-title">Precision Engineering</h3>
            <p class="philosophy-text">Manufactured to aerospace-grade tolerances. Each unit undergoes over 2,000 quality checkpoints before leaving our facility.</p>
          </div>
          <div class="philosophy-item reveal">
            <h3 class="philosophy-title">Ethical AI Integration</h3>
            <p class="philosophy-text">Our cognitive systems are developed within a strict ethical framework. Transparent decision-making. No hidden processes. Full auditability.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-white cta-section">
      <div class="container">
        <h2 class="cta-headline reveal">The Future Begins at Home.</h2>
        <a href="/contact" class="btn btn-dark reveal">REQUEST INFORMATION</a>
      </div>
    </section>
  `
}
