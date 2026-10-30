import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, AlertCircle, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useMotion';

function ProjectCard({ project, index }) {
  const cardRef = useCardTilt({ maxTilt: 3.2, scale: 1.01 });

  return (
    <div
      ref={cardRef}
      className={`tilt-card flex flex-col justify-between rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 sm:p-8 hover:border-sky-500/50 shadow-xl group overflow-hidden ${
        index % 2 === 0 ? 'stagger-1' : 'stagger-2'
      }`}
    >
      {/* Card Header & Badges */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-sky-500/10 text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] border border-sky-500/25">
              {project.badge}
            </span>

            {project.liveDemoUrl && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-teal-500/10 text-teal-400 dark:text-teal-300 light:text-teal-700 border border-teal-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Live on Vercel
              </span>
            )}
          </div>

          {project.isPrototype && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 dark:text-amber-300 light:text-amber-700 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
              <AlertCircle size={12} />
              Research Prototype
            </span>
          )}
        </div>

        {/* Project Title & Tagline */}
        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title inline-flex items-center gap-2 text-2xl font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight hover:text-[#0EA5E9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
            title={`Open live deployed ${project.title} on Vercel`}
          >
            <span>{project.title}</span>
            <ArrowUpRight size={20} className="text-[#0EA5E9] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <h3 className="text-2xl font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight group-hover:text-[#0EA5E9] transition-colors">
            {project.title}
          </h3>
        )}

        <p className="text-xs font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] mt-1">
          {project.tagline}
        </p>

        {/* Summary */}
        <p className="text-sm text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] mt-4 leading-relaxed">
          {project.summary}
        </p>

        {/* Key Highlights */}
        <div className="mt-5 space-y-2 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pt-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
            Key Implementations
          </div>
          <ul className="space-y-1.5 text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle size={13} className="text-[#14B8A6] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Pills */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#E2F4F1] text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="relative z-10 mt-8 pt-5 border-t border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-95 transition-all shadow-md shadow-sky-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px] flex-1 sm:flex-initial"
              title={`Launch ${project.title} live on Vercel`}
            >
              <span>Launch App</span>
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0EA5E9] hover:text-[#14B8A6] hover:underline transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-2 px-1 min-h-[44px]"
            >
              <span>Case Study</span>
              <ArrowUpRight size={14} />
            </Link>
          )}

          {project.liveDemoUrl && (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center justify-center gap-1 text-xs font-medium text-[#75A0A8] hover:text-[#EAFBFA] dark:hover:text-[#EAFBFA] light:hover:text-[#103039] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-2 px-2 min-h-[44px]"
            >
              <span>Architecture Details</span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] px-3.5 py-2 rounded-lg bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#E2F4F1] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px]"
              aria-label={`${project.title} GitHub Repository`}
            >
              <GithubIcon size={14} />
              <span>Code</span>
            </a>
          ) : (
            <span className="text-[11px] font-mono text-[#75A0A8] py-2">Private / Local</span>
          )}
        </div>
      </div>

      {/* Prototype Disclaimer Banner inside card if applicable */}
      {project.disclaimer && (
        <div className="relative z-10 mt-4 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 dark:text-amber-300 light:text-amber-700 leading-snug">
          <strong>Notice:</strong> {project.disclaimer}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack & AI', 'Generative AI', 'Deep Learning', 'Full-Stack'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mb-2 font-semibold">
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
              Selected Engineering Projects
            </h2>
            <p className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] text-sm sm:text-base mt-2 max-w-xl">
              Architected and built across full-stack systems, retrieval-augmented generation (RAG), vector embeddings, and deep learning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] self-start md:self-auto" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-slate-950 font-bold shadow-sm shadow-sky-500/20'
                    : 'text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] hover:text-[#EAFBFA] dark:hover:text-[#EAFBFA] light:hover:text-[#103039]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
