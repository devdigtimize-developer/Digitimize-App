type CapabilityEdgeProps = {
  d: string;
  active: boolean;
  dimmed: boolean;
  flow?: boolean;
  duration?: string;
  delay?: string;
  reduceMotion?: boolean;
};

export default function CapabilityEdge({
  d,
  active,
  dimmed,
  flow = false,
  duration = '5.4s',
  delay = '0s',
  reduceMotion = false,
}: CapabilityEdgeProps) {
  return (
    <g className={`cap-edge${active ? ' is-active' : ''}${dimmed ? ' is-dim' : ''}`}>
      <path className="cap-edge-glow" d={d} />
      <path className="cap-edge-line" d={d} />
      {flow && !reduceMotion ? (
        <circle className="cap-particle" r={active ? 2.4 : 1.6}>
          <animateMotion
            dur={duration}
            begin={delay}
            repeatCount="indefinite"
            rotate="auto"
            path={d}
          />
        </circle>
      ) : null}
    </g>
  );
}
