import React from 'react';

interface LogoKProps {
  className?: string;
  size?: number | string;
}

export const LogoK: React.FC<LogoKProps> = ({ className = "w-9 h-9", size }) => {
  return (
    <div 
      className={`rounded-[22%] bg-gradient-to-br from-[#FF7338] via-[#FF5A1F] to-[#D9410A] flex items-center justify-center shadow-[0_0_25px_rgba(255,90,31,0.5)] overflow-hidden shrink-0 border border-white/10 ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-[76%] h-[76%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Precise K path with diagonal slice cut matching the custom logo */}
        <path
          d="M 24 12 L 24 88 L 41 88 L 41 54 L 68 88 L 88 88 L 54 48 L 84 12 L 64 12 L 41 40 L 41 12 Z"
          fill="#08080a"
        />
        <path
          d="M 35 45 L 53 66"
          stroke="#FF5A1F"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

