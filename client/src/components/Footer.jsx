import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 sm:py-12 border-t border-slate-800 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">SG.</a>
          <p className="text-slate-500 mt-2 text-sm max-w-xs">Building the future of intelligence, one line of code at a time.</p>
        </div>
        <div className="flex gap-6">
          <a href={profile?.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin /></a>
          <a href={`mailto:${profile?.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail /></a>
          <a href={profile?.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github /></a>
        </div>
        <div className="text-slate-500 text-sm font-medium">&copy; {year} {profile?.name || 'Siddharth Gaykhe'}. All rights reserved.</div>
      </div>
    </footer>
  );
}
