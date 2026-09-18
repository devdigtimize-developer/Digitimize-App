import type { ReactElement } from 'react';
import type { WebStorySlide } from './webStorySlides';

function FlowsPanel() {
  return (
    <div className="ws-panel ws-structure">
      <div className="ws-tree">
        <span className="ws-tree-root">Open app</span>
        <span className="ws-tree-branch">Home</span>
        <span className="ws-tree-branch">Action</span>
        <span className="ws-tree-leaf">Done / return</span>
      </div>
      <p className="ws-note">Each screen has a job and a next step.</p>
    </div>
  );
}

function UxPanel() {
  return (
    <div className="ws-panel ws-design">
      <div className="ws-swatches" aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <div className="ws-type-sample">
        <strong>Tap targets</strong>
        <span>Thumb zone · 44pt</span>
      </div>
      <div className="ws-ui-row" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function NativePanel() {
  return (
    <div className="ws-panel ws-architecture">
      <article>
        <small>Clients</small>
        <b>iOS · Android</b>
      </article>
      <article>
        <small>Core</small>
        <b>APIs · auth · data</b>
      </article>
      <article>
        <small>Live</small>
        <b>Push · analytics</b>
      </article>
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
        <b>Screens & flows</b>
        <div className="ws-bar"><i /></div>
      </div>
      <div className="ws-phase">
        <span>Phase 3</span>
        <b>Device QA</b>
        <i />
      </div>
    </div>
  );
}

function StorePanel() {
  return (
    <div className="ws-panel ws-launch">
      <ul>
        <li>Device pass</li>
        <li>Store assets</li>
        <li>Analytics live</li>
        <li>Team handover</li>
      </ul>
      <span className="ws-chip">Ready to ship</span>
    </div>
  );
}

const panels: Record<string, () => ReactElement> = {
  flows: FlowsPanel,
  ux: UxPanel,
  native: NativePanel,
  build: BuildPanel,
  store: StorePanel,
};

export default function MobileStoryVisual({ slide }: { slide: WebStorySlide }) {
  const Panel = panels[slide.id] ?? FlowsPanel;

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
