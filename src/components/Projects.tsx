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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 max-w-3xl mx-auto my-auto z-50 flex items-center"
          >
            <div className="relative w-full rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/10">
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />

              <motion.button
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="p-6 md:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
                <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                  >
                    View Live →
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 px-6 py-3 border border-blue-500/40 text-blue-300 text-center rounded-xl font-semibold hover:bg-blue-500/10 hover:border-blue-400/60 transition-all"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />
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
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
            A selection of my recent work — click any to learn more
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-slate-900/60 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
                {/* Gradient top accent */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Project Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{
                      scale: hoveredId === project.id ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Floating project number */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-300">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* View prompt on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 10,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="px-4 py-2 rounded-full bg-blue-500/90 backdrop-blur-sm text-white text-sm font-semibold shadow-lg">
                      View Details
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1 leading-relaxed line-clamp-2 group-hover:text-gray-400 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06] group-hover:text-blue-300 group-hover:border-blue-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-[10px] font-semibold rounded-md text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
