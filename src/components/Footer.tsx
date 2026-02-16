import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    {
      label: 'GitHub',
      url: 'https://github.com/Purabnigam123',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/purab-nigam-48a31326b/',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      label: 'X',
      url: 'https://x.com/Purab421620',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-4.266-5.586-4.886 5.586h-3.31l7.732-8.835L2.882 2.25h6.908l3.884 5.049L17.661 2.25h.583zm-1.106 17.48h1.829L5.293 4.071H3.622l13.516 15.659z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-slate-950/90 backdrop-blur-xl">
      {/* Gradient line at top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Top row: Brand — Nav — Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-500/20">
              P
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Purab Nigam</h3>
              <p className="text-xs text-gray-500">Full-Stack Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8"
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {currentYear} Purab Nigam. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-400"
            >
              ♥
            </motion.span>
            using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-blue-500/90 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center z-40 shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-colors"
            title="Back to top"
          >
            <motion.svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
