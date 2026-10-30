import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const currentYear = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] bg-[#071A22] dark:bg-[#071A22] light:bg-[#E2F4F1] py-12 text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#24505A]/30 dark:border-[#24505A]/30 light:border-[#CDE7E2]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-center font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
              <span className="text-xs">
                P<span className="text-[#0EA5E9]">G</span>
              </span>
            </div>
            <div>
              <div className="font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] text-sm">
                Sai Ganesh Patcha
              </div>
              <div className="font-mono text-[11px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                Full-Stack & Generative AI Engineer
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 font-mono">
            <a href="/#overview" className="hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0EA5E9] transition-colors">Overview</a>
            <a href="/#projects" className="hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0EA5E9] transition-colors">Projects</a>
            <a href="/#skills" className="hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0EA5E9] transition-colors">Skills</a>
            <a href="/#experience" className="hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0EA5E9] transition-colors">Experience</a>
            <a href="/#about" className="hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0EA5E9] transition-colors">About</a>
            <a href="/#contact" className="hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0EA5E9] transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#103641]/70 dark:bg-[#103641]/70 light:bg-white/80 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-center justify-center hover:bg-sky-500/20 hover:text-[#0EA5E9] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#103641]/70 dark:bg-[#103641]/70 light:bg-white/80 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-center justify-center hover:bg-sky-500/20 hover:text-[#0EA5E9] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 rounded-lg bg-[#103641]/70 dark:bg-[#103641]/70 light:bg-white/80 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-center justify-center hover:bg-sky-500/20 hover:text-[#0EA5E9] transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-[#103641]/70 dark:bg-[#103641]/70 light:bg-white/80 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#14B8A6] hover:text-slate-950 flex items-center justify-center transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Scroll back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom copyright and verified notes */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
          <div>
            © {currentYear} Sai Ganesh Patcha. Built with React, Vite, Tailwind CSS & JavaScript.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span>Deployed & Verified · Andhra Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
