import SeniorProfileCard from './SeniorProfileCard';
import { SENIOR_PROFILES } from './workData';

export default function SeniorTeamSection() {
  return (
    <section className="work-team">
      <div className="container">
        <div className="work-team-head">
          <p className="work-team-kicker">Our senior team</p>
          <h2>The specialists behind Digtimize</h2>
          <p>The difference is not just our technology. It is the people behind it.</p>
        </div>
        <div className="work-team-grid">
          {SENIOR_PROFILES.map((profile) => (
            <SeniorProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
