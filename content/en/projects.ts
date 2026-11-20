export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: { src: string | null; alt: string; placeholder: string };
  demoVideoUrl: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  caseStudy: {
    tagline?: string;
    timeline?: string;
    problem: string | string[];
    role: string;
    stack: string[];
    architecture: string | string[];
    challenges: string | string[];
    learnings: string | string[];
  };
};

export type ProjectContent = {
  linkLabels: { live: string; github: string };
  tagsLabel: string;
  caseStudyLabels: {
    read: string;
    showDetails: string;
    hideDetails: string;
    problem: string;
    role: string;
    stack: string;
    architecture: string;
    challenges: string;
    learnings: string;
    media: string;
    watchDemo: string;
    backToProjects: string;
  };
  projects: Project[];
};

export const projectContent: ProjectContent = {
  linkLabels: { live: "Live project", github: "GitHub repository" },
  tagsLabel: "Technologies and capabilities",
  caseStudyLabels: {
    read: "Read case study",
    showDetails: "Show project details",
    hideDetails: "Hide project details",
    problem: "Problem",
    role: "My role",
    stack: "Key stack",
    architecture: "How it works",
    challenges: "Challenge and solution",
    learnings: "What I learned and would improve",
    media: "Screenshots and demo",
    watchDemo: "Watch demo video",
    backToProjects: "Back to selected work",
  },
  projects: [
    
    
    {
      slug: "trading-bot-analyser",
      title: "Trading bot analyser",
      description: "TODO: Describe the engineering problem this analyser addresses.",
      tags: ["TODO: Add technology", "TODO: Add capability"],
      image: { src: null, alt: "TODO: Describe a project screenshot", placeholder: "TODO: Add project image" },
      demoVideoUrl: null,
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
        "Users register their face, an admin decides who can open which lock, and a Raspberry Pi 5 drives the servo lock. Course final project, built as a team.",
      tags: ["Python", "DeepFace", "Raspberry Pi 5", "MQTT", "Express.js", "Supabase"],
      image: {
        src: null,
        alt: "TODO: Describe a project screenshot",
        placeholder: "TODO: Add project image",
      },
      liveUrl: null,
      githubUrl: "https://github.com/ap99-coder/IOT-SmartLock",
      demoVideoUrl: null, // TODO: add the video link
      caseStudy: {
        tagline:
          "A prototype smart lock that only unlocks for registered faces that an admin has approved.",
        timeline: "TODO: e.g. one semester, course final project",
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
        problem: [
          "PINs and keys can be shared, lost or guessed. The goal of this course project was a working prototype of a smart lock where access is tied to a person's face, and an admin controls who can open which lock.",
          "It had to cover the whole chain, from a camera reading a face to a motor moving a lock, so we treated it as a complete system and not a single script.",
        ],
        architecture: [
          "Registration: the user is guided through five photos (straight, left, right, up and down). Each photo is turned into a face embedding by DeepFace (FaceNet512) and stored in the database.",
          "Recognition: when someone tries to unlock, the backend runs a Python script. It captures a photo, computes its embedding and compares it with the stored ones using cosine distance. A distance of 0.30 or less counts as a match, and the script returns the result to the backend as JSON.",
          "Lock control: if the person is recognised and allowed on that lock, the backend publishes a command on an MQTT topic. The Raspberry Pi subscribes to it, ignores messages meant for other devices, moves the servo and switches the green or red LED. Pin assignments live in a config file.",
        ],
        challenges: [
          "Recognition was the hardest part. A single photo failed too often when the angle of the face changed, so I changed registration to capture five guided angles per user. A live scan is then compared against several views of the same face.",
          "The recognition runs in Python and the backend in Node.js. The backend calls the script as a separate process and reads a JSON result (match, no match or error), which kept the two parts independent and easy to test on their own.",
          "For the lock itself, commands travel over MQTT with delivery confirmation, and the Pi releases each servo after it moves so the motor does not keep drawing power or jittering.",
        ],
        learnings: [
          "It is a prototype and I did not measure its accuracy, so I can't claim a recognition rate. With more time I would build a small test set, measure false accepts and false rejects, and set the threshold from that data.",
          "The biggest gaps are liveness detection (a photo could fool it) and the camera opening on the backend machine, when it should be captured on the user's device and sent to the API. I would also separate the frontend, API and recognition service more cleanly.",
          "The main thing I took away is how much of a smart system is the connections between layers: camera, model, API, message broker and hardware.",
        ],
      },
    },
    {
      slug: "wedding-photo-sharing-pwa",
      title: "Wedding photo-sharing PWA",
      description: "TODO: Describe the problem this photo-sharing app solves.",
      tags: ["TODO: Add technology", "TODO: Add capability"],
      image: { src: null, alt: "TODO: Describe a project screenshot", placeholder: "TODO: Add project image" },
      demoVideoUrl: null,
      liveUrl: null,
      githubUrl: null,
      caseStudy: {
        problem: "TODO: Describe the problem.", role: "TODO: Describe your role.",
        stack: ["TODO: Add technologies"], architecture: "TODO: Explain how the app works.",
        challenges: "TODO: Describe a challenge and its solution.", learnings: "TODO: Describe what you learned or would improve.",
      },
    },
  ],
};
