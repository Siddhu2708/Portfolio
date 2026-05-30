import { Github, Play, BarChart } from 'lucide-react';

const tagColors = [
  'bg-sky-500/20 text-sky-400 border-sky-400/30',
  'bg-indigo-500/20 text-indigo-400 border-indigo-400/30',
  'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
  'bg-amber-500/20 text-amber-400 border-amber-400/30',
  'bg-blue-500/20 text-blue-400 border-blue-400/30',
  'bg-purple-500/20 text-purple-400 border-purple-400/30',
  'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
  'bg-orange-500/20 text-orange-400 border-orange-400/30',
];

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading">Innovative Work & Projects</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">Pioneering AI-driven solutions through advanced research, deep learning, and data analytics.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {projects.map((p, i) => (
          <div key={p._id || p.slug} className="project-card group" data-aos="fade-up" data-aos-delay={i % 2 ? 200 : 0}>
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full border border-slate-700/50 hover:border-sky-400/30 transition-all duration-500">
              <div className="aspect-video bg-slate-800 relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
                  {(p.tags || []).map((tag, ti) => (
                    <span key={tag} className={`px-3 py-1 backdrop-blur-md text-xs font-bold rounded-full border ${tagColors[ti % tagColors.length]}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-grow text-center">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-3">{p.description}</p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {(p.techStack || []).map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 border border-slate-700 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-sky-400 transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-sky-400 transition-colors">
                      {p.demoUrl.includes('streamlit') ? <><Play className="w-4 h-4" /> Demo</> : <><BarChart className="w-4 h-4" /> Analysis</>}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
