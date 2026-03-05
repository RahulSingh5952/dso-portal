'use client';

import { useEffect, useState } from "react";

export default function BackgroundFX() {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      const listener = () => setReduced(media.matches);
      media.addEventListener?.("change", listener);
      return () => media.removeEventListener?.("change", listener);
    }
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient orbs */}
      <div className={`absolute -top-24 -left-16 h-80 w-80 rounded-full bg-gradient-to-br from-violet-600/25 to-blue-600/25 blur-[90px] ${reduced ? "" : "fx-float fx-slow"}`} />
      <div className={`absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-[110px] ${reduced ? "" : "fx-float fx-slower"}`} />

      {/* Live motion line-art characters */}
      <div className="absolute inset-0">
        {/* Shared gradient stroke via per-SVG defs for isolation */}
        {/* Dancer (top-right, subtle sway) */}
        <svg
          width="120"
          height="120"
          viewBox="-60 -60 120 120"
          className={`absolute right-8 top-16 opacity-25 md:opacity-35 ${reduced ? "" : "fx-sway"}`}
          fill="none"
        >
          <defs>
            <linearGradient id="bgfxStroke1" x1="-60" y1="0" x2="60" y2="0">
              <stop offset="0%" stopColor="rgba(139,92,246,0.7)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.7)" />
            </linearGradient>
          </defs>
          <g stroke="url(#bgfxStroke1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="0" cy="-16" r="8" />
            <path d="M0 -8 L 0 18" />
            <path d="M0 -2 L -18 -10" />
            <path d="M0 -2 L 18 -12" />
            <path d="M0 18 L -12 36" />
            <path d="M0 18 L 12 34" />
          </g>
        </svg>

        {/* Singer (mid-left, bobbing mic + notes) */}
        <svg
          width="140"
          height="140"
          viewBox="-70 -70 140 140"
          className={`absolute left-10 top-1/3 opacity-20 md:opacity-30 ${reduced ? "" : "fx-bob"}`}
          fill="none"
        >
          <defs>
            <linearGradient id="bgfxStroke2" x1="-70" y1="0" x2="70" y2="0">
              <stop offset="0%" stopColor="rgba(236,72,153,0.7)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0.7)" />
            </linearGradient>
          </defs>
          <g stroke="url(#bgfxStroke2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="-10" cy="-16" r="7" />
            <path d="M-10 -9 L -10 16" />
            <path d="M-10 -2 L 10 -14" />
            <circle cx="16" cy="-18" r="5" />
            <path d="M10 -14 L 16 -8" />
            {/* notes */}
            <path d="M32 -18 v-16 l14 -4 v16" />
            <circle cx="32" cy="-14" r="4.5" />
            <circle cx="46" cy="-18" r="4.5" />
          </g>
        </svg>

        {/* Runner/Sports (bottom-right, slight forward drift) */}
        <svg
          width="140"
          height="140"
          viewBox="-70 -70 140 140"
          className={`absolute bottom-24 right-24 opacity-20 md:opacity-30 ${reduced ? "" : "fx-drift"}`}
          fill="none"
        >
          <defs>
            <linearGradient id="bgfxStroke3" x1="-70" y1="0" x2="70" y2="0">
              <stop offset="0%" stopColor="rgba(99,102,241,0.7)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.7)" />
            </linearGradient>
          </defs>
          <g stroke="url(#bgfxStroke3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="0" cy="-16" r="7.5" />
            <path d="M0 -8 L -6 10 L -24 18" />
            <path d="M-2 0 L 18 -6" />
            <path d="M-6 10 L 6 30" />
            <path d="M-6 10 L -16 28" />
            <circle cx="28" cy="32" r="6.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
