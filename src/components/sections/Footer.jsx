import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../../data';

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded border border-border flex items-center justify-center text-[10px] font-mono font-bold bg-bg text-accent">
                AV
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-text-primary">
                Arpit Verma
              </span>
            </div>
            <p className="text-[11px] text-text-secondary">
              CS (AI & ML) Student • {personalInfo.email}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
            >
              <FiGithub size={12} /> GitHub
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
            >
              <FiLinkedin size={12} /> LinkedIn
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
            >
              <FiMail size={12} /> Email
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
            >
              <FiDownload size={12} /> Resume
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[10px] font-mono text-text-secondary text-center md:text-right">
            <span>© {new Date().getFullYear()} Arpit Verma.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
