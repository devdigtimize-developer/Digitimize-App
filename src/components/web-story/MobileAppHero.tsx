import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function MobileAppHero() {
  return (
    <section className="webdev-hero is-photo" aria-labelledby="mobile-hero-heading">
      <img
        className="webdev-hero-visual"
        src="/images/mobile-app/hero.webp"
        alt=""
        width={1280}
        height={720}
      />
      <div className="webdev-hero-shade" aria-hidden="true" />
      <div className="container webdev-hero-inner">
        <div className="webdev-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Mobile app development</p>
          <h1 id="mobile-hero-heading">
            Mobile products<br />
            built to make<br />
            <span className="hero-story-accent">the next action effortless.</span>
          </h1>
          <p className="webdev-hero-lede">
            Focused iOS and Android experiences designed around real use, then connected to the systems your business already runs. We shape flows, interface, and engineering so the app is clear to use and ready to grow.
          </p>
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
