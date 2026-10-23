import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('light') ? 'light' : 'dark';
    }
    return 'dark';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Overview', href: '/#overview' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0d10]/85 dark:bg-[#0b0d10]/90 light:bg-white/85 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-lg p-1"
            aria-label="Sai Ganesh Patcha - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-card border border-white/15 dark:border-white/15 light:border-slate-300 flex items-center justify-center font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:border-lime-500/50 transition-colors shadow-sm relative overflow-hidden">
              <span className="text-sm font-extrabold tracking-tighter">
                P<span className="text-lime-400">G</span>
              </span>
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-lime-400 transition-colors">
                Sai Ganesh
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                Full-Stack · AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-charcoal-card/80 dark:bg-[#151921]/80 light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-200 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-200/70 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-lime-400 hover:border-lime-400/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Social quick links */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-lime-400 hover:border-lime-400/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-lime-400 hover:border-lime-400/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/30 hover:bg-lime-400 hover:text-black transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 border border-white/10 flex items-center justify-center text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-16 bg-[#0b0d10]/95 light:bg-white/95 backdrop-blur-xl border-b border-white/10 light:border-slate-200 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-slate-100 hover:text-lime-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 light:border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition-colors"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </button>

              <div className="flex items-center justify-around pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-lime-400"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-lime-400"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
