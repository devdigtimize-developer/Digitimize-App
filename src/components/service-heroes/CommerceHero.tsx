import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { useHeroPlayback } from './useHeroPlayback';

const steps = [
  { id: 'browse', label: 'Browse' },
  { id: 'product', label: 'Product' },
  { id: 'cart', label: 'Cart' },
  { id: 'pay', label: 'Checkout' },
  { id: 'done', label: 'Confirmed' },
];

const DURATIONS = [1100, 1200, 1200, 1300, 1400];

export default function CommerceHero() {
  const { step, setPaused, progress, reduced } = useHeroPlayback(DURATIONS.length, DURATIONS);

  return (
    <section className="svc-hero svc-hero-commerce" aria-labelledby="commerce-hero-heading">
      <div className="svc-hero-glow" aria-hidden="true" />
      <div className="container svc-hero-grid">
        <div className="svc-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Commerce Architecture</p>
          <h1 id="commerce-hero-heading">
            Commerce built to turn
            <span> browsing into buying.</span>
          </h1>
          <p className="svc-hero-lede">
            Storefront, product journey, checkout, and operations connected so customers can buy with confidence.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Talk about your store <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#webstory-heading">See the path</a>
          </div>
        </div>

        <div
          className={`svc-stage svc-stage-commerce${reduced ? ' is-reduced' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc-stage-bar">
            <span className="svc-live"><i /> Purchase path</span>
            <em>Live demo</em>
          </div>

          <ol className="commerce-rail">
            {steps.map((s, i) => (
              <li key={s.id}>
                <span className={`commerce-node${i === step ? ' is-current' : ''}${i < step ? ' is-done' : ''}`}>
                  {i < step ? <Check size={12} /> : i + 1}
                </span>
                <b>{s.label}</b>
              </li>
            ))}
          </ol>

          <div className="commerce-card">
            {step <= 1 ? (
              <>
                <div className="commerce-thumb" />
                <div>
                  <small>Featured product</small>
                  <strong>Soft Linen Set</strong>
                  <p>{step === 0 ? 'Browsing collection…' : 'Product page · Add to cart'}</p>
                </div>
              </>
            ) : null}
            {step === 2 ? (
              <>
                <div className="commerce-thumb is-cart" />
                <div>
                  <small>Cart</small>
                  <strong>1 item · $84</strong>
                  <p>Ready for checkout</p>
                </div>
              </>
            ) : null}
            {step === 3 ? (
              <>
                <div className="commerce-thumb is-pay" />
                <div>
                  <small>Checkout</small>
                  <strong>Payment secure</strong>
                  <p>Shipping · Tax · Confirm</p>
                </div>
              </>
            ) : null}
            {step >= 4 ? (
              <>
                <div className="commerce-thumb is-done" />
                <div>
                  <small>Order confirmed</small>
                  <strong>Thank you</strong>
                  <p>Receipt sent · Fulfillment queued</p>
                </div>
              </>
            ) : null}
          </div>

          <div className="svc-progress" aria-hidden="true">
            <span>Browse → Buy → Confirm</span>
            <div className="svc-progress-track"><i style={{ width: `${progress}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
