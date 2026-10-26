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
      className={`tilt-card flex flex-col justify-between rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 hover:border-lime-500/40 shadow-xl group overflow-hidden ${
        index % 2 === 0 ? 'stagger-1' : 'stagger-2'
      }`}
    >
      {/* Card Header & Badges */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-lime-400/10 text-lime-400 dark:text-lime-400 light:text-lime-600 border border-lime-400/20">
              {project.badge}
            </span>

            {project.liveDemoUrl && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Vercel
              </span>
            )}
          </div>

          {project.isPrototype && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
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
            className="group/title inline-flex items-center gap-2 text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight hover:text-lime-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-lg"
            title={`Open live deployed ${project.title} on Vercel`}
          >
            <span>{project.title}</span>
            <ArrowUpRight size={20} className="text-lime-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight group-hover:text-lime-400 transition-colors">
            {project.title}
          </h3>
        )}

        <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
          {project.tagline}
        </p>

        {/* Summary */}
        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-4 leading-relaxed">
          {project.summary}
        </p>

        {/* Key Highlights */}
        <div className="mt-5 space-y-2 border-t border-white/5 dark:border-white/5 light:border-slate-100 pt-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
            Key Implementations
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle size={13} className="text-lime-400 shrink-0 mt-0.5" />
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
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/40 dark:bg-black/50 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="relative z-10 mt-8 pt-5 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lime-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-lime-300 active:scale-95 transition-all shadow-md shadow-lime-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              title={`Launch ${project.title} live on Vercel`}
            >
              <span>Launch App</span>
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:text-lime-300 hover:underline transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
            >
              <span>Case Study</span>
              <ArrowUpRight size={14} />
            </Link>
          )}

          {project.liveDemoUrl && (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
            >
              <span>Architecture Details</span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label={`${project.title} GitHub Repository`}
            >
              <GithubIcon size={13} />
              <span>Code</span>
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-500">Private / Local</span>
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
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 mb-2">
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Selected Engineering Projects
            </h2>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Architected and built across full-stack systems, retrieval-augmented generation (RAG), vector embeddings, and deep learning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 self-start md:self-auto" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 ${
                  filter === cat
                    ? 'bg-lime-400 text-black font-semibold shadow-sm'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
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
