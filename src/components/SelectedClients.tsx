import type { CSSProperties, ReactNode } from 'react';
import { SectionLabel } from '@/components/shared';

type Client = {
  name: string;
  color: string;
  mark: ReactNode;
};

const clients: Client[] = [
  {
    name: 'Northline',
    color: '#2563eb',
    mark: (
      <svg viewBox="0 0 220 56" aria-hidden="true">
        <path d="M28 8L48 28L28 48L8 28Z" fill="none" stroke="currentColor" strokeWidth="3.2" />
        <text x="62" y="36" fill="currentColor" fontSize="22" fontWeight="600" letterSpacing="-0.04em">Northline</text>
      </svg>
    ),
  },
  {
    name: 'Alcove',
    color: '#c9a227',
    mark: (
      <svg viewBox="0 0 200 56" aria-hidden="true">
        <ellipse cx="28" cy="28" rx="20" ry="16" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M18 28c4-8 16-8 20 0c-4 8-16 8-20 0Z" fill="currentColor" opacity=".85" />
        <text x="58" y="36" fill="currentColor" fontSize="22" fontWeight="600" letterSpacing=".08em">ALCOVE</text>
      </svg>
    ),
  },
  {
    name: 'Weatherly',
    color: '#d4af37',
    mark: (
      <svg viewBox="0 0 230 56" aria-hidden="true">
        <path d="M28 8l4 8h9l-7 5 3 9-9-6-9 6 3-9-7-5h9z" fill="currentColor" />
        <text x="52" y="36" fill="currentColor" fontSize="18" fontWeight="600" letterSpacing=".18em">WEATHERLY</text>
      </svg>
    ),
  },
  {
    name: 'Fieldmark',
    color: '#ef4444',
    mark: (
      <svg viewBox="0 0 250 56" aria-hidden="true">
        <text x="8" y="38" fill="currentColor" fontSize="22" fontWeight="700" letterSpacing=".22em">FIELDMARK</text>
      </svg>
    ),
  },
  {
    name: 'Fathom Agency',
    color: '#7c3aed',
    mark: (
      <svg viewBox="0 0 240 56" aria-hidden="true">
        <text x="8" y="36" fill="currentColor" fontSize="30" fontWeight="700" letterSpacing="-0.06em">fäm</text>
        <text x="92" y="24" fill="currentColor" fontSize="12" fontWeight="600">Master</text>
        <text x="92" y="40" fill="currentColor" fontSize="12" fontWeight="600">Agency</text>
      </svg>
    ),
  },
  {
    name: 'Interleaf',
    color: '#22c55e',
    mark: (
      <svg viewBox="0 0 250 56" aria-hidden="true">
        <path d="M16 36c8-16 20-22 28-24-10 8-14 20-12 28-8-2-14-2-16-4Z" fill="currentColor" />
        <path d="M22 18c10 2 18 10 22 18" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="52" y="36" fill="currentColor" fontSize="20" fontWeight="700" letterSpacing=".12em">INTERLEAF</text>
      </svg>
    ),
  },
  {
    name: 'Aurel',
    color: '#0090d4',
    mark: (
      <svg viewBox="0 0 200 56" aria-hidden="true">
        <text x="8" y="38" fill="currentColor" fontSize="28" fontWeight="700" letterSpacing=".04em">Aurel</text>
        <circle cx="86" cy="16" r="3.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Apex',
    color: '#f97316',
    mark: (
      <svg viewBox="0 0 160 56" aria-hidden="true">
        <path d="M36 10l18 16-18 16-18-16z" fill="currentColor" />
        <path d="M36 22l12 10-12 10-12-10z" fill="#f3f3f5" />
      </svg>
    ),
  },
];

export default function SelectedClients() {
  return (
    <section className="section clients-section" aria-labelledby="clients-heading">
      <div className="container">
        <SectionLabel>Selected clients</SectionLabel>
        <h2 id="clients-heading">Trusted by teams worldwide</h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <article
              key={client.name}
              className="client-logo-card"
              style={{ '--brand': client.color } as CSSProperties}
            >
              <span className="client-logo" aria-label={client.name}>
                {client.mark}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
