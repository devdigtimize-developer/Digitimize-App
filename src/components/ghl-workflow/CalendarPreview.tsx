type Props = {
  state: 'idle' | 'checking' | 'available' | 'selected' | 'booked';
};

const slots = ['10:00', '11:00', '11:30', '12:00', '1:00'];

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
            {state === 'selected' && 'Slot selected'}
            {(state === 'idle' || state === 'available') && 'Available slots'}
          </p>
          <ul className="ghl-calendar-slots">
            {slots.map((slot) => {
              const selected = state === 'selected' && slot === '11:30';
              const hot = state === 'checking' && slot === '11:30';
              return (
                <li
                  key={slot}
                  className={[selected ? 'is-selected' : '', hot ? 'is-hot' : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  {slot}
                  {selected ? <em>Selected</em> : null}
                  {hot ? <em>…</em> : null}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
