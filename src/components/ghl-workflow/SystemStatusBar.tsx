import { DEMO_SYSTEM } from './agentWorkflowData';

type Props = {
  live: boolean;
  activeAgents: number;
};

export default function SystemStatusBar({ live, activeAgents }: Props) {
  return (
    <div className="ghl-system-bar" role="status">
      <div className={`ghl-system-live${live ? ' is-live' : ''}`}>
        <span className="ghl-live-dot" aria-hidden="true" />
        {live ? 'Automation active' : 'Paused'}
      </div>
      <div className="ghl-system-meta">
        <span>
          Agents <b>{DEMO_SYSTEM.agents}</b>
        </span>
        <span>
          Tasks <b>{DEMO_SYSTEM.tasks}</b>
        </span>
        <span>
          Active <b>{activeAgents}</b>
        </span>
        <em>{DEMO_SYSTEM.label}</em>
      </div>
    </div>
  );
}
