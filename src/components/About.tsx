import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, ABOUT_CONTENT, STRENGTHS, STATS } from '../data/portfolioData';
import { Compass, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { CursorState } from '../types';

interface AboutProps {
  setCursorState: (state: CursorState) => void;
}

export const About: React.FC<AboutProps> = ({ setCursorState }) => {
  return (
    <section id="about" className="py-28 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-3"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            {ABOUT_CONTENT.title}
          </motion.h2>
        </div>

        {/* Story Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden space-y-6"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A1F]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-5 text-[#a8a8a3] text-base md:text-lg leading-relaxed relative z-10 font-sans">
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Stats Cards Grid & Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => setCursorState({ variant: 'hover', text: stat.value })}
                  onMouseLeave={() => setCursorState({ variant: 'default' })}
                  className="glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between group hover:border-[#FF5A1F]/60 transition-all duration-300"
                >
                  <div className="text-3xl md:text-5xl font-extrabold font-heading orange-gradient-text tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold font-heading text-white mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-[#a8a8a3] font-mono leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 md:p-8 rounded-3xl border border-[#FF5A1F]/30 bg-[#FF5A1F]/5 relative overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-[#FF5A1F]/10 pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A1F]/15 text-[#FF5A1F] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Philosophy</span>
              </div>
              <blockquote className="text-base md:text-lg font-serif italic text-white/90 leading-relaxed">
                {PERSONAL_INFO.philosophy}
              </blockquote>
            </motion.div>
          </div>

        </div>

        {/* MY STRENGTHS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-10 rounded-3xl border border-white/10"
        >
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-white flex items-center gap-2">
              <span className="orange-gradient-text">My Strengths</span>
            </h3>
            <p className="text-xs font-mono text-[#a8a8a3] mt-1">Core work ethics & design capabilities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {STRENGTHS.map((strength, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5A1F]/40 hover:bg-[#FF5A1F]/5 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FF5A1F] shrink-0" />
                <span className="text-sm font-semibold text-white/90 font-heading">{strength}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
