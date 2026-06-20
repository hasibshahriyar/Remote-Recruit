import React from 'react';
import Tag from '../ui/Tag';
import SkillTag from '../ui/SkillTag';
import imgProfile from '../../../assets/images/093143066a0755f54b00b4e3297b09f3b9e4136a.png';
import imgGru from '../../../assets/images/81e6760bf2d30fbba3e24c65f7f345497900298d.png';

export default function FeatureShowcase() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <Tag>Custom Profile</Tag>
        <h2 className="text-4xl lg:text-[50px] font-bold leading-tight text-[#11142D]">
          Showcase Your Talents
        </h2>
        <p className="text-[#808191] text-lg leading-relaxed max-w-md">
          Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
        </p>
      </div>

      {/* Interactive Visuals */}
      <div className="flex-1 relative w-full max-w-lg mt-8 lg:mt-0">
        
        {/* Floating Blue Circle */}
        <div className="absolute -top-12 left-0 w-4 h-4 rounded-full bg-[#1E3E85] shadow-sm z-0"></div>

        {/* Floating Yellow Circle */}
        <div className="absolute -bottom-20 -left-8 w-14 h-14 rounded-full bg-[#FFD166] shadow-md z-0"></div>

        {/* Main Card */}
        <div className="relative rounded-[34px] bg-white border border-[#F6F4FF] shadow-[14px_41px_100px_rgba(49,89,211,0.12)] p-6 pb-12 z-10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F]"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]"></div>
          </div>
          <div className="rounded-[16px] overflow-hidden mb-6">
             <img src={imgProfile} alt="User Profile UI" className="w-full object-cover" loading="lazy" />
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <SkillTag label="Python Dev" />
            <SkillTag label="Javascript" />
            <SkillTag label="Front End" />
            <SkillTag label="Back End" />
            <SkillTag label="IOS Development" />
            <SkillTag label="+12" />
          </div>
        </div>

        {/* Circular Avatar on Right Edge */}
        <div className="absolute top-[30%] -right-10 lg:-right-16 z-20 w-[90px] h-[90px] rounded-full overflow-hidden border-[6px] border-[#1E3E85] shadow-xl">
          <img src={imgGru} alt="Profile" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Client Feedback Pill */}
        <div className="absolute top-[60%] -left-12 lg:-left-20 z-20 bg-white border border-[#F6F4FF] rounded-full p-2 pr-6 shadow-xl flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-[#F29939]">
            <img src={imgGru} alt="Client" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#1E3E85]">Past Client Feedback</div>
            <div className="text-sm font-medium text-[#11142D]">Best Developer Ever!</div>
          </div>
        </div>
      </div>
    </section>
  );
}
