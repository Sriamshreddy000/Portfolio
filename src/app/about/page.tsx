"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative px-5 py-14">
      {/* Background */}
      <div className="absolute inset-0 -z-10 projects-bg" />

      <div className="mx-auto max-w-4xl">

        {/* About Me */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-semibold tracking-tight">About Me</h1>
          <p className="mt-4 text-white/70">
            I’m a Software Engineer who enjoys building production-grade systems
            across frontend, backend, and cloud. I focus on correctness,
            reliability, and understanding systems end-to-end.
          </p>
        </motion.section>

        {/* How I Work */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold">How I Work</h2>
          <p className="mt-4 text-white/70">
            I care deeply about understanding the full system, from UI behavior
            to backend logic to infrastructure. I enjoy debugging complex issues,
            designing for failure scenarios, and writing code that’s easy to
            reason about months later.
          </p>
        </motion.section>

        {/* Connect With Me */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold">Connect With Me</h2>
          <p className="mt-3 text-white/60">
            Reach out or explore my work on these platforms.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:enugusriamshreddy@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-base text-white hover:bg-white/10 transition"
            >
              <Mail size={24} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/sriamshreddy-enugu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-base text-white hover:bg-white/10 transition"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>

            <a
              href="https://github.com/sriamshreddy000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-base text-white hover:bg-white/10 transition"
            >
              <Github size={24} />
              GitHub
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
