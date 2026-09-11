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
          <h2>Ready to build something that <span>actually works?</span></h2>
          <p>Book a free discovery call. No pressure, no obligation — just a clear picture of what is possible.</p>
          <div className="contact-details">
            <a href="mailto:info@digtimize.com">info@digtimize.com</a>
            <a href="tel:+923220739653">+92 322 0739653</a>
            <span>Pakistan · Working worldwide</span>
          </div>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" to="/contact">Book a free call <ArrowUpRight size={17} /></Link>
          <Link className="button button-outline-light" to="/contact">Get a project quote <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
