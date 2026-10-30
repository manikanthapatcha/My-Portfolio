import { useState, useId } from 'react';
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  AlertCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  Loader2,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import ContactRadarGraphic from './ContactRadarGraphic';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ isStandalonePage = false }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'prepared', null

  const formId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const subjectPills = [
    'Full-Stack / AI Opportunity',
    'RAG / Generative AI Project',
    'Frontend / MERN Architecture',
    'Technical Discussion',
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyFullMessage = async () => {
    const textToCopy = `Subject: ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedContent(true);
      setTimeout(() => setCopiedContent(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com)';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify an inquiry subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('prepared');

      // Launch native email client with pre-filled content
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Sai Ganesh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      )}`;

      window.location.href = mailtoUrl;
    }, 450);
  };

  const selectPill = (pill) => {
    setFormData((prev) => ({ ...prev, subject: pill }));
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: null }));
    }
  };

  return (
    <section
      id="contact"
      className={`relative z-10 overflow-hidden ${
        isStandalonePage ? 'pt-32 pb-24' : 'py-24 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bold Contact Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] border border-sky-500/25 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
            <span>GET IN TOUCH · OPEN FOR OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight leading-[1.1]">
            Have an idea?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16]">
              Let&apos;s build something meaningful.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] leading-relaxed font-normal">
            Whether you&apos;re looking to hire an entry-level Full-Stack or AI Engineer, discuss a project collaboration, or explore deep learning and RAG systems, my inbox is open.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Connection Panel & Cosmic Graphic (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Radar Core */}
            <div className="rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                  Signal Coordinates
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#14B8A6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-ping" />
                  Active Listener
                </span>
              </div>

              {/* Graphic */}
              <ContactRadarGraphic />

              {/* Verified Identity Tag */}
              <div className="mt-4 pt-4 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] text-center">
                <div className="text-sm font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                  Patcha Manikanta Naga Venkata Sai Ganesh
                </div>
                <div className="text-xs font-mono text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mt-0.5">
                  Full-Stack Developer · Generative AI
                </div>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                  Direct Email
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                  <Clock size={13} className="text-[#0EA5E9]" />
                  <span>~24h reply</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#E2F4F1] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail size={16} className="text-[#0EA5E9] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] truncate select-all">
                    {personalInfo.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#103641] dark:bg-[#103641] light:bg-white hover:bg-sky-500/20 text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] hover:text-[#0EA5E9] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-[#14B8A6]" />
                      <span className="text-[#14B8A6] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status Bar */}
              <div className="flex items-center gap-2 text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B] font-mono pt-1">
                <MapPin size={14} className="text-[#0EA5E9] shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] hover:border-sky-500/50 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-[#0EA5E9] group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                      LinkedIn
                    </div>
                    <div className="text-[10px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                      Profile
                    </div>
                  </div>
                </div>
                <ExternalLink size={13} className="text-[#75A0A8] group-hover:text-[#0EA5E9] transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] hover:border-sky-500/50 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-[#0EA5E9] group-hover:scale-105 transition-transform">
                    <GithubIcon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                      GitHub
                    </div>
                    <div className="text-[10px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                      Repositories
                    </div>
                  </div>
                </div>
                <ExternalLink size={13} className="text-[#75A0A8] group-hover:text-[#0EA5E9] transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-6 sm:p-10 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] mt-1">
                    Fill out the fields below or select a quick topic to initiate contact.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-[#0EA5E9] flex items-center justify-center border border-sky-500/25">
                  <MessageSquare size={18} />
                </div>
              </div>

              {/* Quick Topic Pills */}
              <div className="mb-6 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
                  Quick Topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {subjectPills.map((pill) => (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => selectPill(pill)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        formData.subject === pill
                          ? 'bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-slate-950 font-bold shadow-sm shadow-sky-500/20'
                          : 'bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#E2F4F1] text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] hover:border-sky-500/40 hover:text-[#0EA5E9]'
                      }`}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Confirmation Banner */}
              {status === 'prepared' && (
                <div className="mb-6 p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#14B8A6] shrink-0 mt-0.5" />
                  <div className="text-xs text-teal-300 dark:text-teal-300 light:text-teal-800 space-y-2">
                    <div className="font-bold text-sm">Email Client Prepared & Launched!</div>
                    <p className="leading-relaxed">
                      Your default mail program has been triggered with your pre-populated message. Just click <strong>Send</strong> in your mail application to dispatch it directly to <span className="underline">{personalInfo.email}</span>.
                    </p>
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyFullMessage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-slate-950 font-bold text-xs hover:opacity-95 transition-all shadow-sm"
                      >
                        {copiedContent ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedContent ? 'Copied Full Content!' : 'Copy Formatted Text'}</span>
                      </button>
                      <span className="text-[11px] text-[#75A0A8]">
                        (Useful if your browser does not have a default email client set)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor={`${formId}-name`}
                      className="block text-xs font-medium text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] mb-1.5"
                    >
                      Your Full Name <span className="text-[#0EA5E9]">*</span>
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. John Doe"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#F0FAF9] border text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] placeholder:text-[#75A0A8] dark:placeholder:text-[#75A0A8] light:placeholder:text-[#78949B] focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]'
                      }`}
                    />
                    {errors.name && (
                      <p id={`${formId}-name-err`} className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor={`${formId}-email`}
                      className="block text-xs font-medium text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] mb-1.5"
                    >
                      Your Email Address <span className="text-[#0EA5E9]">*</span>
                    </label>
                    <input
                      id={`${formId}-email`}
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="e.g. john@organization.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#F0FAF9] border text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] placeholder:text-[#75A0A8] dark:placeholder:text-[#75A0A8] light:placeholder:text-[#78949B] focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]'
                      }`}
                    />
                    {errors.email && (
                      <p id={`${formId}-email-err`} className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor={`${formId}-subject`}
                    className="block text-xs font-medium text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] mb-1.5"
                  >
                    Subject <span className="text-[#0EA5E9]">*</span>
                  </label>
                  <input
                    id={`${formId}-subject`}
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    placeholder="e.g. Full-Stack / Generative AI Role Discussion"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? `${formId}-subj-err` : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#F0FAF9] border text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] placeholder:text-[#75A0A8] dark:placeholder:text-[#75A0A8] light:placeholder:text-[#78949B] focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all ${
                      errors.subject
                        ? 'border-red-500'
                        : 'border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]'
                    }`}
                  />
                  {errors.subject && (
                    <p id={`${formId}-subj-err`} className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor={`${formId}-message`}
                      className="block text-xs font-medium text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]"
                    >
                      Message Details <span className="text-[#0EA5E9]">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-[#75A0A8]">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id={`${formId}-message`}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Describe your project vision, role requirements, or question..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? `${formId}-msg-err` : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#071A22]/70 dark:bg-[#071A22]/70 light:bg-[#F0FAF9] border text-xs text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] placeholder:text-[#75A0A8] dark:placeholder:text-[#75A0A8] light:placeholder:text-[#78949B] focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all resize-none ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2]'
                    }`}
                  />
                  {errors.message && (
                    <p id={`${formId}-msg-err`} className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Action Controls */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky-500/20 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Preparing Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Launch Email & Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Technical Delivery Integrity Notice */}
                <div className="pt-3 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] flex items-start gap-2 text-[11px] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] leading-snug">
                  <Sparkles size={13} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                  <span>
                    Direct transmission: Your inquiry pre-populates in your default email client addressed to <strong className="text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">{personalInfo.email}</strong>, ensuring genuine delivery with no unauthenticated web scraping.
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
