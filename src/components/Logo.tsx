
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

export const Logo = ({ className = "", size = 40, onClick }: LogoProps) => {
  return (
    <div className={`inline-flex items-center ${onClick ? 'cursor-pointer' : ''} ${className}`} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        {/* Outer ring representing government/law */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        
        {/* Inner geometric pattern representing AI/clarity */}
        <path
          d="M12 20L16 16L20 20L24 16L28 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Central connecting nodes */}
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        
        {/* Additional connection lines for AI network feel */}
        <path
          d="M16 16L20 12M24 16L20 12M20 20L20 28"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Small accent dots */}
        <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="20" cy="28" r="1.5" fill="currentColor" opacity="0.7" />
      </svg>
      <span className="text-2xl font-bold">LegisClear</span>
    </div>
  );
};
