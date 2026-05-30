import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ profile }) {
  const typeRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typeRef.current || !profile?.typewriterStrings?.length) return;
    typedRef.current = new Typed(typeRef.current, {
      strings: profile.typewriterStrings,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
    });
    return () => typedRef.current?.destroy();
  }, [profile]);

  const firstName = profile?.name?.split(' ')[0] || 'Siddharth';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[4.5rem] sm:pt-20 pb-10 relative px-4 sm:px-6">
      <motion.div className="max-w-4xl w-full text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
          {profile?.availability}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-6 text-white leading-tight font-heading">
          Hi, I&apos;m <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">{firstName}</span>
        </h1>
        <div className="text-base sm:text-xl md:text-3xl text-slate-400 mb-4 sm:mb-8 h-8 sm:h-12">
          I build <span ref={typeRef} className="text-sky-400 font-medium" />
        </div>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">{profile?.tagline}</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a href="#projects" className="px-5 py-2.5 sm:px-8 sm:py-3.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-sm sm:text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2">
            View My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          {profile?.resumeUrl && (
            <a href={profile.resumeUrl} download="Siddharth_Gaykhe_Resume.pdf" className="px-5 py-2.5 sm:px-8 sm:py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm sm:text-base font-semibold transition-all border border-slate-700 flex items-center gap-2">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" /> Download CV
            </a>
          )}
        </div>
      </motion.div>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden sm:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
