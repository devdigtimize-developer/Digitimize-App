import { Check, Code2, Globe2, Smartphone, Store, Workflow } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';
import WebsiteStory from '@/components/web-story/WebsiteStory';
import WebDevStats from '@/components/web-story/WebDevStats';
import MobileStoryVisual from '@/components/web-story/MobileStoryVisual';
import { mobileStorySlides } from '@/components/web-story/mobileStorySlides';
import FieldStoryVisual from '@/components/web-story/FieldStoryVisual';
import { ghlStorySlides } from '@/components/web-story/ghlStorySlides';
import { ecomStorySlides } from '@/components/web-story/ecomStorySlides';
import { shopifyStorySlides } from '@/components/web-story/shopifyStorySlides';
import { softwareStorySlides } from '@/components/web-story/softwareStorySlides';
import { GhlWorkflowHero } from '@/components/ghl-workflow';
import {
  WebExperienceHero,
  MobileProductHero,
  CommerceHero,
  ShopifyScaleHero,
  CustomSystemsHero,
} from '@/components/service-heroes';

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

const fieldLayouts = {
  'gohighlevel-automation': {
    theme: 'default' as const,
    processClass: 'webdev-process',
    storyClass: 'webstory-mid',
    slides: ghlStorySlides,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80',
    heading: (
      <>
        Lead systems<br />
        built to keep<br />
        <span className="hero-story-accent">every conversation moving.</span>
      </>
    ),
    lede: 'GoHighLevel pipelines, follow-up, funnels, and calendars set up around how you actually sell, so leads stop stalling after the first message.',
  },
  'ecommerce-development': {
    theme: 'default' as const,
    processClass: 'webdev-process',
    storyClass: 'webstory-mid',
    slides: ecomStorySlides,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=80',
    heading: (
      <>
        Commerce built<br />
        to turn browsing<br />
        <span className="hero-story-accent">into buying.</span>
      </>
    ),
    lede: 'Storefront, product journey, checkout, and operations connected so customers can buy with confidence on desktop and mobile.',
  },
  'shopify-development': {
    theme: 'default' as const,
    processClass: 'webdev-process',
    storyClass: 'webstory-mid',
    slides: shopifyStorySlides,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80',
    brandMark: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
    heading: (
      <>
        Shopify stores<br />
        built for the<br />
        <span className="hero-story-accent">next stage of growth.</span>
      </>
    ),
    lede: 'Theme, sections, checkout, and apps shaped around your catalog so the team can merchandise in Shopify, not wait on a developer for every change.',
  },
};

const images = [
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
];

const serviceDetails: Record<string, ServiceContent> = {
  'gohighlevel-automation': { icon: Workflow, eyebrow: 'CRM & automation systems', title: 'Build a lead system that keeps moving after the first conversation.', description: 'GoHighLevel setup, automation, and integration for teams that want fewer missed follow-ups and a clearer path from lead to customer.', outcome: 'From scattered leads to one operating system for growth.', tools: ['GoHighLevel', 'Zapier', 'Make', 'Twilio', 'Mailgun', 'Google Calendar'], included: ['CRM setup and cleanup', 'Custom sales pipelines', 'Automated SMS and email follow-up', 'Funnels and landing pages', 'Calendar automation', 'Third-party integrations'] },
  'web-development': { icon: Globe2, eyebrow: 'Web development', title: 'A website that gives your business room to grow.', description: 'Strategy, design, and development for fast, clear websites that make your value easier to understand and your next action easier to take.', outcome: 'From a digital brochure to a useful growth platform.', tools: ['React', 'Next.js', 'TypeScript', 'WordPress', 'Tailwind CSS', 'Figma'], included: ['Custom responsive design', 'WordPress and React development', 'Performance optimization', 'SEO-ready structure', 'CMS and content setup', 'Launch and ongoing support'] },
  'mobile-app-development': { icon: Smartphone, eyebrow: 'Mobile app development', title: 'Mobile products that make the next action effortless.', description: 'Focused mobile experiences designed around real user behavior, connected to the systems your business already depends on.', outcome: 'From a product idea to a useful daily habit.', tools: ['React Native', 'Expo', 'Firebase', 'TestFlight', 'App Store Connect', 'Google Play Console'], included: ['Product discovery and UX', 'iOS and Android interfaces', 'Cross-platform app development', 'API and backend integration', 'Analytics and notifications', 'Store launch support'] },
  'ecommerce-development': { icon: Store, eyebrow: 'Ecommerce development', title: 'Commerce experiences designed to turn browsing into buying.', description: 'We build the storefront, product journey, and operational connections that help customers buy with confidence.', outcome: 'From product catalog to a smoother path to checkout.', tools: ['WooCommerce', 'Stripe', 'PayPal', 'ShipStation', 'Mailchimp', 'Google Analytics 4'], included: ['Store strategy and architecture', 'Product and collection design', 'Checkout experience', 'Payment and shipping setup', 'Marketing integrations', 'Analytics and optimization'] },
  'shopify-development': { icon: Store, eyebrow: 'Shopify development', title: 'A Shopify store ready for your next stage of growth.', description: 'A flexible Shopify experience shaped around your products, customers, and operations, with room to keep improving.', outcome: 'From a theme to a store your team can own.', tools: ['Shopify', 'Liquid', 'Klaviyo', 'Recharge', 'Judge.me', 'Gorgias'], included: ['Shopify theme customization', 'Custom sections and templates', 'Product page optimization', 'App and fulfillment integrations', 'Speed and conversion improvements', 'Shopify handoff and support'] },
  'custom-software': { icon: Code2, eyebrow: 'Custom software', title: 'Tools and workflows built for the work nobody else sees.', description: 'Practical internal software, dashboards, and integrations that make complex operations easier to understand and run.', outcome: 'From manual work to a system your team can trust.', tools: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'Docker', 'AWS'], included: ['Workflow and technical audit', 'Internal dashboards', 'API and database integrations', 'Role-based access', 'Automation and reporting', 'Cloud deployment'] },
};

