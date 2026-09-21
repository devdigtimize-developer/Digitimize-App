const steps = [
  { label: 'Trigger', value: 'Appointment Booked' },
  { label: 'Action', value: 'Send SMS' },
  { label: 'Action', value: 'Send Email' },
  { label: 'Wait', value: '24 hours' },
  { label: 'Action', value: 'Follow Up' },
];

export default function AutomationPreview() {
  return (
    <div className="ghl-preview ghl-preview-automation" aria-hidden="true">
      <div className="ghl-preview-label">Automation</div>
      <ul className="ghl-auto-steps">
        {steps.map((step) => (
          <li key={`${step.label}-${step.value}`}>
            <span>{step.label}</span>
            <b>{step.value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
