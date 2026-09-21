type Props = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  active: boolean;
};

export default function WorkflowConnection({ from, to, active }: Props) {
  const x1 = from.x;
  const y1 = from.y;
  const x2 = to.x;
  const y2 = to.y;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const d = `M ${x1} ${y1} Q ${mx} ${my - 4} ${x2} ${y2}`;

  return (
    <path
      className={`ghl-connection${active ? ' is-active' : ''}`}
      d={d}
      fill="none"
      vectorEffect="non-scaling-stroke"
    />
  );
}
