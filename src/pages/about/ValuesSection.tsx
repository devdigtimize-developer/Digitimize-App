import { SectionLabel } from '@/components/shared';
import { ABOUT_VALUES } from './aboutData';

export default function ValuesSection() {
  return (
    <section className="about-values">
      <div className="container">
        <div className="about-block-head">
          <SectionLabel>What we believe</SectionLabel>
          <h2>Principles that keep the work clear and honest.</h2>
        </div>
        <div className="about-values-grid">
          {ABOUT_VALUES.map((item) => (
            <article key={item.n} className="about-value">
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
