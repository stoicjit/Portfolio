export type Experience = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  accomplishments: string[];
  techTags: string[];
};

export const experienceContent = {
  entries: [
    {
      role: "TODO: Add role title",
      company: "TODO: Add company or team",
      location: "TODO: Add location or remote status",
      startDate: "TODO: YYYY-MM",
      endDate: "TODO: YYYY-MM or Present",
      description: "TODO: Briefly describe the company or team.",
      accomplishments: [
        "TODO: Describe a measurable accomplishment.",
        "TODO: Describe another accomplishment.",
        "TODO: Describe a third accomplishment.",
      ],
      techTags: ["TODO: Add technology", "TODO: Add technology"],
    },
  ],
} satisfies { entries: Experience[] };
