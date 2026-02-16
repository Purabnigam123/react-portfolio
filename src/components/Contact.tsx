import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('HUlUU17mXxxZeG6qa');
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send('service_d4ayj8k', 'template_glrxs1a', {
        to_email: 'purabnigam2005@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Email error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'purabnigam2005@gmail.com',
      link: 'mailto:purabnigam2005@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 78384 81125',
      link: 'tel:+917838481125',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Rohini, Delhi, India',
      link: 'https://www.google.com/maps/@28.7366926,77.1187022,18.52z',
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      url: 'https://github.com/Purabnigam123',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/purab-nigam-48a31326b/',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-4.266-5.586-4.886 5.586h-3.31l7.732-8.835L2.882 2.25h6.908l3.884 5.049L17.661 2.25h.583zm-1.106 17.48h1.829L5.293 4.071H3.622l13.516 15.659z" />
        </svg>
      ),
      label: 'X / Twitter',
      url: 'https://x.com/Purab421620',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-blue-300 border border-blue-400/30 rounded-full bg-blue-500/5"
          >
            Contact
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
            Have a project in mind? Let's discuss and create something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you have a question or a project idea, feel free to reach out. I'm always open to new opportunities.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-3">
              {contactMethods.map((contact, idx) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.label === 'Location' ? '_blank' : undefined}
                  rel={contact.label === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">
                      {contact.label}
                    </p>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">
                      {contact.value}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
                Follow me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              {/* Form top accent */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              <div className="p-6 sm:p-8 space-y-5">
                <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                <p className="text-gray-500 text-sm mb-6">Fill out the form and I'll get back to you shortly.</p>

                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2"
                  >
                    <span>⚠</span> {error}
                  </motion.div>
                )}

                {/* Success */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-2"
                  >
                    <span>✓</span> Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full relative overflow-hidden px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25 transition-shadow group"
                >
                  {/* Shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
