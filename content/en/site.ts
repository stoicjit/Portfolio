export const siteContent = {
  name: "SIMRANJIT KLAIR",
  role: "Junior full-stack developer",
  introduction: "I'm a passionate junior full-stack developer with a strong foundation in both frontend and backend technologies.",
  status: "Fullstack developer at BCITI | ATNA",
  actions: { contact: "Get in touch", selectedWork: "See selected work" },
  navigation: [
    { label: "Selected work", href: "#selected-work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "Download CV", href: "/cv.pdf", download: true },
  ],
  skipToContent: "Skip to content",
  navigationLabel: "Main navigation",
  menuLabels: { open: "Open menu", close: "Close menu" },
  portrait: { alt: "SIMRANJIT KLAIR", placeholder: "SIMRANJIT KLAIR" },
  sections: [
    { id: "selected-work", title: "Selected work", description: "Here are some of the projects I've worked on." },
    { id: "about", title: "About", description: "A bit about my background and interests." },
    { id: "experience", title: "Experience", description: "My professional journey and key accomplishments." },
    { id: "contact", title: "Contact", description: "Feel free to reach out if you'd like to collaborate!" },
  ],
  footer: "© 2023 SIMRANJIT KLAIR. All rights reserved.",
  metadata: {
    title: "SIMRANJIT KLAIR | Portfolio",
    description: "A showcase of my work as a junior full-stack developer.",
  },
} as const;
