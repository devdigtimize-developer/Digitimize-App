import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

const process = [
  ['01', 'Discovery Call', 'Understand the business, goals, and definition of success. We listen first: to your market, your customers, and the specific outcomes you are aiming for.', ['Business goals review', 'Technical audit', 'Success metrics defined']],
  ['02', 'Plan & Proposal', 'Clear scope, timeline, and fixed pricing. You see exactly what will be built, when it will be delivered, and what it will cost, before any work starts.', ['Detailed project scope', 'Fixed timeline', 'Transparent pricing']],
  ['03', 'Build', 'Design and development with regular progress updates. You are never left wondering where things stand. We work in clear stages with checkpoints along the way.', ['Design milestones', 'Development sprints', 'Regular progress calls']],
  ['04', 'Launch & Support', 'Testing, deployment, optimization, and post-launch support. The launch is just the beginning. We stay on to make sure everything runs smoothly.', ['QA & testing', 'Deployment', 'Ongoing support']],
];

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>How we work</SectionLabel>
          <h1>A better way to build <span>digital systems.</span></h1>
          <p>No black boxes. No vague handoffs. Just a clear path from a good idea to something that works, and keeps working.</p>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="process-detail-list">
            {process.map(([number, title, text, details]) => (
              <div className="process-detail-item" key={`${number}`}>
                <div className="process-detail-marker"><span>{number}</span></div>
                <div className="process-detail-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul className="process-details">
                    {(details as string[]).map((item) => (
                      <li key={item}><span className="check-dot" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
