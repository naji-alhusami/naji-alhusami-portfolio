export const locales = ["en", "de", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDetails: Record<
  Locale,
  { direction: "ltr" | "rtl"; label: string; shortLabel: string }
> = {
  en: { direction: "ltr", label: "English", shortLabel: "EN" },
  de: { direction: "ltr", label: "Deutsch", shortLabel: "DE" },
  ar: { direction: "rtl", label: "العربية", shortLabel: "AR" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
