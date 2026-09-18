import { SectionLabel } from '@/components/shared';
import { ABOUT_WHY } from './aboutData';

export default function WhyDigtimize() {
  return (
    <section className="about-why">
      <div className="container">
        <div className="about-block-head">
          <SectionLabel>How we approach it</SectionLabel>
          <h2>Built around your goals.</h2>
        </div>
        <div className="about-why-grid">
          {ABOUT_WHY.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
