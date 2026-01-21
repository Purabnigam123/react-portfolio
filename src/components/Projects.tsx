import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../utils/constants';

interface ProjectModalProps {
  project: (typeof PROJECTS)[0];
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 max-w-3xl mx-auto my-auto z-50 "
          >
            {/* Modal Container with glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-3xl blur-2xl opacity-100"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(0, 212, 255, 0.2)',
                  '0 0 60px rgba(167, 139, 250, 0.3)',
                  '0 0 40px rgba(0, 212, 255, 0.2)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative glass-effect rounded-3xl p-8 md:p-10 border border-accent-cyan/20">
              {/* Close Button with enhanced styling */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-dark-card hover:bg-dark-card/80 hover:border-accent-cyan/60 border border-dark-border transition-all group"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-accent-cyan transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Image with hover effect */}
                <motion.div
                  className=" relative w-160 h-full rounded-2xl overflow-hidden group/img"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent opacity-0 group-hover/img:opacity-70 transition-opacity" />
                </motion.div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-4xl font-bold gradient-text"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 leading-relaxed text-lg"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Tags with animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + idx * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/40 text-accent-cyan text-sm font-semibold rounded-full hover:border-accent-cyan/80 transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 pt-6 border-t border-dark-border/50"
                >
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 relative overflow-hidden px-8 py-3 btn-primary text-center group"
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                      View Live
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 relative px-8 py-3 border-2 border-accent-cyan text-accent-cyan font-bold rounded-lg text-center hover:bg-accent-cyan/10 transition-all"
                  >
                    View Code
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

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
    <section id="projects" className="py-20 px-4 relative">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">A selection of my best work</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group cursor-pointer relative ${
                project.id === 3 ? 'hidden lg:block' : ''
              }`}
            >
              {/* Card container with enhanced glow on hover */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
              
              <div className="relative glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent-cyan/40 transition-all duration-300 h-full flex flex-col border border-accent-cyan/10 group-hover:border-accent-cyan/60">
                {/* Project Image with enhanced animations */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20">
                  {/* Animated overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 opacity-0 group-hover:opacity-100 mix-blend-overlay"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Enhanced hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="hidden sm:block">
                      <span className="text-accent-cyan font-bold text-sm">Click to view</span>
                    </div>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg hidden sm:block"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags with enhanced styling */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + tagIdx * 0.05 }}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 text-accent-cyan border border-accent-cyan/30 group-hover:border-accent-cyan/60 transition-all"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/30">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons with enhanced effects */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 relative overflow-hidden px-4 py-2.5 bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-bg font-semibold rounded-lg text-center text-sm hover:shadow-lg hover:shadow-accent-cyan/50 transition-all group/btn"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                      />
                      <span className="relative">Visit</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 relative px-4 py-2.5 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg text-center text-sm hover:bg-accent-cyan/10 transition-all"
                    >
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
