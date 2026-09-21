import {
  Bot,
  Calendar,
  Database,
  Inbox,
  Mic,
  Send,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react';
import type { AgentId, AgentStatus } from './agentWorkflowData';
import { AGENT_CATALOG } from './agentWorkflowData';
import type { AgentRuntimeState } from './useAgentOrchestrator';

const ICONS: Record<string, LucideIcon> = {
  user: UserRound,
  inbox: Inbox,
  spark: Sparkles,
  calendar: Calendar,
  database: Database,
  send: Send,
  mic: Mic,
  bot: Bot,
};

const STATUS_LABEL: Record<AgentStatus, string> = {
  idle: 'IDLE',
  receiving: 'RECEIVING',
  analyzing: 'PROCESSING',
  executing: 'EXECUTING',
  completed: 'COMPLETED',
  passing: 'HANDOFF',
};

type Props = {
  id: AgentId;
  state: AgentRuntimeState;
  selected: boolean;
  compact?: boolean;
  onSelect: (id: AgentId) => void;
};

export default function AgentCard({ id, state, selected, compact, onSelect }: Props) {
  const def = AGENT_CATALOG[id];
  const Icon = ICONS[def.icon] ?? Bot;
  const busy = state.status !== 'idle' && state.status !== 'completed';

  return (
    <button
      type="button"
      className={[
        'ghl-agent-card',
        `is-${state.status}`,
        busy ? 'is-busy' : '',
        selected ? 'is-selected' : '',
        compact ? 'is-compact' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      aria-label={`${def.name}: ${STATUS_LABEL[state.status]}. ${state.task}`}
    >
      <span className="ghl-agent-card-top">
        <span className={`ghl-agent-dot is-${state.status}`} aria-hidden="true" />
        <span className="ghl-agent-icon" aria-hidden="true">
          <Icon size={compact ? 12 : 14} strokeWidth={2.2} />
        </span>
        <span className="ghl-agent-name">{compact ? def.shortName : def.name}</span>
        <span className={`ghl-agent-badge is-${state.status}`}>{STATUS_LABEL[state.status]}</span>
      </span>
      {!compact ? (
        <span className="ghl-agent-card-body">
          <span className="ghl-agent-task">{state.task}</span>
          {state.result ? <span className="ghl-agent-result">{state.result}</span> : null}
          {busy ? (
            <span className="ghl-agent-progress" aria-hidden="true">
              <i />
            </span>
          ) : null}
        </span>
      ) : null}
    </button>
  );
}
