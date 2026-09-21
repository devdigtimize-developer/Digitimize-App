import type { CSSProperties } from 'react';

type Props = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  reducedMotion: boolean;
};

export default function WorkflowParticle({ from, to, reducedMotion }: Props) {
  if (reducedMotion) return null;

  return (
    <div
      className="ghl-particle"
      style={
        {
          '--from-x': `${from.x}%`,
          '--from-y': `${from.y}%`,
          '--to-x': `${to.x}%`,
          '--to-y': `${to.y}%`,
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}
