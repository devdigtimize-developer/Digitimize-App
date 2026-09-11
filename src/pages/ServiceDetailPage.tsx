import { ArrowRight, ArrowUpRight, Check, Code2, Globe2, Smartphone, Store, Workflow } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

type ServiceContent = {
  icon: typeof Workflow;
  eyebrow: string;
  title: string;
  description: string;
  outcome: string;
  tools: string[];
  included: string[];
};

const steps = [
  ['Map the opportunity', 'We clarify the audience, workflow, constraints, and measurable outcome before anything is built.'],
  ['Shape the system', 'A focused plan turns the right ideas into an experience your team can actually operate.'],
  ['Build and validate', 'We work in visible stages, testing the important details before launch.'],
  ['Launch and improve', 'The first release gives us a foundation to measure, learn, and keep improving.'],
];

const images = [
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
];

const serviceDetails: Record<string, ServiceContent> = {
  'gohighlevel-automation': { icon: Workflow, eyebrow: 'CRM & automation systems', title: 'Build a lead system that keeps moving after the first conversation.', description: 'GoHighLevel setup, automation, and integration for teams that want fewer missed follow-ups and a clearer path from lead to customer.', outcome: 'From scattered leads to one operating system for growth.', tools: ['GoHighLevel', 'Lead pipelines', 'SMS & email', 'Calendars', 'Webhooks', 'Zapier'], included: ['CRM setup and cleanup', 'Custom sales pipelines', 'Automated SMS and email follow-up', 'Funnels and landing pages', 'Calendar automation', 'Third-party integrations'] },
  'web-development': { icon: Globe2, eyebrow: 'Web development', title: 'A website that gives your business room to grow.', description: 'Strategy, design, and development for fast, clear websites that make your value easier to understand and your next action easier to take.', outcome: 'From a digital brochure to a useful growth platform.', tools: ['WordPress', 'React', 'TypeScript', 'SEO', 'Analytics', 'CMS'], included: ['Custom responsive design', 'WordPress and React development', 'Performance optimization', 'SEO-ready structure', 'CMS and content setup', 'Launch and ongoing support'] },
  'mobile-app-development': { icon: Smartphone, eyebrow: 'Mobile app development', title: 'Mobile products that make the next action effortless.', description: 'Focused mobile experiences designed around real user behavior, connected to the systems your business already depends on.', outcome: 'From a product idea to a useful daily habit.', tools: ['React Native', 'iOS', 'Android', 'APIs', 'Push notifications', 'Analytics'], included: ['Product discovery and UX', 'iOS and Android interfaces', 'Cross-platform app development', 'API and backend integration', 'Analytics and notifications', 'Store launch support'] },
  'ecommerce-development': { icon: Store, eyebrow: 'Ecommerce development', title: 'Commerce experiences designed to turn browsing into buying.', description: 'We build the storefront, product journey, and operational connections that help customers buy with confidence.', outcome: 'From product catalog to a smoother path to checkout.', tools: ['Shopify', 'WooCommerce', 'Payments', 'Inventory', 'Klaviyo', 'Analytics'], included: ['Store strategy and architecture', 'Product and collection design', 'Checkout experience', 'Payment and shipping setup', 'Marketing integrations', 'Analytics and optimization'] },
  'shopify-development': { icon: Store, eyebrow: 'Shopify development', title: 'A Shopify store ready for your next stage of growth.', description: 'A flexible Shopify experience shaped around your products, customers, and operations, with room to keep improving.', outcome: 'From a theme to a store your team can own.', tools: ['Shopify', 'Liquid', 'Shopify Plus', 'Klaviyo', 'Gorgias', 'Recharge'], included: ['Shopify theme customization', 'Custom sections and templates', 'Product page optimization', 'App and fulfillment integrations', 'Speed and conversion improvements', 'Shopify handoff and support'] },
  'custom-software': { icon: Code2, eyebrow: 'Custom software', title: 'Tools and workflows built for the work nobody else sees.', description: 'Practical internal software, dashboards, and integrations that make complex operations easier to understand and run.', outcome: 'From manual work to a system your team can trust.', tools: ['React', 'Node.js', 'Python', 'Postgres', 'APIs', 'Cloud'], included: ['Workflow and technical audit', 'Internal dashboards', 'API and database integrations', 'Role-based access', 'Automation and reporting', 'Cloud deployment'] },
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceDetails[serviceSlug ?? ''] ?? serviceDetails['web-development'];
  const Icon = service.icon;

  return (
    <>
      <section className="page-hero service-detail-hero"><div className="page-hero-glow" /><div className="container page-hero-content"><SectionLabel>{service.eyebrow}</SectionLabel><div className="service-detail-hero-icon"><Icon size={30} /></div><h1>{service.title}</h1><p>{service.description}</p><div className="hero-actions"><Link className="button button-primary" to="/contact">Talk about your project <ArrowUpRight size={17} /></Link><Link className="text-link" to="/services">All services <ArrowRight size={16} /></Link></div></div></section>
      <section className="section service-outcome-section"><div className="container service-outcome-grid"><div><SectionLabel>The outcome</SectionLabel><h2>{service.outcome}</h2></div><p>Good digital work is measured by what becomes clearer, faster, and more useful after launch. We connect the visible experience to the practical work behind it.</p></div></section>

      <section className="section service-process-section"><div className="container"><SectionLabel>Process</SectionLabel><h2>How we deliver <span>the work.</span></h2><div className="service-process-grid">{steps.map(([title, text], index) => <article className="service-process-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section service-tools-section"><div className="container service-tools-inner"><SectionLabel>Tools & technologies</SectionLabel><h2>The right tools for <span>the job.</span></h2><div className="service-tools-list">{service.tools.map((tool) => <span key={tool}><Check size={14} />{tool}</span>)}</div></div></section>

      <section className="section service-cards-section"><div className="container"><div className="section-head"><div><SectionLabel>What good looks like</SectionLabel><h2>Designed for <span>real use.</span></h2></div><p>Every engagement is shaped around the people who use the system and the outcome the business needs.</p></div><div className="service-image-grid">{service.included.slice(0, 3).map((item, index) => <article className="service-image-card" key={item} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,35,.02) 28%, rgba(8,24,35,.88) 100%), url(${images[index]})` }}><div><h3>{item}</h3><p>Built around the details that make the experience clearer, faster, and easier to use.</p></div></article>)}</div></div></section>

      <section className="section service-included-section"><div className="container service-detail-layout"><div><SectionLabel>Included</SectionLabel><h2>A clear scope with <span>room to grow.</span></h2></div><div className="service-detail-checklist">{service.included.map((item) => <div className="service-detail-check" key={item}><span><Check size={16} /></span><p>{item}</p></div>)}</div></div></section>
      <CTASection />
    </>
  );
}
