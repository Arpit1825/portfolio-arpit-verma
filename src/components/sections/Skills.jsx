import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { skills } from '../../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const categoryColors = {
  'Programming': '#4f8eff',
  'Frontend': '#a855f7',
  'Backend': '#22d3ee',
  'Databases': '#fb923c',
  'Libraries & Tools': '#f472b6',
  'Core Concepts': '#34d399',
};

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-primary font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [active, setActive] = useState('Programming');

  const categories = Object.keys(skills);

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="orb w-64 h-64 right-0 top-1/4" style={{ background: 'rgba(168,85,247,0.06)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Tech Stack</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A curated stack spanning frontend, backend, AI/ML, and systems programming.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: active === cat ? `${categoryColors[cat]}22` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${active === cat ? `${categoryColors[cat]}44` : 'rgba(255,255,255,0.06)'}`,
                color: active === cat ? categoryColors[cat] : '#8888aa',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills[active]?.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="card group hover:border-white/[0.1] transition-all duration-300"
                style={{
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-white">{skill.name}</span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                    style={{ background: `${categoryColors[active]}15`, color: categoryColors[active] }}
                  >
                    {skill.level}
                  </div>
                </div>
                <SkillBar
                  name=""
                  level={skill.level}
                  color={categoryColors[active]}
                  inView={inView}
                />
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className="flex-1 h-1 rounded-full transition-all duration-500"
                        style={{
                          background: idx < Math.round(skill.level / 20)
                            ? categoryColors[active]
                            : 'rgba(255,255,255,0.06)',
                          transitionDelay: `${idx * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-text-muted text-xs font-mono mt-1">
                    {skill.level >= 85 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="text-center text-text-secondary text-sm font-mono mb-6">Developer Tools & Environments</div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Postman', 'NPM'].map(tool => (
              <div key={tool} className="px-4 py-2 glass rounded-xl text-sm text-text-secondary hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                {tool}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
