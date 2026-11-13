export type PathEntry = { year: string; title: string; description: string };

export const pathContent = {
  entries: [
    {
      year: "TODO: YYYY",
      title: "TODO: Add a milestone, education, or project title",
      description: "TODO: Add one concise line about this milestone.",
    },
  ],
} satisfies { entries: PathEntry[] };
