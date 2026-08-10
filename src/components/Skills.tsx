import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, Sparkles, Code2, Cpu } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { CursorState } from '../types';

interface SkillsProps {
  setCursorState: (state: CursorState) => void;
}

export const Skills: React.FC<SkillsProps> = ({ setCursorState }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Software' | 'Core Discipline'>('All');

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Skills & Arsenal</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
            >
              Tools of the <span className="orange-gradient-text">trade.</span>
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-white/[0.03] backdrop-blur-md p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            {(['All', 'Software', 'Core Discipline'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#FF5A1F] text-black shadow-[0_0_15px_rgba(255,90,31,0.5)]'
                    : 'text-[#a8a8a3] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => setCursorState({ variant: 'hover', text: `${skill.level}%` })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              className="glass-card p-6 rounded-3xl group relative overflow-hidden flex flex-col justify-between border border-white/10 hover:border-[#FF5A1F]/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(255,90,31,0.25)] transition-all duration-300"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A1F]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header Icon + Emoji */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-mono text-[#FF5A1F] font-bold px-2.5 py-1 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Skill Title */}
                <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-[#FF5A1F] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#a8a8a3] leading-relaxed mb-6 font-mono">
                  {skill.tagline}
                </p>
              </div>

              {/* Skill Proficiency Level Bar */}
              <div className="w-full">
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#FF7B47] to-[#FF5A1F] shadow-[0_0_10px_#FF5A1F]"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
