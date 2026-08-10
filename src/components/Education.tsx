import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 hover:border-[#FF5A1F]/40 transition-all duration-300 relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-extrabold font-heading text-white mb-2">
                {EDUCATION.degree} in {EDUCATION.major}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#FF5A1F] font-mono font-bold mb-4">
                <span>{EDUCATION.institution}</span>
                <span>•</span>
                <span>{EDUCATION.location}</span>
                <span>•</span>
                <span>{EDUCATION.period}</span>
              </div>

              <p className="text-sm md:text-base text-[#a8a8a3] max-w-3xl leading-relaxed">
                {EDUCATION.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-white">
              <Award className="w-8 h-8 text-[#FF5A1F]" />
              <div>
                <div className="font-bold">Engineer by Degree</div>
                <div className="text-[#a8a8a3]">Designer by Passion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
