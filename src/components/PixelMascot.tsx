"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio";
import {
  ARMS_DOWN,
  ARMS_EAT_BITTEN,
  ARMS_EAT_BITTEN_BITE,
  ARMS_EAT_CRUST,
  ARMS_EAT_FULL,
  ARMS_EAT_FULL_BITE,
  ARMS_UP,
  ARMS_WAVEA,
  ARMS_WAVEB,
  BODY,
  COLORS,
  EYES_CLOSED,
  EYES_OPEN,
  EYES_SAD,
  EYES_SLEEP,
  HEAD,
  MOUTH_CHEW_OPEN,
  MOUTH_CHEW_SHUT,
  MOUTH_OPEN,
  MOUTH_REST,
  MOUTH_SAD,
  MOUTH_SMILE,
  OUTLINE,
  SIDE_A,
  SIDE_B,
  SPRITE_H,
  SPRITE_W,
} from "@/components/pixelSprite";

// sleep -> startle -> wave -> idle. The sign shows on top of wave/idle while hovered.
// "Please walk away" -> sad (faces you) -> leaving (turns to his right, walks off
// to the left carrying the board) -> gone.
type Phase = "sleep" | "startle" | "wave" | "idle" | "sad" | "leaving" | "gone";

const SCALE = 2.2;
const WAKE_AFTER_MS = 7000; // nap length before waking on his own (hover wakes him sooner)
const STARTLE_MS = 700;
const WAVE_MS = 2400;
const SAD_MS = 1300; // how long he stands there looking disappointed
const WALK_MS = 3200; // how long the walk off-screen takes
const CLOSE_DELAY_MS = 220;

// Idle loop: eats a slice of pizza while watching you.
type EatStep = { arm: string; mouth: string; eyesClosed?: boolean; chewing?: boolean; ms: number };
const chew = (arm: string): EatStep[] =>
  Array.from({ length: 8 }, (_, i) => ({
    arm,
    mouth: i % 2 === 0 ? MOUTH_CHEW_OPEN : MOUTH_CHEW_SHUT,
    chewing: true,
    ms: 190,
  }));
const EAT_SCRIPT: EatStep[] = [
  { arm: ARMS_EAT_FULL, mouth: MOUTH_REST, ms: 1600 },
  { arm: ARMS_EAT_FULL_BITE, mouth: MOUTH_OPEN, eyesClosed: true, ms: 380 },
  ...chew(ARMS_EAT_BITTEN),
  { arm: ARMS_EAT_BITTEN, mouth: MOUTH_SMILE, ms: 1600 },
  { arm: ARMS_EAT_BITTEN_BITE, mouth: MOUTH_OPEN, eyesClosed: true, ms: 380 },
  ...chew(ARMS_EAT_CRUST),
  { arm: ARMS_EAT_CRUST, mouth: MOUTH_SMILE, ms: 1200 },
  { arm: ARMS_DOWN, mouth: MOUTH_SMILE, ms: 1600 }, // done... grabs another slice
];

// Stacks the layers (later ones win), then draws a dark outline around the
// whole silhouette, which is what gives the sprite its polished look.
function Sprite({ layers }: { layers: string[] }) {
  const key = layers.join("|");
  const rects = useMemo(() => {
    const cells = new Map<string, string>();
    for (const layer of key.split("|")) {
      for (const cell of layer.split(" ")) {
        const [x, y, c] = cell.split(",");
        cells.set(`${x},${y}`, c);
      }
    }
    const outline: string[] = [];
    cells.forEach((_, k) => {
      const [x, y] = k.split(",").map(Number);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx;
        const ny = y + dy;
        const nk = `${nx},${ny}`;
        if (!cells.has(nk) && nx >= 0 && ny >= 0 && nx < SPRITE_W && ny < SPRITE_H) outline.push(nk);
      }
    });
    const out: React.ReactNode[] = [];
    for (const k of new Set(outline)) {
      const [x, y] = k.split(",");
      out.push(<rect key={`o${k}`} x={x} y={y} width={1.02} height={1.02} fill={OUTLINE} />);
    }
    cells.forEach((c, k) => {
      const [x, y] = k.split(",");
      out.push(<rect key={k} x={x} y={y} width={1.02} height={1.02} fill={COLORS[c]} />);
    });
    return out;
  }, [key]);
  return <>{rects}</>;
}

