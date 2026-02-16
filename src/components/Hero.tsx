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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  const stats = [
    { label: 'Years Coding', value: '2+' },
    { label: 'Curiosity', value: '∞' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 sm:pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-slate-950/20 to-transparent" />

        <motion.div
          animate={{ opacity: [0.7, 0.5, 0.7], scale: [1.75, 2.5, 1.75] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-32 top-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.7, 0.5, 0.7], scale: [1.75, 1.25, 1.75] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-32 bottom-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content — two-column layout */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left column: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-300 backdrop-blur-xl bg-white/[0.06] px-4 py-1.5 rounded-full border border-white/10">
                  Available for opportunities
                </span>
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.08] tracking-tight mb-4">
                <span className="block text-gray-100 text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-1">
                  Hi, I'm
                </span>
                <span className="hero-gradient-text block">
                  {displayedText}
                  {displayedText.length < fullName.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-1 h-[0.75em] bg-gradient-to-b from-blue-400 to-blue-600 ml-1 align-baseline"
                    />
                  )}
                </span>
              </h1>
            </motion.div>

            {/* Role subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 italic">
                <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
                <span className="text-blue-400 mx-2">&</span>
                <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  UI Enthusiast
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                A Computer Science student passionate about building{' '}
                <span className="text-white font-semibold">sleek, functional websites</span> and{' '}
                <span className="text-white font-semibold">modern web applications</span>.
                Driven by curiosity, creativity, and the pursuit of innovation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative text-white font-semibold flex items-center gap-2">
                  View My Work
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group relative"
              >
                <span className="relative font-semibold flex items-center gap-2">
                  Let's Connect
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.15 }}
                  className="group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white italic">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 relative"
          >
            {/* Glow behind the photo */}
            <motion.div
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-blue-600/30 rounded-full blur-3xl scale-110"
            />

            {/* Rotating gradient border ring */}
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #7faef8, #1c03ff, #0004ff, #7faef8)',
                }}
              />

              {/* Inner dark border */}
              <div className="absolute inset-[3px] rounded-full bg-slate-950" />

              {/* Photo */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <img
                  src="/me2.jpeg"
                  alt="Purab Nigam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative floating dots around photo */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={deg}
                className="absolute w-2 h-2 bg-blue-400/40 rounded-full hidden md:block"
                style={{
                  top: `${50 + 54 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 54 * Math.cos((deg * Math.PI) / 180)}%`,
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
