import { ScrollText, Calendar, Users, ExternalLink } from 'lucide-react';

export default function Research({ items }) {
  const paper = items?.[0];
  if (!paper) return null;

  return (
    <section id="research" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-16 text-center font-heading">Research & Publications</h2>
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-sky-400/10 relative overflow-hidden group" data-aos="fade-up">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-400/5 blur-3xl rounded-full" />
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-sky-400/10 flex items-center justify-center text-sky-400">
              <ScrollText className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-bold rounded mb-4 tracking-widest uppercase">{paper.badge}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{paper.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-lg mb-6 leading-relaxed">
                {(paper.highlights || []).map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-500"><Calendar className="w-4 h-4" /> {paper.date}</div>
                <div className="flex items-center gap-2 text-sm text-slate-500"><Users className="w-4 h-4" /> {paper.role}</div>
                {paper.paperUrl && (
                  <a href={paper.paperUrl} target="_blank" rel="noreferrer" className="px-6 py-2 bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 border border-sky-400/20 rounded-xl font-bold transition-all flex items-center gap-2 ml-auto">
                    <ExternalLink className="w-4 h-4" /> View Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
