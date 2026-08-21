import { Linkedin, Mail, Github } from 'lucide-react';
import siddImage from '@assets/imgs/sidd.png';

export default function About({ profile }) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative about-image-container" data-aos="fade-right">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-sky-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-[1.4rem] bg-dark-card overflow-hidden relative group">
                <img src={siddImage} alt={profile?.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-400/20 blur-3xl -z-10" />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">About My Journey</h2>
            {(profile?.about || []).map((p, i) => (
              <p key={i} className="text-slate-400 text-lg mb-6 leading-relaxed">{p}</p>
            ))}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {(profile?.stats || []).map((s) => (
                <div key={s.label} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                  <h4 className="text-sky-400 text-2xl font-bold mb-1">{s.value}</h4>
                  <p className="text-slate-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4">
                <a href={profile?.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-slate-300"><Linkedin className="w-5 h-5" /></a>
                <a href={`mailto:${profile?.email}`} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-slate-300"><Mail className="w-5 h-5" /></a>
                <a href={profile?.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-slate-300"><Github className="w-5 h-5" /></a>
              </div>
              <div className="h-8 w-px bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">BrainAI Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
