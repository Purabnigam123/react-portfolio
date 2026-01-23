import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  // Handle scroll event to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-blue-500/30 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/70 backdrop-blur-xl overflow-hidden">
      {/* Enhanced animated gradient overlay - subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-blue-600/8 to-blue-700/8 opacity-40" />
      
      {/* Animated background glows - subtle */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -left-40 top-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -right-40 bottom-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
      />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/20 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Top Section - Brand on left, Centered Navigation, Social on right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12"
        >
          {/* Brand Section - Left */}
          <motion.div variants={itemVariants} className="space-y-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/40">
                P
              </div>
              <h3 className="text-xl font-bold gradient-text">Purab</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting beautiful digital experiences.
            </p>
          </motion.div>

          {/* Centered Navigation */}
          <motion.div variants={itemVariants} className="flex-1">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {footerLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ color: '#3F5E96', y: -2 }}
                  className="text-gray-400 hover:text-accent-cyan transition-all duration-300 text-sm font-semibold"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links - Right */}
          <motion.div variants={itemVariants} className="flex gap-3 flex-shrink-0">
            <motion.a
              href="https://github.com/Purabnigam123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-700 to-black hover:from-gray-600 hover:to-gray-800 transition-all duration-300 group"
              title="GitHub"
            >
              <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/purab-nigam-48a31326b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 group"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://x.com/Purab421620"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-all duration-300 group"
              title="Twitter/X"
            >
              <svg className="w-5 h-5 text-white group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-4.266-5.586-4.886 5.586h-3.31l7.732-8.835L2.882 2.25h6.908l3.884 5.049L17.661 2.25h.583zm-1.106 17.48h1.829L5.293 4.071H3.622l13.516 15.659z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>        
        {/* Divider with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-left mb-12"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          {/* Copyright */}
          <motion.p className="text-sm text-gray-300 font-medium text-center">
            © {currentYear} Purab Nigam. Crafted with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              💜
            </motion.span>
            {' '}using React & Tailwind.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button - appears after scrolling (Bottom Right Corner) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.1, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 left-400 w-15 h-15 rounded-xl flex items-center justify-center z-40 group relative overflow-hidden border border-accent-cyan/40 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            title="Back to top"
          >
            <motion.svg
              className="w-6 h-6 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19V5m-7 7l7-7 7 7"
              />
            </motion.svg>
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
