import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useHeroPlayback } from './useHeroPlayback';

const DURATIONS = [1100, 1200, 1200, 1300, 1400, 1500];

const layers = [
  { id: 'nav', label: 'Navigation' },
  { id: 'hero', label: 'Hero block' },
  { id: 'proof', label: 'Social proof' },
  { id: 'cta', label: 'Primary CTA' },
];

export default function WebExperienceHero() {
  const { step, setPaused, progress, reduced } = useHeroPlayback(DURATIONS.length, DURATIONS);
  const built = Math.min(step, layers.length);
  const pageReady = step >= 4;

  return (
    <section className="svc-hero svc-hero-web" aria-labelledby="web-hero-heading">
      <div className="svc-hero-glow" aria-hidden="true" />
      <div className="container svc-hero-grid">
        <div className="svc-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Web Experience Studio</p>
          <h1 id="web-hero-heading">
            Websites that explain clearly
            <span> and move people to act.</span>
          </h1>
          <p className="svc-hero-lede">
            Structure, design, and development for fast sites that make your offer obvious — and the next step easy.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Talk about your website <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#webstory-heading">See how we build</a>
          </div>
        </div>

        <div
          className={`svc-stage svc-stage-web${reduced ? ' is-reduced' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc-stage-bar">
            <span className="svc-live"><i /> Building page</span>
            <em>Live demo</em>
          </div>

          <div className="web-browser">
            <div className="web-browser-chrome">
              <span /><span /><span />
              <div className="web-url">yoursite.com</div>
            </div>
            <div className="web-browser-body">
              {layers.map((layer, i) => (
                <div
                  key={layer.id}
                  className={`web-layer web-layer-${layer.id}${i < built ? ' is-on' : ''}`}
                >
                  <small>{layer.label}</small>
                  <div className="web-layer-fill" />
                </div>
              ))}
              {pageReady ? (
                <div className="web-ready">
                  <b>Page ready</b>
                  <span>Clear hierarchy · Fast · Easy to update</span>
                </div>
              ) : null}
            </div>
          </div>

          <div className="svc-progress" aria-hidden="true">
            <span>Assemble → Polish → Launch</span>
            <div className="svc-progress-track"><i style={{ width: `${progress}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
