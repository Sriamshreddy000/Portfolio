"use client";

import { motion, easeOut } from "framer-motion";

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

export default function ProjectsPage() {
  return (
    <main className="relative px-5 py-14">
  <div className="absolute inset-0 -z-10 projects-bg" />
  <div className="mx-auto max-w-5xl">
      {/* Header */}
      <motion.section {...fadeUp}>
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          A selection of projects where I focused on real engineering problems,
          trade-offs, and production-ready decisions. Some codebases are private
          or still under active development.
        </p>
      </motion.section>

      {/* Project: Retro Arcade Marketplace */}
      <motion.section {...fadeUp} className="mt-12 rounded-3xl glass p-8 section-glow">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">
              Retro Arcade Game Marketplace
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              A full-stack marketplace enabling users to buy and sell retro arcade
              games with real-time chat and a robust payment workflow.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Pill>Spring Boot</Pill>
          <Pill>React</Pill>
          <Pill>WebSockets</Pill>
          <Pill>PostgreSQL</Pill>
          <Pill>PayPal Integration</Pill>
        </div>

        {/* Case study sections */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Problem</h3>
            <p className="mt-2 text-sm text-white/70">
              Building a peer-to-peer marketplace introduced challenges around
              real-time communication, payment reliability, and ensuring users
              could not exploit race conditions or duplicate transactions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Constraints</h3>
            <p className="mt-2 text-sm text-white/70">
              The system needed to handle intermittent network failures,
              asynchronous payment callbacks, and concurrent buyers while
              maintaining data consistency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Engineering Decisions</h3>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>• Implemented WebSocket-based chat with message persistence</li>
              <li>• Designed idempotent payment workflows to prevent duplicates</li>
              <li>• Used backend validation to enforce transaction ownership</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Outcome</h3>
            <p className="mt-2 text-sm text-white/70">
              The system reliably supports real-time buyer–seller interaction and
              safely processes payments without double-charging or state
              corruption, even under retry scenarios.
            </p>
          </div>
        </div>
      </motion.section>


{/* Project: Cloud-Native Course Management System */}
<motion.section {...fadeUp} className="mt-12 rounded-3xl glass p-8 section-glow">
  <div>
    <h2 className="text-2xl font-semibold">
      Cloud-Native Course Management System
    </h2>
    <p className="mt-2 max-w-xl text-white/70">
      A scalable backend system for managing courses, enrollments, and users,
      designed with cloud infrastructure automation and CI/CD from the ground up.
    </p>
    <div className="mt-4 text-sm text-white/60">
      Role: Backend & Cloud Engineer · Infrastructure ownership
    </div>
  </div>

  {/* Tech stack */}
  <div className="mt-5 flex flex-wrap gap-2">
    <Pill>Node.js</Pill>
    <Pill>Express</Pill>
    <Pill>AWS</Pill>
    <Pill>Pulumi</Pill>
    <Pill>GitHub Actions</Pill>
    <Pill>REST APIs</Pill>
  </div>

  {/* Case study sections */}
  <div className="mt-8 grid gap-8 md:grid-cols-2">
    <div>
      <h3 className="text-lg font-semibold">Problem</h3>
      <p className="mt-2 text-sm text-white/70">
        Traditional course management systems often couple application logic
        tightly with infrastructure, making scaling, deployments, and access
        control difficult to reason about and automate.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold">Constraints</h3>
      <p className="mt-2 text-sm text-white/70">
        The system needed to support authenticated access, environment-specific
        deployments, and repeatable infrastructure provisioning without manual
        configuration or drift.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold">Key Engineering Decisions</h3>
      <ul className="mt-2 space-y-2 text-sm text-white/70">
        <li>• Designed RESTful APIs using Node.js and Express</li>
        <li>• Provisioned AWS infrastructure using Pulumi (IaC)</li>
        <li>• Automated build and deployment pipelines with GitHub Actions</li>
        <li>• Enforced separation of application logic and infrastructure</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold">Outcome</h3>
      <p className="mt-2 text-sm text-white/70">
        The system can be reliably deployed across environments with consistent
        infrastructure, enabling faster iteration, safer deployments, and
        improved operational clarity.
      </p>
    </div>
  </div>
</motion.section>
    </div>
    </main>
  );
}
