"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <nav className="glass rounded-2xl px-6 py-3 flex items-center justify-between">

        <div className="flex gap-6 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-white/80 hover:text-white"
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
