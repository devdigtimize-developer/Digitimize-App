import type { CSSProperties } from 'react';
import type { AgentId, AgentStep } from './agentWorkflowData';
import { AGENT_CATALOG } from './agentWorkflowData';
import type { AgentRuntimeState, FeedItem } from './useAgentOrchestrator';
import AgentCard from './AgentCard';
import ActivityFeed from './ActivityFeed';
import SystemStatusBar from './SystemStatusBar';
import HandoffParticle from './HandoffParticle';
import CalendarPreview from './CalendarPreview';
import CrmPreview from './CrmPreview';
import AutomationPreview from './AutomationPreview';
import VoiceAgentPreview from './VoiceAgentPreview';
import MessagePreview from './MessagePreview';

type Props = {
  agents: AgentId[];
  agentStates: Partial<Record<AgentId, AgentRuntimeState>>;
  step: AgentStep | null;
  feed: FeedItem[];
  progress: number;
  selectedAgent: AgentId | null;
  onSelectAgent: (id: AgentId) => void;
  reducedMotion: boolean;
  live: boolean;
  activeCount: number;
  onHoverPause: (paused: boolean) => void;
  workflowId: string;
};

function PreviewPanel({ step }: { step: AgentStep | null }) {
  if (!step?.preview) return null;

  if (step.preview === 'lead' && step.lead) {
    return (
      <div className="ghl-preview ghl-preview-lead" aria-hidden="true">
        <div className="ghl-preview-label">New lead</div>
        <div className="ghl-crm-row"><span>Source</span><b>{step.lead.source}</b></div>
        <div className="ghl-crm-row"><span>Intent</span><b>{step.lead.intent}</b></div>
        <div className="ghl-crm-row"><span>Name</span><b>{step.lead.name}</b></div>
        <div className="ghl-crm-row"><span>Request</span><b>{step.lead.request}</b></div>
      </div>
    );
  }

  if (step.preview === 'decision' && step.decision) {
    return (
      <div className="ghl-preview ghl-preview-decision" aria-hidden="true">
        <div className="ghl-preview-label">AI analysis</div>
        <div className="ghl-decision-step"><span>Input</span><b>{step.decision.input}</b></div>
        <div className="ghl-decision-step"><span>Intent</span><b>{step.decision.intent}</b></div>
        <div className="ghl-decision-step"><span>Quality</span><b>{step.decision.quality}</b></div>
        <div className="ghl-decision-step"><span>Interest</span><b>{step.decision.interest}</b></div>
      </div>
    );
  }

  if (step.preview === 'calendar') {
    return <CalendarPreview state={step.calendarState ?? 'idle'} />;
  }

  if (step.preview === 'crm') {
    return <CrmPreview stage={step.crmStage ?? 'new'} lead={step.lead ? { name: step.lead.name, source: step.lead.source, intent: step.lead.intent } : undefined} />;
  }

  if (step.preview === 'automation') {
    return <AutomationPreview />;
  }

  if (step.preview === 'voice') {
    return (
      <VoiceAgentPreview
        state={step.voiceState ?? 'listening'}
        caption={step.result || step.chatLine?.text}
      />
    );
  }

  if (step.preview === 'messages' && step.messages) {
    return <MessagePreview sms={step.messages.sms} email={step.messages.email} />;
  }

  if (step.preview === 'chat' && step.chatLine) {
    return (
      <div className="ghl-preview ghl-preview-chat" aria-hidden="true">
        <div className="ghl-preview-label">Customer</div>
        <div className={`ghl-chat-bubble is-${step.chatLine.role}`}>
          <span>{step.chatLine.role === 'ai' ? 'AI Agent' : 'Customer'}</span>
          <p>{step.chatLine.text}</p>
        </div>
      </div>
    );
  }

  if (step.preview === 'complete') {
    return (
      <div className="ghl-preview ghl-preview-complete" aria-hidden="true">
        <div className="ghl-preview-label">Automation complete</div>
        <ul className="ghl-complete-list">
          <li><span>Customer</span><b>Appointment confirmed</b></li>
          <li><span>CRM</span><b>Updated</b></li>
          <li><span>Follow-up</span><b>Scheduled</b></li>
          <li><span>System</span><b>{step.systemNote ?? 'Running automatically'}</b></li>
        </ul>
      </div>
    );
  }

  return null;
}

export default function AgentOrchestrator({
  agents,
  agentStates,
  step,
  feed,
  progress,
  selectedAgent,
  onSelectAgent,
  reducedMotion,
  live,
  activeCount,
  onHoverPause,
  workflowId,
}: Props) {
  const fromIndex = step ? agents.indexOf(step.agent) : -1;
  const toIndex = step?.handoffTo ? agents.indexOf(step.handoffTo) : -1;
  const showHandoff = step?.status === 'passing' && step.handoffTo;
  const selectedDef = selectedAgent ? AGENT_CATALOG[selectedAgent] : null;
  const focusAgent = step?.agent ?? agents[0];

  return (
    <div
      className="ghl-orchestrator"
      role="tabpanel"
      id={`ghl-panel-${workflowId}`}
      aria-labelledby={`ghl-tab-${workflowId}`}
      onMouseEnter={() => onHoverPause(true)}
      onMouseLeave={() => onHoverPause(false)}
      onFocusCapture={() => onHoverPause(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onHoverPause(false);
      }}
    >
      <SystemStatusBar live={live} activeAgents={activeCount} />

      <div className="ghl-orchestrator-body">
        <div className="ghl-agent-rail">
          <div
            className="ghl-agent-stack"
            style={{ '--agent-count': agents.length } as CSSProperties}
          >
            {agents.map((id) => (
              <AgentCard
                key={id}
                id={id}
                state={agentStates[id] ?? { status: 'idle', task: 'Waiting' }}
                selected={selectedAgent === id}
                onSelect={onSelectAgent}
              />
            ))}
            {showHandoff ? (
              <HandoffParticle
                key={`${workflowId}-${fromIndex}-${toIndex}-${step?.task}`}
                fromIndex={fromIndex}
                toIndex={toIndex}
                agentCount={agents.length}
                label={step?.handoffLabel}
                reducedMotion={reducedMotion}
              />
            ) : null}
          </div>

          <div className="ghl-agent-mobile-focus">
            <AgentCard
              id={focusAgent}
              state={agentStates[focusAgent] ?? { status: 'idle', task: 'Waiting' }}
              selected={selectedAgent === focusAgent}
              onSelect={onSelectAgent}
            />
            <div className="ghl-agent-mobile-strip" aria-hidden="true">
              {agents.map((id) => (
                <AgentCard
                  key={id}
                  id={id}
                  state={agentStates[id] ?? { status: 'idle', task: 'Waiting' }}
                  selected={selectedAgent === id}
                  compact
                  onSelect={onSelectAgent}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="ghl-orchestrator-side">
          <PreviewPanel step={step} />
          <ActivityFeed items={feed} />
        </div>
      </div>

      {selectedDef ? (
        <div className="ghl-node-popover" role="dialog" aria-label={selectedDef.name}>
          <strong>{selectedDef.name}</strong>
          <p>{selectedDef.detail}</p>
          <button type="button" className="ghl-popover-close" onClick={() => onSelectAgent(selectedAgent!)}>
            Close
          </button>
        </div>
      ) : null}

      <div className="ghl-progress" aria-hidden="true">
        <span>Workflow progress</span>
        <div className="ghl-progress-track">
          <div className="ghl-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
