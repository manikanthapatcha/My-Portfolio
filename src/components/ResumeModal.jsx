import { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText, MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';
import { personalInfo, experience, education, projects, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [hasPdfFile, setHasPdfFile] = useState(true);

  useEffect(() => {
    // Check if resume.pdf exists in public root
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setHasPdfFile(true);
        }
      })
      .catch(() => {});

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
PATCHA MANIKANTA NAGA VENKATA SAI GANESH
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

OBJECTIVE
${personalInfo.objective}

PROFESSIONAL EXPERIENCE
MERN Stack Developer Intern | PurpleLane (February 22, 2026 – August 22, 2026)
- Developed and enhanced full-stack web application features using React.js, Node.js, Express.js, and MongoDB.
- Built reusable UI components, integrated RESTful APIs, implemented backend functionality, and managed database operations.
- Focused on responsive design, modular code development, and application performance while following maintainable software development practices.

ACADEMIC QUALIFICATION
B.Tech — Computer Science and Engineering (Data Science)
Sasi Institute of Technology and Engineering | Expected Graduation: 2027 | CGPA: 8.34/10

Intermediate (2023)
Aditya Junior College | Percentage: 70%

SSC (2021)
St. Ann's E.M. School | Percentage: 92%

TECHNICAL SKILLS
- Programming: JavaScript, Python
- Frontend: React.js, HTML5, CSS3, Tailwind CSS, Vite
- Backend: Node.js, Express.js, RESTful APIs
- Databases: MongoDB, PostgreSQL
- Generative AI: LangChain, LangGraph, RAG, LLMs, AI Agents, Prompt Engineering, Google Gemini API, Pinecone
- Tools and Platforms: Git, GitHub, Postman, VS Code, Docker, Vercel, Render

PROJECTS
1. Student Intelligence — AI-Powered Student Assistant
Technologies: React, Vite, Node.js, Express.js, Ollama, Llama 3.2, JavaScript, REST APIs
• Integrated the locally running Llama 3.2 model through Ollama to enable AI-powered student conversations.
• Developed backend chat and health-monitoring APIs with a dedicated service for local model communication.
• Implemented model detection and fallback handling to improve application reliability.

2. ShopMate — AI-Powered E-Commerce Platform
Technologies: React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB Native Driver, JWT, Pinecone, Google Gemini AI, LangChain, LangGraph
• Developed a full-stack e-commerce platform with authentication, product management, and keyword-based search.
• Integrated semantic product search, AI-generated product descriptions, and multimodal image-based product listing.
• Built AI customer support, a RAG-based policy assistant, and an AI blog-generation workflow with human review.

3. LegalGenie — AI-Powered Legal Research Assistant
Technologies: React.js, Node.js, Express.js, MongoDB, LangChain, ChromaDB, Gemini AI, REST APIs
• Developed semantic search and RAG-based legal research for retrieving relevant cases and generating contextual answers.
• Implemented PDF ingestion, document processing, vector retrieval, and AI-generated case summaries and briefs.

4. Order Management System
Technologies: React.js, Node.js, Express.js, MongoDB, Material UI, CSS, REST APIs
• Developed a full-stack application for product, customer, inventory, and order management.
• Implemented CRUD operations, RESTful APIs, order status tracking, database integration, and error handling.

CERTIFICATES
• MERN Stack — PurpleLane
• Generative AI — PurpleLane
• Python 101 for Data Science — IBM SkillsBuild

ADDITIONAL INFORMATION
• Achievement: Participated in SIH Internal Hackathon 2026.
• Membership: IEEE Member.
• Languages: English, Telugu, Hindi.
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] bg-[#071A22] dark:bg-[#071A22] light:bg-[#E2F4F1]">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-[#0EA5E9]" />
            <h3 id="resume-modal-title" className="text-sm font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-mono">
              Sai_Ganesh_Patcha_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#103641] dark:bg-[#103641] light:bg-white hover:bg-[#164B55] dark:hover:bg-[#164B55] light:hover:bg-[#EAF8F6] active:scale-95 text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#EAFBFA] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Copy Plaintext Button */}
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#103641] dark:bg-[#103641] light:bg-white hover:bg-[#164B55] dark:hover:bg-[#164B55] light:hover:bg-[#EAF8F6] active:scale-95 text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#EAFBFA] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              title="Copy plain-text resume"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#14B8A6]" />
                  <span className="text-[#14B8A6] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Direct Official PDF Download */}
            {hasPdfFile && (
              <a
                href="/resume.pdf"
                download="Sai_Ganesh_Patcha_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-slate-950 hover:opacity-95 active:scale-95 transition-all shadow-sm shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#75A0A8] hover:text-[#EAFBFA] dark:hover:text-[#EAFBFA] light:hover:text-[#103039] hover:bg-white/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-[#103641] dark:bg-[#103641] light:bg-white text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] font-sans print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] pb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
                {personalInfo.fullName}
              </h1>
              <div className="text-xs text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-mono mt-1 font-semibold">
                {personalInfo.role}
              </div>
              <div className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] mt-1 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#0EA5E9]" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-[#0EA5E9]" />
                  {personalInfo.phone}
                </span>
              </div>
            </div>

            <div className="text-xs space-y-1 font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] sm:text-right">
              <div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#0EA5E9] flex items-center gap-1 justify-center sm:justify-end">
                  <Mail size={12} />
                  <span>{personalInfo.email}</span>
                </a>
              </div>
              <div>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0EA5E9] flex items-center gap-1 justify-center sm:justify-end">
                  <Globe size={12} />
                  <span>linkedin.com/in/sai-ganesh-patcha-390a412a2</span>
                </a>
              </div>
              <div>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-[#0EA5E9] flex items-center gap-1 justify-center sm:justify-end">
                  <Globe size={12} />
                  <span>github.com/manikanthapatcha</span>
                </a>
              </div>
            </div>
          </div>

          {/* Objective */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Objective
            </h2>
            <p className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed">
              {personalInfo.objective}
            </p>
          </section>

          {/* Professional Experience */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Professional Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2 text-xs">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <span className="font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] text-sm">
                      {exp.role}
                    </span>
                    <span className="text-[#14B8A6] font-semibold ml-2">| {exp.company}</span>
                  </div>
                  <span className="font-mono text-[#75A0A8] text-[11px]">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed pl-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Academic Qualification */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Academic Qualification
            </h2>
            <div className="space-y-2.5 text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4">
                  <div>
                    <span className="font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] text-sm">
                      {edu.degree}
                    </span>
                    <div className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078]">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-semibold text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7]">
                      {edu.score}
                    </span>
                    <div className="text-[11px] font-mono text-[#75A0A8]">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-medium">Programming:</strong>{' '}
                <span className="text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">JavaScript, Python</span>
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-medium">Frontend:</strong>{' '}
                <span className="text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">React.js, HTML5, CSS3, Tailwind CSS, Vite</span>
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-medium">Backend:</strong>{' '}
                <span className="text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">Node.js, Express.js, RESTful APIs</span>
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-medium">Databases:</strong>{' '}
                <span className="text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">MongoDB, PostgreSQL</span>
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-medium">Generative AI:</strong>{' '}
                <span className="text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">LangChain, LangGraph, RAG, LLMs, AI Agents, Prompt Engineering, Google Gemini API, Pinecone</span>
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] font-medium">Tools and Platforms:</strong>{' '}
                <span className="text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078]">Git, GitHub, Postman, VS Code, Docker, Vercel, Render</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className="font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] text-sm">
                      {proj.title} <span className="font-normal text-[#75A0A8]">— {proj.tagline}</span>
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                    <strong>Technologies:</strong> {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed pl-1 pt-0.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Certificates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/40 hover:bg-[#164B55]/30 transition-all group block"
                  title={`View ${cert.title} Certificate`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] group-hover:text-[#0EA5E9] transition-colors">
                      {cert.title}
                    </span>
                    <ExternalLink size={12} className="text-[#75A0A8] group-hover:text-[#0EA5E9] transition-colors shrink-0" />
                  </div>
                  <div className="text-[11px] text-[#14B8A6] font-mono mt-0.5">— {cert.issuer}</div>
                </a>
              ))}
            </div>
          </section>

          {/* Additional Information */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-bold border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] pb-1">
              Additional Information
            </h2>
            <div className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] space-y-1">
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">Achievement:</strong> {achievements[0]?.description}
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">Membership:</strong> {achievements[1]?.title}.
              </div>
              <div>
                <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">Languages:</strong> {personalInfo.languages.join(', ')}.
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
