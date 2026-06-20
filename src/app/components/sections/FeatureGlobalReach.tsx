import React from 'react';
import Tag from '../ui/Tag';
import LogoBadge from '../ui/LogoBadge';
import imgJobBoard from '../../../assets/images/e7843951ef2e446c079c88628a046de593aca411.png';
import imgGru from '../../../assets/images/81e6760bf2d30fbba3e24c65f7f345497900298d.png';

export default function FeatureGlobalReach() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <Tag>Global Reach</Tag>
        <h2 className="text-4xl lg:text-[45px] font-bold leading-tight text-[#11142D]">
          The First Fully Global Job Board, Anywhere, Ever
        </h2>
        <p className="text-[#808191] text-lg leading-relaxed max-w-md">
          RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
        </p>
      </div>

      {/* Interactive Visuals */}
      <div className="flex-1 relative w-full max-w-lg mt-8 lg:mt-0">
        
        {/* Floating Blue Circle */}
        <div className="absolute -top-8 -left-4 w-6 h-6 rounded-full bg-[#1E3E85] shadow-sm z-0"></div>

        {/* Main Card (Mockup) */}
        <div className="relative rounded-[34px] bg-white border border-[#F6F4FF] shadow-[14px_41px_100px_rgba(49,89,211,0.12)] p-6 z-10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F]"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]"></div>
          </div>
          <div className="rounded-[16px] overflow-hidden">
             <img src={imgJobBoard} alt="Job Board UI" className="w-full object-cover" />
          </div>
        </div>

        {/* Floating Profile 1 */}
        <div className="absolute top-[60%] -left-12 lg:-left-24 z-20 bg-white border border-[#F6F4FF] rounded-full p-2 pr-6 shadow-xl flex items-center space-x-4 animate-[bounce_6s_infinite]">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#19CDB8]">
            <img src={imgGru} alt="Gru" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#1E3E85]">Python Developer</div>
            <div className="text-sm font-medium text-[#11142D]">Felonious Gru</div>
          </div>
        </div>

        {/* Floating Profile 2 */}
        <div className="absolute bottom-[-10%] right-[-10%] z-20 bg-white border border-[#F6F4FF] rounded-full p-2 pr-6 shadow-xl flex items-center space-x-4 animate-[bounce_5s_infinite_0.5s]">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#19CDB8]">
            <img src={imgGru} alt="Mel" className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#52B4DA]">Front End Wizard</div>
            <div className="text-sm font-medium text-[#11142D]">Mel Muselphiem</div>
          </div>
        </div>

        {/* RR Icon Badge */}
        <LogoBadge className="absolute top-[35%] -right-10 z-20 w-[85px] h-[85px]" />
      </div>
    </section>
  );
}
