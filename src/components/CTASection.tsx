import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './shared';

export default function CTASection() {
  return (
    <section className="section contact-section" id="contact-cta">
      <div className="contact-glow" />
      <div className="container contact-grid contact-grid-cta">
        <div>
          <SectionLabel>Let's build something useful</SectionLabel>
          <h2>Ready to take the <span>next clear step?</span></h2>
          <p>Tell us about your business goals. We will reply with a simple next step — no pressure, no technical homework required.</p>
          <div className="contact-details">
            <a href="mailto:info@digtimize.com">info@digtimize.com</a>
            <a href="tel:+923220739653">+92 322 0739653</a>
            <span>Pakistan · Working worldwide</span>
          </div>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" to="/contact">Tell us about your business <ArrowUpRight size={17} /></Link>
          <Link className="button button-outline-light" to="/services">Explore our services <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
