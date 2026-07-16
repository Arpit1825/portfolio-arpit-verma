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
    totalSolved: 205,
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-card bg-surface mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="40" 
                    stroke="var(--color-border)" 
                    strokeWidth="8" 
                    fill="transparent" 
                  />
                  <circle 
                    cx="50" cy="50" r="40" 
                    stroke="var(--color-accent)" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * (leetcodeStats.totalSolved / leetcodeStats.totalQuestions))}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center font-mono">
                  <span className="text-2xl font-bold text-text-primary">
                    {inView && <CountUp target={leetcodeStats.totalSolved} suffix="" active={inView} />}
                  </span>
                  <span className="text-[9px] text-text-secondary uppercase tracking-widest mt-0.5">
                    Solved
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold font-heading text-text-primary">
                  LeetCode Analytics
                </h3>
                <p className="text-xs text-text-secondary mt-1 font-mono">
                  Handle: <a href="https://leetcode.com/code_x_arpit" target="_blank" rel="noreferrer" className="text-accent hover:underline">code_x_arpit</a>
                </p>
                <div className="text-[10px] text-text-secondary mt-3 font-mono">
                  Global Rank: <span className="text-text-primary font-semibold">{leetcodeStats.ranking}</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-emerald-500 font-semibold">Easy</span>
                  <span className="text-text-secondary">{leetcodeStats.easySolved} / {leetcodeStats.easyTotal}</span>
                </div>
                <div className="w-full h-2 bg-nested rounded-full overflow-hidden border border-border/30">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${(leetcodeStats.easySolved / leetcodeStats.easyTotal) * 100}%` : '0%' }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-yellow-500 font-semibold">Medium</span>
                  <span className="text-text-secondary">{leetcodeStats.mediumSolved} / {leetcodeStats.mediumTotal}</span>
                </div>
                <div className="w-full h-2 bg-nested rounded-full overflow-hidden border border-border/30">
                  <div 
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${(leetcodeStats.mediumSolved / leetcodeStats.mediumTotal) * 100}%` : '0%' }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-red-500 font-semibold">Hard</span>
                  <span className="text-text-secondary">{leetcodeStats.hardSolved} / {leetcodeStats.hardTotal}</span>
                </div>
                <div className="w-full h-2 bg-nested rounded-full overflow-hidden border border-border/30">
                  <div 
                    className="h-full bg-red-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${(leetcodeStats.hardSolved / leetcodeStats.hardTotal) * 100}%` : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>
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
