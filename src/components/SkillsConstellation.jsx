import { useState } from 'react';
import {
  Brain,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Code,
  Link as LinkIcon,
  Bot,
  Terminal,
  Cpu,
  Table,
  HardDrive,
  GitBranch,
  Send,
  Zap,
  Lock,
  Atom,
  Palette,
  FileCode,
  Boxes,
  Compass,
  ArrowLeftRight,
  GitFork,
  FileSearch,
  Triangle,
  Cloud,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { skillCategories } from '../data/portfolioData';

// Icon resolver mapping
const iconMap = {
  Brain,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Code,
  Link: LinkIcon,
  Bot,
  Terminal,
  Cpu,
  Table,
  Github: GithubIcon,
  HardDrive,
  GitBranch,
  Send,
  Zap,
  Lock,
  Atom,
  Palette,
  FileCode,
  Boxes,
  Compass,
  ArrowLeftRight,
  GitFork,
  FileSearch,
  Triangle,
  Cloud,
};

export default function SkillsConstellation() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isSwitching, setIsSwitching] = useState(false);

  const activeCategory = skillCategories[activeCategoryIndex];
  const skills = activeCategory.skills;

  // Icon for category
  const CategoryIcon = iconMap[activeCategory.icon] || Brain;

  const handleCategoryChange = (idx) => {
    if (idx === activeCategoryIndex) return;
    setIsSwitching(true);
    setHoveredSkill(null);
    setTimeout(() => {
      setActiveCategoryIndex(idx);
      setIsSwitching(false);
    }, 150);
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 dark:border-white/5 light:border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-lime-400 dark:text-lime-400 light:text-lime-600 mb-2">
            Radial Constellation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Technical Skills & Systems
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2">
            Select an engineering domain to orbit through technologies, libraries, and frameworks applied across full-stack and Generative AI systems.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" role="tablist" aria-label="Skill Categories">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Brain;
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 ${
                  isActive
                    ? 'bg-lime-400 text-black shadow-lg shadow-lime-500/20 scale-105'
                    : 'bg-charcoal-card dark:bg-[#151921] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-lime-400/40 hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                <Icon size={14} />
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Constellation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Radial Visualization */}
          <div className="lg:col-span-8 flex items-center justify-center relative min-h-[380px] sm:min-h-[500px] overflow-hidden sm:overflow-visible py-4 sm:py-0">

            {/* Ambient Background Circles */}
            <div
              className={`relative w-[320px] sm:w-[460px] md:w-[500px] h-[320px] sm:h-[460px] md:h-[500px] flex items-center justify-center scale-[0.82] sm:scale-100 origin-center transition-all duration-300 ${
                isSwitching ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
              }`}
            >

              {/* Outer Orbit 3 */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 dark:border-white/10 light:border-slate-300 animate-orbit-slow pointer-events-none" />

              {/* Orbit 2 */}
              <div className="absolute w-[240px] sm:w-[330px] md:w-[360px] h-[240px] sm:h-[330px] md:h-[360px] rounded-full border border-dashed border-lime-400/15 dark:border-lime-400/15 light:border-lime-500/25 pointer-events-none" />

              {/* Inner Orbit 1 */}
              <div className="absolute w-[140px] sm:w-[200px] md:w-[220px] h-[140px] sm:h-[200px] md:h-[220px] rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 pointer-events-none" />

              {/* Central Active Node */}
              <div className="relative z-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-charcoal-card via-[#151921] to-[#0e1217] light:from-white light:to-slate-100 border-2 border-lime-400 text-center flex flex-col items-center justify-center p-3 shadow-2xl shadow-lime-500/20 group cursor-default transition-transform duration-300">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-lime-400/10 text-lime-400 flex items-center justify-center mb-1">
                  <CategoryIcon size={20} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                  {activeCategory.shortName}
                </span>
                <span className="text-[9px] font-mono text-lime-400 dark:text-lime-400 light:text-lime-600">
                  {skills.length} Techs
                </span>
              </div>

              {/* Satellites Orbiting Around Center */}
              {skills.map((skill, index) => {
                const total = skills.length;
                // Place across 2 concentric radii for spacing
                const ringIndex = index % 2 === 0 ? 0 : 1;
                const radius = ringIndex === 0 ? 115 : 185;
                const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const SkillIcon = iconMap[skill.icon] || Code;
                const isHovered = hoveredSkill?.name === skill.name;

                return (
                  <button
                    key={skill.name}
                    type="button"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onFocus={() => setHoveredSkill(skill)}
                    onBlur={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(skill)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredSkill(skill);
                      }
                    }}
                    aria-label={`${skill.name} (${skill.level})`}
                    className={`absolute z-30 transition-all duration-300 cursor-pointer focus:outline-none ${
                      isHovered ? 'scale-110 z-40' : 'scale-100'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border backdrop-blur-md shadow-lg transition-all ${
                        isHovered
                          ? 'bg-lime-400 text-black border-lime-300 font-bold shadow-lime-500/30'
                          : 'bg-charcoal-card/90 dark:bg-[#151921]/90 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border-white/10 dark:border-white/10 light:border-slate-300 hover:border-lime-400/50'
                      }`}
                    >
                      <SkillIcon size={13} className={isHovered ? 'text-black' : 'text-lime-400'} />
                      <span className="text-xs tracking-tight whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right Column: Active Domain Summary & Detailed Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 shadow-xl">

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center">
                  <CategoryIcon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {activeCategory.name}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              {/* Hovered Skill Detail or Category Overview */}
              {hoveredSkill ? (
                <div className="mt-4 p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-lime-400/30 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-lime-400 dark:text-lime-400 light:text-lime-600 font-mono">
                      {hoveredSkill.name}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400">
                      {hoveredSkill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1">
                    Integrated across Sai Ganesh&apos;s production workflows and verified projects.
                  </p>
                </div>
              ) : (
                <div className="mt-4 p-3.5 rounded-xl bg-black/40 dark:bg-[#0b0d10]/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    Hover or focus any technology in the constellation to view details, or explore the domain list below.
                  </p>
                </div>
              )}

              {/* List of Skills for this category */}
              <div className="mt-5 space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {skills.map((skill) => {
                  const SkillIcon = iconMap[skill.icon] || Code;
                  const isHovered = hoveredSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`flex items-center justify-between p-2 rounded-lg transition-all border cursor-pointer ${
                        isHovered
                          ? 'bg-lime-400/15 border-lime-400/30'
                          : 'bg-white/5 dark:bg-white/5 light:bg-slate-50 border-transparent hover:border-lime-400/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <SkillIcon size={14} className={isHovered ? 'text-lime-300' : 'text-lime-400'} />
                        <span className="text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
