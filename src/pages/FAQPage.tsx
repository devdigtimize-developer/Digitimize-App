import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

const faqs = [
  ['What is Digtimize?', 'Digtimize is a web development and automation agency helping businesses and marketing agencies build the digital systems they need to grow. We specialize in GoHighLevel automation, custom WordPress and Shopify development, AI-powered web tools, and custom software.'],
  ['How long does a project take?', 'Timelines depend on scope. A GoHighLevel setup might take one to two weeks, while a custom website or software project could take four to eight weeks. After the discovery call, you receive a clear plan with a realistic delivery window before work starts.'],
  ['How does your support work?', 'Post-launch support is available for troubleshooting, improvements, automation management, and ongoing technical guidance. We offer both project-based support and monthly retainers depending on your needs.'],
  ['Do I need to renew anything?', 'Any third-party platform costs or subscriptions (like GoHighLevel, Shopify, or hosting) are separate from our fees and are explained before work begins. Your project scope and ongoing support are kept separate and clear.'],
  ['Can I upgrade or change my package later?', 'Yes. Solutions are built to grow with the business, so new pages, integrations, automations, and support can be added as needs change. We can scale from a one-time setup to a managed retainer at any point.'],
  ['What technologies do you work with?', 'GoHighLevel, WordPress, Shopify, WooCommerce, React, Next.js, Node.js, NestJS, Python, FastAPI, and AI / LLM integrations. We choose the right tool for the job, not the trend of the month.'],
  ['How do you approach data security?', 'Access is kept intentional and limited, integrations are selected carefully, and security considerations are discussed during planning. We follow best practices for authentication, data handling, and API security.'],
  ['How do I get started?', 'Send a few details through the contact form or book a free discovery call. You will get a clear next step without pressure — no sales tactics, no obligation, just an honest conversation about what is possible.'],
];

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>Questions, answered</SectionLabel>
          <h1>Good work starts with <span>clarity.</span></h1>
          <p>Everything you need to know before reaching out. If your question is not here, just ask us directly.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <SectionLabel>Still curious?</SectionLabel>
            <h2>Ask us <span>anything.</span></h2>
            <p>Still deciding what you need? That is exactly what the first conversation is for.</p>
            <Link className="text-link" to="/contact">Get in touch <ArrowRight size={16} /></Link>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${activeFaq === index ? 'open' : ''}`} key={question}>
                <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}>
                  <span>0{index + 1}</span><b>{question}</b><ChevronDown size={18} />
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
