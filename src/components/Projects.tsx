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
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 via-blue-600/40 to-blue-700/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                boxShadow: [
                  '0 0 60px rgba(63, 94, 150, 0.25)',
                  '0 0 90px rgba(20, 30, 48, 0.4)',
                  '0 0 60px rgba(63, 94, 150, 0.3)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative glass-effect rounded-3xl p-8 md:p-10 border border-blue-500/30 bg-slate-950/70 backdrop-blur-xl">
              {/* Close Button with enhanced styling */}
              <motion.button
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center b hover:from-blue-500/40 hover:to-blue-600/40 border-2 border-blue-500/40 hover:border-blue-400/80 transition-all group"
              >
                <svg
                  className="w-7 h-7 text-blue-400 group-hover:text-blue-200 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
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
                  className="top-6 relative w-full h-full rounded-2xl overflow-hidden group/img"
                  whileHover={{ scale: 1.0 }}
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
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.25 + idx * 0.06, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2.5 bg-gradient-to-r from-blue-500/25 to-blue-600/25 border border-blue-500/50 text-blue-200 text-sm font-semibold rounded-full hover:border-blue-400/80 hover:bg-gradient-to-r hover:from-blue-500/35 hover:to-blue-600/35 transition-all duration-300 cursor-pointer"
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
                  className="flex gap-4 pt-8 border-t border-cyan-500/20"
                >
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.93 }}
                    className="flex-1 relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center rounded-lg font-bold transition-all duration-300 group text-lg"
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      View Live
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.93 }}
                    className="flex-1 relative px-8 py-4 border-2 border-blue-500/60 text-blue-300 font-bold rounded-lg text-center hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-200 transition-all duration-300 text-lg"
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
                className=""
                whileHover={{ scale: 1.15 }}
              />
              
              <div className="relative glass-effect rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col border border-blue-500/20 group-hover:border-blue-400/50">
                {/* Project Image with enhanced animations */}
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/10 group">
                  {/* Animated overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300"
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Enhanced hover overlay with better gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="hidden sm:block">
                      <span className="text-white-300 font-bold text-sm">Click to view</span>
                    </div>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg hidden sm:block text-whitw-400"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Project Info with improved spacing */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-5 flex-1 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags with enhanced styling and animations */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 2).map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8, y: 5 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + tagIdx * 0.08, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/40 group-hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 shadow-lg shadow-blue-500/10"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 2 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.16 }}
                        viewport={{ once: true }}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-300 border border-blue-600/40 group-hover:border-blue-600/60 transition-all duration-300 shadow-lg shadow-blue-600/10"
                      >
                        +{project.tags.length - 2} more
                      </motion.span>
                    )}
                  </div>

                  {/* Action Buttons with premium effects */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      className="flex-1 relative overflow-hidden px-4 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold rounded-lg text-center text-sm  transition-all duration-300 group/btn shadow-md shadow-blue-500/30"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover/btn:opacity-100"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 0.7,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        View Live
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      className="flex-1 relative px-4 py-3 border-2 border-blue-500/60 text-blue-300 font-bold rounded-lg text-center text-sm hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-200 transition-all duration-300 group/btn-code"
                    >
                      <span className="relative">View Code</span>
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
