import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CursorState } from '../types';

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorState.variant && cursorState.variant !== 'default';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Glow Follower Ring */}
      <motion.div
        className={`absolute rounded-full border border-[#FF5A1F]/40 backdrop-blur-[2px] transition-colors duration-300 flex items-center justify-center ${
          isExpanded
            ? 'bg-[#FF5A1F]/20 border-[#FF5A1F] shadow-[0_0_30px_rgba(255,90,31,0.5)]'
            : 'bg-transparent'
        }`}
        animate={{
          x: mousePos.x - (isExpanded ? 36 : 18),
          y: mousePos.y - (isExpanded ? 36 : 18),
          width: isExpanded ? 72 : 36,
          height: isExpanded ? 72 : 36,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.2
        }}
      >
        {cursorState.text && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[10px] font-bold font-mono tracking-wider uppercase text-white px-2 py-0.5 rounded text-center whitespace-nowrap drop-shadow"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-[#FF5A1F] rounded-full shadow-[0_0_10px_#FF5A1F]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isExpanded ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 400,
          mass: 0.1
        }}
      />
    </div>
  );
};
