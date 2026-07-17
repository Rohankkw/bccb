import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Home, User, Car, GraduationCap, Briefcase, Coins, Building, Tractor, Wrench, Factory } from "lucide-react";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Loans — BCCB | Home, Personal, Vehicle & Business" },
      { name: "description", content: "Home Loans from 8.75% p.a., plus Personal, Vehicle, Education, Business, Gold and MSME loans from BCCB." },
      { property: "og:title", content: "Loans — BCCB" },
      { property: "og:description", content: "Affordable loans for every milestone." },
    ],
  }),
  component: LoansPage,
});

const loans = [
  { icon: Home, name: "Home Loan", rate: "8.75%", max: "₹2 Cr", tenure: "30 yrs", feats: ["Up to 90% funding", "Step-up EMI option"] },
  { icon: Wrench, name: "Home Renovation", rate: "9.25%", max: "₹50 L", tenure: "15 yrs", feats: ["Quick approval", "Minimal docs"] },
  { icon: User, name: "Personal Loan", rate: "11.50%", max: "₹25 L", tenure: "7 yrs", feats: ["No collateral", "Instant in-principle"] },
  { icon: Car, name: "Vehicle Loan", rate: "9.50%", max: "₹50 L", tenure: "8 yrs", feats: ["2 & 4 wheeler", "Up to 100% on road"] },
  { icon: GraduationCap, name: "Education Loan", rate: "9.00%", max: "₹40 L", tenure: "15 yrs", feats: ["India & abroad", "Moratorium during study"] },
  { icon: Briefcase, name: "Business Loan", rate: "10.50%", max: "₹2 Cr", tenure: "10 yrs", feats: ["Working capital + term", "Flexible repayment"] },
  { icon: Coins, name: "Gold Loan", rate: "8.50%", max: "₹25 L", tenure: "3 yrs", feats: ["Instant disbursement", "Safe vault storage"] },
  { icon: Building, name: "Loan Against Property", rate: "10.00%", max: "₹5 Cr", tenure: "20 yrs", feats: ["Up to 70% LTV", "Residential / commercial"] },
  { icon: Tractor, name: "Agriculture Loan", rate: "7.50%", max: "₹50 L", tenure: "10 yrs", feats: ["Crop & equipment", "Govt. subsidy linked"] },
  { icon: Factory, name: "MSME Loan", rate: "9.75%", max: "₹2 Cr", tenure: "10 yrs", feats: ["Mudra / CGTMSE", "Collateral-free option"] },
];

function LoansPage() {
  return (
    <>
      <PageHero
        eyebrow="Loans"
        title="Loans for Every Milestone"
        subtitle="From your first home to your next big move — we make it possible."
        image="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Loans" }]}
      />

      <section className="py-20">
        <Container>
          <SectionTitle title="Loan Products" subtitle="Ten loan products. Competitive rates. Honest terms." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {loans.map((l) => (
              <div key={l.name} className="bg-white border border-border rounded-2xl p-6 hover:border-gold hover:shadow-card transition flex flex-col">
                <div className="flex items-start justify-between">
                  <l.icon className="text-gold" size={28} />
                  <span className="text-xs px-3 py-1 rounded-full bg-gold-pale text-navy font-mono">From {l.rate} p.a.</span>
                </div>
                <div className="font-display font-bold text-navy text-lg mt-4">{l.name}</div>
                <div className="text-xs text-text-muted mt-1 font-mono">Up to {l.max} · {l.tenure} tenure</div>
                <ul className="text-sm text-text-body mt-3 space-y-1 flex-1">
                  {l.feats.map((f) => <li key={f}>• {f}</li>)}
                </ul>
                <div className="flex gap-2 mt-5">
                  <button className="flex-1 h-10 text-sm font-medium text-navy border border-navy rounded-md hover:bg-bg-subtle">Check Eligibility →</button>
                  <button className="flex-1 h-10 text-sm font-semibold bg-gold text-navy rounded-md hover:bg-gold-light">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EligibilityChecker />
      <Process />
    </>
  );
}

function EligibilityChecker() {
  const [type, setType] = useState<"salaried" | "self">("salaried");
  const [income, setIncome] = useState(75000);
  const [emi, setEmi] = useState(8000);
  const eligible = Math.max(0, Math.round((income - emi) * 60 * (type === "salaried" ? 1 : 0.85)));
  return (
    <section id="calculator" className="py-20 bg-bg-subtle">
      <Container>
        <SectionTitle title="Eligibility Checker" subtitle="See your estimated loan eligibility in seconds." center />
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <label className="text-sm text-navy font-medium">Employment Type</label>
              <div className="flex gap-2 mt-2">
                {(["salaried", "self"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`flex-1 h-10 rounded-md text-sm font-medium border ${type === t ? "bg-navy text-gold border-navy" : "border-border text-text-body hover:border-gold"}`}
                  >{t === "salaried" ? "Salaried" : "Self-employed"}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Monthly Income</span><span className="font-mono text-navy font-semibold">₹{income.toLocaleString("en-IN")}</span></div>
              <input type="range" min={20000} max={500000} step={5000} value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-gold mt-1" />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Existing EMIs</span><span className="font-mono text-navy font-semibold">₹{emi.toLocaleString("en-IN")}</span></div>
              <input type="range" min={0} max={100000} step={1000} value={emi} onChange={(e) => setEmi(Number(e.target.value))} className="w-full accent-gold mt-1" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-navy text-white rounded-xl p-6">
            <div className="text-white/70 text-sm">Estimated Eligible Amount</div>
            <div className="font-display text-gold text-4xl font-bold mt-1">₹{eligible.toLocaleString("en-IN")}</div>
            <p className="text-white/60 text-xs text-center mt-4">Indicative only. Final amount subject to credit appraisal.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    ["Apply Online", "Fill a 2-minute form and get an instant call back."],
    ["Document Check", "Upload documents online or at any branch."],
    ["Credit Approval", "Quick credit appraisal by our local team."],
    ["Disbursement", "Loan amount in your account, fast."],
  ];
  return (
    <section className="py-20">
      <Container>
        <SectionTitle center title="How Loans Work at BCCB" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([t, d], i) => (
            <div key={t} className="bg-white rounded-2xl p-6 border border-border relative">
              <div className="font-display text-6xl text-gold/30 font-bold leading-none">0{i + 1}</div>
              <div className="font-display text-lg text-navy font-bold mt-2">{t}</div>
              <p className="text-text-body text-sm mt-2">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}