function ServiceTools({ tools }: { tools: string[] }) {
  return (
    <section className="section service-tools-section">
      <div className="container service-tools-inner">
        <SectionLabel>Tools & technologies</SectionLabel>
        <h2>The right tools for <span>the job.</span></h2>
        <div className="service-tools-list">
          {tools.map((tool) => <span key={tool}><Check size={14} />{tool}</span>)}
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceDetails[serviceSlug ?? ''] ?? serviceDetails['web-development'];
  const isWebDev = serviceSlug === 'web-development';
  const isMobileApp = serviceSlug === 'mobile-app-development';

  const field = fieldLayouts[serviceSlug as keyof typeof fieldLayouts];

  if (field) {
    const isGhl = serviceSlug === 'gohighlevel-automation';

    return (
      <div className="service-page">
        {isGhl ? (
          <GhlWorkflowHero />
        ) : serviceSlug === 'ecommerce-development' ? (
          <CommerceHero />
        ) : (
          <ShopifyScaleHero />
        )}
        <WebDevStats />
        <WebsiteStory
          id={isGhl ? 'ghl-story' : undefined}
          className={field.storyClass}
          slides={field.slides}
          Visual={FieldStoryVisual}
          ariaLabel={`${service.eyebrow} slides`}
        />
        <section className="section service-outcome-section"><div className="container service-outcome-grid"><div><SectionLabel>The outcome</SectionLabel><h2>{service.outcome}</h2></div><p>Good digital work is measured by what becomes clearer, faster, and more useful after launch. We connect the visible experience to the practical work behind it.</p></div></section>
        <section className={`section service-process-section ${field.processClass}`}>
          <div className="container">
            <SectionLabel>Process</SectionLabel>
            <h2>How we deliver <span>the work.</span></h2>
            <div className="service-process-grid">
              {steps.map(([title, text], index) => (
                <article className="service-process-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ServiceTools tools={service.tools} />
        <section className="section service-cards-section"><div className="container"><div className="section-head"><div><SectionLabel>What good looks like</SectionLabel><h2>Designed for <span>real use.</span></h2></div><p>Every engagement is shaped around the people who use the system and the outcome the business needs.</p></div><div className="service-image-grid">{service.included.slice(0, 3).map((item, index) => <article className="service-image-card" key={item} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,35,.02) 28%, rgba(8,24,35,.88) 100%), url(${images[index]})` }}><div><h3>{item}</h3><p>Built around the details that make the experience clearer, faster, and easier to use.</p></div></article>)}</div></div></section>
        <section className="section service-included-section"><div className="container service-detail-layout"><div><SectionLabel>Included</SectionLabel><h2>A clear scope with <span>room to grow.</span></h2></div><div className="service-detail-checklist">{service.included.map((item) => <div className="service-detail-check" key={item}><span><Check size={16} /></span><p>{item}</p></div>)}</div></div></section>
        <CTASection />
      </div>
    );
  }

  if (isMobileApp) {
    return (
      <div className="service-page">
        <MobileProductHero />
        <WebDevStats />
        <WebsiteStory
          className="webstory-mid"
          slides={mobileStorySlides}
          Visual={MobileStoryVisual}
          ariaLabel="Mobile app development slides"
        />
        <section className="section service-outcome-section"><div className="container service-outcome-grid"><div><SectionLabel>The outcome</SectionLabel><h2>{service.outcome}</h2></div><p>Good digital work is measured by what becomes clearer, faster, and more useful after launch. We connect the visible experience to the practical work behind it.</p></div></section>
        <section className="section service-process-section webdev-process">
          <div className="container">
            <SectionLabel>Process</SectionLabel>
            <h2>How we deliver <span>the work.</span></h2>
            <div className="service-process-grid">
              {steps.map(([title, text], index) => (
                <article className="service-process-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ServiceTools tools={service.tools} />
        <section className="section service-cards-section"><div className="container"><div className="section-head"><div><SectionLabel>What good looks like</SectionLabel><h2>Designed for <span>real use.</span></h2></div><p>Every engagement is shaped around the people who use the system and the outcome the business needs.</p></div><div className="service-image-grid">{service.included.slice(0, 3).map((item, index) => <article className="service-image-card" key={item} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,35,.02) 28%, rgba(8,24,35,.88) 100%), url(${images[index]})` }}><div><h3>{item}</h3><p>Built around the details that make the experience clearer, faster, and easier to use.</p></div></article>)}</div></div></section>
        <section className="section service-included-section"><div className="container service-detail-layout"><div><SectionLabel>Included</SectionLabel><h2>A clear scope with <span>room to grow.</span></h2></div><div className="service-detail-checklist">{service.included.map((item) => <div className="service-detail-check" key={item}><span><Check size={16} /></span><p>{item}</p></div>)}</div></div></section>
        <CTASection />
      </div>
    );
  }

  if (isWebDev) {
    return (
      <div className="service-page">
        <WebExperienceHero />
        <WebDevStats />
        <WebsiteStory className="webstory-mid" />
        <section className="section service-outcome-section"><div className="container service-outcome-grid"><div><SectionLabel>The outcome</SectionLabel><h2>{service.outcome}</h2></div><p>Good digital work is measured by what becomes clearer, faster, and more useful after launch. We connect the visible experience to the practical work behind it.</p></div></section>
        <section className="section service-process-section webdev-process">
          <div className="container">
            <SectionLabel>Process</SectionLabel>
            <h2>How we deliver <span>the work.</span></h2>
            <div className="service-process-grid">
              {steps.map(([title, text], index) => (
                <article className="service-process-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ServiceTools tools={service.tools} />
        <section className="section service-cards-section"><div className="container"><div className="section-head"><div><SectionLabel>What good looks like</SectionLabel><h2>Designed for <span>real use.</span></h2></div><p>Every engagement is shaped around the people who use the system and the outcome the business needs.</p></div><div className="service-image-grid">{service.included.slice(0, 3).map((item, index) => <article className="service-image-card" key={item} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,35,.02) 28%, rgba(8,24,35,.88) 100%), url(${images[index]})` }}><div><h3>{item}</h3><p>Built around the details that make the experience clearer, faster, and easier to use.</p></div></article>)}</div></div></section>
        <section className="section service-included-section"><div className="container service-detail-layout"><div><SectionLabel>Included</SectionLabel><h2>A clear scope with <span>room to grow.</span></h2></div><div className="service-detail-checklist">{service.included.map((item) => <div className="service-detail-check" key={item}><span><Check size={16} /></span><p>{item}</p></div>)}</div></div></section>
        <CTASection />
      </div>
    );
  }

  return (
    <div className="service-page">
      <CustomSystemsHero />
      <WebDevStats />
      <WebsiteStory
        className="webstory-mid"
        slides={softwareStorySlides}
        Visual={FieldStoryVisual}
        ariaLabel="Custom software slides"
      />
      <section className="section service-outcome-section"><div className="container service-outcome-grid"><div><SectionLabel>The outcome</SectionLabel><h2>{service.outcome}</h2></div><p>Good digital work is measured by what becomes clearer, faster, and more useful after launch. We connect the visible experience to the practical work behind it.</p></div></section>

      <section className="section service-process-section webdev-process"><div className="container"><SectionLabel>Process</SectionLabel><h2>How we deliver <span>the work.</span></h2><div className="service-process-grid">{steps.map(([title, text], index) => <article className="service-process-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <ServiceTools tools={service.tools} />

      <section className="section service-cards-section"><div className="container"><div className="section-head"><div><SectionLabel>What good looks like</SectionLabel><h2>Designed for <span>real use.</span></h2></div><p>Every engagement is shaped around the people who use the system and the outcome the business needs.</p></div><div className="service-image-grid">{service.included.slice(0, 3).map((item, index) => <article className="service-image-card" key={item} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,35,.02) 28%, rgba(8,24,35,.88) 100%), url(${images[index]})` }}><div><h3>{item}</h3><p>Built around the details that make the experience clearer, faster, and easier to use.</p></div></article>)}</div></div></section>

      <section className="section service-included-section"><div className="container service-detail-layout"><div><SectionLabel>Included</SectionLabel><h2>A clear scope with <span>room to grow.</span></h2></div><div className="service-detail-checklist">{service.included.map((item) => <div className="service-detail-check" key={item}><span><Check size={16} /></span><p>{item}</p></div>)}</div></div></section>
      <CTASection />
    </div>
  );
}
