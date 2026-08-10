import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';
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
    <section id="experience" className="py-28 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Where I've <span className="orange-gradient-text">worked.</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-6 md:pl-10 space-y-12">
          
          {/* Static Background Vertical Line */}
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-[2px] bg-white/10" />

          {/* Growing Orange Active Scroll Progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-2 md:left-3 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FF7B47] via-[#FF5A1F] to-[#E03E00] shadow-[0_0_12px_#FF5A1F]"
          />

          {/* Timeline Cards */}
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Pulsing Dot Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#FF5A1F] flex items-center justify-center shadow-[0_0_12px_#FF5A1F] group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-ping" />
              </div>

              {/* Glass Card */}
              <div
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'ROLE' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 group-hover:border-[#FF5A1F]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF5A1F] text-xs font-mono font-bold tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-1">
                  {item.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#FF5A1F] font-mono font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-white/60">
                      <span>•</span>
                      <MapPin className="w-3.5 h-3.5 text-white/50" />
                      <span className="text-xs">{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Bullet Highlights if available */}
                {item.highlights && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-3">
                      {item.role.includes('Freelance') ? 'Projects' : 'Responsibilities'}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-[#a8a8a3]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
