import { useState } from 'react';
import { SectionLabel } from '@/components/shared';
import RoadmapPhase from './RoadmapPhase';
import { ROADMAP } from './workData';

export default function ProcessRoadmap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="work-roadmap">
      <div className="container">
        <div className="work-roadmap-head">
          <SectionLabel>Project roadmap</SectionLabel>
          <h2>
            A clear path from conversation
            <br />
            to <span className="hero-story-accent">delivery.</span>
          </h2>
          <p>Every project follows a simple sequence: understand the work, agree the plan, build in stages, then launch — with support when it is part of the engagement.</p>
        </div>

        <div className="work-roadmap-track">
          <svg className="work-roadmap-line" viewBox="0 0 80 1400" preserveAspectRatio="none" aria-hidden="true">
            <path
              className={`work-roadmap-stroke${active !== null ? ' is-lit' : ''}`}
              d="M 40 20 C 40 80, 18 140, 40 200 C 62 260, 18 320, 40 400 C 62 480, 18 540, 40 620 C 62 700, 18 760, 40 840 C 62 920, 18 980, 40 1060 C 62 1140, 18 1200, 40 1280 C 40 1320, 40 1360, 40 1380"
            />
          </svg>
          {ROADMAP.map((phase, index) => (
            <RoadmapPhase
              key={phase.n}
              phase={phase}
              index={index}
              active={active === index}
              onFocus={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
