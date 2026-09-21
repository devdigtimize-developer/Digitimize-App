import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { AgentWorkflow } from './agentWorkflowData';
import { DEFAULT_LEFT } from './agentWorkflowData';

type Props = {
  workflow: AgentWorkflow;
  live: boolean;
};

export default function WorkflowDetails({ workflow, live }: Props) {
  return (
    <div className="ghl-hero-copy">
      <div className={`ghl-live${live ? ' is-live' : ''}`} role="status">
        <span className="ghl-live-dot" aria-hidden="true" />
        {live ? 'Live AI automation' : 'Automation ready'}
      </div>
      <p className="eyebrow">
        <span className="eyebrow-dot" />
        {DEFAULT_LEFT.eyebrow}
      </p>
      <h1 id="ghl-hero-heading">{DEFAULT_LEFT.title}</h1>
      <p className="ghl-hero-lede">{DEFAULT_LEFT.body}</p>
      <p className="ghl-mode-note">
        <strong>{workflow.leftEyebrow}</strong>
        <span>{workflow.leftBody}</span>
      </p>
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
