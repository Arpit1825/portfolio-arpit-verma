import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode, FiHeart, FiDownload } from 'react-icons/fi';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { Icon: FiGithub, href: 'https://github.com/Arpit1825', label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/arpit-verma141', label: 'LinkedIn' },
  { Icon: FiCode, href: 'https://leetcode.com/code_x_arpit', label: 'LeetCode' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t py-16"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(5,5,8,0.8)' }}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #4f8eff44, transparent)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm"
                style={{ background: 'linear-gradient(135deg, #4f8eff, #a855f7)' }}>A</div>
              <span className="font-bold gradient-text">Arpit Verma</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              CS (AI & ML) @ PSIT Kanpur. Building the future, one commit at a time.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Download</h4>
            <a href="/resume.pdf" download
              className="btn-secondary inline-flex items-center gap-2 text-sm"
              style={{ padding: '10px 16px', fontSize: '0.8rem' }}>
              <FiDownload size={14} /> Resume
            </a>
            <p className="text-text-muted text-xs mt-4 leading-relaxed">
              Open to full-time roles and internships in software development, AI/ML, and full-stack engineering.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Arpit Verma. All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1.5">
            Designed & Developed with <FiHeart size={11} className="text-red-400" /> by Arpit Verma
          </p>
        </div>
      </div>
    </footer>
  );
}
