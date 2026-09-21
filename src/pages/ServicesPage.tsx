import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Globe2,
  Sparkles,
  Store,
  Workflow,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

const services = [
  { number: '01', icon: Workflow, title: 'Leadflow Systems', text: 'Set up lead capture and automatic follow-up so enquiries get a timely response and fewer opportunities are missed.', included: ['CRM setup', 'Custom sales pipelines', 'Automated SMS/email follow-ups', 'Funnels & landing pages', 'Calendar automation', 'Integrations'] },
  { number: '02', icon: Globe2, title: 'Web Experience Studio', text: 'A business website that clearly explains what you offer and helps visitors contact you or take the next step.', included: ['Custom theme design', 'Performance optimization', 'SEO foundations', 'Plugin configuration', 'WooCommerce setup', 'Ongoing maintenance'] },
  { number: '03', icon: Store, title: 'Shopify Scale', text: 'An online store with clear product pages and a checkout experience that feels simple to use.', included: ['Store design', 'Checkout optimization', 'App integrations', 'Product page design', 'Theme customization', 'Speed optimization'] },
  { number: '04', icon: Bot, title: 'AI Site Agents', text: 'Helpful on-site assistants and smart search that answer common questions using your business information.', included: ['AI chatbots', 'Lead qualification', 'Smart search', 'Document-based answers', 'Website helpers', 'Product recommendations'] },
  { number: '05', icon: Code2, title: 'Custom Systems', text: 'Internal tools and dashboards built around how your team works when generic software is not enough.', included: ['Custom dashboards', 'Internal tools', 'System connections', 'Automation systems', 'Database design', 'Cloud deployment'] },
  { number: '06', icon: Sparkles, title: 'Growth Ops', text: 'Support for SEO, messaging, and tracking so your website and campaigns keep improving after launch.', included: ['SEO strategy', 'Funnel copy', 'Campaign support', 'Conversion tracking', 'Analytics setup', 'A/B testing'] },
];

const servicePaths: Record<string, string> = {
  'Leadflow Systems': '/services/gohighlevel-automation',
  'Web Experience Studio': '/services/web-development',
  'Shopify Scale': '/services/shopify-development',
  'AI Site Agents': '/services/ai-website-development',
  'Custom Systems': '/services/custom-software',
  'Growth Ops': '/services',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>What we do</SectionLabel>
          <h1>Everything you need to <span>show up, follow up,</span> and grow online.</h1>
          <p>From a clearer website to better lead follow-up, online stores, apps, and custom tools Digtimize helps you build digital solutions that support real business goals.</p>
          <Link className="button button-primary" to="/contact"><span>Tell us about your business</span><ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map(({ number, icon: Icon, title, text, included }) => (
              <div className="service-detail-card" key={title} id={title.toLowerCase().replace(/[^a-z]+/g, '-')}>
                <div className="service-detail-head">
                  <span className="service-number">{number}</span>
                  <span className="service-icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
                <ul className="included-list">
                  {included.map((item) => (
                    <li key={item}><span className="check-dot" />{item}</li>
                  ))}
                </ul>
                <Link className="text-link" to={servicePaths[title] ?? '/contact'}>Learn more <ArrowRight size={15} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
