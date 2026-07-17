import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Announcements — BCCB" },
      { name: "description", content: "Latest press releases, awards, branch updates and RBI circulars from BCCB." },
      { property: "og:title", content: "News — BCCB" },
      { property: "og:description", content: "Stay updated with BCCB." },
    ],
  }),
  component: NewsPage,
});

const cats = ["All", "Press Release", "Awards", "Branch Updates", "RBI Circulars", "Community"];
const items = [
  { tag: "Awards", title: "Best Co-operative Bank — Maharashtra 2024", date: "28 Apr 2025", img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1000&q=80" },
  { tag: "Branch Updates", title: "BCCB inaugurates new branch at Nalasopara East", date: "12 May 2025", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" },
  { tag: "Press Release", title: "Annual report 2024-25 published", date: "30 Jun 2025", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80" },
  { tag: "RBI Circulars", title: "Revised KYC norms — effective 1 July 2025", date: "20 Jun 2025", img: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1000&q=80" },
  { tag: "Community", title: "BCCB sponsors education for 100 students this year", date: "05 May 2025", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" },
  { tag: "Press Release", title: "New Rupay Platinum Debit Card now available", date: "03 Apr 2025", img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1000&q=80" },
];

function NewsPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.tag === cat);
  const featured = items[0];
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News & Announcements"
        subtitle="What's new at BCCB."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "News" }]}
      />
      <section className="py-16">
        <Container>
          <article className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden border border-border shadow-soft mb-12">
            <img src={featured.img} alt="" className="w-full h-72 md:h-full object-cover" />
            <div className="p-8 flex flex-col justify-center">
              <span className="px-3 py-1 bg-gold-pale text-navy text-xs rounded-full w-fit">{featured.tag}</span>
              <h2 className="font-display text-3xl text-navy font-bold mt-3">{featured.title}</h2>
              <p className="text-text-muted text-sm mt-2">{featured.date}</p>
              <p className="text-text-body mt-4">BCCB has been honoured with the prestigious Best Co-operative Bank award for Maharashtra, recognising 80+ years of community-first banking excellence.</p>
              <a href="#" className="mt-5 text-gold font-semibold">Read full story →</a>
            </div>
          </article>

          <div className="flex flex-wrap gap-2 mb-8">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 h-9 rounded-full text-sm font-medium transition ${cat === c ? "bg-navy text-gold" : "bg-bg-subtle text-text-body hover:bg-gold-pale"}`}>{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <article key={c.title} className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-card transition">
                <img src={c.img} alt="" className="aspect-[16/10] object-cover w-full" />
                <div className="p-5">
                  <span className="px-2 py-1 text-xs bg-gold-pale text-navy rounded">{c.tag}</span>
                  <h3 className="font-display font-bold text-navy mt-3">{c.title}</h3>
                  <div className="text-xs text-text-muted mt-2">{c.date}</div>
                  <a href="#" className="text-sm text-gold mt-3 inline-block">Read more →</a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}