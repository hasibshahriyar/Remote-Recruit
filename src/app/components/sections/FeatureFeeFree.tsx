import React from 'react';
import Tag from '../ui/Tag';
import FeatureCheckItem from '../ui/FeatureCheckItem';
import LogoBadge from '../ui/LogoBadge';

export default function FeatureFeeFree() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Interactive Visuals (Left side on desktop) */}
      <div className="flex-1 relative w-full max-w-lg mt-8 lg:mt-0 pb-12 lg:pb-0">
        
        {/* Floating Blue Circle */}
        <div className="absolute -top-8 -left-8 w-6 h-6 rounded-full bg-[#1E3E85] shadow-sm z-0"></div>

        {/* Main Card */}
        <div className="relative rounded-[34px] bg-white border border-[#F6F4FF] shadow-[14px_41px_100px_rgba(49,89,211,0.12)] p-10 pt-12 pb-16 z-10 text-left">
          <div className="absolute top-6 right-6 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F]"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]"></div>
          </div>
          
          <h4 className="text-xs tracking-wider text-[#808191] font-semibold uppercase mb-1">Your Membership Tier</h4>
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] mb-8">Premium</h3>
          
          <h4 className="text-[10px] tracking-widest text-black/50 font-bold uppercase mb-4">Features</h4>
          <div className="space-y-4">
            <FeatureCheckItem label="Up to 25 active job posts" active />
            <FeatureCheckItem label="Premium Placement & Visibility" active />
            <FeatureCheckItem label="Messaging anyone, unlimited" active />
            <FeatureCheckItem label="Unlimited invites" active />
            <FeatureCheckItem label="View all applicants" active />
            <FeatureCheckItem label="Unlimited invites to jobseekers" active />
          </div>
        </div>

        {/* RR Icon Badge */}
        <LogoBadge className="absolute top-[35%] -right-10 z-20 w-[85px] h-[85px]" />

        {/* PayPal Pill */}
        <div className="absolute -bottom-8 -left-8 lg:-left-16 z-20 bg-white border border-[#F6F4FF] rounded-full px-6 py-4 shadow-xl flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E5E9FF] flex items-center justify-center">
            {/* PayPal SVG Approximation */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#1E3E85]" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74l3.144-20.106A.641.641 0 0 1 5.613 0h7.133c2.753 0 5.344.89 6.208 3.542.84 2.585-.14 6.136-3.147 7.747-2.316 1.242-4.996 1.242-7.514 1.242H7.37L5.59 21.338a.64.64 0 0 0 .633.74h.853z"/>
              <path d="M10.873 24h-3.48a.641.641 0 0 1-.633-.74l1.37-8.77h3.336c3.153 0 5.86-1.127 6.84-4.305.51-1.663.228-3.456-.632-4.885a6.416 6.416 0 0 0-1.89-2.036c3.006 1.61 3.988 5.16 3.148 7.746-.98 3.178-3.687 4.305-6.84 4.305h-3.335a.64.64 0 0 0-.632.74l-1.37 8.77a.64.64 0 0 0 .633.74z" fill="#52B4DA"/>
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#1E3E85]">Upcoming Payment In...</div>
            <div className="text-sm font-medium text-[#11142D]">14 Days - $79.99</div>
          </div>
        </div>
      </div>

      {/* Text Content (Right side on desktop) */}
      <div className="flex-1 space-y-6">
        <Tag>Actually Fee Free</Tag>
        <h2 className="text-4xl lg:text-[45px] font-bold leading-tight text-[#11142D]">
          Fee-Free Forever
        </h2>
        <p className="text-[#808191] text-lg leading-relaxed max-w-md">
          We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.
        </p>
      </div>
    </section>
  );
}
