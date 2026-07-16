import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutCards } from '../../data';
import { FiBookOpen, FiTerminal, FiTarget, FiUser } from 'react-icons/fi';

const iconMap = {
  education: FiBookOpen,
  code: FiTerminal,
  target: FiTarget,
  user: FiUser,
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-12 relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon] || FiTerminal;
            return (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="dashboard-widget flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-4">
                    <span className="font-heading text-sm font-bold text-text-primary">
                      {card.title}
                    </span>
                    <div className="w-7 h-7 rounded border border-border flex items-center justify-center text-accent bg-nested">
                      <Icon size={13} />
                    </div>
                  </div>
                  
                  <p className="text-xs text-text-secondary leading-relaxed pt-1">
                    {card.desc}
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
