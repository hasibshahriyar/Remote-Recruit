import React from 'react';
import imgDashboard from '../../../assets/images/e7843951ef2e446c079c88628a046de593aca411.png';

export default function SignUpCTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#E5ECF9] via-[#EEF2FA] to-[#F4F1FF] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute top-[-5%] right-[-15%] w-[min(800px,90vw)] h-[min(800px,90vw)] bg-white/40 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[25%] right-[5%] w-[min(500px,70vw)] h-[min(500px,70vw)] bg-white/30 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="absolute top-0 left-[15%] sm:left-[20%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#FFD166] to-[#F29939] shadow-sm"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-8 right-[10%] sm:right-[15%] w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-secondary to-primary shadow-lg"
          aria-hidden="true"
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          <div className="flex-1 w-full">
            <div className="relative rounded-t-3xl bg-white shadow-2xl overflow-hidden border border-[#EBEBEB] border-b-0">
              <div className="flex items-center px-4 py-3 bg-[#F8F9FB] border-b border-[#EBEBEB]" aria-hidden="true">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
              </div>
              <img
                src={imgDashboard}
                alt="RemoteRecruit Find Work dashboard with job listings and filters"
                className="w-full object-cover object-left-top max-h-[320px] sm:max-h-[400px] lg:max-h-[480px]"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 sm:space-y-6 text-left">
            <p className="text-primary font-bold text-lg sm:text-xl tracking-wide">Are you ready?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[55px] font-bold leading-[1.1] text-dark">
              Help is only a few clicks away!
            </h2>
            <p className="text-lg sm:text-xl text-gray-light leading-relaxed max-w-md">
              Click Below to get set up super quickly and find help now!
            </p>

            <div className="pt-4 sm:pt-6">
              <button
                type="button"
                className="group flex items-center gap-4 bg-[#DCE8F8] hover:bg-[#C8DAF2] text-primary font-semibold text-lg sm:text-xl py-2 pl-2 pr-6 sm:pr-8 rounded-full transition-colors"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-[#45a8c8] transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
