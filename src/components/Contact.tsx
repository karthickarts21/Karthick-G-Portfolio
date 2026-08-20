import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CursorState } from '../types';

interface ContactProps {
  setCursorState: (state: CursorState) => void;
}

export const Contact: React.FC<ContactProps> = ({ setCursorState }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FF5A1F', '#FF7B47', '#ffffff']
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF5A1F', '#FF7B47', '#ffffff']
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-14 rounded-3xl border border-white/15 relative overflow-hidden text-center shadow-2xl"
        >
          {/* Ambient Glowing Background Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5A1F]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
              Let's create something <span className="orange-gradient-text">amazing together.</span>
            </h2>

            <p className="text-base md:text-lg text-[#a8a8a3] leading-relaxed mb-8">
              Open to freelance projects, brand consultations & full-time design opportunities.
            </p>

            {/* Quick Email & Phone Contact Box */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mb-12">
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorState({ variant: 'copy', text: 'COPY' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-mono text-sm flex items-center justify-center gap-3 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-[#FF5A1F]" />
                <span>{PERSONAL_INFO.email}</span>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-[#a8a8a3] group-hover:text-white" />
                )}
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'CALL' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-mono text-sm flex items-center justify-center gap-3 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 transition-all duration-300"
              >
                <span className="text-[#FF5A1F]">📞</span>
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Design Inquiry for Karthick G`}
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'SEND' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FF7B47] text-black font-bold font-heading text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,90,31,0.4)] hover:shadow-[0_0_35px_rgba(255,90,31,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Email Directly</span>
              </a>
            </div>

            {/* Quick Message Form */}
            <div className="pt-8 border-t border-white/10 text-left max-w-lg mx-auto">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#a8a8a3] mb-4 text-center">
                Or Send a Quick Message
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2"
                >
                  <Check className="w-8 h-8 mx-auto" />
                  <p className="font-bold text-base font-heading">Thank You! Message Sent.</p>
                  <p className="text-xs text-[#a8a8a3]">I will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#a8a8a3]/60 focus:border-[#FF5A1F] focus:outline-none text-sm font-sans"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#a8a8a3]/60 focus:border-[#FF5A1F] focus:outline-none text-sm font-sans"
                  />
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#a8a8a3]/60 focus:border-[#FF5A1F] focus:outline-none text-sm font-sans resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#FF5A1F] hover:text-black font-bold font-heading text-xs uppercase tracking-wider transition-colors duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Social Media Links */}
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'IG' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-[#FF5A1F] hover:border-[#FF5A1F] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'WA' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ variant: 'hover', text: 'IN' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-[#FF5A1F] hover:border-[#FF5A1F] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
