import { motion } from 'framer-motion';
import { SKILLS } from '../utils/constants';

const Skills = () => {
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

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">Tools and technologies I work with</p>
        </motion.div>

        {/* Skill Categories Grid - Refactored to modern cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {SKILLS.map((skillCategory, categoryIdx) => (
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 cursor-pointer glass-effect"
            >
              {/* Premium inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 pointer-events-none" />
              
              {/* Enhanced hover glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-300 -z-10"
                whileHover={{ scale: 1.2 }}
              />

              {/* Animated background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-3xl"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="relative p-8 lg:p-10 z-10">
                {/* Category Title with Icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {['🛠️', '⚡', '💡'][categoryIdx % 3]}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold gradient-text-pink">
                      {skillCategory.category}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid within category */}
                <div className="space-y-3">
                  {skillCategory.items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIdx * 0.15 + idx * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8, scale: 1.05 }}
                      className="group/item relative px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover/item:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      />

                      <div className="relative flex justify-between items-center">
                        <span className="font-semibold text-gray-300 group-hover/item:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: categoryIdx * 0.15 + idx * 0.08 + 0.2 }}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 rounded-full text-xs font-bold text-cyan-300 border border-cyan-400/30"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Cloud - Image-based Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-gradient-to-r from-cyan-400/40 via-transparent to-purple-500/40 transition-all duration-300 group"
        >
          {/* Inner glow gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative p-12">
            <h3 className="text-3xl font-bold mb-10 text-center">
              Tech Stack I <span className="gradient-text">Love</span>
            </h3>

            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
                { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
                { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
                { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
                { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
                { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
                
              ].map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group/tech relative"
                >
                  {/* Card with image */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/30 hover:border-accent-cyan/80 flex items-center justify-center overflow-hidden cursor-default transition-all duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-14 h-14 object-contain opacity-80 group-hover/tech:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-300 text-center mt-3 group-hover/tech:text-accent-cyan transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
