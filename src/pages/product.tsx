import { html } from 'hono/html'

export const ProductPage = () => {
  return html`
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <p class="section-label reveal">PRODUCT</p>
        <h1 class="page-title reveal">Maidoid One</h1>
        <p class="page-intro reveal">A human-scale intelligent assistant, built for domestic life.</p>
      </div>
    </section>

    <!-- Product Hero -->
    <section class="section-black product-hero-section">
      <div class="container">
        <div class="product-hero-visual reveal">
          <div class="product-render">
            <svg viewBox="0 0 400 600" fill="none" stroke="white" stroke-width="0.6" opacity="0.85">
              <!-- Full humanoid render - front view -->
              <!-- Head -->
              <ellipse cx="200" cy="70" rx="38" ry="45"/>
              <ellipse cx="185" cy="60" rx="5" ry="4" opacity="0.6"/>
              <ellipse cx="215" cy="60" rx="5" ry="4" opacity="0.6"/>
              <path d="M192 80 Q200 85 208 80" opacity="0.4"/>
              <!-- Face plate line -->
              <path d="M170 45 Q200 35 230 45" stroke-dasharray="2 3" opacity="0.3"/>
              
              <!-- Neck -->
              <path d="M188 115 L188 135 M212 115 L212 135"/>
              <ellipse cx="200" cy="125" rx="14" ry="6" opacity="0.3"/>
              
              <!-- Shoulders & Torso -->
              <path d="M140 145 Q200 130 260 145"/>
              <path d="M145 145 L150 290 Q200 300 250 290 L255 145"/>
              <!-- Torso center line -->
              <line x1="200" y1="145" x2="200" y2="290" stroke-dasharray="3 5" opacity="0.15"/>
              <!-- Chest plate -->
              <path d="M165 160 Q200 155 235 160 L230 210 Q200 215 170 210 Z" opacity="0.15" fill="white"/>
              <!-- Core light -->
              <circle cx="200" cy="185" r="4" fill="white" opacity="0.3"/>
              <circle cx="200" cy="185" r="8" opacity="0.2"/>
              
              <!-- Left Arm -->
              <path d="M140 145 L115 200"/>
              <circle cx="115" cy="200" r="5" opacity="0.3"/>
              <path d="M115 200 L105 280"/>
              <circle cx="105" cy="280" r="4" opacity="0.3"/>
              <!-- Left Hand -->
              <path d="M105 280 L98 300"/>
              <path d="M95 298 L92 310 M97 300 L95 314 M100 301 L99 314 M103 300 L103 312"/>
              
              <!-- Right Arm -->
              <path d="M260 145 L285 200"/>
              <circle cx="285" cy="200" r="5" opacity="0.3"/>
              <path d="M285 200 L295 280"/>
              <circle cx="295" cy="280" r="4" opacity="0.3"/>
              <!-- Right Hand -->
              <path d="M295 280 L302 300"/>
              <path d="M305 298 L308 310 M303 300 L305 314 M300 301 L301 314 M297 300 L297 312"/>
              
              <!-- Hip -->
              <path d="M155 290 Q200 305 245 290"/>
              
              <!-- Left Leg -->
              <path d="M170 295 L160 400"/>
              <circle cx="160" cy="400" r="5" opacity="0.3"/>
              <path d="M160 400 L155 510"/>
              <circle cx="155" cy="510" r="4" opacity="0.3"/>
              <!-- Left Foot -->
              <path d="M140 515 L170 515 L172 530 L138 530 Z" opacity="0.4"/>
              
              <!-- Right Leg -->
              <path d="M230 295 L240 400"/>
              <circle cx="240" cy="400" r="5" opacity="0.3"/>
              <path d="M240 400 L245 510"/>
              <circle cx="245" cy="510" r="4" opacity="0.3"/>
              <!-- Right Foot -->
              <path d="M230 515 L260 515 L262 530 L228 530 Z" opacity="0.4"/>
              
              <!-- Dimension lines -->
              <line x1="80" y1="25" x2="80" y2="530" stroke-dasharray="2 4" opacity="0.15"/>
              <line x1="75" y1="25" x2="85" y2="25" opacity="0.15"/>
              <line x1="75" y1="530" x2="85" y2="530" opacity="0.15"/>
              <text x="75" y="280" font-size="8" fill="white" opacity="0.3" transform="rotate(-90,75,280)">170 cm</text>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Specifications -->
    <section class="section-white">
      <div class="container">
        <p class="section-label reveal">SPECIFICATIONS</p>
        <h2 class="section-title reveal">Capabilities</h2>
        <div class="product-features">
          <div class="feature-row reveal">
            <div class="feature-number">01</div>
            <div class="feature-content">
              <h3 class="feature-title">Human-Like Walking</h3>
              <p class="feature-text">Natural bipedal locomotion across flat surfaces, stairs, and uneven terrain. Adaptive gait adjusts to speed and environmental conditions.</p>
            </div>
          </div>
          <div class="feature-row reveal">
            <div class="feature-number">02</div>
            <div class="feature-content">
              <h3 class="feature-title">Natural Speech</h3>
              <p class="feature-text">Conversational AI with emotional awareness. Understands context, responds naturally, and communicates in over 32 languages.</p>
            </div>
          </div>
          <div class="feature-row reveal">
            <div class="feature-number">03</div>
            <div class="feature-content">
              <h3 class="feature-title">Adaptive Learning</h3>
              <p class="feature-text">Learns household routines, personal preferences, and environmental patterns. Continuously improves through on-device machine learning.</p>
            </div>
          </div>
          <div class="feature-row reveal">
            <div class="feature-number">04</div>
            <div class="feature-content">
              <h3 class="feature-title">Safe Home Interaction</h3>
              <p class="feature-text">Force-limited actuators and proximity awareness ensure safe operation around children, elderly, and pets. ISO 13482 certified.</p>
            </div>
          </div>
          <div class="feature-row reveal">
            <div class="feature-number">05</div>
            <div class="feature-content">
              <h3 class="feature-title">Domestic Task Execution</h3>
              <p class="feature-text">Cleaning, organizing, cooking assistance, laundry management, and household maintenance. Capable hands with precision grip and delicate handling.</p>
            </div>
          </div>
          <div class="feature-row reveal">
            <div class="feature-number">06</div>
            <div class="feature-content">
              <h3 class="feature-title">Autonomous Operation</h3>
              <p class="feature-text">Full-day battery life with self-charging capability. Operates independently while maintaining seamless human coordination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs Table -->
    <section class="section-black">
      <div class="container container-narrow">
        <p class="section-label-light reveal">TECHNICAL DATA</p>
        <h2 class="section-title-light reveal">Maidoid One Specifications</h2>
        <div class="specs-table reveal">
          <div class="spec-row">
            <span class="spec-key">Height</span>
            <span class="spec-val">170 cm</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Weight</span>
            <span class="spec-val">62 kg</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Degrees of Freedom</span>
            <span class="spec-val">42</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Payload (per arm)</span>
            <span class="spec-val">25 kg</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Walking Speed</span>
            <span class="spec-val">Up to 5.4 km/h</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Battery Life</span>
            <span class="spec-val">16 hours active</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Charge Time</span>
            <span class="spec-val">45 minutes (80%)</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Languages</span>
            <span class="spec-val">32+</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Safety Certification</span>
            <span class="spec-val">ISO 13482</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Operating Environment</span>
            <span class="spec-val">Indoor residential</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-white cta-section">
      <div class="container">
        <h2 class="cta-headline reveal">Experience Maidoid One</h2>
        <p class="cta-sub reveal">Schedule a private demonstration at our Dubai facility.</p>
        <a href="/contact" class="btn btn-dark reveal">REQUEST PRIVATE DEMO</a>
      </div>
    </section>
  `
}
