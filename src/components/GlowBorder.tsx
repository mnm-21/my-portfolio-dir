export function GlowBorder({ children }: { children: React.ReactNode }) {
  return <div className="transition-shadow duration-300 hover:shadow-[var(--accent-glow)]">{children}</div>;
}
