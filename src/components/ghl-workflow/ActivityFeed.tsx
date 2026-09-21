import type { FeedItem } from './useAgentOrchestrator';

type Props = {
  items: FeedItem[];
};

export default function ActivityFeed({ items }: Props) {
  return (
    <div className="ghl-activity" aria-live="polite" aria-label="Live activity demo">
      <div className="ghl-activity-head">
        <span>Live activity</span>
        <em>Demo</em>
      </div>
      <ul className="ghl-activity-list">
        {items.length === 0 ? (
          <li className="is-empty">Waiting for events…</li>
        ) : (
          items
            .slice()
            .reverse()
            .map((item) => (
              <li key={item.id}>
                <time>{item.time}</time>
                <span>{item.label}</span>
              </li>
            ))
        )}
      </ul>
    </div>
  );
}
