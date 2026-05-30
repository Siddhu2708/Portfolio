import { Star, GitPullRequest } from 'lucide-react';

export default function GitHubSection({ profile }) {
  const stats = profile?.githubStats || { stars: '50+', commits: '100+' };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-grow" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading">Open Source Contribution</h2>
            <p className="text-slate-400 mb-8 text-lg">Active contributor to the AI community. My GitHub reflects my passion for clean code and constant learning.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-300"><Star className="w-5 h-5 text-yellow-500" /> <span className="font-bold">{stats.stars}</span> Stars</div>
              <div className="flex items-center gap-2 text-slate-300"><GitPullRequest className="w-5 h-5 text-emerald-500" /> <span className="font-bold">{stats.commits}</span> Commits</div>
            </div>
          </div>
          <div className="w-full md:w-auto glass-card p-6 rounded-2xl border border-slate-700/50" data-aos="fade-left">
            <div className="flex gap-1">
              {[0, 1, 2].map((col) => (
                <div key={col} className={`flex flex-col gap-1 ${col > 0 ? 'hidden sm:flex' : ''}`}>
                  {[0, 1, 2, 3, 4, 5, 6].map((row) => (
                    <div key={row} className={`w-3 h-3 rounded-sm ${['bg-slate-800', 'bg-sky-900/50', 'bg-sky-500', 'bg-sky-700', 'bg-sky-400', 'bg-sky-600', 'bg-sky-800'][(col + row) % 7]}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
