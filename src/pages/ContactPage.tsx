import { useState } from 'react';
import { Check, Globe2, Mail, MessageCircle, Send } from 'lucide-react';
import { SectionLabel } from '@/components/shared';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>Let's build something useful</SectionLabel>
          <h1>Ready to build something that <span>actually works?</span></h1>
          <p>Book a free discovery call. No pressure, no obligation — just a clear picture of what is possible.</p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-glow" />
        <div className="container contact-grid">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2>Start a <span>conversation.</span></h2>
            <p>Send a few details and we will get back to you with a clear next step — no sales tactics, no pressure.</p>
            <div className="contact-details">
              <a href="mailto:info@digtimize.com"><Mail size={17} /> info@digtimize.com</a>
              <a href="tel:+923220739653"><MessageCircle size={17} /> +92 322 0739653</a>
              <a href="tel:+923098180851"><MessageCircle size={17} /> +92 309 8180851</a>
              <span><Globe2 size={17} /> Pakistan · Working worldwide</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="form-heading">
              <span>Start a conversation</span>
              <small>We'll get back to you with a clear next step.</small>
            </div>
            {submitted ? (
              <div className="form-success">
                <span><Check size={22} /></span>
                <h3>Thanks for reaching out.</h3>
                <p>Your message is ready to be picked up. We'll be in touch soon.</p>
                <button type="button" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>Name<input required name="name" placeholder="Your name" /></label>
                  <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
                </div>
                <div className="form-row">
                  <label>Company<input name="company" placeholder="Company name" /></label>
                  <label>Service
                    <select name="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>GoHighLevel automation</option>
                      <option>WordPress development</option>
                      <option>Shopify development</option>
                      <option>AI website development</option>
                      <option>Custom software</option>
                      <option>Digital marketing support</option>
                    </select>
                  </label>
                </div>
                <label>Project details<textarea required name="details" rows={4} placeholder="Tell us a little about what you're building..." /></label>
                <label>Budget range
                  <select name="budget" defaultValue="">
                    <option value="" disabled>Choose a range</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <button className="button button-primary form-submit" type="submit">Send your enquiry <Send size={16} /></button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
