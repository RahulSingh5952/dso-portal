export default function JoinPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Explore Open Recruitments
      </h1>
      <p className="mt-6 text-slate-400">
        Find open recruitments across our student organizations. Static
        placeholder list—database integration coming soon.
      </p>
      <ul className="mt-8 space-y-3">
        {["Tech Club", "Cultural Society", "Sports Council", "Entrepreneurship Cell"].map(
          (org) => (
            <li
              key={org}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-slate-300"
            >
              {org} — Recruitments open
            </li>
          )
        )}
      </ul>
    </section>
  );
}