export default function PixelMascot() {
  const reduce = useReducedMotion();
  const [rawPhase, setPhase] = useState<Phase>("sleep");
  // Reduced motion: skip the nap and just stand there awake
  const phase: Phase = reduce && (rawPhase === "sleep" || rawPhase === "startle") ? "idle" : rawPhase;
  const [frame, setFrame] = useState(false);
  const [blink, setBlink] = useState(false);
  const [eatStep, setEatStep] = useState(0);
  const [signUp, setSignUp] = useState(false);
  const [walkDistance, setWalkDistance] = useState(-400);
  const rootRef = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const schedule = (list: [() => void, number][]) => {
    timers.current.forEach(clearTimeout);
    timers.current = list.map(([fn, ms]) => setTimeout(fn, ms));
  };

  const wakeUp = (delay: number) =>
    schedule([
      [() => setPhase("startle"), delay],
      [
        () => {
          // Someone is already hovering him: go straight to the sign
          if (hovered.current) {
            setPhase("idle");
            setSignUp(true);
          } else {
            setPhase("wave");
          }
        },
        delay + STARTLE_MS,
      ],
    ]);

  useEffect(() => {
    if (!reduce) wakeUp(WAKE_AFTER_MS);
    const t = timers;
    return () => t.current.forEach(clearTimeout);
    // Only start the nap timer once per page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  // Two-frame animation for waving arms and walking legs
  useEffect(() => {
    if (phase !== "wave" && phase !== "leaving") return;
    const flip = setInterval(() => setFrame((f) => !f), phase === "leaving" ? 170 : 230);
    const done = phase === "wave" ? setTimeout(() => setPhase("idle"), WAVE_MS) : undefined;
    return () => {
      clearInterval(flip);
      if (done) clearTimeout(done);
    };
  }, [phase]);

  // Pizza loop while idle (paused while the sign is up)
  useEffect(() => {
    if (phase !== "idle" || signUp || reduce) return;
    const t = setTimeout(() => setEatStep((i) => (i + 1) % EAT_SCRIPT.length), EAT_SCRIPT[eatStep].ms);
    return () => clearTimeout(t);
  }, [phase, signUp, reduce, eatStep]);

  // Blink every few seconds while awake and happy
  useEffect(() => {
    if ((phase !== "wave" && phase !== "idle") || reduce) return;
    let open: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setBlink(true);
      open = setTimeout(() => setBlink(false), 140);
    }, 3600);
    return () => {
      clearInterval(id);
      clearTimeout(open);
    };
  }, [phase, reduce]);

  const awake = phase === "wave" || phase === "idle";

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setSignUp(false), CLOSE_DELAY_MS);
  };

  // Only fires over his painted pixels (see CSS), not the empty space around him
  const enterCharacter = () => {
    hovered.current = true;
    cancelClose();
    if (phase === "sleep") {
      wakeUp(0);
      return;
    }
    if (awake) setSignUp(true);
  };

  const leaveCharacter = () => {
    hovered.current = false;
    scheduleClose();
  };

  const walkAway = () => {
    cancelClose();
    setSignUp(false);
    hovered.current = false;
    // Walk far enough left to fully leave the screen from wherever he is
    const rect = rootRef.current?.getBoundingClientRect();
    setWalkDistance(-((rect?.right ?? 200) + 40));
    setPhase("sad");
    schedule([
      [() => setPhase("leaving"), SAD_MS],
      [() => setPhase("gone"), SAD_MS + WALK_MS],
    ]);
  };

  if (phase === "gone") return null;

  const sleeping = phase === "sleep";
  const startled = phase === "startle";
  const sad = phase === "sad" || phase === "leaving";
  const leaving = phase === "leaving";
  const showSign = signUp && awake;
  const waving = phase === "wave" && !showSign;

  const eating = phase === "idle" && !showSign && !reduce;
  const step = EAT_SCRIPT[eatStep];

  const arms = showSign
    ? ARMS_UP
    : waving
      ? frame
        ? ARMS_WAVEB
        : ARMS_WAVEA
      : eating
        ? step.arm
        : ARMS_DOWN;
  const eyes = sad
    ? EYES_SAD
    : sleeping || (blink && !startled)
      ? EYES_SLEEP
      : waving || (eating && step.eyesClosed)
        ? EYES_CLOSED // happy ^ ^ eyes
        : EYES_OPEN;
  const mouth = sad
    ? MOUTH_SAD
    : sleeping
      ? MOUTH_REST
      : startled
        ? MOUTH_OPEN
        : eating
          ? step.mouth
          : MOUTH_SMILE;
  const layers = leaving ? [frame ? SIDE_B : SIDE_A] : [BODY, arms, HEAD, eyes, mouth];

  return (
    <motion.div
      ref={rootRef}
      className="pixel-mascot"
      animate={leaving ? { x: walkDistance } : { x: 0 }}
      transition={leaving ? { duration: WALK_MS / 1000, ease: "linear" } : { duration: 0 }}
    >
      <div className="pixel-mascot-figure">
        <AnimatePresence>
          {(waving || phase === "sad") && (
            <motion.div
              key={phase === "sad" ? "sad" : "greet"}
              className="pixel-mascot-bubble"
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              {phase === "sad" ? "Oh… okay 😔" : "Oh! A visitor 👋"}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSign && (
            <motion.div
              key="sign"
              className="pixel-sign"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              onFocus={cancelClose}
              onBlur={scheduleClose}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
            >
              <div className="pixel-sign-title">Reach me out here!</div>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github size={14} /> GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={14} /> Email me
              </a>
              <button type="button" className="pixel-sign-dismiss" onClick={walkAway}>
                Please walk away
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {startled && (
            <motion.span
              className="pixel-mascot-alert"
              initial={{ opacity: 0, y: 6, scale: 0.4 }}
              animate={{ opacity: 1, y: 0, scale: 1.15 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 600, damping: 14 }}
            >
              !
            </motion.span>
          )}
        </AnimatePresence>

        {sleeping && !reduce && (
          <div className="pixel-mascot-zs" aria-hidden="true">
            {["z", "zz", "zzz…"].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: [0, 8, 14, 22],
                  y: [0, -14, -28, -42],
                  scale: [0.6, 1, 1.05, 1.1],
                }}
                transition={{ duration: 2.7, repeat: Infinity, delay: i * 0.9, ease: "easeOut" }}
                style={{ fontSize: `${0.75 + i * 0.15}rem` }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        )}

        <motion.button
          type="button"
          className="pixel-mascot-button"
          aria-label="Contact links"
          aria-expanded={showSign}
          disabled={sad}
          onMouseEnter={enterCharacter}
          onMouseLeave={leaveCharacter}
          onFocus={enterCharacter}
          onBlur={leaveCharacter}
          onClick={() => (showSign ? setSignUp(false) : enterCharacter())}
          animate={
            startled
              ? { y: [0, -16, 0], scaleY: [1, 1.08, 0.92, 1], scaleX: [1, 0.95, 1.05, 1] }
              : sleeping
                ? { scaleY: [1, 1.025, 1], y: 0 }
                : leaving
                  ? { y: [0, -2, 0], scaleY: 1, scaleX: 1 }
                  : eating && step.chewing && step.mouth === MOUTH_CHEW_OPEN
                    ? { y: 1, scaleY: 0.985, scaleX: 1.01 }
                    : { y: 0, scaleY: 1, scaleX: 1 }
          }
          transition={
            startled
              ? { duration: 0.55, ease: "easeOut" }
              : sleeping
                ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                : leaving
                  ? { duration: 0.34, repeat: Infinity, ease: "easeInOut" }
                  : eating && step.chewing
                    ? { duration: 0.12, ease: "easeOut" }
                    : { type: "spring", stiffness: 400, damping: 18 }
          }
          style={{ transformOrigin: "50% 100%" }}
        >
          <svg
            viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`}
            width={SPRITE_W * SCALE}
            height={SPRITE_H * SCALE}
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <Sprite layers={layers} />
          </svg>
        </motion.button>
      </div>
      <div className="pixel-mascot-shadow" aria-hidden="true" />
    </motion.div>
  );
}
