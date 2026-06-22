import React from 'react';
import Tag from '../ui/Tag';
import LogoBadge from '../ui/LogoBadge';
import imgDashboard from '../../../assets/images/e7843951ef2e446c079c88628a046de593aca411.png';
import imgGru from '../../../assets/images/81e6760bf2d30fbba3e24c65f7f345497900298d.png';
import imgMel from '../../../assets/images/a64392eee4d09513136216b250d88383c88ec106.png';

export default function FeatureGlobalReach() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24">
      <div className="flex-1 space-y-5 lg:space-y-6">
        <Tag>Global Reach</Tag>
        <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.15] text-dark">
          The First Fully Global Job Board, Anywhere, Ever
        </h2>
        <p className="text-gray-light text-base lg:text-lg leading-relaxed max-w-md">
          RemoteRecruit connects candidates with opportunities around the world. With today&apos;s
          remote-first workforce, you need to be able to find the best jobs and the best people for
          them, wherever they may be.
        </p>
      </div>

      <div className="flex-1 relative w-full max-w-[520px] lg:max-w-none">
        <div className="absolute -top-6 -left-2 w-5 h-5 rounded-full bg-primary shadow-sm z-0" aria-hidden="true" />

        <div className="relative rounded-[34px] bg-white border border-[#F6F4FF] shadow-card p-5 sm:p-6 z-10">
          <div className="flex items-center gap-2 mb-4" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F]" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary to-primary" />
          </div>
          <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[260px] lg:h-[300px]">
            <img
              src={imgDashboard}
              alt="Job board dashboard showing recent job listings and filters"
              className="w-full h-full object-cover object-left-top"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>

        <div className="absolute top-[55%] -left-6 sm:-left-10 lg:-left-16 z-20 bg-white border border-[#F6F4FF] rounded-full py-2 pl-2 pr-5 sm:pr-6 shadow-xl flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#19CDB8] shrink-0">
            <img src={imgGru} alt="" className="w-full h-full object-cover" loading="lazy" width={56} height={56} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-primary">Python Developer</div>
            <div className="text-sm font-medium text-dark truncate">Felonious Gru</div>
          </div>
        </div>

        <div className="absolute bottom-[-6%] right-[-4%] sm:right-[-8%] z-20 bg-white border border-[#F6F4FF] rounded-full py-2 pl-2 pr-5 sm:pr-6 shadow-xl flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#19CDB8] shrink-0">
            <img src={imgMel} alt="" className="w-full h-full object-cover" loading="lazy" width={56} height={56} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-secondary">Front End Wizard</div>
            <div className="text-sm font-medium text-dark truncate">Mel Muselphiem</div>
          </div>
        </div>

        <LogoBadge className="absolute top-[32%] -right-6 sm:-right-10 z-20 w-[72px] h-[72px] sm:w-[85px] sm:h-[85px]" />
      </div>
    </section>
  );
}
