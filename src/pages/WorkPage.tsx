import WorkHero from './work/WorkHero';
import ProcessRoadmap from './work/ProcessRoadmap';
import SeniorTeamSection from './work/SeniorTeamSection';
import WorkCTA from './work/WorkCTA';

export default function WorkPage() {
  return (
    <div className="work-page">
      <WorkHero />
      <ProcessRoadmap />
      <SeniorTeamSection />
      <WorkCTA />
    </div>
  );
}
