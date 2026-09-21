import { useMemo } from 'react';
import type { WorkflowDef, WorkflowStep } from './workflowData';
import WorkflowNode from './WorkflowNode';
import WorkflowConnection from './WorkflowConnection';
import WorkflowParticle from './WorkflowParticle';
import CalendarPreview from './CalendarPreview';
import CrmPreview from './CrmPreview';
import AutomationPreview from './AutomationPreview';

type Props = {
  workflow: WorkflowDef;
  step: WorkflowStep | null;
  stepIndex: number;
  selectedNodeId: string | null;
  onSelectNode: (id: string) => void;
  reducedMotion: boolean;
  onHoverPause: (paused: boolean) => void;
};

export default function WorkflowCanvas({
  workflow,
  step,
  stepIndex,
  selectedNodeId,
  onSelectNode,
  reducedMotion,
  onHoverPause,
}: Props) {
  const nodeMap = useMemo(() => {
    const map = new Map(workflow.nodes.map((n) => [n.id, n]));
    return map;
  }, [workflow]);

  const activeSet = useMemo(() => new Set(step?.activate ?? []), [step]);

  const activeConnections = useMemo(() => {
    const set = new Set<string>();
    if (!step) return set;
    for (const [a, b] of workflow.connections) {
      if (activeSet.has(a) && activeSet.has(b)) set.add(`${a}->${b}`);
      if (step.particleFrom === a && step.particleTo === b) set.add(`${a}->${b}`);
    }
    return set;
  }, [workflow.connections, activeSet, step]);

  const selectedNode = selectedNodeId ? nodeMap.get(selectedNodeId) : null;

  const particle =
    step?.particleFrom && step?.particleTo
      ? {
          from: nodeMap.get(step.particleFrom),
          to: nodeMap.get(step.particleTo),
        }
      : null;

  return (
    <div
      className="ghl-canvas"
      role="tabpanel"
      id={`ghl-panel-${workflow.id}`}
      aria-labelledby={`ghl-tab-${workflow.id}`}
      onMouseEnter={() => onHoverPause(true)}
      onMouseLeave={() => onHoverPause(false)}
      onFocusCapture={() => onHoverPause(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onHoverPause(false);
      }}
    >
      <div className="ghl-canvas-stage">
        <svg className="ghl-canvas-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {workflow.connections.map(([fromId, toId]) => {
            const from = nodeMap.get(fromId);
            const to = nodeMap.get(toId);
            if (!from || !to) return null;
            return (
              <WorkflowConnection
                key={`${fromId}-${toId}`}
                from={{ x: from.x, y: from.y }}
                to={{ x: to.x, y: to.y }}
                active={activeConnections.has(`${fromId}->${toId}`)}
              />
            );
          })}
        </svg>

        {particle?.from && particle?.to ? (
          <WorkflowParticle
            key={`${workflow.id}-${stepIndex}-${particle.from.id}-${particle.to.id}`}
            from={{ x: particle.from.x, y: particle.from.y }}
            to={{ x: particle.to.x, y: particle.to.y }}
            reducedMotion={reducedMotion}
          />
        ) : null}

        {workflow.nodes.map((node) => (
          <WorkflowNode
            key={node.id}
            id={node.id}
            title={node.title}
            icon={node.icon}
            kind={node.kind}
            status={step?.statuses?.[node.id]}
            active={activeSet.has(node.id)}
            selected={selectedNodeId === node.id}
            aiState={node.kind === 'ai' ? step?.aiState : undefined}
            onSelect={onSelectNode}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          />
        ))}
      </div>

      <div className="ghl-canvas-side">
        {step?.preview === 'calendar' ? (
          <CalendarPreview state={step.calendarState ?? 'idle'} />
        ) : null}
        {step?.preview === 'crm' ? <CrmPreview stage={step.crmStage ?? 'new'} /> : null}
        {step?.preview === 'automation' ? <AutomationPreview /> : null}
        {step?.preview === 'chat' && step.chatLine ? (
          <div className="ghl-preview ghl-preview-chat" aria-hidden="true">
            <div className="ghl-preview-label">Conversation demo</div>
            <div className={`ghl-chat-bubble is-${step.chatLine.role}`}>
              <span>{step.chatLine.role === 'ai' ? 'AI Agent' : 'Customer'}</span>
              <p>{step.chatLine.text}</p>
            </div>
          </div>
        ) : null}
        {step?.timeline ? (
          <div className="ghl-timeline" aria-hidden="true">
            <span>{step.timeline.time}</span>
            <p>{step.timeline.label}</p>
          </div>
        ) : null}
      </div>

      {selectedNode ? (
        <div className="ghl-node-popover" role="dialog" aria-label={selectedNode.title}>
          <strong>{selectedNode.title}</strong>
          <p>{selectedNode.detail}</p>
          <button type="button" className="ghl-popover-close" onClick={() => onSelectNode('')}>
            Close
          </button>
        </div>
      ) : null}

      <div className="ghl-progress" aria-hidden="true">
        <span>
          Step {Math.min(stepIndex + 1, workflow.steps.length)} / {workflow.steps.length}
        </span>
        <div className="ghl-progress-track">
          <div
            className="ghl-progress-fill"
            style={{
              width: `${((stepIndex + 1) / workflow.steps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
