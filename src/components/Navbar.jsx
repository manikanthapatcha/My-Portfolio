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

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#071A22]/85 dark:bg-[#071A22]/90 light:bg-[#F0FAF9]/90 backdrop-blur-md border-b border-[#24505A]/50 dark:border-[#24505A]/60 light:border-[#CDE7E2] py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            aria-label="Sai Ganesh Patcha - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center font-bold tracking-tight text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] group-hover:border-sky-500/60 transition-colors shadow-sm relative overflow-hidden">
              <span className="text-sm font-extrabold tracking-tighter">
                P<span className="text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7]">G</span>
              </span>
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] group-hover:text-[#0EA5E9] transition-colors">
                Sai Ganesh
              </span>
              <span className="text-[11px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                Full-Stack · AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-[#103641]/85 dark:bg-[#103641]/85 light:bg-[#E2F4F1]/90 border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] rounded-full px-4 py-1.5 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] dark:hover:text-[#EAFBFA] light:hover:text-[#103039] hover:bg-[#164B55]/60 dark:hover:bg-[#164B55]/60 light:hover:bg-[#EAF8F6] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls (Desktop: >= md) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] hover:border-sky-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Social quick links */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] hover:border-sky-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] hover:border-sky-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-sky-500/10 text-sky-400 dark:text-sky-300 light:text-sky-700 border border-sky-500/30 hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#14B8A6] hover:text-white hover:border-transparent transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[40px]"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle (< md) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick Resume Button on Mobile */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full bg-sky-500/10 text-sky-400 dark:text-sky-300 light:text-sky-700 border border-sky-500/30 hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#14B8A6] hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px]"
              aria-label="View Resume"
            >
              <FileText size={14} />
              <span className="hidden xs:inline">Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Hamburger / Close Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#0EA5E9]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-full bg-[#071A22]/95 dark:bg-[#071A22]/95 light:bg-[#F0FAF9]/95 backdrop-blur-2xl border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] px-5 py-6 shadow-2xl transition-all max-h-[calc(100vh-4.5rem)] overflow-y-auto"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] hover:bg-[#164B55]/50 dark:hover:bg-[#164B55]/50 light:hover:bg-[#EAF8F6] hover:text-[#0EA5E9] transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-md shadow-sky-500/20 min-h-[44px]"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-xs font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] min-h-[44px]"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-xs font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] min-h-[44px]"
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
