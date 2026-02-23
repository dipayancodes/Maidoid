import { html } from 'hono/html'

export const TechnologyPage = () => {
  return html`
    <!-- Header -->
    <section class="page-hero">
      <div class="container">
        <p class="overline reveal">TECHNOLOGY</p>
        <h1 class="page-hero-title reveal">Engineering Beyond<br>Human Limitation</h1>
        <p class="page-hero-intro reveal">Four proprietary systems. One unified intelligence. Every component designed from first principles for domestic environments.</p>
      </div>
    </section>

    <!-- System 1 -->
    <section class="sect-light">
      <div class="container">
        <div class="tech-block reveal">
          <div class="tech-block-header">
            <span class="tech-block-num">01</span>
            <span class="tech-block-tag">MECHANICAL</span>
          </div>
          <div class="tech-block-split">
            <div class="tech-block-main">
              <h2 class="tech-block-title">Mechanical Architecture</h2>
              <p class="tech-block-text">The Maidoid skeletal system is built on a titanium-carbon composite frame that delivers human-equivalent strength at one-third the weight of conventional robotic systems. Each of 42 joints is driven by proprietary linear actuators that combine electric and hydraulic principles for smooth, silent operation.</p>
              <p class="tech-block-text">The hand mechanism alone contains 16 degrees of freedom, enabling everything from a firm grip on a heavy pan to the delicate handling of a wine glass. All joints feature compliant actuation, meaning they yield under unexpected force rather than resist it, a critical safety feature for domestic operation.</p>
              <p class="tech-block-text">Unlike industrial robots designed for repetitive tasks in controlled environments, Maidoid's mechanical design accounts for the unpredictable nature of homes: uneven floors, cluttered spaces, stairs, soft carpets, and the constant presence of humans and pets.</p>
            </div>
            <div class="tech-block-specs">
              <div class="spec-item">
                <span class="spec-val">42</span>
                <span class="spec-key">Degrees of Freedom</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">62kg</span>
                <span class="spec-key">Total Mass</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">170cm</span>
                <span class="spec-key">Height</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">25kg</span>
                <span class="spec-key">Payload Per Arm</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">16</span>
                <span class="spec-key">Hand DOF</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">0.01mm</span>
                <span class="spec-key">Manufacturing Tolerance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System 2 -->
    <section class="sect-dark">
      <div class="container">
        <div class="tech-block reveal">
          <div class="tech-block-header">
            <span class="tech-block-num-light">02</span>
            <span class="tech-block-tag-light">INTELLIGENCE</span>
          </div>
          <div class="tech-block-split">
            <div class="tech-block-main">
              <h2 class="tech-block-title-light">AI Cognitive Engine</h2>
              <p class="tech-block-text-light">The brain of every Maidoid is a custom multi-modal neural processor that runs entirely on-device. No cloud dependency. No data transmission. All intelligence is local, private, and fast.</p>
              <p class="tech-block-text-light">The cognitive engine simultaneously processes visual input, audio streams, language semantics, emotional signals, and environmental context. It does not wait for one input to process before handling the next. This parallel processing is what enables natural, fluid interaction rather than the stilted, turn-based communication of voice assistants.</p>
              <p class="tech-block-text-light">Over time, the engine develops a detailed model of your household: who lives there, their routines, preferences, and needs. This model improves continuously through federated on-device learning. No two Maidoid units will behave identically after the first week of deployment because each one adapts to its specific home.</p>
            </div>
            <div class="tech-block-specs-light">
              <div class="spec-item-light">
                <span class="spec-val-light">32+</span>
                <span class="spec-key-light">Languages Supported</span>
              </div>
              <div class="spec-item-light">
                <span class="spec-val-light">&lt;200ms</span>
                <span class="spec-key-light">Response Latency</span>
              </div>
              <div class="spec-item-light">
                <span class="spec-val-light">100%</span>
                <span class="spec-key-light">On-Device Processing</span>
              </div>
              <div class="spec-item-light">
                <span class="spec-val-light">5</span>
                <span class="spec-key-light">Simultaneous Input Streams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System 3 -->
    <section class="sect-light">
      <div class="container">
        <div class="tech-block reveal">
          <div class="tech-block-header">
            <span class="tech-block-num">03</span>
            <span class="tech-block-tag">PERCEPTION</span>
          </div>
          <div class="tech-block-split">
            <div class="tech-block-main">
              <h2 class="tech-block-title">Vision & Perception</h2>
              <p class="tech-block-text">Maidoid perceives the world through a fusion of stereo cameras, LiDAR, ultrasonic sensors, and infrared arrays. This multi-modal approach creates a rich, three-dimensional understanding of any environment in real time.</p>
              <p class="tech-block-text">The vision system identifies thousands of household objects, reads labels and screens, recognizes faces and expressions, and tracks moving objects including children and pets. Depth perception accuracy reaches sub-centimeter levels at ranges up to 10 meters.</p>
              <p class="tech-block-text">Environmental mapping builds a continuously updated model of the home. Maidoid knows where every piece of furniture is, what has moved since the last scan, and where obstacles might appear. This spatial intelligence is the foundation for all movement planning and task execution.</p>
            </div>
            <div class="tech-block-specs">
              <div class="spec-item">
                <span class="spec-val">360&deg;</span>
                <span class="spec-key">Environmental Awareness</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">10m</span>
                <span class="spec-key">Depth Range</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">60fps</span>
                <span class="spec-key">Processing Rate</span>
              </div>
              <div class="spec-item">
                <span class="spec-val">1000+</span>
                <span class="spec-key">Object Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System 4 -->
    <section class="sect-dark">
      <div class="container">
        <div class="tech-block reveal">
          <div class="tech-block-header">
            <span class="tech-block-num-light">04</span>
            <span class="tech-block-tag-light">SAFETY</span>
          </div>
          <div class="tech-block-split">
            <div class="tech-block-main">
              <h2 class="tech-block-title-light">Human Interaction Safety</h2>
              <p class="tech-block-text-light">Safety is not a feature of Maidoid. It is the architectural foundation upon which every other system is built. Our safety framework operates at the hardware level, the software level, and the behavioral level simultaneously.</p>
              <p class="tech-block-text-light">At the hardware level, every actuator incorporates force-limiting mechanisms that physically cannot exceed safe thresholds. At the software level, a dedicated safety processor monitors all systems independently of the main cognitive engine and can halt any operation within 3 milliseconds. At the behavioral level, proximity zones define how Maidoid adjusts its speed, force, and trajectory based on the proximity and identity of humans nearby.</p>
              <p class="tech-block-text-light">All safety systems are triple-redundant. If any single system fails, two independent backups ensure safe operation. Our emergency stop is mechanical, electronic, and voice-activated simultaneously.</p>
            </div>
            <div class="tech-block-specs-light">
              <div class="spec-item-light">
                <span class="spec-val-light">3ms</span>
                <span class="spec-key-light">Emergency Halt Time</span>
              </div>
              <div class="spec-item-light">
                <span class="spec-val-light">3x</span>
                <span class="spec-key-light">Redundancy Level</span>
              </div>
              <div class="spec-item-light">
                <span class="spec-val-light">ISO 13482</span>
                <span class="spec-key-light">Safety Certification</span>
              </div>
              <div class="spec-item-light">
                <span class="spec-val-light">360&deg;</span>
                <span class="spec-key-light">Proximity Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="sect-cta">
      <div class="container">
        <div class="cta-block reveal">
          <h2 class="cta-title">See It in Action</h2>
          <p class="cta-text">Schedule a private demonstration at our Dubai facility.</p>
          <div class="cta-actions">
            <a href="/contact" class="btn btn-white">REQUEST DEMO<span class="btn-arrow">&rarr;</span></a>
            <a href="/product" class="btn btn-ghost-light">VIEW PRODUCT SPECS</a>
          </div>
        </div>
      </div>
    </section>
  `
}
