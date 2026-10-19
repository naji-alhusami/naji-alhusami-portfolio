import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries";

export function Projects({ dictionary }: { dictionary: Dictionary }) {
  const content = dictionary.projects;

  return (
    <section id="projects" className="section-block section-muted">
      <div className="section-shell">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
        />

        <ProjectGrid
          projects={projects}
          items={content.items}
          screenshotPending={content.screenshotPending}
          githubLabel={content.github}
          liveDemoLabel={content.liveDemo}
          showMoreLabel={content.showMore}
          opensNewTabLabel={dictionary.accessibility.opensNewTab}
        />
      </div>
    </section>
  );
}
