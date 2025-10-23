import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  outcome: string;
  tech: string[];
  link?: string;
};

export function ProjectCard({
  name,
  description,
  outcome,
  tech,
  link
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-midnight-900/60 p-8 transition hover:border-accent-400/60">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative space-y-4">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-white/70">{description}</p>
        <p className="text-sm font-medium text-accent-300/90">
          Impact: {outcome}
        </p>
      </div>
      <div className="relative mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
        {link ? (
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:text-accent-200"
          >
            View details
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
