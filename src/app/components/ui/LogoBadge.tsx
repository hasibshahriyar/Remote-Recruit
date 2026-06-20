import React from 'react';
import LogoIcon from './LogoIcon';

export default function LogoBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] shadow-[0_10px_30px_rgba(49,89,211,0.3)] flex items-center justify-center ${className}`}>
      <LogoIcon className="w-[50%] h-[50%] text-white" />
    </div>
  );
}
