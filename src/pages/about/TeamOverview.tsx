import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import { SENIOR_PROFILES } from '@/pages/work/workData';
import TeamProfileCard from './TeamProfileCard';

export default function TeamOverview() {
  const people = SENIOR_PROFILES.slice(0, 3);

  return (
    <section className="about-panel about-people">
      <div className="container">
        <div className="about-block-head">
          <SectionLabel>Why trust us</SectionLabel>
          <h2>People behind the work.</h2>
          <p>Different skills, shared direction. Names and photos are placeholders — replace them in the team data file. The full specialist grid lives on the Work page.</p>
        </div>
        <div className="about-people-grid">
          {people.map((profile) => (
            <TeamProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
        <Link className="text-link about-people-link" to="/work">
          See specialist expertise <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
