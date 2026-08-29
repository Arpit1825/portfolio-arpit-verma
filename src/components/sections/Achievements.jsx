import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiAward, FiStar, FiZap, FiBookOpen } from 'react-icons/fi';
import { achievements } from '../../data';

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
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [leetcodeStats, setLeetcodeStats] = useState({
    totalSolved: 250,
    totalQuestions: 500,
    easySolved: 90,
    easyTotal: 150,
    mediumSolved: 100,
    mediumTotal: 250,
    hardSolved: 15,
    hardTotal: 100,
    ranking: "152,431"
  });

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/code_x_arpit`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setLeetcodeStats({
            totalSolved: data.totalSolved,
            totalQuestions: data.totalQuestions,
            easySolved: data.easySolved,
            easyTotal: data.totalEasy,
            mediumSolved: data.mediumSolved,
            mediumTotal: data.totalMedium,
            hardSolved: data.hardSolved,
            hardTotal: data.totalHard,
            ranking: data.ranking
          });
        }
      });
  }, []);

  return (
    <section id="achievements" ref={ref} className="py-24 relative border-t border-border">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3">Milestones</div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary">
            Achievements & Code Stats
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mt-2">
            A real-time overview of my competitive programming metrics and national recognitions.
          </p>
        </motion.div>

        

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || FiAward;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="border-card bg-surface group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-nested border border-border group-hover:border-accent transition-colors duration-300">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-sm tracking-tight">{a.title}</h3>
                    <div className="text-xs font-mono mt-0.5 text-accent">{a.subtitle}</div>
                    <p className="text-text-secondary text-xs mt-3 leading-relaxed">{a.description}</p>
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
