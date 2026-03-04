'use client';

import { motion } from "framer-motion";

export default function HighlightBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-6 shadow-lg shadow-slate-950/60 backdrop-blur-md sm:backdrop-blur-xl transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] sm:px-7 sm:py-7"
    >
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-violet-400/50" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
