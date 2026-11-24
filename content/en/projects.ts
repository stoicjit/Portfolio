export type Project = {
  slug: string;
  title: string;
  status?: string;
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
      slug: "wedding-photo-sharing-pwa",
      title: "Wedding photo-sharing PWA",
      description:
        "A progressive web app for guests to upload and share wedding photos, with offline support.",
      tags: ["TODO: Add frontend technology", "TODO: Add storage technology", "PWA", "Offline support"],
      image: {
        src: null,
        alt: "TODO: Describe a wedding photo-sharing app screenshot",
        placeholder: "TODO: Add project image",
      },
      demoVideoUrl: null,
      liveUrl: null,
      githubUrl: null,
      caseStudy: {
        tagline:
          "A wedding photo-sharing PWA that lets guests contribute photos, including when they are offline.",
        timeline: "TODO: Add project timeline",
        problem: [
          "TODO: Describe how wedding guests shared photos before this app and what problem that created.",
          "The app brings guest photo uploads into one shared experience. TODO: Add any constraints or goals that shaped the project.",
        ],
        role: "TODO: Describe your individual responsibilities and what you built.",
        stack: [
          "TODO: Add frontend framework",
          "TODO: Add backend or API technology",
          "TODO: Add storage technology",
          "Progressive Web App",
          "Offline support",
        ],
        architecture: [
          "Photo uploads: guests can contribute wedding photos through the app. TODO: Explain how uploads are validated and handled.",
          "Storage: uploaded photos are saved for the shared collection. TODO: Name the storage service and explain how the app retrieves photos.",
          "Offline support: the app includes PWA offline behavior. TODO: Describe what guests can do offline and how changes sync when connectivity returns.",
        ],
        challenges: [
          "TODO: Describe a technical challenge involving photo uploads or storage and how you addressed it.",
          "TODO: Describe an offline or installation challenge and how you tested the behavior.",
        ],
        learnings: [
          "TODO: Describe what you learned about building a photo-upload and storage flow.",
          "TODO: Describe what you would improve about offline behavior, reliability, or the user experience.",
        ],
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
      slug: "crypto-fakeout-scanner",
      title: "Crypto fakeout scanner",
      status: "In progress",
      description:
        "Scans seven crypto pairs every hour, detects fakeouts around key price levels and sends alerts to Telegram. Runs on my own home server.",
      tags: ["Python", "PostgreSQL", "FastAPI", "ccxt", "pandas", "Telegram"],
      image: {
        src: null,
        alt: "TODO: Describe a project screenshot",
        placeholder: "TODO: Add project image",
      },
      liveUrl: null, // TODO: read-only demo, or leave null and use the video
      githubUrl: null, // TODO: add repo link
      demoVideoUrl: null,
      caseStudy: {
        tagline:
          "An always-on market scanner that watches key price levels and alerts me when a breakout fails.",
        timeline: "TODO: started [month year], on and off, now being finished (winter 2026)",
        role:
          "Solo project. I designed and built everything: the data pipeline, the database, the level and fakeout logic, the alerts, the dashboard and the deployment on my home server.",
        stack: [
          "Python",
          "ccxt (Binance market data)",
          "pandas and pandas-ta",
          "PostgreSQL",
          "FastAPI",
          "JavaScript dashboard",
          "python-telegram-bot",
          "cron on a home server",
        ],
        problem: [
          "A fakeout is when price pushes past an important high or low and then closes back inside it. Spotting them means watching charts for hours across several markets, which isn't realistic.",
          "I wanted a scanner that runs on its own, applies the same definition every time and tells me only when something happens. I also wanted to build it with free tools only.",
        ],
        architecture: [
          "Data: scheduled jobs fetch candles from Binance through ccxt for seven pairs on the 5-minute, 1-hour, 4-hour, daily and weekly timeframes. Each candle gets RSI(8), EMA(20) and EMA(50) added with pandas, and is stored in PostgreSQL, one table per pair and timeframe. A separate script backfills history.",
          "Levels: key highs and lows are stored per timeframe, and a greedy filtering step keeps only the significant ones, so the detector isn't checking against noise.",
          "Detection: after each hourly insert, the newest candle is compared with the levels. A high fakeout is a wick above a level with a close back below it, and a low fakeout is the reverse. The result is saved on the candle with its type and level.",
          "Alerts and dashboard: a Telegram message is sent with the pair, timeframe, level and candle. A FastAPI dashboard lets me browse candles and past fakeouts.",
        ],
        challenges: [
          "Keeping it free: Binance's public market data through ccxt, a self-hosted PostgreSQL database, a free Telegram bot and cron on my own server mean it has no recurring cost.",
          "Choosing the data library: I compared options before settling on ccxt, which puts the exchange behind one interface and handles rate limiting.",
          "Reliability: each job handles pairs one by one and logs success or failure per pair, so one failed request doesn't stop the whole run.",
          "Reducing noise: filtering the levels, instead of using every high and low, keeps the detector focused on levels that matter.",
        ],
        learnings: [
          "Planned next: classify each fakeout, record whether it worked out, train a model and show a probability of success in the alert. A model is only as good as its labels, so the first step is a precise definition of \"successful\" and a record of every outcome.",
          "Today the detector is rule-based and hasn't been backtested, so I make no claims about how well its alerts perform. This project is about the engineering of the pipeline, not trading results.",
          "Still to do: tests for the level filter and detector, health monitoring when a job fails, and one shared configuration for the symbols and timeframes.",
        ],
      },
    },
  ],
};
