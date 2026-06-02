import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from 'react-icons/fi';

const GITHUB_USERNAME = 'Arpit1825';

export default function GitHub() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="github" ref={ref} className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag mb-4"><FiGithub className="inline" /> GitHub Activity</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Code <span className="gradient-text">Contributions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* GitHub stats */}
          <div className="card space-y-4">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=4f8eff&text_color=8888aa&icon_color=a855f7`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Top languages */}
          <div className="card space-y-4">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=4f8eff&text_color=8888aa`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Streak */}
          <div className="card md:col-span-2">
            <img
              src={`https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=4f8eff&fire=a855f7&currStreakLabel=8888aa&sideNums=f0f0f8&currStreakNum=4f8eff`}
              alt="GitHub Streak"
              className="w-full max-w-2xl mx-auto block rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 card overflow-hidden"
        >
          <img
            src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg opacity-80"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2">
            <FiGithub /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
