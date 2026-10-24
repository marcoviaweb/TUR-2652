"use client";

import { motion, useReducedMotion } from "motion/react";

export function ProductTwoVisual({ variant = "journey", className = "" }: { variant?: string; className?: string }) {
  const reduce = useReducedMotion();
  const float = reduce ? undefined : { y: [0, -8, 0] };
  return <div className={`p2-vector p2-vector-${variant} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 720 460" role="img">
      <defs><linearGradient id={`sky-${variant}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#122a32"/><stop offset="1" stopColor="#31534f"/></linearGradient><linearGradient id={`clay-${variant}`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e7ae78"/><stop offset="1" stopColor="#a95035"/></linearGradient></defs>
      <rect width="720" height="460" rx="30" fill={`url(#sky-${variant})`} />
      <circle cx="590" cy="86" r="48" fill="#f3d6a2" opacity=".9" />
      <path d="M0 286 75 190l38 67 52-144 61 142 42-94 61 127 54-130 60 115 44-75 56 95 50-134 75 127 42-51v225H0Z" fill={`url(#clay-${variant})`} />
      <path d="M0 344c120-22 212-11 320 24 110 36 250 34 400-8v100H0Z" fill="#edc28d" />
      <path d="M92 74h225" stroke="#f7e7ca" strokeWidth="3" opacity=".5"/><path d="m190 74 25 34 25-34" fill="#132a32" stroke="#f7e7ca" strokeWidth="3"/><rect x="201" y="74" width="28" height="25" rx="5" fill="#df6c47"/>
      <g transform="translate(474 280)"><circle cx="28" cy="18" r="17" fill="#eab68e"/><path d="M12 34c12-7 26-7 38 0l10 66H1Z" fill="#143a42"/><path d="m10 98-12 55m55-55 10 55" stroke="#17272c" strokeWidth="12" strokeLinecap="round"/><path d="m9 53-35 37m78-38 31 21" stroke="#eab68e" strokeWidth="10" strokeLinecap="round"/><path d="m-30 84 14-16 12 14-13 14Z" fill="#d75e3e"/></g>
      <g transform="translate(565 305) scale(.82)"><circle cx="28" cy="18" r="17" fill="#9c684b"/><path d="M12 34c12-7 26-7 38 0l10 66H1Z" fill="#f1c56f"/><path d="m10 98-12 55m55-55 10 55" stroke="#17272c" strokeWidth="12" strokeLinecap="round"/><path d="m9 53-31 35m74-35 32 20" stroke="#9c684b" strokeWidth="10" strokeLinecap="round"/></g>
      <motion.g animate={float} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}><rect x="92" y="254" width="164" height="82" rx="16" fill="#fff7e8"/><rect x="108" y="271" width="10" height="48" rx="5" fill="#df6c47"/><path d="M135 276h91M135 296h72M135 316h48" stroke="#24383c" strokeWidth="7" strokeLinecap="round" opacity=".75"/></motion.g>
      <motion.path d="M256 295c72-8 92-80 171-50 47 18 52 79 107 74" fill="none" stroke="#f5d290" strokeWidth="3" strokeDasharray="8 10" animate={reduce ? undefined : { strokeDashoffset: [0, -36] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}/>
    </svg>
  </div>;
}
