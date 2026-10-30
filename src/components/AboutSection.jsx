import { Code2, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { useCardTilt, useScrollReveal } from '../hooks/useMotion';

export default function AboutSection() {
  const headerRevealRef = useScrollReveal();
  const leftColRevealRef = useScrollReveal();
  const rightColRevealRef = useScrollReveal();
  const terminalTiltRef = useCardTilt({ maxTilt: 5, scale: 1.015 });

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRevealRef} className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 mb-2">
              Background & Approach
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              About Sai Ganesh Patcha
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            ENGINEERING_MINDSET = &quot;PROD_READY&quot;
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div ref={leftColRevealRef} className="reveal-init lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 shadow-xl space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Computer Science and Engineering (Data Science) undergraduate at Sasi Institute of Technology and Engineering (Tadepalligudem, AP) and a MERN Stack Developer Intern at PurpleLane.
              </p>

              <p>
                My engineering approach combines systematic full-stack web development with modern AI architectures. Rather than treating Generative AI as an isolated novelty, I embed language models, vector indexes, and deep learning backbones into production-grade user experiences where data integrity, low latency, and deterministic fallbacks matter.
              </p>

              <p>
                Through projects like <strong className="text-lime-400 dark:text-lime-400 light:text-lime-600 font-semibold">ShopMate</strong> and <strong className="text-lime-400 dark:text-lime-400 light:text-lime-600 font-semibold">LegalGenie</strong>, I have worked directly with Pinecone and ChromaDB for vector retrieval, LangChain and LangGraph for structured agent workflows, and Google Gemini API for multimodal reasoning.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-colors">
                  <ShieldCheck size={16} className="text-lime-400 shrink-0" />
                  <span>Production-Grade Code & Tests</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-colors">
                  <Zap size={16} className="text-lime-400 shrink-0" />
                  <span>Sub-Second Vector Search</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-colors">
                  <Code2 size={16} className="text-lime-400 shrink-0" />
                  <span>Clean MERN RESTful Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-colors">
                  <Cpu size={16} className="text-lime-400 shrink-0" />
                  <span>RAG & Multi-Turn Agents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview (5 cols) */}
          <div ref={rightColRevealRef} className="reveal-init lg:col-span-5">
            <div 
              ref={terminalTiltRef}
              className="tilt-card rounded-2xl bg-[#090b0e] border border-white/10 light:border-slate-300 p-5 shadow-2xl font-mono text-xs text-slate-300 overflow-hidden hover:border-lime-400/30 transition-all"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-[11px] text-slate-500">engineer_profile.json</span>
              </div>

              <pre className="text-[11px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-lime-400/20">
                <code>
{`{
  "name": "Sai Ganesh Patcha",
  "title": "Full-Stack Developer & AI Engineer",
  "specialization": [
    "Full-Stack Web (MERN)",
    "Generative AI & RAG",
    "Deep Learning & Computer Vision"
  ],
  "experience": {
    "role": "MERN Stack Developer Intern",
    "company": "PurpleLane",
    "period": "Feb 22, 2026 – Aug 22, 2026"
  },
  "education": {
    "degree": "B.Tech CSE (Data Science)",
    "institution": "Sasi Inst. of Tech & Eng",
    "cgpa": "8.34 / 10"
  },
  "principles": [
    "Verify claims with working code",
    "Deterministic fallbacks for AI",
    "Responsive, accessible UI/UX",
    "Maintainable modular architecture"
  ]
}`}
                </code>
              </pre>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-lime-400">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  status: active
                </span>
                <span>utf-8 · json</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
