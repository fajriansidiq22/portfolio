import { GraduationCap, BadgeCheck, BookOpen } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="relative w-full py-24" id="education">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <SectionLabel number="03" text="Pendidikan &amp; Sertifkat" />
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
            Pendidikan &amp; Sertifikat
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 max-w-lg mx-auto">
            Riwayat pendidikan formal, sertifikasi keahlian, dan kompetensi yang telah ditempuh.
          </p>
        </div>

        {/* 2 Equal / Balanced Columns: Formal Education (Left) & Professional Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Main Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-outline-variant">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-base font-bold text-on-surface font-mono">
                Pendidikan
              </h3>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-low/70 backdrop-blur-md flex flex-col justify-between border border-outline-variant gap-5 shadow-sm">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20">
                    {education.degree}
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">
                    {education.dateRange}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-on-surface leading-snug">
                  {education.program}
                </h4>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Detail list / pills */}
              <div className="grid grid-cols-1 gap-2.5 pt-3 border-t border-outline-variant">
                {education.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="p-3 rounded-xl bg-surface-container/70 border border-outline-variant flex items-center justify-between gap-2"
                  >
                    <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                      {detail.label}
                    </span>
                    <span className="text-xs text-on-surface font-semibold text-right">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Certifications & Training List */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen size={18} />
                </div>
                <h3 className="text-base font-bold text-on-surface font-mono">
                  pelatihan &amp; Certifications
                </h3>
              </div>
            </div>

            {/* List of Certifications */}
            <div className="flex flex-col gap-3.5">
              {portfolioData.certifications && portfolioData.certifications.length > 0 ? (
                portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/70 backdrop-blur-md flex flex-col gap-2.5 border border-outline-variant hover:border-primary/40 transition-all shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <BadgeCheck size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-on-surface leading-snug">
                          {cert.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs font-mono text-primary font-medium">
                            {cert.issuer}
                          </span>
                          {cert.date && (
                            <>
                              <span className="text-xs text-on-surface-variant">•</span>
                              <span className="text-xs font-mono text-on-surface-variant">
                                {cert.date}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed sm:pl-11">
                      {cert.description}
                    </p>
                  </div>
                ))
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
