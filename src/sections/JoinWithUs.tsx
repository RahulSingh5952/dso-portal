import Link from "next/link";

export default function JoinWithUs() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Join With Us
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Be part of something bigger. Explore open recruitments and find your
            place in our vibrant community of student organizations.
          </p>
          <Link
            href="/join"
            className="mt-8 inline-flex items-center rounded-lg bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90"
          >
            Explore Open Recruitments
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
