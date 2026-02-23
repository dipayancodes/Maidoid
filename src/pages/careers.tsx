import { html } from 'hono/html'

export const CareersPage = () => {
  return html`
    <!-- Header Split -->
    <section class="page-hero-split">
      <div class="page-hero-split-dark">
        <p class="overline-light reveal">CAREERS</p>
        <h1 class="page-hero-split-title reveal">Build the Future of<br>Humanoid Robotics.</h1>
      </div>
      <div class="page-hero-split-light">
        <p class="page-hero-split-text reveal">We are looking for exceptional individuals who want to solve the hardest problems in robotics, AI, and manufacturing. If you believe the future should be built, not waited for, we want to hear from you.</p>
        <div class="careers-stats reveal">
          <div class="careers-stat">
            <span class="careers-stat-num">4</span>
            <span class="careers-stat-label">Departments</span>
          </div>
          <div class="careers-stat">
            <span class="careers-stat-num">13</span>
            <span class="careers-stat-label">Open Roles</span>
          </div>
          <div class="careers-stat">
            <span class="careers-stat-num">1</span>
            <span class="careers-stat-label">Location</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="sect-light">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline">OPEN POSITIONS</p>
          <h2 class="sect-title">Current Openings</h2>
        </div>

        <div class="dept-block reveal">
          <h3 class="dept-name">Robotics Engineering</h3>
          <div class="job-list">
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Senior Mechanical Engineer</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Actuator Systems Lead</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Lead</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Control Systems Engineer</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Mid-Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        <div class="dept-block reveal">
          <h3 class="dept-name">AI & Software</h3>
          <div class="job-list">
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Machine Learning Research Scientist</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Computer Vision Engineer</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Mid-Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">NLP & Conversational AI Lead</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Lead</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Embedded Systems Developer</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        <div class="dept-block reveal">
          <h3 class="dept-name">Mechanical & Electrical</h3>
          <div class="job-list">
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Power Systems Engineer</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">PCB Design Engineer</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Mid</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Sensor Integration Specialist</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        <div class="dept-block reveal">
          <h3 class="dept-name">Manufacturing</h3>
          <div class="job-list">
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Production Manager</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Manager</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Quality Assurance Lead</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Lead</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
            <a href="/contact" class="job-row">
              <div class="job-info"><h4 class="job-title">Materials Science Researcher</h4><p class="job-tags"><span>Dubai</span><span>Full-time</span><span>Senior</span></p></div>
              <span class="job-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join -->
    <section class="sect-dark">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline-light">WHY JOIN</p>
          <h2 class="sect-title-light">What We Offer</h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card reveal">
            <h3 class="benefit-name">Meaningful Work</h3>
            <p class="benefit-desc">Solve problems that will define the next century of human-machine coexistence. Your work ships into homes and changes real lives.</p>
          </div>
          <div class="benefit-card reveal">
            <h3 class="benefit-name">World-Class Team</h3>
            <p class="benefit-desc">Collaborate with leading roboticists, AI researchers, and engineers recruited from the best institutions and companies worldwide.</p>
          </div>
          <div class="benefit-card reveal">
            <h3 class="benefit-name">Dubai Lifestyle</h3>
            <p class="benefit-desc">Tax-free income, world-class infrastructure, year-round sunshine, and a vibrant international community. Relocation support provided.</p>
          </div>
          <div class="benefit-card reveal">
            <h3 class="benefit-name">Equity & Growth</h3>
            <p class="benefit-desc">Competitive base compensation with meaningful equity participation. Your financial success is tied directly to the company's success.</p>
          </div>
          <div class="benefit-card reveal">
            <h3 class="benefit-name">Learning Budget</h3>
            <p class="benefit-desc">Annual professional development budget for conferences, courses, certifications, and research materials. Continuous growth is expected.</p>
          </div>
          <div class="benefit-card reveal">
            <h3 class="benefit-name">Health & Wellbeing</h3>
            <p class="benefit-desc">Comprehensive health insurance, mental health support, fitness membership, and flexible working arrangements to maintain peak performance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="sect-cta">
      <div class="container">
        <div class="cta-block reveal">
          <h2 class="cta-title">Ready to Build the Future?</h2>
          <p class="cta-text">Send us your resume and a brief note on why you want to join Maidoid.</p>
          <div class="cta-actions">
            <a href="/contact" class="btn btn-white">GET IN TOUCH<span class="btn-arrow">&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  `
}
