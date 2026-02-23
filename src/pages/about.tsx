import { html } from 'hono/html'

export const AboutPage = () => {
  return html`
    <!-- Header -->
    <section class="page-hero">
      <div class="container">
        <p class="overline reveal">ABOUT</p>
        <h1 class="page-hero-title reveal">A Company Built<br>on Conviction</h1>
        <p class="page-hero-intro reveal">Founded with a singular purpose: to bring intelligent, safe, and capable humanoid robots into the home. Headquartered in Dubai. Building for the world.</p>
      </div>
    </section>

    <!-- Vision -->
    <section class="sect-dark">
      <div class="container container-narrow">
        <div class="about-statement reveal">
          <p class="overline-light">OUR VISION</p>
          <h2 class="about-statement-title">The next great shift in human living will not come from smaller screens or faster networks. It will come from intelligent machines that share our physical space.</h2>
          <p class="about-statement-text">For decades, technology has been confined to screens. We interact with it through glass. Maidoid represents the moment technology steps off the screen and into the room. Not as a gadget, but as a capable, safe, and intelligent physical presence that shoulders the burden of daily domestic work.</p>
          <p class="about-statement-text">We exist to make that future real. Not in decades. Now.</p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="sect-light">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline">OUR STORY</p>
          <h2 class="sect-title">From Vision to Reality</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item reveal">
            <div class="timeline-year">2021</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Foundation</h3>
              <p class="timeline-text">Maidoid Company Ltd. established in Dubai with founding team of robotics engineers, AI researchers, and mechanical designers from leading technology companies and research institutions.</p>
            </div>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-year">2022</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Research & Prototyping</h3>
              <p class="timeline-text">First generation prototype completed. Core motion system validated with 42 degrees of freedom. AI cognitive engine architecture finalized. Dubai R&D facility operational.</p>
            </div>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-year">2023</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Engineering Milestone</h3>
              <p class="timeline-text">Second generation prototype achieves natural bipedal walking. Conversational AI passes internal benchmarks for domestic interaction. Safety framework certified to ISO 13482.</p>
            </div>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-year">2024</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Manufacturing Readiness</h3>
              <p class="timeline-text">Dubai manufacturing facility completed. Supply chain established across Asia, Europe, and North America. Third generation prototype enters extensive field testing in controlled domestic environments.</p>
            </div>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-year">2025</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Maidoid One Announced</h3>
              <p class="timeline-text">First commercially available unit unveiled. Private demonstration program launched for select partners, institutions, and early adopters. Global interest exceeds expectations.</p>
            </div>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-year">2026</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Market Entry</h3>
              <p class="timeline-text">Maidoid One enters limited production. First units deployed to homes in the UAE, followed by expansion to select global markets. Continuous improvement through real-world operation data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engineering Standards -->
    <section class="sect-dark">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline-light">ENGINEERING STANDARDS</p>
          <h2 class="sect-title-light">Precision Without Compromise</h2>
          <p class="sect-intro-light">We hold ourselves to the highest manufacturing standards in the robotics industry. Every unit that leaves our facility has earned its place.</p>
        </div>
        <div class="numbers-grid">
          <div class="number-card reveal">
            <div class="number-val" data-count="2000">0</div>
            <div class="number-label">Quality Checkpoints</div>
            <div class="number-desc">Every unit inspected at over two thousand points</div>
          </div>
          <div class="number-card reveal">
            <div class="number-val">0.01<span class="number-unit">mm</span></div>
            <div class="number-label">Tolerance</div>
            <div class="number-desc">Aerospace-grade manufacturing precision</div>
          </div>
          <div class="number-card reveal">
            <div class="number-val" data-count="10000">0</div>
            <div class="number-label">Hours Tested</div>
            <div class="number-desc">Continuous operation testing per system</div>
          </div>
          <div class="number-card reveal">
            <div class="number-val">100<span class="number-unit">%</span></div>
            <div class="number-label">Traceable</div>
            <div class="number-desc">Every component tracked from source to assembly</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dubai -->
    <section class="sect-light">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline">GLOBAL INNOVATION</p>
          <h2 class="sect-title">Dubai-Based. Globally Minded.</h2>
        </div>
        <div class="dubai-block reveal">
          <div class="dubai-content">
            <p class="dubai-text">Dubai is not just our headquarters. It is our competitive advantage. The city's commitment to technological innovation, its world-class infrastructure, strategic global location, and pro-business environment create the ideal conditions for building a next-generation robotics company.</p>
            <p class="dubai-text">Our research and development, manufacturing, and testing facilities are centralized in Dubai. Engineering partnerships extend across Asia, Europe, and North America, creating a truly global supply chain anchored by Dubai's logistics excellence.</p>
            <p class="dubai-text">The UAE's national AI strategy and robotics initiatives align directly with our mission, providing a supportive regulatory environment and a government that actively champions the responsible development of intelligent machines.</p>
          </div>
          <div class="dubai-details">
            <div class="dubai-detail">
              <span class="dubai-detail-label">HEADQUARTERS</span>
              <span class="dubai-detail-value">Dubai, UAE</span>
            </div>
            <div class="dubai-detail">
              <span class="dubai-detail-label">R&D FACILITY</span>
              <span class="dubai-detail-value">Dubai, UAE</span>
            </div>
            <div class="dubai-detail">
              <span class="dubai-detail-label">MANUFACTURING</span>
              <span class="dubai-detail-value">Dubai, UAE</span>
            </div>
            <div class="dubai-detail">
              <span class="dubai-detail-label">PARTNERSHIPS</span>
              <span class="dubai-detail-value">Asia, Europe, North America</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Responsible Robotics -->
    <section class="sect-dark">
      <div class="container container-narrow">
        <div class="section-header reveal">
          <p class="overline-light">RESPONSIBILITY</p>
          <h2 class="sect-title-light">Committed to Responsible Robotics</h2>
        </div>
        <div class="responsibility-list">
          <div class="resp-item reveal">
            <h3 class="resp-title">Ethical AI</h3>
            <p class="resp-text">All cognitive systems developed within strict ethical guidelines. Decision-making processes are transparent, auditable, and aligned with human values. Independent ethics board reviews all behavioral updates.</p>
          </div>
          <div class="resp-item reveal">
            <h3 class="resp-title">Absolute Privacy</h3>
            <p class="resp-text">All processing happens on-device. No household data is transmitted, stored, or shared externally. No cloud dependency for core functions. Privacy is built into the architecture, not bolted on as a policy.</p>
          </div>
          <div class="resp-item reveal">
            <h3 class="resp-title">Environmental Responsibility</h3>
            <p class="resp-text">Manufactured with sustainable materials. Designed for long operational life with modular repair capability. Full end-of-life recycling program for all components. Carbon-neutral manufacturing target by 2028.</p>
          </div>
          <div class="resp-item reveal">
            <h3 class="resp-title">Human-Centered Purpose</h3>
            <p class="resp-text">Maidoid is designed to assist, not to replace. Our mission is to free humans from repetitive domestic labor so they can invest time in relationships, creativity, and personal growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="sect-cta">
      <div class="container">
        <div class="cta-block reveal">
          <h2 class="cta-title">Join the Mission</h2>
          <p class="cta-text">We are assembling a world-class team of engineers, researchers, and visionaries.</p>
          <div class="cta-actions">
            <a href="/careers" class="btn btn-white">VIEW CAREERS<span class="btn-arrow">&rarr;</span></a>
            <a href="/contact" class="btn btn-ghost-light">CONTACT US</a>
          </div>
        </div>
      </div>
    </section>
  `
}
