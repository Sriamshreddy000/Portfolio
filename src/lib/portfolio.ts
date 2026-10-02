export const profile = {
  name: "Sriamsh Reddy Enugu",
  email: "enugusriamshreddy@gmail.com",
  phone: "513-601-7380",
  links: {
    github: "https://github.com/sriamshreddy000",
    linkedin: "https://www.linkedin.com/in/sriamshreddy-enugu",
  },
  headline: "Software engineer building production backends and data-backed services across Python, Node.js, React, and AWS.",
  subheadline:
    "I've shipped features in a 100k-line codebase serving 125k users, designed role-based access control and audit logging across backend services, and deployed an ML classifier end to end, FastAPI on Lambda, versioned datasets in S3, CloudWatch monitoring. Comfortable tracing a bug from the React component down through the API to the database.",
};

export const about = {
  title: "Grounded engineering across product delivery, backend clarity, and applied ML workflows.",
  paragraphs: [
    "My strongest work is backend and infrastructure: designing role-based access control and audit logging across services in a 100k-line MERN codebase serving 125k users, and tracing authentication failures from the React component through Node.js down to the database until the intermittent ones stop happening. I care about the parts that only show up under real usage, permission gaps, race conditions, retries, and whether you can tell what went wrong afterward.",
    "I also build Python services around machine learning. At EduSkills I trained a text classifier and shipped it end to end: a FastAPI prediction service under 150ms, deployed to Lambda behind API Gateway, with versioned datasets in S3 under least-privilege IAM and CloudWatch monitoring on requests and errors. Outside work I've built a transformer-based sentiment CLI over Reddit data and provisioned AWS infrastructure with Pulumi and GitHub Actions. I treat ML as systems work, the model is one component in something that has to run reliably.",
  ],
};

export const experience = [
  {
    company: "One Community Global",
    role: "Software Engineer Intern",
    date: "Oct 2025 — Mar 2026",
    summary:
      "Contributed to production features in a 100k+ LOC MERN codebase serving 125k+ users, with emphasis on authorization, observability, and cross-stack debugging.",
    bullets: [
      "Developed production features and REST APIs in a large MERN app with backward-compatibility constraints.",
      "Designed and implemented RBAC across backend services, closing permission gaps and preventing unauthorized access paths.",
      "Traced auth failures across React → Node.js → DB to eliminate intermittent login issues.",
      "Designed an audit table tracking failed login attempts and new-user inserts, with structured logging across RBAC/auth flows for auditability.",
      "Raised 15 frontend/backend PRs and reviewed 40+ during a two-week onboarding ramp; caught authorization flaws and state regressions before production.",
      "Built React/Redux auth and profile flows with input validation, JWT-based session handling, and defensive loading/error states.",
    ],
  },
  {
    company: "EduSkills Foundation",
    role: "Software Developer Intern",
    date: "Sep 2023 — Feb 2024",
    summary:
      "Trained a text-classification model and shipped it as a real-time prediction service, deployed serverlessly on AWS.",
    bullets: [
      "Trained and evaluated a Logistic Regression text-classification model on a 10k-row labeled dataset, reaching 88% accuracy and 0.85 F1 on held-out data.",
      "Built a FastAPI REST service serving real-time predictions with average latency under 150ms.",
      "Deployed the API as a serverless function on AWS Lambda behind API Gateway; stored artifacts and versioned datasets in S3 with least-privilege IAM roles.",
      "Added CloudWatch logging/monitoring and a lightweight React frontend for submitting input and viewing live predictions.",
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
  languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"],
  frontend: ["React", "Redux", "HTML", "CSS", "REST API Integration"],
  backend: ["Node.js", "Express", "FastAPI", "Authentication (JWT)", "Spring Boot", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  cloudDevOps: ["AWS (EC2, S3, RDS, IAM, Lambda, API Gateway, CloudWatch)", "Docker", "GitHub Actions", "Pulumi"],
  data: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Data Modeling"],
  mlNlp: [
    "Transformers",
    "HuggingFace",
    "PyTorch",
    "Logistic Regression",
    "Entity Extraction",
    "Stance Classification",
    "TF-IDF",
  ],
};

export const education = {
  school: "University of Cincinnati",
  degree: "Master of Engineering in Computer Science",
  date: "Aug 2024 — Apr 2026",
  gpa: "3.79/4.0",
};