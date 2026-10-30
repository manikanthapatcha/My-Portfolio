import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Terminal,
  Sparkles,
  Users,
  Lock,
  Zap,
  HelpCircle,
  Compass,
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useMotion';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const headerCardRef = useCardTilt({ maxTilt: 3, scale: 1.005 });

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center px-4 relative z-10 text-center">
        <h1 className="text-3xl font-extrabold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] mb-4">Project Not Found</h1>
        <p className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] text-sm mb-6 max-w-md">
          The requested project case study does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          Return to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-32 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link with hover animation */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] light:hover:text-[#0284C7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-1 py-0.5"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header Card */}
        <div 
          ref={headerCardRef}
          className="tilt-card rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 sm:p-10 shadow-2xl mb-10 hover:border-sky-500/30 transition-all"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/15 text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] border border-sky-500/25">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] bg-black/20 dark:bg-black/20 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-[#CDE7E2]">
              {project.category}
            </span>
            {project.projectType && (
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
                {project.projectType}
              </span>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-500/15 text-[#14B8A6] dark:text-[#14B8A6] light:text-[#0D9488] border border-teal-500/30 flex items-center gap-1.5 hover:bg-teal-500/25 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                <span>Live Deployment ↗</span>
              </a>
            )}
            {project.isPrototype && (
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#F59E0B] bg-amber-400/10 border border-amber-400/20 flex items-center gap-1.5">
                <AlertTriangle size={12} />
                Research Prototype
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight mb-3">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-mono mb-6">
            {project.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Action links */}
          <div className="mt-8 pt-6 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold hover:opacity-95 text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px]"
              >
                <ExternalLink size={15} />
                <span>Launch Live Application</span>
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 dark:bg-white/10 light:bg-slate-100 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-slate-200 text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] text-xs font-semibold transition-all font-mono active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px] border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]"
              >
                <GithubIcon size={15} />
                <span>View Source Repository</span>
              </a>
            ) : (
              <span className="px-4 py-2.5 rounded-xl bg-black/20 dark:bg-black/20 light:bg-slate-100 text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] text-xs font-mono text-center border border-[#24505A]/30 dark:border-[#24505A]/30 light:border-[#CDE7E2]">
                Repository Status: Local / Private
              </span>
            )}

            <div className="text-xs font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] text-center sm:text-left sm:ml-auto">
              Verified by Sai Ganesh Patcha
            </div>
          </div>
        </div>

        {/* Prototype Alert if applicable */}
        {project.disclaimer && (
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle size={20} className="text-[#F59E0B] shrink-0 mt-0.5" />
            <div className="text-xs text-amber-300 dark:text-amber-300 light:text-amber-800 space-y-1">
              <div className="font-bold uppercase tracking-wider text-[11px] font-mono">
                Academic & Experimental Disclaimer
              </div>
              <p className="leading-relaxed">
                {project.disclaimer}
              </p>
            </div>
          </div>
        )}

        {/* Interactive Case Study Tabs - Mobile Horizontal Scroll with Touch */}
        <div 
          className="flex border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] mb-8 overflow-x-auto pb-1 scroll-smooth"
          role="tablist"
          aria-label="Project Case Study Sections"
        >
          {[
            { id: 'overview', label: '1. Overview & Features' },
            { id: 'architecture', label: '2. Architecture & Design' },
            { id: 'decisions', label: '3. Security & Performance' },
            { id: 'challenges', label: '4. Challenges & Roadmap' },
            { id: 'stack', label: '5. Technology Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                activeTab === tab.id
                  ? 'border-[#0EA5E9] text-[#0EA5E9] font-bold'
                  : 'border-transparent text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] hover:text-[#EAFBFA] dark:hover:text-[#EAFBFA] light:hover:text-[#103039] hover:border-[#24505A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panes */}
        <div className="rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 sm:p-8 shadow-xl">
          
          {/* Tab 1: Overview & Features */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight flex items-center gap-2">
                <Sparkles size={18} className="text-[#0EA5E9]" />
                <span>Verified Core Functional Implementations</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1]/50 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-[#14B8A6] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#103039] leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem Solved */}
              {project.problemSolved && (
                <div className="mt-6 p-4 rounded-xl bg-[#071A22]/40 dark:bg-[#071A22]/40 light:bg-[#E2F4F1]/40 border border-[#0EA5E9]/25 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold flex items-center gap-1.5">
                    <HelpCircle size={14} />
                    <span>Problem Solved</span>
                  </div>
                  <p className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#103039] leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>
              )}

              {/* Intended Users */}
              {project.intendedUsers && (
                <div className="p-4 rounded-xl bg-[#071A22]/40 dark:bg-[#071A22]/40 light:bg-[#E2F4F1]/40 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-semibold flex items-center gap-1.5">
                    <Users size={14} className="text-[#0EA5E9]" />
                    <span>Intended Users & Primary Use Case</span>
                  </div>
                  <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] leading-relaxed">
                    {project.intendedUsers}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: System Architecture & Data Flow */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight flex items-center gap-2">
                <Layers size={18} className="text-[#0EA5E9]" />
                <span>Architectural Overview & Data Flow</span>
              </h3>

              <div className="p-4 sm:p-5 rounded-xl bg-[#071A22]/90 dark:bg-[#071A22]/90 light:bg-[#0D2933] text-[#EAFBFA] font-mono text-xs leading-relaxed border border-[#24505A]/60 break-words overflow-x-auto">
                <div className="text-[11px] uppercase tracking-wider text-[#0EA5E9] mb-2 font-bold">
                  // Workflow Pipeline & Data Flow
                </div>
                <p className="whitespace-pre-wrap">{project.architecture}</p>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#071A22]/50 dark:bg-[#071A22]/50 light:bg-[#E2F4F1]/60 border border-[#24505A]/30 dark:border-[#24505A]/30 light:border-[#CDE7E2] text-center">
                  <div className="text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-mono text-xs font-bold mb-1">Client Tier</div>
                  <div className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">
                    React + Vite SPA with responsive state management
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#071A22]/50 dark:bg-[#071A22]/50 light:bg-[#E2F4F1]/60 border border-[#24505A]/30 dark:border-[#24505A]/30 light:border-[#CDE7E2] text-center">
                  <div className="text-[#14B8A6] dark:text-[#14B8A6] light:text-[#0D9488] font-mono text-xs font-bold mb-1">Server / Logic Tier</div>
                  <div className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">
                    Node.js/Express or FastAPI with asynchronous endpoints
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#071A22]/50 dark:bg-[#071A22]/50 light:bg-[#E2F4F1]/60 border border-[#24505A]/30 dark:border-[#24505A]/30 light:border-[#CDE7E2] text-center">
                  <div className="text-[#84CC16] dark:text-[#84CC16] light:text-[#65A30D] font-mono text-xs font-bold mb-1">Data & Vector Tier</div>
                  <div className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">
                    MongoDB + Pinecone / ChromaDB embeddings
                  </div>
                </div>
              </div>

              {/* Key Implementation Decisions */}
              {project.keyDecisions && project.keyDecisions.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold flex items-center gap-1.5">
                    <Compass size={14} />
                    <span>Key Implementation Decisions & Trade-Offs</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#103039]">
                    {project.keyDecisions.map((decision, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={13} className="text-[#14B8A6] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Security & Performance */}
          {activeTab === 'decisions' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#0EA5E9]" />
                <span>Security, Performance & Data Consistency</span>
              </h3>

              {project.securityAndPerformance && project.securityAndPerformance.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.securityAndPerformance.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1]/50 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-start gap-3"
                    >
                      <Lock size={15} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#103039] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#071A22]/40 border border-[#24505A]/40 text-xs text-[#75A0A8]">
                  Defensive validation and atomic consistency patterns applied across data operations.
                </div>
              )}

              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 dark:text-sky-300 light:text-sky-900 flex items-start gap-2.5">
                <Zap size={16} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>
                  Engineered with zero speculative claims: all architectural choices, concurrency patterns, and security layers are grounded in verified repository code.
                </span>
              </div>
            </div>
          )}

          {/* Tab 4: Challenges & Roadmap */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight flex items-center gap-2">
                <Cpu size={18} className="text-[#0EA5E9]" />
                <span>Technical Challenges & Solutions</span>
              </h3>

              <div className="p-5 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1]/50 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078]">
                  Challenge Identified & Resolved:
                </div>
                <p className="text-sm text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#103039] leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Known Limitations & Future Work */}
              {project.limitationsAndFutureWork && project.limitationsAndFutureWork.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] font-semibold">
                    Known Limitations & Planned Improvements:
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.limitationsAndFutureWork.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#071A22]/40 dark:bg-[#071A22]/40 light:bg-[#E2F4F1]/40 border border-[#24505A]/30 dark:border-[#24505A]/30 light:border-[#CDE7E2] text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#103039] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 5: Complete Technology Stack */}
          {activeTab === 'stack' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight flex items-center gap-2">
                <Terminal size={18} className="text-[#0EA5E9]" />
                <span>Complete Technology & Library Stack</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-3 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1]/50 border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] text-center hover:border-sky-500/40 hover:bg-[#164B55]/30 light:hover:bg-[#EAF8F6] transition-colors"
                  >
                    <span className="text-xs font-mono font-medium text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
