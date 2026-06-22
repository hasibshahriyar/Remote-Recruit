import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeatureGlobalReach from './components/sections/FeatureGlobalReach';
import FeatureFeeFree from './components/sections/FeatureFeeFree';
import FeatureShowcase from './components/sections/FeatureShowcase';
import SignUpCTA from './components/sections/SignUpCTA';
import FAQ from './components/sections/FAQ';
import PricingSection from './components/sections/PricingSection';

import { FadeIn } from './components/ui/FadeIn';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-dark overflow-x-hidden relative selection:bg-accent selection:text-white">
      <Navbar />
      <HeroSection />

      <main className="relative z-10 bg-white max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        <FadeIn>
          <FeatureGlobalReach />
        </FadeIn>
        <FadeIn direction="left">
          <FeatureFeeFree />
        </FadeIn>
        <FadeIn>
          <FeatureShowcase />
        </FadeIn>
      </main>

      <FadeIn direction="none">
        <SignUpCTA />
      </FadeIn>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn direction="up">
          <FAQ />
        </FadeIn>
      </div>

      <PricingSection />

      <ScrollToTop />
    </div>
  );
}
