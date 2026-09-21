import { useState } from 'react';
import AnimatedFlowBackground from './AnimatedFlowBackground';

const journey = [
  {
    label: 'Strategy',
    title: 'Start with a clear plan.',
    accent: 'clear plan',
    text: 'We agree what success looks like, what to build first, and how we will work together, so everyone is aligned before the build begins.',
  },
  {
    label: 'Design',
    title: 'Shape how it will feel.',
    accent: 'how it will feel',
    text: 'We map the structure and look of your solution so it is easy for real people to use, before the full build is locked in.',
  },
  {
    label: 'Develop',
    title: 'Build it in clear stages.',
    accent: 'clear stages',
    text: 'We create your website, store, automation, app, or custom tool with regular updates, not a long silent wait.',
  },
  {
    label: 'Launch',
    title: 'Go live with confidence.',
    accent: 'Go live',
    text: 'We launch carefully, finish the setup, and hand everything over so you can actually use what we built.',
  },
  {
    label: 'Grow',
    title: 'Keep improving after launch.',
    accent: 'after launch',
    text: 'When support is part of the work, we stay available for fixes, improvements, and the next steps.',
  },
];

const overview = {
  title: 'From the first idea to the final launch.',
  accent: 'final launch',
  text: 'We turn your goals into a clear plan, a thoughtful design, and a digital solution you can understand and use step by step.',
};

function Title({ title, accent }: { title: string; accent: string }) {
  if (!accent || !title.includes(accent)) return <>{title}</>;
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <span className="hero-story-accent">{accent}</span>
      {after}
    </>
  );
}

export default function WorkHero() {
  const [active, setActive] = useState<number | null>(null);
  const copy = active === null ? overview : journey[active];

  return (
    <section className="work-hero">
      <div className="work-hero-glow" aria-hidden="true" />
      <AnimatedFlowBackground />
      <div className="container work-hero-inner">
        <div className="work-hero-copy is-swap" key={copy.title}>
          <p className="eyebrow"><span className="eyebrow-dot" />How Digtimize works</p>
          <h1>
            <Title title={copy.title} accent={copy.accent} />
          </h1>
          <p>{copy.text}</p>
        </div>
        <ol className="work-hero-journey" aria-label="Project journey">
          {journey.map((item, index) => (
            <li
              key={item.label}
              className={index === active ? 'is-active' : undefined}
              onMouseEnter={() => setActive(index)}
            >
              <button type="button" onFocus={() => setActive(index)}>
                <span>0{index + 1}</span>
                <b>{item.label}</b>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
