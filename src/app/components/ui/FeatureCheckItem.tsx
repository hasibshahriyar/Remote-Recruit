import React, { useId } from 'react';

interface FeatureCheckItemProps {
  label: string;
  active?: boolean;
}

function InactiveIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="#D4D4D4" />
      <path
        d="M7.25 7.25L12.75 12.75M12.75 7.25L7.25 12.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ActiveIcon() {
  const gradientId = useId();

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill={`url(#${gradientId})`} />
      <path
        d="M6.5 10.25L8.75 12.5L13.75 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="20"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52B4DA" />
          <stop offset="1" stopColor="#1E3E85" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function FeatureCheckItem({ label, active = true }: FeatureCheckItemProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      {active ? <ActiveIcon /> : <InactiveIcon />}
      <span className={`font-medium text-[15px] ${active ? 'text-dark' : 'text-[#A0A0A0]'}`}>
        {label}
      </span>
    </div>
  );
}
