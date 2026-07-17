import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";

export const Route = createFileRoute("/deposits")({
  head: () => ({
    meta: [
      { title: "Deposits & Fixed Deposit — BCCB" },
      { name: "description", content: "Fixed Deposit rates up to 7.5% p.a. Senior Citizens get +0.5% extra. Open online in minutes." },
      { property: "og:title", content: "Deposits & FD — BCCB" },
      { property: "og:description", content: "Earn more on your savings." },
    ],
  }),
  component: DepositsPage,
});

const rates = [
  ["7 – 14 days", "3.50%", "4.00%"],
  ["15 – 45 days", "4.25%", "4.75%"],
  ["46 – 90 days", "5.00%", "5.50%"],
  ["91 – 180 days", "5.75%", "6.25%"],
  ["181 days – 1 yr", "6.50%", "7.00%"],
  ["1 – 2 yrs", "7.00%", "7.50%"],
  ["2 – 3 yrs", "7.25%", "7.75%"],
  ["3 – 5 yrs", "7.50%", "8.00%"],
  ["5 – 10 yrs", "7.25%", "7.75%"],
];

const products = [
  ["Regular FD", "Standard FD with flexible tenures."],
  ["Senior Citizen FD", "+0.5% over regular rates."],
  ["Tax Saver FD", "5-year lock-in, qualifies for 80C deduction."],
  ["Flexi FD", "Liquidity of savings + returns of FD."],
  ["Recurring Deposit", "Monthly savings, locked-in returns."],
  ["Cumulative vs Non-Cumulative", "Choose payout or reinvestment."],
];

function DepositsPage() {
  return (
    <>
      <PageHero
        eyebrow="Deposits"
        title="Grow Your Savings with Confidence"
        subtitle="FD rates up to 7.5% p.a. · DICGC-insured · Online booking"
        image="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Deposits" }]}
      />

      <section className="py-20">
        <Container>
          <SectionTitle title="Fixed Deposit Interest Rates" subtitle="Rates effective from 1 June 2025. Subject to change." />
          <div className="overflow-x-auto rounded-xl border border-border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gold text-navy">
                <tr>
                  <th className="px-5 py-3 text-left">Tenure</th>
                  <th className="px-5 py-3 text-left">Regular Rate</th>
                  <th className="px-5 py-3 text-left">Senior Citizen Rate</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-bg-subtle" : ""}>
                    <td className="px-5 py-3 font-medium text-navy">{r[0]}</td>
                    <td className="px-5 py-3 font-mono text-text-body">{r[1]} p.a.</td>
                    <td className="px-5 py-3 font-mono text-gold font-semibold">{r[2]} p.a.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container>
          <SectionTitle title="Deposit Products" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(([n, d]) => (
              <div key={n} className="bg-white p-6 rounded-2xl border border-border hover:border-gold transition">
                <div className="font-display font-bold text-navy text-lg">{n}</div>
                <p className="text-text-body text-sm mt-2">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle center title="Open an FD Online in 3 Steps" />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Log in to Net Banking", "Choose amount & tenure", "Confirm — done!"].map((s, i) => (
              <div key={s} className="bg-navy text-white p-6 rounded-2xl text-center">
                <div className="font-display text-gold text-4xl font-bold">{i + 1}</div>
                <div className="mt-3 font-medium">{s}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}