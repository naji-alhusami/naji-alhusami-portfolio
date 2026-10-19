export const education = [
  {
    id: "masters",
    institution: "Bahçeşehir University",
    period: "Feb 2020 – Jul 2022",
  },
  {
    id: "bachelors",
    institution: "Eastern Mediterranean University",
    period: "Oct 2011 – Jun 2016",
  },
  {
    id: "bootcamp",
    institution: "Re:Coded",
    period: "Sep 2022 – Feb 2023",
  },
] as const;

export type EducationId = (typeof education)[number]["id"];
