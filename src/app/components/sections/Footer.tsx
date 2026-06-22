import React from 'react';
import FooterBackground from '../ui/FooterBackground';

export default function Footer() {
  return (
    <footer
      className="relative z-0 w-full overflow-hidden pointer-events-none"
      aria-label="Site footer"
    >
      <FooterBackground className="w-full h-[420px] sm:h-[500px] lg:h-[569px] pointer-events-auto" />
    </footer>
  );
}
