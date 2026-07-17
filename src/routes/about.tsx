import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Download, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BCCB — Our Story Since 1939" },
      { name: "description", content: "Bassein Catholic Co-operative Bank has served Western Maharashtra for over 80 years. Learn our story, mission and community commitment." },
      { property: "og:title", content: "About BCCB — Our Story Since 1939" },
      { property: "og:description", content: "80+ years of trust, faith and financial service." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  ["1939", "Founded", "BCCB is established by Catholic community leaders in Vasai."],
  ["1965", "Expansion", "First three branches open across the Vasai-Virar belt."],
  ["1988", "Cross 50,000 members", "Membership reaches 50,000 and deposits cross ₹50 Cr."],
  ["2005", "Digitization", "Core banking solution rolled out across all branches."],
  ["2014", "Net Banking", "Full Internet and SMS banking launched."],
  ["2020", "Mobile App", "BCCB Mobile App with UPI launched."],
  ["2024", "Best Co-op Bank", "Awarded Best Co-operative Bank, Maharashtra."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 1939"
        title="Our Story"
        subtitle="A bank built on community, faith and 80+ years of integrity."
        image="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "About" }]}
      />

      <section className="py-20">
        <Container>
          <SectionTitle eyebrow="Our journey" title="A Legacy in Milestones" />
          <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4">
            {milestones.map(([y, t, d]) => (
              <div key={y} className="min-w-[260px] bg-white border-l-4 border-gold rounded-r-xl p-6 shadow-soft">
                <div className="font-display text-gold text-3xl font-bold">{y}</div>
                <div className="font-semibold text-navy mt-2">{t}</div>
                <p className="text-sm text-text-body mt-2">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container>
          <SectionTitle center title="Mission, Vision & Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Mission", "To provide ethical, accessible banking that uplifts every member of our community."],
              ["Vision", "To be the most trusted co-operative bank in Western Maharashtra, blending heritage with innovation."],
              ["Values", "Integrity. Service. Community. Excellence. Faith."],
            ].map(([t, d]) => (
              <div key={t} className="bg-navy text-white rounded-2xl p-8">
                <div className="h-10 w-10 rounded bg-gold text-navy flex items-center justify-center font-display font-bold">{t[0]}</div>
                <h3 className="font-display text-white text-2xl mt-4">{t}</h3>
                <p className="text-white/75 mt-3 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid md:grid-cols-4 gap-8 text-center">
          {[
            ["2 Lakh+", "Members"],
            ["₹2,000 Cr+", "Deposits"],
            ["50+", "Branches"],
            ["80+", "Years"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-navy text-5xl font-bold">{n}</div>
              <div className="text-text-muted mt-1 uppercase tracking-wider text-xs">{l}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 bg-navy text-white">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80" alt="Community" className="rounded-2xl shadow-pop" loading="lazy" />
          <div>
            <SectionTitle eyebrow="Community" title="Built for Our Community" light />
            <p className="text-white/80 leading-relaxed">
              BCCB was born to serve the Catholic community of Vasai. Today, we proudly serve everyone in Western Maharashtra — supporting churches, parish schools, charitable trusts and small farmers with education loans, micro-finance and zero-cost causes.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle title="Annual Reports" subtitle="Download our last five annual reports." />
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[2024, 2023, 2022, 2021, 2020].map((y) => (
              <a key={y} href="#" className="group bg-white border border-border rounded-xl p-5 hover:border-gold hover:shadow-card transition flex flex-col items-start">
                <Download className="text-gold mb-3" size={22} />
                <div className="font-display font-bold text-navy">Report {y}</div>
                <div className="text-xs text-text-muted mt-1">PDF · 2.4 MB</div>
              </a>
            ))}
          </div>
          <div className="mt-12">
            <SectionTitle title="Awards & Recognition" />
            <div className="flex flex-wrap gap-6">
              {["Best Co-op Bank 2024", "RBI Compliance Excellence 2022", "Top Rural Outreach 2021", "DICGC Member Bank"].map((a) => (
                <div key={a} className="flex items-center gap-3 bg-bg-subtle px-5 py-4 rounded-lg border border-border">
                  <Award className="text-gold" size={20} />
                  <span className="text-navy font-medium text-sm">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}