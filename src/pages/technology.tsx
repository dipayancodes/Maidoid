import { html } from 'hono/html'

export const TechnologyPage = () => {
  return html`
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <p class="section-label reveal">TECHNOLOGY</p>
        <h1 class="page-title reveal">Engineering the<br>Next Generation</h1>
        <p class="page-intro reveal">Four integrated systems working in unison to create a machine that moves, thinks, sees, and feels like a human.</p>
      </div>
    </section>

    <!-- Mechanical Architecture -->
    <section class="section-white">
      <div class="container">
        <div class="tech-detail-block">
          <div class="tech-detail-content reveal">
            <p class="section-label">01</p>
            <h2 class="tech-detail-title">Mechanical Architecture</h2>
            <p class="tech-detail-text">The Maidoid skeletal system comprises 42 degrees of freedom across a lightweight titanium-carbon composite frame. Each joint is driven by proprietary linear actuators delivering human-equivalent torque at one-third the weight.</p>
            <ul class="tech-specs">
              <li class="tech-spec-item">
                <span class="spec-label">DEGREES OF FREEDOM</span>
                <span class="spec-value">42</span>
              </li>
              <li class="tech-spec-item">
                <span class="spec-label">FRAME MATERIAL</span>
                <span class="spec-value">Titanium-Carbon Composite</span>
              </li>
              <li class="tech-spec-item">
                <span class="spec-label">TOTAL MASS</span>
                <span class="spec-value">62 kg</span>
              </li>
              <li class="tech-spec-item">
                <span class="spec-label">PAYLOAD CAPACITY</span>
                <span class="spec-value">25 kg per arm</span>
              </li>
            </ul>
          </div>
          <div class="tech-detail-visual reveal">
            <div class="tech-diagram">
              <svg viewBox="0 0 300 400" fill="none" stroke="currentColor" stroke-width="0.8">
                <!-- Head -->
                <ellipse cx="150" cy="50" rx="30" ry="35"/>
                <circle cx="140" cy="44" r="4"/>
                <circle cx="160" cy="44" r="4"/>
                <line x1="145" y1="58" x2="155" y2="58"/>
                <!-- Neck -->
                <line x1="150" y1="85" x2="150" y2="105"/>
                <!-- Torso -->
                <path d="M110 105 L190 105 L185 220 L115 220 Z"/>
                <line x1="150" y1="105" x2="150" y2="220" stroke-dasharray="4 4" opacity="0.3"/>
                <!-- Arms -->
                <line x1="110" y1="110" x2="70" y2="170"/>
                <line x1="70" y1="170" x2="60" y2="240"/>
                <circle cx="70" cy="170" r="4" fill="currentColor" opacity="0.3"/>
                <line x1="190" y1="110" x2="230" y2="170"/>
                <line x1="230" y1="170" x2="240" y2="240"/>
                <circle cx="230" cy="170" r="4" fill="currentColor" opacity="0.3"/>
                <!-- Hands -->
                <ellipse cx="58" cy="248" rx="8" ry="12"/>
                <ellipse cx="242" cy="248" rx="8" ry="12"/>
                <!-- Legs -->
                <line x1="130" y1="220" x2="120" y2="310"/>
                <line x1="120" y1="310" x2="115" y2="380"/>
                <circle cx="120" cy="310" r="4" fill="currentColor" opacity="0.3"/>
                <line x1="170" y1="220" x2="180" y2="310"/>
                <line x1="180" y1="310" x2="185" y2="380"/>
                <circle cx="180" cy="310" r="4" fill="currentColor" opacity="0.3"/>
                <!-- Feet -->
                <path d="M100 378 L130 378 L132 390 L98 390 Z"/>
                <path d="M170 378 L200 378 L202 390 L168 390 Z"/>
                <!-- Joint indicators -->
                <circle cx="110" cy="110" r="3" fill="currentColor" opacity="0.5"/>
                <circle cx="190" cy="110" r="3" fill="currentColor" opacity="0.5"/>
                <circle cx="130" cy="220" r="3" fill="currentColor" opacity="0.5"/>
                <circle cx="170" cy="220" r="3" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Motion Intelligence -->
    <section class="section-black">
      <div class="container">
        <div class="tech-detail-block reverse">
          <div class="tech-detail-content reveal">
            <p class="section-label-light">02</p>
            <h2 class="tech-detail-title-light">Motion Intelligence</h2>
            <p class="tech-detail-text-light">Real-time kinematic planning combined with predictive balance algorithms. The Maidoid walks, turns, reaches, and manipulates objects with fluid, natural motion indistinguishable from human movement at distance.</p>
            <ul class="tech-specs-light">
              <li class="tech-spec-item-light">
                <span class="spec-label-light">GAIT CYCLES</span>
                <span class="spec-value-light">Natural, Variable</span>
              </li>
              <li class="tech-spec-item-light">
                <span class="spec-label-light">BALANCE RESPONSE</span>
                <span class="spec-value-light">&lt; 5 ms</span>
              </li>
              <li class="tech-spec-item-light">
                <span class="spec-label-light">WALKING SPEED</span>
                <span class="spec-value-light">Up to 5.4 km/h</span>
              </li>
              <li class="tech-spec-item-light">
                <span class="spec-label-light">STAIR NAVIGATION</span>
                <span class="spec-value-light">Full Capability</span>
              </li>
            </ul>
          </div>
          <div class="tech-detail-visual reveal">
            <div class="tech-diagram-light">
              <svg viewBox="0 0 300 300" fill="none" stroke="white" stroke-width="0.8" opacity="0.7">
                <!-- Motion path visualization -->
                <path d="M30 270 Q80 250 100 200 Q120 150 150 150 Q180 150 200 130 Q220 110 270 30" stroke-dasharray="6 4"/>
                <!-- Waypoints -->
                <circle cx="30" cy="270" r="5" fill="white" opacity="0.4"/>
                <circle cx="100" cy="200" r="5" fill="white" opacity="0.4"/>
                <circle cx="150" cy="150" r="5" fill="white" opacity="0.6"/>
                <circle cx="200" cy="130" r="5" fill="white" opacity="0.4"/>
                <circle cx="270" cy="30" r="5" fill="white" opacity="0.4"/>
                <!-- Walking figure simplified -->
                <g transform="translate(130, 100)">
                  <circle cx="20" cy="0" r="8"/>
                  <line x1="20" y1="8" x2="20" y2="40"/>
                  <line x1="20" y1="15" x2="5" y2="30"/>
                  <line x1="20" y1="15" x2="35" y2="28"/>
                  <line x1="20" y1="40" x2="8" y2="60"/>
                  <line x1="20" y1="40" x2="32" y2="58"/>
                </g>
                <!-- Velocity vectors -->
                <line x1="170" y1="110" x2="200" y2="95" stroke-width="1.2"/>
                <polygon points="200,95 194,100 196,93" fill="white" stroke="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI & Conversational Brain -->
    <section class="section-white">
      <div class="container">
        <div class="tech-detail-block">
          <div class="tech-detail-content reveal">
            <p class="section-label">03</p>
            <h2 class="tech-detail-title">AI & Conversational Brain</h2>
            <p class="tech-detail-text">The Maidoid cognitive system processes language, context, emotion, and intent simultaneously. It learns household patterns, anticipates needs, and communicates with natural clarity and appropriate tone.</p>
            <ul class="tech-specs">
              <li class="tech-spec-item">
                <span class="spec-label">LANGUAGE MODELS</span>
                <span class="spec-value">Proprietary Multi-Modal</span>
              </li>
              <li class="tech-spec-item">
                <span class="spec-label">LANGUAGES SUPPORTED</span>
                <span class="spec-value">32+</span>
              </li>
              <li class="tech-spec-item">
                <span class="spec-label">RESPONSE LATENCY</span>
                <span class="spec-value">&lt; 200 ms</span>
              </li>
              <li class="tech-spec-item">
                <span class="spec-label">ON-DEVICE PROCESSING</span>
                <span class="spec-value">Full Edge AI</span>
              </li>
            </ul>
          </div>
          <div class="tech-detail-visual reveal">
            <div class="tech-diagram">
              <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" stroke-width="0.8">
                <!-- Neural network visualization -->
                <!-- Input layer -->
                <circle cx="50" cy="60" r="8"/><text x="50" y="40" text-anchor="middle" font-size="8" fill="currentColor">V</text>
                <circle cx="50" cy="120" r="8"/><text x="50" y="100" text-anchor="middle" font-size="8" fill="currentColor">A</text>
                <circle cx="50" cy="180" r="8"/><text x="50" y="160" text-anchor="middle" font-size="8" fill="currentColor">L</text>
                <circle cx="50" cy="240" r="8"/><text x="50" y="220" text-anchor="middle" font-size="8" fill="currentColor">S</text>
                <!-- Hidden layer 1 -->
                <circle cx="130" cy="80" r="6"/>
                <circle cx="130" cy="140" r="6"/>
                <circle cx="130" cy="200" r="6"/>
                <!-- Hidden layer 2 -->
                <circle cx="200" cy="100" r="6"/>
                <circle cx="200" cy="170" r="6"/>
                <!-- Output -->
                <circle cx="260" cy="150" r="10"/>
                <!-- Connections (selected for clarity) -->
                <line x1="58" y1="60" x2="124" y2="80" opacity="0.3"/>
                <line x1="58" y1="60" x2="124" y2="140" opacity="0.2"/>
                <line x1="58" y1="120" x2="124" y2="80" opacity="0.2"/>
                <line x1="58" y1="120" x2="124" y2="140" opacity="0.3"/>
                <line x1="58" y1="120" x2="124" y2="200" opacity="0.2"/>
                <line x1="58" y1="180" x2="124" y2="140" opacity="0.2"/>
                <line x1="58" y1="180" x2="124" y2="200" opacity="0.3"/>
                <line x1="58" y1="240" x2="124" y2="200" opacity="0.3"/>
                <line x1="136" y1="80" x2="194" y2="100" opacity="0.3"/>
                <line x1="136" y1="80" x2="194" y2="170" opacity="0.2"/>
                <line x1="136" y1="140" x2="194" y2="100" opacity="0.3"/>
                <line x1="136" y1="140" x2="194" y2="170" opacity="0.3"/>
                <line x1="136" y1="200" x2="194" y2="170" opacity="0.3"/>
                <line x1="206" y1="100" x2="250" y2="150" opacity="0.4"/>
                <line x1="206" y1="170" x2="250" y2="150" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Human Interaction Safety -->
    <section class="section-black">
      <div class="container">
        <div class="tech-detail-block reverse">
          <div class="tech-detail-content reveal">
            <p class="section-label-light">04</p>
            <h2 class="tech-detail-title-light">Human Interaction Safety</h2>
            <p class="tech-detail-text-light">Every interaction is governed by a multi-layered safety framework. Force-limiting actuators, proximity detection, and behavioral boundaries ensure that the Maidoid operates within safe parameters at all times.</p>
            <ul class="tech-specs-light">
              <li class="tech-spec-item-light">
                <span class="spec-label-light">FORCE LIMITING</span>
                <span class="spec-value-light">Active, All Joints</span>
              </li>
              <li class="tech-spec-item-light">
                <span class="spec-label-light">PROXIMITY SENSORS</span>
                <span class="spec-value-light">360-Degree Coverage</span>
              </li>
              <li class="tech-spec-item-light">
                <span class="spec-label-light">EMERGENCY STOP</span>
                <span class="spec-value-light">Triple Redundant</span>
              </li>
              <li class="tech-spec-item-light">
                <span class="spec-label-light">SAFETY CERTIFICATION</span>
                <span class="spec-value-light">ISO 13482 Compliant</span>
              </li>
            </ul>
          </div>
          <div class="tech-detail-visual reveal">
            <div class="tech-diagram-light">
              <svg viewBox="0 0 300 300" fill="none" stroke="white" stroke-width="0.8" opacity="0.7">
                <!-- Shield / safety visualization -->
                <path d="M150 30 L260 80 L250 200 L150 270 L50 200 L40 80 Z" stroke-width="1"/>
                <path d="M150 60 L230 100 L222 190 L150 240 L78 190 L70 100 Z" stroke-dasharray="4 4" opacity="0.4"/>
                <!-- Checkmark -->
                <path d="M110 150 L140 180 L200 110" stroke-width="2.5" opacity="0.9"/>
                <!-- Sensor points -->
                <circle cx="150" cy="30" r="3" fill="white" opacity="0.5"/>
                <circle cx="260" cy="80" r="3" fill="white" opacity="0.5"/>
                <circle cx="250" cy="200" r="3" fill="white" opacity="0.5"/>
                <circle cx="150" cy="270" r="3" fill="white" opacity="0.5"/>
                <circle cx="50" cy="200" r="3" fill="white" opacity="0.5"/>
                <circle cx="40" cy="80" r="3" fill="white" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-white cta-section">
      <div class="container">
        <h2 class="cta-headline reveal">Explore Our Product</h2>
        <p class="cta-sub reveal">See how these systems come together in a single integrated platform.</p>
        <a href="/product" class="btn btn-dark reveal">VIEW PRODUCT</a>
      </div>
    </section>
  `
}
