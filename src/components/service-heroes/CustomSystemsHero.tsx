import { Link } from 'react-router-dom';
import { ArrowUpRight, Database, Lock, Plug, LayoutDashboard } from 'lucide-react';
import { useHeroPlayback } from './useHeroPlayback';

const modules = [
  { id: 'dash', label: 'Dashboard', icon: LayoutDashboard, task: 'Loading metrics…' },
  { id: 'data', label: 'Data layer', icon: Database, task: 'Syncing records…' },
  { id: 'api', label: 'Integrations', icon: Plug, task: 'Connecting APIs…' },
  { id: 'roles', label: 'Access', icon: Lock, task: 'Applying roles…' },
];

const DURATIONS = [1100, 1200, 1200, 1300, 1500];

export default function CustomSystemsHero() {
  const { step, setPaused, progress, reduced } = useHeroPlayback(DURATIONS.length, DURATIONS);
  const online = step >= 4;

  return (
    <section className="svc-hero svc-hero-systems" aria-labelledby="systems-hero-heading">
      <div className="svc-hero-glow svc-hero-glow-dark" aria-hidden="true" />
      <div className="container svc-hero-grid">
        <div className="svc-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Custom Systems</p>
          <h1 id="systems-hero-heading">
            Tools for the work
            <span> nobody else sees.</span>
          </h1>
          <p className="svc-hero-lede">
            Internal software, dashboards, and integrations that make complex operations easier to understand and run.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Talk about your system <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#webstory-heading">See the modules</a>
          </div>
        </div>

        <div
          className={`svc-stage svc-stage-systems${reduced ? ' is-reduced' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc-stage-bar">
            <span className="svc-live"><i /> Ops control</span>
            <em>Live demo</em>
          </div>

          <div className="systems-grid">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              const state = i < step ? 'done' : i === step ? 'active' : 'idle';
              return (
                <article key={mod.id} className={`systems-mod is-${state}`}>
                  <span className="systems-mod-icon"><Icon size={16} /></span>
                  <div>
                    <b>{mod.label}</b>
                    <small>
                      {state === 'idle' && 'Idle'}
                      {state === 'active' && mod.task}
                      {state === 'done' && 'Online ✓'}
                    </small>
                  </div>
                  {state === 'active' ? <span className="systems-pulse" aria-hidden="true" /> : null}
                </article>
              );
            })}
          </div>

          <div className={`systems-status${online ? ' is-on' : ''}`}>
            {online ? 'System online · Team can operate' : 'Bootstrapping modules…'}
          </div>

          <div className="svc-progress" aria-hidden="true">
            <span>Connect → Secure → Operate</span>
            <div className="svc-progress-track"><i style={{ width: `${progress}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
