import { Code2, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { useCardTilt, useScrollReveal } from '../hooks/useMotion';

export default function AboutSection() {
  const headerRevealRef = useScrollReveal();
  const leftColRevealRef = useScrollReveal();
  const rightColRevealRef = useScrollReveal();
  const terminalTiltRef = useCardTilt({ maxTilt: 5, scale: 1.015 });

  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRevealRef} className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mb-2 font-semibold">
              Background & Approach
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
              About Sai Ganesh Patcha
            </h2>
          </div>
          <div className="text-xs font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] px-3.5 py-1.5 rounded-full border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]">
            ENGINEERING_MINDSET = &quot;PROD_READY&quot;
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div ref={leftColRevealRef} className="reveal-init lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 sm:p-8 shadow-xl space-y-4 text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed text-sm sm:text-base">
              <p>
                I am a Computer Science and Engineering (Data Science) undergraduate at Sasi Institute of Technology and Engineering (Tadepalligudem, AP) and a MERN Stack Developer Intern at PurpleLane.
              </p>

              <p>
                My engineering approach combines systematic full-stack web development with modern AI architectures. Rather than treating Generative AI as an isolated novelty, I embed language models, vector indexes, and deep learning backbones into production-grade user experiences where data integrity, low latency, and deterministic fallbacks matter.
              </p>

              <p>
                Through projects like <strong className="text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold">ShopMate</strong> and <strong className="text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold">LegalGenie</strong>, I have worked directly with Pinecone and ChromaDB for vector retrieval, LangChain and LangGraph for structured agent workflows, and Google Gemini API for multimodal reasoning.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/60 dark:border-[#24505A]/60 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                  <ShieldCheck size={16} className="text-[#0EA5E9] shrink-0" />
                  <span>Production-Grade Code & Tests</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/60 dark:border-[#24505A]/60 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                  <Zap size={16} className="text-[#14B8A6] shrink-0" />
                  <span>Sub-Second Vector Search</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/60 dark:border-[#24505A]/60 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                  <Code2 size={16} className="text-[#0EA5E9] shrink-0" />
                  <span>Clean MERN RESTful Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/60 dark:border-[#24505A]/60 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                  <Cpu size={16} className="text-[#14B8A6] shrink-0" />
                  <span>RAG & Multi-Turn Agents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview (5 cols) */}
          <div ref={rightColRevealRef} className="reveal-init lg:col-span-5">
            <div 
              ref={terminalTiltRef}
              className="tilt-card rounded-2xl bg-[#071A22] dark:bg-[#071A22] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-5 shadow-2xl font-mono text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] overflow-hidden hover:border-sky-500/50 transition-all"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500/80 inline-block" />
                </div>
                <span className="text-[11px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">engineer_profile.json</span>
              </div>

              <pre className="text-[11px] leading-relaxed text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] overflow-x-auto selection:bg-sky-500/30 selection:text-sky-200">
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

              <div className="mt-4 pt-3 border-t border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] flex items-center justify-between text-[11px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                <span className="flex items-center gap-1.5 text-[#14B8A6] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
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
