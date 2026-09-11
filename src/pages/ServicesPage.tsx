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
  { number: '01', icon: Workflow, title: 'GoHighLevel Automation & Integration', text: 'CRM setup, pipelines, funnels, and follow-up sequences that keep every opportunity moving.', included: ['CRM setup', 'Custom sales pipelines', 'Automated SMS/email follow-ups', 'Funnels & landing pages', 'Calendar automation', 'Integrations'] },
  { number: '02', icon: Globe2, title: 'Custom WordPress Development', text: 'Fast, flexible websites shaped around your business goals — never a generic template.', included: ['Custom theme design', 'Performance optimization', 'SEO foundations', 'Plugin configuration', 'WooCommerce setup', 'Ongoing maintenance'] },
  { number: '03', icon: Store, title: 'Shopify Store Development', text: 'Conversion-focused stores with clean checkout experiences and useful integrations.', included: ['Store design', 'Checkout optimization', 'App integrations', 'Product page design', 'Theme customization', 'Speed optimization'] },
  { number: '04', icon: Bot, title: 'AI Website Development', text: 'Chatbots, smart search, RAG tools, and intelligent features that make your site work harder.', included: ['AI chatbots', 'Lead qualification', 'RAG systems', 'LLM integrations', 'Smart search', 'Product recommendations'] },
  { number: '05', icon: Code2, title: 'Custom Software & Coding', text: 'Dashboards, internal tools, integrations, and automation systems built around your workflow.', included: ['Custom dashboards', 'Internal tools', 'API integrations', 'Automation systems', 'Database design', 'Cloud deployment'] },
  { number: '06', icon: Sparkles, title: 'Digital Marketing Support', text: 'SEO, funnel copy, campaign support, and conversion tracking for the next stage of growth.', included: ['SEO strategy', 'Funnel copy', 'Campaign support', 'Conversion tracking', 'Analytics setup', 'A/B testing'] },
];

const servicePaths: Record<string, string> = {
  'GoHighLevel Automation & Integration': '/services/gohighlevel-automation',
  'Custom WordPress Development': '/services/web-development',
  'Shopify Store Development': '/services/shopify-development',
  'AI Website Development': '/services/ai-website-development',
  'Custom Software & Coding': '/services/custom-software',
  'Digital Marketing Support': '/services',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>What we do</SectionLabel>
          <h1>Everything you need to <span>build, automate,</span> and grow online.</h1>
          <p>From the first idea to the systems running behind it, we bring strategy, design, and technical execution together — so your digital presence does real work, not just look good.</p>
          <Link className="button button-primary" to="/contact">Get a free project quote <ArrowUpRight size={17} /></Link>
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
