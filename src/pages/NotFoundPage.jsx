import { Link } from 'react-router-dom';
import { Home, Terminal } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-36 pb-20 flex items-center justify-center relative z-10 px-4">
      <div className="max-w-md w-full rounded-2xl bg-charcoal-card dark:bg-[#151921] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 p-8 text-center shadow-2xl">
        <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center mx-auto mb-4">
          <Terminal size={24} />
        </div>

        <div className="font-mono text-xs text-lime-400 uppercase tracking-widest mb-1">
          Error 404
        </div>

        <h1 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
          The requested route could not be resolved. It may have been moved or does not exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-400 text-black font-semibold text-xs uppercase tracking-wider hover:bg-lime-300 transition-colors shadow-md"
        >
          <Home size={15} />
          <span>Return Home</span>
        </Link>
      </div>
    </main>
  );
}
