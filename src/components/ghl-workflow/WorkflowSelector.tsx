import type { WorkflowId } from './agentWorkflowData';
import { agentWorkflows } from './agentWorkflowData';

type Props = {
  activeId: WorkflowId;
  onSelect: (id: WorkflowId) => void;
};

export default function WorkflowSelector({ activeId, onSelect }: Props) {
  return (
    <div className="ghl-selector" role="tablist" aria-label="Automation workflows">
      {agentWorkflows.map((wf) => {
        const selected = wf.id === activeId;
        return (
          <button
            key={wf.id}
            type="button"
            role="tab"
            aria-selected={selected}
            id={`ghl-tab-${wf.id}`}
            className={`ghl-selector-tab${selected ? ' is-active' : ''}`}
            onClick={() => onSelect(wf.id)}
          >
            <span className="ghl-selector-num">{wf.tabNumber}</span>
            <span className="ghl-selector-label">{wf.tabLabel}</span>
            <span className="ghl-selector-bar" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
