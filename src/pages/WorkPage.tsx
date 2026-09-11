import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';

const projects = [
  { category: 'WordPress Development', title: 'Custom business website', text: 'A fast, SEO-ready WordPress site built around the client\'s brand and lead flow — not a generic template.', tech: 'WordPress · WooCommerce · React', visual: 'one' },
  { category: 'GoHighLevel Automation', title: 'Lead flow system', text: 'Automated CRM pipeline with follow-up sequences so no lead slips through the cracks.', tech: 'GoHighLevel · SMS · Email', visual: 'two' },
  { category: 'Shopify Development', title: 'Conversion-focused store', text: 'A clean Shopify store with optimized checkout and useful app integrations.', tech: 'Shopify · Liquid · Klaviyo', visual: 'three' },
  { category: 'AI Development', title: 'AI-powered support assistant', text: 'A RAG-based chatbot that qualifies leads and answers customer questions in real time.', tech: 'Python · FastAPI · LLM', visual: 'four' },
];

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>Selected work</SectionLabel>
          <h1>Built with intent.<br /><span>Ready for impact.</span></h1>
          <p>Our portfolio is being curated. Here is a preview of the kinds of systems we build — real work will be added as projects launch.</p>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <div className="work-detail-grid">
            {projects.map((project, index) => (
              <div className={`work-detail-card work-visual-${project.visual}`} key={index}>
                <div className="work-detail-visual">
                  <small>PLACEHOLDER PROJECT</small>
                  {project.visual === 'one' && (
                    <div className="work-browser">
                      <div className="browser-bar"><i /><i /><i /><span>yourbusiness.com</span></div>
                      <div className="browser-content">
                        <strong>Make your next<br /><em>move count.</em></strong>
                        <div className="browser-line" />
                        <div className="browser-blocks"><i /><i /><i /></div>
                      </div>
                    </div>
                  )}
                  {project.visual === 'two' && (
                    <div className="flow-preview">
                      <div className="flow-pill"><span /><small>New lead</small><ArrowRight size={13} /></div>
                      <div className="flow-pill offset"><span /><small>Qualified</small><ArrowRight size={13} /></div>
                      <div className="flow-pill"><span /><small>Booked call</small><Check size={13} /></div>
                    </div>
                  )}
                  {project.visual === 'three' && (
                    <div className="store-preview">
                      <div className="store-product"><i /><div className="store-info"><small>Product name</small><b>$49.00</b></div></div>
                      <div className="store-product"><i /><div className="store-info"><small>Product name</small><b>$79.00</b></div></div>
                      <div className="store-product"><i /><div className="store-info"><small>Product name</small><b>$129.00</b></div></div>
                    </div>
                  )}
                  {project.visual === 'four' && (
                    <div className="ai-preview">
                      <div className="ai-preview-dot" />
                      <div className="ai-preview-line" />
                      <div className="ai-preview-line short" />
                      <div className="ai-preview-line" />
                    </div>
                  )}
                </div>
                <div className="work-detail-meta">
                  <span className="work-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="work-tech">{project.tech}</div>
                  <Link className="text-link" to="/contact">View case study <ArrowUpRight size={16} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
