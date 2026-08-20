import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowDown, FolderKanban, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CursorState } from '../types';

interface HeroProps {
  setCursorState: (state: CursorState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCursorState }) => {
  const [profileImage] = useState<string>(PERSONAL_INFO.defaultAvatar);

  // Mouse Parallax & 3D Tilt for Hero Photo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Rotating roles for hero animation
  const roles = ['GRAPHIC DESIGNER', 'UI/UX DESIGNER'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const floatingBadges = [
    { 
      name: 'Ps', 
      label: 'Photoshop', 
      bgColor: '#001E36', 
      textColor: '#31A8FF', 
      borderColor: '#31A8FF', 
      className: 'top-[2%] -left-1 xs:-left-3 sm:-left-6 lg:-left-[10%]' 
    },
    { 
      name: 'Ai', 
      label: 'Illustrator', 
      bgColor: '#331B00', 
      textColor: '#FF9A00', 
      borderColor: '#FF9A00', 
      className: 'top-[4%] -right-1 xs:-right-3 sm:-right-6 lg:left-[88%] lg:right-auto' 
    },
    { 
      name: 'Fi', 
      label: 'Figma', 
      bgColor: '#1E1E1E', 
      textColor: '#F24E1E', 
      borderColor: '#F24E1E', 
      className: 'bottom-[12%] -left-1 xs:-left-3 sm:-left-6 lg:top-[78%] lg:bottom-auto lg:-left-[8%]' 
    },
    { 
      name: 'Cd', 
      label: 'CorelDRAW', 
      bgColor: '#260B0A', 
      textColor: '#EB1C24', 
      borderColor: '#EB1C24', 
      className: 'bottom-[12%] -right-1 xs:-right-3 sm:-right-6 lg:top-[75%] lg:bottom-auto lg:left-[88%] lg:right-auto' 
    },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center overflow-x-hidden z-10 w-full"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-0 lg:pt-8">
        
        {/* LEFT COLUMN: Headline, Eyebrow, Bio, CTA Buttons */}
        <div className="order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full glass-pill border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 mb-4 sm:mb-6 shadow-[0_0_20px_rgba(255,90,31,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-ping shrink-0" />
            <span className="text-[10px] xs:text-xs font-mono font-semibold tracking-widest text-[#FF5A1F] uppercase">
              {PERSONAL_INFO.heroBadge}
            </span>
          </motion.div>

          {/* Headline Container with Small Name & Big Rotating Roles */}
          <div className="mb-4 sm:mb-6 w-full">
            {/* Small Greeting Line */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm xs:text-base sm:text-2xl font-bold font-heading text-[#a8a8a3] tracking-wider mb-1 sm:mb-2"
            >
              Hi, I'm <span className="text-white">KARTHICK G</span>
            </motion.p>

            {/* Big Rotating Animated Role Header */}
            <div className="relative min-h-[54px] xs:min-h-[64px] sm:min-h-[80px] xl:min-h-[96px] flex items-center justify-center lg:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentRoleIndex}
                  initial={{ y: 35, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -35, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight font-heading leading-tight orange-gradient-text text-glow underline decoration-[#FF5A1F]/40 decoration-wavy whitespace-nowrap"
                >
                  {roles[currentRoleIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base xs:text-lg md:text-xl text-[#a8a8a3] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal px-1 xs:px-0"
          >
            {PERSONAL_INFO.heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href="#work"
              onMouseEnter={() => setCursorState({ variant: 'hover', text: 'EXPLORE' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              className="group relative inline-flex items-center justify-center gap-2 xs:gap-3 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FF7B47] to-[#FF5A1F] text-black font-bold font-heading text-[11px] xs:text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap shadow-[0_0_30px_rgba(255,90,31,0.4)] hover:shadow-[0_0_50px_rgba(255,90,31,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <FolderKanban className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover:rotate-12 transition-transform duration-300 shrink-0" />
              <span>View My Work</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              onMouseEnter={() => setCursorState({ variant: 'hover', text: 'CONTACT' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              className="inline-flex items-center justify-center gap-2 xs:gap-3 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 text-white font-semibold font-heading text-[11px] xs:text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 hover:text-[#FF5A1F] hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Let's Talk</span>
            </a>
          </motion.div>

          {/* Quick Stats Banner under CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-xs font-mono text-[#a8a8a3] w-full"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span>Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Sukan Traders</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>6+ Years Experience</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Floating 3D Transparent Avatar Frame with Gradient Ring */}
        <div className="order-2 lg:col-span-5 flex flex-col items-center justify-center relative mt-8 sm:mt-10 lg:mt-0 pb-8 sm:pb-10 lg:pb-0 w-full">
          
          {/* Mouse Parallax Container */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-[210px] h-[210px] xs:w-[250px] xs:h-[250px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] flex items-center justify-center max-w-full my-4 sm:my-0"
          >
            
            {/* Background Orange Pulse Aura */}
            <div className="absolute inset-0 rounded-full bg-[#FF5A1F]/20 blur-[60px] sm:blur-[90px] animate-pulse-glow" />

            {/* Rotating Gradient Ring */}
            <div className="absolute inset-[-12px] sm:inset-[-16px] rounded-full border-2 border-dashed border-[#FF5A1F]/40 animate-spin-slow pointer-events-none" />

            {/* Glass Outer Reflection Ring */}
            <div className="absolute inset-[-4px] sm:inset-[-6px] rounded-full bg-gradient-to-tr from-[#FF5A1F]/30 via-transparent to-white/20 p-[2px] backdrop-blur-md shadow-[0_0_40px_rgba(255,90,31,0.3)]">
              <div className="w-full h-full bg-[#050505] rounded-full" />
            </div>

            {/* Main Avatar Container with 3D Pop-Out Head Effect */}
            <div className="relative w-full h-full group animate-float">
              
              {/* Circular Frame & Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1e1e24] via-[#121215] to-[#08080a] border-2 border-[#FF5A1F]/60 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(255,90,31,0.25)] overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5A1F]/15 via-transparent to-white/10" />
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Pop-Out Profile Image (Head sticks out of circle top) */}
              <div className="absolute inset-x-0 bottom-0 top-[-20%] flex items-end justify-center overflow-visible pointer-events-none">
                <img
                  src={profileImage}
                  alt="Karthick G — Graphic Designer"
                  className="w-[112%] h-[120%] max-w-none object-cover object-top transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-out filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Glass Ring Overlay Accent */}
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </div>

            {/* Floating Tool Badges reacting to mouse movement */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.15, type: 'spring' }}
                style={{
                  position: 'absolute',
                  transform: 'translateZ(40px)',
                }}
                className={`glass-card px-2.5 xs:px-3 sm:px-3.5 py-1.5 xs:py-2 rounded-2xl flex items-center gap-1.5 xs:gap-2 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform cursor-pointer z-20 ${badge.className}`}
              >
                <div
                  className="w-5 h-5 xs:w-6 xs:h-6 rounded-lg font-mono text-[10px] xs:text-xs font-bold flex items-center justify-center shrink-0"
                  style={{ 
                    backgroundColor: badge.bgColor, 
                    color: badge.textColor,
                    border: `1px solid ${badge.borderColor}`
                  }}
                >
                  {badge.name}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold font-heading text-white hidden sm:inline">
                  {badge.label}
                </span>
              </motion.div>
            ))}

            {/* Experience Pill Badge */}
            <div className="absolute -bottom-7 sm:-bottom-6 bg-[#050505]/90 border border-[#FF5A1F]/50 backdrop-blur-xl px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_10px_30px_rgba(255,90,31,0.3)] flex items-center gap-2.5 sm:gap-3 z-20 whitespace-nowrap">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5A1F] animate-ping shrink-0" />
              <div className="text-[11px] sm:text-xs font-mono">
                <span className="text-white font-bold">6+ Years</span>{' '}
                <span className="text-[#a8a8a3]">Crafting Visuals</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden sm:flex mt-8 lg:mt-0 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 flex-col items-center gap-2 text-[#a8a8a3] hover:text-[#FF5A1F] transition-colors cursor-pointer self-center"
        onClick={() => {
          const about = document.getElementById('about');
          about?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#FF5A1F]" />
      </motion.div>
    </section>
  );
};

