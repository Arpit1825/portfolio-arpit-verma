import { useInView } from 'react-intersection-observer';
import { skills } from '../../data';

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const categories = Object.keys(skills);

  return (
    <section id="skills" ref={ref} className="py-20 relative border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="mb-16">
          
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary mt-4">
            Tech Stack & Core Concepts
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
            Languages, libraries, platforms, and databases I actively build with, alongside core computer science concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat}
              className="border-card bg-surface flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-border/60 pb-3 mb-5">
                  <h3 className="text-sm font-bold font-heading text-text-primary uppercase tracking-wider">
                    {cat}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills[cat].map((skill) => (
                    <span 
                      key={skill.name} 
                      className="inline-flex items-center px-3 py-1.5 rounded-full border border-border/80 text-xs font-mono text-text-secondary bg-transparent hover:border-accent hover:text-text-primary transition-colors duration-150"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
