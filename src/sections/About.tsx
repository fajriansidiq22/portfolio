import { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import { portfolioData } from '../data/portfolio';
import {
  Code2,
  Server,
  Database,
  Palette,
  User,
  MapPin,
  CheckCircle2,
  Quote,
} from 'lucide-react';

export default function About() {
  const { about, personal, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', ...skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'Semua'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('frontend')) {
      return <Code2 size={18} className="text-primary" />;
    }
    if (category.toLowerCase().includes('backend')) {
      return <Server size={18} className="text-primary" />;
    }
    if (category.toLowerCase().includes('database')) {
      return <Database size={18} className="text-primary" />;
    }
    return <Palette size={18} className="text-primary" />;
  };

  return (
    <section className="relative w-full py-24" id="about">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <SectionLabel number="02" text="Keahlian &amp; Profil" />
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
            {about.headline}
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 max-w-xl mx-auto">
            Ringkasan latar belakang profesional dan keahlian teknologi teknis yang dikuasai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio Profile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Bio Profile Card */}
            <div className="rounded-2xl bg-surface-container-low/70 backdrop-blur-md p-6 sm:p-7 border border-outline-variant flex flex-col gap-5">
              <div className="flex items-center gap-3 pb-4 border-b border-outline-variant">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <User size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">{personal.displayName}</h3>
                  <p className="text-xs font-mono text-primary font-medium">{personal.role}</p>
                </div>
              </div>

              {/* Bio Quote with Quote icon */}
              <blockquote className="relative p-4 rounded-xl bg-surface-container/60 border border-outline-variant text-xs text-on-surface-variant leading-relaxed italic flex gap-3 items-start">
                <Quote size={18} className="text-primary flex-shrink-0 mt-0.5 opacity-80" />
                <p className="flex-1">{about.bioQuote.replace(/^["“”]|["“”]$/g, '')}</p>
              </blockquote>

              {/* Bio Text - Justified */}
              <div className="flex flex-col gap-3 text-sm text-on-surface-variant leading-relaxed text-justify">
                <p>{about.paragraph1}</p>
                <p>{about.paragraph2}</p>
              </div>

              {/* Quick Info Grid - Hanya Status dan Lokasi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-outline-variant">
                <div className="flex items-center gap-2.5 text-xs text-on-surface-variant">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <div>
                    <span className="block font-mono text-[10px] text-on-surface-variant/70 uppercase">Status</span>
                    <span className="text-on-surface font-medium">{about.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-on-surface-variant">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <div>
                    <span className="block font-mono text-[10px] text-on-surface-variant/70 uppercase">Lokasi</span>
                    <span className="text-on-surface font-medium">{about.infoCards[0]?.value || 'Kalimantan Timur, Indonesia'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Skill Teknis */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface-container-low/70 border border-outline-variant">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-on-primary font-medium shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Categorized Skills Cards */}
            <div className="flex flex-col gap-4">
              {filteredSkills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl bg-surface-container-low/70 backdrop-blur-md p-5 border border-outline-variant flex flex-col gap-3.5 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                        {getCategoryIcon(group.category)}
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface font-mono">
                        {group.category}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-on-surface-variant">
                      {group.skills.length} Keahlian
                    </span>
                  </div>

                  {/* Skill Items Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container/70 border border-outline-variant text-xs text-on-surface hover:border-primary/40 hover:text-primary transition-all group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
