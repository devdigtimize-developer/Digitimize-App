import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './shared';
import { CONTACT } from '@/lib/contact';

export default function CTASection() {
  return (
    <section className="section contact-section" id="contact-cta">
      <div className="contact-glow" />
      <div className="container contact-grid contact-grid-cta">
        <div className="cta-close-copy">
          <SectionLabel>Let's build something useful</SectionLabel>
          <h2>
            Ready to take the
            <br />
            <span>next clear step?</span>
          </h2>
          <p>Tell us about your business goals. We will reply with a simple next step, no pressure, no technical homework required.</p>
          <div className="contact-details">
            {CONTACT.emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
            <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            <span>{CONTACT.location} · Working worldwide</span>
          </div>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" to="/contact">
            <span>Tell us about your business</span>
            <ArrowUpRight size={17} />
          </Link>
          <Link className="button button-outline-light" to="/services">
            <span>Explore our services</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
