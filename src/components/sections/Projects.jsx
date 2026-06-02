import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi';
import { projects } from '../../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function TechTag({ name }) {
  return (
    <span className="px-2 py-1 rounded-md text-xs font-mono"
      style={{ background: 'rgba(79,142,255,0.08)', border: '1px solid rgba(79,142,255,0.15)', color: '#8888aa' }}>
      {name}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const isLarge = project.large;

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={`group relative rounded-2xl overflow-hidden ${isLarge ? 'md:col-span-2' : ''}`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Top gradient bar */}
      <div className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Project visual */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-48' : 'h-36'}`}
        style={{ background: `linear-gradient(135deg, ${project.gradient?.replace('from-', '').replace('to-', '') || '#1a1a2e'})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {project.id === 1 ? '📈' : project.id === 2 ? '💧' : '✈️'}
          </div>
        </div>
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 30% 50%, ${project.color}15, transparent 70%)` }} />
        
        {/* Badge */}
        {project.badge && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono"
            style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc' }}>
            <FiAward size={10} /> {project.badge}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-black text-white text-lg leading-tight">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <FiGithub size={14} />
            </a>
            {project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <FiExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Features list (large only) */}
        {isLarge && (
          <ul className="mb-4 grid grid-cols-2 gap-1.5">
            {project.features.map(f => (
              <li key={f} className="flex items-center gap-1.5 text-xs text-text-secondary">
                <span className="w-1 h-1 rounded-full bg-accent-cyan flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => <TechTag key={t} name={t} />)}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 40px ${project.color}08` }} />
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="orb w-80 h-80 -left-20 top-1/3" style={{ background: 'rgba(79,142,255,0.06)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Projects</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Projects that demonstrate real-world problem solving, from IoT to web development.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Arpit1825"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
