import React from 'react';

import HeroBackground from '../ui/HeroBackground';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[800px] overflow-hidden flex flex-col items-center justify-start pt-[150px] px-4 sm:px-8 text-center text-white">
      
      {/* Figma Hero Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-[#1E3E85]">
        <HeroBackground className="w-full h-full object-cover object-bottom" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12 pb-48">
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight mb-8 tracking-tight">
          RemoteRecruit’s Difference
        </h1>
        <p className="text-[18px] sm:text-[22px] leading-[1.6] text-white/90 max-w-3xl font-light">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there's nothing but you, your talents, and the next step in your career.
        </p>
      </div>

    </section>
  );
}
