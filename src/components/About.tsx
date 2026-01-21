import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };



  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              {/* Animated Border */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                    '0 0 40px rgba(167, 139, 250, 0.5)',
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl border border-accent-cyan/30"
              />

              {/* Image Placeholder with Gradient */}
              <div className="w-full h-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 via-dark-bg to-accent-cyan/30 opacity-60" />
                <img
                  src="/me.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-100">
                Building Ideas into Scalable Digital Experiences
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
               I’m a Computer Science undergraduate with a deep love for building things that live on the internet. From crafting sleek user interfaces to engineering powerful backends and experimenting with AI/ML models, I enjoy every layer of the stack.
              </p>
             <p className="text-gray-400 leading-relaxed mb-4">
                I thrive on solving meaningful problems, exploring new technologies, and turning ideas into functional digital experiences. Whether I’m debugging late at night, refining user journeys, or training intelligent systems, I bring curiosity, creativity, and consistency to everything I build.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently pursuing my B.Tech while sharpening my skills in MERN stack development and AI/ML, I’m on a journey to become a thoughtful software engineer who creates products that truly matter.
              </p>
            </div>



            {/* CTA Button with Premium Pill Design */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block mt-10 group"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative text-white font-semibold flex items-center gap-2">
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
