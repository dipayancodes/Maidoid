import { html } from 'hono/html'

export const ContactPage = () => {
  return html`
    <!-- Header -->
    <section class="page-hero">
      <div class="container">
        <p class="overline reveal">CONTACT</p>
        <h1 class="page-hero-title reveal">Let's Talk</h1>
        <p class="page-hero-intro reveal">For partnership inquiries, product demonstrations, career opportunities, or press information.</p>
      </div>
    </section>

    <!-- Contact -->
    <section class="sect-light">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-col reveal">
            <h2 class="contact-form-title">Send a Message</h2>
            <form id="contactForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="name">NAME</label>
                  <input type="text" id="name" name="name" class="form-input" required autocomplete="name" placeholder="Full name">
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">EMAIL</label>
                  <input type="email" id="email" name="email" class="form-input" required autocomplete="email" placeholder="you@company.com">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="subject">SUBJECT</label>
                <select id="subject" name="subject" class="form-input form-select">
                  <option value="general">General Inquiry</option>
                  <option value="demo">Request Private Demo</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="careers">Career Application</option>
                  <option value="media">Media & Press</option>
                  <option value="investor">Investor Relations</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">MESSAGE</label>
                <textarea id="message" name="message" class="form-input form-textarea" required rows="5" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full" id="submitBtn">SEND MESSAGE<span class="btn-arrow">&rarr;</span></button>
              <div id="formStatus" class="form-status"></div>
            </form>
          </div>
          <div class="contact-info-col reveal">
            <div class="contact-card">
              <h3 class="contact-card-title">HEADQUARTERS</h3>
              <p class="contact-card-text">Maidoid Company Ltd.</p>
              <p class="contact-card-text">Dubai, United Arab Emirates</p>
            </div>
            <div class="contact-card">
              <h3 class="contact-card-title">EMAIL</h3>
              <p class="contact-card-text"><a href="mailto:info@maidoid.com" class="contact-link">info@maidoid.com</a></p>
              <p class="contact-card-text"><a href="mailto:careers@maidoid.com" class="contact-link">careers@maidoid.com</a></p>
              <p class="contact-card-text"><a href="mailto:press@maidoid.com" class="contact-link">press@maidoid.com</a></p>
            </div>
            <div class="contact-card">
              <h3 class="contact-card-title">BUSINESS HOURS</h3>
              <p class="contact-card-text">Sunday - Thursday</p>
              <p class="contact-card-text">9:00 AM - 6:00 PM GST</p>
            </div>
            <div class="contact-card">
              <h3 class="contact-card-title">DEMO CENTER</h3>
              <p class="contact-card-text">Private demonstrations available by appointment at our Dubai facility. Allow 60-90 minutes for a full experience.</p>
            </div>
            <div class="contact-card">
              <h3 class="contact-card-title">RESPONSE TIME</h3>
              <p class="contact-card-text">We respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
