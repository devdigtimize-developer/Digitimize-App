import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Command,
  Globe2,
  LifeBuoy,
  Minus,
  Network,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Workflow,
  Zap,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import brandMark from '@/assets/Favicon.png';
import HeroScrollSection from '@/components/hero/HeroScrollSection';
import StatsCounter from './StatsCounter';
import CaseStudies from '@/components/CaseStudies';
import CTASection from '@/components/CTASection';
import ConnectedCapabilities from '@/components/capabilities/ConnectedCapabilities';

const services = [
  { icon: Workflow, title: 'GoHighLevel Automation', text: 'Capture leads and follow up automatically — so fewer enquiries fall through the cracks.', to: '/services/gohighlevel-automation' },
  { icon: Globe2, title: 'Web Development', text: 'A clear website that explains your business and helps visitors take the next step.', to: '/services/web-development' },
  { icon: Smartphone, title: 'Mobile App Development', text: 'Phone apps for your customers or team, connected to the systems you already use.', to: '/services/mobile-app-development' },
  { icon: ShoppingBag, title: 'Ecommerce Development', text: 'Online shops designed to make browsing and buying feel simple.', to: '/services/ecommerce-development' },
  { icon: Store, title: 'Shopify Development', text: 'Shopify stores with clean product pages, smooth checkout, and room to grow.', to: '/services/shopify-development' },
  { icon: Bot, title: 'AI Website Development', text: 'Helpful on-site assistants and smart search that answer common questions using your information.', to: '/services' },
  { icon: Code2, title: 'Custom Software', text: 'Internal tools and dashboards built around how your team actually works.', to: '/services/custom-software' },
  { icon: Sparkles, title: 'Digital Marketing Support', text: 'Support for SEO, funnel messaging, and tracking so your digital presence keeps improving.', to: '/services' },
];

const shiftModels = [
  {
    variant: 'legacy',
    label: 'Common path',
    title: 'Buy separate pieces',
    points: [
      'A website from one place, tools from another',
      'Vendors who never see the full picture',
      'Systems that do not connect — so work stays manual',
    ],
  },
  {
    variant: 'native',
    label: 'Digtimize path',
    title: 'Build a connected system',
    points: [
      'One clear plan from goals to launch',
      'Web, automation, and tools designed to work together',
      'Direct updates from the people doing the work',
    ],
  },
];

const process = [
  ['01', 'Discovery Call', 'We learn your goals and what success should look like.'],
  ['02', 'Plan & Proposal', 'Clear scope, timeline, and pricing before work begins.'],
  ['03', 'Build', 'We create your solution with regular progress updates.'],
  ['04', 'Launch & Support', 'Go live — then improve and support when agreed.'],
];

const techOrbitInner = ['GoHighLevel', 'AI tools', 'React'];
const techOrbitOuter = ['WordPress', 'Shopify', 'Next.js', 'Node.js', 'Python', 'WooCommerce'];
const techPoints = [
  'Automation that keeps leads moving',
  'Websites and stores built for real customers',
  'Practical AI helpers for your team and visitors',
];

const faqs = [
  ['What is Digtimize?', 'Digtimize helps businesses build websites, online stores, apps, automation, and custom software — so your digital setup supports real growth.'],
  ['Do I need technical knowledge?', 'No. You bring the business goals. We turn them into a clear plan and handle the technical work.'],
  ['How long does a project take?', 'It depends on the scope. After a discovery call, you receive a realistic timeline before work starts.'],
  ['How do I get started?', 'Share a few details on the contact form. We review them and reply with a clear next step — no pressure.'],
];

