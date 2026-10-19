"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { localeDetails, locales, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  menuLabel: string;
}

export function LanguageSwitcher({
  currentLocale,
  label,
  menuLabel,
}: LanguageSwitcherProps) {
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
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        className="control-button px-2.5 text-xs tracking-[0.08em]"
        aria-label={label}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        {localeDetails[currentLocale].shortLabel}
        <span aria-hidden="true" className="text-[0.62rem] opacity-60">
          ▾
        </span>
      </button>

      {isOpen ? (
        <div
          className="floating-panel absolute top-[calc(100%+0.65rem)] end-0 min-w-40 rounded-2xl p-2"
          role="menu"
          aria-label={menuLabel}
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}`}
              hrefLang={locale}
              lang={locale}
              dir={localeDetails[locale].direction}
              role="menuitem"
              aria-current={locale === currentLocale ? "page" : undefined}
              className="floating-link px-3 py-2.5 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <span>{localeDetails[locale].label}</span>
              {locale === currentLocale ? (
                <span aria-hidden="true" className="text-primary">
                  •
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
