import { useEffect, useState } from 'react';
import CapabilityEdge from './CapabilityEdge';
import CapabilityNode from './CapabilityNode';
import {
  CAPABILITY_BRANCHES,
  CAPABILITY_HUB,
  CAPABILITY_HUB_POINT,
  CAPABILITY_PHONE_ORBIT,
  CAPABILITY_PHONE_POSITIONS,
  CAPABILITY_PHONE_VIEWBOX,
  CAPABILITY_VIEWBOX,
  curvePath,
} from './capabilityData';

export default function CapabilityNetwork({
  activeId,
  reduceMotion,
  hoverCapable,
  onActivate,
  onClear,
}: {
  activeId: string | null;
  reduceMotion: boolean;
  hoverCapable: boolean;
  onActivate: (id: string | null) => void;
  onClear: () => void;
}) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsPhone(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <div className={`cap-network${isPhone ? ' cap-network--phone' : ''}`}>
      <svg
        className={`cap-svg${isPhone ? ' cap-svg--phone' : ''}`}
        viewBox={isPhone ? CAPABILITY_PHONE_VIEWBOX : CAPABILITY_VIEWBOX}
        role="img"
        aria-label="Digtimize connected capabilities network"
        onMouseLeave={hoverCapable ? onClear : undefined}
      >
        <defs>
          <linearGradient id="cap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CD8ECF" />
            <stop offset="38%" stopColor="#A98BDB" />
            <stop offset="70%" stopColor="#8689E9" />
            <stop offset="100%" stopColor="#6285F6" />
          </linearGradient>
          <filter id="cap-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {isPhone ? (
          <ellipse
            className="cap-orbit"
            cx={CAPABILITY_HUB.x}
            cy={CAPABILITY_HUB.y}
            rx={CAPABILITY_PHONE_ORBIT.rx}
            ry={CAPABILITY_PHONE_ORBIT.ry}
          />
        ) : null}

        {CAPABILITY_BRANCHES.map((branch) => {
          const active = activeId === branch.id;
          const dimmed = Boolean(activeId) && !active;
          const point = isPhone ? CAPABILITY_PHONE_POSITIONS[branch.id] ?? branch : branch;
          const hubPath = curvePath(CAPABILITY_HUB_POINT, point, 0.12);
          return (
            <g key={branch.id} className={`cap-branch${active ? ' is-active' : ''}${dimmed ? ' is-dim' : ''}`}>
              <CapabilityEdge
                d={hubPath}
                active={active}
                dimmed={dimmed}
                flow
                duration={active ? '2.8s' : '6.2s'}
                delay={`${0.2 + branch.leaves.length * 0.04}s`}
                reduceMotion={reduceMotion}
              />
              {!isPhone
                ? branch.leaves.map((leaf, index) => (
                    <CapabilityEdge
                      key={leaf.id}
                      d={curvePath(branch, leaf, 0.08)}
                      active={active}
                      dimmed={dimmed}
                      flow={active}
                      duration="3.2s"
                      delay={`${index * 0.18}s`}
                      reduceMotion={reduceMotion}
                    />
                  ))
                : null}
            </g>
          );
        })}

        {CAPABILITY_BRANCHES.map((branch) => {
          const active = activeId === branch.id;
          const dimmed = Boolean(activeId) && !active;
          const point = isPhone ? CAPABILITY_PHONE_POSITIONS[branch.id] ?? branch : branch;
          return (
            <g key={`${branch.id}-nodes`}>
              {!isPhone
                ? branch.leaves.map((leaf, index) => (
                    <CapabilityNode
                      key={leaf.id}
                      kind="leaf"
                      x={leaf.x}
                      y={leaf.y}
                      label={leaf.label}
                      anchor={branch.anchor}
                      active={active}
                      dimmed={dimmed}
                      delay={index * 0.35}
                      onEnter={hoverCapable ? () => onActivate(branch.id) : undefined}
                      onSelect={() => onActivate(branch.id)}
                    />
                  ))
                : null}
              <CapabilityNode
                kind="major"
                x={point.x}
                y={point.y}
                label={branch.label}
                lines={branch.lines}
                anchor={branch.anchor}
                active={active}
                dimmed={dimmed}
                phone={isPhone}
                onEnter={hoverCapable ? () => onActivate(branch.id) : undefined}
                onSelect={() => {
                  if (hoverCapable) onActivate(branch.id);
                  else onActivate(active ? null : branch.id);
                }}
              />
            </g>
          );
        })}

        <CapabilityNode
          kind="hub"
          x={CAPABILITY_HUB.x}
          y={CAPABILITY_HUB.y}
          label={CAPABILITY_HUB.label}
          active={!activeId}
          dimmed={false}
          phone={isPhone}
          onSelect={onClear}
        />
      </svg>
    </div>
  );
}
