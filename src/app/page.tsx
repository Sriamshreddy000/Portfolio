"use client";

import { Github, Linkedin } from "lucide-react";
import { easeOut, motion } from "framer-motion";
import HeroOrb from "@/components/HeroOrb";
import ScrollProgress from "@/components/ScrollProgress";
import { about, education, experience, profile, skills } from "@/lib/portfolio";

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
    <>
      <ScrollProgress />

      <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <section
          id="home"
          className="mt-1 grid min-h-[70vh] gap-6 md:grid-cols-2 md:items-center"
        >
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              <span className="h-2 w-2 rounded-full bg-white/80" />
              Available for Software Engineering roles
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              {profile.headline}
            </p>
            <p className="mt-3 max-w-xl text-white/68">{profile.subheadline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Next.js</Pill>
              <Pill>React</Pill>
              <Pill>Auth & RBAC</Pill>
              <Pill>AWS</Pill>
              <Pill>ML / NLP</Pill>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:justify-self-end">
            <HeroOrb />
          </motion.div>
        </section>

        <section
          id="about"
          className="home-section section-about mt-10 rounded-[2rem] px-6 py-10 md:px-8"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">About Me</p>
            <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {about.title}
              </h2>
              <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="experience"
          className="home-section section-experience mt-8 rounded-[2rem] px-6 py-10 md:px-8"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Experience
            </h2>

            <div className="mt-6 grid gap-4">
              {experience.map((x) => (
                <div
                  key={`${x.company}-${x.role}`}
                  className="rounded-[1.75rem] border border-white/10 bg-black/15 p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="text-lg font-semibold">{x.role}</div>
                      <div className="text-sm text-white/70">{x.company}</div>
                    </div>
                    <div className="exp-date whitespace-nowrap text-sm">{x.date}</div>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/74 md:text-[15px]">
                    {x.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {x.bullets.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="skills"
          className="home-section section-skills mt-8 rounded-[2rem] px-6 py-10 md:px-8"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Skills
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 text-sm text-white/75">
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
              <div>
                <div className="text-white/60">ML & NLP</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.mlNlp.map((s) => <Pill key={s}>{s}</Pill>)}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/15 p-6">
                <h3 className="text-lg font-semibold text-white">Education</h3>
                <div className="mt-4 text-sm text-white/75">
                  <div className="text-lg font-semibold">{education.school}</div>
                  <div className="mt-1 text-white/70">{education.degree}</div>
                  <div className="mt-2 text-white/60">{education.date}</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-white/60">GPA</span>
                    <span className="font-semibold">{education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="home-section section-contact mt-8 rounded-[2rem] px-6 py-10 md:px-8"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">Contact Me</p>
            <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Open to software engineering roles and thoughtful conversations.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                  I&apos;m especially interested in teams working on product engineering,
                  backend systems, cloud infrastructure, and applied ML features that
                  need careful implementation rather than inflated claims.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/15 p-6 text-sm text-white/80">
                <div>{profile.email}</div>
                <div className="mt-2 text-white/70">{profile.phone}</div>
                <div className="mt-4 flex flex-wrap gap-3 text-white/75">
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={profile.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Sriamsh Reddy Enugu on LinkedIn"
                    className="contact-social-icon"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Sriamsh Reddy Enugu on GitHub"
                    className="contact-social-icon"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="mt-14 pb-6 text-center text-xs text-white/50">
          Built with Next.js • Framer Motion • Three.js
        </footer>
      </main>
    </>
  );
}
