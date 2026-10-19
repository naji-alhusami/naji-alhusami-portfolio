import type { Locale } from "@/i18n/config";

export const site = {
  name: "Naji Alhusami",
  email: "naji.alhusami@gmail.com",
  linkedIn: "https://linkedin.com/in/naji-alhusami",
  github: "https://github.com/naji-alhusami",
  portraitImage: "/personal-image.jpg",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const cvFiles: Record<Locale, { path: string; available: boolean }> = {
  en: { path: "/cv/Naji_Alhusami_CV_EN.pdf", available: false },
  de: { path: "/cv/Naji_Alhusami_CV_DE.pdf", available: false },
  ar: { path: "/cv/Naji_Alhusami_CV_EN.pdf", available: false },
};
