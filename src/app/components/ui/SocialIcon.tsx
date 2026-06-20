import React from 'react';

interface SocialIconProps {
  children: React.ReactNode;
  href?: string;
}

export default function SocialIcon({ children, href = '#' }: SocialIconProps) {
  return (
    <a 
      href={href}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[rgba(235,237,255,0.15)] to-[rgba(173,184,255,0.15)] text-[#DCDEF1] hover:text-white hover:bg-opacity-20 transition-all duration-200"
    >
      {children}
    </a>
  );
}
