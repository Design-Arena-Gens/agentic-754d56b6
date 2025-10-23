type ApproachCardProps = {
  title: string;
  description: string;
};

export function ApproachCard({ title, description }: ApproachCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-midnight-950/40">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  );
}
