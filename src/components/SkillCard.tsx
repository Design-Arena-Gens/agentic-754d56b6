type SkillCardProps = {
  title: string;
  items: string[];
};

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-midnight-900/50 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
