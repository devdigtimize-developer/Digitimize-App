import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { WorkflowDef } from './workflowData';
import { DEFAULT_LEFT } from './workflowData';

type Props = {
  workflow: WorkflowDef | null;
  showDefault: boolean;
  live: boolean;
};

export default function WorkflowDetails({ workflow, showDefault, live }: Props) {
  const eyebrow = showDefault || !workflow ? DEFAULT_LEFT.eyebrow : workflow.leftEyebrow;
  const title = showDefault || !workflow ? DEFAULT_LEFT.title : workflow.leftTitle;
  const body = showDefault || !workflow ? DEFAULT_LEFT.body : workflow.leftBody;

  return (
    <div className="ghl-hero-copy">
      <div className={`ghl-live${live ? ' is-live' : ''}`} role="status">
        <span className="ghl-live-dot" aria-hidden="true" />
        {live ? 'Live workflow' : 'Automation ready'}
      </div>
      <p className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </p>
      <h1 id="ghl-hero-heading">{title}</h1>
      <p className="ghl-hero-lede">{body}</p>
      <div className="hero-actions ghl-hero-actions ghl-hero-actions-desktop">
        <Link className="button button-primary" to="/contact">
          Get a Free GHL Audit <ArrowUpRight size={17} />
        </Link>
        <a className="button button-outline" href="#ghl-story">
          See How It Works
        </a>
      </div>
    </div>
  );
}
