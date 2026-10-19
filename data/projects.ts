export interface Project {
  id: "tennis" | "tastify";
  technologies: readonly string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: readonly Project[] = [
  {
    id: "tennis",
    technologies: [
      "Next.js",
      "NextAuth",
      "Server Actions",
      "MongoDB",
      "FullCalendar API",
    ],
  },
  {
    id: "tastify",
    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Firebase",
      "Tailwind CSS",
    ],
  },
];
