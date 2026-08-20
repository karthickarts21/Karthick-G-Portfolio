import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FolderKanban, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { CursorState } from '../types';

interface PortfolioProps {
  setCursorState: (state: CursorState) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ setCursorState }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(3);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS;

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerView);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const nextSlide = () => {
    const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(prev);
    scrollToIndex(prev);
  };

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
    scrollToIndex(idx);
  };

  // Auto slide effect for continuous loop feel
  useEffect(() => {
    const timer = setInterval(() => {
      const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      setCurrentIndex(next);
      scrollToIndex(next);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <section id="work" className="py-28 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Carousel Controls */}
        <div className="flex items-end justify-between mb-10 sm:mb-14 md:mb-16 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-2.5 sm:mb-3"
            >
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl xs:text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
            >
              Crafted with <span className="orange-gradient-text">precision.</span>
            </motion.h2>
          </div>

          {/* Glass Navigation Arrows - Aligned to the right side of the heading */}
          <div className="flex items-center gap-2 shrink-0 self-end mb-1">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center text-white border border-white/15 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all shadow-lg active:scale-95 cursor-pointer"
              onMouseEnter={() => setCursorState({ variant: 'hover' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              title="Previous Projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center text-white border border-white/15 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all shadow-lg active:scale-95 cursor-pointer"
              onMouseEnter={() => setCursorState({ variant: 'hover' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              title="Next Projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div 
          ref={containerRef}
          className="relative overflow-x-auto scrollbar-none py-4 -my-4 scroll-smooth snap-x snap-mandatory flex gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              style={{
                minWidth: itemsPerView === 1 ? '100%' : itemsPerView === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)',
                width: itemsPerView === 1 ? '100%': itemsPerView === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)',
              }}
              className="snap-start glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-[#FF5A1F]/60 flex flex-col justify-between shrink-0 shadow-2xl transition-all duration-300 h-[385px]"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full h-56 overflow-hidden bg-[#111113] shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Emoji Badge */}
                <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-xl shadow-lg">
                  {project.emoji}
                </div>

                {/* Bottom Category Tag */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#FF5A1F]/20 backdrop-blur-md border border-[#FF5A1F]/40 text-[#FF5A1F] text-xs font-mono font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FF5A1F] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-[#a8a8a3] shrink-0 ml-2">{project.year}</span>
                  </div>

                  <p className="text-xs text-[#a8a8a3] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tools Used Pills */}
                {project.tools && project.tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/10">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-[#a8a8a3] border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Dots Indicator */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#FF5A1F] shadow-[0_0_12px_#FF5A1F]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