export default function HomePage() {
  const [servicesInView, setServicesInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = servicesGridRef.current;
    if (!grid) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setServicesInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setServicesInView(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const line = processLineRef.current;
    if (!line) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProcessInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setProcessInView(true);
        observer.disconnect();
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroScrollSection />

      {/* 1 → 2: Problem recognition */}
      <section className="section shift-section">
        <div className="container shift-grid">
          <div className="shift-copy">
            <SectionLabel>A better way to work</SectionLabel>
            <h2>Stop buying disconnected pieces. Start building a system that works together.</h2>
            <p>Many businesses end up with a website from one place, marketing tools from another, and no clear follow-up. Digtimize helps you connect the important pieces — so your digital work supports real business goals.</p>
          </div>

          <div className="shift-models">
            {shiftModels.map(({ variant, label, title, points }) => (
              <article className={`shift-card shift-card-${variant}`} key={variant}>
                <span className="shift-card-label">{label}</span>
                <h3>{title}</h3>
                <ul className="shift-points">
                  {points.map((point) => (
                    <li key={point}>
                      <span className="shift-bullet">
                        {variant === 'native' ? <Check size={11} /> : <Minus size={11} />}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <span className="shift-arrow" aria-hidden="true"><ArrowRight size={17} /></span>
          </div>
        </div>
      </section>

      {/* 3: Services / solutions */}
      <section className="section services-section services-showcase" id="services">
        <div className="container">
          <div className="service-head">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2>Everything you need to show up online, follow up properly, and grow.</h2>
            </div>
            <Link className="service-head-cta" to="/services"><ArrowUpRight size={16} />Explore our services</Link>
          </div>

          <div className={`service-card-grid${servicesInView ? ' is-inview' : ''}`} ref={servicesGridRef}>
            {services.map(({ icon: Icon, title, text, to }) => (
              <Link to={to} className="service-card" key={title}>
                <span className="service-card-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConnectedCapabilities />

      {/* 4: Soft credibility (verified soft stats only) */}
      <StatsCounter />

      {/* 5: Why Digtimize / benefits */}
      <section className="section dark-section capabilities-section" id="why-digtimize">
        <div className="container capabilities-grid">
          <div>
            <SectionLabel>Why Digtimize</SectionLabel>
            <h2>Built for the part <span>after launch.</span></h2>
            <p className="dark-lead">Going live is only the beginning. We build with clear communication, a plan you understand, and optional support so your digital presence keeps improving.</p>
            <Link className="button button-outline" to="/about">Learn about Digtimize <ArrowUpRight size={17} /></Link>
          </div>
          <div className="capability-list">
            {[
              ['Direct communication', 'You work with the people building your project.', Network],
              ['Built for growth', 'We design for enquiries, sales, and clearer day-to-day work — not decoration alone.', Zap],
              ['Clear pricing', 'You see scope and pricing before work begins.', Command],
              ['Post-launch support', 'When agreed, we stay on for fixes and improvements.', LifeBuoy],
            ].map(([title, text, Icon], index) => (
              <div className="capability" key={title as string}>
                <span className="capability-index">0{index + 1}</span>
                <span className="capability-icon"><Icon size={17} /></span>
                <span><b>{title as string}</b><small>{text as string}</small></span>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6: How we work */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-head centered">
            <SectionLabel>How we work</SectionLabel>
            <h2>A clear path from idea to <span>something that works.</span></h2>
            <p>No confusing handoffs. Just a simple process you can follow from the first conversation to launch.</p>
          </div>
          <div className={`process-line${processInView ? ' is-inview' : ''}`} ref={processLineRef}>
            {process.map(([number, title, text]) => (
              <article className="process-item" key={number}>
                <div className="process-marker"><span>{number}</span></div>
                <div className="process-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="home-process-follow">
            <Link className="text-link" to="/work">
              See the full project roadmap <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>

      {/* 7: Work / proof */}
      <CaseStudies />

      {/* 8: Expertise (secondary — after the story is clear) */}
      <section className="section tech-section" id="capabilities">
        <div className="container tech-grid">
          <div className="tech-copy">
            <SectionLabel>Tools we use</SectionLabel>
            <h2>The right tools for your goal.<br /><span>Explained in plain language.</span></h2>
            <p>You do not need to know every platform. We recommend what fits — and we explain why.</p>
            <ul className="tech-points">
              {techPoints.map((point) => (
                <li key={point}><Check size={16} />{point}</li>
              ))}
            </ul>
          </div>

          <div className="tech-orbit" aria-label="Technology tools">
            <div className="tech-orbit-rings" aria-hidden="true">
              <i className="tech-ring tech-ring-a" />
              <i className="tech-ring tech-ring-b" />
              <i className="tech-ring tech-ring-c" />
            </div>

            <div className="tech-orbit-band tech-orbit-band-outer">
              {techOrbitOuter.map((label, index) => (
                <div
                  className="tech-orbit-slot"
                  key={label}
                  style={{ '--i': index, '--n': techOrbitOuter.length } as CSSProperties}
                >
                  <span className="tech-pill"><i />{label}</span>
                </div>
              ))}
            </div>

            <div className="tech-orbit-band tech-orbit-band-inner">
              {techOrbitInner.map((label, index) => (
                <div
                  className="tech-orbit-slot"
                  key={label}
                  style={{ '--i': index, '--n': techOrbitInner.length } as CSSProperties}
                >
                  <span className="tech-pill"><i />{label}</span>
                </div>
              ))}
            </div>

            <div className="tech-center">
              <span className="tech-center-glow" aria-hidden="true" />
              <img className="tech-center-mark" src={brandMark} alt="" />
              <span className="tech-center-word">
                <i className="tech-center-moon" aria-hidden="true" />
                IGTIMIZE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9: Objections / clarity */}
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <SectionLabel>Questions, answered</SectionLabel>
            <h2>Good work starts with <span>clarity.</span></h2>
            <p>Not sure what you need yet? That is exactly what the first conversation is for.</p>
            <Link className="text-link" to="/faq">See all questions <ArrowRight size={16} /></Link>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <div className="faq-question-row">
                  <span className="faq-num">0{index + 1}</span>
                  <b>{question}</b>
                </div>
                <div className="faq-answer-static"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10: Final CTA */}
      <CTASection />
    </>
  );
}
