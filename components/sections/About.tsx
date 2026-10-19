import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dictionary }: { dictionary: Dictionary }) {
  const { about } = dictionary;

  return (
    <section id="about" className="section-block section-muted">
      <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-20">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted">
            <p>{about.body}</p>
            <p>{about.detail}</p>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="fact-card">
              <dt>{about.degreeLabel}</dt>
              <dd>{about.degreeValue}</dd>
            </div>
            <div className="fact-card">
              <dt>{about.baseLabel}</dt>
              <dd>{about.baseValue}</dd>
            </div>
          </dl>
        </div>

        <aside className="language-card" aria-labelledby="spoken-languages-title">
          <div className="code-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h3 id="spoken-languages-title" className="mt-8 text-xl font-bold">
            {about.languagesTitle}
          </h3>
          <dl className="mt-6 grid gap-1">
            {about.languages.map((language) => (
              <div key={language.name} className="language-row">
                <dt>{language.name}</dt>
                <dd>{language.level}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
