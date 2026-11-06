import { portfolioData } from '../data/portfolio';
import SectionLabel from '../components/SectionLabel';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="relative w-full py-24" id="experience">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <SectionLabel number="04" text="Riwayat Karir" />
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
            Pengalaman &amp; Kontribusi
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 max-w-lg mx-auto">
            Perjalanan karir, peran profesional, magang, dan kontribusi proyek nyata.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-outline-variant pointer-events-none" />

          <div className="flex flex-col gap-6">
            {experience.map((entry, index) => (
              <div key={index} className="relative pl-14 sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-4 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-low/70 backdrop-blur-md border border-outline-variant hover:border-primary/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-outline-variant">
                    <span className="font-mono text-xs text-primary font-medium">
                      {entry.company}
                    </span>
                    <span className="font-mono text-xs text-on-surface-variant">
                      {entry.dateRange}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-on-surface mb-2">
                    {entry.role}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-3.5">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-surface-container/70 border border-outline-variant text-on-surface text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
