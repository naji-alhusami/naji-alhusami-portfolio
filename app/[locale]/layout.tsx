import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";

import { siteUrl } from "@/data/site";
import { isLocale, localeDetails, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

const themeScript = `
  try {
    var savedTheme = localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  } catch (_) {
    document.documentElement.dataset.theme = "light";
  }
`;

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);
  const title = dictionary.metadata.title;
  const description = dictionary.metadata.description;
  const canonical = new URL(`/${locale}`, siteUrl).toString();
  const languageAlternates = Object.fromEntries(
    [
      ...locales.map((supportedLocale) => [
        supportedLocale,
        new URL(`/${supportedLocale}`, siteUrl).toString(),
      ]),
      ["x-default", new URL("/en", siteUrl).toString()],
    ],
  );

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Naji Alhusami",
      title,
      description,
      locale: locale === "en" ? "en_US" : locale === "de" ? "de_DE" : "ar",
      alternateLocale: ["en_US", "de_DE", "ar"],
      images: [
        {
          url: "/og.png",
          width: 1733,
          height: 909,
          alt: "Naji Alhusami — Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const direction = localeDetails[locale].direction;

  return (
    <html
      lang={locale}
      dir={direction}
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">
          {dictionary.accessibility.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
