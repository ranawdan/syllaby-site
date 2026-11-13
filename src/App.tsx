import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { PainAndShiftSection } from './components/PainAndShiftSection';
import { SolutionAndWorkflowSection } from './components/SolutionAndWorkflowSection';
import { FeaturesAndComparisonSection } from './components/FeaturesAndComparisonSection';
import { SocialProofFaqFooter } from './components/SocialProofFaqFooter';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#090A0F] text-[#F8FAFC]">
      <TopNav />
      <main>
        <HeroSection />
        <PainAndShiftSection />
        <SolutionAndWorkflowSection />
        <FeaturesAndComparisonSection />
        <SocialProofFaqFooter />
      </main>
    </div>
  );
}
