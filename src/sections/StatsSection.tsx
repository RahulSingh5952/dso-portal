'use client';

import HighlightBox from "@/components/HighlightBox";
import BulletinBox from "@/components/BulletinBox";
import StatsTile from "@/components/StatsTile";
import { STATS_TILES } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const announcements = [
    "Club registrations open till Friday",
    "Leadership Summit registrations close tomorrow",
    "Cultural Night auditions this weekend",
    "Tech Fest volunteer onboarding started",
    "New mentorship program for freshers",
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.4 });

  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    leave: { opacity: 0, x: -40, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    leave: { opacity: 0, x: 40, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative border-b border-white/10 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20 blur-[100px]" />
      </div>
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "show" : "leave"}
            className="space-y-6"
          >
            <HighlightBox
              title="Campus Impact"
              description="A unified, modern hub powering organizations, events, and student participation across campus."
            />
            <BulletinBox title="Current Bulletin" items={announcements} />
          </motion.div>
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "show" : "leave"}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS_TILES.map((tile) => (
                <StatsTile
                  key={tile.href}
                  href={tile.href}
                  value={tile.value}
                  label={tile.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
