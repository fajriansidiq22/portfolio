import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { nav, personal } = portfolioData;
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if page is scrolled away from top
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, reveal when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up or near top
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-xl border-b border-outline-variant shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="h-16 max-w-[1200px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a className="flex items-center gap-2.5 group" href="#home">
          <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:border-primary/40">
            <span className="text-primary font-bold text-xs font-mono uppercase">fs</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
            {personal.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-low/70 backdrop-blur-md border border-outline-variant">
          {nav.map((link, i) => (
            <a
              key={link.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                i === 0
                  ? 'text-primary bg-surface-container font-medium'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right buttons: Theme Toggle + Contact CTA */}
        <div className="flex items-center gap-2.5">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="w-9 h-9 rounded-full bg-surface-container-low/80 hover:bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200"
          >
            {theme === 'dark' ? (
              <Sun size={17} className="transition-transform hover:rotate-45" />
            ) : (
              <Moon size={17} className="transition-transform hover:-rotate-12" />
            )}
          </button>

          <a
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-mono font-medium hover:opacity-90 transition-all shadow-sm shadow-primary/20"
            href="./cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Muhammad-Fajrian-Sidiq.pdf"
          >
            <Download size={13} />
            <span>Unduh CV</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-9 h-9 rounded-full bg-surface-container-low/80 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav className="lg:hidden bg-surface/95 backdrop-blur-2xl border-b border-outline-variant px-4 pb-4 pt-2 flex flex-col gap-1.5 shadow-lg">
          {nav.map((link) => (
            <a
              key={link.href}
              className="px-4 py-2.5 rounded-xl text-xs font-mono text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-mono font-medium hover:opacity-90 transition-all shadow-sm"
            href="./cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Muhammad-Fajrian-Sidiq.pdf"
            onClick={() => setMobileOpen(false)}
          >
            <Download size={14} />
            <span>Unduh CV</span>
          </a>
        </nav>
      )}
    </header>
  );
}
