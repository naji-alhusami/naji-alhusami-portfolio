export interface Skill {
  label: string;
  mark: string;
  core?: boolean;
}

export const skillGroups = [
  {
    id: "frontend",
    skills: [
      { label: "HTML5", mark: "H5" },
      { label: "CSS3", mark: "C3" },
      { label: "JavaScript", mark: "JS" },
      { label: "TypeScript", mark: "TS", core: true },
      { label: "React", mark: "Re", core: true },
      { label: "Next.js", mark: "Nx", core: true },
      { label: "Tailwind CSS", mark: "Tw", core: true },
      { label: "Redux", mark: "Rx" },
      { label: "Angular", mark: "Ng" },
      { label: "React Native", mark: "RN" },
    ],
  },
  {
    id: "backend",
    skills: [
      { label: "Node.js", mark: "No", core: true },
      { label: "Express.js", mark: "Ex", core: true },
      { label: "REST APIs", mark: "API" },
      { label: "GraphQL", mark: "GQ" },
    ],
  },
  {
    id: "databases",
    skills: [
      { label: "PostgreSQL", mark: "PG" },
      { label: "MongoDB", mark: "Mo" },
      { label: "Firebase", mark: "Fb" },
      { label: "SQL", mark: "SQL" },
    ],
  },
  {
    id: "tools",
    skills: [
      { label: "Cypress", mark: "Cy" },
      { label: "Git", mark: "Git" },
      { label: "Retool", mark: "Rt" },
      { label: "Gatsby", mark: "Ga" },
    ],
  },
] as const satisfies ReadonlyArray<{
  id: "frontend" | "backend" | "databases" | "tools";
  skills: ReadonlyArray<Skill>;
}>;

export type SkillGroupId = (typeof skillGroups)[number]["id"];
