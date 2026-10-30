export default function ContactRadarGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[240px] xs:max-w-[270px] sm:max-w-[320px] mx-auto flex items-center justify-center select-none" aria-hidden="true">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-2xl pointer-events-none" />

      {/* Orbit 3 (Outer) */}
      <div className="absolute inset-4 rounded-full border border-dashed border-[#24505A]/40 dark:border-[#24505A]/40 light:border-[#CDE7E2] animate-orbit-slow" />

      {/* Orbit 2 (Middle) */}
      <div className="absolute inset-12 rounded-full border border-teal-500/25 dark:border-teal-500/25 light:border-teal-500/30 animate-orbit-reverse" />

      {/* Orbit 1 (Inner) */}
      <div className="absolute inset-20 rounded-full border border-[#24505A]/50 dark:border-[#24505A]/50 light:border-[#CDE7E2]" />

      {/* Crosshairs */}
      <div className="absolute w-full h-px bg-[#24505A]/30 dark:bg-[#24505A]/30 light:bg-[#CDE7E2]" />
      <div className="absolute h-full w-px bg-[#24505A]/30 dark:bg-[#24505A]/30 light:bg-[#CDE7E2]" />

      {/* Central Core (Hub) */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-[#103641] dark:bg-[#103641] light:bg-white border-2 border-[#0EA5E9] flex flex-col items-center justify-center shadow-xl shadow-sky-500/20 group">
        <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9] animate-ping absolute" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9] relative" />
        <span className="text-[9px] font-mono font-bold text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] mt-1">
          LIVE
        </span>
      </div>

      {/* Satellite Beacon 1: IST Timezone */}
      <div className="absolute top-8 right-12 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#071A22]/85 dark:bg-[#071A22]/85 light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-[10px] font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] backdrop-blur-sm shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
        <span>IST (UTC+5:30)</span>
      </div>

      {/* Satellite Beacon 2: Remote/Hybrid Ready */}
      <div className="absolute bottom-10 left-8 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#071A22]/85 dark:bg-[#071A22]/85 light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] text-[10px] font-mono text-[#A5C7C9] dark:text-[#A5C7C9] light:text-[#527078] backdrop-blur-sm shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
        <span>Remote Ready</span>
      </div>
    </div>
  );
}
