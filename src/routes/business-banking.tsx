import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Briefcase, TrendingUp, FileText, Banknote, Users, Gauge } from "lucide-react";

export const Route = createFileRoute("/business-banking")({
  head: () => ({
    meta: [
      { title: "Business Banking — BCCB" },
      { name: "description", content: "Current accounts, MSME loans, working capital and trade finance for businesses across Maharashtra." },
      { property: "og:title", content: "Business Banking — BCCB" },
      { property: "og:description", content: "Fueling Maharashtra's small businesses." },
    ],
  }),
  component: BizPage,
});

const products = [
  { icon: Briefcase, title: "Business Current Account", d: "High transaction limits, multi-city cheque, free RTGS/NEFT." },
  { icon: Banknote, title: "MSME Loans", d: "Mudra, CGTMSE & stand-up schemes with quick approval." },
  { icon: TrendingUp, title: "Working Capital", d: "Cash credit, overdraft and bill discounting." },
  { icon: FileText, title: "Trade Finance", d: "LC, BG, export credit and inland bills." },
  { icon: Gauge, title: "Business FD", d: "Park surplus funds with attractive rates." },
  { icon: Users, title: "Cash Management", d: "Collections, payouts, bulk salary transfers." },
];

function BizPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Banking"
        title="Fuel for Maharashtra's Businesses"
        subtitle="MSME, traders, farmers and family-owned businesses — we understand your world."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Business Banking" }]}
      />
      <section className="py-20">
        <Container>
          <SectionTitle title="Products & Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-border hover:border-gold hover:shadow-card transition">
                <p.icon className="text-gold" size={28} />
                <div className="font-display text-xl text-navy font-bold mt-3">{p.title}</div>
                <p className="text-text-body text-sm mt-2">{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy text-white">
        <Container>
          <SectionTitle eyebrow="Why us" title="Why BCCB for Business" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Speed", "Approval in days, not weeks. We know time is money."],
              ["Rates", "Competitive interest tailored for SMEs and traders."],
              ["Local Knowledge", "We understand Maharashtra markets like no national bank."],
              ["Relationship Manager", "A dedicated banker for every business."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="font-display text-2xl text-gold">{t}</div>
                <p className="text-white/75 text-sm mt-2">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container>
          <SectionTitle title="MSME Support" subtitle="Access government schemes through us." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["PM Mudra Yojana", "Shishu, Kishor & Tarun loans up to ₹10 lakh."],
              ["CGTMSE", "Collateral-free credit guarantee for MSEs."],
              ["Stand-Up India", "Loans for SC/ST and women entrepreneurs."],
            ].map(([n, d]) => (
              <div key={n} className="bg-white rounded-2xl p-6 border-l-4 border-gold">
                <div className="font-display font-bold text-navy text-lg">{n}</div>
                <p className="text-text-body text-sm mt-2">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="h-12 px-7 rounded-md bg-navy text-gold font-semibold hover:bg-navy-light">Check Your Eligibility →</button>
          </div>
        </Container>
      </section>
    </>
  );
}