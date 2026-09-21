import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useHeroPlayback } from './useHeroPlayback';

const blocks = [
  { id: 'header', label: 'Header' },
  { id: 'hero', label: 'Hero' },
  { id: 'grid', label: 'Collection' },
  { id: 'pdp', label: 'Product' },
  { id: 'cart', label: 'Cart drawer' },
];

const DURATIONS = [1000, 1100, 1100, 1200, 1300, 1400];

export default function ShopifyScaleHero() {
  const { step, setPaused, progress, reduced } = useHeroPlayback(DURATIONS.length, DURATIONS);
  const active = Math.min(step, blocks.length - 1);
  const published = step >= 5;

  return (
    <section className="svc-hero svc-hero-shopify" aria-labelledby="shopify-hero-heading">
      <div className="svc-hero-glow svc-hero-glow-shop" aria-hidden="true" />
      <div className="container svc-hero-grid">
        <div className="svc-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Shopify Scale</p>
          <h1 id="shopify-hero-heading">
            Shopify stores built for
            <span> the next stage of growth.</span>
          </h1>
          <p className="svc-hero-lede">
            Theme, sections, checkout, and apps shaped around your catalog — so your team can merchandise without waiting on a developer for every change.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Talk about Shopify <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#webstory-heading">See the build</a>
          </div>
        </div>

        <div
          className={`svc-stage svc-stage-shopify${reduced ? ' is-reduced' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc-stage-bar">
            <span className="svc-live"><i /> Theme editor</span>
            <em>Live demo</em>
          </div>

          <div className="shop-split">
            <div className="shop-editor">
              <small>Sections</small>
              <ul>
                {blocks.map((b, i) => (
                  <li key={b.id} className={i === active ? 'is-on' : i < active ? 'is-done' : ''}>
                    <span />
                    {b.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shop-preview">
              <div className={`shop-preview-frame${published ? ' is-live' : ''}`}>
                <div className={`shop-block shop-header${active >= 0 ? ' is-on' : ''}`} />
                <div className={`shop-block shop-hero${active >= 1 ? ' is-on' : ''}`} />
                <div className={`shop-block shop-grid${active >= 2 ? ' is-on' : ''}`}>
                  <i /><i /><i />
                </div>
                <div className={`shop-block shop-pdp${active >= 3 ? ' is-on' : ''}`} />
                {active >= 4 ? <div className="shop-drawer">Cart · 1 item</div> : null}
                {published ? <div className="shop-badge">Published</div> : null}
              </div>
            </div>
          </div>

          <div className="svc-progress" aria-hidden="true">
            <span>Edit → Preview → Publish</span>
            <div className="svc-progress-track"><i style={{ width: `${progress}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
