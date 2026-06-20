import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import FeatureCheckItem from '../ui/FeatureCheckItem';

export default function PricingCards() {
  return (
    <section className="text-center space-y-16">
      <h2 className="text-4xl lg:text-[45px] font-bold text-[#11142D]">
        Help Is One Click Away
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
        
        {/* Basic/Free Card */}
        <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 shadow-[10px_0px_50px_rgba(49,89,211,0.08)] border border-[#F6F4FF] flex flex-col space-y-8 text-left">
          
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left Panel */}
            <div className="w-full md:w-[180px] bg-[#F2F6FE] rounded-2xl flex flex-col items-center justify-center p-6 text-center shrink-0">
              <h3 className="text-4xl font-bold text-[#52B4DA] mb-2">Free</h3>
              <p className="text-[#808191] font-medium text-lg">Basic</p>
            </div>

            {/* Right Panel */}
            <div className="flex-1 w-full space-y-1 py-2">
              <FeatureCheckItem label="1 Active Job" active />
              <FeatureCheckItem label="Basic List Placement" active />
              <FeatureCheckItem label="Unlimited Job Applicants" active={false} />
              <FeatureCheckItem label="Invite Anyone to Apply to Your Jobs" active={false} />
            </div>
          </div>

          <button className="w-full rounded-[20px] py-4 text-[#1E3E85] font-bold text-lg border-2 border-[#1E3E85] hover:bg-[#F4F7FF] transition-colors">
            Get Started
          </button>
        </div>

        {/* Premium Card */}
        <div className="w-full max-w-[520px] bg-white rounded-[32px] p-8 shadow-[10px_0px_50px_rgba(49,89,211,0.18)] border border-[#F6F4FF] flex flex-col space-y-8 text-left">
          
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left Panel */}
            <div className="w-full md:w-[200px] bg-[#F2F6FE] rounded-2xl flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
              {/* Premium Tag inside panel */}
              <div className="bg-[#C2EEFF] rounded-full px-4 py-1.5 flex items-center space-x-2 mb-4">
                <Sparkles size={16} className="text-[#1E3E85]" fill="currentColor" />
                <span className="text-[#11142D] text-sm font-bold">Premium</span>
              </div>
              <h3 className="text-3xl font-bold text-[#52B4DA] mb-2">$79.99</h3>
              <p className="text-[#808191] font-medium">Per Month</p>
            </div>

            {/* Right Panel */}
            <div className="flex-1 w-full space-y-1 py-2">
              <FeatureCheckItem label="Unlimited Job Posts" active />
              <FeatureCheckItem label="Instant Job Post Approval" active />
              <FeatureCheckItem label="Premium List Placement" active />
              <FeatureCheckItem label="Unlimited Job Applicants" active />
            </div>
          </div>

          <button className="w-full rounded-[20px] py-4 bg-[#1E3E85] text-white font-bold text-lg hover:bg-[#152e66] transition-colors shadow-lg">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
