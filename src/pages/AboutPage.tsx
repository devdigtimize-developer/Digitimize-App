import { Link } from 'react-router-dom';
import { ArrowUpRight, Command, LifeBuoy, Network, Zap } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

const values = [
  { icon: Network, title: 'Direct communication', text: 'You work directly with the people building your project — no account managers, no middlemen, no games of telephone.' },
  { icon: Zap, title: 'Built for growth', text: 'Every website and automation is designed to move visitors toward becoming customers, not just to look pretty.' },
  { icon: Command, title: 'Fixed pricing', text: 'Clear pricing and scope before work begins. You know what you are paying for and why, with no surprise invoices.' },
  { icon: LifeBuoy, title: 'Post-launch support', text: 'We do not disappear after delivery. Ongoing support, improvements, and maintenance are part of the relationship.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>About Digtimize</SectionLabel>
          <h1>We build the systems behind <span>growing businesses.</span></h1>
          <p>Digtimize is a web development and automation agency helping businesses and marketing agencies build the digital infrastructure they need to grow.</p>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-text">
            <SectionLabel>Our approach</SectionLabel>
            <h2>Systems over <span>one-off fixes.</span></h2>
            <p>We do not believe in quick patches that break the moment your business changes. We build systems — websites, automations, and tools designed to work together and keep working as you grow.</p>
            <p>This means thinking beyond the launch: what happens when traffic doubles, when you add a new service, when a platform changes its API. The work we do is built to handle the next stage, not just the current one.</p>
            <Link className="button button-primary" to="/contact">Work with us <ArrowUpRight size={17} /></Link>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div className="about-card-head"><span className="about-dot" />What we believe</div>
              <ul>
                <li><b>Right-sized solutions</b><small>Not every problem needs a custom build. We recommend what fits, not what is most expensive.</small></li>
                <li><b>Business-focused development</b><small>Technology should serve the business, not the other way around.</small></li>
                <li><b>Clear communication</b><small>You always know what is happening, why, and what comes next.</small></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-head centered">
            <SectionLabel>Why Digtimize</SectionLabel>
            <h2>Built for the part <span>after launch.</span></h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value-card" key={title}>
                <span className="value-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
