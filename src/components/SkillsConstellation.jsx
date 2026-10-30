import { useState, useEffect } from 'react';
import {
  Brain,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { isReducedMotionPreferred } from '../hooks/useMotion';
import { TechLogo } from './TechLogos';

// Category Icon resolver mapping
const categoryIconMap = {
  Brain,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
};

const ROTATION_INTERVAL = 2000; // Exactly 2000ms

export default function SkillsConstellation() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);

  const activeCategory = skillCategories[activeCategoryIndex];
  const skills = activeCategory.skills;

  // Currently inspected skill (hovered or selected or first in category)
  const currentSkill = hoveredSkill || selectedSkill || skills[0];

  // Category Icon component
  const CategoryIcon = categoryIconMap[activeCategory.icon] || Brain;

  // Listen to browser tab visibility to pause when inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Automatic category rotation every 2 seconds
  useEffect(() => {
    // Respect user's reduced-motion preference
    if (isReducedMotionPreferred()) return;

    // Pause rotation if hovering or browser tab is hidden
    if (isHovered || isTabHidden) return;

    const timer = setInterval(() => {
      if (document.hidden) return;

      setIsSwitching(true);
      setActiveCategoryIndex((prev) => (prev + 1) % skillCategories.length);
      setHoveredSkill(null);
      setSelectedSkill(null);

      setTimeout(() => {
        setIsSwitching(false);
      }, 200);
    }, ROTATION_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, isTabHidden, activeCategoryIndex]);

  // Manual category switch (click immediately updates & resets interval for next cycle)
  const handleCategoryClick = (idx) => {
    if (idx === activeCategoryIndex) return;
    setIsSwitching(true);
    setActiveCategoryIndex(idx);
    setHoveredSkill(null);
    setSelectedSkill(null);
    setTimeout(() => {
      setIsSwitching(false);
    }, 200);
  };

  return (
    <section
      id="skills"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-20 sm:py-24 relative z-10 border-t border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mb-2 font-semibold">
            Radial Constellation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight">
            Technical Skills & Systems
          </h2>
          <p className="text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] text-xs sm:text-base mt-2 leading-relaxed">
            Select an engineering domain to orbit through technologies, libraries, and frameworks applied across full-stack and Generative AI systems.
          </p>

          {/* Autoplay / Pause Status Indicator */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103641]/70 dark:bg-[#103641]/70 light:bg-white border border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] text-[11px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] shadow-sm">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                isHovered ? 'bg-[#75A0A8]' : 'bg-[#14B8A6] animate-pulse'
              }`}
            />
            <span>{isHovered ? 'Autoplay Paused (Hovering)' : 'Auto-Rotating · 2s Interval'}</span>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8 sm:mb-12" role="tablist" aria-label="Skill Categories">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIconMap[cat.icon] || Brain;
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryClick(idx)}
                style={
                  isActive
                    ? {
                        backgroundColor: cat.color,
                        borderColor: cat.color,
                        boxShadow: `0 8px 20px -4px ${cat.color}40`,
                      }
                    : undefined
                }
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? 'text-slate-950 scale-105 font-bold'
                    : 'bg-[#103641] dark:bg-[#103641] light:bg-white text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] hover:border-sky-500/50 hover:text-[#EAFBFA] dark:hover:text-[#EAFBFA] light:hover:text-[#103039]'
                }`}
              >
                <Icon size={15} />
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive ? 'bg-black/20 text-slate-950 font-bold' : 'bg-black/30 dark:bg-black/30 light:bg-[#E2F4F1] text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078]'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Constellation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Desktop Radial Visualization (>= md) */}
          <div className="hidden md:flex lg:col-span-8 items-center justify-center relative min-h-[480px] py-4">

            {/* Ambient Background Circles */}
            <div
              className={`relative w-[460px] lg:w-[500px] h-[460px] lg:h-[500px] flex items-center justify-center origin-center transition-all duration-300 ${
                isSwitching ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
              }`}
            >

              {/* Outer Orbit 3 */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] animate-orbit-slow pointer-events-none" />

              {/* Orbit 2 */}
              <div 
                style={{ borderColor: `${activeCategory.color}35` }}
                className="absolute w-[330px] lg:w-[360px] h-[330px] lg:h-[360px] rounded-full border border-dashed pointer-events-none transition-colors duration-400" 
              />

              {/* Inner Orbit 1 */}
              <div className="absolute w-[200px] lg:w-[220px] h-[200px] lg:h-[220px] rounded-full border border-[#24505A]/60 dark:border-[#24505A]/60 light:border-[#CDE7E2] pointer-events-none" />

              {/* Central Active Node */}
              <div 
                style={{
                  borderColor: activeCategory.color,
                  boxShadow: `0 0 35px -5px ${activeCategory.color}35`,
                }}
                className="relative z-20 w-32 h-32 rounded-full bg-[#103641] dark:bg-[#103641] light:bg-white border-2 text-center flex flex-col items-center justify-center p-3 group cursor-default transition-all duration-300"
              >
                <div 
                  style={{
                    backgroundColor: `${activeCategory.color}20`,
                    color: activeCategory.color,
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors duration-300"
                >
                  <CategoryIcon size={20} />
                </div>
                <span className="text-xs font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] leading-tight transition-colors duration-300">
                  {activeCategory.shortName}
                </span>
                <span 
                  style={{ color: activeCategory.color }}
                  className="text-[10px] font-mono font-semibold transition-colors duration-300"
                >
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

                const isSelected = currentSkill?.name === skill.name;

                return (
                  <button
                    key={`${activeCategory.id}-${skill.name}`}
                    type="button"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onFocus={() => setSelectedSkill(skill)}
                    onClick={() => setSelectedSkill(skill)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedSkill(skill);
                      }
                    }}
                    aria-label={`${skill.name} (${skill.level})`}
                    className={`absolute z-30 transition-all duration-300 cursor-pointer focus:outline-none ${
                      isSelected ? 'scale-110 z-40' : 'scale-100'
                    }`}
                  >
                    <div
                      style={{
                        animationDelay: `${index * 40}ms`,
                        ...(isSelected
                          ? {
                              backgroundColor: activeCategory.color,
                              borderColor: activeCategory.color,
                              color: '#071A22',
                              boxShadow: `0 4px 18px ${activeCategory.color}45`,
                            }
                          : undefined),
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-lg transition-all animate-node-in ${
                        isSelected
                          ? 'font-bold'
                          : 'bg-[#103641]/90 dark:bg-[#103641]/90 light:bg-white text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] hover:border-sky-400/60'
                      }`}
                    >
                      <div className="shrink-0 flex items-center justify-center">
                        <TechLogo name={skill.name} size={15} />
                      </div>
                      <span className="text-xs tracking-tight whitespace-nowrap font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Mobile Adapted Visual Orbit & Skill Chips (< md) */}
          <div className="flex md:hidden flex-col items-center gap-6 w-full">
            {/* Compact Orbit Center */}
            <div className="relative w-56 h-56 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] animate-orbit-slow" />
              <div 
                style={{ borderColor: `${activeCategory.color}35` }}
                className="absolute inset-6 rounded-full border animate-orbit-reverse" 
              />
              
              <div 
                style={{
                  borderColor: activeCategory.color,
                  boxShadow: `0 0 25px -4px ${activeCategory.color}35`,
                }}
                className="relative z-10 w-28 h-28 rounded-full bg-[#103641] dark:bg-[#103641] light:bg-white border-2 text-center flex flex-col items-center justify-center p-2.5 transition-all duration-300"
              >
                <div 
                  style={{
                    backgroundColor: `${activeCategory.color}20`,
                    color: activeCategory.color,
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors duration-300"
                >
                  <CategoryIcon size={18} />
                </div>
                <span className="text-xs font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] transition-colors duration-300">
                  {activeCategory.shortName}
                </span>
                <span 
                  style={{ color: activeCategory.color }}
                  className="text-[10px] font-mono font-semibold transition-colors duration-300"
                >
                  {skills.length} Technologies
                </span>
              </div>
            </div>

            {/* Mobile Touch-Friendly Skill Selector Grid */}
            <div className="w-full space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] text-center">
                Tap to inspect technology details:
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 w-full">
                {skills.map((skill) => {
                  const isSelected = currentSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      style={
                        isSelected
                          ? {
                              backgroundColor: activeCategory.color,
                              borderColor: activeCategory.color,
                              color: '#071A22',
                              boxShadow: `0 4px 14px ${activeCategory.color}35`,
                            }
                          : undefined
                      }
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all min-h-[44px] ${
                        isSelected
                          ? 'font-bold'
                          : 'bg-[#103641] dark:bg-[#103641] light:bg-white text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] hover:border-sky-400/50'
                      }`}
                    >
                      <div className="shrink-0 flex items-center justify-center">
                        <TechLogo name={skill.name} size={15} />
                      </div>
                      <span className="truncate">{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Active Domain Summary & Detailed Breakdown */}
          <div className="lg:col-span-4 space-y-4 w-full">
            <div className="rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-5 sm:p-6 shadow-xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-3">
                <div 
                  style={{
                    backgroundColor: `${activeCategory.color}20`,
                    borderColor: `${activeCategory.color}40`,
                    color: activeCategory.color,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors duration-300"
                >
                  <CategoryIcon size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight transition-colors duration-300">
                    {activeCategory.name}
                  </h3>
                  <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] transition-colors duration-300">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              {/* Active Skill Detail Card */}
              {currentSkill && (
                <div 
                  style={{ borderColor: `${activeCategory.color}40` }}
                  className="mt-4 p-3.5 rounded-xl bg-[#071A22]/60 dark:bg-[#071A22]/60 light:bg-[#E2F4F1]/70 border transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2] flex items-center justify-center shrink-0 shadow-sm">
                        <TechLogo name={currentSkill.name} size={16} />
                      </div>
                      <span 
                        style={{ color: activeCategory.color }}
                        className="text-xs font-bold font-mono transition-colors duration-300"
                      >
                        {currentSkill.name}
                      </span>
                    </div>
                    <span 
                      style={{
                        backgroundColor: `${activeCategory.color}15`,
                        borderColor: `${activeCategory.color}35`,
                        color: activeCategory.color,
                      }}
                      className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border font-semibold transition-colors duration-300"
                    >
                      {currentSkill.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] mt-1 leading-relaxed">
                    Integrated across Sai Ganesh&apos;s production workflows, architectural patterns, and verified project codebases.
                  </p>
                </div>
              )}

              {/* List of Skills for this category */}
              <div className="mt-5 space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {skills.map((skill) => {
                  const isSelected = currentSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={
                        isSelected
                          ? {
                              backgroundColor: `${activeCategory.color}20`,
                              borderColor: `${activeCategory.color}50`,
                            }
                          : undefined
                      }
                      className={`flex items-center justify-between p-2.5 rounded-lg transition-all border cursor-pointer min-h-[44px] ${
                        isSelected
                          ? 'text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]'
                          : 'bg-[#0D2933]/50 dark:bg-[#0D2933]/50 light:bg-[#F0FAF9] border-transparent hover:border-[#24505A] dark:hover:border-[#24505A] light:hover:border-[#CDE7E2]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          <TechLogo name={skill.name} size={15} />
                        </div>
                        <span className="text-xs font-medium text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#75A0A8] dark:text-[#75A0A8] light:text-[#78949B]">
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
