'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    id: "slide-1",
    src: "/images/hero-1.jpg",
    alt: "Students collaborating at a tech meetup",
    label: "Tech communities",
  },
  {
    id: "slide-2",
    src: "/images/hero-2.jpg",
    alt: "Auditorium filled during cultural night",
    label: "Cultural nights",
  },
  {
    id: "slide-3",
    src: "/images/hero-3.jpg",
    alt: "Student leaders planning events",
    label: "Student leadership",
  },
  {
    id: "slide-4",
    src: "/images/hero-4.jpg",
    alt: "Hackathon participants working overnight",
    label: "Hackathons & fests",
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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-blue-950/20" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl lg:h-96 lg:w-96" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-64 md:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-left lg:text-5xl">
              <span className="block">Empowering Student</span>
              <span className="mt-1 block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(129,140,248,0.35)]">
                Organizations
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-center text-base leading-relaxed text-slate-400 sm:text-lg lg:mt-6 lg:text-left">
              A unified portal to manage, discover, and grow student organizations
              on campus. Powering everything from recruitments to flagship events.
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/organizations"
                className="w-full rounded-lg bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90 sm:w-auto"
              >
                Explore Organizations
              </Link>
              <Link
                href="/events"
                className="w-full rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                View Events
              </Link>
            </div>
          </div>

          {/* Right: Image carousel */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[240px] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl shadow-violet-500/20 sm:h-[260px] md:h-[320px] lg:h-[420px]">
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
                  {/* Gradient + label overlay */}
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
                    {/* Dots */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
