import { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Palette,
  type LucideIcon,
  ExternalLink,
  Code,
} from 'lucide-react';
import type { Project } from '../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  ShoppingBag,
  Palette,
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon] || LayoutDashboard;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl bg-surface-container-low/70 backdrop-blur-md overflow-hidden border border-outline-variant flex flex-col justify-between group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
      <div>
        {/* Thumbnail area */}
        <div className="relative h-48 overflow-hidden bg-surface-container/60 flex items-center justify-center border-b border-outline-variant">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-on-surface-variant/60 group-hover:text-primary transition-colors duration-300">
              <Icon size={42} strokeWidth={1.2} />
              <span className="font-mono text-[10px] tracking-wider">{project.thumbnailLabel}</span>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant font-mono text-[10px] text-primary flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-2.5">
          <span className="font-mono text-[10px] text-primary uppercase tracking-wider font-medium">
            {project.field}
          </span>
          <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-surface-container/80 border border-outline-variant text-on-surface text-[10px] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-outline-variant">
        <a
          className="font-mono text-[11px] text-primary hover:underline transition-colors flex items-center gap-1 font-medium"
          href={project.liveUrl}
        >
          Lihat Demo <ExternalLink size={12} />
        </a>
        <a
          className="font-mono text-[11px] text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1"
          href={project.sourceUrl}
        >
          Kode Sumber <Code size={12} />
        </a>
      </div>
    </div>
  );
}
