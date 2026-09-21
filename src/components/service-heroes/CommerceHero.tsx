import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  Compass,
  CreditCard,
  LineChart,
  Palette,
  Rocket,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { useHeroPlayback, useReducedMotion } from './useHeroPlayback';
import './CommerceHero.css';

type StageId =
  | 'discover'
  | 'plan'
  | 'design'
  | 'develop'
  | 'integrate'
  | 'test'
  | 'launch'
  | 'grow';

type Stage = {
  id: StageId;
  label: string;
  detail: string;
  icon: typeof Compass;
  status: string;
};

const STAGES: Stage[] = [
  { id: 'discover', label: 'Discover', detail: 'Business goals and buyer needs', icon: Compass, status: 'Brief ready' },
  { id: 'plan', label: 'Plan', detail: 'Store structure and purchase path', icon: ClipboardList, status: 'Plan approved' },
  { id: 'design', label: 'Design', detail: 'Storefront and product browsing', icon: Palette, status: 'Design ready' },
  { id: 'develop', label: 'Develop', detail: 'Cart, checkout, and store build', icon: ShoppingBag, status: 'Build live' },
  { id: 'integrate', label: 'Integrate', detail: 'Payments, shipping, marketing', icon: CreditCard, status: 'Connected' },
  { id: 'test', label: 'Test', detail: 'Devices, checkout, and performance', icon: ShieldCheck, status: 'QA passed' },
  { id: 'launch', label: 'Launch', detail: 'Go live with a clear handoff', icon: Rocket, status: 'Published' },
  { id: 'grow', label: 'Grow', detail: 'Improve the buying experience', icon: LineChart, status: 'Optimizing' },
];

const DURATIONS = STAGES.map(() => 1350);

