'use client';

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsTile({
  href,
  value,
  label,
}: {
  href: string;
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState<string>(value);

  const parsed = useMemo(() => {
    const numMatch = value.match(/\d+/);
    const num = numMatch ? parseInt(numMatch[0], 10) : 0;
    const plus = value.includes("+");
    const suffix = plus ? "+" : value.replace(/\d+/g, "").trim();
    return { num, suffix };
  }, [value]);

  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const end = parsed.num;
    const duration = 1200;
    const startTs = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplay(`${current}${parsed.suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed.num, parsed.suffix]);

  return (
    <Link
      href={href}
      className="group block"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-lg shadow-slate-950/60 backdrop-blur-xl transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] sm:p-6"
      >
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition group-hover:ring-violet-400/50" />
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          <div className="absolute -top-2 left-0 right-0 mx-auto h-8 w-24 rounded-full bg-violet-500/10 blur-md number-pulse" />
          <div className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            {display}
          </div>
          <div className="mt-1 text-slate-400 group-hover:text-slate-300">
            {label}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
