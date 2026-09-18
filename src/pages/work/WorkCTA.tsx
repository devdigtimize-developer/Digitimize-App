import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';

export default function WorkCTA() {
  return (
    <section className="work-cta">
      <div className="container work-cta-inner">
        <div>
          <SectionLabel>Next step</SectionLabel>
          <h2>Ready to build your next digital experience?</h2>
          <p>Tell us about your goals, and let's find a clear way forward.</p>
        </div>
        <div className="work-cta-actions">
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
