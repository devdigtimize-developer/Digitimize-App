import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import { CAPABILITY_DEFAULT, type CapabilityBranch } from './capabilityData';

export default function CapabilityDetails({
  branch,
  showHeading,
}: {
  branch: CapabilityBranch | null;
  showHeading: boolean;
}) {
  const content = branch
    ? {
        title: branch.panelTitle,
        description: branch.description,
        items: branch.items,
        cta: branch.cta,
      }
    : {
        title: CAPABILITY_DEFAULT.title,
        description: CAPABILITY_DEFAULT.description,
        items: CAPABILITY_DEFAULT.items,
        cta: CAPABILITY_DEFAULT.cta,
      };

  return (
    <div className={`cap-details${branch ? ' has-branch' : ''}`}>
      {showHeading ? <SectionLabel>Connected capabilities</SectionLabel> : null}
      <div className="cap-details-stage" key={branch?.id ?? 'default'}>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <ul className="cap-details-list">
          {content.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="button button-primary" to={content.cta.to}>
          {content.cta.label} <ArrowUpRight size={17} />
        </Link>
      </div>
    </div>
  );
}
