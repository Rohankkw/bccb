import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center kenburns" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative h-full mx-auto max-w-[1320px] px-4 flex flex-col justify-end pb-12">
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-xs text-white/70 mb-4">
            <Link to="/" className="hover:text-gold">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={12} />
                {c.to ? <Link to={c.to} className="hover:text-gold">{c.label}</Link> : <span className="text-gold">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="inline-flex w-fit px-3 py-1 rounded-full bg-gold/20 text-gold-light border border-gold/40 text-xs font-medium mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl reveal">{title}</h1>
        {subtitle && <p className="text-white/85 mt-3 max-w-2xl text-base md:text-lg reveal">{subtitle}</p>}
      </div>
    </section>
  );
}