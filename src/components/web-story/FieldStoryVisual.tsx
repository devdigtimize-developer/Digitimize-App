import type { WebStorySlide } from './webStorySlides';

export default function FieldStoryVisual({ slide }: { slide: WebStorySlide }) {
  return (
    <div className="ws-visual" data-slide={slide.id}>
      <div className="ws-visual-grid" aria-hidden="true" />
      <div key={slide.id} className="ws-visual-body">
        <p className="ws-visual-kicker">{slide.label}</p>
        <div className="ws-panel ws-architecture">
          {slide.points.slice(0, 3).map((point) => (
            <article key={point}>
              <b>{point}</b>
            </article>
          ))}
        </div>
        <p className="ws-visual-caption">{slide.caption}</p>
      </div>
    </div>
  );
}
