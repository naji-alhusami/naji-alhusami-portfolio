import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import type { Dictionary } from "@/i18n/dictionaries";

export function Education({ dictionary }: { dictionary: Dictionary }) {
  const content = dictionary.education;

  return (
    <section id="education" className="section-block section-muted">
      <div className="section-shell">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {education.map((item, index) => {
            const translated = content.items[item.id];
            const detail = "detail" in translated ? translated.detail : undefined;
            return (
              <article key={item.id} className="education-card">
                <span className="education-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <p className="period-label mt-8">{item.period}</p>
                <h3 className="mt-4 text-xl font-bold leading-snug">
                  {translated.degree}
                </h3>
                <p className="mt-3 font-semibold text-primary">{item.institution}</p>
                <p className="mt-1 text-sm text-muted">{translated.location}</p>
                {detail ? <p className="education-detail">{detail}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
