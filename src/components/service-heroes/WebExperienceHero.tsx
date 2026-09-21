import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  Compass,
  Gauge,
  LayoutTemplate,
  Palette,
  Plug,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import { useHeroPlayback, useReducedMotion } from './useHeroPlayback';
import './WebExperienceHero.css';

type StageId =
  | 'discover'
  | 'plan'
  | 'design'
  | 'develop'
  | 'integrate'
  | 'test'
  | 'optimize'
  | 'launch';

type Stage = {
  id: StageId;
  label: string;
  detail: string;
  status: string;
  icon: typeof Compass;
};

const STAGES: Stage[] = [
  { id: 'discover', label: 'Discover', detail: 'Business goals and audience', status: 'Brief ready', icon: Compass },
  { id: 'plan', label: 'Plan', detail: 'Pages, content, and journey', status: 'Plan approved', icon: ClipboardList },
  { id: 'design', label: 'Design', detail: 'Visual design and UX', status: 'Design ready', icon: Palette },
  { id: 'develop', label: 'Develop', detail: 'Build and core functionality', status: 'Build in progress', icon: LayoutTemplate },
  { id: 'integrate', label: 'Integrate', detail: 'Forms, CMS, and services', status: 'Connected', icon: Plug },
  { id: 'test', label: 'Test', detail: 'Devices, usability, performance', status: 'QA passed', icon: ShieldCheck },
  { id: 'optimize', label: 'Optimize', detail: 'Clarity and technical quality', status: 'Refined', icon: Gauge },
  { id: 'launch', label: 'Launch', detail: 'Publish and handoff', status: 'Published', icon: Rocket },
];

const DURATIONS = STAGES.map(() => 1350);

