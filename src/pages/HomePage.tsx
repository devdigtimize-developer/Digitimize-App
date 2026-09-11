import { Link } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Command,
  Database,
  Globe2,
  Layers3,
  LifeBuoy,
  Network,
  Sparkles,
  Store,
  Workflow,
  Zap,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import heroImage from '@/assets/digital-transformation-hero-bg.DE3Zqn52_1LodS7.webp';
import StatsCounter from './StatsCounter';

const services = [
  { number: '01', icon: Workflow, title: 'GoHighLevel Automation & Integration', text: 'CRM setup, pipelines, funnels, and follow-up sequences that keep every opportunity moving.' },
  { number: '02', icon: Globe2, title: 'Custom WordPress Development', text: 'Fast, flexible websites shaped around your business goals — never a generic template.' },
  { number: '03', icon: Store, title: 'Shopify Store Development', text: 'Conversion-focused stores with clean checkout experiences and useful integrations.' },
  { number: '04', icon: Bot, title: 'AI Website Development', text: 'Chatbots, smart search, RAG tools, and intelligent features that make your site work harder.' },
  { number: '05', icon: Code2, title: 'Custom Software & Coding', text: 'Dashboards, internal tools, integrations, and automation systems built around your workflow.' },
  { number: '06', icon: Sparkles, title: 'Digital Marketing Support', text: 'SEO, funnel copy, campaign support, and conversion tracking for the next stage of growth.' },
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
  return (
    <>
      <section className="hero relative overflow-hidden" id="home">
      <div className="hero-image-layer" aria-hidden="true" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero-glow glow-one relative z-10" />
      <div className="hero-glow glow-two relative z-10" />
      <div className="hero-glow glow-three relative z-10" />

      {/* Main Content Grid (z-10 ensures it sits above the video and overlay) */}
      <div className="container hero-grid relative z-10">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />Web development & automation agency</div>
          <h1>Websites and automations that <em>actually</em> grow your business.</h1>
          <p className="hero-sub">Digtimize builds GoHighLevel automations, custom WordPress and Shopify sites, and AI-powered web solutions for businesses and agencies who need work done right the first time.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">Get a free project quote <ArrowUpRight size={17} /></Link>
            <Link className="text-link" to="/work">See our work <ArrowRight size={16} /></Link>
          </div>
          <div className="trust-line">Based in Pakistan <i /> Serving clients across the US, UK & beyond</div>
        </div>

        <div className="hero-visual" aria-label="Automation systems visualization">
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><div className="visual-orbit orbit-c" />
          <div className="visual-core"><span className="core-spark"><Sparkles size={25} /></span><b>systems<br /><strong>that move</strong></b></div>
          <div className="float-card card-crm"><span className="mini-icon purple"><Workflow size={16} /></span><span><small>Lead workflow</small><b>Running smoothly</b></span><span className="status-dot" /></div>
          <div className="float-card card-ai"><span className="mini-icon blue"><Bot size={16} /></span><span><small>AI assistant</small><b>Ready to help</b></span><span className="signal"><i /><i /><i /></span></div>
          <div className="float-card card-data"><span className="mini-icon pink"><Database size={16} /></span><span><small>Connected data</small><b>Always in sync</b></span></div>
          <div className="visual-caption"><span>01</span><span>Automate the ordinary.<br /><b>Build the remarkable.</b></span></div>
        </div>
      </div>

      <Link to="/services" className="scroll-cue relative z-10"><span>Scroll to explore</span><ArrowDownRight size={17} /></Link>
</section>

      <StatsCounter/>

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
