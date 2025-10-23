export function Footer() {
  return (
    <footer className="bg-midnight-900/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Aftab. Crafted with reliability in mind.
        </p>
        <p className="text-white/40">
          Open to principal SRE leadership, advisory, and platform automation
          engagements.
        </p>
      </div>
    </footer>
  );
}
