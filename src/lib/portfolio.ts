export const profile = {
  name: "Sriamsh Reddy Enugu",
  location: "Everett, WA",
  email: "enugusriamshreddy@gmail.com",
  phone: "513-601-7380",
  links: {
    github: "https://github.com/sriamshreddy000",
    linkedin: "https://www.linkedin.com/in/sriamshreddy-enugu",
  },
  headline: "Software Engineer",
  subheadline:
    "I ship production features across frontend, backend, and cloud — with a focus on auth, RBAC, and cross-stack debugging.",
};

export const highlights = [
  { k: "125k+", v: "users served" },
  { k: "100k+ LOC", v: "MERN codebase" },
  { k: "20+", v: "PRs reviewed weekly" },
  { k: "3.8/4.0", v: "GPA" },
];

export const experience = [
  {
    company: "One Community Inc.",
    role: "Software Engineer Intern",
    date: "Nov 2025 — Present",
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
    description:
      "Full-stack marketplace with real-time chat, payments, and failure-safe order flows.",
    tags: ["Spring Boot", "React", "WebSockets", "PostgreSQL", "PayPal", "CI/CD"],
    bullets: [
      "Real-time chat with persistence, reconnection handling, and ordering guarantees.",
      "Payment workflow state machine to handle retries/failures/duplicate callbacks safely.",
      "Mitigated race conditions via idempotent transaction design.",
    ],
    href: "#",
  },
  {
    name: "Cloud-Native Course Management System",
    date: "Nov 2024 — Dec 2024",
    description:
      "REST services + cloud infrastructure automation, CI/CD, and observability.",
    tags: ["Node.js", "Express", "Pulumi", "AWS", "GitHub Actions", "CloudWatch"],
    bullets: [
      "Built REST services and authenticated workflows.",
      "Provisioned infra with Pulumi (EC2/IAM/ASG/security policies).",
      "Automated builds/deploys with GitHub Actions and Packer.",
    ],
    href: "#",
  },
];

export const skills = {
  languages: ["Java", "Python", "JavaScript", "C++"],
  frontend: ["React", "HTML", "CSS", "REST API Integration"],
  backend: ["Node.js", "Express", "Authentication", "Spring Boot", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  cloudDevOps: ["AWS (EC2, S3, RDS, IAM, CloudWatch)", "Docker", "GitHub Actions", "Pulumi"],
};

export const education = {
  school: "University of Cincinnati",
  degree: "Master of Engineering in Computer Science",
  date: "Aug 2024 — Apr 2026",
  gpa: "3.8/4.0",
};
