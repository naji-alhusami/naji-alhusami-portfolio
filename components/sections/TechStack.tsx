import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import type { Dictionary } from "@/i18n/dictionaries";

export function TechStack({ dictionary }: { dictionary: Dictionary }) {
  const content = dictionary.techStack;

  return (
    <section id="tech-stack" className="section-block">
      <div className="section-shell">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.id} className="skill-group">
              <h3 className="text-lg font-bold">{content.groups[group.id]}</h3>
              <ul className="mt-5 flex list-none flex-wrap gap-2.5 p-0">
                {group.skills.map((skill) => (
                  <li
                    key={skill.label}
                    className={`tech-chip${"core" in skill && skill.core ? " tech-chip-core" : ""}`}
                  >
                    <span className="tech-mark" aria-hidden="true">
                      {skill.mark}
                    </span>
                    {skill.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
