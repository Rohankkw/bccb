export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] font-medium mb-3 text-gold">{eyebrow}</div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold ${light ? "text-white" : ""}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-base md:text-lg ${light ? "text-white/75" : "text-text-body"}`}>{subtitle}</p>}
    </div>
  );
}