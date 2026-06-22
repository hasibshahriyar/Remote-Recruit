import React from 'react';

export default function Tag({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full bg-tag text-dark text-xs font-semibold tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
