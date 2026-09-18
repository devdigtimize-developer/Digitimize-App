import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import { ABOUT_EXPERTISE } from './aboutData';

export default function ExpertiseOverview() {
  return (
    <section className="about-panel about-expertise">
      <div className="container">
        <div className="about-block-head">
          <SectionLabel>What we help with</SectionLabel>
          <h2>Expertise across the capabilities your business may need.</h2>
        </div>
        <div className="about-expertise-grid">
          {ABOUT_EXPERTISE.map((item) => (
            <Link className="about-expertise-card" key={item.title} to={item.to}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span>View service <ArrowUpRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
