import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Purab Nigam';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="fixed inset-0 -z-10">
        {/* Deep black base */}
        <div className="absolute inset-0 bg-slate-950" />
        
        {/* Ambient glow from bottom with purple-blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-slate-950/20 to-transparent" />
        
        {/* Soft slate blue glow from left */}
        <motion.div
          animate={{
            opacity: [0.7, 0.5, 0.7],
            scale: [1.75,2.5, 1.75],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-32 top-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        
        {/* Soft navy blue glow from right */}
        <motion.div
          animate={{
            opacity: [0.7, 0.5, 0.7],
            scale: [1.75, 1.25, 1.75],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-32 bottom-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
        />
        
        
        {/* Additional blue glow from bottom center */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge with enhanced styling */}
        <motion.div variants={itemVariants}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-8 relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            
            <div className="relative glass-effect px-6 py-3 text-sm font-bold text-accent-cyan border border-accent-cyan/30 group-hover:border-accent-cyan/60 transition-all rounded-full">
              ✨ Welcome to my portfolio
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading with gradient animation */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <motion.span
              className="block text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="gradient-text block bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue relative"
              style={{ backgroundSize: '200% 200%' }}
            >
              {displayedText}
              {displayedText.length < fullName.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-1 h-12 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue ml-1 sm:ml-2"
                />
              )}
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-2"
          >
            I’m a passionate Software Developer who loves building modern, user-friendly applications.I turn ideas into clean, efficient code and real-world solutions.
          </motion.p>
        </motion.div>

        {/* CTA Buttons with Premium Design */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-12 sm:mb-16 px-4">
          {/* Primary Pill Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group relative"
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="relative text-white font-semibold flex items-center gap-2">
              Explore My Work
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary Pill Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary group relative"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-1 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-l -z-10"
              whileHover={{ scale: 1.2 }}
            />
            <span className="relative font-semibold flex items-center gap-2">
              Get in Touch
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-accent-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
