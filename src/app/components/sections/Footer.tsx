import React from 'react';
import BrandLogo from '../ui/BrandLogo';
import SocialIconsGroup from '../ui/SocialIconsGroup';
import FooterDivider from '../ui/FooterDivider';

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-8 text-white w-full mt-16 overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          
          {/* Logo and Brand */}
        <div className="flex items-center cursor-pointer">
          <BrandLogo className="h-10 md:h-12 w-auto text-white" />
        </div>

          {/* Social Icons */}
          <div className="flex items-center cursor-pointer">
            <SocialIconsGroup />
          </div>
        </div>

        {/* Bottom Small RR Logo */}
        <div className="flex justify-center mt-12 w-[100vw] relative left-1/2 -translate-x-1/2">
          <FooterDivider className="w-full h-auto min-w-[1440px]" />
        </div>

      </div>
    </footer>
  );
}
