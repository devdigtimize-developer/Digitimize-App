type Stage = 'new' | 'qualified' | 'booked' | 'confirmed' | 'followup';

type Props = {
  stage: Stage;
  lead?: { name: string; source: string; intent: string };
};

const stages: { id: Stage; label: string }[] = [
  { id: 'new', label: 'New' },
  { id: 'qualified', label: 'Qualified' },
  { id: 'booked', label: 'Booked' },
  { id: 'followup', label: 'Follow-up' },
];

const stageIndex: Record<Stage, number> = {
  new: 0,
  qualified: 1,
  booked: 2,
  confirmed: 2,
  followup: 3,
};

export default function CrmPreview({ stage, lead }: Props) {
  const active = stageIndex[stage];
  const name = lead?.name ?? 'Alex';
  const source = lead?.source ?? 'Website';
  const intent = lead?.intent ?? 'Consultation';

  return (
    <div className="ghl-preview ghl-preview-crm" aria-hidden="true">
      <div className="ghl-preview-label">GHL CRM</div>
      <div className="ghl-crm-card">
        <div className="ghl-crm-row">
          <span>Contact</span>
          <b>{name}</b>
        </div>
        <div className="ghl-crm-row">
          <span>Source</span>
          <b>{source}</b>
        </div>
        <div className="ghl-crm-row">
          <span>Intent</span>
          <b>{intent}</b>
        </div>
        <div className="ghl-crm-row">
          <span>Status</span>
          <b className="ghl-crm-status">{stages[Math.min(active, stages.length - 1)].label}</b>
        </div>
      </div>
      <ol className="ghl-crm-pipeline">
        {stages.map((s, i) => (
          <li key={s.id} className={i <= active ? 'is-active' : ''}>
            {s.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
