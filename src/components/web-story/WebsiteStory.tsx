import { useEffect, useState, type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { webStorySlides, type WebStorySlide } from './webStorySlides';
import WebsiteStoryVisual from './WebsiteStoryVisual';

const INTERVAL_MS = 5200;

type Props = {
  slides?: WebStorySlide[];
  Visual?: ComponentType<{ slide: WebStorySlide }>;
  className?: string;
  ariaLabel?: string;
  id?: string;
};

export default function WebsiteStory({
  slides = webStorySlides,
  Visual = WebsiteStoryVisual,
  className,
  ariaLabel = 'Website development slides',
  id,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    setIndex(0);
  }, [slides]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <section id={id} className={`section webstory-section${className ? ` ${className}` : ''}`} aria-labelledby="webstory-heading">
      <div className="container">
        <div
          className="webstory-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="webstory-grid">
            <div key={slide.id} className="webstory-copy">
              <h2 id="webstory-heading">{slide.title}</h2>
              <p>{slide.lede}</p>
              <ul>
                {slide.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="webstory-cta" to="/contact">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <Visual slide={slide} />

            <div className="webstory-dots" role="tablist" aria-label={ariaLabel}>
              {slides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={item.label}
                  className={i === index ? 'is-active' : undefined}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
