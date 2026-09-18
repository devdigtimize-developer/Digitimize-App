export default function PricingVisual({ kind }: { kind: 'pipeline' | 'flow' | 'window' }) {
  if (kind === 'pipeline') {
    return (
      <div className="engage-viz engage-viz-pipeline" aria-hidden="true">
        <span>Lead</span>
        <i />
        <span>Qualified</span>
        <i />
        <span>Booked</span>
      </div>
    );
  }

  if (kind === 'flow') {
    return (
      <div className="engage-viz engage-viz-flow" aria-hidden="true">
        <span className="engage-viz-node" />
        <span className="engage-viz-node" />
        <span className="engage-viz-node" />
      </div>
    );
  }

  return (
    <div className="engage-viz engage-viz-window" aria-hidden="true">
      <div className="engage-viz-bar"><i /><i /><i /></div>
      <div className="engage-viz-lines"><b /><b /><b /></div>
    </div>
  );
}
