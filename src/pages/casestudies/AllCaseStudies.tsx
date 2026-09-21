import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared';
import CTASection from '@/components/CTASection';
import CaseCard from '@/components/CaseCard';
import { caseStudies } from '@/pages/casestudies/studies';

export default function AllCaseStudies() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-content">
          <SectionLabel>Case studies</SectionLabel>
          <h1>Work we have shipped for real teams.</h1>
          <p>A look at the systems, sites, and automations we have delivered from Shopify storefronts to CRM pipelines and custom WordPress builds.</p>
        </div>
      </section>

      <section className="section case-studies-index">
        <div className="container">
          <div className="case-studies-index-grid">
            {caseStudies.map((study) => (
              <CaseCard key={study.company} study={study} />
            ))}
          </div>
          <div className="case-studies-index-cta">
            <Link className="button button-primary" to="/contact">
              Talk about a similar project <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
