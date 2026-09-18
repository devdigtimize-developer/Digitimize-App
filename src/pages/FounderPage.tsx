import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import { FOUNDER } from './about/founderData';

export default function FounderPage() {
  return (
    <div className="founder-page">
      <section className="founder-hero">
        <div className="founder-hero-glow" aria-hidden="true" />
        <div className="container founder-hero-inner">
          <Link className="founder-back" to="/about">
            <ArrowLeft size={16} /> Back to About
          </Link>

          <div className="founder-hero-grid">
            <div className="founder-hero-photo">
              {FOUNDER.photoReady ? (
                <img src={FOUNDER.image} alt={FOUNDER.name} />
              ) : (
                <span aria-hidden="true">{FOUNDER.initials}</span>
              )}
            </div>

            <div className="founder-hero-copy">
              <SectionLabel>Founder profile</SectionLabel>
              <h1>
                Meet the person behind{' '}
                <span className="hero-story-accent">Digtimize.</span>
              </h1>
              <p className="founder-hero-name">{FOUNDER.name}</p>
              <p className="founder-hero-role">{FOUNDER.role}</p>
              <p>{FOUNDER.shortBio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-panel founder-body">
        <div className="container founder-body-grid">
          <article>
            <p className="founder-section-label">About the founder</p>
            <h2>Professional background</h2>
            <p>{FOUNDER.biography}</p>
          </article>

          <article>
            <p className="founder-section-label">Vision</p>
            <h2>What Digtimize is building toward</h2>
            <p>{FOUNDER.vision}</p>
          </article>

          <article>
            <p className="founder-section-label">Why Digtimize</p>
            <h2>Why Digtimize was created</h2>
            <p>{FOUNDER.whyCreated}</p>
          </article>

          <article>
            <p className="founder-section-label">Working philosophy</p>
            <h2>How we approach the work</h2>
            <p>{FOUNDER.philosophy}</p>
          </article>
        </div>
      </section>

      <section className="founder-expertise">
        <div className="container">
          <div className="about-block-head">
            <SectionLabel>Areas of focus</SectionLabel>
            <h2>Expertise</h2>
          </div>
          <ul className="founder-expertise-list">
            {FOUNDER.expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div>
            <SectionLabel>Next step</SectionLabel>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you're working toward, and let's explore the next step.</p>
          </div>
          <div className="about-cta-actions">
            <Link className="button button-primary" to="/contact">
              Get a free project quote <ArrowUpRight size={17} />
            </Link>
            <Link className="button button-outline" to="/about">
              Back to About <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
