"use client";

import { useEffect, useRef, useState } from "react";

export interface NavigationLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  closeLabel: string;
  links: NavigationLink[];
  navigationLabel: string;
  openLabel: string;
}

export function MobileMenu({
  closeLabel,
  links,
  navigationLabel,
  openLabel,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="mobile-navigation relative">
      <button
        type="button"
        className="control-button size-10 flex-col gap-0.5"
        aria-label={isOpen ? closeLabel : openLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="hamburger-line" aria-hidden="true" />
        <span className="hamburger-line" aria-hidden="true" />
        <span className="hamburger-line" aria-hidden="true" />
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation-panel"
          aria-label={navigationLabel}
          className="floating-panel absolute top-[calc(100%+0.75rem)] end-0 w-[calc(100vw-2rem)] max-w-[23rem] rounded-[1.4rem] p-2.5"
        >
          <ul className="m-0 grid list-none gap-1 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="floating-link px-4 py-3.5"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="menu-arrow text-primary">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
