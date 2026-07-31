import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const topOffset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        <div className="overflow-hidden rounded-full bg-red-300 w-[200px] h-[200px] border-2 hover:border-blue-500 transition-all duration-500">
          <img src="projects/profile.jpeg" alt="Profile"  className='h-full w-full object-cover'/>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-text-primary mb-6"
        >
          I am <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl font-mono text-accent font-medium mb-6"
        >
          {personalInfo.title} | {personalInfo.subtitle}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a 
            href="#projects" 
            onClick={handleScrollToProjects}
            className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            View My Work 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="btn-secondary w-full sm:w-auto justify-center"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6"
        >
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={20} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Email Address"
          >
            <FiMail size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
