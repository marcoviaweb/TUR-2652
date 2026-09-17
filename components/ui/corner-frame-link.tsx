"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type CornerFrameLinkProps = { href: string; children: ReactNode; className?: string };

// Adapted for TUR-2652 from the 21st.dev Corner Frame Animated Button pattern.
export function CornerFrameLink({ href, children, className }: CornerFrameLinkProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.a
      href={href}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
      className={cn("group relative inline-flex min-h-13 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ffd35a] px-7 text-[15px] font-extrabold text-[#071a35] shadow-[0_10px_35px_rgba(255,211,90,.25)] outline-none focus-visible:ring-4 focus-visible:ring-white/70", className)}
    >
      <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-24deg] bg-white/55 blur-md transition-transform duration-500 group-hover:translate-x-[440%]" aria-hidden="true" />
      <span className="absolute left-1.5 top-1.5 size-2 border-l-2 border-t-2 border-[#071a35]/35" aria-hidden="true" />
      <span className="absolute bottom-1.5 right-1.5 size-2 border-b-2 border-r-2 border-[#071a35]/35" aria-hidden="true" />
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
