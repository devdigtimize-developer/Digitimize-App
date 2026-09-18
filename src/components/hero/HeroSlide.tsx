import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { HeroSlideData } from './heroSlides';

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

export default function HeroSlide({
  slide,
  active,
  passed,
}: {
  slide: HeroSlideData;
  active: boolean;
  passed: boolean;
}) {
  const state = active ? ' is-active' : passed ? ' is-passed' : '';

  return (
    <article
      className={`hero-story-panel${state}`}
      aria-hidden={!active}
    >
      <div className="hero-story-copy">
        <p className="eyebrow"><span className="eyebrow-dot" />{slide.eyebrow}</p>
        <h1>
          <Title title={slide.title} accent={slide.accent} />
        </h1>
        <p className="hero-sub">{slide.description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to={slide.primary.to} tabIndex={active ? 0 : -1}>
            {slide.primary.label} <ArrowUpRight size={17} />
          </Link>
          <Link className="text-link" to={slide.secondary.to} tabIndex={active ? 0 : -1}>
            {slide.secondary.label} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
