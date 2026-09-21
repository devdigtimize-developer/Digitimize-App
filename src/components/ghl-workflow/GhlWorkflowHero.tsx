import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getWorkflow, workflows, type WorkflowId } from './workflowData';
import WorkflowSelector from './WorkflowSelector';
import WorkflowDetails from './WorkflowDetails';
import WorkflowCanvas from './WorkflowCanvas';

const PAUSE_BETWEEN_WORKFLOWS_MS = 1200;

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

export default function GhlWorkflowHero() {
  const reducedMotion = useReducedMotion();
  const [workflowId, setWorkflowId] = useState<WorkflowId>('booking');
  const [stepIndex, setStepIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [entered, setEntered] = useState(true);
  const timerRef = useRef<number | null>(null);
  const bridgeRef = useRef<number | null>(null);

  const workflow = getWorkflow(workflowId);
  const step = workflow.steps[stepIndex] ?? null;

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

  const goToWorkflow = useCallback(
    (id: WorkflowId) => {
      clearTimers();
      setEntered(false);
      window.setTimeout(
        () => {
          setWorkflowId(id);
          setStepIndex(0);
          setSelectedNodeId(null);
          setEntered(true);
        },
        reducedMotion ? 0 : 220,
      );
    },
    [reducedMotion, clearTimers],
  );

  const handleSelectWorkflow = (id: WorkflowId) => {
    if (id === workflowId) return;
    goToWorkflow(id);
  };

  const handleSelectNode = (id: string) => {
    setSelectedNodeId((prev) => (id && prev === id ? null : id || null));
  };

  useEffect(() => {
    if (paused) {
      clearTimers();
      return;
    }

    const duration = reducedMotion
      ? Math.min(step?.duration ?? 1000, 800)
      : step?.duration ?? 1400;

    clearTimers();
    timerRef.current = window.setTimeout(() => {
      if (stepIndex < workflow.steps.length - 1) {
        setStepIndex((i) => i + 1);
        return;
      }

      bridgeRef.current = window.setTimeout(() => {
        const idx = workflows.findIndex((w) => w.id === workflowId);
        const next = workflows[(idx + 1) % workflows.length];
        goToWorkflow(next.id);
      }, PAUSE_BETWEEN_WORKFLOWS_MS);
    }, duration);

    return clearTimers;
  }, [paused, stepIndex, workflow.steps.length, workflowId, step?.duration, reducedMotion, goToWorkflow, clearTimers]);

  return (
    <section
      className={`ghl-workflow-hero${entered ? ' is-entered' : ''}${reducedMotion ? ' is-reduced' : ''}`}
      aria-labelledby="ghl-hero-heading"
    >
      <div className="ghl-hero-glow" aria-hidden="true" />
      <div className="container ghl-hero-grid">
        <div className="ghl-hero-left">
          <WorkflowDetails workflow={workflow} showDefault={false} live={!paused} />
          <div className="ghl-hero-desktop-selector">
            <WorkflowSelector activeId={workflowId} onSelect={handleSelectWorkflow} />
          </div>
        </div>

        <div className="ghl-hero-right">
          <WorkflowCanvas
            key={workflowId}
            workflow={workflow}
            step={step}
            stepIndex={stepIndex}
            selectedNodeId={selectedNodeId}
            onSelectNode={handleSelectNode}
            reducedMotion={reducedMotion}
            onHoverPause={setPaused}
          />
        </div>

        <div className="ghl-hero-mobile-footer">
          <WorkflowSelector activeId={workflowId} onSelect={handleSelectWorkflow} />
          <div className="hero-actions ghl-hero-actions">
            <Link className="button button-primary" to="/contact">
              Get a Free GHL Audit <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#ghl-story">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
