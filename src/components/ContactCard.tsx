import Link from "next/link";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
};

export function ContactCard({ label, value, href }: ContactCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 rounded-3xl border border-white/10 bg-midnight-900/60 p-6 transition hover:border-accent-400/60"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
        {label}
      </span>
      <span className="text-lg font-medium text-accent-200">{value}</span>
    </Link>
  );
}
