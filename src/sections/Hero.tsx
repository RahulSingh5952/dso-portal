'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HERO_SLIDES = [
  {
    id: "slide-1",
    src: "/hero-1.png",
    alt: "Student leaders and faculty at a flagship event",
    label: "Flagship cultural showcase",
  },
  {
    id: "slide-2",
    src: "/hero-2.png",
    alt: "Large student team celebrating after an event",
    label: "Student leadership in action",
  },
  {
    id: "slide-3",
    src: "/hero-3.png",
    alt: "Students gathered outdoors during a campus activity",
    label: "Campus-wide experiences",
  },
  {
    id: "slide-4",
    src: "/hero-4.png",
    alt: "Team celebrating on stage after a competition",
    label: "Competitions & bootcamps",
  },
] as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/25 via-transparent to-blue-950/25" />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15 md:opacity-20"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
          </linearGradient>
        </defs>
        {/* Dancing figure (top-right) */}
        <g transform="translate(980,120)" fill="none" stroke="url(#heroLine)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="0" cy="0" r="10" />
          <path d="M0 10 V46" />
          <path d="M0 22 L-18 10" />
          <path d="M0 22 L18 6" />
          <path d="M0 46 L-16 66" />
          <path d="M0 46 L16 64" />
          {/* motion lines */}
          <path d="M-32 6 Q-18 -2 -8 0" opacity="0.6" />
          <path d="M28 2 Q14 -6 6 -4" opacity="0.6" />
        </g>
        {/* Singing (mic + notes, mid-right) */}
        <g transform="translate(900,250)" fill="none" stroke="url(#heroLine)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 0 L20 -20" />
          <circle cx="24" cy="-24" r="6" />
          <path d="M20 -20 L28 -12" />
          <path d="M-6 6 L6 -6" />
          {/* music notes */}
          <path d="M60 -10 v-20 l18 -4 v20" />
          <circle cx="60" cy="-6" r="6" />
          <circle cx="78" cy="-12" r="6" />
          <path d="M92 -28 v-16 l16 -4 v16" />
          <circle cx="92" cy="-24" r="5" />
          <circle cx="108" cy="-28" r="5" />
        </g>
        {/* Sports/run (bottom-right) */}
        <g transform="translate(860,380)" fill="none" stroke="url(#heroLine)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* head */}
          <circle cx="0" cy="0" r="9" />
          {/* body */}
          <path d="M0 10 L-6 32 L-26 40" />
          {/* arms */}
          <path d="M-2 18 L18 8" />
          <path d="M-6 24 L-22 18" />
          {/* legs */}
          <path d="M-6 32 L6 56" />
          <path d="M-6 32 L-18 54" />
          {/* ball */}
          <circle cx="34" cy="64" r="8" />
          <path d="M34 56 V72" opacity="0.6" />
          <path d="M26 64 H42" opacity="0.6" />
        </g>
        {/* Subtle guide lines */}
        <path d="M760 60 C860 80, 980 40, 1120 70" stroke="url(#heroLine)" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M780 320 C900 300, 1040 360, 1160 340" stroke="url(#heroLine)" strokeWidth="1" fill="none" opacity="0.45" />
      </svg>
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl hero-orb lg:h-96 lg:w-96" />
      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-56 w-80 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl hero-orb md:h-64 md:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-left lg:text-5xl lg:leading-[1.15]"
            >
              <span className="block">Empowering Student</span>
              <span className="mt-1 block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(129,140,248,0.35)]">
                Organizations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-5 max-w-xl text-center text-base leading-relaxed text-slate-400 sm:text-lg lg:mt-7 lg:text-left lg:pr-4"
            >
              A unified portal to manage, discover, and grow student organizations
              on campus. Powering everything from recruitments to flagship events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/organizations"
                className="w-full rounded-lg bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(129,140,248,0.45)] focus:outline-none focus:ring-2 focus:ring-violet-400/50 sm:w-auto"
              >
                Explore Organizations
              </Link>
              <Link
                href="/events"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-auto"
              >
                View Events
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <div className="relative h-[240px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl shadow-violet-500/30 transition-transform duration-300 hover:scale-[1.02] sm:h-[260px] md:h-[320px] lg:h-[420px]">
              <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-br from-violet-600/20 to-blue-600/20 blur-2xl" />
              {HERO_SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "pointer-events-none opacity-0 translate-x-4"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(min-width: 1024px) 540px, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300/80">
                        Featured campus moments
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {slide.label}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {HERO_SLIDES.map((dot, dotIndex) => (
                        <button
                          key={dot.id}
                          type="button"
                          onClick={() => setActiveIndex(dotIndex)}
                          className={`h-1.5 rounded-full transition-all ${
                            dotIndex === activeIndex
                              ? "w-4 bg-white"
                              : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
