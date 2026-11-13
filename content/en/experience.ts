export type ExperiencePoint = {
  heading: string;
  description: string;
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  points: ExperiencePoint[];
  techTags: string[];
};

export const experienceContent = {
  technologiesLabel: "Technologies",
  entries: [
    {
      company: "TODO: Add company name",
      role: "TODO: Add role title",
      startDate: "TODO: Add start date",
      endDate: "TODO: Add end date or Present",
      description: "TODO: Add a one-line description of the role or team.",
      points: [
        {
          heading: "TODO: Add a short accomplishment heading",
          description: "TODO: Describe the problem, what you did, and the relevant technology.",
        },
        {
          heading: "TODO: Add another short heading",
          description: "TODO: Describe another contribution in one or two sentences.",
        },
      ],
      techTags: ["TODO: Add technology", "TODO: Add technology"],
    },
  ],
} satisfies { technologiesLabel: string; entries: Experience[] };
