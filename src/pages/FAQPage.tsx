import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

const faqs = [
  ['What is Digtimize?', 'Digtimize helps businesses build websites, online stores, mobile apps, automation systems (including GoHighLevel), practical AI tools, and custom software — so your digital setup supports real growth.'],
  ['Do I need technical knowledge to work with you?', 'No. You bring the business goals. We translate them into a clear plan and handle the technical work.'],
  ['How long does a project take?', 'Timelines depend on the scope. After the discovery call, you receive a clear plan with a realistic delivery window before work starts.'],
  ['How does your support work?', 'Post-launch support is available for troubleshooting, improvements, automation management, and ongoing guidance when it is part of your agreement.'],
  ['Do I need to renew anything?', 'Third-party platform costs (such as GoHighLevel, Shopify, or hosting) are separate from Digtimize fees and are explained before work begins.'],
  ['Can I change or expand later?', 'Yes. Solutions are built to grow with the business, so new pages, connections, automations, and support can be added as needs change.'],
  ['What technologies do you work with?', 'We work with tools such as GoHighLevel, WordPress, Shopify, and modern web platforms. We choose what fits your goal — not the trend of the month.'],
  ['How do I get started?', 'Share a few details through the contact form. You will get a clear next step without pressure — an honest conversation about what is possible.'],
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
          <p>Everything you need to know before reaching out. If your question is not here, ask us directly — you do not need technical language.</p>
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
