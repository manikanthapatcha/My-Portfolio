export default function ContactRadarGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto flex items-center justify-center select-none" aria-hidden="true">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-lime-500/10 dark:bg-lime-400/5 blur-2xl pointer-events-none" />

      {/* Orbit 3 (Outer) */}
      <div className="absolute inset-4 rounded-full border border-dashed border-white/10 dark:border-white/10 light:border-slate-300 animate-orbit-slow" />

      {/* Orbit 2 (Middle) */}
      <div className="absolute inset-12 rounded-full border border-lime-400/20 dark:border-lime-400/20 light:border-lime-500/30 animate-orbit-reverse" />

      {/* Orbit 1 (Inner) */}
      <div className="absolute inset-20 rounded-full border border-white/15 dark:border-white/15 light:border-slate-300" />

      {/* Crosshairs */}
      <div className="absolute w-full h-px bg-white/5 dark:bg-white/5 light:bg-slate-200" />
      <div className="absolute h-full w-px bg-white/5 dark:bg-white/5 light:bg-slate-200" />

      {/* Central Core (Hub) */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-charcoal-card dark:bg-[#151921] light:bg-white border-2 border-lime-400 flex flex-col items-center justify-center shadow-xl shadow-lime-500/20 group">
        <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping absolute" />
        <span className="w-2.5 h-2.5 rounded-full bg-lime-500 relative" />
        <span className="text-[9px] font-mono font-bold text-lime-400 dark:text-lime-400 light:text-lime-600 mt-1">
          LIVE
        </span>
      </div>

      {/* Satellite Beacon 1: IST Timezone */}
      <div className="absolute top-8 right-12 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 dark:bg-black/60 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 backdrop-blur-sm shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>IST (UTC+5:30)</span>
      </div>

      {/* Satellite Beacon 2: Remote/Hybrid Ready */}
      <div className="absolute bottom-10 left-8 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 dark:bg-black/60 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 backdrop-blur-sm shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
        <span>Remote Ready</span>
      </div>
    </div>
  );
}
