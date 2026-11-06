import SectionLabel from '../components/SectionLabel';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const visibleProjects = portfolioData.projects.filter((p) => !p.hidden);

  return (
    <section className="relative w-full py-24" id="projects">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section header - centered like reference */}
        <div className="text-center mb-16">
          <SectionLabel number="05" text="Portofolio Proyek" />
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
            Proyek Pilihan
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 max-w-lg mx-auto">
            Kumpulan karya pilihan &amp; prototipe dari berbagai bidang.
          </p>
        </div>

        {/* Project grid - proporsional 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
