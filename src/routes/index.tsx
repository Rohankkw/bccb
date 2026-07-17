import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, Lock, Award, Users, Landmark,
  CreditCard, Home as HomeIcon, TrendingUp, Briefcase, Globe, MapPin, Calculator, Bot,
  ChevronDown, ArrowRight, Star, Quote,
} from "lucide-react";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import hero1 from "@/assets/h1.jpg";
import hero2 from "@/assets/cred1.jpeg";
import digitalBankingImg from "@/assets/digital-banking.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BCCB — Banking Built on Faith, Family & the Future" },
      { name: "description", content: "Bassein Catholic Co-operative Bank — Serving Western Maharashtra since 1939. Open accounts, check FD rates, apply for loans." },
      { property: "og:title", content: "BCCB — Bassein Catholic Co-operative Bank" },
      { property: "og:description", content: "Trusted by 2 lakh+ members across Maharashtra. RBI Regulated, DICGC Insured." },
    ],
  }),
  component: Home,
});

const slides = [
  hero1,
  hero2,
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1559535332-db9971090158?auto=format&fit=crop&w=1920&q=80",
];

function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <QuickServices />
      <ProductsShowcase />
      <Calculators />
      <NewsTicker />
      <WhyBCCB />
      <Testimonials />
      <BranchPreview />
    </>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms]"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <div
            key={`${src}-${idx === i}`}
            className="absolute inset-0 bg-cover bg-center kenburns"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative h-full mx-auto max-w-[1320px] px-4 flex flex-col justify-center">
        <span className="inline-flex w-fit px-4 py-1.5 rounded-full bg-gold/15 text-gold-light border border-gold/40 text-xs font-medium tracking-wide mb-5 reveal">
          ✦ Trusted Since 1939 · RBI Regulated
        </span>
        <h1 className="font-display text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl reveal">
          Banking Built on<br />
          <span className="text-gold">Faith, Family</span> &<br />
          the Future.
        </h1>
        <p className="text-white/85 mt-6 max-w-xl text-base md:text-lg reveal">
          Serving the Catholic community and all of Western Maharashtra for over 80 years.
          Your trust is our foundation.
        </p>
        <div className="flex flex-wrap gap-3 mt-8 reveal">
          <Link to="/personal-banking" className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-gold text-navy font-semibold hover:bg-gold-light transition shadow-card">
            Open an Account <ArrowRight size={18} />
          </Link>
          <Link to="/personal-banking" className="inline-flex items-center gap-2 h-12 px-7 rounded-md border-2 border-white/80 text-white font-semibold hover:bg-white hover:text-navy transition">
            Explore Our Products
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-32 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-4 bg-white/50"}`}
            />
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-24 text-white/70 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 inset-x-0 bg-navy-dark/85 backdrop-blur border-t border-gold/30">
        <div className="mx-auto max-w-[1320px] px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["₹2,000 Cr+", "Deposits Managed"],
            ["80+ Years", "Of Trust"],
            ["50+ Branches", "Across Maharashtra"],
            ["2 Lakh+", "Happy Members"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-gold text-2xl md:text-3xl font-bold">{n}</div>
              <div className="text-white/75 text-xs md:text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSignals() {
  const items = [
    { icon: Landmark, label: "RBI Regulated Bank" },
    { icon: Shield, label: "DICGC Insured Deposits" },
    { icon: Lock, label: "256-bit SSL Security" },
    { icon: Award, label: "80+ Years Legacy" },
    { icon: Users, label: "Community-Owned" },
  ];
  return (
    <section className="bg-white border-b border-border">
      <Container className="py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={label} className={`flex items-center justify-center gap-3 py-4 ${i < items.length - 1 ? "lg:border-r border-border" : ""}`}>
            <Icon className="text-gold" size={26} />
            <span className="text-navy text-sm font-medium">{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}

const cardThemes: Record<string, {
  bg: string;
  border: string;
  icon: string;
  title: string;
  leftBar: string;
  link: string;
}> = {
  green: {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/15 dark:liquid-card-green",
    border: "border-emerald-200/50 dark:border-transparent",
    icon: "text-emerald-600 dark:text-emerald-400",
    title: "text-emerald-900 dark:text-emerald-200",
    leftBar: "bg-emerald-500",
    link: "text-emerald-600 dark:text-emerald-400",
  },
  blue: {
    bg: "bg-blue-500/10 hover:bg-blue-500/15 dark:liquid-card-zinc",
    border: "border-blue-200/50 dark:border-transparent",
    icon: "text-blue-600 dark:text-zinc-350",
    title: "text-blue-900 dark:text-zinc-100",
    leftBar: "bg-blue-500 dark:bg-zinc-400",
    link: "text-blue-600 dark:text-zinc-400",
  },
  purple: {
    bg: "bg-purple-500/10 hover:bg-purple-500/15 dark:liquid-card-purple",
    border: "border-purple-200/50 dark:border-transparent",
    icon: "text-purple-600 dark:text-purple-400",
    title: "text-purple-900 dark:text-purple-200",
    leftBar: "bg-purple-500",
    link: "text-purple-600 dark:text-purple-400",
  },
  orange: {
    bg: "bg-orange-500/10 hover:bg-orange-500/15 dark:liquid-card-orange",
    border: "border-orange-200/50 dark:border-transparent",
    icon: "text-orange-600 dark:text-orange-400",
    title: "text-orange-950 dark:text-orange-200",
    leftBar: "bg-orange-500",
    link: "text-orange-600 dark:text-orange-400",
  },
};

function QuickServices() {
  const items = [
    { icon: CreditCard, label: "Open Account", to: "/personal-banking", theme: "green" },
    { icon: HomeIcon, label: "Home Loan", to: "/loans", theme: "blue" },
    { icon: TrendingUp, label: "Fixed Deposit", to: "/deposits", theme: "orange" },
    { icon: Briefcase, label: "Business Account", to: "/business-banking", theme: "purple" },
    { icon: Globe, label: "Net Banking", to: "/net-banking", theme: "orange" },
    { icon: MapPin, label: "Find Branch", to: "/branches", theme: "blue" },
    { icon: Calculator, label: "Loan Calculator", to: "/loans", theme: "purple" },
    { icon: Bot, label: "AI Assistant", to: "/contact", theme: "green" },
  ];

  return (
    <section className="py-20 bg-bg-subtle">
      <Container>
        <SectionTitle eyebrow="Everything you need" title="Everything You Need, Right Here" subtitle="Banking products and tools designed for your everyday life and milestones." center />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map(({ icon: Icon, label, to, theme }) => {
            const themeClass = cardThemes[theme as keyof typeof cardThemes];
            return (
              <Link
                key={label}
                to={to}
                className={`group relative rounded-xl p-6 shadow-soft border hover:shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden ${themeClass.bg} ${themeClass.border}`}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform origin-top ${themeClass.leftBar}`} />
                <Icon className={`mb-4 transition-transform duration-350 group-hover:scale-110 ${themeClass.icon}`} size={28} />
                <div className={`font-semibold transition-colors duration-300 ${themeClass.title}`}>{label}</div>
                <div className={`text-xs mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition duration-300 ${themeClass.link}`}>
                  Explore <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProductsShowcase() {
  const blocks = [
    {
      title: "Savings & Deposits",
      kicker: "Earn more, every day",
      img: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=1200&q=80",
      bullets: ["Catholic Community Savings Account", "Fixed Deposits up to 7.5% p.a.", "Senior Citizen Premium FD"],
      cta: ["View All Deposit Products", "/deposits"] as const,
    },
    {
      title: "Loans for Every Milestone",
      kicker: "Affordable, simple, fast",
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
      bullets: ["Home Loans from 8.75% p.a.", "Personal Loans", "Business & MSME Loans", "Agriculture / Farmer Loans"],
      cta: ["Check Your Eligibility", "/loans"] as const,
    },
    {
      title: "Digital Banking",
      kicker: "Bank from anywhere",
      img: digitalBankingImg,
      bullets: ["Internet Banking", "Mobile Banking App", "UPI & NEFT Transfers", "Statement Download"],
      cta: ["Go to Net Banking", "/net-banking"] as const,
    },
  ];
  return (
    <section className="py-20">
      <Container>
        <SectionTitle eyebrow="Our products" title="Products Designed Around You" subtitle="From your first savings account to your dream home — we walk every step with you." center />
        <div className="space-y-20">
          {blocks.map((b, i) => (
            <div key={b.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-card">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-3">{b.kicker}</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-5">{b.title}</h3>
                <ul className="space-y-3">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-text-body">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link to={b.cta[1]} className="inline-flex items-center gap-2 mt-7 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all">
                  {b.cta[0]} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Calculators() {
  const [tab, setTab] = useState<"emi" | "fd">("emi");
  const [amt, setAmt] = useState(2500000);
  const [rate, setRate] = useState(8.75);
  const [tenure, setTenure] = useState(20);
  const months = tenure * 12;
  const r = rate / 12 / 100;
  const emi = (amt * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  const total = emi * months;
  const interest = total - amt;

  const [principal, setPrincipal] = useState(500000);
  const [fdRate] = useState(7.5);
  const [fdTenure, setFdTenure] = useState(5);
  const n = 4; // quarterly
  const maturity = principal * Math.pow(1 + fdRate / 100 / n, n * fdTenure);

  const inr = (v: number) => "₹" + Math.round(v).toLocaleString("en-IN");

  return (
    <section className="py-20 bg-navy text-white">
      <Container>
        <SectionTitle eyebrow="Plan ahead" title="Calculate in Seconds" subtitle="Estimate your EMI or FD maturity with our easy calculators." center light />
        <div className="max-w-4xl mx-auto bg-navy-dark rounded-2xl p-6 md:p-10 border border-white/10 shadow-pop">
          <div className="flex gap-1 p-1 bg-white/5 rounded-lg w-fit mx-auto mb-8">
            {(["emi", "fd"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition ${tab === t ? "bg-gold text-navy" : "text-white/70 hover:text-white"}`}
              >
                {t === "emi" ? "EMI Calculator" : "FD Maturity Calculator"}
              </button>
            ))}
          </div>

          {tab === "emi" ? (
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <Slider label="Loan Amount" value={amt} onChange={setAmt} min={100000} max={10000000} step={50000} format={inr} />
                <Slider label="Interest Rate (% p.a.)" value={rate} onChange={setRate} min={7} max={18} step={0.05} format={(v) => v.toFixed(2) + "%"} />
                <Slider label="Tenure (Years)" value={tenure} onChange={setTenure} min={1} max={30} step={1} format={(v) => v + " yr"} />
              </div>
              <div className="bg-white/5 rounded-xl p-6 flex flex-col justify-center">
                <div className="text-white/60 text-sm">Monthly EMI</div>
                <div className="font-display text-gold text-4xl md:text-5xl font-bold mt-1">{inr(emi)}</div>
                <div className="mt-6 space-y-2 text-sm">
                  <Row label="Principal" value={inr(amt)} />
                  <Row label="Total Interest" value={inr(interest)} />
                  <Row label="Total Payable" value={inr(total)} highlight />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <Slider label="Principal" value={principal} onChange={setPrincipal} min={10000} max={5000000} step={10000} format={inr} />
                <Slider label="Tenure (Years)" value={fdTenure} onChange={setFdTenure} min={1} max={10} step={1} format={(v) => v + " yr"} />
                <div className="text-sm text-white/70">Rate: <span className="font-mono text-gold">{fdRate}% p.a.</span> · Quarterly compounding</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 flex flex-col justify-center">
                <div className="text-white/60 text-sm">Maturity Amount</div>
                <div className="font-display text-gold text-4xl md:text-5xl font-bold mt-1">{inr(maturity)}</div>
                <div className="mt-6 space-y-2 text-sm">
                  <Row label="Principal" value={inr(principal)} />
                  <Row label="Interest Earned" value={inr(maturity - principal)} highlight />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function Slider({ label, value, onChange, min, max, step, format }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white/80">{label}</span>
        <span className="font-mono text-gold font-semibold">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-gold"
      />
    </div>
  );
}
function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between py-2 ${highlight ? "border-t border-white/10 pt-3 font-semibold" : ""}`}>
      <span className="text-white/70">{label}</span>
      <span className={`font-mono ${highlight ? "text-gold" : "text-white"}`}>{value}</span>
    </div>
  );
}

function NewsTicker() {
  const items = [
    "📢 New Branch Opening in Nalasopara",
    "🎉 BCCB wins Best Co-op Bank award 2024",
    "📋 AGM scheduled for March 2025",
    "💳 New Rupay Debit Card now available",
  ];
  const cards = [
    { tag: "Branch", date: "12 May 2025", title: "BCCB inaugurates new branch at Nalasopara East", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" },
    { tag: "Award", date: "28 Apr 2025", title: "Best Co-operative Bank — Maharashtra 2024", img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1000&q=80" },
    { tag: "Product", date: "03 Apr 2025", title: "Introducing the new Rupay Platinum Debit Card", img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1000&q=80" },
  ];
  return (
    <section>
      <div className="bg-gold text-navy py-3 overflow-hidden">
        <div className="flex gap-12 ticker-track whitespace-nowrap font-medium text-sm">
          {[...items, ...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
      <Container className="py-20">
        <SectionTitle eyebrow="News & announcements" title="What's Happening at BCCB" />
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-card transition group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-gold-pale text-navy rounded">{c.tag}</span>
                  <span className="text-text-muted">{c.date}</span>
                </div>
                <h3 className="font-display font-bold text-lg mt-3 text-navy">{c.title}</h3>
                <Link to="/news" className="inline-flex items-center gap-1 mt-4 text-sm text-gold font-medium hover:gap-2 transition-all">Read more <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyBCCB() {
  const items = [
    { t: "Rooted in Community", d: "Founded by and for the Catholic community of Maharashtra. Your bank, your people." },
    { t: "Competitive Returns", d: "Among the highest FD rates for co-operative banks. Your money works harder here." },
    { t: "Personal Service", d: "Know your banker by name at every branch. We treat you like family — because you are." },
    { t: "Digital + Physical", d: "Full digital banking backed by 50+ physical branches. The best of both worlds." },
  ];
  return (
    <section className="py-24 bg-navy text-white">
      <Container>
        <SectionTitle eyebrow="Why BCCB" title="Why 2 Lakh+ Members Trust BCCB" center light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <div key={i.t} className="relative p-7 rounded-xl border border-white/10 hover:border-gold/50 transition group">
              <div className="font-display text-6xl text-gold/30 group-hover:text-gold/60 transition leading-none">0{idx + 1}</div>
              <h3 className="font-display text-xl text-white mt-2">{i.t}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "R. D'Souza", loc: "Vasai West", years: "12 yrs", quote: "BCCB helped me buy my home. Their staff knew me by name — that's something you don't get at big banks." },
    { name: "A. Pereira", loc: "Virar", years: "20 yrs", quote: "My family has banked with BCCB for three generations. They funded my daughter's education and my small business." },
    { name: "M. Fernandes", loc: "Mira Road", years: "8 yrs", quote: "The senior citizen FD rates are the best in the region. And the branch staff are always patient." },
  ];
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle eyebrow="Member voices" title="Voices of Our Members" center />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((m) => (
            <div key={m.name} className="bg-bg-subtle rounded-2xl p-7 border border-border hover:border-gold/60 hover:shadow-card transition">
              <Quote className="text-gold" size={28} />
              <p className="font-display italic text-lg text-navy mt-3 leading-relaxed">"{m.quote}"</p>
              <div className="flex gap-0.5 text-gold mt-5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-navy text-gold flex items-center justify-center font-display font-bold">
                  {m.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{m.name}</div>
                  <div className="text-xs text-text-muted">{m.loc} · Member {m.years}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BranchPreview() {
  return (
    <section className="py-20 bg-bg-subtle">
      <Container>
        <SectionTitle eyebrow="Visit us" title="50+ Branches Across Maharashtra" subtitle="Find a BCCB branch or ATM near you." center />
        <div className="max-w-3xl mx-auto mb-6 flex gap-2">
          <input type="text" placeholder="Enter your area or pincode" className="flex-1 h-12 px-4 rounded-md bg-white border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
          <button className="h-12 px-6 rounded-md bg-navy text-gold font-semibold hover:bg-navy-light transition">Search</button>
        </div>
        <div className="aspect-[16/7] rounded-2xl overflow-hidden shadow-card border border-border">
          <iframe
            title="BCCB Branches"
            src="https://www.google.com/maps?q=Vasai,Maharashtra&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text-body">50+ Branches · 100+ ATMs · Open Mon–Sat 9:30am–4:30pm</p>
          <Link to="/branches" className="inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1">
            View All Branches <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
