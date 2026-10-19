import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = Object.fromEntries(
    [
      ...locales.map((locale) => [
        locale,
        new URL(`/${locale}`, siteUrl).toString(),
      ]),
      ["x-default", new URL("/en", siteUrl).toString()],
    ],
  );

  return locales.map((locale) => ({
    url: new URL(`/${locale}`, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: alternates,
    },
  }));
}
