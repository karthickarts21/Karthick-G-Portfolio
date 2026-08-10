import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorState } from '../types';
import { LogoK } from './LogoK';

interface NavbarProps {
  setCursorState: (state: CursorState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setCursorState }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = '';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollPos / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Glass background when scrolled
      setIsScrolled(currentScrollPos > 40);

      // Auto hide/show navbar
      if (currentScrollPos > 120) {
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      } else {
        setIsVisible(true);
      }
      setPrevScrollPos(currentScrollPos);

      // Active Section Observer
      const sections = ['about', 'experience', 'skills', 'work', 'testimonials', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-[101]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF7B47] via-[#FF5A1F] to-[#FF5A1F] shadow-[0_0_12px_#FF5A1F]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Glass Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent border-b border-white/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => setCursorState({ variant: 'hover', text: 'HOME' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="group transition-transform duration-300 group-hover:scale-105">
              <LogoK className="w-9 h-9" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading tracking-tight text-white group-hover:text-[#FF5A1F] transition-colors">
                Karthick<span className="text-[#FF5A1F]">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#a8a8a3] -mt-1 hidden sm:inline">
                Senior Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    onMouseEnter={() => setCursorState({ variant: 'hover' })}
                    onMouseLeave={() => setCursorState({ variant: 'default' })}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full block text-nowrap ${
                      isActive ? 'text-white' : 'text-[#a8a8a3] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-[#FF5A1F]/30 to-[#FF5A1F]/10 border border-[#FF5A1F]/50 rounded-full shadow-[0_0_12px_rgba(255,90,31,0.3)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Right Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              onMouseEnter={() => setCursorState({ variant: 'hover', text: 'LETS TALK' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FF7B47] text-black font-semibold font-heading text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(255,90,31,0.35)] hover:shadow-[0_0_30px_rgba(255,90,31,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#FF5A1F] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF5A1F]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-[99] bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-base font-semibold font-heading transition-all ${
                    activeSection === link.id
                      ? 'bg-[#FF5A1F]/15 border-[#FF5A1F]/50 text-white'
                      : 'bg-white/5 border-white/5 text-[#a8a8a3] hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF5A1F]" />
                </motion.a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#FF7B47] text-black font-bold font-heading text-center tracking-wider uppercase shadow-[0_0_20px_rgba(255,90,31,0.4)]"
              >
                Hire Karthick G
              </a>
              <p className="text-center text-xs text-[#a8a8a3] font-mono">
                Senior Graphic Designer • 6+ Yrs Exp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
