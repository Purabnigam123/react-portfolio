import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION } from '../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION.map(item => item.href.replace('#', ''));
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (within 200px from top)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    setActiveLink(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Premium glass background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/0 backdrop-blur-2xl" />
      
      {/* Decorative top glow */}
      <div className="absolute -top-1 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with premium glow */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 group relative"
          >
            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white">
              P
            </div>
            <span className="relative font-bold text-xl gradient-text-pink hidden sm:inline">HELLO!!!</span>
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {NAVIGATION.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => handleNavClick(item.href)}
                className="relative group px-5 py-2.5 text-sm font-semibold text-gray-300/80 transition-colors duration-300"
              >
                {/* Text color change on hover */}
                <motion.span
                  whileHover={{ color: '#a9d1ff' }}
                  transition={{ duration: 0.2 }}
                  className="relative font-medium"
                >
                  {item.name}
                </motion.span>

                {/* Animated underline slide for active link */}
                {activeLink === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Social Links with theme colors - Right side */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <motion.a
              href="https://github.com/Purabnigam123"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-700 to-black hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
              title="GitHub"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/purab-nigam-48a31326b/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://x.com/Purab421620"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              title="Twitter/X"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-4.266-5.586-4.886 5.586h-3.31l7.732-8.835L2.882 2.25h6.908l3.884 5.049L17.661 2.25h.583zm-1.106 17.48h1.829L5.293 4.071H3.622l13.516 15.659z"/>
              </svg>
            </motion.a>
          </div>

          {/* Mobile Menu Button with enhanced styling */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 relative group"
          >
            {/* Enhanced glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-0 blur group-hover:opacity-30 transition-all"
              whileHover={{ scale: 1.1 }}
            />
            
            <div className="relative w-6 h-6 flex flex-col justify-around">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden relative"
      >
        {/* Enhanced mobile menu background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-900/95 backdrop-blur-xl" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <div className="relative px-4 py-6 space-y-2 border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20">
          {NAVIGATION.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ x: 8, scale: 1.02 }}
              className={`group block px-4 py-3.5 rounded-lg font-semibold transition-all relative overflow-hidden ${
                activeLink === item.href.replace('#', '')
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {/* Gradient hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg -z-10"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              />
              
              {/* Animated underline for active link */}
              {activeLink === item.href.replace('#', '') && (
                <motion.div
                  layoutId="mobile-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                />
              )}
              
              <span className="relative font-medium flex items-center gap-2">
                {item.name}
                {activeLink === item.href.replace('#', '') && (
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    ✓
                  </motion.span>
                )}
              </span>
            </motion.a>
          ))}
          
          {/* Social icons in mobile menu */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-6 mt-6 border-t border-cyan-500/20 flex gap-3 justify-start"
          >
            <motion.a
              href="https://github.com/Purabnigam123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-700 to-black hover:from-gray-600 hover:to-gray-800 transition-all"
              title="GitHub"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/purab-nigam-48a31326b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 transition-all"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://x.com/Purab421620"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-all"
              title="Twitter/X"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-4.266-5.586-4.886 5.586h-3.31l7.732-8.835L2.882 2.25h6.908l3.884 5.049L17.661 2.25h.583zm-1.106 17.48h1.829L5.293 4.071H3.622l13.516 15.659z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
