import { Briefcase, GraduationCap, Award, Trophy, CheckCircle, Calendar } from 'lucide-react';
import { experience, education, certifications, achievements } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 mb-2">
            Career & Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Experience, Education & Credentials
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2">
            Verified engineering internship experience, academic track record in Data Science, and specialized credentials.
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Internship Experience & Education (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-lime-400 dark:text-lime-400 light:text-lime-600 mb-6">
                <Briefcase size={16} />
                <span>Industry Experience</span>
              </div>

              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 hover:border-lime-500/30 transition-all shadow-xl relative overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-lime-400 dark:text-lime-400 light:text-lime-600">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 self-start sm:self-auto bg-black/30 dark:bg-black/30 light:bg-slate-100 px-3 py-1.5 rounded-full border border-white/5 dark:border-white/5 light:border-slate-200">
                        <Calendar size={13} className="text-lime-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-white/5 dark:border-white/5 light:border-slate-100">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                        Core Contributions:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-lime-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/40 dark:bg-black/40 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/5 dark:border-white/5 light:border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-lime-400 dark:text-lime-400 light:text-lime-600 mb-6">
                <GraduationCap size={16} />
                <span>Academic Background</span>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                      edu.current
                        ? 'bg-charcoal-card dark:bg-[#151921] light:bg-white border-lime-400/40 shadow-xl'
                        : 'bg-charcoal-card/60 dark:bg-[#151921]/60 light:bg-slate-50 border-white/10 dark:border-white/10 light:border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-lime-400 dark:text-lime-400 light:text-lime-600 font-semibold self-start sm:self-auto bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20">
                        {edu.score}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium mb-1">
                      {edu.institution} · <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{edu.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
                      <Calendar size={12} />
                      <span>{edu.year}</span>
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & Achievements (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Certifications Card */}
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 shadow-xl">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-lime-400 dark:text-lime-400 light:text-lime-600 mb-4">
                <Award size={16} />
                <span>Verified Credentials</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded-full">
                        {cert.period}
                      </span>
                    </div>
                    <div className="text-xs text-lime-400 dark:text-lime-400 light:text-lime-600 font-mono mt-0.5">
                      {cert.issuer}
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Activities Card */}
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 shadow-xl">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-lime-400 dark:text-lime-400 light:text-lime-600 mb-4">
                <Trophy size={16} />
                <span>Honors & Activities</span>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                        {ach.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">
                        {ach.year}
                      </span>
                    </div>
                    <div className="text-xs text-lime-400 dark:text-lime-400 light:text-lime-600 font-mono mt-0.5">
                      {ach.role}
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
