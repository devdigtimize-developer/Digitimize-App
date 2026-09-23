import { useEffect, useState } from 'react';
import { Cpu, Radio, Sparkles } from 'lucide-react';
import brandMark from '@/assets/Favicon.png';
import AnimatedAboutBackground from './AnimatedAboutBackground';

const pillars = [
  {
    id: 'signal',
    label: 'Human Signal',
    text: 'Understand what matters',
    icon: Radio,
    tone: 'signal',
  },
  {
    id: 'spark',
    label: 'Strategic Spark',
    text: 'Find what could work',
    icon: Sparkles,
    tone: 'spark',
  },
  {
    id: 'engine',
    label: 'Digital Engine',
    text: 'Build what moves forward',
    icon: Cpu,
    tone: 'engine',
  },
] as const;

export default function AboutHero() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <section className={`about-hero${reduceMotion ? ' is-reduced' : ''}`}>
      <div className="about-hero-glow" aria-hidden="true" />
      <div className="about-hero-glow about-hero-glow-soft" aria-hidden="true" />
      <AnimatedAboutBackground />

      <div className="container about-hero-inner">
        <div className="about-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            About Digtimize
          </p>
          <h1>
            Building digital experiences
            <br />
            with <span className="hero-story-accent">purpose.</span>
          </h1>
          <p>
            Digtimize brings together strategy, design, development, and automation to help businesses grow, explained clearly, built carefully, and focused on your goals.
          </p>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          <div className="about-orbit" data-system="growth-orbit">
            <div className="about-orbit-glow" />
            <div className="about-orbit-glow about-orbit-glow-rim" />

            <div className="about-orbit-rings">
              <i className="about-orbit-ring about-orbit-ring-a" />
              <i className="about-orbit-ring about-orbit-ring-b" />
              <i className="about-orbit-ring about-orbit-ring-c" />
              <i className="about-orbit-ring about-orbit-ring-d" />
            </div>

            <svg className="about-orbit-svg" viewBox="0 0 440 440" fill="none">
              <defs>
                <linearGradient id="about-orbit-stroke" x1="48" y1="36" x2="392" y2="404">
                  <stop stopColor="#c4b0f4" stopOpacity="0.55" />
                  <stop offset="0.48" stopColor="#9b7ae8" stopOpacity="0.38" />
                  <stop offset="1" stopColor="#6285f6" stopOpacity="0.22" />
                </linearGradient>
                <linearGradient id="about-orbit-link" x1="80" y1="80" x2="360" y2="360">
                  <stop stopColor="#ab8df0" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#7a5cf0" stopOpacity="0.08" />
                </linearGradient>
              </defs>

              {/* Layered orbital paths */}
              <ellipse
                className="about-orbit-path"
                cx="220"
                cy="220"
                rx="168"
                ry="158"
                style={{ stroke: 'url(#about-orbit-stroke)' }}
              />
              <ellipse
                className="about-orbit-path about-orbit-path-mid"
                cx="220"
                cy="220"
                rx="128"
                ry="118"
                style={{ stroke: 'url(#about-orbit-stroke)' }}
              />
              <circle
                className="about-orbit-path about-orbit-path-inner"
                cx="220"
                cy="220"
                r="86"
                style={{ stroke: 'url(#about-orbit-stroke)' }}
              />
              <path
                id="about-orbit-path-inner"
                d="M 220 134 A 86 86 0 1 1 219.9 134"
                fill="none"
                stroke="none"
              />

              {/* Soft connectors: signal → spark → engine → core */}
              <path
                className="about-orbit-link"
                d="M 86 108 C 128 132, 156 168, 188 198"
                style={{ stroke: 'url(#about-orbit-link)' }}
              />
              <path
                className="about-orbit-link"
                d="M 348 96 C 310 128, 278 162, 248 196"
                style={{ stroke: 'url(#about-orbit-link)' }}
              />
              <path
                className="about-orbit-link"
                d="M 336 328 C 300 300, 268 274, 240 246"
                style={{ stroke: 'url(#about-orbit-link)' }}
              />

              {/* Fixed glowing nodes on the system */}
              <circle className="about-orbit-node about-orbit-node-1" cx="86" cy="108" r="3.2" />
              <circle className="about-orbit-node about-orbit-node-2" cx="348" cy="96" r="2.8" />
              <circle className="about-orbit-node about-orbit-node-3" cx="336" cy="328" r="3" />
              <circle className="about-orbit-node about-orbit-node-4" cx="112" cy="304" r="2.2" />

              {!reduceMotion && (
                <>
                  <circle r="2.8" className="about-orbit-particle">
                    <animateMotion dur="22s" repeatCount="indefinite">
                      <mpath href="#about-orbit-path-inner" />
                    </animateMotion>
                  </circle>
                  <circle r="2.1" className="about-orbit-particle is-soft">
                    <animateMotion dur="28s" repeatCount="indefinite" begin="-9s">
                      <mpath href="#about-orbit-path-inner" />
                    </animateMotion>
                  </circle>
                </>
              )}
            </svg>

            <div className="about-orbit-core">
              <span className="about-orbit-core-glow" />
              <img className="about-orbit-core-mark" src={brandMark} alt="" />
              <strong>Digtimize</strong>
              <small>Signal · Spark · Scale</small>
            </div>

            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.id}
                  className={`about-orbit-card about-orbit-card-${index + 1} is-${pillar.tone}`}
                >
                  <span className="about-orbit-card-icon">
                    <Icon size={14} strokeWidth={1.9} />
                  </span>
                  <div>
                    <b>{pillar.label}</b>
                    <small>{pillar.text}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
