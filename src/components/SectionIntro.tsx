import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base text-white/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
