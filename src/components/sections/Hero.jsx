import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiCode, FiMail } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiPython, SiCplusplus, SiMongodb, SiJavascript } from 'react-icons/si';

const floatingTechs = [
  { Icon: SiReact, color: '#61DAFB', size: 28, x: -60, y: -40, delay: 0 },
  { Icon: SiNodedotjs, color: '#68A063', size: 24, x: 60, y: -30, delay: 0.5 },
  { Icon: SiPython, color: '#3776AB', size: 26, x: -50, y: 50, delay: 1 },
  { Icon: SiCplusplus, color: '#00599C', size: 22, x: 65, y: 55, delay: 1.5 },
  { Icon: SiMongodb, color: '#47A248', size: 22, x: -70, y: 10, delay: 0.8 },
  { Icon: SiJavascript, color: '#F7DF1E', size: 20, x: 70, y: 10, delay: 1.2 },
];

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 grid-bg">
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] -top-40 -left-40 animate-float"
        style={{ background: 'rgba(79,142,255,0.08)' }} />
      <div className="orb w-[400px] h-[400px] -bottom-40 -right-40 animate-float-reverse"
        style={{ background: 'rgba(168,85,247,0.08)' }} />
      <div className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(0,212,255,0.05)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left – text */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div variants={stagger.item} className="inline-flex items-center gap-2 mb-6">
              <div className="section-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Internships & Opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={stagger.item}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="gradient-text">Arpit</span>
              <br />
              <span className="text-text-primary">Verma</span>
            </motion.h1>

            {/* Typing */}
            <motion.div variants={stagger.item} className="text-lg sm:text-xl text-text-secondary font-mono mb-6 h-8">
              <TypeAnimation
                sequence={[
                  'AI & ML Undergraduate',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Full Stack Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-blue"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={stagger.item}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              I build{' '}
              <span className="text-text-primary font-medium">scalable web applications</span>,
              solve algorithmic challenges, and create innovative{' '}
              <span className="text-text-primary font-medium">AI-powered solutions</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View Projects <FiArrowRight />
              </button>
              <a href="/resume.pdf" download className="btn-secondary">
                <FiDownload /> Download Resume
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                <FiMail /> Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={stagger.item} className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="https://github.com/Arpit1825" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/40 transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <FiGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/arpit-verma-687b3b332" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/40 transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <FiLinkedin size={18} />
              </a>
              <a href="https://leetcode.com/code_x_arpit" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/40 transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <FiCode size={18} />
              </a>
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, rgba(79,142,255,0.3), transparent)' }} />
              <span className="text-text-muted text-xs font-mono">v1.0.0</span>
            </motion.div>
          </motion.div>

          {/* Right – profile card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-shrink-0"
          >
            {/* Floating tech icons */}
            {floatingTechs.map(({ Icon, color, size, x, y, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { delay: 0.8 + delay * 0.3, duration: 0.4 },
                  scale: { delay: 0.8 + delay * 0.3, duration: 0.4 },
                  y: { duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: delay },
                }}
                className="absolute w-12 h-12 glass rounded-xl flex items-center justify-center z-10"
                style={{
                  border: `1px solid ${color}22`,
                  boxShadow: `0 0 20px ${color}11`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Icon size={size} color={color} />
              </motion.div>
            ))}

            {/* Avatar card */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-3xl animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #4f8eff, #a855f7, #00d4ff, #4f8eff)',
                  padding: '2px',
                  borderRadius: '24px',
                }}>
                <div className="w-full h-full rounded-3xl" style={{ background: '#050508' }} />
              </div>

              {/* Inner card */}
              <div className="absolute inset-1 glass rounded-[22px] flex flex-col items-center justify-center p-6 overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-2xl mb-4 flex items-center justify-center text-4xl font-black"
                  style={{ background: 'linear-gradient(135deg, #4f8eff22, #a855f722)', border: '1px solid rgba(79,142,255,0.2)' }}>
                  <span className="gradient-text" style={{ fontFamily: 'Syne' }}>AV</span>
                </div>
                <h3 className="font-bold text-white text-base">Arpit Verma</h3>
                <p className="text-text-muted text-xs font-mono mt-1">CS (AI & ML) — PSIT</p>
                <div className="mt-4 flex gap-3 text-center">
                  <div>
                    <div className="text-xl font-bold gradient-text">170+</div>
                    <div className="text-text-muted text-[10px] font-mono">LeetCode</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <div className="text-xl font-bold gradient-text">3+</div>
                    <div className="text-text-muted text-[10px] font-mono">Projects</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <div className="text-xl font-bold gradient-text">1</div>
                    <div className="text-text-muted text-[10px] font-mono">Patent</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs font-mono">scroll</span>
          <div className="w-px h-10 overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ background: 'linear-gradient(180deg, #4f8eff, transparent)' }}
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
