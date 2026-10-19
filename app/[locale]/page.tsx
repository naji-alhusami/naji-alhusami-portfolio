import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);

  return (
    <>
      <Navbar dictionary={dictionary} locale={locale} />
      <main id="main-content">
        <Hero dictionary={dictionary} locale={locale} />
        <About dictionary={dictionary} />
        <Experience dictionary={dictionary} />
        <Education dictionary={dictionary} />
        <TechStack dictionary={dictionary} />
        <Projects dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
