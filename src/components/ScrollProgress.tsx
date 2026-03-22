"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home", accent: "rgba(245, 245, 247, 0.92)", glow: "rgba(245, 245, 247, 0.28)" },
  { id: "about", label: "About", accent: "#9bff73", glow: "rgba(155, 255, 115, 0.3)" },
  { id: "experience", label: "Experience", accent: "#74c5ff", glow: "rgba(116, 197, 255, 0.3)" },
  { id: "skills", label: "Skills", accent: "#c08dff", glow: "rgba(192, 141, 255, 0.3)" },
  { id: "contact", label: "Contact", accent: "#ff9a6b", glow: "rgba(255, 154, 107, 0.3)" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -42% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="scroll-progress" aria-label="Section progress">
      <div className="scroll-progress-items">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

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
              aria-current={isActive ? "true" : undefined}
            >
              <span className="scroll-progress-dot" />
              <span className="scroll-progress-label">{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
