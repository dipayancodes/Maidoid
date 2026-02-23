import { html } from 'hono/html'

export const ProductPage = () => {
  return html`
    <!-- Header -->
    <section class="page-hero">
      <div class="container">
        <p class="overline reveal">PRODUCT</p>
        <h1 class="page-hero-title reveal">Maidoid One</h1>
        <p class="page-hero-intro reveal">The first commercially available human-scale domestic humanoid robot. Designed, engineered, and manufactured in Dubai.</p>
      </div>
    </section>

    <!-- Product Showcase -->
    <section class="sect-dark product-showcase">
      <div class="container">
        <div class="product-display">
          <div class="product-robot-wrap reveal">
            <div class="product-robot" id="productRobot">
              <div class="robot-glow-lg"></div>
              <!-- Animated robot (same as hero but larger) -->
              <div class="robot robot-lg" id="productRobotBody">
                <div class="robot-head" id="prodRobotHead">
                  <div class="robot-head-inner">
                    <div class="robot-visor">
                      <div class="robot-eye robot-eye-l"></div>
                      <div class="robot-eye robot-eye-r"></div>
                    </div>
                    <div class="robot-chin"></div>
                  </div>
                </div>
                <div class="robot-neck">
                  <div class="robot-neck-ring"></div>
                  <div class="robot-neck-ring"></div>
                </div>
                <div class="robot-torso">
                  <div class="robot-chest">
                    <div class="robot-core">
                      <div class="robot-core-ring"></div>
                      <div class="robot-core-dot"></div>
                    </div>
                    <div class="robot-chest-line robot-chest-line-l"></div>
                    <div class="robot-chest-line robot-chest-line-r"></div>
                  </div>
                  <div class="robot-abdomen">
                    <div class="robot-ab-line"></div>
                    <div class="robot-ab-line"></div>
                    <div class="robot-ab-line"></div>
                  </div>
                </div>
                <div class="robot-arm robot-arm-l">
                  <div class="robot-shoulder"></div>
                  <div class="robot-upper-arm"></div>
                  <div class="robot-elbow"></div>
                  <div class="robot-forearm"></div>
                  <div class="robot-hand"><div class="robot-finger"></div><div class="robot-finger"></div><div class="robot-finger"></div></div>
                </div>
                <div class="robot-arm robot-arm-r">
                  <div class="robot-shoulder"></div>
                  <div class="robot-upper-arm"></div>
                  <div class="robot-elbow"></div>
                  <div class="robot-forearm"></div>
                  <div class="robot-hand"><div class="robot-finger"></div><div class="robot-finger"></div><div class="robot-finger"></div></div>
                </div>
                <div class="robot-legs">
                  <div class="robot-leg robot-leg-l"><div class="robot-thigh"></div><div class="robot-knee"></div><div class="robot-shin"></div><div class="robot-foot"></div></div>
                  <div class="robot-leg robot-leg-r"><div class="robot-thigh"></div><div class="robot-knee"></div><div class="robot-shin"></div><div class="robot-foot"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Capabilities -->
    <section class="sect-light">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline">CAPABILITIES</p>
          <h2 class="sect-title">What Maidoid One Can Do</h2>
        </div>
        <div class="capability-list">
          <div class="capability-row reveal">
            <div class="cap-num">01</div>
            <div class="cap-content">
              <h3 class="cap-title">Human-Like Walking & Navigation</h3>
              <p class="cap-desc">Natural bipedal locomotion across flat surfaces, stairs, slopes, and uneven terrain. Dynamic gait adjustment based on speed, payload, and surface conditions. Navigates cluttered home environments with centimeter-level precision.</p>
            </div>
            <div class="cap-metric">
              <span class="cap-metric-val">5.4</span>
              <span class="cap-metric-unit">km/h max</span>
            </div>
          </div>
          <div class="capability-row reveal">
            <div class="cap-num">02</div>
            <div class="cap-content">
              <h3 class="cap-title">Natural Speech & Conversation</h3>
              <p class="cap-desc">Full conversational AI with emotional intelligence. Understands sarcasm, humor, urgency, and nuance. Reads facial expressions and body language to gauge intent. Communicates in over 32 languages with native-quality pronunciation.</p>
            </div>
            <div class="cap-metric">
              <span class="cap-metric-val">32+</span>
              <span class="cap-metric-unit">languages</span>
            </div>
          </div>
          <div class="capability-row reveal">
            <div class="cap-num">03</div>
            <div class="cap-content">
              <h3 class="cap-title">Adaptive Household Learning</h3>
              <p class="cap-desc">Learns your family's routines, preferences, and patterns within days. Knows when to start cleaning, how each person likes their coffee, and which tasks are priorities. Continuously improves through on-device federated learning. No data leaves your home.</p>
            </div>
            <div class="cap-metric">
              <span class="cap-metric-val">100%</span>
              <span class="cap-metric-unit">on-device AI</span>
            </div>
          </div>
          <div class="capability-row reveal">
            <div class="cap-num">04</div>
            <div class="cap-content">
              <h3 class="cap-title">Safe Physical Interaction</h3>
              <p class="cap-desc">Force-limited on every joint. Cannot exceed safe thresholds even under software failure. Proximity-aware speed reduction around humans and pets. Compliant actuation means the robot yields to unexpected contact rather than pushing through it.</p>
            </div>
            <div class="cap-metric">
              <span class="cap-metric-val">ISO</span>
              <span class="cap-metric-unit">13482 certified</span>
            </div>
          </div>
          <div class="capability-row reveal">
            <div class="cap-num">05</div>
            <div class="cap-content">
              <h3 class="cap-title">Precision Object Manipulation</h3>
              <p class="cap-desc">16 degrees of freedom per hand. Handles everything from a 25kg water jug to a single sheet of paper. Pressure-sensitive fingertips provide haptic feedback for delicate operations. Tool use capability for cooking, cleaning, and basic maintenance.</p>
            </div>
            <div class="cap-metric">
              <span class="cap-metric-val">25</span>
              <span class="cap-metric-unit">kg per arm</span>
            </div>
          </div>
          <div class="capability-row reveal">
            <div class="cap-num">06</div>
            <div class="cap-content">
              <h3 class="cap-title">Autonomous Operation & Charging</h3>
              <p class="cap-desc">16 hours of continuous active operation on a single charge. Intelligent power management extends effective runtime by scheduling high-energy tasks during optimal periods. Self-navigates to charging station. Reaches 80% charge in 45 minutes.</p>
            </div>
            <div class="cap-metric">
              <span class="cap-metric-val">16</span>
              <span class="cap-metric-unit">hours active</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specifications -->
    <section class="sect-dark">
      <div class="container container-narrow">
        <div class="section-header reveal">
          <p class="overline-light">SPECIFICATIONS</p>
          <h2 class="sect-title-light">Technical Data</h2>
        </div>
        <div class="spec-table reveal">
          <div class="spec-table-row"><span class="spec-table-key">Model</span><span class="spec-table-val">Maidoid One (M1)</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Height</span><span class="spec-table-val">170 cm</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Weight</span><span class="spec-table-val">62 kg</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Frame</span><span class="spec-table-val">Titanium-Carbon Composite</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Degrees of Freedom</span><span class="spec-table-val">42 (body) + 32 (hands)</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Payload per Arm</span><span class="spec-table-val">25 kg</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Walking Speed</span><span class="spec-table-val">0 - 5.4 km/h</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Stair Navigation</span><span class="spec-table-val">Full capability, up and down</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Battery</span><span class="spec-table-val">16 hours active / 45 min to 80%</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Processor</span><span class="spec-table-val">Proprietary Neural SoC</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Languages</span><span class="spec-table-val">32+ with native pronunciation</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Vision</span><span class="spec-table-val">Stereo + LiDAR + IR + Ultrasonic</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Safety</span><span class="spec-table-val">ISO 13482, triple-redundant</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Connectivity</span><span class="spec-table-val">Wi-Fi 6E, Bluetooth 5.3, Thread</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Operating Environment</span><span class="spec-table-val">Indoor residential, 5-40 C</span></div>
          <div class="spec-table-row"><span class="spec-table-key">Noise Level</span><span class="spec-table-val">&lt; 35 dB during operation</span></div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="sect-cta">
      <div class="container">
        <div class="cta-block reveal">
          <h2 class="cta-title">Experience Maidoid One</h2>
          <p class="cta-text">Schedule a private demonstration at our Dubai facility or request detailed product documentation.</p>
          <div class="cta-actions">
            <a href="/contact" class="btn btn-white">REQUEST PRIVATE DEMO<span class="btn-arrow">&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  `
}
