export const profile = {
  name: "Sriamsh Reddy Enugu",
  email: "enugusriamshreddy@gmail.com",
  phone: "513-601-7380",
  links: {
    github: "https://github.com/sriamshreddy000",
    linkedin: "https://www.linkedin.com/in/sriamshreddy-enugu",
  },
  headline: "Software Engineer building production web systems with a strong ML/NLP secondary lane.",
  subheadline:
    "I work across full-stack product delivery, backend systems, cloud infrastructure, and applied ML workflows, with recent experience in RBAC, authentication, observability, and cross-stack debugging.",
};

export const about = {
  title: "Grounded engineering across product delivery, backend clarity, and applied ML workflows.",
  paragraphs: [
    "My strongest work sits where frontend delivery, backend reliability, and cloud-backed systems need to line up cleanly. I like building features that hold up under real usage, especially when authentication, authorization, and operational visibility matter.",
    "Alongside software engineering, I have a real ML/NLP lane built around Python workflows, transformer-based analysis, entity extraction, TF-IDF, and CLI-driven experimentation. I treat that work as applied systems work, not disconnected research.",
  ],
};

export const experience = [
  {
    company: "One Community Inc.",
    role: "Software Engineer Intern",
    date: "Oct 2025 — Mar 2026",
    summary:
      "Contributing to production features in a 100k+ LOC MERN codebase serving 125k+ users, with emphasis on authorization, observability, and cross-stack debugging.",
    bullets: [
      "Developed production features in a large MERN app with backward-compatibility constraints.",
      "Designed and implemented RBAC across backend services; prevented unauthorized access paths.",
      "Traced auth failures across React → Node.js → DB to eliminate intermittent login issues.",
      "Added structured logging for RBAC/auth flows to improve auditability and debugging speed.",
      "Reviewed 20+ PRs weekly; caught authorization flaws and state regressions before production.",
      "Built React auth/profile flows with Redux and defensive UI patterns for failure modes.",
    ],
  },
  {
    company: "EduSkills Foundation",
    role: "Software Developer Intern",
    date: "Sep 2023 — Feb 2024",
    summary:
      "Worked in Python-based analysis workflows focused on EDA, experiment evaluation, and reporting clarity across model results.",
    bullets: [
      "Performed EDA in Python (Pandas/Matplotlib) to uncover data quality issues.",
      "Evaluated classification models with accuracy/precision/recall tradeoffs and documented findings.",
      "Automated experimentation and reporting workflows using Jupyter and GitHub.",
    ],
  },
];

export const projects = [
  {
    name: "Retro Arcade Game Marketplace",
    date: "Dec 2024 — Mar 2025",
    github: "https://github.com/Sriamshreddy000/Retro-arcade-game-marketplace",
    description:
      "A full-stack marketplace built around real-time buyer-seller communication, payment handling, and safer transaction state management.",
    tags: ["Spring Boot", "React", "WebSockets", "PostgreSQL", "PayPal", "CI/CD"],
    bullets: [
      "Real-time chat with persistence, reconnection handling, and ordering guarantees.",
      "Payment workflow state machine to handle retries/failures/duplicate callbacks safely.",
      "Mitigated race conditions via idempotent transaction design.",
    ],
  },
  {
    name: "Cloud-Native Course Management System",
    date: "Nov 2024 — Dec 2024",
    github: "https://github.com/Sriamshreddy000/Webapp",
    description:
      "A cloud-oriented course platform centered on authenticated REST services, infrastructure automation, and repeatable deployment workflows.",
    tags: ["Node.js", "Express", "Pulumi", "AWS", "GitHub Actions", "CloudWatch"],
    bullets: [
      "Built REST services and authenticated workflows.",
      "Provisioned infra with Pulumi (EC2/IAM/ASG/security policies).",
      "Automated builds/deploys with GitHub Actions and Packer.",
    ],
  },
  {
    name: "Public Sentiment Analyzer",
    date: "Mar 2026 — May 2026",
    github: "https://github.com/Sriamshreddy000/public-sentiment-analyzer",
    description:
      "A Python CLI workflow for public-topic analysis using transformer-based sentiment and stance classification, entity extraction, and interpretable text processing.",
    tags: ["Python", "HuggingFace", "PyTorch", "spaCy", "TF-IDF", "CLI"],
    bullets: [
      "Built a CLI-driven workflow for collecting and analyzing public discussion data.",
      "Used transformers with HuggingFace and PyTorch for sentiment and stance classification.",
      "Combined entity extraction and TF-IDF-based text processing to make outputs more interpretable.",
    ],
  },
];

export const skills = {
  languages: ["Java", "Python", "JavaScript", "C++"],
  frontend: ["React", "HTML", "CSS", "REST API Integration"],
  backend: ["Node.js", "Express", "Authentication", "Spring Boot", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  cloudDevOps: ["AWS (EC2, S3, RDS, IAM, CloudWatch)", "Docker", "GitHub Actions", "Pulumi"],
  mlNlp: [
    "Transformers",
    "HuggingFace",
    "PyTorch",
    "Entity Extraction",
    "Stance Classification",
    "TF-IDF",
    "Pandas",
    "Matplotlib",
  ],
};

export const education = {
  school: "University of Cincinnati",
  degree: "Master of Engineering in Computer Science",
  date: "Aug 2024 — Apr 2026",
  gpa: "3.8/4.0",
};
