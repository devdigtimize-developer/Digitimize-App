import { Linkedin } from 'lucide-react';
import type { SeniorProfile } from '@/pages/work/workData';

export default function TeamProfileCard({ profile }: { profile: SeniorProfile }) {
  return (
    <article className="about-person">
      <div className="about-person-media">
        {profile.photo ? <img src={profile.photo} alt="" /> : <span>{profile.initials}</span>}
      </div>
      <div>
        <div className="about-person-row">
          <h3>{profile.name}</h3>
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`${profile.name} on LinkedIn`}>
              <Linkedin size={15} />
            </a>
          ) : null}
        </div>
        <p className="about-person-role">{profile.role}</p>
        <p>{profile.bio}</p>
      </div>
    </article>
  );
}
