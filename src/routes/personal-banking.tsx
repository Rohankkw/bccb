import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/personal-banking")({
  head: () => ({
    meta: [
      { title: "Personal Banking — BCCB" },
      { name: "description", content: "Savings, current, fixed deposit, NRI and salary accounts from BCCB. Open an account in minutes." },
      { property: "og:title", content: "Personal Banking — BCCB" },
      { property: "og:description", content: "Accounts designed for your everyday life." },
    ],
  }),
  component: PersonalBanking,
});

const products = [
  { name: "Savings Account", min: "₹1,000", rate: "4.0% p.a.", features: ["Free Rupay Debit Card", "Net & Mobile Banking", "Free passbook & cheque book"] },
  { name: "Current Account", min: "₹10,000", rate: "—", features: ["High transaction limits", "Multi-city cheque facility", "Free RTGS / NEFT"] },
  { name: "Fixed Deposit", min: "₹5,000", rate: "Up to 7.5% p.a.", features: ["Flexible tenure 7d–10y", "Auto-renewal option", "Loan against FD"] },
  { name: "Recurring Deposit", min: "₹500/mo", rate: "Up to 7.0% p.a.", features: ["Tenure 6m–10y", "Disciplined savings", "Premature closure allowed"] },
  { name: "NRI Account", min: "₹10,000", rate: "Best in class", features: ["NRE / NRO / FCNR", "Repatriable funds", "Dedicated relationship manager"] },
  { name: "Salary Account", min: "Zero", rate: "4.0% p.a.", features: ["Zero balance", "Overdraft facility", "Free family savings account"] },
];

function PersonalBanking() {
  return (
    <>
      <PageHero
        eyebrow="Personal Banking"
        title="Accounts that grow with you"
        subtitle="From your first paycheck to retirement — we have the right account for every stage."
        image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Personal Banking" }]}
      />

      <section className="py-20">
        <Container>
          <SectionTitle title="Choose Your Account" subtitle="Six products. One promise — your money, your control." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-border p-7 hover:border-gold hover:shadow-card transition flex flex-col">
                <div className="font-display text-xl text-navy font-bold">{p.name}</div>
                <div className="text-text-muted text-xs mt-1">Min balance: <span className="font-mono text-navy">{p.min}</span></div>
                {p.rate !== "—" && (
                  <span className="inline-flex w-fit mt-3 px-3 py-1 rounded-full bg-gold-pale text-navy text-xs font-mono">{p.rate}</span>
                )}
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-text-body">
                      <Check size={16} className="text-success mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-6">
                  <button className="flex-1 h-10 rounded-md border border-navy text-navy text-sm font-medium hover:bg-bg-subtle">Learn More</button>
                  <button className="flex-1 h-10 rounded-md bg-gold text-navy text-sm font-semibold hover:bg-gold-light">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container>
          <SectionTitle title="Account Comparison" />
          <div className="overflow-x-auto rounded-xl border border-border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  {["Feature", "Savings", "Current", "Salary", "NRI"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Min Balance", "₹1,000", "₹10,000", "Zero", "₹10,000"],
                  ["Interest Rate", "4.0%", "—", "4.0%", "Variable"],
                  ["Debit Card", "Free", "Free", "Free", "Free"],
                  ["Net Banking", "✓", "✓", "✓", "✓"],
                  ["Cheque Book", "Free", "Unlimited", "Free", "On request"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-bg-subtle" : ""}>
                    {row.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-navy" : "text-text-body font-mono"}`}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle title="Documents Required" />
          <div className="max-w-2xl space-y-3">
            {[
              ["KYC Documents", "PAN Card (mandatory) and one valid photo ID."],
              ["Photo ID Options", "Aadhaar, Passport, Driving License, Voter ID."],
              ["Address Proof", "Aadhaar, recent utility bill (≤ 3 months), rent agreement."],
              ["Photograph", "Two recent passport-size photographs."],
            ].map(([t, d]) => (
              <details key={t as string} className="group bg-white border border-border rounded-lg p-4">
                <summary className="font-semibold text-navy cursor-pointer flex justify-between items-center">{t} <ArrowRight size={14} className="text-gold group-open:rotate-90 transition" /></summary>
                <p className="text-text-body text-sm mt-3">{d}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}