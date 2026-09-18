import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Linkedin } from 'lucide-react';
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
          <SectionLabel>The co-founder</SectionLabel>
          <h2>
            Meet the co-founder behind{' '}
            <span className="hero-story-accent">Digtimize.</span>
          </h2>
        </div>

        <div className="about-founder-feature">
          <article className="about-founder-card">
            <Link
              to={FOUNDER.profilePath}
              className="about-founder-photo"
              aria-label={`View ${FOUNDER.name}'s founder profile`}
            >
              {FOUNDER.photoReady ? (
                <img src={FOUNDER.image} alt={FOUNDER.name} />
              ) : (
                <span className="about-founder-photo-fallback" aria-hidden="true">
                  {FOUNDER.initials}
                </span>
              )}
              <i className="about-founder-photo-ring" aria-hidden="true" />
            </Link>

            <div className="about-founder-card-body">
              <p className="about-founder-kicker">Co-founder</p>
              <div className="about-founder-name-row">
                <h3>{FOUNDER.name}</h3>
                <a
                  className="about-founder-linkedin"
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${FOUNDER.name} on LinkedIn`}
                >
                  <Linkedin size={16} />
                </a>
              </div>
              <p className="about-founder-role">{FOUNDER.shortRole}</p>
              <ul className="about-founder-tags">
                {FOUNDER.expertise.slice(0, 3).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link className="about-founder-card-cta" to={FOUNDER.profilePath}>
                View profile <ArrowUpRight size={15} />
              </Link>
            </div>
          </article>

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
