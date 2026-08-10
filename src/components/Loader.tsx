import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoK } from './LogoK';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');

  useEffect(() => {
    const texts = [
      'INITIALIZING ENGINE',
      'ALIGNING GRID SYSTEMS',
      'LOADING GRAPHIC ASSETS',
      'CRAFTING LUXURY EXPERIENCE',
      'WELCOME'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const bounded = Math.min(next, 100);
        
        // Update text based on progress stage
        if (bounded < 25) setLoadingText(texts[0]);
        else if (bounded < 50) setLoadingText(texts[1]);
        else if (bounded < 75) setLoadingText(texts[2]);
        else if (bounded < 95) setLoadingText(texts[3]);
        else setLoadingText(texts[4]);

        return bounded;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
      >
        {/* Background Radial Glow */}
        <div className="absolute w-[600px] h-[600px] bg-[#FF5A1F]/15 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-col items-center text-center"
          >
            <LogoK className="w-16 h-16 mb-4 shadow-[0_0_30px_rgba(255,90,31,0.6)]" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
              Karthick<span className="text-[#FF5A1F] inline-block animate-bounce">.</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a8a8a3] mt-2 font-mono">
              Senior Graphic Designer
            </p>
          </motion.div>

          {/* Progress Counter */}
          <div className="w-full mb-3 flex items-center justify-between text-xs font-mono text-[#a8a8a3]">
            <span className="text-[#FF5A1F] font-semibold">{loadingText}</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF7B47] via-[#FF5A1F] to-[#E03E00] shadow-[0_0_12px_#FF5A1F]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Minimalist details */}
          <div className="mt-8 flex items-center gap-2 text-[10px] text-[#a8a8a3]/60 font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-ping" />
            <span>2018 — 2026 Portfolio</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
