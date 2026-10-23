import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const currentYear = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-[#07090c] dark:bg-[#07090c] light:bg-slate-50 py-12 text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 dark:border-white/5 light:border-slate-200">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/15 dark:border-white/15 light:border-slate-300 flex items-center justify-center font-bold text-white dark:text-white light:text-slate-900">
              <span className="text-xs">
                P<span className="text-lime-400">G</span>
              </span>
            </div>
            <div>
              <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 text-sm">
                Sai Ganesh Patcha
              </div>
              <div className="font-mono text-[11px] text-slate-500">
                Full-Stack & Generative AI Engineer
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="/#overview" className="hover:text-lime-400 transition-colors">Overview</a>
            <a href="/#projects" className="hover:text-lime-400 transition-colors">Projects</a>
            <a href="/#skills" className="hover:text-lime-400 transition-colors">Skills</a>
            <a href="/#experience" className="hover:text-lime-400 transition-colors">Experience</a>
            <a href="/#about" className="hover:text-lime-400 transition-colors">About</a>
            <a href="/#contact" className="hover:text-lime-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-lime-400/20 hover:text-lime-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-lime-400/20 hover:text-lime-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-lime-400/20 hover:text-lime-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-lime-400 hover:text-black flex items-center justify-center transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Scroll back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom copyright and verified notes */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} Sai Ganesh Patcha. Built with React, Vite, Tailwind CSS & JavaScript.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Deployed & Verified · Andhra Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
