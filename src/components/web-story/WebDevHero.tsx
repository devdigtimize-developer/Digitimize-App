import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function WebDevHero() {
  return (
    <section className="webdev-hero is-photo" aria-labelledby="webdev-hero-heading">
      <img
        className="webdev-hero-visual"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80"
        alt=""
      />
      <div className="webdev-hero-shade" aria-hidden="true" />
      <div className="container webdev-hero-inner">
        <div className="webdev-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Web development</p>
          <h1 id="webdev-hero-heading">
            Web experiences<br />
            built to<br />
            <span className="hero-story-accent">move your business forward.</span>
          </h1>
          <p className="webdev-hero-lede">
            Strategy, design, and development for fast, modern websites that turn attention into action. We shape structure, pages, and the systems behind them so the site is clear to use, simple to update, and ready to grow with the business.
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
