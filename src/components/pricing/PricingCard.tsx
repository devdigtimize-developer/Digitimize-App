import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PricingVisual from './PricingVisual';
import type { PricingPackage } from './packages';

export default function PricingCard({
  item,
  index,
}: {
  item: PricingPackage;
  index: number;
}) {
  return (
    <article
      className={`engage-card${item.emphasis ? ' is-emphasis' : ''}`}
      style={{ '--engage-delay': `${index * 90}ms` } as CSSProperties}
    >
      <PricingVisual kind={item.visual} />
      <span className="engage-card-tag">{item.category}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className={`engage-card-price${item.price.startsWith('$') ? '' : ' is-contact'}`}>
        <strong>{item.price}</strong>
        <small>{item.priceLabel}</small>
      </div>
      <Link className={`engage-card-cta${item.emphasis ? ' is-primary' : ''}`} to={item.cta.to}>
        {item.cta.label} <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
