import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  theme?: 'default' | 'ghl' | 'ecom' | 'shopify';
  eyebrow: string;
  heading: ReactNode;
  lede: string;
  image: string;
  brandMark?: string;
  brandMarkAlt?: string;
};

export default function ServiceHero({
  theme = 'default',
  eyebrow,
  heading,
  lede,
  image,
  brandMark,
  brandMarkAlt = '',
}: Props) {
  return (
    <section className={`webdev-hero is-photo hero-theme-${theme}`} aria-labelledby="service-hero-heading">
      <img className="webdev-hero-visual" src={image} alt="" />
      <div className="webdev-hero-shade" aria-hidden="true" />
      {brandMark ? (
        <img className="service-hero-mark" src={brandMark} alt={brandMarkAlt} />
      ) : null}
      <div className="container webdev-hero-inner">
        <div className="webdev-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
          <h1 id="service-hero-heading">{heading}</h1>
          <p className="webdev-hero-lede">{lede}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Talk about your project <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
