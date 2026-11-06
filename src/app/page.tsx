"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layout,
  Linkedin,
  Mail,
  Phone,
  Server,
} from "lucide-react";
import { easeOut, motion } from "framer-motion";
import HeroCard from "@/components/HeroCard";
import ScrollProgress from "@/components/ScrollProgress";
import { about, education, experience, profile, skills } from "@/lib/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: easeOut },
};

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

const skillGroups = [
  { title: "Languages", icon: Code2, items: skills.languages },
  { title: "Frontend", icon: Layout, items: skills.frontend },
  { title: "Backend", icon: Server, items: skills.backend },
  { title: "Databases", icon: Database, items: skills.databases },
  { title: "Cloud & DevOps", icon: Cloud, items: skills.cloudDevOps },
  { title: "Data", icon: BarChart3, items: skills.data },
  { title: "ML & NLP", icon: Brain, items: skills.mlNlp },
];

export default function Page() {
  return (
    <>
      <ScrollProgress />

      <main className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:pt-12">
        {/* ---------- Hero ---------- */}
        <section
          id="home"
          className="grid min-h-[78vh] items-center gap-12 py-10 md:grid-cols-[1.15fr_1fr]"
        >
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-fg/10 bg-fg/5 px-3.5 py-1.5 text-xs text-fg/80">
              <span className="status-dot" />
              Available for Software Engineering roles
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              <span className="hero-name">{profile.name}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-fg/85 md:text-xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-fg/65">{profile.subheadline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn-primary">
                View projects <ArrowRight size={16} />
              </Link>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
              <span className="mx-1 hidden h-6 w-px bg-fg/15 sm:block" />
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>Python</Pill>
              <Pill>Node.js</Pill>
              <Pill>React</Pill>
              <Pill>Auth & RBAC</Pill>
              <Pill>AWS</Pill>
              <Pill>ML / NLP</Pill>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex justify-center md:justify-end">
            <HeroCard />
          </motion.div>
        </section>

        {/* ---------- About ---------- */}
        <section
          id="about"
          className="home-section section-about mt-6 rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">About Me</p>
            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {about.title}
              </h2>
              <div className="space-y-4 text-[15px] leading-7 text-fg/75">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------- Experience ---------- */}
        <section
          id="experience"
          className="home-section section-experience mt-8 rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Where I&apos;ve worked
            </h2>

            <div className="mt-8 grid gap-5">
              {experience.map((x) => (
                <div key={`${x.company}-${x.role}`} className="exp-card">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="exp-badge">{x.company.charAt(0)}</div>
                      <div>
                        <div className="text-lg font-semibold">{x.role}</div>
                        <div className="text-sm text-fg/65">{x.company}</div>
                      </div>
                    </div>
                    <div className="exp-date whitespace-nowrap rounded-full border border-fg/10 bg-fg/5 px-3 py-1 text-xs font-medium">
                      {x.date}
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-fg/75">{x.summary}</p>
                  <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-fg/75">
                    {x.bullets.slice(0, 4).map((b, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full"
                          style={{ background: "var(--section-accent)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ---------- Skills ---------- */}
        <section
          id="skills"
          className="home-section section-skills mt-8 rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              What I build with
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map(({ title, icon: Icon, items }) => (
                <div key={title} className="skill-card">
                  <div className="skill-card-head">
                    <Icon size={17} />
                    {title}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>
              ))}

              <div className="skill-card">
                <div className="skill-card-head">
                  <GraduationCap size={17} />
                  Education
                </div>
                <div className="mt-3 text-sm">
                  <div className="font-semibold">{education.school}</div>
                  <div className="mt-1 text-fg/70">{education.degree}</div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-fg/55">{education.date}</span>
                    <span className="pill">
                      GPA <strong className="ml-1">{education.gpa}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------- Contact ---------- */}
        <section
          id="contact"
          className="home-section section-contact mt-8 rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <motion.div {...fadeUp}>
            <p className="section-kicker">Contact Me</p>
            <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Open to software engineering roles and thoughtful conversations.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-fg/75">
                  I&apos;m especially interested in teams working on product engineering,
                  backend systems, cloud infrastructure, and applied ML features that
                  need careful implementation rather than inflated claims.
                </p>
              </div>

              <div className="grid gap-3">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <Mail size={18} />
                  <span className="truncate">{profile.email}</span>
                </a>
                <a href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`} className="contact-link">
                  <Phone size={18} />
                  {profile.phone}
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                  <Linkedin size={18} />
                  LinkedIn
                  <ArrowRight size={15} className="ml-auto opacity-60" />
                </a>
                <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact-link">
                  <Github size={18} />
                  GitHub
                  <ArrowRight size={15} className="ml-auto opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="mt-14 pb-24 text-center text-xs text-fg/45">
          © {new Date().getFullYear()} Sriamsh Reddy Enugu · Built with Next.js & Framer Motion
        </footer>
      </main>
    </>
  );
}
