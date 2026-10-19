export const experience = [
  {
    id: "witte",
    company: "WITTE Automotive GmbH",
    period: "Nov 2024 – Dec 2025",
  },
  {
    id: "undp",
    company: "UNDP — SDG AI Lab",
    period: "Oct 2021 – Jan 2022",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];
