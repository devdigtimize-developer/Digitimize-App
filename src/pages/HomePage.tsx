import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Command,
  Globe2,
  Layers3,
  LifeBuoy,
  Minus,
  Network,
  Sparkles,
  Store,
  Workflow,
  Zap,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import heroSlideOne from '@/assets/home-hero-slide1-bg.DhF3_89m_m8g8W.webp';
import heroSlideTwo from '@/assets/digital-transformation-hero-bg.DE3Zqn52_1LodS7.webp';
import StatsCounter from './StatsCounter';

/* Slide interval. The dot progress bar reads this via a CSS custom property,
   so changing it here keeps the animation in sync. */
const HERO_SLIDE_MS = 6000;

const heroSlides = [
  {
    image: heroSlideOne,
    /* Sampled from each image's own edges so the panel blends into the page. */
    backdrop: '#000c26',
    eyebrow: 'Web development & automation agency',
    titleStart: 'Websites and automations that ',
    titleAccent: 'actually',
    titleEnd: ' grow your business.',
    sub: 'Digtimize builds GoHighLevel automations, custom WordPress and Shopify sites, and AI-powered web solutions for businesses and agencies who need work done right the first time.',
    primary: { label: 'Get a free project quote', to: '/contact' },
    secondary: { label: 'See our work', to: '/work' },
  },
  {
    image: heroSlideTwo,
    backdrop: '#02070f',
    eyebrow: 'AI, automation & custom software',
    titleStart: 'Systems that ',
    titleAccent: 'do more',
    titleEnd: ' of the work for you.',
    sub: 'From CRM pipelines and follow-up sequences to chatbots, smart search, and internal dashboards, we wire intelligent automation into the tools your team already uses every day.',
    primary: { label: 'Explore an AI project', to: '/contact' },
    secondary: { label: 'See our services', to: '/services' },
  },
];

const services = [
  { number: '01', icon: Workflow, title: 'GoHighLevel Automation & Integration', text: 'CRM setup, pipelines, funnels, and follow-up sequences that keep every opportunity moving.' },
  { number: '02', icon: Globe2, title: 'Custom WordPress Development', text: 'Fast, flexible websites shaped around your business goals — never a generic template.' },
  { number: '03', icon: Store, title: 'Shopify Store Development', text: 'Conversion-focused stores with clean checkout experiences and useful integrations.' },
  { number: '04', icon: Bot, title: 'AI Website Development', text: 'Chatbots, smart search, RAG tools, and intelligent features that make your site work harder.' },
  { number: '05', icon: Code2, title: 'Custom Software & Coding', text: 'Dashboards, internal tools, integrations, and automation systems built around your workflow.' },
  { number: '06', icon: Sparkles, title: 'Digital Marketing Support', text: 'SEO, funnel copy, campaign support, and conversion tracking for the next stage of growth.' },
];

const platforms = [
  { name: 'GoHighLevel', icon: Workflow, count: '60+', metric: 'Systems live', text: 'CRM, pipelines, and follow-up automation built to keep every lead moving.' },
  { name: 'WordPress', icon: Globe2, count: '80+', metric: 'Sites shipped', text: 'Custom themes and blocks shaped around your goals — never a generic template.' },
  { name: 'Shopify', icon: Store, count: '35+', metric: 'Stores built', text: 'Conversion-focused storefronts with clean checkout and useful integrations.' },
  { name: 'AI / LLMs', icon: Bot, count: '25+', metric: 'Tools deployed', text: 'Chatbots, RAG search, and smart features wired into the systems you already run.' },
];

const shiftModels = [
  {
    variant: 'legacy',
    label: 'Traditional model',
    title: 'Buy deliverables',
    points: [
      'Timelines set by headcount, not by systems',
      'Each vendor delivers a slice, never the integration',
      'Disconnected tools that cannot feed each other',
    ],
  },
  {
    variant: 'native',
    label: 'Digtimize model',
    title: 'Buy outcomes',
    points: [
      'Automation embedded in delivery cuts timelines in half',
      'One team across strategy, build, and ongoing support',
      'Priced and measured against the business outcome',
    ],
  },
];

const process = [
  ['01', 'Discovery Call', 'Understand the business, goals, and definition of success.'],
  ['02', 'Plan & Proposal', 'Clear scope, timeline, and fixed pricing before work begins.'],
  ['03', 'Build', 'Design and development with regular progress updates.'],
  ['04', 'Launch & Support', 'Testing, deployment, optimization, and post-launch support.'],
];

