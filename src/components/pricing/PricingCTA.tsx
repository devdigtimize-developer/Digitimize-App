import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function PricingCTA() {
  return (
    <p className="engage-footnote">
      Not sure which option fits your project?
      <Link className="text-link" to="/contact">Get a custom quote <ArrowUpRight size={15} /></Link>
    </p>
  );
}
