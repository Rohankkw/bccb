import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { Download } from "lucide-react";

export const Route = createFileRoute("/interest-rates")({
  head: () => ({
    meta: [
      { title: "Interest Rates — BCCB" },
      { name: "description", content: "Live deposit and loan interest rates from BCCB. Updated regularly." },
      { property: "og:title", content: "Interest Rates — BCCB" },
      { property: "og:description", content: "Latest rates for savings, FDs, RDs and loans." },
    ],
  }),
  component: RatesPage,
});

function Table({ title, rows, head }: { title: string; rows: string[][]; head: string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden mb-8">
      <div className="bg-navy text-white px-6 py-4 flex justify-between items-center">
        <h3 className="font-display text-lg">{title}</h3>
        <button className="text-xs px-3 py-1.5 rounded bg-gold text-navy font-medium inline-flex items-center gap-1"><Download size={12} /> PDF</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gold text-navy">
            <tr>{head.map((h) => <th key={h} className="px-4 py-3 text-left">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-bg-subtle" : ""}>
                {r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-navy" : "font-mono text-text-body"}`}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Interest rates"
        title="Live Interest Rates"
        subtitle="Updated regularly · Effective 1 June 2025"
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Interest Rates" }]}
      />
      <section className="py-16">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-pale text-navy text-sm mb-8">
            ● Rates effective from 1 June 2025 — Subject to change
          </div>

          <Table title="Savings Account" head={["Slab", "Rate p.a."]} rows={[
            ["Up to ₹1 lakh", "4.00%"],
            ["₹1 lakh – ₹10 lakh", "4.25%"],
            ["Above ₹10 lakh", "4.50%"],
          ]} />

          <Table title="Fixed Deposits" head={["Tenure", "Regular", "Senior Citizen"]} rows={[
            ["7 – 90 days", "4.50%", "5.00%"],
            ["91 – 180 days", "5.75%", "6.25%"],
            ["181 – 364 days", "6.50%", "7.00%"],
            ["1 – 2 yrs", "7.00%", "7.50%"],
            ["2 – 5 yrs", "7.50%", "8.00%"],
          ]} />

          <Table title="Recurring Deposits" head={["Tenure", "Rate p.a."]} rows={[
            ["6 m", "6.00%"], ["1 yr", "6.75%"], ["2 yrs", "7.00%"], ["3 yrs", "7.25%"], ["5 yrs", "7.50%"],
          ]} />

          <Table title="Loan Interest Rates" head={["Loan Type", "Rate p.a."]} rows={[
            ["Home Loan", "From 8.75%"],
            ["Personal Loan", "From 11.50%"],
            ["Vehicle Loan", "From 9.50%"],
            ["Education Loan", "From 9.00%"],
            ["Business / MSME", "From 9.75%"],
            ["Gold Loan", "From 8.50%"],
          ]} />

          <Table title="Processing Fees" head={["Product", "Fee"]} rows={[
            ["Home Loan", "0.50% (min ₹5,000)"],
            ["Personal Loan", "1.00% (min ₹1,500)"],
            ["Business Loan", "0.75% (min ₹5,000)"],
            ["FD Premature Closure", "1.00% penalty"],
          ]} />
        </Container>
      </section>
    </>
  );
}