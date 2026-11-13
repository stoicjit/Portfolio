export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: { src: string | null; alt: string; placeholder: string };
  liveUrl: string | null;
  githubUrl: string | null;
  caseStudy: {
    problem: string;
    role: string;
    stack: string[];
    architecture: string;
    challenges: string;
    learnings: string;
  };
};

export const projectContent = {
  linkLabels: { live: "Live project", github: "GitHub repository" },
  tagsLabel: "Technologies and capabilities",
  projects: [
    {
      slug: "wedding-photo-sharing-pwa",
      title: "Wedding photo-sharing PWA",
      description: "TODO: Describe the problem this photo-sharing app solves.",
      tags: ["TODO: Add technology", "TODO: Add capability"],
      image: { src: null, alt: "TODO: Describe a project screenshot", placeholder: "TODO: Add project image" },
      liveUrl: null,
      githubUrl: null,
      caseStudy: {
        problem: "TODO: Describe the problem.", role: "TODO: Describe your role.",
        stack: ["TODO: Add technologies"], architecture: "TODO: Explain how the app works.",
        challenges: "TODO: Describe a challenge and its solution.", learnings: "TODO: Describe what you learned or would improve.",
      },
    },
    {
      slug: "facial-recognition-lock-manager",
      title: "Facial recognition lock manager",
      description: "TODO: Describe the problem this lock manager solves.",
      tags: ["TODO: Add technology", "TODO: Add capability"],
      image: { src: null, alt: "TODO: Describe a project screenshot", placeholder: "TODO: Add project image" },
      liveUrl: null,
      githubUrl: null,
      caseStudy: {
        problem: "TODO: Describe the problem.", role: "TODO: Describe your role.",
        stack: ["TODO: Add technologies"], architecture: "TODO: Explain how the system works.",
        challenges: "TODO: Describe a challenge and its solution.", learnings: "TODO: Describe what you learned or would improve.",
      },
    },
    {
      slug: "trading-bot-analyser",
      title: "Trading bot analyser",
      description: "TODO: Describe the engineering problem this analyser addresses.",
      tags: ["TODO: Add technology", "TODO: Add capability"],
      image: { src: null, alt: "TODO: Describe a project screenshot", placeholder: "TODO: Add project image" },
      liveUrl: null,
      githubUrl: null,
      caseStudy: {
        problem: "TODO: Describe the problem.", role: "TODO: Describe your role.",
        stack: ["TODO: Add technologies"], architecture: "TODO: Explain how the analyser works.",
        challenges: "TODO: Describe a challenge and its solution.", learnings: "TODO: Describe what you learned or would improve.",
      },
    },
  ],
} satisfies { linkLabels: { live: string; github: string }; tagsLabel: string; projects: Project[] };
