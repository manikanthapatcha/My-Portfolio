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
        className="tilt-card relative group w-full max-w-[290px] sm:max-w-[330px] md:max-w-[360px] lg:max-w-[380px]"
      >
        {/* Subtle Ambient Lime Glow */}
        <div 
          className="absolute -inset-3 sm:-inset-5 rounded-3xl bg-lime-400/15 dark:bg-lime-400/12 blur-2xl pointer-events-none group-hover:bg-lime-400/25 transition-all duration-700" 
          aria-hidden="true"
        />

        {/* Softly Rounded Editorial Frame */}
        <div className="relative rounded-3xl p-2 sm:p-2.5 bg-charcoal-card/90 dark:bg-[#151921]/90 light:bg-white/90 backdrop-blur-md border border-lime-400/40 dark:border-lime-400/40 light:border-lime-500/50 shadow-2xl overflow-hidden group-hover:border-lime-400 transition-all duration-300">
          
          {/* Portrait Image */}
          <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0e1217]">
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
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Bottom Status Overlay */}
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 dark:bg-black/75 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-lime-400 dark:text-lime-400 light:text-lime-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <span>Intern @ PurpleLane</span>
              </span>
              <span className="text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
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
    <section id="overview" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Top Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-card/90 dark:bg-[#151921]/90 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 backdrop-blur-md shadow-sm transition-all hover:border-lime-400/40">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <span className="font-mono text-lime-400 dark:text-lime-400 light:text-lime-600 font-semibold tracking-wide">
                {personalInfo.badge}
              </span>
              <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">|</span>
              <span className="flex items-center gap-1 text-slate-400 dark:text-slate-400 light:text-slate-500">
                <MapPin size={12} className="text-lime-400/80" />
                {personalInfo.location}
              </span>
            </div>

            {/* Introduction Line */}
            <div className="text-base sm:text-lg font-mono font-bold text-lime-400 dark:text-lime-400 light:text-lime-600 tracking-wide flex items-center gap-2">
              <span className="hidden lg:inline-block w-5 h-px bg-lime-400" />
              <span>Hi, I&apos;m Sai Ganesh.</span>
            </div>

            {/* Orchestrated Headline Entrance */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.08]">
              <span className="inline-block animate-word-1">Full-Stack Developer</span>{' '}
              <span className="inline-block animate-word-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                & AI Engineer
              </span>
            </h1>

            {/* Subheadline Description */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-xl font-normal">
              Building intelligent applications and practical AI-powered systems.
            </p>

            {/* Magnetic CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                ref={exploreBtnRef}
                href="#projects"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 text-black font-bold text-sm hover:bg-lime-300 active:scale-95 transition-all shadow-lg shadow-lime-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <span>Explore Projects ↗</span>
                <ArrowRight size={16} />
              </a>

              <button
                ref={resumeBtnRef}
                onClick={onOpenResume}
                className="magnetic-btn inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-charcoal-card dark:bg-[#151921] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-white/10 dark:border-white/10 light:border-slate-300 font-semibold text-sm hover:border-lime-400/50 hover:text-lime-400 active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <Download size={16} />
                <span>View Resume</span>
              </button>

              <a
                ref={contactBtnRef}
                href="#contact"
                className="magnetic-btn inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified External Social Links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
              <span className="text-[11px] uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-lime-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md px-1 py-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>manikanthapatcha</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-lime-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md px-1 py-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span>sai-ganesh-patcha</span>
              </a>
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-lime-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md px-1 py-0.5"
                  aria-label="Phone"
                >
                  <Phone size={13} className="text-lime-400/80" />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPortrait />
          </div>
        </div>

        {/* Bento Stat Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl bg-charcoal-card/70 dark:bg-[#151921]/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-md hover:border-lime-500/40 hover:-translate-y-0.5 transition-all duration-200 group text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-lime-400 dark:text-lime-400 light:text-lime-600 group-hover:scale-105 transition-transform origin-left inline-block">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
