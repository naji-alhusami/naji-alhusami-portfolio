import { ExternalLink } from "@/components/ui/ExternalLink";
import { site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  const year = new Date().getFullYear();
  const newTab = dictionary.accessibility.opensNewTab;

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-shell flex flex-col gap-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} <strong className="text-foreground">{site.name}</strong> ·{" "}
          {dictionary.footer.rights}
        </p>
        <div className="flex items-center gap-5">
          <ExternalLink
            href={site.linkedIn}
            opensNewTabLabel={newTab}
            className="footer-link"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            href={site.github}
            opensNewTabLabel={newTab}
            className="footer-link"
          >
            GitHub
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
