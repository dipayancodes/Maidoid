import { html } from 'hono/html'

export const CareersPage = () => {
  return html`
    <!-- Page Header -->
    <section class="page-header-split">
      <div class="page-header-split-left">
        <div class="page-header-split-content">
          <p class="section-label-light reveal">CAREERS</p>
          <h1 class="page-title-light reveal">Build the Future of<br>Humanoid Robotics.</h1>
        </div>
      </div>
      <div class="page-header-split-right">
        <div class="page-header-split-content">
          <p class="page-intro reveal">We are looking for exceptional individuals who want to solve the hardest problems in robotics, AI, and manufacturing.</p>
          <p class="page-intro reveal">If you believe the future should be built, not waited for, we want to hear from you.</p>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="section-white">
      <div class="container">
        <p class="section-label reveal">DEPARTMENTS</p>
        <h2 class="section-title reveal">Open Positions</h2>
        
        <!-- Robotics Engineering -->
        <div class="dept-section reveal">
          <h3 class="dept-title">Robotics Engineering</h3>
          <div class="job-cards">
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Senior Mechanical Engineer</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Actuator Systems Lead</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Control Systems Engineer</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
          </div>
        </div>

        <!-- AI & Software -->
        <div class="dept-section reveal">
          <h3 class="dept-title">AI & Software</h3>
          <div class="job-cards">
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Machine Learning Research Scientist</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Computer Vision Engineer</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">NLP & Conversational AI Lead</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Embedded Systems Developer</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
          </div>
        </div>

        <!-- Mechanical & Electrical -->
        <div class="dept-section reveal">
          <h3 class="dept-title">Mechanical & Electrical</h3>
          <div class="job-cards">
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Power Systems Engineer</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">PCB Design Engineer</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Sensor Integration Specialist</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
          </div>
        </div>

        <!-- Manufacturing -->
        <div class="dept-section reveal">
          <h3 class="dept-title">Manufacturing</h3>
          <div class="job-cards">
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Production Manager</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Quality Assurance Lead</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
            <div class="job-card">
              <div class="job-info">
                <h4 class="job-title">Materials Science Researcher</h4>
                <p class="job-meta">Dubai &middot; Full-time</p>
              </div>
              <span class="job-arrow">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Maidoid -->
    <section class="section-black">
      <div class="container container-narrow">
        <p class="section-label-light reveal">WHY MAIDOID</p>
        <h2 class="section-title-light reveal">What We Offer</h2>
        <div class="benefits-grid">
          <div class="benefit-item reveal">
            <h3 class="benefit-title">Meaningful Work</h3>
            <p class="benefit-text">Solve problems that matter. Your work directly shapes the future of human-robot coexistence.</p>
          </div>
          <div class="benefit-item reveal">
            <h3 class="benefit-title">World-Class Team</h3>
            <p class="benefit-text">Work alongside leading minds in robotics, AI, and engineering from top institutions worldwide.</p>
          </div>
          <div class="benefit-item reveal">
            <h3 class="benefit-title">Dubai Lifestyle</h3>
            <p class="benefit-text">Tax-free income, world-class infrastructure, and a quality of life that attracts global talent.</p>
          </div>
          <div class="benefit-item reveal">
            <h3 class="benefit-title">Equity & Growth</h3>
            <p class="benefit-text">Competitive compensation with equity participation. Grow as the company grows.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-white cta-section">
      <div class="container">
        <h2 class="cta-headline reveal">Ready to Build the Future?</h2>
        <p class="cta-sub reveal">Send us your resume and a brief note on why you want to join Maidoid.</p>
        <a href="/contact" class="btn btn-dark reveal">GET IN TOUCH</a>
      </div>
    </section>
  `
}
