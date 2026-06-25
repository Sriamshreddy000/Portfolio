"use client";

import { motion, easeOut } from "framer-motion";
import { projects } from "@/lib/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: easeOut },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function MarketplaceVisual() {
  return (
    <div className="project-visual-shell">
      <motion.div
        className="project-window"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="project-window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="project-chat-stack">
          <motion.div
            className="project-chat-bubble bubble-left"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="project-chat-bubble bubble-right"
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          />
          <div className="project-payment-row">
            <span className="project-status-dot" />
            <motion.div
              className="project-payment-bar"
              animate={{ scaleX: [0.55, 1, 0.72] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="project-visual-shell">
      <motion.div
        className="infra-grid"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="infra-node">API</div>
        <div className="infra-node">Auth</div>
        <div className="infra-node">CI/CD</div>
        <div className="infra-node">AWS</div>
        <motion.div
          className="infra-pulse"
          animate={{ opacity: [0.28, 0.8, 0.28], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

function SentimentVisual() {
  return (
    <div className="project-visual-shell">
      <motion.div
        className="terminal-panel"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="project-window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-line terminal-prompt">$ analyze topics --stance</div>
        <div className="terminal-line">entity: product launch</div>
        <div className="terminal-line">sentiment: positive</div>
        <div className="terminal-line">stance: mixed</div>
        <div className="signal-bars">
          <motion.span
            animate={{ height: [26, 40, 30] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            animate={{ height: [34, 22, 42] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
          />
          <motion.span
            animate={{ height: [18, 36, 28] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

const projectMeta = {
  "Retro Arcade Game Marketplace": {
    themeClass: "project-scene-retro",
    kicker: "Marketplace Systems",
    Visual: MarketplaceVisual,
  },
  "Cloud-Native Course Management System": {
    themeClass: "project-scene-cloud",
    kicker: "Cloud Delivery",
    Visual: CloudVisual,
  },
  "Public Sentiment Analyzer": {
    themeClass: "project-scene-sentiment",
    kicker: "Applied NLP",
    Visual: SentimentVisual,
  },
} as const;

export default function ProjectsPage() {
  return (
    <main className="relative px-5 py-14">
      <div className="absolute inset-0 -z-10 projects-bg" />
      <div className="mx-auto max-w-5xl">
        <motion.section {...fadeUp}>
          <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Real project work spanning full-stack systems, cloud infrastructure,
            and applied NLP workflows.
          </p>
        </motion.section>

        <section className="mt-10 space-y-8">
          {projects.map((project) => {
            const meta = projectMeta[project.name as keyof typeof projectMeta];
            const Visual = meta.Visual;

            return (
              <motion.article
                key={project.name}
                {...fadeUp}
                className={`project-scene ${meta.themeClass} rounded-[2rem] px-6 py-8 md:px-8 md:py-10`}
              >
                <div>
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                      <div className="flex items-center justify-between gap-3">
                        <p className="section-kicker">{meta.kicker}</p>
                        {project.date ? (
                          <span className="project-date whitespace-nowrap text-xs">
                            {project.date}
                          </span>
                        ) : null}
                      </div>
                      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        {project.name}
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="project-visual-inline">
                      <Visual />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>

                  <ul className="mt-6 grid gap-3 text-sm text-white/75 md:max-w-3xl">
                    {project.bullets.map((bullet, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-btn"
                    >
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
