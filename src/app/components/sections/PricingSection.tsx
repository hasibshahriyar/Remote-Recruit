import React from 'react';
import FeatureCheckItem from '../ui/FeatureCheckItem';
import { FadeIn } from '../ui/FadeIn';
import Footer from './Footer';

function PremiumCrystalIcon() {
  return (
    <div
      className="w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm"
      aria-hidden="true"
    >
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path d="M5 0L9 4.5L5 12L1 4.5L5 0Z" fill="#1E3E85" />
        <path d="M5 0L1 4.5H9L5 0Z" fill="#2B5FA3" />
        <path d="M5 12L1 4.5H9L5 12Z" fill="#1A3570" />
        <path d="M5 4.5L1 4.5L5 0L9 4.5L5 4.5Z" fill="#52B4DA" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

function PricingCards() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-10 max-w-5xl mx-auto">
      {/* Free / Basic */}
      <div className="w-full lg:flex-1 bg-white rounded-[32px] p-6 sm:p-8 shadow-card border border-[#F6F4FF] flex flex-col text-left">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1">
          <div className="w-full sm:w-[160px] lg:w-[180px] flex flex-col items-center justify-center p-5 sm:p-6 text-center shrink-0 rounded-2xl bg-[#ECF2FF]">
            <h3 className="text-4xl font-bold text-[#52B4DA] mb-1">Free</h3>
            <p className="text-gray-light font-medium text-lg">Basic</p>
          </div>

          <div className="flex-1 space-y-0.5 py-2 sm:py-4">
            <FeatureCheckItem label="1 Active Job" active />
            <FeatureCheckItem label="Basic List Placement" active />
            <FeatureCheckItem label="Unlimited Job Applicants" active={false} />
            <FeatureCheckItem label="Invite Anyone to Apply to Your Jobs" active={false} />
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-6 rounded-[20px] py-4 text-primary font-bold text-lg border-2 border-primary hover:bg-[#F4F7FF] transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Premium */}
      <div className="w-full lg:flex-1 bg-white rounded-[32px] p-6 sm:p-8 shadow-card-strong border border-[#F6F4FF] flex flex-col text-left overflow-visible">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1 overflow-visible">
          <div className="w-full sm:w-[160px] lg:w-[200px] flex flex-col items-center justify-center p-5 sm:p-6 pt-7 sm:pt-8 text-center shrink-0 rounded-2xl bg-[#ECF2FF] relative overflow-visible">
            <div className="absolute top-[-10px] left-[10px] z-10 bg-tag rounded-full pl-1.5 pr-3.5 py-1 flex items-center gap-1.5 shadow-sm">
              <PremiumCrystalIcon />
              <span className="text-dark text-sm font-bold leading-none">Premium</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-1">$79.99</h3>
            <p className="text-gray-light font-medium">Per Month</p>
          </div>

          <div className="flex-1 space-y-0.5 py-2 sm:py-4">
            <FeatureCheckItem label="Unlimited Job Posts" active />
            <FeatureCheckItem label="Instant Job Post Approval" active />
            <FeatureCheckItem label="Premium List Placement" active />
            <FeatureCheckItem label="Unlimited Job Applicants" active />
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-6 rounded-[20px] py-4 bg-gradient-to-r from-[#2B5FA3] to-[#1E3E85] text-white font-bold text-lg hover:opacity-95 transition-opacity shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      aria-labelledby="pricing-heading"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center mb-[-140px] sm:mb-[-160px] lg:mb-[-180px]">
            <h2
              id="pricing-heading"
              className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-dark text-center"
            >
              Help Is One Click Away
            </h2>
            <div className="w-full mt-12 sm:mt-14 lg:mt-16">
              <PricingCards />
            </div>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </section>
  );
}
