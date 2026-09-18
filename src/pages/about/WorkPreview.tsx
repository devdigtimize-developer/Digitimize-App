import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import { ABOUT_STEPS } from './aboutData';

export default function WorkPreview() {
  return (
    <section className="about-panel about-preview">
      <div className="container">
        <div className="about-preview-top">
          <div>
            <SectionLabel>How we work</SectionLabel>
            <h2>A short path. The full roadmap is on Work.</h2>
          </div>
          <Link className="button button-primary" to="/work">
            Explore how we work <ArrowRight size={16} />
          </Link>
        </div>
        <ol className="about-preview-steps">
          {ABOUT_STEPS.map((item) => (
            <li key={item.n}>
              <span>{item.n}</span>
              <b>{item.name}</b>
              <small>{item.text}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
