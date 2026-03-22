"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const active = pathname === "/projects" ? "/projects" : "/";

  return (
    <div className="navbar-wrap">
      <nav className="glass navbar-shell" aria-label="Primary">
        <div className="navbar-links">
          <Link href="/" className="navbar-link">
            Home
            {active === "/" ? <motion.span layoutId="navbar-indicator" className="navbar-indicator" /> : null}
          </Link>
          <Link href="/projects" className="navbar-link">
            Projects
            {active === "/projects" ? (
              <motion.span layoutId="navbar-indicator" className="navbar-indicator" />
            ) : null}
          </Link>
        </div>
      </nav>
    </div>
  );
}
