import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { SKILLS } from '../utils/constants';

// SVG icons for each category
const categoryIcons: Record<string, ReactNode> = {
  Frontend: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  Backend: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  'Tools & Others': (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0l5.1 5.1a2.121 2.121 0 01-3 3l-5.1-5.1zm0 0L9 13m2.42 2.17L15 11.59" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const categoryColors: Record<string, { from: string; to: string; bar: string; border: string }> = {
  Frontend: {
    from: 'from-blue-400',
    to: 'to-cyan-400',
    bar: 'from-blue-900 to-blue-300',
    border: 'border-blue-500/30 hover:border-blue-400/60',
  },
  Backend: {
    from: 'from-blue-400',
    to: 'to-cyan-400',
    bar: 'from-blue-900 to-blue-300',
    border: 'border-violet-500/30 hover:border-violet-400/60',
  },
  'Tools & Others': {
    from: 'from-blue-400',
    to: 'to-cyan-400',
    bar: 'from-blue-900 to-blue-300',
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
  },
};

// Animated progress bar component
const SkillBar = ({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) => (
  <div className="group/skill">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-semibold text-gray-300 group-hover/skill:text-white transition-colors">
        {name}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
        viewport={{ once: true }}
        className="text-xs font-bold text-gray-400 tabular-nums"
      >
        {level}%
      </motion.span>
    </div>
    <div className="relative h-2 bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${color}`}
      >
        {/* Shine effect on the bar */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
          initial={{ x: '-100%' }}
          whileInView={{ x: '200%' }}
          transition={{ duration: 1.5, delay: delay + 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  </div>
);

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  const techStack = [
    { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
    { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-blue-300 border border-blue-400/30 rounded-full bg-blue-500/5"
          >
            What I Know
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {SKILLS.map((skillCategory, categoryIdx) => {
            const colors = categoryColors[skillCategory.category] || categoryColors.Frontend;
            const icon = categoryIcons[skillCategory.category];

            return (
              <motion.div
                key={skillCategory.category}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl border ${colors.border} transition-all duration-500 cursor-default`}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl" />

                {/* Gradient accent at top */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${colors.from} ${colors.to} opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Corner glow on hover */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colors.from} ${colors.to} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-7 lg:p-8 z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${colors.from}/10 ${colors.to}/10 border border-white/5 text-gray-300 group-hover:text-white transition-colors`}>
                      {icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {skillCategory.category}
                    </h3>
                  </div>

                  {/* Skills with animated progress bars */}
                  <div className="space-y-4">
                    {skillCategory.items.map((skill, idx) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={colors.bar}
                        delay={categoryIdx * 0.1 + idx * 0.08}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10 group"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="relative p-10 sm:p-12 z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
              Tech Stack I <span className="gradient-text">Love</span>
            </h3>
            <p className="text-gray-500 text-sm text-center mb-10">
              My go-to technologies for building amazing products
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: idx * 0.1,
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.12, y: -6 }}
                  className="group/tech relative flex flex-col items-center"
                >
                  {/* Glow under logo on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400/0 group-hover/tech:bg-blue-400/20 rounded-full blur-xl transition-all duration-300" />

                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/10 group-hover/tech:border-blue-400/50 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover/tech:bg-white/[0.08]">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-14 sm:h-14 object-contain opacity-75 group-hover/tech:opacity-100 transition-all duration-300 group-hover/tech:scale-110"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-400 text-center mt-3 group-hover/tech:text-white transition-colors duration-300">
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
