import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import SecondIntroSection from '@/components/sections/SecondIntroSection';
import SurveyGoalSection from '@/components/sections/SurveyGoalSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import ProcessSection from '@/components/sections/ProcessSection';
import WhyParticipateSection from '@/components/sections/WhyParticipateSection';
import CompanySection from '@/components/sections/CompanySection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <SecondIntroSection />
      <SurveyGoalSection />
      <TargetAudienceSection />
      <ProcessSection />
      <WhyParticipateSection />
      <CompanySection />
      <CallToActionSection />
    </main>
  );
}
