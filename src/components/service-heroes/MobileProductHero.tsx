import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useHeroPlayback } from './useHeroPlayback';

const screens = [
  { title: 'Welcome', hint: 'First open' },
  { title: 'Home', hint: 'Clear next actions' },
  { title: 'Task', hint: 'Focused flow' },
  { title: 'Done', hint: 'Success state' },
];

const DURATIONS = [1200, 1300, 1300, 1400, 1500];

export default function MobileProductHero() {
  const { step, setPaused, progress, reduced } = useHeroPlayback(DURATIONS.length, DURATIONS);
  const screen = Math.min(step, screens.length - 1);
  const notify = step >= 4;

  return (
    <section className="svc-hero svc-hero-mobile" aria-labelledby="mobile-hero-heading">
      <div className="svc-hero-glow svc-hero-glow-alt" aria-hidden="true" />
      <div className="container svc-hero-grid">
        <div className="svc-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Mobile Product Lab</p>
          <h1 id="mobile-hero-heading">
            Mobile products that make
            <span> the next action effortless.</span>
          </h1>
          <p className="svc-hero-lede">
            Focused iOS and Android experiences shaped around real behavior — and connected to the systems you already use.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Talk about your app <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#webstory-heading">See the journey</a>
          </div>
        </div>

        <div
          className={`svc-stage svc-stage-mobile${reduced ? ' is-reduced' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc-stage-bar">
            <span className="svc-live"><i /> Screen flow</span>
            <em>Live demo</em>
          </div>

          <div className="phone-frame">
            <div className="phone-notch" aria-hidden="true" />
            <div className="phone-screen">
              <div
                className="phone-track"
                style={{ transform: `translateX(-${screen * 100}%)` }}
              >
                {screens.map((s) => (
                  <div className="phone-slide" key={s.title}>
                    <span className="phone-chip">{s.hint}</span>
                    <h3>{s.title}</h3>
                    <div className="phone-blocks">
                      <i /><i /><i />
                    </div>
                    <button type="button" className="phone-cta" tabIndex={-1}>Continue</button>
                  </div>
                ))}
              </div>
              {notify ? (
                <div className="phone-toast">Push ready · “Your update is here”</div>
              ) : null}
            </div>
            <div className="phone-dots" aria-hidden="true">
              {screens.map((s, i) => (
                <i key={s.title} className={i === screen ? 'is-on' : ''} />
              ))}
            </div>
          </div>

          <div className="svc-progress" aria-hidden="true">
            <span>Open → Use → Complete</span>
            <div className="svc-progress-track"><i style={{ width: `${progress}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
