import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Layers, CheckCircle, AlertTriangle, ShieldCheck, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/portfolioData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center px-4 relative z-10 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-4">Project Not Found</h1>
        <p className="text-slate-400 text-sm mb-6 max-w-md">
          The requested project case study does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl bg-lime-400 text-black font-semibold text-xs uppercase tracking-wider hover:bg-lime-300 transition-colors"
        >
          Return to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-lime-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header Card */}
        <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-10 shadow-2xl mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-lime-400/10 text-lime-400 border border-lime-400/20">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/5">
              {project.category}
            </span>
            {project.isPrototype && (
              <span className="px-3 py-1 rounded-full text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 flex items-center gap-1.5">
                <AlertTriangle size={12} />
                Research Prototype
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight mb-3">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-lime-400 dark:text-lime-400 light:text-lime-600 font-mono mb-6">
            {project.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Action links */}
          <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap items-center gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 dark:bg-white/10 light:bg-slate-100 hover:bg-white/20 text-white dark:text-white light:text-slate-900 text-xs font-semibold transition-colors font-mono"
              >
                <GithubIcon size={15} />
                <span>View Source Repository</span>
              </a>
            ) : (
              <span className="px-4 py-2 rounded-xl bg-white/5 text-slate-500 text-xs font-mono">
                Repository Status: Local / Private
              </span>
            )}

            <div className="text-xs font-mono text-slate-500">
              Verified by Sai Ganesh Patcha
            </div>
          </div>
        </div>

        {/* Prototype Alert if applicable */}
        {project.disclaimer && (
          <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-400 shrink-0 mt-0.5" />
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

        {/* Interactive Case Study Tabs */}
        <div className="flex border-b border-white/10 dark:border-white/10 light:border-slate-200 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Feature Breakdown' },
            { id: 'architecture', label: 'System Architecture' },
            { id: 'challenges', label: 'Engineering Challenges' },
            { id: 'stack', label: 'Technology Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap focus:outline-none ${
                activeTab === tab.id
                  ? 'border-lime-400 text-lime-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panes */}
        <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 shadow-xl">
          
          {/* Tab 1: Feature Breakdown */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight flex items-center gap-2">
                <Sparkles size={18} className="text-lime-400" />
                <span>Core Functional Implementations</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {project.problemSolved && (
                <div className="mt-6 p-4 rounded-xl bg-black/30 dark:bg-[#0b0d10]/40 light:bg-slate-50 border border-lime-400/20 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-lime-400 font-semibold">
                    Problem It Solves
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: System Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight flex items-center gap-2">
                <Layers size={18} className="text-lime-400" />
                <span>Architectural Overview & Data Flow</span>
              </h3>

              <div className="p-5 rounded-xl bg-black/50 dark:bg-[#0b0d10]/80 light:bg-slate-900 text-slate-200 font-mono text-xs leading-relaxed border border-white/10">
                <div className="text-[11px] uppercase tracking-wider text-lime-400 mb-2">
                  // Workflow Pipeline
                </div>
                <p>{project.architecture}</p>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 text-center">
                  <div className="text-lime-400 font-mono text-xs font-bold mb-1">Client Tier</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    React + Vite SPA with responsive state management
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 text-center">
                  <div className="text-lime-400 font-mono text-xs font-bold mb-1">Server / Logic Tier</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Node.js/Express or FastAPI with asynchronous endpoints
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 text-center">
                  <div className="text-lime-400 font-mono text-xs font-bold mb-1">Data & Vector Tier</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    MongoDB + Pinecone / ChromaDB embeddings
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Engineering Challenges */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight flex items-center gap-2">
                <Cpu size={18} className="text-lime-400" />
                <span>Technical Challenges & Solutions</span>
              </h3>

              <div className="p-5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                  Challenge Identified & Resolved:
                </div>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-lime-400/10 border border-lime-400/20 text-xs text-lime-300 dark:text-lime-300 light:text-lime-800 flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-lime-400 shrink-0 mt-0.5" />
                <span>
                  All solutions are grounded in actual project commits and tested implementation patterns, ensuring deterministic performance and zero speculative assertions.
                </span>
              </div>
            </div>
          )}

          {/* Tab 4: Technology Stack */}
          {activeTab === 'stack' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight flex items-center gap-2">
                <Terminal size={18} className="text-lime-400" />
                <span>Complete Technology & Library Stack</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-3 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 text-center"
                  >
                    <span className="text-xs font-mono font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
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
