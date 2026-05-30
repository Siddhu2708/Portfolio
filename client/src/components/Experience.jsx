import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience({ items }) {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-16 text-center font-heading">Internships & Education</h2>
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {items.map((item, i) => {
            const Icon = item.type === 'education' ? GraduationCap : Briefcase;
            return (
              <div key={item._id || item.title} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`} data-aos={i % 2 ? 'fade-left' : 'fade-right'}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-dark text-sky-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 timeline-dot">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-card border border-slate-700/50 hover:border-sky-400/30 transition-all timeline-card">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">{item.title}</div>
                    <time className="font-medium text-sky-400 text-xs">{item.period}</time>
                  </div>
                  <div className="text-slate-500 text-sm mb-4">{item.organization}</div>
                  {Array.isArray(item.description) && item.description.length > 1 ? (
                    <ul className="text-slate-400 text-xs leading-relaxed list-disc list-inside space-y-1">
                      {item.description.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-xs leading-relaxed">{item.description?.[0]}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
