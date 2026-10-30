import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useCardTilt, useMagnetic } from '../hooks/useMotion';

function HeroPortrait() {
  const portraitRef = useCardTilt({ maxTilt: 3.5, scale: 1.01 });

  return (
    <div className="flex justify-center lg:justify-end w-full">
      <div
        ref={portraitRef}
        className="tilt-card relative group w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[380px]"
      >
        {/* Subtle Ambient Ocean Breeze Glow */}
        <div 
          className="absolute -inset-3 sm:-inset-5 rounded-3xl bg-sky-500/20 dark:bg-sky-500/20 light:bg-teal-500/15 blur-2xl pointer-events-none group-hover:bg-teal-400/30 transition-all duration-700" 
          aria-hidden="true"
        />

        {/* Softly Rounded Editorial Frame */}
        <div className="relative rounded-3xl p-2 sm:p-2.5 bg-[#103641]/90 dark:bg-[#103641]/90 light:bg-white/95 backdrop-blur-md border border-sky-500/40 dark:border-sky-500/40 light:border-teal-500/40 shadow-2xl overflow-hidden group-hover:border-[#0EA5E9] transition-all duration-300">
          
          {/* Portrait Image */}
          <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0D2933]">
            <img
              src="/images/profile.jpg"
              alt="Portrait of Sai Ganesh Patcha, full-stack developer and AI engineer"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
              fetchPriority="high"
              width="380"
              height="480"
            />

            {/* Subtle Gradient Vignette at Bottom */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#071A22]/90 via-[#071A22]/20 to-transparent pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Bottom Status Overlay */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2 sm:p-2.5 rounded-xl bg-[#071A22]/85 dark:bg-[#071A22]/90 light:bg-white/95 backdrop-blur-md border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-teal-400 dark:text-teal-300 light:text-teal-700 font-semibold truncate mr-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
                <span className="truncate">Intern @ PurpleLane</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] shrink-0">
                B.Tech CSE (DS)
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenResume }) {
  const exploreBtnRef = useMagnetic({ strength: 0.2, max: 4 });
  const resumeBtnRef = useMagnetic({ strength: 0.2, max: 4 });
  const contactBtnRef = useMagnetic({ strength: 0.2, max: 4 });

  return (
    <section id="overview" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading and CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            
            {/* Top Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103641]/90 dark:bg-[#103641]/90 light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] backdrop-blur-md shadow-sm transition-all hover:border-sky-500/50 max-w-full">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="font-mono text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold tracking-wide text-[11px] sm:text-xs">
                {personalInfo.badge}
              </span>
              <span className="text-[#24505A] dark:text-[#24505A] light:text-[#CDE7E2] hidden xs:inline">|</span>
              <span className="flex items-center gap-1 text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] text-[11px] sm:text-xs">
                <MapPin size={12} className="text-[#0EA5E9]/80 shrink-0" />
                <span className="truncate">{personalInfo.location}</span>
              </span>
            </div>

            {/* Identity Introduction */}
            <div className="animate-name-in flex flex-wrap items-baseline gap-x-2 gap-y-0">
              {/* Subtle prefix */}
              <span className="font-mono text-sm sm:text-base lg:text-lg text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] tracking-wide leading-none">
                <span className="hidden lg:inline-block w-5 h-px bg-[#24505A] mr-2 align-middle" />
                Hi, I&apos;m
              </span>

              {/* Highlighted name */}
              <span
                className="name-gradient name-glow font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-none"
                aria-label="Sai Ganesh"
              >
                Sai Ganesh.
              </span>
            </div>

            {/* Fluid Orchestrated Headline with Ocean Breeze Gradient */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] leading-[1.1] sm:leading-[1.08] break-words max-w-2xl">
              <span className="inline-block animate-word-1">Full-Stack Developer</span>{' '}
              <span className="inline-block animate-word-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16]">
                & AI Engineer
              </span>
            </h1>

            {/* Subheadline Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed max-w-xl font-normal">
              Building intelligent applications and practical AI-powered systems.
            </p>

            {/* Magnetic CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                ref={exploreBtnRef}
                href="#projects"
                className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold text-sm hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-sky-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px]"
              >
                <span>Explore Projects ↗</span>
                <ArrowRight size={16} />
              </a>

              <button
                ref={resumeBtnRef}
                onClick={onOpenResume}
                className="magnetic-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-white text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] font-semibold text-sm hover:border-sky-500/60 hover:text-[#0EA5E9] active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px]"
              >
                <Download size={16} />
                <span>View Resume</span>
              </button>

              <a
                ref={contactBtnRef}
                href="#contact"
                className="magnetic-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] dark:hover:text-[#EAFBFA] light:hover:text-[#103039] font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px]"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified External Social Links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] font-mono">
              <span className="text-[11px] uppercase tracking-wider text-[#75A0A8]">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-2 py-1.5 min-h-[44px]"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>manikanthapatcha</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-2 py-1.5 min-h-[44px]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span>sai-ganesh-patcha</span>
              </a>
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-2 py-1.5 min-h-[44px]"
                  aria-label="Phone"
                >
                  <Phone size={13} className="text-[#0EA5E9]/80" />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroPortrait />
          </div>
        </div>

        {/* Bento Stat Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-5 rounded-xl bg-[#103641]/75 dark:bg-[#103641]/75 light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] backdrop-blur-md hover:border-sky-500/50 hover:-translate-y-0.5 transition-all duration-200 group text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] group-hover:scale-105 transition-transform origin-left inline-block">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] mt-1 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
