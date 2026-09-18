import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import CTASection from '@/components/CTASection';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenges', label: 'Business Challenges' },
  { id: 'solution', label: 'Solution' },
  { id: 'outcomes', label: 'Measurable Outcomes' },
];

const metrics = [
  { value: '41%', label: 'More booked discovery calls' },
  { value: '3.5x', label: 'Faster lead follow-up' },
  { value: '18hrs', label: 'Saved each week on manual CRM work' },
];

const tags = ['GoHighLevel Automation', 'CRM Pipelines', 'Lead Follow-up'];

export default function Brightpathagency() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const nodes = sections
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <section className="case-hero">
        <div className="container case-hero-grid">
          <div className="case-hero-copy">
            <h1>BrightPath Agency's lead system books 41% more discovery calls</h1>
            <p className="case-hero-lede">How Digtimize replaced scattered spreadsheets and delayed follow-up with a GoHighLevel pipeline that qualifies leads, books calls, and keeps every opportunity moving.</p>
            <div className="case-hero-client">
              <b>BrightPath Agency</b>
              <span>United Kingdom <i /> brightpath.agency</span>
            </div>
            <div className="case-hero-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="case-hero-metrics">
            {metrics.map((metric) => (
              <div className="case-hero-metric" key={metric.label}>
                <b>{metric.value}</b>
                <small>{metric.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-body-section">
        <div className="container case-body-grid">
          <aside className="case-sidebar">
            <p className="case-sidebar-label">On this page</p>
            <nav className="case-sidebar-nav">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={activeSection === section.id ? 'is-active' : ''}
                >
                  {section.label}
                </a>
              ))}
            </nav>

            <div className="case-glance">
              <p className="case-sidebar-label">At a glance</p>
              <dl>
                <div><dt>Client</dt><dd>BrightPath Agency</dd></div>
                <div><dt>Industry</dt><dd>Marketing agency</dd></div>
                <div><dt>Location</dt><dd>United Kingdom</dd></div>
                <div><dt>Engagement</dt><dd>GoHighLevel Automation, CRM Pipelines, Lead Follow-up</dd></div>
              </dl>
            </div>

            <div className="case-share">
              <p className="case-sidebar-label">Share</p>
              <div className="case-share-row">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('BrightPath Agency case study')}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on X"
                >
                  <span>X</span>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent('BrightPath Agency case study')}&body=${encodeURIComponent(shareUrl)}`}
                  aria-label="Share by email"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>
          </aside>

          <div className="case-content">
            <article id="overview">
              <h2>Overview</h2>
              <p>BrightPath Agency runs paid campaigns for local service businesses. Leads were landing in three inboxes, a spreadsheet, and a calendar tool that nobody fully owned. Follow-up happened when someone remembered, so warm leads went cold before a call was booked.</p>
              <p>Digtimize built a GoHighLevel system around their actual sales motion: capture, qualify, book, and nurture — with one pipeline the whole team can see.</p>
            </article>

            <article id="challenges">
              <h2>Business Challenges</h2>
              <ul>
                <li><b>Leads with no owner.</b> Facebook, Google, and the website each dumped inquiries into a different place, so the same lead could be called twice or not at all.</li>
                <li><b>Slow first response.</b> After-hours form fills waited until morning, and evening inquiries were often already talking to a competitor.</li>
                <li><b>No qualification.</b> Closers spent calls on people who were not a fit, while serious buyers sat in a generic “new lead” column.</li>
                <li><b>No reporting.</b> Leadership could not see which campaign produced booked calls, only which campaign spent money.</li>
              </ul>
            </article>

            <article id="solution">
              <h2>Solution</h2>
              <ul>
                <li><b>One GoHighLevel CRM.</b> Every source writes into a single contact record with campaign, form, and conversation history attached.</li>
                <li><b>Pipeline built for their close.</b> Stages match how BrightPath actually sells: new, qualified, booked, showed, won, and nurture.</li>
                <li><b>Instant follow-up sequences.</b> SMS and email start within minutes, including after hours, with a calendar link that books straight onto the closer’s day.</li>
                <li><b>Lead scoring and routing.</b> Fit questions on the form send high-intent leads to a human immediately and park the rest in a nurture track.</li>
                <li><b>Source reporting.</b> Dashboards show booked calls and close rate by campaign, so spend follows what actually converts.</li>
              </ul>
            </article>

            <article id="outcomes">
              <h2>Measurable Outcomes</h2>
              <ul>
                <li>Booked discovery calls rose 41% in the first two months after launch.</li>
                <li>Average time to first follow-up dropped from hours to minutes — about 3.5 times faster.</li>
                <li>The team recovered roughly 18 hours a week that used to go into copying leads between tools.</li>
                <li>No-show rate fell because reminders and calendar links live inside the same system.</li>
                <li>Campaign reports now tie ad spend to booked calls instead of form fills.</li>
              </ul>
              <Link className="text-link" to="/contact">
                Start a similar project <ArrowUpRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
