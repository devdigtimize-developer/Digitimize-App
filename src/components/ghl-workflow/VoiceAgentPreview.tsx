type Props = {
  state: 'listening' | 'understanding' | 'qualifying' | 'booking' | 'speaking';
  caption?: string;
};

export default function VoiceAgentPreview({ state, caption }: Props) {
  return (
    <div className="ghl-preview ghl-preview-voice" aria-hidden="true">
      <div className="ghl-preview-label">Voice agent · demo</div>
      <div className={`ghl-voice-wave is-${state}`}>
        {Array.from({ length: 12 }).map((_, i) => (
          <i key={i} style={{ animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>
      <p className="ghl-voice-state">
        {state === 'listening' && '● Listening'}
        {state === 'understanding' && '● Understanding'}
        {state === 'qualifying' && '● Qualifying'}
        {state === 'booking' && '● Booking'}
        {state === 'speaking' && '● Speaking'}
      </p>
      {caption ? <p className="ghl-voice-caption">{caption}</p> : null}
    </div>
  );
}
