import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiCalendar, FiTarget } from 'react-icons/fi';
import { timeline, education, personalInfo } from '../../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const TimelineIconMap = {
  education: '🎓',
  code: '💻',
  react: '⚛️',
  patent: '📄',
  ai: '🤖',
  target: '🎯',
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">About Me</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Building the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A passionate CS student at the intersection of AI, web development, and systems thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – info cards */}
          <div>
            <motion.div
              initial="hidden" animate={inView ? 'show' : 'hidden'}
              variants={{ show: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
              className="space-y-4"
            >
              {/* Who I am */}
              <motion.div variants={fadeUp} className="card">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-lg">👋</span> Who I Am
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  I'm a second-year Computer Science (AI & ML) student at PSIT Kanpur, passionate about
                  building real-world software. I specialize in the MERN stack, have a knack for DSA,
                  and love exploring machine learning concepts.
                </p>
              </motion.div>

              {/* Education card */}
              <motion.div variants={fadeUp} className="card">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-lg">🎓</span> Education
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                    style={{ background: 'linear-gradient(135deg, #4f8eff22, #a855f722)', border: '1px solid rgba(79,142,255,0.2)' }}>
                    🏛️
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{education.college}</div>
                    <div className="text-accent-blue text-xs font-mono mt-0.5">{education.degree}</div>
                    <div className="text-text-muted text-xs mt-0.5">{education.branch}</div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text-secondary">
                      <span className="flex items-center gap-1"><FiCalendar size={10} /> {education.duration}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={10} /> Kanpur, UP</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {education.coursework.map(c => (
                        <span key={c} className="px-2 py-0.5 rounded-md text-[10px] font-mono"
                          style={{ background: 'rgba(79,142,255,0.08)', border: '1px solid rgba(79,142,255,0.15)', color: '#8888aa' }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Career Goal */}
              <motion.div variants={fadeUp} className="card"
                style={{ border: '1px solid rgba(79,142,255,0.15)', background: 'rgba(79,142,255,0.05)' }}>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <FiTarget className="text-accent-blue" /> Career Goal
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed italic">
                  "{personalInfo.careerGoal}"
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right – journey timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-6 text-lg">Learning Journey</h3>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(180deg, #4f8eff, #a855f7, transparent)' }} />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex gap-4 group"
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all duration-300"
                      style={{
                        background: 'rgba(79,142,255,0.1)',
                        border: '1px solid rgba(79,142,255,0.2)',
                      }}>
                      {TimelineIconMap[item.icon]}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-accent-blue text-xs font-mono">{item.year}</span>
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      </div>
                      <p className="text-text-secondary text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
