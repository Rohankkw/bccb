import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { X } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at BCCB — Grow with Us" },
      { name: "description", content: "Join Bassein Catholic Co-operative Bank. Explore current openings across Maharashtra." },
      { property: "og:title", content: "Careers at BCCB" },
      { property: "og:description", content: "Stability, growth and community." },
    ],
  }),
  component: CareersPage,
});

const jobs = [
  { title: "Branch Manager", dept: "Operations", loc: "Vasai", type: "Full-time", jd: "Lead branch operations, drive business and ensure compliance." },
  { title: "Relationship Manager — Loans", dept: "Lending", loc: "Virar", type: "Full-time", jd: "Source and manage home, personal and business loan customers." },
  { title: "Customer Service Executive", dept: "Front-office", loc: "Mira Road", type: "Full-time", jd: "First point of contact for members at the branch." },
  { title: "IT Systems Engineer", dept: "Technology", loc: "Vasai HO", type: "Full-time", jd: "Support core banking, network and security infrastructure." },
  { title: "Internal Auditor", dept: "Audit", loc: "Vasai HO", type: "Full-time", jd: "Conduct branch and process audits per RBI guidelines." },
];

function CareersPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow With BCCB"
        subtitle="Stability, growth and a community-first culture."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Careers" }]}
      />

      <section className="py-20">
        <Container>
          <SectionTitle center title="Why work at BCCB" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Stability", "80+ years of solid heritage."],
              ["Growth", "Clear career ladders and learning."],
              ["Community", "Make a difference where you live."],
              ["Benefits", "Health, leave, loans at staff rates."],
            ].map(([t, d]) => (
              <div key={t} className="bg-white p-6 rounded-2xl border border-border">
                <div className="font-display text-xl text-navy">{t}</div>
                <p className="text-text-body text-sm mt-2">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container>
          <SectionTitle title="Current Openings" />
          <div className="space-y-4">
            {jobs.map((j) => (
              <div key={j.title} className="bg-white rounded-xl border border-border p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-gold transition">
                <div className="flex-1">
                  <div className="font-display text-lg font-bold text-navy">{j.title}</div>
                  <div className="text-xs text-text-muted mt-1">{j.dept} · {j.loc} · {j.type}</div>
                  <p className="text-sm text-text-body mt-2">{j.jd}</p>
                </div>
                <button onClick={() => setOpen(j.title)} className="h-10 px-5 rounded-md bg-gold text-navy font-semibold hover:bg-gold-light">Apply Now</button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy/70 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl max-w-lg w-full p-7 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gold uppercase tracking-wider">Apply for</div>
                <h3 className="font-display text-2xl text-navy font-bold mt-1">{open}</h3>
              </div>
              <button onClick={() => setOpen(null)} aria-label="Close"><X /></button>
            </div>
            <form className="space-y-3 mt-5" onSubmit={(e) => { e.preventDefault(); alert("Application submitted!"); setOpen(null); }}>
              {["Full Name", "Email", "Phone", "Years of Experience"].map((l) => (
                <input key={l} required placeholder={l} className="w-full h-11 px-4 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
              ))}
              <label className="block">
                <span className="text-sm text-text-body">Resume (PDF)</span>
                <input type="file" accept=".pdf" className="w-full mt-1" />
              </label>
              <textarea placeholder="Cover note (optional)" rows={3} className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
              <button className="w-full h-11 rounded-md bg-navy text-gold font-semibold">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}