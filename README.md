# Naji Alhusami — Portfolio

A multilingual professional portfolio built with Next.js, React, TypeScript and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

The interface is available at `/en`, `/de` and `/ar`. The root route redirects to English.

## Content

- Localized copy: `messages/en.json`, `messages/de.json`, `messages/ar.json`
- Experience and education: `data/experience.ts`, `data/education.ts`
- Technologies: `data/skills.ts`
- Projects and optional URLs: `data/projects.ts`
- Social, portrait and CV configuration: `data/site.ts`

## Assets to add

```text
public/images/naji-alhusami.jpg
public/cv/Naji_Alhusami_CV_EN.pdf
public/cv/Naji_Alhusami_CV_DE.pdf
public/projects/tennis-club-booking.webp
public/projects/tastify.webp
```

After adding the files, update their paths and availability in the relevant data files.

Set `NEXT_PUBLIC_SITE_URL` to the final production origin before deployment so canonical, Open Graph, robots and sitemap URLs use the live domain.
