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
  { value: '32%', label: 'Faster Shopify checkouts' },
  { value: '28%', label: 'More completed orders' },
  { value: 'Zero', label: 'Lost carts from a broken mobile flow' },
];

const tags = ['Shopify Development', 'Checkout UX', 'Ecommerce'];

export default function NorthlineRetail() {
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
            <h1>Northline Retail's Shopify storefront accelerates checkout by 32%</h1>
            <p className="case-hero-lede">How Digtimize rebuilt the product journey and checkout so a growing catalog could convert on desktop and mobile without adding more staff.</p>
            <div className="case-hero-client">
              <b>Northline Retail</b>
              <span>United States <i /> northlineretail.com</span>
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
                <div><dt>Client</dt><dd>Northline Retail</dd></div>
                <div><dt>Industry</dt><dd>Home &amp; lifestyle retail</dd></div>
                <div><dt>Location</dt><dd>United States</dd></div>
                <div><dt>Engagement</dt><dd>Shopify Development, Checkout UX, Ecommerce</dd></div>
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent("Northline Retail case study")}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on X"
                >
                  <span>X</span>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent('Northline Retail case study')}&body=${encodeURIComponent(shareUrl)}`}
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
              <p>Northline Retail sells home and lifestyle products to customers who browse on their phones and buy in short sessions. Their old Shopify theme could not keep up with a growing catalog: product pages were slow, collections were hard to scan, and checkout dropped a large share of mobile buyers.</p>
              <p>Digtimize rebuilt the storefront around the products people actually buy, cleaned up the collection architecture, and redesigned checkout so the path from product to paid order is short, clear, and stable on every device.</p>
            </article>

            <article id="challenges">
              <h2>Business Challenges</h2>
              <ul>
                <li><b>Fragmented catalog.</b> Collections, filters, and product templates were split across leftover theme sections, so shoppers could not find the right item quickly.</li>
                <li><b>Checkout drop-off.</b> Mobile customers were abandoning carts at the shipping step because the form was long, unclear, and easy to mistype.</li>
                <li><b>Slow product pages.</b> Large unoptimized media and extra apps were pushing load times past the point where buyers stay.</li>
                <li><b>Operations lag.</b> Inventory, discounts, and fulfillment updates were manual, so the storefront often showed stock that was already gone.</li>
              </ul>
            </article>

            <article id="solution">
              <h2>Solution</h2>
              <ul>
                <li><b>Shopify storefront rebuild.</b> A custom theme shaped around Northline's catalog, photography, and brand — not a generic preset.</li>
                <li><b>Collection and search overhaul.</b> Filters, merchandising, and navigation that stay usable as the product count grows.</li>
                <li><b>Checkout UX.</b> A shorter, mobile-first checkout with clearer shipping, payment, and order review.</li>
                <li><b>App and operations wiring.</b> Inventory, email, and fulfillment tools connected so the storefront stays in sync after the sale.</li>
                <li><b>Performance pass.</b> Image, script, and theme cleanup so product pages open fast enough to keep the session moving.</li>
              </ul>
            </article>

            <article id="outcomes">
              <h2>Measurable Outcomes</h2>
              <ul>
                <li>Checkout time on mobile dropped enough to lift completed orders by 32%.</li>
                <li>Completed orders rose 28% in the first 90 days after launch.</li>
                <li>Carts lost to a broken mobile flow fell to zero on the new checkout.</li>
                <li>Product pages load in a little over two seconds on a typical 4G connection.</li>
                <li>The team can add products, promotions, and collections without calling a developer for every change.</li>
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
