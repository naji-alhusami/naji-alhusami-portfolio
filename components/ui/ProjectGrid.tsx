"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectCopy {
  title: string;
  description: string;
}

interface ProjectGridProps {
  githubLabel: string;
  items: Record<Project["id"], ProjectCopy>;
  liveDemoLabel: string;
  opensNewTabLabel: string;
  projects: readonly Project[];
  screenshotPending: string;
  showMoreLabel: string;
}

const initialProjectCount = 3;

export function ProjectGrid({
  githubLabel,
  items,
  liveDemoLabel,
  opensNewTabLabel,
  projects,
  screenshotPending,
  showMoreLabel,
}: ProjectGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, initialProjectCount);

  return (
    <>
      <div className="mt-12 grid gap-7 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const translated = items[project.id];
          return (
            <ProjectCard
              key={project.id}
              project={project}
              title={translated.title}
              description={translated.description}
              screenshotPending={screenshotPending}
              githubLabel={githubLabel}
              liveDemoLabel={liveDemoLabel}
              opensNewTabLabel={opensNewTabLabel}
            />
          );
        })}
      </div>

      {projects.length > initialProjectCount && !isExpanded ? (
        <div className="mt-9 text-center">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setIsExpanded(true)}
          >
            {showMoreLabel}
          </button>
        </div>
      ) : null}
    </>
  );
}
