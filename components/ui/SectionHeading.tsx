interface SectionHeadingProps {
  eyebrow: string;
  intro?: string;
  title: string;
}

export function SectionHeading({ eyebrow, intro, title }: SectionHeadingProps) {
  return (
    <div className="section-heading max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
