import { heroHighlights, stats } from "@/lib/data";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 md:pt-28"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/50 bg-accent-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-200">
            Site Reliability &amp; DevOps
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Building resilient platforms that let teams ship with confidence.
          </h1>
          <p className="text-lg text-white/70">
            I’m Aftab, a reliability-focused engineer who designs and operates
            cloud platforms for scale. From infrastructure-as-code foundations
            to observability ecosystems and incident response, I help teams
            deliver reliable software faster.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                  ●
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-accent-400"
            >
              Start a conversation
            </Link>
            <Link
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-accent-400 hover:text-white"
            >
              Explore case studies
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Impact Snapshot
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-midnight-900/60 p-4"
              >
                <p className="text-2xl font-semibold text-accent-300">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
