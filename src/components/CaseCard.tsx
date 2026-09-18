import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/pages/casestudies/studies';

export default function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="case-card">
      <Link className="case-card-hit" to={study.to} draggable={false}>
        <div className="case-card-media">
          <img className="case-card-product" src={study.image} alt="" draggable={false} />
          <span className="case-card-tag">{study.category}</span>
        </div>
        <div className="case-card-body">
          <small>{study.product}</small>
          <b>{study.company}</b>
          <span className="case-card-link">
            View the case study <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
