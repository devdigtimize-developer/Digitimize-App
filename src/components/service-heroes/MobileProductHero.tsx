import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Bell,
  Check,
  ClipboardList,
  Compass,
  LayoutDashboard,
  Palette,
  Plug,
  Rocket,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { useHeroPlayback, useReducedMotion } from './useHeroPlayback';
import './MobileProductHero.css';

type StageId =
  | 'discover'
  | 'plan'
  | 'design'
  | 'develop'
  | 'integrate'
  | 'test'
  | 'launch'
  | 'support';

type Stage = {
  id: StageId;
  label: string;
  detail: string;
  status: string;
  icon: typeof Compass;
};

const STAGES: Stage[] = [
  { id: 'discover', label: 'Discover', detail: 'Idea, users, and outcomes', status: 'Brief ready', icon: Compass },
  { id: 'plan', label: 'Plan', detail: 'Features and user journey', status: 'Plan approved', icon: ClipboardList },
  { id: 'design', label: 'UX / UI', detail: 'Clear screens and flows', status: 'Design ready', icon: Palette },
  { id: 'develop', label: 'Develop', detail: 'iOS and Android build', status: 'Build in progress', icon: Smartphone },
  { id: 'integrate', label: 'Integrate', detail: 'APIs and notifications', status: 'Connected', icon: Plug },
  { id: 'test', label: 'Test', detail: 'Usability and performance', status: 'QA passed', icon: ShieldCheck },
  { id: 'launch', label: 'Launch', detail: 'Release and handoff', status: 'Ready to ship', icon: Rocket },
  { id: 'support', label: 'Improve', detail: 'Updates after launch', status: 'Support active', icon: Bell },
];

const DURATIONS = STAGES.map(() => 1350);

