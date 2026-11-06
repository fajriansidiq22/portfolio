import OrbitRings from '../components/OrbitRings';
import TypewriterText from '../components/TypewriterText';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  const typewriterRoles = [
    'Web Developer',
    'UI/UX Designer',
    'Data Analyst',
    'Data Visualization',
  ];

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 lg:py-24" id="home">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/8 dark:bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-10 right-[-5%] w-[520px] h-[520px] bg-primary/6 dark:bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low/80 backdrop-blur-md border border-outline-variant">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] text-on-surface-variant tracking-wider">
                HALO, SAYA{' '}
                <span className="text-primary font-semibold">{personal.greeting}</span>
              </span>
            </div>

            {/* Animated Title & Role - Solid colors, NO GRADIENTS */}
            <div className="flex flex-col gap-2">
              <div className="font-mono text-xs text-primary font-medium uppercase tracking-[0.2em] flex items-center gap-2">
                <span>/</span>
                <TypewriterText words={typewriterRoles} className="text-primary font-semibold" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-on-surface tracking-tight leading-[1.15]">
                {personal.heroTitle} <br />
                <span className="text-primary">
                  {personal.heroTitleAccent}
                </span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
              {personal.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                className="px-7 py-3 rounded-full bg-primary text-on-primary text-sm font-medium hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shadow-sm shadow-primary/20"
                href="#projects"
              >
                Lihat Proyek →
              </a>
              <a
                className="px-6 py-3 rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface text-sm border border-outline-variant hover:border-primary/40 hover:text-primary transition-all duration-200"
                href="#about"
              >
                Keahlian &amp; Profil
              </a>
            </div>
          </div>

          {/* Right column — orbiting profile */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]">
            <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
            <OrbitRings />
          </div>
        </div>
      </div>
    </section>
  );
}
