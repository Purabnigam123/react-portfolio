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

    // Initialize EmailJS on component mount
    useEffect(() => {
      emailjs.init('zprniBXsaI3YsSlun');
    }, []);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      try {
        await emailjs.send('service_h7t625j', 'template_glrxs1a', {
          to_email: 'purabnigam2005@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        });

        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } catch (err) {
        setError('Failed to send message. Please try again.');
        console.error('Email error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
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

    const contactMethods = [
      {
        icon: '',
        label: 'Email',
        value: 'purabnigam2005@gmail.com',
        link: 'mailto:purabnigam2005@gmail.com',
      },
      {
        icon: '',
        label: 'Phone',
        value: '+91 78384 81125',
        link: 'tel:+917838481125',
      },
      {
        icon: '',
        label: 'Location',
        value: 'Rohini, Delhi, India',
        link: 'https://www.google.com/maps/@28.7366926,77.1187022,18.52z?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D',
      },
    ];

    const socialLinks = [
      { 
        icon: <svg className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
        label: 'GitHub', 
        url: 'https://github.com/Purabnigam123',
        bgGradient: 'from-gray-700 to-black hover:from-gray-600 hover:to-gray-800'
      },
      { 
        icon: <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>,
        label: 'LinkedIn', 
        url: 'https://linkedin.com/in/purab-nigam-48a31326b/',
        bgGradient: 'from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800'
      },
      { 
        icon: <svg className="w-5 h-5 text-white group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-4.266-5.586-4.886 5.586h-3.31l7.732-8.835L2.882 2.25h6.908l3.884 5.049L17.661 2.25h.583zm-1.106 17.48h1.829L5.293 4.071H3.622l13.516 15.659z"/></svg>,
        label: 'Twitter', 
        url: 'https://x.com/Purab421620',
        bgGradient: 'from-gray-800 to-black hover:from-gray-700 hover:to-gray-900'
      },
    ];

    return (
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's discuss and create something amazing
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Contact Info Section - Left Column */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">
                  Get in <span className="gradient-text">Touch</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Whether you have a question or a project idea, feel free to reach out. I'm always open to new opportunities.
                </p>
              </div>

              {/* Contact Methods - Enhanced Design */}
              <div className="space-y-3">
                {contactMethods.map((contact, idx) => (
                  <motion.a
                    key={contact.label}
                    href={contact.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="group block relative overflow-hidden rounded-xl  border-accent-cyan/20 hover:border-accent-cyan/60 transition-all duration-300 p-4 bg-gradient-to-br from-dark-card/50 to-dark-bg/50 hover:from-dark-card/80 hover:to-dark-bg/80"
                  >
                    {/* Hover glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative flex items-center gap-3">
                      <motion.span
                        className="text-2xl group-hover:scale-110 transition-transform"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      >
                        {contact.icon}
                      </motion.span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{contact.label}</p>
                        <p className="font-semibold text-gray-100 group-hover:text-accent-cyan transition-colors truncate text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-400 mb-4 font-medium">Follow me</p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br ${social.bgGradient} transition-all duration-300 group border border-white/20`}
                      title={social.label}
                    >
                      <span className="relative">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side (Spans 2 columns on large screens) */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl border border-accent-cyan/20 transition-all duration-300 p-8 group"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10" />
                
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Send me a message</h3>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
                        Your Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-border/50 rounded-lg focus:outline-none focus:border-accent-cyan/80 focus:bg-dark-bg transition-all text-gray-100 placeholder-gray-600"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                        Email Address
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-border/50 rounded-lg focus:outline-none focus:border-accent-cyan/80 focus:bg-dark-bg transition-all text-gray-100 placeholder-gray-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-border/50 rounded-lg focus:outline-none focus:border-accent-cyan/80 focus:bg-dark-bg transition-all text-gray-100 placeholder-gray-600 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/40 rounded-lg text-red-400 text-sm font-medium flex items-center gap-2"
                    >
                      <span>⚠</span>
                      {error}
                    </motion.div>
                  )}

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-lg text-green-400 text-sm font-medium flex items-center gap-2"
                    >
                      <span>✓</span>
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                    className="w-full relative overflow-hidden px-8 py-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-2xl"
                  >
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                    />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            ⚙️
                          </motion.span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default Contact;
