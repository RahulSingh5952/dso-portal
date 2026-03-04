'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function BulletinBox({
  title = "Current Bulletin",
  items,
}: {
  title?: string;
  items: string[];
}) {
  const controls = useAnimationControls();
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused) {
      controls.stop();
      return;
    }
    controls.start({
      y: ["0%", "-50%"],
      transition: { duration: 24, ease: "linear", repeat: Infinity },
    });
  }, [controls, paused]);

  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg shadow-slate-950/60 backdrop-blur-md sm:backdrop-blur-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {title}
        </h3>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          <span className="live-dot" />
          LIVE
        </span>
      </div>
      <div
        ref={containerRef}
        onScroll={() => setPaused(true)}
        className="relative mt-4 h-60 sm:h-64 overflow-y-auto px-6 pb-6 thin-scrollbar"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-6 v-scroll-mask-top" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 v-scroll-mask-bottom" />
        <motion.div animate={controls} className="space-y-3 will-change-transform">
          {[...items, ...items].map((text, idx) => (
            <div
              key={`${text}-${idx}`}
              className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-300"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
