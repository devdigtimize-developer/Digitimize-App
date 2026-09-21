import { SectionLabel } from '@/components/shared';

export default function CompanyStory() {
  return (
    <section className="about-panel about-story">
      <div className="container about-story-grid">
        <div>
          <SectionLabel>Who we are</SectionLabel>
          <h2>
            More than services.
            <br />
            A <span className="hero-story-accent">connected</span> digital partner.
          </h2>
        </div>
        <div className="about-story-copy">
          <p>
            Digtimize is a web development and automation agency for businesses and marketing agencies. We help you build the digital pieces you need to grow: websites, stores, apps, automation, and custom tools.
          </p>
          <p>
            The work starts with your goals, then the solution that supports them. We focus on systems that stay useful as your business changes, not one-off patches that break the moment things move.
          </p>
        </div>
      </div>
    </section>
  );
}
