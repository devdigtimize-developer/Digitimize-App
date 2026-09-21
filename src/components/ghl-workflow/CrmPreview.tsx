type Stage = 'new' | 'booked' | 'confirmed' | 'followup';

type Props = {
  stage: Stage;
};

const stages: { id: Stage; label: string }[] = [
  { id: 'new', label: 'New Lead' },
  { id: 'booked', label: 'Booked' },
  { id: 'confirmed', label: 'Confirmed' },
  { id: 'followup', label: 'Follow-up' },
];

const stageIndex: Record<Stage, number> = {
  new: 0,
  booked: 1,
  confirmed: 2,
  followup: 3,
};

export default function CrmPreview({ stage }: Props) {
  const active = stageIndex[stage];

  return (
    <div className="ghl-preview ghl-preview-crm" aria-hidden="true">
      <div className="ghl-preview-label">GHL CRM</div>
      <div className="ghl-crm-card">
        <div className="ghl-crm-row">
          <span>Lead</span>
          <b>Alex Morgan</b>
        </div>
        <div className="ghl-crm-row">
          <span>Source</span>
          <b>Website form</b>
        </div>
        <div className="ghl-crm-row">
          <span>Status</span>
          <b className="ghl-crm-status">{stages[active].label}</b>
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
