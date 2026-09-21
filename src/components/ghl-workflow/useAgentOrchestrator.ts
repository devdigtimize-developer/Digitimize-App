import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AGENT_CATALOG,
  getAgentWorkflow,
  agentWorkflows,
  type AgentId,
  type AgentStatus,
  type AgentStep,
  type WorkflowId,
} from './agentWorkflowData';

const PAUSE_BETWEEN_MS = 1400;

export type AgentRuntimeState = {
  status: AgentStatus;
  task: string;
  result?: string;
};

export type FeedItem = {
  id: string;
  time: string;
  label: string;
};

function formatClock(base: Date, offsetSec: number) {
  const d = new Date(base.getTime() + offsetSec * 1000);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function useAgentOrchestrator() {
  const reducedMotion = useReducedMotion();
  const [workflowId, setWorkflowId] = useState<WorkflowId>('booking');
  const [stepIndex, setStepIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [entered, setEntered] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<AgentId | null>(null);
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const timerRef = useRef<number | null>(null);
  const bridgeRef = useRef<number | null>(null);
  const clockBase = useRef(new Date());
  const feedSeq = useRef(0);

  const workflow = getAgentWorkflow(workflowId);
  const step: AgentStep | null = workflow.steps[stepIndex] ?? null;

  const clearTimers = useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (bridgeRef.current != null) {
      window.clearTimeout(bridgeRef.current);
      bridgeRef.current = null;
    }
  }, []);

  const resetFeed = useCallback(() => {
    clockBase.current = new Date();
    feedSeq.current = 0;
    setFeed([]);
  }, []);

  const goToWorkflow = useCallback(
    (id: WorkflowId) => {
      clearTimers();
      setEntered(false);
      window.setTimeout(
        () => {
          setWorkflowId(id);
          setStepIndex(0);
          setSelectedAgent(null);
          resetFeed();
          setEntered(true);
        },
        reducedMotion ? 0 : 240,
      );
    },
    [clearTimers, reducedMotion, resetFeed],
  );

  const agentStates = useMemo(() => {
    const states: Partial<Record<AgentId, AgentRuntimeState>> = {};
    for (const id of workflow.agents) {
      states[id] = { status: 'idle', task: 'Waiting' };
    }
    if (!step) return states;

    const completed = new Set(step.completedAgents ?? []);
    for (const id of completed) {
      states[id] = {
        status: 'completed',
        task: 'Complete',
        result: AGENT_CATALOG[id]?.shortName ? 'Done' : undefined,
      };
    }

    states[step.agent] = {
      status: step.status,
      task: step.task,
      result: step.result,
    };

    if (step.handoffTo && step.status === 'passing') {
      states[step.handoffTo] = {
        status: 'receiving',
        task: 'Task incoming…',
      };
    }

    return states;
  }, [workflow.agents, step]);

  // Append activity when step changes
  useEffect(() => {
    if (!step?.activity) return;
    feedSeq.current += 1;
    const item: FeedItem = {
      id: `${workflowId}-${feedSeq.current}`,
      time: formatClock(clockBase.current, feedSeq.current),
      label: step.activity,
    };
    setFeed((prev) => [...prev.slice(-7), item]);
  }, [stepIndex, workflowId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (paused) {
      clearTimers();
      return;
    }

    const duration = reducedMotion
      ? Math.min(step?.duration ?? 1000, 700)
      : step?.duration ?? 1100;

    clearTimers();
    timerRef.current = window.setTimeout(() => {
      if (stepIndex < workflow.steps.length - 1) {
        setStepIndex((i) => i + 1);
        return;
      }
      bridgeRef.current = window.setTimeout(() => {
        const idx = agentWorkflows.findIndex((w) => w.id === workflowId);
        const next = agentWorkflows[(idx + 1) % agentWorkflows.length];
        goToWorkflow(next.id);
      }, PAUSE_BETWEEN_MS);
    }, duration);

    return clearTimers;
  }, [
    paused,
    stepIndex,
    workflow.steps.length,
    workflowId,
    step?.duration,
    reducedMotion,
    goToWorkflow,
    clearTimers,
  ]);

  const toggleAgent = useCallback((id: AgentId) => {
    setSelectedAgent((prev) => (prev === id ? null : id));
  }, []);

  const activeCount = Object.values(agentStates).filter(
    (s) => s && s.status !== 'idle' && s.status !== 'completed',
  ).length;

  return {
    workflow,
    workflowId,
    step,
    stepIndex,
    agentStates,
    feed,
    paused,
    setPaused,
    entered,
    reducedMotion,
    selectedAgent,
    toggleAgent,
    goToWorkflow,
    activeCount,
    progress: ((stepIndex + 1) / workflow.steps.length) * 100,
  };
}
