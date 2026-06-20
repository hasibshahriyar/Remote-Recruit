import React from 'react';
import Button from '../ui/Button';
import imgJobBoard from '../../../assets/images/e7843951ef2e446c079c88628a046de593aca411.png';

export default function SignUpCTA() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#E5ECF9] to-[#F4F1FF] py-24 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-white opacity-40 rounded-full mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-white opacity-40 rounded-full mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Yellow Dot (Top Left) */}
        <div className="absolute -top-16 left-[20%] w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD166] to-[#F29939] shadow-sm z-0"></div>

        {/* Floating Blue Dot (Bottom Right) */}
        <div className="absolute bottom-16 right-[15%] w-10 h-10 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] shadow-lg z-0"></div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* UI Mockup (Left side) */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative rounded-t-[24px] bg-white shadow-2xl overflow-hidden border border-[#EBEBEB] border-b-0 h-[400px]">
              {/* Fake Browser Header */}
              <div className="flex items-center px-4 py-3 bg-[#F8F9FB] border-b border-[#EBEBEB]">
                 <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                 </div>
              </div>
              <img src={imgJobBoard} alt="App Interface" className="w-full object-cover object-top" />
            </div>
          </div>

          {/* Text Content (Right side) */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h4 className="text-[#1E3E85] font-bold text-xl tracking-wide mb-2">Are you ready?</h4>
            <h2 className="text-4xl lg:text-[55px] font-bold leading-tight text-[#11142D]">
              Help is only a few clicks away!
            </h2>
            <p className="text-xl text-[#808191] leading-relaxed max-w-md mx-auto lg:mx-0 mt-4">
              Click Below to get set up super quickly and find help now!
            </p>
            
            <div className="pt-8">
              <button className="flex items-center space-x-4 bg-[#DCE8F8] hover:bg-[#C8DAF2] text-[#1E3E85] font-semibold text-xl py-2 px-2 pr-8 rounded-full transition-colors w-fit mx-auto lg:mx-0">
                <div className="w-12 h-12 rounded-full bg-[#52B4DA] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <span>Get Started</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
