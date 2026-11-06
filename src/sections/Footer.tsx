import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { footer, contact } = portfolioData;

  return (
    <footer className="relative z-10 w-full border-t border-outline-variant bg-surface-container-low/40 backdrop-blur-md mt-16">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-on-surface-variant">
              {footer.location}
            </span>
          </div>
          <p className="text-xs text-on-surface-variant/70">{footer.copyright}</p>
        </div>

        <div className="flex items-center gap-5 text-xs font-mono">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#home"
          >
            Beranda
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#about"
          >
            Keahlian &amp; Profil
          </a>
          {contact.socials.slice(0, 2).map((social) => (
            <a
              key={social.label}
              className="text-on-surface-variant hover:text-primary transition-colors"
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#contact"
          >
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}
