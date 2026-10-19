import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import type { Dictionary } from "@/i18n/dictionaries";

export function Experience({ dictionary }: { dictionary: Dictionary }) {
  const content = dictionary.experience;

  return (
    <section id="experience" className="section-block">
      <div className="section-shell">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
        />

        <div className="timeline mt-14">
          {experience.map((item) => {
            const translated = content.items[item.id];
            return (
              <article key={item.id} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="experience-grid">
                  <div>
                    <p className="period-label">{item.period}</p>
                    <p className="mt-2 text-sm font-semibold text-muted">
                      {translated.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.025em]">
                      {translated.role}
                    </h3>
                    <p className="mt-1 font-semibold text-primary">{item.company}</p>
                    <ul className="experience-list mt-6">
                      {translated.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
