'use client';

import { FACULTY_MENTORS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Faculty() {
  return (
    <section className="border-b border-white/10 bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Our Faculty Mentors
          </h2>
          <p className="mt-2 text-slate-400">
            Dedicated advisors guiding student organizations
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {FACULTY_MENTORS.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultyCard({
  faculty,
}: {
  faculty: (typeof FACULTY_MENTORS)[number];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all hover:border-violet-500/30 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-violet-500/5"
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600/30 to-blue-600/30 ring-2 ring-white/10">
        <span className="text-2xl text-slate-400">👤</span>
      </div>
      <h3 className="mt-4 font-semibold text-white">{faculty.name}</h3>
      <p className="mt-1 text-sm font-medium text-slate-400">
        {faculty.designation}
      </p>
      <p className="mt-2 text-sm text-slate-500">{faculty.description}</p>
    </motion.article>
  );
}
