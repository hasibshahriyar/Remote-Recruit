import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeatureGlobalReach from './components/sections/FeatureGlobalReach';
import FeatureFeeFree from './components/sections/FeatureFeeFree';
import FeatureShowcase from './components/sections/FeatureShowcase';
import SignUpCTA from './components/sections/SignUpCTA';
import FAQ from './components/sections/FAQ';
import PricingCards from './components/sections/PricingCards';
import Footer from './components/sections/Footer';

import FooterBackground from './components/ui/FooterBackground';
import { FadeIn } from './components/ui/FadeIn';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-dark overflow-x-hidden relative selection:bg-accent selection:text-white">
      <Navbar />
      <HeroSection />
      
      {/* Container for main content */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
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

      {/* Bottom section with custom Figma background containing Pricing & Footer */}
      <div className="relative w-full mt-12 text-white pb-12 overflow-hidden">
        
        {/* Figma Footer Background (Curve, Gradients, Watermarks) */}
        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none flex flex-col h-full">
          <div className="w-full relative">
            <FooterBackground className="w-full h-auto" />
            {/* Fill remaining space below SVG with the deepest blue to prevent white gaps on tall content */}
            <div className="absolute top-[99%] left-0 w-full h-[3000px] bg-[#1E3E85]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-[150px] md:pt-[250px]">
          <FadeIn direction="up">
            <PricingCards />
          </FadeIn>
        </div>

        <div className="relative z-10 pt-20">
          <Footer />
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
}
