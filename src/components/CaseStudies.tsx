import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CaseCard from '@/components/CaseCard';
import { caseStudies } from '@/pages/casestudies/studies';

export default function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      track.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="section case-studies-section" id="case-studies">
      <div className="container">
        <div className="case-studies-head">
          <div>
            <SectionLabel>Case studies</SectionLabel>
            <h2>Project stories from our work.</h2>
          </div>
          <Link className="case-studies-all-btn" to="/case-studies">
            View all case studies <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="case-studies-frame">
        <button
          type="button"
          className="case-studies-arrow"
          aria-label="Previous case studies"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
        >
          <ArrowLeft size={18} />
        </button>

        <div className="case-studies-track" ref={trackRef}>
          {caseStudies.map((study) => (
            <CaseCard key={study.company} study={study} />
          ))}
        </div>

        <button
          type="button"
          className="case-studies-arrow"
          aria-label="Next case studies"
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
