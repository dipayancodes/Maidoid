import { html } from 'hono/html'

export const HomePage = () => {
  return html`
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-grid">
        <div class="hero-left">
          <div class="hero-badge fade-in">HUMANOID ROBOTICS / DUBAI</div>
          <h1 class="hero-headline fade-in d1">Human<br>Intelligence.<br><span class="hero-headline-accent">Engineered.</span></h1>
          <p class="hero-sub fade-in d2">We design and manufacture human-scale humanoid robots that perform domestic tasks as intelligent home assistants. Precision-built in Dubai for the world.</p>
          <div class="hero-actions fade-in d3">
            <a href="/technology" class="btn btn-primary">EXPLORE TECHNOLOGY<span class="btn-arrow">&rarr;</span></a>
            <a href="/contact" class="btn btn-ghost">REQUEST DEMO</a>
          </div>
          <div class="hero-stats fade-in d4">
            <div class="hero-stat">
              <span class="hero-stat-num" data-count="42">0</span>
              <span class="hero-stat-label">Degrees of Freedom</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-num" data-count="32">0</span><span class="hero-stat-plus">+</span>
              <span class="hero-stat-label">Languages</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-num" data-count="16">0</span><span class="hero-stat-plus">h</span>
              <span class="hero-stat-label">Battery Life</span>
            </div>
          </div>
        </div>
        <div class="hero-right">
          <div class="robot-container" id="robotContainer">
            <div class="robot-glow"></div>
            <div class="robot-shadow"></div>
            <div class="robot" id="heroRobot">
              <!-- Head -->
              <div class="robot-head" id="robotHead">
                <div class="robot-head-inner">
                  <div class="robot-visor">
                    <div class="robot-eye robot-eye-l"></div>
                    <div class="robot-eye robot-eye-r"></div>
                  </div>
                  <div class="robot-chin"></div>
                </div>
              </div>
              <!-- Neck -->
              <div class="robot-neck">
                <div class="robot-neck-ring"></div>
                <div class="robot-neck-ring"></div>
              </div>
              <!-- Torso -->
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
              <!-- Arms -->
              <div class="robot-arm robot-arm-l" id="robotArmL">
                <div class="robot-shoulder"></div>
                <div class="robot-upper-arm"></div>
                <div class="robot-elbow"></div>
                <div class="robot-forearm"></div>
                <div class="robot-hand">
                  <div class="robot-finger"></div>
                  <div class="robot-finger"></div>
                  <div class="robot-finger"></div>
                </div>
              </div>
              <div class="robot-arm robot-arm-r" id="robotArmR">
                <div class="robot-shoulder"></div>
                <div class="robot-upper-arm"></div>
                <div class="robot-elbow"></div>
                <div class="robot-forearm"></div>
                <div class="robot-hand">
                  <div class="robot-finger"></div>
                  <div class="robot-finger"></div>
                  <div class="robot-finger"></div>
                </div>
              </div>
              <!-- Legs -->
              <div class="robot-legs">
                <div class="robot-leg robot-leg-l" id="robotLegL">
                  <div class="robot-thigh"></div>
                  <div class="robot-knee"></div>
                  <div class="robot-shin"></div>
                  <div class="robot-foot"></div>
                </div>
                <div class="robot-leg robot-leg-r" id="robotLegR">
                  <div class="robot-thigh"></div>
                  <div class="robot-knee"></div>
                  <div class="robot-shin"></div>
                  <div class="robot-foot"></div>
                </div>
              </div>
            </div>
            <!-- Floating data points -->
            <div class="robot-data robot-data-1">
              <span class="robot-data-dot"></span>
              <span class="robot-data-line"></span>
              <span class="robot-data-text">AI COGNITIVE ENGINE</span>
            </div>
            <div class="robot-data robot-data-2">
              <span class="robot-data-dot"></span>
              <span class="robot-data-line"></span>
              <span class="robot-data-text">VISION SYSTEM</span>
            </div>
            <div class="robot-data robot-data-3">
              <span class="robot-data-dot"></span>
              <span class="robot-data-line"></span>
              <span class="robot-data-text">CORE PROCESSOR</span>
            </div>
            <div class="robot-data robot-data-4">
              <span class="robot-data-dot"></span>
              <span class="robot-data-line"></span>
              <span class="robot-data-text">MOTION SYSTEM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-cue">
        <div class="scroll-cue-line"></div>
      </div>
    </section>

    <!-- STATEMENT -->
    <section class="sect-dark">
      <div class="container">
        <div class="statement-block reveal">
          <p class="overline-light">OUR MISSION</p>
          <h2 class="statement-text">We are building the most advanced humanoid robots on Earth. Designed for homes. Engineered for trust. Made in Dubai.</h2>
        </div>
      </div>
    </section>

    <!-- WHY MAIDOID -->
    <section class="sect-light">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline">WHY MAIDOID</p>
          <h2 class="sect-title">The Domestic Robot<br>Reimagined</h2>
          <p class="sect-intro">Unlike industrial robots hidden in factories, Maidoid is designed to exist in your living room. Every component is engineered for safety, silence, and seamless integration into daily life.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 4v24M4 16h24M8 8l16 16M24 8L8 24"/><circle cx="16" cy="16" r="10"/></svg>
            </div>
            <h3 class="feature-name">Human-Scale Presence</h3>
            <p class="feature-desc">Standing at 170cm and weighing 62kg, Maidoid mirrors the human form. It navigates your home the way you do, through doors, up stairs, around furniture.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="4" width="20" height="24" rx="3"/><circle cx="16" cy="14" r="4"/><path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>
            </div>
            <h3 class="feature-name">Natural Interaction</h3>
            <p class="feature-desc">Speaks 32+ languages with emotional awareness. Reads body language, understands context, and responds with natural conversational tone and appropriate empathy.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 4l12 6v8c0 6.6-5.4 12-12 12S4 24.6 4 18v-8l12-6z"/><path d="M11 16l3 3 7-7"/></svg>
            </div>
            <h3 class="feature-name">Absolute Safety</h3>
            <p class="feature-desc">Triple-redundant emergency systems, force-limiting actuators on every joint, and 360-degree proximity awareness. ISO 13482 certified for personal care robotics.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="16" cy="16" r="12"/><path d="M16 8v8l5 5"/></svg>
            </div>
            <h3 class="feature-name">All-Day Autonomy</h3>
            <p class="feature-desc">16 hours of continuous active operation. Self-charging with intelligent power management. Learns your schedule and recharges during your downtime.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12"/><path d="M4 16c0 6.6 5.4 12 12 12s12-5.4 12-12"/><circle cx="16" cy="16" r="4"/><circle cx="16" cy="4" r="2" fill="currentColor"/><circle cx="16" cy="28" r="2" fill="currentColor"/></svg>
            </div>
            <h3 class="feature-name">Adaptive Intelligence</h3>
            <p class="feature-desc">On-device machine learning that adapts to your household. Learns preferences, anticipates needs, and continuously improves without sending data to the cloud.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 22V10c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6v12"/><path d="M2 22h28v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4z"/><path d="M12 12h8M12 16h8"/></svg>
            </div>
            <h3 class="feature-name">Domestic Mastery</h3>
            <p class="feature-desc">Cleaning, cooking assistance, laundry, organizing, childcare support, and elderly companionship. Precision grip handles delicate objects with care.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES NUMBERS -->
    <section class="sect-dark">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline-light">BY THE NUMBERS</p>
          <h2 class="sect-title-light">Engineered Precision</h2>
        </div>
        <div class="numbers-grid">
          <div class="number-card reveal">
            <div class="number-val" data-count="2000">0</div>
            <div class="number-label">Quality Checkpoints</div>
            <div class="number-desc">Every unit inspected at 2,000+ points before leaving our facility</div>
          </div>
          <div class="number-card reveal">
            <div class="number-val">0.01<span class="number-unit">mm</span></div>
            <div class="number-label">Manufacturing Tolerance</div>
            <div class="number-desc">Aerospace-grade precision across all mechanical components</div>
          </div>
          <div class="number-card reveal">
            <div class="number-val" data-count="10000">0</div>
            <div class="number-label">Hours Endurance Tested</div>
            <div class="number-desc">Continuous operational testing before production approval</div>
          </div>
          <div class="number-card reveal">
            <div class="number-val">&lt;5<span class="number-unit">ms</span></div>
            <div class="number-label">Balance Response Time</div>
            <div class="number-desc">Faster than human reflexes for safe, stable movement</div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="sect-light">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline">HOW IT WORKS</p>
          <h2 class="sect-title">Four Integrated Systems</h2>
          <p class="sect-intro">Each Maidoid unit is powered by four proprietary systems working in concert. The result is a machine that moves, thinks, sees, and interacts like no other.</p>
        </div>
        <div class="systems-list">
          <div class="system-row reveal">
            <div class="system-num">01</div>
            <div class="system-content">
              <h3 class="system-name">Human Motion System</h3>
              <p class="system-desc">42 degrees of freedom powered by proprietary linear actuators. Titanium-carbon composite frame at 62kg. Walks naturally across flat surfaces, stairs, and uneven terrain at speeds up to 5.4 km/h. Sub-millimeter joint precision enables tasks from heavy lifting (25kg per arm) to threading a needle.</p>
            </div>
            <div class="system-tag">MECHANICAL</div>
          </div>
          <div class="system-row reveal">
            <div class="system-num">02</div>
            <div class="system-content">
              <h3 class="system-name">AI Cognitive Engine</h3>
              <p class="system-desc">Multi-layered neural architecture running entirely on-device. Processes language, context, emotion, and intent simultaneously. Supports 32+ languages with less than 200ms response latency. Learns household patterns and anticipates needs through continuous on-device machine learning.</p>
            </div>
            <div class="system-tag">INTELLIGENCE</div>
          </div>
          <div class="system-row reveal">
            <div class="system-num">03</div>
            <div class="system-content">
              <h3 class="system-name">Vision & Perception</h3>
              <p class="system-desc">Stereo vision cameras with depth mapping provide full spatial intelligence. 360-degree environmental awareness through LiDAR and ultrasonic sensors. Real-time object recognition, face identification, and gesture interpretation for natural human-robot collaboration.</p>
            </div>
            <div class="system-tag">PERCEPTION</div>
          </div>
          <div class="system-row reveal">
            <div class="system-num">04</div>
            <div class="system-content">
              <h3 class="system-name">Safety & Interaction Layer</h3>
              <p class="system-desc">Every interaction governed by a multi-layered safety framework. Force-limiting actuators, proximity detection zones, and behavioral boundaries. Triple-redundant emergency stop. ISO 13482 certified. Designed to operate safely around children, elderly, and pets.</p>
            </div>
            <div class="system-tag">SAFETY</div>
          </div>
        </div>
        <div class="systems-cta reveal">
          <a href="/technology" class="btn btn-primary">DEEP DIVE INTO TECHNOLOGY<span class="btn-arrow">&rarr;</span></a>
        </div>
      </div>
    </section>

    <!-- USE CASES -->
    <section class="sect-dark">
      <div class="container">
        <div class="section-header reveal">
          <p class="overline-light">APPLICATIONS</p>
          <h2 class="sect-title-light">What Maidoid Does</h2>
          <p class="sect-intro-light">A partial list of domestic tasks Maidoid performs autonomously or collaboratively.</p>
        </div>
        <div class="usecases-grid">
          <div class="usecase reveal">
            <span class="usecase-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/></svg>
            </span>
            <h4 class="usecase-name">Household Cleaning</h4>
            <p class="usecase-desc">Sweeping, mopping, vacuuming, surface wiping, and bathroom maintenance. Adapts to your cleaning schedule and standards.</p>
          </div>
          <div class="usecase reveal">
            <span class="usecase-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 014 4c0 2-2 3-2 6h-4c0-3-2-4-2-6a4 4 0 014-4z"/><path d="M10 12h4M8 20h8M9 16h6"/></svg>
            </span>
            <h4 class="usecase-name">Cooking Assistance</h4>
            <p class="usecase-desc">Meal preparation, ingredient handling, recipe following, and kitchen cleanup. Handles delicate items with precision grip.</p>
          </div>
          <div class="usecase reveal">
            <span class="usecase-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 12h8M8 8h4"/></svg>
            </span>
            <h4 class="usecase-name">Laundry Management</h4>
            <p class="usecase-desc">Sorting, loading, unloading, folding, and organizing garments. Identifies fabric types and handles accordingly.</p>
          </div>
          <div class="usecase reveal">
            <span class="usecase-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </span>
            <h4 class="usecase-name">Elderly Companionship</h4>
            <p class="usecase-desc">Medication reminders, mobility assistance, conversation, emergency detection, and daily routine support for independent living.</p>
          </div>
          <div class="usecase reveal">
            <span class="usecase-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
            </span>
            <h4 class="usecase-name">Childcare Support</h4>
            <p class="usecase-desc">Supervision assistance, educational interaction, play engagement, and safety monitoring. Never replaces parents, always supports them.</p>
          </div>
          <div class="usecase reveal">
            <span class="usecase-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </span>
            <h4 class="usecase-name">Home Maintenance</h4>
            <p class="usecase-desc">Basic repairs, plant care, package handling, pet feeding, and general organization. Adapts to your home's specific needs over time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCT PHILOSOPHY -->
    <section class="sect-light">
      <div class="container container-narrow">
        <div class="philosophy-block reveal">
          <p class="overline">OUR PHILOSOPHY</p>
          <h2 class="sect-title">Built to Assist.<br>Never to Replace.</h2>
          <p class="philosophy-text">Maidoid exists to free humans from the repetitive burden of domestic labor. Not to replace human connection, but to create more time for it. Every design decision, every engineering choice, every line of code is made with one question: does this serve the human?</p>
          <p class="philosophy-text">We believe that a machine entering your home carries the highest possible responsibility. That is why safety is not a feature. It is the foundation. And why transparency is not optional. It is the standard.</p>
          <div class="philosophy-principles">
            <div class="principle">
              <span class="principle-line"></span>
              <span class="principle-text">Safety by design, not by afterthought</span>
            </div>
            <div class="principle">
              <span class="principle-line"></span>
              <span class="principle-text">Privacy as architecture, not policy</span>
            </div>
            <div class="principle">
              <span class="principle-line"></span>
              <span class="principle-text">Transparency in every decision the machine makes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="sect-cta">
      <div class="container">
        <div class="cta-block reveal">
          <h2 class="cta-title">The Future Begins at Home.</h2>
          <p class="cta-text">Join the companies, institutions, and early adopters preparing for the next era of domestic technology.</p>
          <div class="cta-actions">
            <a href="/contact" class="btn btn-white">REQUEST INFORMATION<span class="btn-arrow">&rarr;</span></a>
            <a href="/product" class="btn btn-ghost-light">VIEW PRODUCT</a>
          </div>
        </div>
      </div>
    </section>
  `
}
