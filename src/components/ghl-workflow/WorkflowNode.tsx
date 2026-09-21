import type { CSSProperties } from 'react';
import {
  Bell,
  Bot,
  Calendar,
  CheckCircle2,
  Database,
  Kanban,
  ListChecks,
  Mail,
  MessageSquare,
  RefreshCw,
  UserRound,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { NodeKind } from './workflowData';

const ICONS: Record<string, LucideIcon> = {
  user: UserRound,
  calendar: Calendar,
  database: Database,
  zap: Zap,
  message: MessageSquare,
  mail: Mail,
  kanban: Kanban,
  bot: Bot,
  list: ListChecks,
  check: CheckCircle2,
  refresh: RefreshCw,
  bell: Bell,
};

type Props = {
  id: string;
  title: string;
  icon: string;
  kind: NodeKind;
  status?: string;
  active: boolean;
  selected: boolean;
  aiState?: 'listening' | 'qualifying' | 'booking';
  onSelect: (id: string) => void;
  style: CSSProperties;
};

export default function WorkflowNode({
  id,
  title,
  icon,
  kind,
  status,
  active,
  selected,
  aiState,
  onSelect,
  style,
}: Props) {
  const Icon = ICONS[icon] ?? Zap;

  return (
    <button
      type="button"
      className={[
        'ghl-node',
        `ghl-node-${kind}`,
        active ? 'is-active' : '',
        selected ? 'is-selected' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      aria-label={`${title}${status ? `: ${status}` : ''}`}
    >
      <span className="ghl-node-icon" aria-hidden="true">
        <Icon size={14} strokeWidth={2.2} />
      </span>
      <span className="ghl-node-body">
        <span className="ghl-node-title">{title}</span>
        {kind === 'ai' && aiState ? (
          <span className="ghl-node-status ghl-ai-state">
            {aiState === 'listening' && 'Listening…'}
            {aiState === 'qualifying' && 'Qualifying lead…'}
            {aiState === 'booking' && 'Booking appointment…'}
          </span>
        ) : status ? (
          <span className="ghl-node-status">{status}</span>
        ) : (
          <span className="ghl-node-status is-idle">Waiting</span>
        )}
      </span>
    </button>
  );
}