function PhoneScreen({ stage }: { stage: StageId }) {
  if (stage === 'discover' || stage === 'plan') {
    return (
      <div className="mapp-screen mapp-screen-brief">
        <span className="mapp-chip">{stage === 'discover' ? 'Discovery' : 'App plan'}</span>
        <h3>{stage === 'discover' ? 'What should the app do?' : 'Core user journey'}</h3>
        <ul>
          {(stage === 'discover'
            ? ['Primary users defined', 'Key actions mapped', 'Success looks clear']
            : ['Onboarding', 'Home actions', 'Notifications']
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (stage === 'design') {
    return (
      <div className="mapp-screen mapp-screen-welcome">
        <span className="mapp-chip">Onboarding</span>
        <div className="mapp-welcome-art" aria-hidden="true" />
        <h3>Welcome</h3>
        <p>A clear first screen that guides the next tap.</p>
        <button type="button" className="mapp-btn" tabIndex={-1}>Get started</button>
      </div>
    );
  }

  if (stage === 'develop') {
    return (
      <div className="mapp-screen mapp-screen-home">
        <div className="mapp-home-top">
          <span>Home</span>
          <LayoutDashboard size={14} aria-hidden="true" />
        </div>
        <div className="mapp-home-hero" />
        <div className="mapp-home-actions">
          <button type="button" tabIndex={-1}>Continue</button>
          <button type="button" className="is-ghost" tabIndex={-1}>Details</button>
        </div>
        <div className="mapp-home-cards">
          <i /><i />
        </div>
      </div>
    );
  }

  if (stage === 'integrate') {
    return (
      <div className="mapp-screen mapp-screen-sync">
        <span className="mapp-chip">Integrations</span>
        <div className="mapp-sync-visual" aria-hidden="true">
          <span>App</span>
          <em />
          <span>API</span>
        </div>
        <ul className="mapp-sync-list">
          <li className="is-on"><Check size={12} /> Authentication</li>
          <li className="is-on"><Check size={12} /> Push notifications</li>
          <li className="is-on"><Check size={12} /> Business systems</li>
        </ul>
      </div>
    );
  }

  if (stage === 'test') {
    return (
      <div className="mapp-screen mapp-screen-qa">
        <span className="mapp-chip">QA</span>
        <h3>Testing</h3>
        <ul>
          <li><Check size={12} /> Flows work end to end</li>
          <li><Check size={12} /> Screens feel clear</li>
          <li><Check size={12} /> Performance checked</li>
        </ul>
      </div>
    );
  }

  if (stage === 'launch') {
    return (
      <div className="mapp-screen mapp-screen-launch">
        <div className="mapp-launch-badge">Ready to launch</div>
        <h3>App prepared</h3>
        <p>Store assets, access, and handoff ready for your team.</p>
      </div>
    );
  }

  return (
    <div className="mapp-screen mapp-screen-support">
      <span className="mapp-chip">After launch</span>
      <div className="mapp-toast" role="status">
        <Bell size={12} /> New update available
      </div>
      <h3>Improve</h3>
      <p>Iterate on real usage clearer flows and useful updates.</p>
    </div>
  );
}

export default function MobileProductHero() {
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
      className={`svc-hero svc-hero-mobile mapp-hero${reduced ? ' is-reduced' : ''}`}
      aria-labelledby="mobile-hero-heading"
    >
      <div className="mapp-hero-glow" aria-hidden="true" />
      <div className="container mapp-hero-grid">
        <div className="mapp-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Mobile Product Lab
          </p>
          <h1 id="mobile-hero-heading">
            Mobile apps that make
            <span> the next action effortless.</span>
          </h1>
          <p className="mapp-hero-lede">
            We design and build focused iOS and Android experiences around how people actually use your product 
            then connect them to the systems your business already relies on.
          </p>
          <div className="mapp-hero-actions">
            <Link className="button button-primary mapp-cta-primary" to="/contact">
              Talk about your app
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="mapp-cta-secondary" href="#webstory-heading">
              See the build journey
            </a>
          </div>
        </div>

        <div
          className="mapp-workflow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (scrollStage == null) setPaused(false);
          }}
        >
          <div className="mapp-workflow-bar">
            <span className={`mapp-live${paused ? '' : ' is-live'}`}>
              <i aria-hidden="true" />
              {paused ? 'Inspecting workflow' : 'Mobile build workflow'}
            </span>
            <em>Live demo</em>
          </div>

          <div className="mapp-stage-strip" role="list" aria-label="App development stages">
            {STAGES.map((item, i) => {
              const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'idle';
              return (
                <div key={item.id} className={`mapp-pill is-${state}`} role="listitem">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <b>{item.label}</b>
                </div>
              );
            })}
          </div>

          <div className="mapp-body">
            <div className="mapp-phone" aria-live="polite">
              <div className="mapp-phone-notch" aria-hidden="true" />
              <div className="mapp-phone-screen" key={stage.id}>
                <PhoneScreen stage={stage.id} />
              </div>
              <div className="mapp-phone-home" aria-hidden="true" />
            </div>

            <aside className="mapp-side">
              <div className="mapp-side-head">
                <span className="mapp-side-icon" aria-hidden="true">
                  <StageIcon size={15} />
                </span>
                <div>
                  <strong>{stage.label}</strong>
                  <small>{stage.detail}</small>
                </div>
              </div>
              <div className="mapp-side-status">{stage.status}</div>
              <ul className="mapp-side-list">
                <li className={activeIndex >= 0 ? 'is-on' : ''}>Idea clarified</li>
                <li className={activeIndex >= 2 ? 'is-on' : ''}>Screens designed</li>
                <li className={activeIndex >= 3 ? 'is-on' : ''}>App in development</li>
                <li className={activeIndex >= 5 ? 'is-on' : ''}>Tested for launch</li>
                <li className={activeIndex >= 6 ? 'is-on' : ''}>Ready for release</li>
              </ul>
            </aside>
          </div>

          <div className="mapp-workflow-progress" aria-hidden="true">
            <span>
              {stage.label}
              <em>
                {activeIndex + 1}/{STAGES.length}
              </em>
            </span>
            <div className="mapp-workflow-track">
              <i style={{ width: `${((activeIndex + 1) / STAGES.length) * 100}%` }} />
            </div>
            <div className="mapp-auto-track">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
