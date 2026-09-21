import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  Compass,
  LineChart,
  Palette,
  Plug,
  Rocket,
  ShieldCheck,
  Store,
} from 'lucide-react';
import { useHeroPlayback, useReducedMotion } from './useHeroPlayback';
import './ShopifyScaleHero.css';

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
  preview: {
    title: string;
    lines: string[];
    status: string;
  };
};

const STAGES: Stage[] = [
  {
    id: 'discover',
    label: 'Discover',
    detail: 'Goals, catalog, and buyer journey',
    icon: Compass,
    preview: {
      title: 'Discovery notes',
      lines: ['Audience: returning shoppers', 'Priority: faster mobile checkout', 'Catalog: 120+ SKUs'],
      status: 'Brief locked',
    },
  },
  {
    id: 'plan',
    label: 'Plan',
    detail: 'Sitemap, pages, and launch scope',
    icon: ClipboardList,
    preview: {
      title: 'Store plan',
      lines: ['Home · Collections · PDP', 'Cart + checkout path', 'Apps & handoff checklist'],
      status: 'Scope approved',
    },
  },
  {
    id: 'design',
    label: 'Design',
    detail: 'Theme direction and key templates',
    icon: Palette,
    preview: {
      title: 'Theme direction',
      lines: ['Clean product grid', 'Brand typography set', 'Mobile-first sections'],
      status: 'Design ready',
    },
  },
  {
    id: 'develop',
    label: 'Develop',
    detail: 'Shopify theme and custom sections',
    icon: Store,
    preview: {
      title: 'Theme build',
      lines: ['Custom sections live', 'Product templates wired', 'Cart drawer connected'],
      status: 'Build in progress',
    },
  },
  {
    id: 'integrate',
    label: 'Integrate',
    detail: 'Payments, apps, and automation',
    icon: Plug,
    preview: {
      title: 'Connected apps',
      lines: ['Payments ready', 'Email & reviews linked', 'Shipping rules set'],
      status: 'Integrations live',
    },
  },
  {
    id: 'test',
    label: 'Test',
    detail: 'Checkout, devices, and edge cases',
    icon: ShieldCheck,
    preview: {
      title: 'QA checklist',
      lines: ['Mobile checkout ✓', 'Inventory sync ✓', 'Speed checks ✓'],
      status: 'Ready to launch',
    },
  },
  {
    id: 'launch',
    label: 'Launch',
    detail: 'Go live with a clear handoff',
    icon: Rocket,
    preview: {
      title: 'Store live',
      lines: ['Domain connected', 'Theme published', 'Team access shared'],
      status: 'Published',
    },
  },
  {
    id: 'grow',
    label: 'Grow',
    detail: 'Improve conversion after launch',
    icon: LineChart,
    preview: {
      title: 'After launch',
      lines: ['Collection tests', 'Checkout polish', 'Ongoing improvements'],
      status: 'Growth mode',
    },
  },
];

const DURATIONS = STAGES.map(() => 1400);

