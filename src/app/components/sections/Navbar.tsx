import React, { useState } from 'react';
import Button from '../ui/Button';
import BrandLogo from '../ui/BrandLogo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 pt-8 px-4 sm:px-8 lg:px-16 flex items-center justify-between" aria-label="Main navigation">
      <a href="#" className="flex items-center cursor-pointer">
        <BrandLogo className="h-8 md:h-10 w-auto text-white" />
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white font-semibold hover:text-white/80 transition-colors text-sm">
          Sign In
        </a>
        <Button variant="accent" size="sm" className="rounded-xl px-6">
          Sign Up
        </Button>
      </div>

      <button
        type="button"
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E3E85] shadow-xl p-6 flex flex-col space-y-4 md:hidden">
          <a href="#" className="text-white font-semibold text-center py-2 hover:bg-white/10 rounded-lg">
            Sign In
          </a>
          <Button variant="accent" className="w-full">
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
}
