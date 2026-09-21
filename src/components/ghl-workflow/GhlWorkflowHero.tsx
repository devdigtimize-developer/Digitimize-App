import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useAgentOrchestrator } from './useAgentOrchestrator';
import WorkflowSelector from './WorkflowSelector';
import WorkflowDetails from './WorkflowDetails';
import AgentOrchestrator from './AgentOrchestrator';

export default function GhlWorkflowHero() {
  const {
    workflow,
    workflowId,
    step,
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
    progress,
  } = useAgentOrchestrator();

  return (
    <section
      className={`ghl-workflow-hero ghl-agent-hero${entered ? ' is-entered' : ''}${reducedMotion ? ' is-reduced' : ''}`}
      aria-labelledby="ghl-hero-heading"
    >
      <div className="ghl-hero-glow" aria-hidden="true" />
      <div className="container ghl-hero-grid">
        <div className="ghl-hero-left">
          <WorkflowDetails workflow={workflow} live={!paused} />
          <div className="ghl-hero-desktop-selector">
            <WorkflowSelector activeId={workflowId} onSelect={goToWorkflow} />
          </div>
        </div>

        <div className="ghl-hero-right">
          <AgentOrchestrator
            key={workflowId}
            workflowId={workflowId}
            agents={workflow.agents}
            agentStates={agentStates}
            step={step}
            feed={feed}
            progress={progress}
            selectedAgent={selectedAgent}
            onSelectAgent={toggleAgent}
            reducedMotion={reducedMotion}
            live={!paused}
            activeCount={activeCount}
            onHoverPause={setPaused}
          />
        </div>

        <div className="ghl-hero-mobile-footer">
          <WorkflowSelector activeId={workflowId} onSelect={goToWorkflow} />
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
