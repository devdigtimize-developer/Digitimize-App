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
  delay?: number;
  onEnter?: () => void;
  onLeave?: () => void;
  onSelect?: () => void;
};

function labelOffset(anchor: CapabilityNodeProps['anchor'], kind: CapabilityNodeProps['kind']) {
  if (kind === 'hub') return { x: 0, y: 4 };
  if (kind === 'leaf') {
    if (anchor === 'left') return { x: -14, y: 4, anchor: 'end' as const };
    if (anchor === 'right') return { x: 14, y: 4, anchor: 'start' as const };
    if (anchor === 'bottom') return { x: 0, y: 20, anchor: 'middle' as const };
    return { x: 0, y: -14, anchor: 'middle' as const };
  }
  if (anchor === 'left') return { x: -24, y: 4, anchor: 'end' as const };
  if (anchor === 'right') return { x: 24, y: 4, anchor: 'start' as const };
  if (anchor === 'bottom') return { x: 0, y: 30, anchor: 'middle' as const };
  return { x: 0, y: -24, anchor: 'middle' as const };
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
  delay = 0,
  onEnter,
  onLeave,
  onSelect,
}: CapabilityNodeProps) {
  const radius = kind === 'hub' ? 44 : kind === 'major' ? 12.5 : 5.2;
  const text = labelOffset(anchor, kind);
  const className = `cap-node cap-node-${kind}${active ? ' is-active' : ''}${dimmed ? ' is-dim' : ''}`;

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
      {kind === 'hub' ? <circle className="cap-node-pulse" r="54" /> : null}
      {kind === 'hub' ? <circle className="cap-node-halo" r="48" /> : null}
      <circle className="cap-node-hit" r={kind === 'hub' ? 56 : kind === 'major' ? 28 : 16} />
      <g className="cap-node-motion">
        <circle className="cap-node-core" r={radius} />
        {kind === 'hub' ? (
          <text className="cap-node-label" textAnchor="middle" dy="0.35em">{label}</text>
        ) : kind === 'major' && lines ? (
          <text className="cap-node-label" textAnchor={text.anchor} x={text.x} y={text.y}>
            <tspan x={text.x} dy={anchor === 'bottom' ? 0 : '-0.7em'}>{lines[0]}</tspan>
            <tspan x={text.x} dy="1.2em">{lines[1]}</tspan>
          </text>
        ) : (
          <text className="cap-node-label" textAnchor={text.anchor} x={text.x} y={text.y}>{label}</text>
        )}
      </g>
    </g>
  );
}
