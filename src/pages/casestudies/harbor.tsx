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
  { value: '2.1s', label: 'Average homepage load time' },
  { value: '64%', label: 'More organic enquiry form fills' },
  { value: '1 CMS', label: 'The team now edits without a developer' },
];

const tags = ['WordPress Development', 'SEO Foundations', 'Brand Website'];

export default function Harbor() {
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
            <h1>Harbor & Co replaces a stalled brochure site with a WordPress engine that actually converts</h1>
            <p className="case-hero-lede">How Digtimize turned a slow, uneditable website into a fast WordPress build the Harbor team can update themselves — with a clearer story and a path to enquiry.</p>
            <div className="case-hero-client">
              <b>Harbor & Co</b>
              <span>Canada <i /> harborandco.com</span>
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
                <div><dt>Client</dt><dd>Harbor &amp; Co</dd></div>
                <div><dt>Industry</dt><dd>Interior design studio</dd></div>
                <div><dt>Location</dt><dd>Canada</dd></div>
                <div><dt>Engagement</dt><dd>WordPress Development, SEO Foundations, Brand Website</dd></div>
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Harbor & Co case study')}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on X"
                >
                  <span>X</span>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent('Harbor & Co case study')}&body=${encodeURIComponent(shareUrl)}`}
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
              <p>Harbor & Co is an interior design studio whose website had become a liability. It looked dated, took seconds to load, and every copy change required a developer. Prospective clients were bouncing before they saw a single project.</p>
              <p>Digtimize designed and built a custom WordPress site around Harbor’s portfolio, process, and enquiry flow, then handed the team a CMS they can actually use.</p>
            </article>

            <article id="challenges">
              <h2>Business Challenges</h2>
              <ul>
                <li><b>A site nobody could edit.</b> Project photos, bios, and service copy sat in hardcoded templates, so the live site lagged months behind the work they were doing.</li>
                <li><b>Weak first impression.</b> The homepage did not say who Harbor is for, what they deliver, or how to start — only a slideshow and a contact email.</li>
                <li><b>SEO left on the table.</b> Pages had duplicate titles, thin copy, and no structure for the searches that actually bring design clients.</li>
                <li><b>Performance drag.</b> Uncompressed galleries and leftover plugins made the site feel heavier than the brand.</li>
              </ul>
            </article>

            <article id="solution">
              <h2>Solution</h2>
              <ul>
                <li><b>Custom WordPress theme.</b> Built around Harbor’s photography and typography, with templates for studio, services, journal, and case-style project pages.</li>
                <li><b>Editable content model.</b> Blocks for projects, team, and FAQs so the studio can publish without touching code.</li>
                <li><b>Clear conversion path.</b> Every key page ends in a short enquiry form with project-type fields the team actually uses to qualify.</li>
                <li><b>SEO foundations.</b> Clean URLs, headings, schema, and on-page copy shaped around how clients search for a studio.</li>
                <li><b>Speed and media.</b> Image sizes, lazy loading, and a stripped plugin list so the site feels as considered as the interiors.</li>
              </ul>
            </article>

            <article id="outcomes">
              <h2>Measurable Outcomes</h2>
              <ul>
                <li>Homepage load time sits around 2.1 seconds on a typical connection.</li>
                <li>Organic enquiry form fills rose 64% in the quarter after launch.</li>
                <li>The studio now updates projects and services themselves — one CMS, no developer ticket for every change.</li>
                <li>Bounce rate on mobile dropped once the first screen stated the offer and a next step.</li>
                <li>Project pages rank for the neighbourhood and service terms Harbor actually wants to be found for.</li>
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