export default function CommerceHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { step, setPaused, paused, progress } = useHeroPlayback(STAGES.length, DURATIONS, 1500);
  const [scrollStage, setScrollStage] = useState<number | null>(null);
  const scrollIdle = useRef<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reduced) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const raw = (view * 0.72 - rect.top) / (rect.height * 0.85);
      const p = Math.min(1, Math.max(0, raw));
      const idx = Math.min(STAGES.length - 1, Math.floor(p * STAGES.length));
      setScrollStage(idx);
      setPaused(true);
      if (scrollIdle.current != null) window.clearTimeout(scrollIdle.current);
      scrollIdle.current = window.setTimeout(() => {
        setScrollStage(null);
        setPaused(false);
      }, 900);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollIdle.current != null) window.clearTimeout(scrollIdle.current);
    };
  }, [reduced, setPaused]);

  const activeIndex = scrollStage ?? step;
  const stage = STAGES[activeIndex];
  const StageIcon = stage.icon;

  return (
    <section
      ref={heroRef}
      className={`svc-hero svc-hero-commerce ecom-hero${reduced ? ' is-reduced' : ''}`}
      aria-labelledby="commerce-hero-heading"
    >
      <div className="ecom-hero-glow" aria-hidden="true" />
      <div className="container ecom-hero-grid">
        <div className="ecom-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Commerce Architecture
          </p>
          <h1 id="commerce-hero-heading">
            Online stores built to turn
            <span> browsing into buying.</span>
          </h1>
          <p className="ecom-hero-lede">
            We plan, design, and build the full shopping journey — storefront, product pages, cart, and checkout —
            so customers can buy with confidence on desktop and mobile.
          </p>
          <div className="ecom-hero-actions">
            <Link className="button button-primary ecom-cta-primary" to="/contact">
              Talk about your store
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="ecom-cta-secondary" href="#webstory-heading">
              See the buying journey
            </a>
          </div>
        </div>

        <div
          className="ecom-workflow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (scrollStage == null) setPaused(false);
          }}
        >
          <div className="ecom-workflow-bar">
            <span className={`ecom-live${paused ? '' : ' is-live'}`}>
              <i aria-hidden="true" />
              {paused ? 'Inspecting journey' : 'E-commerce build journey'}
            </span>
            <em>Live demo</em>
          </div>

          <div className="ecom-stage-strip" role="list" aria-label="Development stages">
            {STAGES.map((item, i) => {
              const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'idle';
              return (
                <div key={item.id} className={`ecom-pill is-${state}`} role="listitem">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <b>{item.label}</b>
                </div>
              );
            })}
          </div>

          <div className="ecom-main" aria-live="polite">
            <div className="ecom-main-head">
              <span className="ecom-main-icon" aria-hidden="true">
                <StageIcon size={15} />
              </span>
              <div>
                <strong>{stage.label}</strong>
                <small>{stage.detail}</small>
              </div>
              <span className="ecom-main-status">{stage.status}</span>
            </div>

            <div className="ecom-canvas" data-stage={stage.id}>
              {(stage.id === 'discover' || stage.id === 'plan') && (
                <div className="ecom-brief">
                  <div className="ecom-brief-card">
                    <small>Customer</small>
                    <b>Mobile shoppers</b>
                  </div>
                  <div className="ecom-brief-card">
                    <small>Priority</small>
                    <b>Clear product path</b>
                  </div>
                  <div className="ecom-brief-card is-accent">
                    <small>Outcome</small>
                    <b>Confident checkout</b>
                  </div>
                </div>
              )}

              {stage.id === 'design' && (
                <div className="ecom-storefront">
                  <div className="ecom-sf-banner" />
                  <div className="ecom-sf-products">
                    <article className="ecom-product is-hot">
                      <div className="ecom-product-img" />
                      <span>Soft Linen Set</span>
                    </article>
                    <article className="ecom-product">
                      <div className="ecom-product-img" />
                      <span>Day Bag</span>
                    </article>
                    <article className="ecom-product">
                      <div className="ecom-product-img" />
                      <span>Home Candle</span>
                    </article>
                  </div>
                </div>
              )}

              {stage.id === 'develop' && (
                <div className="ecom-pdp">
                  <div className="ecom-pdp-media" />
                  <div className="ecom-pdp-info">
                    <small>Product page</small>
                    <b>Soft Linen Set</b>
                    <p>$84 · In stock</p>
                    <button type="button" className="ecom-add" tabIndex={-1}>
                      Add to cart
                    </button>
                  </div>
                </div>
              )}

              {stage.id === 'integrate' && (
                <div className="ecom-integrate">
                  <div className="ecom-cart-mini">
                    <b>Cart · 1 item</b>
                    <span>$84</span>
                  </div>
                  <div className="ecom-connects">
                    {['Payments', 'Shipping', 'Email'].map((item) => (
                      <span key={item} className="is-on">
                        <Check size={12} /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {stage.id === 'test' && (
                <ul className="ecom-qa">
                  <li><Check size={13} /> Mobile checkout works</li>
                  <li><Check size={13} /> Inventory updates correctly</li>
                  <li><Check size={13} /> Pages load quickly</li>
                </ul>
              )}

              {stage.id === 'launch' && (
                <div className="ecom-launch">
                  <div className="ecom-launch-badge">Store live</div>
                  <p>Checkout ready · Payments connected · Team handoff complete</p>
                  <div className="ecom-order">
                    <small>Sample order</small>
                    <b>Confirmed · #1042</b>
                  </div>
                </div>
              )}

              {stage.id === 'grow' && (
                <div className="ecom-grow">
                  <div className="ecom-grow-bars" aria-hidden="true">
                    <i style={{ height: '40%' }} />
                    <i style={{ height: '62%' }} />
                    <i style={{ height: '54%' }} />
                    <i style={{ height: '88%' }} />
                  </div>
                  <p>Ongoing tweaks to collections, product pages, and checkout clarity</p>
                </div>
              )}
            </div>

            <div className="ecom-path" aria-hidden="true">
              {(['Browse', 'Product', 'Cart', 'Checkout', 'Live'] as const).map((label, i) => {
                const pathIndex =
                  stage.id === 'design'
                    ? 0
                    : stage.id === 'develop'
                      ? 1
                      : stage.id === 'integrate'
                        ? 2
                        : stage.id === 'test'
                          ? 3
                          : stage.id === 'launch' || stage.id === 'grow'
                            ? 4
                            : -1;
                const on = pathIndex >= 0 && i <= pathIndex;
                const current = i === pathIndex;
                return (
                  <span key={label} className={`${on ? 'is-on' : ''}${current ? ' is-current' : ''}`}>
                    {label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="ecom-workflow-progress" aria-hidden="true">
            <span>
              {stage.label}
              <em>
                {activeIndex + 1}/{STAGES.length}
              </em>
            </span>
            <div className="ecom-workflow-track">
              <i style={{ width: `${((activeIndex + 1) / STAGES.length) * 100}%` }} />
            </div>
            <div className="ecom-auto-track">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
