import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container about-cta-inner">
        <div>
          <SectionLabel>Next step</SectionLabel>
          <h2>
            Let's build something
            <br />
            meaningful together.
          </h2>
          <p>Have a project in mind? Tell us what you want to achieve, and we will explore the next step together.</p>
        </div>
        <div className="about-cta-actions">
          <Link className="button button-primary" to="/contact">
            Tell us about your business <ArrowUpRight size={17} />
          </Link>
          <Link className="button button-outline" to="/services">
            Explore our services <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
