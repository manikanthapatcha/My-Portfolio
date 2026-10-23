import { ArrowRight, Download, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="overview" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status & Terminal Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-card/90 dark:bg-[#151921]/90 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mb-8 backdrop-blur-md shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
          </span>
          <span className="font-mono text-lime-400 dark:text-lime-400 light:text-lime-600 font-semibold">
            {personalInfo.badge}
          </span>
          <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">|</span>
          <span className="flex items-center gap-1 text-slate-400 dark:text-slate-400 light:text-slate-500">
            <MapPin size={12} />
            {personalInfo.location}
          </span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-2">
                <span className="w-6 h-px bg-lime-400" />
                <span>Software Developer · Full-Stack & AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
                Building intelligent products with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                  code, data, and AI.
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl font-normal">
              {personalInfo.subheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 text-black font-bold text-sm hover:bg-lime-300 active:scale-95 transition-all duration-200 shadow-lg shadow-lime-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-charcoal-card dark:bg-[#151921] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-white/10 dark:border-white/10 light:border-slate-300 font-semibold text-sm hover:border-lime-400/40 hover:text-lime-400 active:scale-95 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified External Social Links */}
            <div className="pt-4 flex items-center gap-6 text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-lime-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span className="font-mono text-xs">github.com/manikanthapatcha</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-lime-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Desk Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 shadow-2xl relative overflow-hidden group hover:border-lime-500/30 transition-all duration-300">
              
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="font-mono text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-1">
                  <Terminal size={12} className="text-lime-400" />
                  <span>sai@desk:~$ whoami</span>
                </div>
              </div>

              {/* Developer Snapshot */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-lime-400 dark:text-lime-400 light:text-lime-600 font-mono mt-0.5">
                    {personalInfo.role}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 font-mono text-xs space-y-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">role</span>
                    <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">Full-Stack Engineer</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">current_work</span>
                    <span className="text-lime-400 dark:text-lime-400 light:text-lime-600 font-medium">Intern @ PurpleLane</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">core_ai</span>
                    <span className="text-slate-200 dark:text-slate-200 light:text-slate-800">RAG · LangChain · Gemini</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">degree</span>
                    <span className="text-slate-200 dark:text-slate-200 light:text-slate-800">B.Tech CSE (Data Science)</span>
                  </div>
                </div>

                {/* Key Attributes */}
                <div className="space-y-2 pt-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-lime-400 shrink-0" />
                    <span>MERN Production APIs & Responsive Frontend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-lime-400 shrink-0" />
                    <span>Vector Search (Pinecone & ChromaDB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-lime-400 shrink-0" />
                    <span>Deep Learning with PyTorch & Computer Vision</span>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Corner Accent */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-lime-400/10 rounded-full blur-xl group-hover:bg-lime-400/20 transition-all pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bento Stat Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl bg-charcoal-card/70 dark:bg-[#151921]/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-md hover:border-lime-500/30 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight font-mono text-lime-400 dark:text-lime-400 light:text-lime-600">
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
