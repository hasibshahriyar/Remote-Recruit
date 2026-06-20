import React from 'react';

export default function SkillTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-gradient-to-br from-[rgba(87,153,235,0.1)] to-[rgba(159,116,251,0.1)]">
      <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#336DA6] to-[#1E3E85]">
        {label}
      </span>
    </div>
  );
}
