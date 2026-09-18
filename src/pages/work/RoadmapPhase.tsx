import type { RoadmapPhase as Phase } from './workData';

export default function RoadmapPhase({
  phase,
  index,
  active,
  onFocus,
}: {
  phase: Phase;
  index: number;
  active: boolean;
  onFocus: (index: number | null) => void;
}) {
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <article
      className={`work-phase is-${side}${active ? ' is-active' : ''}`}
      tabIndex={0}
      onMouseEnter={() => onFocus(index)}
      onMouseLeave={() => onFocus(null)}
      onFocus={() => onFocus(index)}
      onBlur={() => onFocus(null)}
    >
      <div className="work-phase-card">
        <p className="work-phase-kicker">{phase.n}</p>
        <h3>{phase.name}</h3>
        <p>{phase.summary}</p>
        <p className="work-phase-label">Key activities</p>
        <ul>
          {phase.activities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="work-phase-deliverable">
          <span>Deliverable</span>
          {phase.deliverable}
        </p>
      </div>
      <div className="work-phase-marker" aria-hidden="true">
        <span>{phase.n}</span>
      </div>
    </article>
  );
}
