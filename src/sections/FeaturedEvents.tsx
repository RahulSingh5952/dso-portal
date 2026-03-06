'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_EVENTS = [
  {
    id: "ev-1",
    title: "Concert Night",
    date: "Sat • 7:00 PM",
    description: "Massive crowd, lights and music on the main stage.",
    image: "/featured/featured1.png",
    href: "/events",
  },
  {
    id: "ev-2",
    title: "Farewell Wall",
    date: "Sun • 3:00 PM",
    description: "Batch signatures and photos at the alumni backdrop.",
    image: "/featured/featured2.png",
    href: "/events",
  },
  {
    id: "ev-3",
    title: "Cultural Procession",
    date: "Mon • 5:00 PM",
    description: "Traditional celebration with colors and flags on campus.",
    image: "/featured/featured3.png",
    href: "/events",
  },
  {
    id: "ev-4",
    title: "Journalism Summit 2026",
    date: "Tue • 11:00 AM",
    description: "New Age Journalism — beyond newsrooms.",
    image: "/featured/featured4.png",
    href: "/events",
  },
  {
    id: "ev-5",
    title: "Leaders’ Meet",
    date: "Wed • 2:00 PM",
    description: "Interaction with administration and core team.",
    image: "/featured/featured5.png",
    href: "/events",
  },
] as const;

export default function FeaturedEvents() {
  const marqueeEvents = [...FEATURED_EVENTS, ...FEATURED_EVENTS];

  return (
    <section className="border-b border-white/10 bg-slate-950/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Featured Events
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            A live window into what student organizations are hosting this season.
          </p>
          <div className="mx-auto mt-5 h-px w-20 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-500" />
        </motion.div>

        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            View all events <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Horizontal auto-moving carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mt-10 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-r from-slate-950/95 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-l from-slate-950/95 to-transparent" />

          <div className="featured-marquee-track flex gap-6">
            {marqueeEvents.map((event, index) => (
              <Link
                key={`${event.id}-${index}`}
                href={event.href}
                className="group pointer-events-auto relative flex min-w-[220px] max-w-xs flex-col rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-violet-500/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-500/25 sm:min-w-[260px] sm:p-5 lg:min-w-[300px]"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 320px, 60vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {event.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-violet-300/90 sm:text-sm">
                  {event.date}
                </p>
                <p className="mt-2 line-clamp-2 text-xs text-slate-400 sm:text-sm">
                  {event.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
