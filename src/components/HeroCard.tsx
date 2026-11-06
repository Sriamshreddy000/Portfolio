"use client";

import { motion, useReducedMotion } from "framer-motion";

type Tok = [cls: string, text: string];

// A small "profile as code" snippet. Tokens are [className, text].
const LINES: Tok[][] = [
  [["tok-kw", "const"], ["", " engineer "], ["tok-p", "= {"]],
  [["", "  "], ["tok-key", "name"], ["tok-p", ": "], ["tok-str", '"Sriamsh Reddy Enugu"'], ["tok-p", ","]],
  [["", "  "], ["tok-key", "role"], ["tok-p", ": "], ["tok-str", '"Software Engineer"'], ["tok-p", ","]],
  [["", "  "], ["tok-key", "stack"], ["tok-p", ": ["], ["tok-str", '"Python"'], ["tok-p", ", "], ["tok-str", '"Node.js"'], ["tok-p", ", "], ["tok-str", '"React"'], ["tok-p", ", "], ["tok-str", '"AWS"'], ["tok-p", "],"]],
  [["", "  "], ["tok-key", "focus"], ["tok-p", ": ["], ["tok-str", '"backend systems"'], ["tok-p", ", "], ["tok-str", '"auth & RBAC"'], ["tok-p", ", "], ["tok-str", '"applied ML"'], ["tok-p", "],"]],
  [["", "  "], ["tok-key", "based"], ["tok-p", ": "], ["tok-str", '"Bellevue, WA"'], ["tok-p", ","]],
  [["", "  "], ["tok-key", "openToWork"], ["tok-p", ": "], ["tok-bool", "true"], ["tok-p", ","]],
  [["tok-p", "};"]],
];

const STATS = [
  { value: "125k+", label: "users served" },
  { value: "100k+", label: "LOC codebase" },
  { value: "<150ms", label: "ML API latency" },
];

export default function HeroCard() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full max-w-[30rem]">
      <div className="hero-card">
        <div className="hero-card-bar">
          <i style={{ background: "#ff5f57" }} />
          <i style={{ background: "#febc2e" }} />
          <i style={{ background: "#28c840" }} />
          <span className="ml-2">sriamsh.ts</span>
        </div>
        <div className="hero-card-code" aria-label="Profile summary">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.3 }}
            >
              <span className="ln">{i + 1}</span>
              {line.map(([cls, text], j) => (
                <span key={j} className={cls || undefined}>
                  {text}
                </span>
              ))}
              {i === LINES.length - 1 ? <span className="caret" aria-hidden="true" /> : null}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-chip"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.1, duration: 0.35 }}
          >
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
