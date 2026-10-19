import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MobileMenu, type NavigationLink } from "@/components/ui/MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface NavbarProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Navbar({ dictionary, locale }: NavbarProps) {
  const { controls, navigation } = dictionary;
  const links: NavigationLink[] = [
    { href: "#about", label: navigation.about },
    { href: "#experience", label: navigation.experience },
    { href: "#tech-stack", label: navigation.techStack },
    { href: "#projects", label: navigation.projects },
    { href: "#contact", label: navigation.contact },
  ];

  return (
    <header className="site-header">
      <nav
        aria-label={navigation.label}
        className="relative mx-auto flex h-[4.5rem] w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="me-auto shrink-0 text-[0.98rem] font-extrabold tracking-[-0.02em] text-foreground sm:text-base"
        >
          Naji Alhusami
        </a>

        <ul className="desktop-navigation mx-auto flex list-none items-center gap-6 p-0 lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher
            currentLocale={locale}
            label={controls.language}
            menuLabel={controls.languageMenu}
          />
          <ThemeToggle label={controls.theme} />
          <MobileMenu
            closeLabel={controls.closeMenu}
            links={links}
            navigationLabel={navigation.label}
            openLabel={controls.openMenu}
          />
        </div>
      </nav>
    </header>
  );
}
