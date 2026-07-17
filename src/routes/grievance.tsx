import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { FileText, Search, ShieldCheck, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/grievance")({
  head: () => ({
    meta: [
      { title: "Grievance Redressal — BCCB" },
      { name: "description", content: "Lodge or track a complaint with BCCB. RBI-compliant escalation matrix and Banking Ombudsman details." },
      { property: "og:title", content: "Grievance Redressal — BCCB" },
      { property: "og:description", content: "We're here to help resolve your concern." },
    ],
  }),
  component: GrievancePage,
});

function GrievancePage() {
  const [ref, setRef] = useState<string | null>(null);
  const steps = [
    [MessageCircle, "Reach out", "Speak to your branch or call us."],
    [FileText, "Lodge online", "Fill the complaint form below."],
    [Search, "Track status", "Use your reference number."],
    [ShieldCheck, "Escalate", "Use the matrix below if unresolved."],
  ];
  return (
    <>
      <PageHero
        eyebrow="We're here to help"
        title="Grievance Redressal"
        subtitle="Your voice matters. We're committed to resolving concerns quickly and fairly."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Grievance" }]}
      />

      <section className="py-16">
        <Container>
          <SectionTitle center title="How to Lodge a Complaint" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(([Icon, t, d], i) => (
              <div key={t as string} className="bg-white p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3">
                  <Icon className="text-gold" size={24} />
                  <span className="font-display text-gold text-2xl font-bold">0{i + 1}</span>
                </div>
                <div className="font-display text-lg text-navy mt-3">{t as string}</div>
                <p className="text-text-body text-sm mt-1">{d as string}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-subtle">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-navy font-bold">Lodge a Complaint</h3>
              <form
                className="space-y-3 mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setRef("BCCB-" + Math.random().toString(36).slice(2, 8).toUpperCase());
                }}
              >
                <input required placeholder="Account Number" className="w-full h-11 px-4 rounded-md border border-border" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required placeholder="Full Name" className="h-11 px-4 rounded-md border border-border" />
                  <input required placeholder="Phone" className="h-11 px-4 rounded-md border border-border" />
                </div>
                <input required type="email" placeholder="Email" className="w-full h-11 px-4 rounded-md border border-border" />
                <select className="w-full h-11 px-4 rounded-md border border-border bg-white">
                  {["Account", "Loan", "ATM / Card", "Net Banking", "Staff Behavior", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
                <textarea required rows={4} placeholder="Describe your complaint…" className="w-full p-3 rounded-md border border-border" />
                <input type="file" className="text-sm" />
                <button className="w-full h-11 rounded-md bg-navy text-gold font-semibold">Submit Complaint</button>
              </form>
              {ref && (
                <div className="mt-5 p-4 bg-success/10 border border-success/40 rounded-md text-sm">
                  ✓ Complaint registered. Your reference number is <span className="font-mono font-bold text-navy">{ref}</span>. We'll respond within 7 working days.
                </div>
              )}
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-navy font-bold">Track Existing Complaint</h3>
              <div className="flex gap-2 mt-5">
                <input placeholder="Enter reference number" className="flex-1 h-11 px-4 rounded-md border border-border" />
                <button className="h-11 px-5 rounded-md bg-gold text-navy font-semibold">Track</button>
              </div>

              <h3 className="font-display text-xl text-navy font-bold mt-8">Escalation Matrix</h3>
              <div className="mt-3 space-y-3 text-sm">
                {[
                  ["Level 1", "Branch Manager", "7 working days"],
                  ["Level 2", "Nodal Officer — nodal@bccb.co.in", "15 working days"],
                  ["Level 3", "RBI Banking Ombudsman", "30 working days"],
                ].map(([l, w, t]) => (
                  <div key={l} className="p-3 rounded-md bg-bg-subtle border-l-4 border-gold">
                    <div className="font-semibold text-navy">{l} — {w}</div>
                    <div className="text-text-muted text-xs mt-1">Response within {t}</div>
                  </div>
                ))}
              </div>
              <a href="https://cms.rbi.org.in" className="inline-block mt-5 text-gold font-medium text-sm">RBI Banking Ombudsman →</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}