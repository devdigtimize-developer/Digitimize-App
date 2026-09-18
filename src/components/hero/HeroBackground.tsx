import type { HeroSlideData } from './heroSlides';

export default function HeroBackground({
  slides,
  activeIndex,
  reduceMotion,
}: {
  slides: HeroSlideData[];
  activeIndex: number;
  reduceMotion: boolean;
}) {
  return (
    <div className="hero-story-media" aria-hidden="true">
      {slides.map((slide, index) => {
        const state = index === activeIndex ? ' is-active' : index < activeIndex ? ' is-passed' : '';
        return (
          <div
            key={slide.id}
            className={`hero-story-bg${state}${reduceMotion ? ' is-reduced' : ''}`}
          >
            <img
              src={slide.image}
              alt=""
              width={1280}
              height={720}
              decoding={index === 0 ? 'sync' : 'async'}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
            <span className="hero-story-veil" />
            <span className="hero-story-glow" />
          </div>
        );
      })}
    </div>
  );
}
