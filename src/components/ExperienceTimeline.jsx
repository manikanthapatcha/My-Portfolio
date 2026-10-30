import { useState } from 'react';
import { Briefcase, GraduationCap, Award, Trophy, CheckCircle, Calendar, Sparkles, Building2, Eye } from 'lucide-react';
import { experience, education, certifications, achievements } from '../data/portfolioData';
import { useCardTilt, useScrollReveal } from '../hooks/useMotion';
import CertificateModal from './CertificateModal';

function ExperienceItemCard({ exp }) {
  const tiltRef = useCardTilt({ maxTilt: 4, scale: 1.01 });

  return (
    <div className="relative pl-5 sm:pl-8 group">
      {/* Illuminated Timeline Node */}
      <div 
        className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#0EA5E9] border-4 border-[#071A22] dark:border-[#071A22] light:border-white shadow-[0_0_12px_rgba(14,165,233,0.8)] z-10 transition-transform duration-300 group-hover:scale-125"
        aria-hidden="true"
      >
        <span className="absolute -inset-1 rounded-full bg-[#0EA5E9]/40 animate-ping opacity-75" />
      </div>

      <div
        ref={tiltRef}
        className="tilt-card rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-4.5 sm:p-8 hover:border-sky-500/50 transition-all shadow-xl relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0EA5E9] bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/25">
                Active Internship
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
              {exp.role}
            </h3>
            <div className="text-xs sm:text-sm font-semibold text-[#14B8A6] dark:text-[#14B8A6] light:text-[#0D9488] flex items-center gap-1.5 mt-0.5">
              <Building2 size={14} className="shrink-0" />
              <span>{exp.company}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] self-start sm:self-auto bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1] px-3 py-1.5 rounded-full border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
            <Calendar size={13} className="text-[#0EA5E9]" />
            <span>{exp.duration}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed mb-5 sm:mb-6">
          {exp.description}
        </p>

        <div className="space-y-2.5 pt-2 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#0EA5E9]" />
            <span>Core Contributions & Deliverables:</span>
          </div>
          <ul className="space-y-2 text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#14B8A6] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1] text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/40 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationItemCard({ edu }) {
  const tiltRef = useCardTilt({ maxTilt: 3, scale: 1.008 });

  return (
    <div className="relative pl-5 sm:pl-8 group">
      {/* Node */}
      <div 
        className={`absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 z-10 ${
          edu.current
            ? 'bg-[#14B8A6] border-[#071A22] dark:border-[#071A22] light:border-white shadow-[0_0_8px_rgba(20,184,166,0.6)]'
            : 'bg-[#24505A] dark:bg-[#24505A] light:bg-[#CDE7E2] border-[#071A22] dark:border-[#071A22] light:border-white'
        }`}
        aria-hidden="true"
      />

      <div
        ref={tiltRef}
        className={`tilt-card rounded-2xl border p-4.5 sm:p-6 transition-all ${
          edu.current
            ? 'bg-[#103641] dark:bg-[#103641] light:bg-white border-teal-500/40 hover:border-teal-500/70 shadow-xl'
            : 'bg-[#103641]/70 dark:bg-[#103641]/70 light:bg-[#F0FAF9] border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] hover:border-sky-500/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <h4 className="text-base font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
            {edu.degree}
          </h4>
          <span className="text-xs font-mono text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold self-start sm:self-auto bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/25">
            {edu.score}
          </span>
        </div>

        <div className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] font-medium mb-1">
          {edu.institution} · <span className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">{edu.location}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] mb-2">
          <Calendar size={12} className="text-[#0EA5E9]/80" />
          <span>{edu.year}</span>
        </div>

        <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] leading-relaxed">
          {edu.details}
        </p>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const headerRevealRef = useScrollReveal();
  const contentRevealRef = useScrollReveal();
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  const handleOpenCertificate = (index = 0) => {
    setSelectedCertIndex(index);
    setIsCertModalOpen(true);
  };

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div ref={headerRevealRef} className="reveal-init text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mb-2 font-semibold">
            Career & Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
            Experience, Education & Credentials
          </h2>
          <p className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] text-sm sm:text-base mt-2">
            Verified engineering internship experience, academic track record in Data Science, and specialized credentials.
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div ref={contentRevealRef} className="reveal-init grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Internship Experience & Education (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Experience Section with Vertical Spine */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold mb-6">
                <Briefcase size={16} />
                <span>Industry Experience</span>
              </div>

              {/* Timeline Container with Illuminated Spine */}
              <div className="relative border-l-2 border-sky-500/30 dark:border-sky-500/30 light:border-teal-500/40 ml-2.5 sm:ml-4 space-y-8">
                {experience.map((exp) => (
                  <ExperienceItemCard key={exp.id} exp={exp} />
                ))}
              </div>
            </div>

            {/* Education Section with Connected Vertical Spine */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold mb-6">
                <GraduationCap size={16} />
                <span>Academic Track Record</span>
              </div>

              {/* Timeline Container with Gradient Spine */}
              <div className="relative border-l-2 border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] ml-2.5 sm:ml-4 space-y-6">
                {education.map((edu, idx) => (
                  <EducationItemCard key={idx} edu={edu} />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & Achievements (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            
            {/* Certifications Card */}
            <div className="tilt-card rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-4.5 sm:p-6 shadow-xl hover:border-sky-500/40 transition-all">
              <div
                onClick={() => handleOpenCertificate(0)}
                className="flex items-center justify-between gap-2 text-sm font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mb-4 cursor-pointer group/hdr select-none"
                title="Click to view verified certificates"
              >
                <div className="flex items-center gap-2">
                  <Award size={16} className="group-hover/hdr:scale-110 transition-transform text-[#0EA5E9]" />
                  <span className="font-bold">Verified Credentials</span>
                </div>
                <span className="text-[10px] font-mono normal-case tracking-normal px-2 py-0.5 rounded-full bg-sky-500/10 text-[#0EA5E9] border border-sky-500/30 group-hover/hdr:bg-[#0EA5E9] group-hover/hdr:text-slate-950 transition-colors flex items-center gap-1 font-semibold">
                  <Eye size={11} />
                  <span>View (3)</span>
                </span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOpenCertificate(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenCertificate(idx);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="group relative p-3.5 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/50 hover:bg-[#164B55]/40 dark:hover:bg-[#164B55]/40 light:hover:bg-[#EAF8F6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    title={`Click to view ${cert.title} Certificate`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] group-hover:text-[#0EA5E9] transition-colors flex items-center gap-1.5">
                        <span>{cert.title}</span>
                        <Eye size={13} className="opacity-0 group-hover:opacity-100 text-[#0EA5E9] transition-opacity shrink-0" />
                      </span>
                      <span className="text-[10px] font-mono text-[#14B8A6] bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/25 shrink-0">
                        {cert.period}
                      </span>
                    </div>
                    <div className="text-xs text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-mono mt-0.5">
                      {cert.issuer}
                    </div>
                    <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[10px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                        {cert.issueDate ? `Issued: ${cert.issueDate}` : 'Official Credential'}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-[#0EA5E9] text-[11px] group-hover:translate-x-0.5 transition-transform">
                        <span>View Certificate</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Activities Card */}
            <div className="tilt-card rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-4.5 sm:p-6 shadow-xl hover:border-sky-500/40 transition-all">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold mb-4">
                <Trophy size={16} />
                <span>Honors & Activities</span>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#F0FAF9] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                        {ach.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] bg-[#103641] dark:bg-[#103641] light:bg-[#E2F4F1] px-2 py-0.5 rounded-full border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
                        {ach.year}
                      </span>
                    </div>
                    <div className="text-xs text-[#14B8A6] dark:text-[#14B8A6] light:text-[#0D9488] font-mono mt-0.5">
                      {ach.role}
                    </div>
                    <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] mt-2 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Certificate Lightbox Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        initialIndex={selectedCertIndex}
      />
    </section>
  );
}
