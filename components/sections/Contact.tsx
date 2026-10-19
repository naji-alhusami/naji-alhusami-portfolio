import { ExternalLink } from "@/components/ui/ExternalLink";
import { site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  const { contact } = dictionary;
  const newTab = dictionary.accessibility.opensNewTab;

  return (
    <section id="contact" className="section-block contact-section">
      <div className="section-shell">
        <div className="contact-panel">
          <div className="max-w-2xl">
            <p className="section-eyebrow section-eyebrow-light">{contact.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
              {contact.body}
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${site.email}`} className="contact-link">
              <span className="contact-mark" aria-hidden="true">
                @
              </span>
              <span>
                <small>{contact.email}</small>
                {site.email}
              </span>
            </a>
            <ExternalLink
              href={site.linkedIn}
              opensNewTabLabel={newTab}
              className="contact-link"
            >
              <span className="contact-mark" aria-hidden="true">
                in
              </span>
              <span>{contact.linkedIn}</span>
            </ExternalLink>
            <ExternalLink
              href={site.github}
              opensNewTabLabel={newTab}
              className="contact-link"
            >
              <span className="contact-mark" aria-hidden="true">
                GH
              </span>
              <span>{contact.github}</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
