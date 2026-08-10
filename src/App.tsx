import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorState } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorState, setCursorState] = useState<CursorState>({ variant: 'default' });

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    if (loading) return;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f0] selection:bg-[#FF5A1F] selection:text-black overflow-x-hidden font-sans">
      {/* Luxury Loading Screen */}
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Custom Magnetic Cursor */}
          <CustomCursor cursorState={cursorState} />

          {/* 3D WebGL / Ambient Canvas Background */}
          <BackgroundCanvas />

          {/* Fixed Glass Navbar */}
          <Navbar setCursorState={setCursorState} />

          {/* Main Portfolio Sections */}
          <main className="relative z-10">
            <Hero setCursorState={setCursorState} />
            <About setCursorState={setCursorState} />
            <Experience setCursorState={setCursorState} />
            <Skills setCursorState={setCursorState} />
            <Education />
            <Portfolio setCursorState={setCursorState} />
            <Testimonials setCursorState={setCursorState} />
            <Contact setCursorState={setCursorState} />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
