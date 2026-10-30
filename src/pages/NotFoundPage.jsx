import { Link } from 'react-router-dom';
import { Home, Terminal } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-36 pb-20 flex items-center justify-center relative z-10 px-4">
      <div className="max-w-md w-full rounded-2xl bg-[#103641] dark:bg-[#103641] light:bg-white border border-[#24505A] dark:border-[#24505A] light:border-[#CDE7E2] p-8 text-center shadow-2xl">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-[#0EA5E9] border border-sky-500/25 flex items-center justify-center mx-auto mb-4">
          <Terminal size={24} />
        </div>

        <div className="font-mono text-xs text-[#0EA5E9] dark:text-[#0EA5E9] light:text-[#0284C7] uppercase tracking-widest mb-1 font-semibold">
          Error 404
        </div>

        <h1 className="text-2xl font-bold text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-xs text-[#75A0A8] dark:text-[#75A0A8] light:text-[#527078] mb-6 leading-relaxed">
          The requested route could not be resolved. It may have been moved or does not exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#84CC16] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-95 transition-all shadow-md shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <Home size={15} />
          <span>Return Home</span>
        </Link>
      </div>
    </main>
  );
}
