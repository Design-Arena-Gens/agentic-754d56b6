type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export function ExperienceCard({
  company,
  role,
  period,
  description,
  achievements,
  stack
}: ExperienceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-midnight-900/60 p-8 transition hover:border-accent-400/60">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/0 via-accent-500/0 to-accent-500/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">{role}</h3>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-300/70">
              {company}
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            {period}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
        <ul className="space-y-3 text-sm text-white/70">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3">
              <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                ★
              </span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {stack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/70"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
