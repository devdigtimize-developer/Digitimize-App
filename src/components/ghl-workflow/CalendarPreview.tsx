type Props = {
  state: 'idle' | 'available' | 'selected' | 'booked';
};

const slots = ['10:00', '11:00', '12:00', '1:00', '2:00'];

export default function CalendarPreview({ state }: Props) {
  return (
    <div className="ghl-preview ghl-preview-calendar" aria-hidden="true">
      <div className="ghl-preview-label">Calendar</div>
      {state === 'booked' ? (
        <div className="ghl-calendar-confirmed">
          <span>✓</span>
          <p>Appointment Confirmed</p>
          <small>12:00 · Tomorrow</small>
        </div>
      ) : (
        <ul className="ghl-calendar-slots">
          {slots.map((slot) => {
            const selected = state === 'selected' && slot === '12:00';
            const available = state === 'available' || state === 'selected';
            return (
              <li
                key={slot}
                className={[
                  selected ? 'is-selected' : '',
                  available && slot === '12:00' && state === 'available' ? 'is-hot' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {slot}
                {selected ? <em>Selected</em> : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
