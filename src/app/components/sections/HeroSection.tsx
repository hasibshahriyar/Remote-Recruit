import React from 'react';
import HeroBackground from '../ui/HeroBackground';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Figma Background: absolute, 1440×704 at desktop */}
      <div className="relative w-full h-[560px] sm:h-[640px] lg:h-[704px]">
        <HeroBackground className="absolute top-0 left-0 w-full h-full" />

        <div className="relative z-10 h-full flex flex-col items-center text-center text-white px-4 sm:px-8 pt-[120px] sm:pt-[140px] lg:pt-[150px]">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 lg:gap-8 mt-8 lg:mt-12">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight">
              RemoteRecruit&apos;s Difference
            </h1>
            <p className="text-[18px] sm:text-[22px] leading-[1.6] text-white/90 max-w-3xl font-light">
              RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time,
              part-time, and freelance workers showcase their talents to businesses that need them.
              With no paywalls, no fees, and no barriers, there&apos;s nothing but you, your talents,
              and the next step in your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
