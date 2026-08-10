import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { CursorState } from '../types';

interface TestimonialsProps {
  setCursorState: (state: CursorState) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ setCursorState }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-3"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            What clients <span className="orange-gradient-text">say.</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-12 md:px-16">
          
          {/* Glass Card Container */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#FF5A1F]/40 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Subtle Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5A1F]/50 to-transparent" />
            
            {/* Watermark Quote Icon - shifted & scaled cleanly */}
            <Quote className="absolute -top-2 -right-2 w-20 h-20 sm:w-28 sm:h-28 text-white/[0.03] pointer-events-none transform rotate-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setCursorState({ variant: 'drag', text: 'SLIDE' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="p-6 sm:p-8 md:p-10 flex flex-col items-center text-center relative z-10"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-1.5 text-amber-400 mb-5">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 stroke-none" />
                  ))}
                </div>

                {/* Quote Body */}
                <blockquote className="text-base sm:text-lg md:text-xl font-serif italic text-white/90 leading-relaxed max-w-2xl mb-6">
                  "{TESTIMONIALS[currentIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-[#FF5A1F]">
                    {TESTIMONIALS[currentIndex].author}
                  </h4>
                  <p className="text-xs font-mono text-white/50 mt-0.5">
                    {TESTIMONIALS[currentIndex].role} • <span className="text-white/70">{TESTIMONIALS[currentIndex].company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Outside the card content area on SM+ screens */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setCursorState({ variant: 'hover', text: 'PREV' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="absolute left-0 sm:left-1 md:-left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 hidden xs:flex items-center justify-center"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            onMouseEnter={() => setCursorState({ variant: 'hover', text: 'NEXT' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="absolute right-0 sm:right-1 md:-right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 hidden xs:flex items-center justify-center"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Controls Bottom Bar (Dots + Mobile Arrow Buttons) */}
          <div className="flex items-center justify-between xs:justify-center gap-4 mt-6">
            
            {/* Mobile Prev Button */}
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-black/50 border border-white/10 text-white/80 hover:bg-[#FF5A1F] hover:text-black transition-colors xs:hidden"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-7 bg-[#FF5A1F] shadow-[0_0_10px_rgba(255,90,31,0.5)]' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Next Button */}
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-black/50 border border-white/10 text-white/80 hover:bg-[#FF5A1F] hover:text-black transition-colors xs:hidden"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
