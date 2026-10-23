import { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'prepared', null

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message with at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto link so the message can actually be sent without requiring a fake backend
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus('prepared');
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Start a Conversation
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2">
            Open to full-stack engineering roles, AI system collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 shadow-xl relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                Direct Email
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 mb-4">
                <span className="font-mono text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 truncate">
                  {personalInfo.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-lime-400/20 text-slate-300 hover:text-lime-400 transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-lime-400" />
                      <span className="text-lime-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-lime-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-lime-300 transition-all shadow-md shadow-lime-500/10"
              >
                <Mail size={16} />
                <span>Open in Email Client</span>
              </a>
            </div>

            {/* Social Links Card */}
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
                Professional Networks
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-lime-400 transition-colors">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                      LinkedIn
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                      sai-ganesh-patcha
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-lime-400 transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-lime-400/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-lime-400 transition-colors">
                    <GithubIcon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                      GitHub
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                      manikanthapatcha
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-lime-400 transition-colors" />
              </a>

              <div className="flex items-center gap-2 p-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                <MapPin size={14} className="text-lime-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Clear Mailto Action (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
                Send Direct Message
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight mb-6">
                Compose an Inquiry
              </h3>

              {status === 'prepared' && (
                <div className="mb-6 p-4 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-start gap-3">
                  <Check size={18} className="text-lime-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-lime-300 dark:text-lime-300 light:text-lime-800 space-y-1">
                    <div className="font-bold">Email Prepared & Launched!</div>
                    <div>
                      Your default mail client has opened with your message pre-populated. Simply hit send in your email client to dispatch it directly to Sai Ganesh.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                      Your Name <span className="text-lime-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border text-xs text-slate-200 dark:text-slate-200 light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-slate-200'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                      Your Email <span className="text-lime-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border text-xs text-slate-200 dark:text-slate-200 light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Subject <span className="text-lime-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack / AI Developer Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border text-xs text-slate-200 dark:text-slate-200 light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-slate-200'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Message <span className="text-lime-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project requirements, or opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border text-xs text-slate-200 dark:text-slate-200 light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-slate-200'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-lime-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-lime-300 transition-all shadow-lg shadow-lime-500/20 active:scale-[0.99]"
                >
                  <Send size={15} />
                  <span>Launch Email & Send Message</span>
                </button>
              </form>

              {/* Informative Note */}
              <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 leading-snug">
                <AlertCircle size={14} className="text-lime-400 shrink-0 mt-0.5" />
                <span>
                  This form formats your message and launches your device&apos;s email client directly to <strong className="text-slate-200 dark:text-slate-200 light:text-slate-700">{personalInfo.email}</strong>, ensuring prompt, direct communication without third-party email tracking.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
