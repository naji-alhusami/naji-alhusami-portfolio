import Image from "next/image";

import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  description: string;
  githubLabel: string;
  liveDemoLabel: string;
  opensNewTabLabel: string;
  project: Project;
  screenshotPending: string;
  title: string;
}

export function ProjectCard({
  description,
  githubLabel,
  liveDemoLabel,
  opensNewTabLabel,
  project,
  screenshotPending,
  title,
}: ProjectCardProps) {
  return (
    <article className="project-card group">
      <div className="project-preview">
        {project.image ? (
          <Image
            src={project.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="project-placeholder">
            <div className="preview-window" aria-hidden="true">
              <div className="preview-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-content">
                <span />
                <span />
                <span />
              </div>
            </div>
            <span>{screenshotPending}</span>
          </div>
        )}
        <div className="project-overlay" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-bold tracking-[-0.03em]">{title}</h3>
        <p className="mt-4 leading-7 text-muted">{description}</p>
        <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
          {project.technologies.map((technology) => (
            <li key={technology} className="technology-badge">
              {technology}
            </li>
          ))}
        </ul>

        {project.githubUrl || project.liveUrl ? (
          <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-5">
            {project.githubUrl ? (
              <ExternalLink
                href={project.githubUrl}
                opensNewTabLabel={opensNewTabLabel}
                className="project-action"
              >
                {githubLabel}
              </ExternalLink>
            ) : null}
            {project.liveUrl ? (
              <ExternalLink
                href={project.liveUrl}
                opensNewTabLabel={opensNewTabLabel}
                className="project-action"
              >
                {liveDemoLabel}
              </ExternalLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
