import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiAward, FiStar, FiBookOpen, FiZap } from 'react-icons/fi';
import { achievements } from '../../data';
import { useEffect, useRef, useState } from 'react';

const iconMap = {
  code: FiCode,
  patent: FiAward,
  iit: FiStar,
  trophy: FiZap,
  cert: FiBookOpen,
};

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!active || !target) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
      if (!ref.current) return;
      const progress = Math.min((timestamp - ref.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    ref.current = performance.now();
    requestAnimationFrame(step);
  }, [active, target]);

  if (!target) return null;
  return <span>{count}{suffix}</span>;
}

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" ref={ref} className="py-24 relative">
      <div className="orb w-96 h-96 right-0 top-0" style={{ background: 'rgba(168,85,247,0.06)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Achievements</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {[
            { label: 'DSA Problems', value: 200, suffix: '+', color: '#f7931a' },
            { label: 'Patents', value: 1, suffix: '', color: '#a855f7' },
            { label: 'Projects Built', value: 4, suffix: '+', color: '#4f8eff' },
          ].map((stat, i) => (
            <div key={i} className="card text-center"
              style={{ border: `1px solid ${stat.color}22` }}>
              <div className="text-2xl sm:text-2xl font-black mb-1 flex justify-center"
                style={{ color: stat.color }}>
                {inView && <CountUp target={stat.value} suffix={stat.suffix} active={inView} />}
              </div>
              <div className="text-text-muted text-xs font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || FiAward;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card group"
                style={{ border: `1px solid ${a.color}15` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${a.color}15`, border: `1px solid ${a.color}22` }}>
                    <Icon size={18} style={{ color: a.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{a.title}</h3>
                    <div className="text-xs font-mono mt-0.5" style={{ color: a.color }}>{a.subtitle}</div>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
