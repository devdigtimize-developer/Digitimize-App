import type { CSSProperties } from 'react';

type CapabilityNodeProps = {
  x: number;
  y: number;
  label: string;
  lines?: [string, string];
  kind: 'hub' | 'major' | 'leaf';
  anchor?: 'top' | 'right' | 'bottom' | 'left';
  active: boolean;
  dimmed: boolean;
  /** Phone composition: larger hub / majors, no leaf clutter. */
  phone?: boolean;
  delay?: number;
  onEnter?: () => void;
  onLeave?: () => void;
  onSelect?: () => void;
};

function labelOffset(
  anchor: CapabilityNodeProps['anchor'],
  kind: CapabilityNodeProps['kind'],
  phone = false,
) {
  const majorGap = phone ? 30 : 24;
  const majorY = phone ? 36 : 30;
  if (kind === 'hub') return { x: 0, y: 4 };
  if (kind === 'leaf') {
    if (anchor === 'left') return { x: -14, y: 4, anchor: 'end' as const };
    if (anchor === 'right') return { x: 14, y: 4, anchor: 'start' as const };
    if (anchor === 'bottom') return { x: 0, y: 20, anchor: 'middle' as const };
    return { x: 0, y: -14, anchor: 'middle' as const };
  }
  /* Phone: keep major labels under/above the node so side text never clips. */
  if (phone) {
    if (anchor === 'top') return { x: 0, y: -28, anchor: 'middle' as const };
    if (anchor === 'bottom') return { x: 0, y: 34, anchor: 'middle' as const };
    return { x: 0, y: 32, anchor: 'middle' as const };
  }
  if (anchor === 'left') return { x: -majorGap, y: 4, anchor: 'end' as const };
  if (anchor === 'right') return { x: majorGap, y: 4, anchor: 'start' as const };
  if (anchor === 'bottom') return { x: 0, y: majorY, anchor: 'middle' as const };
  return { x: 0, y: -majorY + 6, anchor: 'middle' as const };
}

export default function CapabilityNode({
  x,
  y,
  label,
  lines,
  kind,
  anchor = 'top',
  active,
  dimmed,
  phone = false,
  delay = 0,
  onEnter,
  onLeave,
  onSelect,
}: CapabilityNodeProps) {
  const radius =
    kind === 'hub' ? (phone ? 56 : 44) : kind === 'major' ? (phone ? 15 : 12.5) : 5.2;
  const text = labelOffset(anchor, kind, phone);
  const className = `cap-node cap-node-${kind}${active ? ' is-active' : ''}${dimmed ? ' is-dim' : ''}${phone ? ' is-phone' : ''}`;

  return (
    <g
      className={className}
      transform={`translate(${x} ${y})`}
      style={{ '--cap-delay': `${delay}s` } as CSSProperties}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (!onSelect) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      }}
      role={kind === 'leaf' ? 'presentation' : 'button'}
      tabIndex={kind === 'leaf' ? -1 : 0}
      aria-label={label}
      aria-pressed={kind === 'major' ? active : undefined}
    >
      {kind === 'hub' ? <circle className="cap-node-pulse" r={phone ? 68 : 54} /> : null}
      {kind === 'hub' ? <circle className="cap-node-halo" r={phone ? 60 : 48} /> : null}
      <circle className="cap-node-hit" r={kind === 'hub' ? (phone ? 70 : 56) : kind === 'major' ? (phone ? 36 : 28) : 16} />
      <g className="cap-node-motion">
        <circle className="cap-node-core" r={radius} />
        {kind === 'hub' ? (
          <text className="cap-node-label" textAnchor="middle" dy="0.35em">{label}</text>
        ) : kind === 'major' && lines ? (
          <text className="cap-node-label" textAnchor={text.anchor} x={text.x} y={text.y}>
            <tspan x={text.x} dy={text.y > 0 || anchor === 'bottom' ? 0 : '-0.7em'}>{lines[0]}</tspan>
            <tspan x={text.x} dy="1.2em">{lines[1]}</tspan>
          </text>
        ) : (
          <text className="cap-node-label" textAnchor={text.anchor} x={text.x} y={text.y}>{label}</text>
        )}
      </g>
    </g>
  );
}
