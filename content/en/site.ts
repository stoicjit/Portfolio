export const siteContent = {
  name: "TODO: Your name",
  role: "TODO: Junior full-stack developer",
  introduction: "TODO: Write a one-line introduction about the work you do.",
  status: "Open to junior full-stack roles",
  actions: { contact: "Get in touch", selectedWork: "See selected work" },
  navigation: [
    { label: "Selected work", href: "#selected-work" },
    { label: "About", href: "#about" },
    { label: "Path", href: "#path" },
    { label: "Contact", href: "#contact" },
  ],
  skipToContent: "Skip to content",
  navigationLabel: "Main navigation",
  portrait: { alt: "TODO: Describe your portrait", placeholder: "TODO: Add portrait" },
  sections: [
    { id: "selected-work", title: "Selected work", description: "TODO: Add a short introduction to your projects." },
    { id: "about", title: "About", description: "TODO: Add a brief overview about you." },
    { id: "path", title: "Path", description: "TODO: Add a short introduction to your path." },
    { id: "contact", title: "Contact", description: "TODO: Add your preferred contact details." },
  ],
  footer: "TODO: Add a short footer note.",
  metadata: {
    title: "TODO: Your name | Portfolio",
    description: "TODO: Add a concise portfolio description.",
  },
} as const;
