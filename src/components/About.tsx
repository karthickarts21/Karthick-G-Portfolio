import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, ABOUT_CONTENT, STATS } from '../data/portfolioData';
import { Compass, Quote, Sparkles } from 'lucide-react';
import { CursorState } from '../types';

interface AboutProps {
  setCursorState: (state: CursorState) => void;
}

export const About: React.FC<AboutProps> = ({ setCursorState }) => {
  return (
    <section id="about" className="py-14 md:py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-2"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold font-heading text-white tracking-tight"
          >
            From Curiosity to <span className="orange-gradient-text">Creativity</span>
          </motion.h2>
        </div>

        {/* Story Narrative & Stats Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-5 sm:p-6 md:p-7 rounded-2xl relative overflow-hidden h-auto"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A1F]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-3.5 sm:space-y-4 relative z-10 font-sans">
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed'
                      : 'text-[#a8a8a3] text-xs sm:text-sm md:text-base leading-relaxed'
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stats Cards Grid & Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* 2x2 Statistics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onMouseEnter={() => setCursorState({ variant: 'hover', text: stat.value })}
                  onMouseLeave={() => setCursorState({ variant: 'default' })}
                  className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between group hover:border-[#FF5A1F]/60 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading orange-gradient-text tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold font-heading text-white leading-tight">
                      {stat.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Card Directly Below Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-4 sm:p-5 md:p-6 rounded-2xl border border-[#FF5A1F]/30 bg-[#FF5A1F]/5 relative overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 w-16 h-16 text-[#FF5A1F]/10 pointer-events-none" />
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF5A1F]/15 text-[#FF5A1F] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>My Philosophy</span>
              </div>
              <blockquote className="text-xs sm:text-sm md:text-base font-serif italic text-white/90 leading-relaxed">
                {PERSONAL_INFO.philosophy}
              </blockquote>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

