import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import { FOUNDER } from './founderData';

export default function FounderSection() {
  return (
    <section className="about-panel about-founder">
      <div className="about-founder-glow" aria-hidden="true" />
      <svg className="about-founder-wires" viewBox="0 0 1200 420" fill="none" aria-hidden="true">
        <path className="about-founder-path" d="M -20 90 C 200 40, 360 160, 580 100 C 820 40, 980 150, 1220 90" />
        <path className="about-founder-path about-flow-pulse" d="M -30 280 C 240 220, 420 340, 700 260 C 960 190, 1100 310, 1240 250" />
      </svg>

      <div className="container about-founder-wrap">
        <div className="about-founder-head">
          <SectionLabel>The founder</SectionLabel>
          <h2>
            Meet the founder behind{' '}
            <span className="hero-story-accent">Digtimize.</span>
          </h2>
        </div>

        <div className="about-founder-feature">
          <Link
            to={FOUNDER.profilePath}
            className="about-founder-card"
            aria-label={`View ${FOUNDER.name}'s founder profile`}
          >
            <div className="about-founder-photo">
              {FOUNDER.photoReady ? (
                <img src={FOUNDER.image} alt={FOUNDER.name} />
              ) : (
                <span className="about-founder-photo-fallback" aria-hidden="true">
                  {FOUNDER.initials}
                </span>
              )}
              <i className="about-founder-photo-ring" aria-hidden="true" />
            </div>

            <div className="about-founder-card-body">
              <p className="about-founder-kicker">Founder</p>
              <h3>{FOUNDER.name}</h3>
              <p className="about-founder-role">{FOUNDER.shortRole}</p>
              <ul className="about-founder-tags">
                {FOUNDER.expertise.slice(0, 3).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="about-founder-card-cta">
                View profile <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>

          <div className="about-founder-copy">
            <p>{FOUNDER.shortBio}</p>
            <blockquote className="about-founder-quote">
              <p>{FOUNDER.vision}</p>
            </blockquote>
            <p className="about-founder-why">{FOUNDER.whyCreated}</p>
            <Link className="button button-primary about-founder-story" to={FOUNDER.profilePath}>
              Read the founder's story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
