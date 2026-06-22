import React from 'react';

export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-gradient-to-br from-[rgba(87,153,235,0.12)] to-[rgba(159,116,251,0.12)]">
      <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#336DA6] to-primary">
        {label}
      </span>
    </span>
  );
}
