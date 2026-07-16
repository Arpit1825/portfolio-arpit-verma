import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, personalInfo, currentlyBuilding } from '../../data';
import { FiEye, FiDroplet, FiUsers, FiCompass, FiTrendingUp, FiCode, FiMapPin, FiArrowRight } from 'react-icons/fi';

const getProjectIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('vision') || t.includes('cart')) return FiEye;
  if (t.includes('civic') || t.includes('incident')) return FiMapPin;
  if (t.includes('water')) return FiDroplet;
  if (t.includes('queue')) return FiUsers;
  if (t.includes('travel')) return FiCompass;
  if (t.includes('crypto')) return FiTrendingUp;
  return FiCode;
};

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-16 relative border-t border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-text-primary">
            Projects & Active Builds
          </h2>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1 text-xs font-mono text-accent hover:underline"
          >
            View all projects <FiArrowRight size={14} />
          </a>
        </div>

        {currentlyBuilding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border-card bg-surface relative overflow-hidden p-6 mb-12"
          >
            <div className="grid md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary font-mono">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    {currentlyBuilding.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-text-primary tracking-tight">
                    {currentlyBuilding.title}
                  </h3>
                  <p className="text-xs text-text-secondary font-mono mt-1">
                    {currentlyBuilding.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {currentlyBuilding.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {currentlyBuilding.tech.map((tech) => (
                      <span key={tech} className="tech-tag text-[9px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                
                </div>

              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-36 h-36 flex items-center justify-center border border-border bg-nested rounded-xl">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />
                  
                  <svg className="w-16 h-16 text-accent animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        <div className="border-t border-border/80 pt-10 mb-8">
          <span className="font-mono text-[20px] tracking-widest">
            Featured Builds
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => {
            const IconComponent = getProjectIcon(proj.title);
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-card bg-surface flex flex-col justify-between h-full p-6"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-border text-accent bg-nested mb-4">
                    <IconComponent size={18} />
                  </div>

                  <div className="mb-2">
                    <h3 className="text-base font-bold font-heading text-text-primary tracking-tight line-clamp-1">
                      {proj.title}
                    </h3>
                    {proj.badge && (
                      <span className="inline-block text-[9px] font-mono text-accent mt-0.5 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.2 rounded">
                        {proj.badge.includes('Patent') ? 'Patent' : 'Award'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-tag text-[9px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={proj.demo && proj.demo !== '#' ? proj.demo : proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline mt-auto"
                >
                  View Project <FiArrowRight size={12} className="text-accent" />
                </a>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
