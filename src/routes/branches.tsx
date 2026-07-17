import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Search } from "lucide-react";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches & ATM Locator — BCCB" },
      { name: "description", content: "50+ branches and 100+ ATMs across Maharashtra. Find a BCCB branch near you." },
      { property: "og:title", content: "Branches & ATMs — BCCB" },
      { property: "og:description", content: "Find your nearest BCCB branch." },
    ],
  }),
  component: BranchesPage,
});

const branches = [
  ["Vasai Main", "BCCB House, Vasai Road West", "0250-2345678", "BCCB0000001", "Mon-Sat 9:30-4:30", true],
  ["Virar West", "Shop 12, Virar Plaza", "0250-2456789", "BCCB0000002", "Mon-Sat 9:30-4:30", true],
  ["Nalasopara", "MM Road, Nalasopara East", "0250-2567890", "BCCB0000003", "Mon-Sat 9:30-4:30", false],
  ["Mira Road", "Sector 7, Mira Road East", "022-28110000", "BCCB0000004", "Mon-Sat 9:30-4:30", true],
  ["Borivali", "SV Road, Borivali West", "022-28910000", "BCCB0000005", "Mon-Sat 9:30-4:30", true],
  ["Andheri", "MIDC, Andheri East", "022-26800000", "BCCB0000006", "Mon-Sat 9:30-4:30", false],
  ["Bandra", "Hill Road, Bandra West", "022-26400000", "BCCB0000007", "Mon-Sat 9:30-4:30", true],
  ["Thane", "Pokhran Road, Thane West", "022-25400000", "BCCB0000008", "Mon-Sat 9:30-4:30", true],
];

function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Branches & ATMs"
        title="50+ Branches Across Maharashtra"
        subtitle="Find a BCCB branch or ATM near you."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Branches" }]}
      />

      <section className="py-12">
        <Container>
          <div className="max-w-2xl mx-auto flex gap-2 mb-8">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input type="text" placeholder="Enter city, area or pincode" className="w-full h-12 pl-11 pr-4 rounded-md bg-white border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <button className="h-12 px-6 rounded-md bg-navy text-gold font-semibold hover:bg-navy-light">Search</button>
          </div>
          <div className="aspect-[16/7] rounded-2xl overflow-hidden shadow-card border border-border">
            <iframe title="map" src="https://www.google.com/maps?q=Vasai,Maharashtra&output=embed" className="w-full h-full" loading="lazy" />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionTitle title="Branch Directory" />
          <div className="overflow-x-auto rounded-xl border border-border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>{["Branch", "Address", "Phone", "IFSC", "Timing", "ATM"].map((h) => <th key={h} className="px-4 py-3 text-left">{h}</th>)}</tr>
              </thead>
              <tbody>
                {branches.map((b, i) => (
                  <tr key={i} className={i % 2 ? "bg-bg-subtle" : ""}>
                    <td className="px-4 py-3 font-medium text-navy">{b[0]}</td>
                    <td className="px-4 py-3 text-text-body">{b[1]}</td>
                    <td className="px-4 py-3 font-mono text-text-body">{b[2]}</td>
                    <td className="px-4 py-3 font-mono text-gold">{b[3]}</td>
                    <td className="px-4 py-3 text-text-body">{b[4]}</td>
                    <td className="px-4 py-3">{b[5] ? <span className="text-success font-medium">✓ Yes</span> : <span className="text-text-muted">No</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}