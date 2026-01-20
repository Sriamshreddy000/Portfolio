"use client";

import { motion } from "framer-motion";
import HeroOrb from "@/components/HeroOrb";
import {
  education,
  experience,
  highlights,
  profile,
  projects,
  skills,
} from "@/lib/portfolio";

import { easeOut } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
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

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      {/* Top bar */}
      <motion.header {...fadeUp} className="flex items-center justify-between gap-4">
        <div className="text-sm text-white/75">{profile.location}</div>
        <div className="flex items-center gap-3 text-sm">
          <a className="text-white/80 hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="text-white/30">•</span>
          <a className="text-white/80 hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            Available for Software Engineering roles
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-white/80">{profile.headline}</p>
          <p className="mt-4 max-w-xl text-white/70">{profile.subheadline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>Next.js</Pill>
            <Pill>React</Pill>
            <Pill>Auth & RBAC</Pill>
            <Pill>AWS</Pill>
            <Pill>Cross-stack Debugging</Pill>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              href={`mailto:${profile.email}`}
            >
              Email me
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="md:justify-self-end">
          <HeroOrb />
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="mt-10 grid gap-3 md:grid-cols-4">
        {highlights.map((h) => (
          <motion.div
            key={h.k}
            {...fadeUp}
            className="rounded-3xl glass p-5"
          >
            <div className="text-2xl font-semibold">{h.k}</div>
            <div className="mt-1 text-sm text-white/70">{h.v}</div>
          </motion.div>
        ))}
      </section>

      {/* Experience */}
      <section className="mt-14">
        <motion.h2 {...fadeUp} className="text-xl font-semibold tracking-tight">
          Experience
        </motion.h2>

        <div className="mt-4 grid gap-4">
          {experience.map((x) => (
            <motion.div key={x.company} {...fadeUp} className="rounded-3xl glass p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold">{x.role}</div>
                  <div className="text-sm text-white/70">{x.company}</div>
                </div>
                <div className="text-sm text-white/60">{x.date}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {x.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-14">
        <motion.h2 {...fadeUp} className="text-xl font-semibold tracking-tight">
          Projects
        </motion.h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <motion.a
              key={p.name}
              {...fadeUp}
              href={p.href}
              className="group rounded-3xl glass p-6 transition hover:translate-y-[-2px]"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-xs text-white/60">{p.date}</div>
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 text-sm text-white/70">
                <span className="opacity-70">Open</span>{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills + Education */}
      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <motion.div {...fadeUp} className="rounded-3xl glass p-6">
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-4 space-y-4 text-sm text-white/75">
            <div>
              <div className="text-white/60">Languages</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.languages.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-white/60">Frontend</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.frontend.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-white/60">Backend</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.backend.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-white/60">Databases</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.databases.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-white/60">Cloud & DevOps</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.cloudDevOps.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-3xl glass p-6">
          <h2 className="text-xl font-semibold tracking-tight">Education</h2>
          <div className="mt-4 text-sm text-white/75">
            <div className="text-lg font-semibold">{education.school}</div>
            <div className="mt-1 text-white/70">{education.degree}</div>
            <div className="mt-2 text-white/60">{education.date}</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-white/60">GPA</span>
              <span className="font-semibold">{education.gpa}</span>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/60">Contact</div>
            <div className="mt-2 text-sm">
              <div className="text-white/80">{profile.email}</div>
              <div className="text-white/70">{profile.phone}</div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mt-14 pb-6 text-center text-xs text-white/50">
        Built with Next.js • Framer Motion • Three.js
      </footer>
    </main>
  );
}
