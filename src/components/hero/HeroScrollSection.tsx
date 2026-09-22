import { useEffect, useState } from 'react';
import HeroSlide from './HeroSlide';
import { HERO_SLIDES } from './heroSlides';
import WebDevelopmentHeroVisual from '@/components/web-story/WebDevelopmentHeroVisual';

const INTERVAL_MS = 2600;

export default function HeroScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  const active = HERO_SLIDES[activeIndex];

  return (
    <section
      className={`hero-story${reduceMotion ? ' is-reduced' : ''}`}
      id="home"
    >
      <div className="hero-story-pin">
        <div className="container hero-story-inner">
          <div
            className="hero-story-stage"
            aria-live="polite"
            aria-atomic="true"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {HERO_SLIDES.map((slide, index) => (
              <HeroSlide
                key={slide.id}
                slide={slide}
                active={index === activeIndex}
                passed={index < activeIndex}
              />
            ))}
          </div>
          <WebDevelopmentHeroVisual scope="home" />
        </div>
        <p className="sr-only">{active.eyebrow}. {active.title}</p>
      </div>
    </section>
  );
}