const faqs = [
  ['What is Digtimize?', 'Digtimize is a web development and automation agency helping businesses and marketing agencies build the digital systems they need to grow.'],
  ['How long does a project take?', 'Timelines depend on scope. After the discovery call, you receive a clear plan with a realistic delivery window before work starts.'],
  ['How does your support work?', 'Post-launch support is available for troubleshooting, improvements, automation management, and ongoing technical guidance.'],
  ['How do I get started?', 'Send a few details through the contact form or book a free discovery call. You will get a clear next step without pressure.'],
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPaused, setSlidesPaused] = useState(false);

  useEffect(() => {
    if (slidesPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(
      () => setActiveSlide((current) => (current + 1) % heroSlides.length),
      HERO_SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [activeSlide, slidesPaused]);

  const slide = heroSlides[activeSlide];

  return (
    <>
      <section
        className={`hero hero-slider ${slidesPaused ? 'is-paused' : ''}`}
        id="home"
        style={{
          '--hero-slide-duration': `${HERO_SLIDE_MS}ms`,
          '--hero-backdrop': slide.backdrop,
        } as CSSProperties}
        onMouseEnter={() => setSlidesPaused(true)}
        onMouseLeave={() => setSlidesPaused(false)}
      >
        <div className="hero-media" aria-hidden="true">
          {heroSlides.map((item, index) => (
            <img
              key={item.image}
              src={item.image}
              alt=""
              className={`hero-media-img ${index === activeSlide ? 'is-active' : ''}`}
            />
          ))}
        </div>

        <div className="container hero-slider-inner">
          <div className="hero-lead">
            <div className="hero-copy hero-slide-copy" key={activeSlide}>
              <div className="eyebrow"><span className="eyebrow-dot" />{slide.eyebrow}</div>
              <h1>{slide.titleStart}<span className="hero-accent">{slide.titleAccent}</span>{slide.titleEnd}</h1>
              <p className="hero-sub">{slide.sub}</p>
              <div className="hero-actions">
                <Link className="button button-primary" to={slide.primary.to}>{slide.primary.label} <ArrowUpRight size={17} /></Link>
                <Link className="text-link" to={slide.secondary.to}>{slide.secondary.label} <ArrowRight size={16} /></Link>
              </div>
              <div className="trust-line">Based in Pakistan <i /> Serving clients across the US, UK & beyond</div>
            </div>

            <div className="hero-controls">
              <div className="hero-dots">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.image}
                    type="button"
                    className={`hero-dot ${index === activeSlide ? 'is-active' : ''}`}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={index === activeSlide}
                    onClick={() => setActiveSlide(index)}
                  >
                    <span className="hero-dot-fill" />
                  </button>
                ))}
              </div>

              <div className="hero-arrows">
                <button
                  type="button"
                  className="hero-arrow"
                  aria-label="Previous slide"
                  onClick={() => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  className="hero-arrow"
                  aria-label="Next slide"
                  onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter/>

      <section className="section shift-section">
        <div className="container shift-grid">
          <div className="shift-copy">
            <SectionLabel>The shift</SectionLabel>
            <h2>The shift to automated operations is already here.</h2>
            <p>Most agencies still sell deliverables. We build the people, tooling, and operating model around your business so automation is owned across the company, embedded in delivery, and ultimately tied to measurable outcomes.</p>
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

      <section className="section why-platforms-section" id="why-digtimize">
        <div className="container">
          <div className="why-platforms-head">
            <div className="why-platforms-copy">
              <SectionLabel>Why Digtimize</SectionLabel>
              <h2>Built on the platforms.<br /><span>Backed by the bench.</span></h2>
              <p>A senior team across the platforms your business already runs on.</p>
            </div>
            <Link className="why-platforms-cta" to="/contact"><ArrowUpRight size={16} />Let's Work Together</Link>
          </div>
          <div className="why-platforms-grid">
            {platforms.map(({ name, icon: Icon, count, metric, text }) => (
              <article className="why-platform-card" key={name}>
                <div className="why-platform-top">
                  <span className="why-platform-badge"><Icon size={16} />{name}</span>
                  <span className="why-platform-count"><b>{count}</b><small>{metric}</small></span>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-head services-head">
            <div><SectionLabel>What we do</SectionLabel><h2>Everything you need to <span>build, automate,</span> and grow online.</h2></div>
            <p>From the first idea to the systems running behind it, we bring strategy, design, and technical execution together.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text }) => (
              <Link to="/services" className="service-item" key={title}>
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="service-arrow"><ArrowUpRight size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section capabilities-section" id="about">
        <div className="container capabilities-grid">
          <div>
            <SectionLabel>Why Digtimize</SectionLabel>
            <h2>Built for the part <span>after launch.</span></h2>
            <p className="dark-lead">A polished launch is the beginning. We build the thinking, infrastructure, and support around it so your digital presence keeps earning its place.</p>
            <Link className="button button-outline" to="/about">Work with us <ArrowUpRight size={17} /></Link>
          </div>
          <div className="capability-list">
            {[
              ['Direct communication', 'You work directly with the people building your project.', Network],
              ['Built for growth', 'Every website and automation moves visitors toward becoming customers.', Zap],
              ['Fixed pricing', 'Clear pricing and scope before work begins.', Command],
              ['Post-launch support', 'We do not disappear after delivery.', LifeBuoy],
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

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-head centered">
            <SectionLabel>How we work</SectionLabel>
            <h2>A better way to build <span>digital systems.</span></h2>
            <p>No black boxes. No vague handoffs. Just a clear path from a good idea to something that works.</p>
          </div>
          <div className="process-line">
            {process.map(([number, title, text], index) => (
              <div className="process-item" key={number}>
                <div className="process-marker"><span>{number}</span>{index < process.length - 1 && <i />}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-head">
            <div><SectionLabel>Selected work</SectionLabel><h2>Built with intent.<br /><span>Ready for impact.</span></h2></div>
            <p>Our portfolio is being curated. Here is a preview of the kinds of systems we build — real work will be added as projects launch.</p>
          </div>
          <div className="work-grid">
            <div className="work-feature work-visual-one">
              <div className="work-browser">
                <div className="browser-bar"><i /><i /><i /><span>yourbusiness.com</span></div>
                <div className="browser-content">
                  <small>PLACEHOLDER PROJECT</small>
                  <strong>Make your next<br /><em>move count.</em></strong>
                  <div className="browser-line" />
                  <div className="browser-blocks"><i /><i /><i /></div>
                </div>
              </div>
              <div className="work-meta"><span>WordPress Development</span><b>Custom business website <ArrowUpRight size={16} /></b></div>
            </div>
            <div className="work-feature work-visual-two">
              <div className="flow-preview">
                <div className="flow-pill"><span /><small>New lead</small><ArrowRight size={13} /></div>
                <div className="flow-pill offset"><span /><small>Qualified</small><ArrowRight size={13} /></div>
                <div className="flow-pill"><span /><small>Booked call</small><Check size={13} /></div>
              </div>
              <div className="work-meta"><span>GoHighLevel Automation</span><b>Lead flow system <ArrowUpRight size={16} /></b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-section">
        <div className="ai-glow" />
        <div className="container ai-grid">
          <div>
            <SectionLabel>The next layer</SectionLabel>
            <h2>AI-powered websites and tools that <span>do more of the work.</span></h2>
            <p>Useful AI is not about adding a chatbot and calling it innovation. It is about making the right information easier to find and the next action easier to take.</p>
            <Link className="button button-primary" to="/contact">Explore an AI project <ArrowUpRight size={17} /></Link>
          </div>
          <div className="ai-panel">
            <div className="ai-panel-top"><span><i /> Digtimize intelligence</span><small>LIVE SYSTEM</small></div>
            <div className="ai-chat">
              <div className="chat-avatar"><Bot size={18} /></div>
              <div className="chat-bubble">How can I help your customers move forward?</div>
            </div>
            <div className="ai-suggestions">
              <span>Qualify a new lead <ArrowUpRight size={13} /></span>
              <span>Find an answer <ArrowUpRight size={13} /></span>
              <span>Recommend next steps <ArrowUpRight size={13} /></span>
            </div>
            <div className="ai-panel-footer"><span><Network size={14} /> Connected to your systems</span><span className="pulse-line" /></div>
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container tech-grid">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2>Tools change.<br /><span>Good thinking lasts.</span></h2>
            <p>We choose the right technology for the job, not the trend of the month.</p>
          </div>
          <div className="tech-ecosystem">
            {['GoHighLevel', 'WordPress', 'Shopify', 'WooCommerce', 'React', 'Next.js', 'Node.js', 'Python', 'AI / LLMs'].map((label, index) => (
              <button className={`tech-pill tech-${index + 1}`} key={label}><span />{label}</button>
            ))}
            <div className="tech-center"><Layers3 size={23} /><small>right-fit<br />technology</small></div>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="section-head centered">
            <SectionLabel>Simple, transparent packages</SectionLabel>
            <h2>A clear place to <span>start.</span></h2>
            <p>Every business is different. These starting points make the conversation easier without forcing your project into a box.</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <span className="price-tag">Foundation</span>
              <h3>GoHighLevel Setup</h3>
              <p>CRM setup, pipeline build, and one automated follow-up sequence.</p>
              <div className="price">$497 <small>starting at</small></div>
              <Link to="/contact">Get started <ArrowUpRight size={16} /></Link>
            </div>
            <div className="price-card featured">
              <span className="price-tag">Ongoing</span>
              <h3>GoHighLevel Managed Retainer</h3>
              <p>Ongoing management, automation, and support for a system that keeps improving.</p>
              <div className="price">$400<small>/ month</small></div>
              <Link to="/contact">Talk about support <ArrowUpRight size={16} /></Link>
            </div>
            <div className="price-card">
              <span className="price-tag">Custom build</span>
              <h3>Websites, stores & software</h3>
              <p>WordPress, Shopify, AI tools, and custom coding shaped around your goals.</p>
              <div className="price price-contact">Contact us <small>for a starting price</small></div>
              <Link to="/contact">Get a custom quote <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <SectionLabel>Questions, answered</SectionLabel>
            <h2>Good work starts with <span>clarity.</span></h2>
            <p>Still deciding what you need? That is exactly what the first conversation is for.</p>
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
    </>
  );
}
