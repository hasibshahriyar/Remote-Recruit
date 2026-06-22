import React from 'react';
import Tag from '../ui/Tag';
import FeatureCheckItem from '../ui/FeatureCheckItem';
import LogoBadge from '../ui/LogoBadge';

export default function FeatureFeeFree() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24">
      <div className="flex-1 relative w-full max-w-[520px] lg:max-w-none pb-10 lg:pb-0">
        <div className="absolute -top-6 -left-4 w-5 h-5 rounded-full bg-primary shadow-sm z-0" aria-hidden="true" />

        <div className="relative rounded-[34px] bg-white border border-[#F6F4FF] shadow-card p-8 sm:p-10 pt-12 pb-14 z-10 text-left">
          <div className="absolute top-6 right-6 flex items-center gap-2" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F]" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary to-primary" />
          </div>

          <p className="text-xs tracking-wider text-gray-light font-semibold uppercase mb-1">
            Your Membership Tier
          </p>
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary mb-8">
            Premium
          </h3>

          <p className="text-[10px] tracking-widest text-dark/50 font-bold uppercase mb-4">Features</p>
          <div className="space-y-3">
            <FeatureCheckItem label="Up to 25 active job posts" active />
            <FeatureCheckItem label="Premium Placement & Visibility" active />
            <FeatureCheckItem label="Messaging anyone, unlimited" active />
            <FeatureCheckItem label="Unlimited invites" active />
            <FeatureCheckItem label="View all applicants" active />
            <FeatureCheckItem label="Unlimited invites to jobseekers" active />
          </div>
        </div>

        <LogoBadge className="absolute top-[35%] -right-6 sm:-right-10 z-20 w-[72px] h-[72px] sm:w-[85px] sm:h-[85px]" />

        <div className="absolute -bottom-4 -left-6 sm:-left-12 lg:-left-16 z-20 bg-white border border-[#F6F4FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 shadow-xl flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E5E9FF] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-primary" aria-hidden="true">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74l3.144-20.106A.641.641 0 0 1 5.613 0h7.133c2.753 0 5.344.89 6.208 3.542.84 2.585-.14 6.136-3.147 7.747-2.316 1.242-4.996 1.242-7.514 1.242H7.37L5.59 21.338a.64.64 0 0 0 .633.74h.853z" />
              <path d="M10.873 24h-3.48a.641.641 0 0 1-.633-.74l1.37-8.77h3.336c3.153 0 5.86-1.127 6.84-4.305.51-1.663.228-3.456-.632-4.885a6.416 6.416 0 0 0-1.89-2.036c3.006 1.61 3.988 5.16 3.148 7.746-.98 3.178-3.687 4.305-6.84 4.305h-3.335a.64.64 0 0 0-.632.74l-1.37 8.77a.64.64 0 0 0 .633.74z" fill="#52B4DA" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold text-primary">Upcoming Payment In...</div>
            <div className="text-sm font-medium text-dark">14 Days - $79.99</div>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-5 lg:space-y-6">
        <Tag>Actually Fee Free</Tag>
        <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.15] text-dark">
          Fee-Free Forever
        </h2>
        <p className="text-gray-light text-base lg:text-lg leading-relaxed max-w-md">
          We don&apos;t charge you fees and we don&apos;t put up paywalls. We&apos;re the bridge that
          connects job opportunities with the best candidates, with no middleman involved.
        </p>
      </div>
    </section>
  );
}
