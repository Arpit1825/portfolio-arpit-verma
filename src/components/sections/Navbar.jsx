import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
  { href: '#about', label: 'Focus' },
  { href: '#skills', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'Contributions' },
  { href: '#achievements', label: 'Milestones' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'skills', 'projects', 'github', 'achievements', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-300 border-b ${
        scrolled 
          ? 'bg-surface/85 backdrop-blur-md border-border/80' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-2xl border border-border flex items-center justify-center text-xs font-mono font-bold bg-surface text-accent hover:border-accent transition-colors duration-200">
              AV
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-text-primary ">
              Arpit Verma
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-all duration-200 ${
                  active === href
                    ? 'text-accent border border-border bg-surface'
                    : 'text-text-secondary border border-transparent hover:text-text-primary hover:border-border/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-2xl border border-border hover:border-accent text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-primary flex items-center gap-1.5"
              style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '4px' }}
            >
              <FiDownload size={13} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-3xl border border-border text-text-secondary hover:text-yellow-500"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded border border-border text-text-secondary hover:text-text-primary"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-surface/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`block w-full text-left px-3 py-2.5 rounded text-xs font-medium transition-all ${
                    active === href
                      ? 'text-accent border border-border bg-bg'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg/50'
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary w-full justify-center text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  <FiDownload size={13} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
