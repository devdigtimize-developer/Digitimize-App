import AnimatedAboutBackground from './AnimatedAboutBackground';

const nodes = ['People', 'Ideas', 'Technology'];

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-glow" aria-hidden="true" />
      <AnimatedAboutBackground />
      <div className="container about-hero-inner">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />About Digtimize</p>
          <h1>
            Building digital experiences
            <br />
            with <span className="hero-story-accent">purpose.</span>
          </h1>
          <p>
            Digtimize brings together strategy, design, development, and automation to help businesses grow — explained clearly, built carefully, and focused on your goals.
          </p>
        </div>
        <div className="about-hero-visual" aria-hidden="true">
          <svg className="about-mark" viewBox="0 0 420 420">
            <circle cx="210" cy="210" r="78" className="about-mark-core" />
            <path className="about-mark-ring" d="M 210 62 C 292 62, 358 128, 358 210 C 358 292, 292 358, 210 358 C 128 358, 62 292, 62 210 C 62 128, 128 62, 210 62" />
            <path className="about-mark-flow about-flow-pulse" d="M 40 210 C 90 120, 160 90, 210 210 C 260 330, 330 300, 380 210" />
            <path className="about-mark-flow" d="M 210 36 C 300 90, 340 170, 210 210 C 80 250, 120 330, 210 384" />
            <text x="210" y="206" textAnchor="middle" className="about-mark-word">DIGTIMIZE</text>
          </svg>
          <ul>
            {nodes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
