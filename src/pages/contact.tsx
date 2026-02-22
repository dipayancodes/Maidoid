import { html } from 'hono/html'

export const ContactPage = () => {
  return html`
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <p class="section-label reveal">CONTACT</p>
        <h1 class="page-title reveal">Get in Touch</h1>
        <p class="page-intro reveal">For partnership inquiries, product information, or career opportunities.</p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-white">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-form-wrap reveal">
            <form id="contactForm" class="contact-form">
              <div class="form-group">
                <label class="form-label" for="name">NAME</label>
                <input type="text" id="name" name="name" class="form-input" required autocomplete="name" placeholder="Your full name">
              </div>
              <div class="form-group">
                <label class="form-label" for="email">EMAIL</label>
                <input type="email" id="email" name="email" class="form-input" required autocomplete="email" placeholder="your@email.com">
              </div>
              <div class="form-group">
                <label class="form-label" for="subject">SUBJECT</label>
                <select id="subject" name="subject" class="form-input form-select">
                  <option value="general">General Inquiry</option>
                  <option value="demo">Request Private Demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">MESSAGE</label>
                <textarea id="message" name="message" class="form-input form-textarea" required rows="6" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" class="btn btn-dark btn-full" id="submitBtn">SEND MESSAGE</button>
              <div id="formStatus" class="form-status"></div>
            </form>
          </div>
          <div class="contact-info reveal">
            <div class="contact-info-block">
              <h3 class="contact-info-title">HEADQUARTERS</h3>
              <p class="contact-info-text">Maidoid Company Ltd.</p>
              <p class="contact-info-text">Dubai, United Arab Emirates</p>
            </div>
            <div class="contact-info-block">
              <h3 class="contact-info-title">EMAIL</h3>
              <p class="contact-info-text">info@maidoid.com</p>
            </div>
            <div class="contact-info-block">
              <h3 class="contact-info-title">BUSINESS HOURS</h3>
              <p class="contact-info-text">Sunday - Thursday</p>
              <p class="contact-info-text">9:00 AM - 6:00 PM GST</p>
            </div>
            <div class="contact-info-block">
              <h3 class="contact-info-title">RESPONSE TIME</h3>
              <p class="contact-info-text">We respond to all inquiries within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map-like Section -->
    <section class="section-black">
      <div class="container">
        <div class="map-placeholder reveal">
          <svg viewBox="0 0 800 300" fill="none" stroke="white" stroke-width="0.5" opacity="0.3">
            <!-- Simplified Dubai coastline -->
            <path d="M0 200 Q100 190 200 195 Q250 180 300 185 Q350 170 380 175 Q400 160 420 165 L440 155 Q460 150 480 155 Q520 145 560 150 Q600 155 640 148 Q680 145 720 150 Q760 155 800 150"/>
            <!-- Palm-like structure -->
            <path d="M380 175 L375 160 L370 155 M380 175 L380 158 M380 175 L385 160 L390 155"/>
            <!-- City blocks -->
            <rect x="350" y="130" width="4" height="30" opacity="0.5"/>
            <rect x="360" y="125" width="3" height="35" opacity="0.5"/>
            <rect x="370" y="135" width="3" height="25" opacity="0.5"/>
            <rect x="395" y="128" width="4" height="32" opacity="0.5"/>
            <rect x="405" y="120" width="3" height="40" opacity="0.5"/>
            <rect x="415" y="130" width="3" height="30" opacity="0.5"/>
            <!-- Location pin -->
            <circle cx="400" cy="100" r="8" fill="white" opacity="0.6" stroke="none"/>
            <circle cx="400" cy="100" r="3" fill="black" stroke="none"/>
            <path d="M400 108 L400 125" stroke-width="1" opacity="0.6"/>
          </svg>
          <div class="map-label">
            <span class="map-label-text">DUBAI, UAE</span>
          </div>
        </div>
      </div>
    </section>
  `
}