export default function ShopifyScaleHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { step, setPaused, paused, progress } = useHeroPlayback(STAGES.length, DURATIONS, 1600);
  const [scrollStage, setScrollStage] = useState<number | null>(null);
  const scrollIdle = useRef<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reduced) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const view = window.innerHeight || 1;
      // Progress while hero is in view (0 at enter, 1 near leave)
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
      className={`svc-hero svc-hero-shopify${reduced ? ' is-reduced' : ''}`}
      aria-labelledby="shopify-hero-heading"
    >
      <div className="shopify-hero-glow" aria-hidden="true" />
      <div className="container shopify-hero-grid">
        <div className="shopify-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Shopify Scale
          </p>
          <h1 id="shopify-hero-heading">
            A Shopify store your customers
            <span> can buy from with confidence.</span>
          </h1>
          <p className="shopify-hero-lede">
            We design and build the theme, product pages, checkout path, and apps around your catalog —
            so your team can merchandise and grow without waiting on a developer for every change.
          </p>
          <div className="shopify-hero-actions">
            <Link className="button button-primary shopify-cta-primary" to="/contact">
              Talk about your store
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="shopify-cta-secondary" href="#webstory-heading">
              See how we build
            </a>
          </div>
        </div>

        <div
          className="shopify-workflow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (scrollStage == null) setPaused(false);
          }}
        >
          <div className="shopify-workflow-bar">
            <span className={`shopify-live${paused ? '' : ' is-live'}`}>
              <i aria-hidden="true" />
              {paused ? 'Inspecting workflow' : 'Shopify build workflow'}
            </span>
            <em>Live demo</em>
          </div>

          <div className="shopify-workflow-body">
            <ol className="shopify-stages" aria-label="Shopify development stages">
              {STAGES.map((item, i) => {
                const Icon = item.icon;
                const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'idle';
                return (
                  <li key={item.id} className={`shopify-stage is-${state}`}>
                    <span className="shopify-stage-rail" aria-hidden="true">
                      <span className="shopify-stage-dot">
                        {state === 'done' ? <Check size={11} strokeWidth={2.5} /> : <Icon size={12} />}
                      </span>
                    </span>
                    <div className="shopify-stage-copy">
                      <b>{item.label}</b>
                      {state === 'active' ? <small>{item.detail}</small> : null}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="shopify-preview" aria-live="polite">
              <div className="shopify-preview-head">
                <span className="shopify-preview-icon" aria-hidden="true">
                  <StageIcon size={15} />
                </span>
                <div>
                  <strong>{stage.preview.title}</strong>
                  <small>{stage.label}</small>
                </div>
                <span className="shopify-preview-status">{stage.preview.status}</span>
              </div>

              <div className="shopify-storefront" data-stage={stage.id}>
                <div className="shopify-sf-top">
                  <span /><span /><span />
                  <em>yourstore.myshopify.com</em>
                </div>
                <div className="shopify-sf-body">
                  {stage.id === 'discover' || stage.id === 'plan' ? (
                    <ul className="shopify-sf-list">
                      {stage.preview.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}

                  {stage.id === 'design' || stage.id === 'develop' ? (
                    <>
                      <div className="shopify-sf-hero" />
                      <div className="shopify-sf-grid">
                        <i /><i /><i />
                      </div>
                      <div className="shopify-sf-note">
                        {stage.preview.lines[0]}
                      </div>
                    </>
                  ) : null}

                  {stage.id === 'integrate' ? (
                    <div className="shopify-sf-apps">
                      {['Payments', 'Email', 'Shipping'].map((app) => (
                        <span key={app} className="is-on">{app}</span>
                      ))}
                    </div>
                  ) : null}

                  {stage.id === 'test' ? (
                    <ul className="shopify-sf-checks">
                      {stage.preview.lines.map((line) => (
                        <li key={line}><Check size={12} />{line}</li>
                      ))}
                    </ul>
                  ) : null}

                  {stage.id === 'launch' ? (
                    <div className="shopify-sf-launch">
                      <b>Store published</b>
                      <p>Theme live · Domain connected · Team ready</p>
                    </div>
                  ) : null}

                  {stage.id === 'grow' ? (
                    <div className="shopify-sf-grow">
                      <div className="shopify-sf-bars" aria-hidden="true">
                        <i style={{ height: '42%' }} />
                        <i style={{ height: '68%' }} />
                        <i style={{ height: '55%' }} />
                        <i style={{ height: '86%' }} />
                      </div>
                      <p>Conversion improvements after launch</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="shopify-workflow-progress" aria-hidden="true">
            <span>
              {stage.label}
              <em>{activeIndex + 1}/{STAGES.length}</em>
            </span>
            <div className="shopify-workflow-track">
              <i style={{ width: `${((activeIndex + 1) / STAGES.length) * 100}%` }} />
            </div>
            <div className="shopify-auto-track">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
