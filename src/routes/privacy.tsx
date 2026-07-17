import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BCCB" },
      { name: "description", content: "How BCCB collects, uses and protects your personal data." },
      { property: "og:title", content: "Privacy Policy — BCCB" },
      { property: "og:description", content: "Your privacy is our priority." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  ["data-collection", "Data Collection", "We collect personal information you provide when you open an account, apply for a loan, or use our digital services. This may include your name, address, KYC documents, financial details and usage data."],
  ["usage", "Use of Information", "We use your information to operate accounts, process transactions, comply with regulatory requirements and improve our services. We never sell your data."],
  ["sharing", "Information Sharing", "We share data only with regulators (RBI, DICGC), authorised service providers under strict NDAs, or when required by law."],
  ["cookies", "Cookies", "Our website uses cookies to enhance your experience. You can disable cookies in your browser, but some features may not work as expected."],
  ["rights", "Your Rights", "You have the right to access, correct, or delete your data, and to withdraw consent at any time, subject to regulatory retention rules."],
  ["contact", "Contact our DPO", "For privacy queries, email dpo@bccb.co.in or write to: Data Protection Officer, BCCB House, Vasai Road (W) - 401202."],
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: 1 June 2025"
        image="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Privacy" }]}
      />
      <section className="py-16">
        <Container className="grid lg:grid-cols-[240px_1fr] gap-10">
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="text-xs uppercase tracking-wider text-gold font-medium mb-3">On this page</div>
            <nav className="space-y-2 text-sm">
              {sections.map(([id, t]) => (
                <a key={id} href={`#${id}`} className="block text-text-body hover:text-navy hover:border-l-2 hover:border-gold pl-3 -ml-3 transition">{t}</a>
              ))}
            </nav>
          </aside>
          <div className="space-y-10">
            {sections.map(([id, t, d]) => (
              <section key={id} id={id} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-navy font-bold">{t}</h2>
                <p className="text-text-body mt-3 leading-relaxed">{d}</p>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}