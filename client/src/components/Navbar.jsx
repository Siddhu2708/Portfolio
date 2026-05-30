import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Hire Me', highlight: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          const max = document.documentElement.scrollHeight - window.innerHeight;
          setProgress(max > 0 ? (y / max) * 100 : 0);
          setScrolled(y > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 glass-nav border-b transition-[background,border-color,box-shadow] duration-300 ${
          scrolled ? 'border-slate-800/60 shadow-lg shadow-black/20' : 'border-transparent'
        }`}
      >
        <div
          id="scroll-progress"
          className="absolute bottom-0 left-0 h-[2px] bg-sky-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
        <div className="h-14 sm:h-16 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent shrink-0"
          >
            SG.
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link hover:text-sky-400 transition-colors whitespace-nowrap ${
                  l.highlight
                    ? 'text-sky-400 border border-sky-400/30 px-3 lg:px-4 py-1.5 rounded-full hover:bg-sky-400/10'
                    : 'text-slate-300'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-200 hover:bg-slate-800/80 transition-colors shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu — below fixed header, full screen */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-[#0F172A]/98 backdrop-blur-md flex flex-col pt-[3.5rem] sm:pt-16 transition-opacity duration-300 ${
          menuOpen ? 'active opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex-1 flex flex-col items-center justify-center gap-5 sm:gap-6 px-6 pb-8 overflow-y-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className={`mobile-nav-link text-lg sm:text-xl font-semibold transition-all ${
                l.highlight
                  ? 'text-sky-400 border-2 border-sky-400/30 px-6 py-2.5 rounded-2xl'
                  : 'text-slate-300 hover:text-sky-400'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
