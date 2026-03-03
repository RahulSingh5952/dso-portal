import Link from "next/link";
import { STATS_TILES } from "@/lib/constants";

export default function StatsTiles() {
  return (
    <section className="border-b border-white/10 bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS_TILES.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-violet-500/30 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-violet-500/10"
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {tile.value}
              </span>
              <span className="mt-2 text-slate-400 group-hover:text-slate-300">
                {tile.label}
              </span>
              <span className="mt-3 inline-flex items-center text-sm font-medium text-violet-400 opacity-0 transition-opacity group-hover:opacity-100">
                Explore
                <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
