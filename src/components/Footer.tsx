import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LogoK } from './LogoK';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 relative z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Logo & Tagline */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <LogoK className="w-7 h-7" />
            <span className="text-xl font-bold font-heading text-white">
              Karthick<span className="text-[#FF5A1F]">.</span>
            </span>
          </div>

          <p className="text-xs text-[#a8a8a3] font-mono">
            {PERSONAL_INFO.subtitle} — designed & built with passion.
          </p>
        </div>

        {/* Center Copyright */}
        <div className="text-xs text-[#a8a8a3] font-mono">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </div>

        {/* Right Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#FF5A1F] hover:border-[#FF5A1F] hover:scale-110 transition-all duration-300 flex items-center gap-2 text-xs font-mono"
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-4 h-4 text-[#FF5A1F]" />
        </button>

      </div>
    </footer>
  );
};
