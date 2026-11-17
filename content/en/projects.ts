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
  caseStudyLabels: {
    read: "Read case study",
    close: "Close case study",
    problem: "Problem",
    role: "My role",
    stack: "Key stack",
    architecture: "How it works",
    challenges: "Challenge and solution",
    learnings: "What I learned",
  },
  projects: [
    
    
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
    {
  slug: "facial-recognition-lock-manager",
  title: "Facial recognition lock manager",
  description:
    "A face-recognition access system that decides who can open a lock, with a servo-driven lock controlled by a Raspberry Pi 5.", 
  tags: ["Python", "DeepFace", "Raspberry Pi 5", "MQTT", "Express.js", "Supabase"],
  image: {
    src: null,
    alt: "TODO: Describe a project screenshot",
    placeholder: "TODO: Add project image",
  },
  liveUrl: null,
  githubUrl: "https://github.com/ap99-coder/IOT-SmartLock",
  caseStudy: {
    problem:
      "PINs and keys can be shared, lost or guessed. The goal of this course project was a working prototype of a smart lock where access is tied to a person's face, and an admin controls who can open which lock. It covers the whole chain, from a camera reading a face to a motor moving a lock.",
    role:
      "Team project. I built the face recognition (registration and matching with DeepFace), the physical lock system (Raspberry Pi 5, a servo motor and status LEDs) and the server-to-lock communication over MQTT.",
    stack: [
      "Python",
      "DeepFace (FaceNet512)",
      "OpenCV",
      "Raspberry Pi 5",
      "MQTT",
      "Express.js",
      "Supabase",
    ],
    architecture:
      "Users register by capturing five guided photos of their face (straight, left, right, up, down). Each photo becomes a face embedding that is stored in the database. On an unlock attempt, the backend runs the recognition script, which compares a new photo with the stored embeddings. If the person is recognised and allowed on that lock, the backend sends a command over MQTT. The Raspberry Pi receives it, moves the servo and switches the status LED.",
    challenges:
      "Recognition was the hardest part: a single photo failed too often when the face angle changed. I fixed it by capturing five guided angles per user, so a live scan is compared against several views of the same face.",
    learnings:
      "It is a prototype, and I did not measure its accuracy. The main gaps are liveness detection (a photo could fool it) and the camera opening on the backend machine instead of the user's device. I would separate the frontend, API and recognition service more cleanly and measure false accepts and rejects.",
  },
},
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
  ],
} satisfies {
  linkLabels: { live: string; github: string };
  tagsLabel: string;
  caseStudyLabels: Record<string, string>;
  projects: Project[];
};