function BrowserPreview({ stage }: { stage: StageId }) {
  if (stage === 'discover') {
    return (
      <div className="webx-page webx-page-brief">
        <span className="webx-chip">Discovery</span>
        <h3>What should the site achieve?</h3>
        <div className="webx-brief-grid">
          <div className="webx-brief-card">
            <small>Audience</small>
            <b>Business decision-makers</b>
          </div>
          <div className="webx-brief-card">
            <small>Goal</small>
            <b>Explain the offer clearly</b>
          </div>
          <div className="webx-brief-card is-accent">
            <small>Next step</small>
            <b>Book a conversation</b>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'plan') {
    return (
      <div className="webx-page webx-page-plan">
        <span className="webx-chip">Site plan</span>
        <h3>Page structure</h3>
        <ul className="webx-sitemap">
          {['Home', 'Services', 'About', 'Contact'].map((item, i) => (
            <li key={item} className={i < 3 ? 'is-on' : ''}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (stage === 'design') {
    return (
      <div className="webx-page webx-page-design">
        <nav className="webx-nav" aria-hidden="true">
          <i />
          <span>Home</span>
          <span>Services</span>
          <span>Contact</span>
        </nav>
        <div className="webx-hero-block">
          <small>Hero draft</small>
          <b>Clear headline that states the offer</b>
          <p>Supporting line that makes the next step obvious.</p>
          <em className="webx-mini-cta">Get started</em>
        </div>
      </div>
    );
  }

  if (stage === 'develop') {
    return (
      <div className="webx-page webx-page-build">
        <nav className="webx-nav is-solid" aria-hidden="true">
          <i />
          <span>Home</span>
          <span>Services</span>
          <span>Work</span>
          <span>Contact</span>
        </nav>
        <div className="webx-hero-block is-built">
          <b>Your business, explained clearly</b>
          <p>A fast site visitors can understand in seconds.</p>
          <em className="webx-mini-cta">Talk to us</em>
        </div>
        <div className="webx-sections" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  if (stage === 'integrate') {
    return (
      <div className="webx-page webx-page-integrate">
        <span className="webx-chip">Integrations</span>
        <div className="webx-connect">
          <span>Website</span>
          <em />
          <span>Services</span>
        </div>
        <ul className="webx-connect-list">
          <li className="is-on"><Check size={12} /> Contact forms</li>
          <li className="is-on"><Check size={12} /> CMS content</li>
          <li className="is-on"><Check size={12} /> Analytics</li>
        </ul>
      </div>
    );
  }

  if (stage === 'test') {
    return (
      <div className="webx-page webx-page-qa">
        <span className="webx-chip">QA</span>
        <div className="webx-devices" aria-hidden="true">
          <i className="is-desk" />
          <i className="is-tab" />
          <i className="is-phone" />
        </div>
        <ul>
          <li><Check size={12} /> Responsive across devices</li>
          <li><Check size={12} /> Forms and links checked</li>
          <li><Check size={12} /> Performance reviewed</li>
        </ul>
      </div>
    );
  }

  if (stage === 'optimize') {
    return (
      <div className="webx-page webx-page-optimize">
        <span className="webx-chip">Optimize</span>
        <h3>Polish before launch</h3>
        <div className="webx-opt-grid">
          <div><b>Clarity</b><span>Offer is obvious</span></div>
          <div><b>Access</b><span>Readable contrast</span></div>
          <div><b>Speed</b><span>Lean page weight</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="webx-page webx-page-launch">
      <div className="webx-launch-badge">Live</div>
      <nav className="webx-nav is-solid" aria-hidden="true">
        <i />
        <span>Home</span>
        <span>Services</span>
        <span>Contact</span>
      </nav>
      <div className="webx-hero-block is-live">
        <b>Ready for visitors</b>
        <p>Published, handed off, and ready for your team to update.</p>
        <em className="webx-mini-cta">Get in touch</em>
      </div>
    </div>
  );
}

export default function WebExperienceHero() {
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
      className={`svc-hero svc-hero-web webx-hero${reduced ? ' is-reduced' : ''}`}
      aria-labelledby="web-hero-heading"
    >
      <div className="webx-hero-glow" aria-hidden="true" />
      <div className="container webx-hero-grid">
        <div className="webx-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Web Experience Studio
          </p>
          <h1 id="web-hero-heading">
            Websites that make your offer clear
            <span>, and the next step easy.</span>
          </h1>
          <p className="webx-hero-lede">
            We plan, design, and build professional websites around how your customers decide, so visitors
            understand what you do and know exactly what to do next.
          </p>
          <div className="webx-hero-actions">
            <Link className="button button-primary webx-cta-primary" to="/contact">
              Talk about your website
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="webx-cta-secondary" href="#webstory-heading">
              See how we build
            </a>
          </div>
        </div>

        <div
          className="webx-workflow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (scrollStage == null) setPaused(false);
          }}
        >
          <div className="webx-workflow-bar">
            <span className={`webx-live${paused ? '' : ' is-live'}`}>
              <i aria-hidden="true" />
              {paused ? 'Inspecting workflow' : 'Website build workflow'}
            </span>
            <em>Live demo</em>
          </div>

          <div className="webx-stage-strip" role="list" aria-label="Website development stages">
            {STAGES.map((item, i) => {
              const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'idle';
              return (
                <div key={item.id} className={`webx-pill is-${state}`} role="listitem">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <b>{item.label}</b>
                </div>
              );
            })}
          </div>

          <div className="webx-body">
            <div className="webx-browser" aria-live="polite">
              <div className="webx-chrome">
                <span /><span /><span />
                <div className="webx-url">
                  {stage.id === 'launch' ? 'yoursite.com' : 'preview.yoursite.com'}
                </div>
              </div>
              <div className="webx-viewport" key={stage.id}>
                <BrowserPreview stage={stage.id} />
              </div>
            </div>

            <aside className="webx-side">
              <div className="webx-side-head">
                <span className="webx-side-icon" aria-hidden="true">
                  <StageIcon size={15} />
                </span>
                <div>
                  <strong>{stage.label}</strong>
                  <small>{stage.detail}</small>
                </div>
              </div>
              <div className="webx-side-status">{stage.status}</div>
              <ul className="webx-side-list">
                <li className={activeIndex >= 0 ? 'is-on' : ''}>Goals clarified</li>
                <li className={activeIndex >= 2 ? 'is-on' : ''}>Design approved</li>
                <li className={activeIndex >= 3 ? 'is-on' : ''}>Site in development</li>
                <li className={activeIndex >= 5 ? 'is-on' : ''}>Tested on devices</li>
                <li className={activeIndex >= 7 ? 'is-on' : ''}>Ready to publish</li>
              </ul>
            </aside>
          </div>

          <div className="webx-workflow-progress" aria-hidden="true">
            <span>
              {stage.label}
              <em>
                {activeIndex + 1}/{STAGES.length}
              </em>
            </span>
            <div className="webx-workflow-track">
              <i style={{ width: `${((activeIndex + 1) / STAGES.length) * 100}%` }} />
            </div>
            <div className="webx-auto-track">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
