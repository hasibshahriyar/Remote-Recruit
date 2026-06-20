import React from 'react';
import { Check, X } from 'lucide-react';

interface FeatureCheckItemProps {
  label: string;
  active?: boolean;
}

export default function FeatureCheckItem({ label, active = true }: FeatureCheckItemProps) {
  return (
    <div className="flex items-center space-x-3 py-2.5">
      <div 
        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
          active ? 'bg-[#52B4DA]' : 'bg-[#808191]/30'
        }`}
      >
        {active ? (
          <Check size={12} strokeWidth={3} className="text-white" />
        ) : (
          <X size={12} strokeWidth={3} className="text-white" />
        )}
      </div>
      <span className={`font-medium text-[15px] ${active ? 'text-[#11142D]' : 'text-[#808191]'}`}>
        {label}
      </span>
    </div>
  );
}
