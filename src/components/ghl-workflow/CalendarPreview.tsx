type Props = {
  state: 'idle' | 'checking' | 'available' | 'selected' | 'booked';
};

const slots = [
  { time: '10:00', label: 'Available' },
  { time: '11:00', label: 'Available' },
  { time: '11:30', label: 'Available' },
  { time: '12:00', label: 'Available' },
];

export default function CalendarPreview({ state }: Props) {
  return (
    <div className="ghl-preview ghl-preview-calendar" aria-hidden="true">
      <div className="ghl-preview-label">Calendar agent</div>
      {state === 'booked' ? (
        <div className="ghl-calendar-confirmed">
          <span>✓</span>
          <p>Appointment Confirmed</p>
          <small>11:30 · Tomorrow</small>
        </div>
      ) : (
        <>
          <p className="ghl-calendar-hint">
            {state === 'checking' && 'Checking availability…'}
            {state === 'selected' && '11:30 selected'}
            {(state === 'idle' || state === 'available') && 'Available slots'}
          </p>
          <ul className="ghl-calendar-slots">
            {slots.map((slot) => {
              const selected = state === 'selected' && slot.time === '11:30';
              const checking = state === 'checking' && slot.time === '11:30';
              return (
                <li
                  key={slot.time}
                  className={[selected ? 'is-selected' : '', checking ? 'is-hot' : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  <b>{slot.time}</b>
                  <em>
                    {selected ? 'Selected' : checking ? 'Checking…' : slot.label}
                  </em>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
