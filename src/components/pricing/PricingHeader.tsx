import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';

export default function PricingHeader() {
  return (
    <div className="engage-head">
      <div className="engage-head-copy">
        <SectionLabel>Pricing & engagement</SectionLabel>
        <h2>A clear place<br /><span>to start.</span></h2>
      </div>
      <div className="engage-head-aside">
        <p>Every business is different. These starting points make the conversation easier without forcing your project into a box.</p>
        <Link className="text-link" to="/contact">Get a custom quote <ArrowUpRight size={16} /></Link>
      </div>
    </div>
  );
}
