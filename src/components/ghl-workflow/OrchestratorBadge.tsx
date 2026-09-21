type Props = {
  live: boolean;
};

export default function OrchestratorBadge({ live }: Props) {
  return (
    <div className={`ghl-orch-badge${live ? ' is-live' : ''}`} aria-hidden="true">
      <div className="ghl-orch-badge-copy">
        <strong>Digtimize</strong>
        <span>Agent Orchestrator</span>
      </div>
      <em>{live ? 'System · Active' : 'System · Paused'}</em>
    </div>
  );
}
