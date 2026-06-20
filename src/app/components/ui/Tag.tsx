import React from 'react';

export default function Tag({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-xl bg-[#C2EEFF] bg-opacity-90 text-[#11142D] text-xs font-semibold tracking-wide ${className}`}>
      {children}
    </div>
  );
}
