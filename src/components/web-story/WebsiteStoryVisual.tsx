import type { ReactElement } from 'react';
import type { WebStorySlide } from './webStorySlides';

function StructurePanel() {
  return (
    <div className="ws-panel ws-structure">
      <div className="ws-tree">
        <span className="ws-tree-root">Home</span>
        <span className="ws-tree-branch">Services</span>
        <span className="ws-tree-branch">Work</span>
        <span className="ws-tree-branch">About</span>
        <span className="ws-tree-leaf">Contact</span>
      </div>
      <p className="ws-note">Every page has a job and a next step.</p>
    </div>
  );
}

function ArchitecturePanel() {
  return (
    <div className="ws-panel ws-architecture">
      <article>
        <small>Presentation</small>
        <b>React / WordPress</b>
      </article>
      <article>
        <small>Content</small>
        <b>CMS · blocks · media</b>
      </article>
      <article>
        <small>Connect</small>
        <b>Forms · CRM · analytics</b>
      </article>
    </div>
  );
}

function DesignPanel() {
  return (
    <div className="ws-panel ws-design">
      <div className="ws-swatches" aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <div className="ws-type-sample">
        <strong>Heading / body</strong>
        <span>Hikasami · 64 / 18</span>
      </div>
      <div className="ws-ui-row" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function BuildPanel() {
  return (
    <div className="ws-panel ws-build">
      <div className="ws-phase">
        <span>Phase 1</span>
        <b>Foundation</b>
        <i className="is-done" />
      </div>
      <div className="ws-phase is-active">
        <span>Phase 2</span>
        <b>Pages & CMS</b>
        <div className="ws-bar"><i /></div>
      </div>
      <div className="ws-phase">
        <span>Phase 3</span>
        <b>QA & launch</b>
        <i />
      </div>
    </div>
  );
}

function LaunchPanel() {
  return (
    <div className="ws-panel ws-launch">
      <ul>
        <li>Performance pass</li>
        <li>SEO + redirects</li>
        <li>CMS training</li>
        <li>Go-live checklist</li>
      </ul>
      <span className="ws-chip">Ready to ship</span>
    </div>
  );
}

const panels: Record<string, () => ReactElement> = {
  structure: StructurePanel,
  architecture: ArchitecturePanel,
  design: DesignPanel,
  build: BuildPanel,
  launch: LaunchPanel,
};

export default function WebsiteStoryVisual({ slide }: { slide: WebStorySlide }) {
  const Panel = panels[slide.id] ?? StructurePanel;

  return (
    <div className="ws-visual" data-slide={slide.id}>
      <div className="ws-visual-grid" aria-hidden="true" />
      <div key={slide.id} className="ws-visual-body">
        <p className="ws-visual-kicker">{slide.label}</p>
        <Panel />
        <p className="ws-visual-caption">{slide.caption}</p>
      </div>
    </div>
  );
}
