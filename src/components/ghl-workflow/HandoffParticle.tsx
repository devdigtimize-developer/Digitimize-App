import type { CSSProperties } from 'react';

type Props = {
  fromIndex: number;
  toIndex: number;
  agentCount: number;
  label?: string;
  reducedMotion: boolean;
};

export default function HandoffParticle({
  fromIndex,
  toIndex,
  agentCount,
  label,
  reducedMotion,
}: Props) {
  if (reducedMotion || fromIndex < 0 || toIndex < 0 || agentCount < 1) return null;

  const fromPct = ((fromIndex + 0.55) / agentCount) * 100;
  const toPct = ((toIndex + 0.45) / agentCount) * 100;

  return (
    <div className="ghl-handoff" aria-hidden="true">
      <span
        className="ghl-handoff-particle"
        style={
          {
            '--from-pct': `${fromPct}%`,
            '--to-pct': `${toPct}%`,
          } as CSSProperties
        }
      />
      {label ? (
        <span className="ghl-handoff-label" style={{ top: `${(fromPct + toPct) / 2}%` }}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
