import { Linkedin } from 'lucide-react';
import type { SeniorProfile } from './workData';

export default function SeniorProfileCard({ profile }: { profile: SeniorProfile }) {
  return (
    <article className="work-profile">
      <div className="work-profile-media">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} />
        ) : (
          <span>{profile.initials}</span>
        )}
      </div>
      <div className="work-profile-meta">
        <div className="work-profile-name-row">
          <h3>{profile.name}</h3>
          {profile.linkedin ? (
            <a
              className="work-profile-linkedin"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.name} on LinkedIn`}
            >
              <Linkedin size={16} />
            </a>
          ) : null}
        </div>
        <p>{profile.role}</p>
      </div>
    </article>
  );
}
