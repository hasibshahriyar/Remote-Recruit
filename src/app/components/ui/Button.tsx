import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-[#1E3E85] text-white hover:bg-opacity-90",
    accent: "bg-[#50C0E3] bg-opacity-90 text-white hover:bg-opacity-100",
    outline: "border-2 border-[#52B4DA] border-opacity-70 text-[#1E3E85] hover:bg-[#52B4DA] hover:bg-opacity-10",
    ghost: "bg-transparent text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[14px]",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
