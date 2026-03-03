import { FUTURE_FEATURES } from "@/lib/constants";

export default function FutureFeatures() {
  return (
    <section className="border-b border-white/10 bg-slate-950/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Coming Soon
          </h2>
          <p className="mt-2 text-slate-400">
            Features we&apos;re building for the future
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FUTURE_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
}: {
  feature: (typeof FUTURE_FEATURES)[number];
}) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 opacity-90 backdrop-blur transition-all hover:border-violet-500/30 hover:bg-white/[0.07] hover:opacity-100">
      {feature.comingSoon && (
        <span className="absolute right-4 top-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
          Coming Soon
        </span>
      )}
      <h3 className="pr-24 font-semibold text-white">{feature.title}</h3>
      <p className="mt-2 text-sm text-slate-500">
        Module ready for activation in a future release.
      </p>
    </div>
  );
}
