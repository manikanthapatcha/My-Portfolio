import { useState, useEffect } from 'react';
import {
  X,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Calendar,
  CheckCircle2,
  FileText,
  Maximize2,
  Sparkles,
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function CertificateModal({
  isOpen,
  onClose,
  initialIndex = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsFullscreen(false);
    }
  }, [isOpen, initialIndex]);

  // Handle keyboard shortcuts (Escape, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : certifications.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < certifications.length - 1 ? prev + 1 : 0));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isFullscreen, onClose]);

  if (!isOpen) return null;

  const currentCert = certifications[currentIndex] || certifications[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : certifications.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < certifications.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full ${
          isFullscreen ? 'max-w-6xl' : 'max-w-4xl'
        } bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col transition-all duration-300`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] bg-[#071A22] dark:bg-[#071A22] light:bg-[#E2F4F1] shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-sky-500/10 text-[#0EA5E9] border border-sky-500/25 shrink-0">
              <Award size={18} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold">
                  Verified Credential
                </span>
                <span className="text-[10px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                  ({currentIndex + 1} of {certifications.length})
                </span>
              </div>
              <h3
                id="certificate-modal-title"
                className="text-sm sm:text-base font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] truncate"
              >
                {currentCert.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium bg-[#103641] dark:bg-[#103641] light:bg-white hover:bg-[#164B55] dark:hover:bg-[#164B55] light:hover:bg-[#EAF8F6] text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#EAFBFA] border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] transition-colors flex items-center gap-1.5"
              title={isFullscreen ? 'Exit larger view' : 'Expand view'}
            >
              <Maximize2 size={15} />
              <span className="hidden sm:inline">{isFullscreen ? 'Standard' : 'Expand'}</span>
            </button>

            {/* Direct Image / PDF Download */}
            <a
              href={currentCert.pdfUrl || currentCert.image}
              download={`${currentCert.title.replace(/\s+/g, '_')}_Certificate`}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium bg-[#103641] dark:bg-[#103641] light:bg-white hover:bg-[#164B55] dark:hover:bg-[#164B55] light:hover:bg-[#EAF8F6] text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#EAFBFA] border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] transition-colors flex items-center gap-1.5"
              title="Download certificate"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#75A0A8] hover:text-[#EAFBFA] dark:hover:text-[#EAFBFA] light:hover:text-[#103039] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Close certificate modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Certificate Switcher Navigation Pills */}
        <div className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-[#071A22]/90 dark:bg-[#071A22]/90 light:bg-[#F0FAF9] border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] overflow-x-auto scrollbar-none">
          {certifications.map((cert, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={cert.id || idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-[#103641] dark:bg-[#103641] light:bg-white text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:bg-[#164B55] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]'
                }`}
              >
                <Award size={13} className={isActive ? 'text-slate-950' : 'text-[#0EA5E9]'} />
                <span>{cert.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isActive ? 'bg-black/20 text-slate-950 font-bold' : 'bg-black/30 dark:bg-black/30 light:bg-[#E2F4F1] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078]'}`}>
                  {cert.period}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-[#071A22] dark:bg-[#071A22] light:bg-[#E2F4F1]/60">
          {/* Navigation Arrows for fast browsing */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-[#071A22]/85 hover:bg-[#071A22] text-[#EAFBFA] hover:text-[#0EA5E9] border border-[#24505A] transition-all shadow-lg active:scale-95"
            aria-label="Previous certificate"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-[#071A22]/85 hover:bg-[#071A22] text-[#EAFBFA] hover:text-[#0EA5E9] border border-[#24505A] transition-all shadow-lg active:scale-95"
            aria-label="Next certificate"
            title="Next (Right Arrow)"
          >
            <ChevronRight size={22} />
          </button>

          {/* Certificate Image Frame */}
          <div className="relative group w-full max-w-3xl rounded-xl overflow-hidden border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] shadow-2xl bg-black">
            <img
              src={currentCert.image}
              alt={`${currentCert.title} Certificate`}
              className="w-full h-auto object-contain max-h-[58vh] sm:max-h-[64vh] mx-auto select-none"
              loading="eager"
            />
            <a
              href={currentCert.image}
              target="_blank"
              rel="noreferrer"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-md bg-[#071A22]/85 hover:bg-[#071A22] text-white text-[11px] font-mono flex items-center gap-1.5 backdrop-blur-sm border border-[#24505A] shadow"
            >
              <ExternalLink size={12} />
              <span>Open Full Res</span>
            </a>
          </div>

          {/* Metadata Card Below Image */}
          <div className="w-full max-w-3xl mt-4 p-4 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] text-sm">
                  {currentCert.title}
                </span>
                <span className="text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] font-semibold ml-2">
                  | {currentCert.issuer}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#0EA5E9]" />
                  <span>Issued: {currentCert.issueDate}</span>
                </span>
                {currentCert.credentialType && (
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-[#14B8A6]" />
                    <span>{currentCert.credentialType}</span>
                  </span>
                )}
              </div>
            </div>

            <p className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] leading-relaxed">
              {currentCert.description}
            </p>

            {/* Credential Links (IBM SkillsBuild Verification URL or Notes) */}
            <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
              {currentCert.verificationUrl && (
                <a
                  href={currentCert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-slate-950 hover:opacity-95 active:scale-95 transition-all shadow-sm"
                >
                  <Sparkles size={14} />
                  <span>Verify on IBM SkillsBuild</span>
                  <ExternalLink size={12} />
                </a>
              )}

              {currentCert.pdfUrl && (
                <a
                  href={currentCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#E2F4F1] hover:bg-[#164B55] text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] active:scale-95 transition-all border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]"
                >
                  <FileText size={14} className="text-[#0EA5E9]" />
                  <span>View Original PDF</span>
                </a>
              )}

              {currentCert.verificationNote && (
                <span className="text-[11px] font-mono text-[#14B8A6] flex items-center gap-1 font-semibold">
                  <CheckCircle2 size={13} />
                  <span>{currentCert.verificationNote}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
