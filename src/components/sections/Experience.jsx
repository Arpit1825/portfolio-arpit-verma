import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timeline } from '../../data';
import { FiCode, FiAward, FiBookOpen, FiTarget, FiActivity } from 'react-icons/fi';
import { FaReact, FaBrain } from 'react-icons/fa';

const iconMap = {
  education: FiBookOpen,
  code: FiCode,
  react: FaReact,
  patent: FiAward,
  ai: FaBrain,
  target: FiTarget,
};

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="py-24 relative border-t border-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="section-tag mb-3">Roadmap</div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary">
            Engineering Journey
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mt-2">
            A linear progression of my academic milestones, technical achievements, and future targets.
          </p>
        </motion.div>

        {/* Timeline Track */}
        <div className="relative border-l border-border/80 ml-4 sm:ml-8 space-y-12">
          {timeline.map((item, index) => {
            const Icon = iconMap[item.icon] || FiCode;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 group"
              >
                {/* Timeline node node indicator */}
                <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-border text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon size={14} />
                </span>

                {/* Milestone details wrapper */}
                <div className="border-card bg-surface relative overflow-hidden p-6 hover:border-accent/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3 mb-3">
                    <h3 className="text-base font-bold font-heading text-text-primary">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-border bg-nested text-accent">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
