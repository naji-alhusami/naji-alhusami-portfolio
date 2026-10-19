import Image from "next/image";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { cvFiles, site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeroProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Hero({ dictionary, locale }: HeroProps) {
  const { hero } = dictionary;
  const cv = cvFiles[locale];

  return (
    <section id="top" className="hero-section overflow-hidden">
      <div className="section-shell grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)] lg:py-24">
        <div className="hero-copy relative z-10">
          <div className="hero-location">
            <span aria-hidden="true" className="status-dot" />
            {hero.location}
          </div>
          <p className="section-eyebrow mt-7">{hero.eyebrow}</p>
          <h1 className="hero-title mt-4">{hero.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {hero.introduction}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">
              {hero.viewProjects}
              <span aria-hidden="true" className="directional-arrow">
                →
              </span>
            </a>
            {cv.available ? (
              <a href={cv.path} download className="button button-secondary">
                {hero.downloadCv}
                <span aria-hidden="true">↓</span>
              </a>
            ) : (
              <span
                className="button button-secondary button-disabled"
                aria-disabled="true"
                title={hero.cvPending}
              >
                {hero.downloadCv}
                <span aria-hidden="true">↓</span>
              </span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <ExternalLink
              href={site.linkedIn}
              opensNewTabLabel={dictionary.accessibility.opensNewTab}
              className="social-link"
            >
              <span className="social-mark" aria-hidden="true">
                in
              </span>
              LinkedIn
            </ExternalLink>
            <ExternalLink
              href={site.github}
              opensNewTabLabel={dictionary.accessibility.opensNewTab}
              className="social-link"
            >
              <span className="social-mark social-mark-wide" aria-hidden="true">
                GH
              </span>
              GitHub
            </ExternalLink>
          </div>
        </div>

        <div className="portrait-stage mx-auto w-full max-w-md lg:max-w-none">
          <div className="portrait-accent portrait-accent-one" aria-hidden="true" />
          <div className="portrait-accent portrait-accent-two" aria-hidden="true" />
          <div className="portrait-frame">
            {site.portraitImage ? (
              <Image
                src={site.portraitImage}
                alt={hero.portraitAlt}
                fill
                priority
                sizes="(max-width: 1024px) 448px, 38vw"
                className="object-cover"
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-initials" aria-hidden="true">
                  NA
                </span>
                <strong>{hero.portraitPending}</strong>
                <span>{hero.portraitHint}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
