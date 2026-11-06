"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monitor } from "lucide-react";

const sections = [
  { id: "home", label: "Home", accent: "var(--accent-home)", glow: "var(--glow-home)" },
  { id: "about", label: "About", accent: "var(--accent-about)", glow: "var(--glow-about)" },
  { id: "experience", label: "Experience", accent: "var(--accent-experience)", glow: "var(--glow-experience)" },
  { id: "skills", label: "Skills", accent: "var(--accent-skills)", glow: "var(--glow-skills)" },
  { id: "contact", label: "Contact", accent: "var(--accent-contact)", glow: "var(--glow-contact)" },
];

// How long the indicator rests on each in-between section while catching up
const STEP_MS = 90;

function currentSectionIndex() {
  const doc = document.documentElement;
  // At the very bottom, the last section is active even if it is short
  if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
    return sections.length - 1;
  }
  const line = window.innerHeight * 0.4;
  let index = 0;
  sections.forEach((section, i) => {
    const el = document.getElementById(section.id);
    if (el && el.getBoundingClientRect().top <= line) index = i;
  });
  return index;
}

export default function ScrollProgress() {
  // Where the page actually is
  const [targetIndex, setTargetIndex] = useState(0);
  // What the sidebar shows; walks one section at a time toward targetIndex
  const [shownIndex, setShownIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setTargetIndex(currentSectionIndex()));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (shownIndex === targetIndex) return;
    const timer = setTimeout(() => {
      setShownIndex((i) => i + (targetIndex > i ? 1 : -1));
    }, STEP_MS);
    return () => clearTimeout(timer);
  }, [shownIndex, targetIndex]);

  return (
    <nav className="scroll-progress" aria-label="Section progress">
      <div className="scroll-progress-items">
        {sections.map((section, i) => {
          const isActive = shownIndex === i;

          return (
            <button
              key={section.id}
              type="button"
              className={isActive ? "scroll-progress-item active" : "scroll-progress-item"}
              style={
                {
                  "--progress-accent": section.accent,
                  "--progress-glow": section.glow,
                } as CSSProperties
              }
              onClick={() => {
                const element = document.getElementById(section.id);
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-label={`Scroll to ${section.label}`}
              aria-current={targetIndex === i ? "true" : undefined}
            >
              <span className="scroll-progress-marker">
                <AnimatePresence mode="wait" initial={false}>
                  {isActive ? (
                    <motion.span
                      key="icon"
                      className="scroll-progress-icon"
                      initial={{ scale: 0.2, rotate: -25, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.2, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 520, damping: 20 }}
                    >
                      <Monitor size={13} strokeWidth={2.3} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="dot"
                      className="scroll-progress-dot"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.1 }}
                    />
                  )}
                </AnimatePresence>
              </span>
              <span className="scroll-progress-label">{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
