import { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText, MapPin } from 'lucide-react';
import { personalInfo, experience, education, projects, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [hasPdfFile, setHasPdfFile] = useState(false);

  useEffect(() => {
    // Check if resume.pdf exists in public root
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
          setHasPdfFile(true);
        } else {
          setHasPdfFile(false);
        }
      })
      .catch(() => setHasPdfFile(false));

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const textResume = `
SAI GANESH PATCHA
Full-Stack Developer | Generative AI | Deep Learning
Location: Tadepalligudem, Andhra Pradesh, India
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

PROFESSIONAL EXPERIENCE
MERN Stack Developer Intern — PurpleLane (Feb 2026 – Aug 2026)
- Developed responsive user interface components and backend functionality using MERN stack.
- Integrated RESTful APIs with database operations and implemented authentication flows.
- Improved application workflows through structured backend logic and error handling.

EDUCATION
B.Tech in Computer Science and Engineering (Data Science)
Sasi Institute of Technology and Engineering (Expected 2027) | CGPA: 8.34/10
Intermediate: Aditya Junior College (2023) | 70%
SSC: St. Ann's E.M. School (2021) | 92%

PROJECTS
- ShopMate: AI-Powered E-Commerce Platform (React, Vite, Node.js, Express, MongoDB, Pinecone, Gemini, LangChain, LangGraph)
- Student Intelligence: AI-Powered Student Assistant (React, Vite, Node.js, Express, Ollama, Llama 3.2)
- LegalGenie: AI-Powered Legal Research Assistant (React, Node.js, Express, MongoDB, LangChain, ChromaDB, Gemini)
- NEPTUNE-CXR: Chest X-Ray Disease Probability Detection (PyTorch, DenseNet121, FastAPI, React, Node.js, Grad-CAM)
- Order Management System: Full-Stack Inventory & Order Tracking (React, Node.js, Express, MongoDB, Material UI)

SKILLS
Frontend: React.js, HTML5, CSS3, Tailwind CSS, Vite, JavaScript
Backend: Node.js, Express.js, REST APIs, Python, FastAPI
Databases: MongoDB, MongoDB Native Driver, PostgreSQL, ChromaDB, Pinecone
AI & ML: LangChain, LangGraph, RAG, Ollama, Llama 3.2, LLMs, AI Agents, Prompt Engineering, Gemini API, PyTorch
Dev Tools: Git, GitHub, Postman, VS Code, Docker, Vercel, Render

CERTIFICATIONS & ACHIEVEMENTS
- MERN Stack (PurpleLane) | Generative AI (PurpleLane) | Python 101 for Data Science (IBM SkillsBuild)
- Smart India Hackathon (SIH) Internal Hackathon 2026 Participant | IEEE Student Member
    `.trim();

    try {
      await navigator.clipboard.writeText(textResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#0e1217] dark:bg-[#0e1217] light:bg-slate-100">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-lime-400" />
            <h3 id="resume-modal-title" className="text-sm font-bold text-white dark:text-white light:text-slate-900 font-mono">
              Sai_Ganesh_Patcha_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            {/* Copy Plaintext Button */}
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Copy plain-text resume"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-lime-400" />
                  <span className="text-lime-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Direct PDF Download if available */}
            {hasPdfFile && (
              <a
                href="/resume.pdf"
                download="Sai_Ganesh_Patcha_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-lime-400 text-black hover:bg-lime-300 transition-colors"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-charcoal-card dark:bg-[#151921] light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-800 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 dark:border-white/10 light:border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-lime-400 dark:text-lime-400 light:text-lime-600 font-mono mt-1">
                {personalInfo.role}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1 flex items-center gap-1 justify-center sm:justify-start">
                <MapPin size={12} />
                <span>{personalInfo.location}</span>
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 sm:text-right">
              <div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-lime-400">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime-400">
                  linkedin.com/in/sai-ganesh-patcha
                </a>
              </div>
              <div>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-lime-400">
                  github.com/manikanthapatcha
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 font-bold border-b border-white/5 dark:border-white/5 light:border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4">
                  <div>
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                      {edu.degree}
                    </span>
                    <div className="text-slate-400 dark:text-slate-400 light:text-slate-600">
                      {edu.institution} · {edu.location}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-semibold text-lime-400 dark:text-lime-400 light:text-lime-600">
                      {edu.score}
                    </span>
                    <div className="text-[11px] font-mono text-slate-500">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 font-bold border-b border-white/5 dark:border-white/5 light:border-slate-200 pb-1">
              Professional Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2 text-xs">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                      {exp.role}
                    </span>
                    <span className="text-lime-400 font-semibold ml-2">@ {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed pl-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 font-bold border-b border-white/5 dark:border-white/5 light:border-slate-200 pb-1">
              Substantial Engineering Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                      {proj.title} <span className="font-normal text-slate-400">— {proj.tagline}</span>
                    </span>
                    <span className="font-mono text-[10px] text-lime-400 px-2 py-0.5 rounded bg-lime-400/10">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Achievements */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 font-bold border-b border-white/5 dark:border-white/5 light:border-slate-200 pb-1">
              Certifications & Honors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                  <div className="font-bold text-white dark:text-white light:text-slate-900">{cert.title}</div>
                  <div className="text-[11px] text-lime-400 font-mono">{cert.issuer} ({cert.period})</div>
                </div>
              ))}
              {achievements.map((ach, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                  <div className="font-bold text-white dark:text-white light:text-slate-900">{ach.title}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{ach.role} · {ach.year}</div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
