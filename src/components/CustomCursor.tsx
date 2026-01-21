import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track actual mouse position - no delay
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
      `}</style>

      {/* Custom Cursor Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Main cursor dot */}
        <div className="relative w-3 h-3">
          {/* Solid center dot */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50" />

          {/* Soft glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-400/60"
            animate={{
              boxShadow: isHovering
                ? [
                    '0 0 8px rgba(34, 211, 238, 0.6)',
                    '0 0 16px rgba(168, 85, 247, 0.4)',
                    '0 0 8px rgba(34, 211, 238, 0.6)',
                  ]
                : '0 0 8px rgba(34, 211, 238, 0.4)',
            }}
            transition={{
              duration: isHovering ? 1.5 : 0.8,
              repeat: Infinity,
            }}
          />

          {/* Outer glow halo */}
          <div className="absolute -inset-2 rounded-full bg-cyan-500/10 blur-sm" />
        </div>
      </motion.div>

      {/* Trail effect - optional subtle trail */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 0],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
