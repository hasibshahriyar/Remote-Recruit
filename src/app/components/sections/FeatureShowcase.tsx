import React from 'react';
import Tag from '../ui/Tag';
import SkillTag from '../ui/SkillTag';
import imgProfile from '../../../assets/images/093143066a0755f54b00b4e3297b09f3b9e4136a.png';
import imgGru from '../../../assets/images/81e6760bf2d30fbba3e24c65f7f345497900298d.png';

export default function FeatureShowcase() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24">
      <div className="flex-1 space-y-5 lg:space-y-6">
        <Tag>Custom Profile</Tag>
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold leading-[1.15] text-dark">
          Showcase Your Talents
        </h2>
        <p className="text-gray-light text-base lg:text-lg leading-relaxed max-w-md">
          Personalize your profile with everything that makes you unique. Add an introductory video
          and other media for a personal touch that stands out to employers and candidates.
        </p>
      </div>

      <div className="flex-1 relative w-full max-w-[520px] lg:max-w-none">
        <div className="absolute -top-10 left-0 w-4 h-4 rounded-full bg-primary shadow-sm z-0" aria-hidden="true" />
        <div
          className="absolute -bottom-16 -left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#FFD166] to-[#F29939] shadow-md z-0"
          aria-hidden="true"
        />

        <div className="relative rounded-[34px] bg-white border border-[#F6F4FF] shadow-card p-5 sm:p-6 pb-10 z-10">
          <div className="flex items-center gap-2 mb-4" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F]" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary to-primary" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={imgProfile}
              alt="User profile page with video, bio, and skill highlights"
              className="w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
            <SkillTag label="Python Dev" />
            <SkillTag label="Javascript" />
            <SkillTag label="Front End" />
            <SkillTag label="Back End" />
            <SkillTag label="IOS Development" />
            <SkillTag label="+12" />
          </div>
        </div>

        <div className="absolute top-[28%] -right-6 sm:-right-12 lg:-right-16 z-20 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-full overflow-hidden border-[5px] sm:border-[6px] border-primary shadow-xl">
          <img src={imgGru} alt="" className="w-full h-full object-cover" loading="lazy" width={90} height={90} />
        </div>

        <div className="absolute top-[58%] -left-8 sm:-left-14 lg:-left-20 z-20 bg-white border border-[#F6F4FF] rounded-full py-2 pl-2 pr-5 sm:pr-6 shadow-xl flex items-center gap-3 sm:gap-4 max-w-[240px] sm:max-w-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 border-[#F29939] shrink-0">
            <img src={imgGru} alt="" className="w-full h-full object-cover" loading="lazy" width={56} height={56} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-primary">Past Client Feedback</div>
            <div className="text-sm font-medium text-dark">Best Developer Ever!</div>
          </div>
        </div>
      </div>
    </section>
  );
}
