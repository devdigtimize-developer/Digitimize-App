import AboutHero from './about/AboutHero';
import FounderSection from './about/FounderSection';
import CompanyStory from './about/CompanyStory';
import ValuesSection from './about/ValuesSection';
import ExpertiseOverview from './about/ExpertiseOverview';
import WhyDigtimize from './about/WhyDigtimize';
import WorkPreview from './about/WorkPreview';
import AboutCTA from './about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <FounderSection />
      <CompanyStory />
      <ValuesSection />
      <ExpertiseOverview />
      <WhyDigtimize />
      <WorkPreview />
      <AboutCTA />
    </div>
  );
}
