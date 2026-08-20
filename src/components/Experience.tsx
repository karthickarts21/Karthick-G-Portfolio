import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { CursorState } from '../types';

interface ExperienceProps {
  setCursorState: (state: CursorState) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ setCursorState }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress along the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-14 md:py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-2"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold font-heading text-white tracking-tight"
          >
            Where I've <span className="orange-gradient-text">worked.</span>
          </motion.h2>
        </div>

        {/* MOBILE & TABLET LAYOUT (< 1024px): Vertical Timeline */}
        <div ref={containerRef} className="lg:hidden relative pl-5 md:pl-8 space-y-5 md:space-y-6 max-w-4xl mx-auto">
          
          {/* Static Background Vertical Line */}
          <div className="absolute left-1.5 md:left-2.5 top-2 bottom-2 w-[2px] bg-white/10" />

          {/* Growing Orange Active Scroll Progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-1.5 md:left-2.5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FF7B47] via-[#FF5A1F] to-[#E03E00] shadow-[0_0_12px_#FF5A1F]"
          />

          {/* Timeline Cards */}
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Pulsing Dot Marker */}
              <div className="absolute -left-[25px] md:-left-[37px] top-4 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#FF5A1F] flex items-center justify-center shadow-[0_0_8px_#FF5A1F] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
              </div>

              {/* Compact Glass Card */}
              <div
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'ROLE' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 group-hover:border-[#FF5A1F]/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  {/* Role & Company */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-white">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#FF5A1F] font-mono font-medium mt-0.5">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{item.company}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1 text-white/50">
                          <span>•</span>
                          <MapPin className="w-3 h-3 text-white/40" />
                          <span className="text-[11px]">{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="self-start sm:self-center inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF5A1F] text-[11px] font-mono font-bold tracking-wider shrink-0">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Short Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-[#a8a8a3] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

              </div>
            </motion.div>
          ))}

        </div>

        {/* DESKTOP LAYOUT (>= 1024px): Horizontal Timeline */}
        <div className="hidden lg:block relative mt-10">
          {/* Connecting Line behind circular markers */}
          <div className="absolute top-[22px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#FF5A1F]/30 via-[#FF5A1F] to-[#E03E00]/30 z-0" />

          {/* 3 Cards Side-by-Side Grid */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center group"
              >
                {/* Circular Step Number Marker (01, 02, 03) */}
                <div className="w-11 h-11 rounded-full bg-[#0d0d10] border-2 border-[#FF5A1F] text-[#FF5A1F] font-mono text-sm font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,90,31,0.5)] group-hover:scale-110 transition-transform duration-300 mb-6 z-10 shrink-0">
                  0{idx + 1}
                </div>

                {/* Glassmorphism Card */}
                <div
                  onMouseEnter={() => setCursorState({ variant: 'hover', text: 'ROLE' })}
                  onMouseLeave={() => setCursorState({ variant: 'default' })}
                  className="glass-card p-6 rounded-2xl border border-white/10 group-hover:border-[#FF5A1F]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between w-full h-full shadow-lg"
                >
                  <div>
                    {/* Period Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF5A1F] text-xs font-mono font-bold tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-semibold">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#FF5A1F] transition-colors">
                      {item.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-[#FF5A1F] font-mono font-medium">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{item.company}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                          <MapPin className="w-3.5 h-3.5 shrink-0 text-white/40" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-[#a8a8a3] leading-relaxed border-t border-white/10 pt-3.5 mt-auto">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

