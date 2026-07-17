import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Linkedin, Quote } from "lucide-react";

export const Route = createFileRoute("/board-of-directors")({
  head: () => ({
    meta: [
      { title: "Board of Directors — BCCB" },
      { name: "description", content: "Meet the experienced board leading Bassein Catholic Co-operative Bank with integrity and vision." },
      { property: "og:title", content: "Board of Directors — BCCB" },
      { property: "og:description", content: "Leadership and governance at BCCB." },
    ],
  }),
  component: BoardPage,
});

const directors = [
  {
    name: "Mr. Simon Louis Soares",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Simon-Louis-Soares.jpg",
    role: "Vice-Chairman"
  },
  {
    name: "Mr. Brian Noel Furtado",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Brian-Noel-Furtado.jpg",
    role: "Director"
  },
  {
    name: "Dr. Allan Victor Rodrigues",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Allan-Victor-Rodrigues.jpg",
    role: "Director"
  },
  {
    name: "Mr. Sebestian Augustine Dias",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Sebestian-Augustine-Dias.jpg",
    role: "Director"
  },
  {
    name: "Mr. Everest Kaitan Dabre",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Everest-Kaitan-Dabre.jpg",
    role: "Director"
  },
  {
    name: "Mr. Savio Peter Rodrigues",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Savio-Peter-Rodrigues.jpg",
    role: "Director"
  },
  {
    name: "Mrs. Tresa Leagory D'silva",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Tresa-Leagory-Dsilva-2.jpg",
    role: "Director"
  },
  {
    name: "Mr. Sanjay Silvester Koli",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Sanjay-Silvester-Koli.jpg",
    role: "Director"
  },
  {
    name: "Mr. Clive Francis Gonsalves",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Clive-Francis-Gonsalves.jpg",
    role: "Director"
  },
  {
    name: "Mr. George Francis Dabre",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/George-Francis-Dabre.jpg",
    role: "Director"
  },
  {
    name: "Mr. Anil Francis Pereira",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Anil-Francis-Pereira.jpg",
    role: "Director"
  },
  {
    name: "Mr. Sandeep Stjohn Gonsalves",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Sandeep-Stjohn-Gonsalves.jpg",
    role: "Director"
  },
  {
    name: "Mrs. Shaila John Gonsalves",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Shaila-John-Gonsalves.jpg",
    role: "Director"
  },
  {
    name: "Mrs. Vileena Allan Gonsalves",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Vileena-Allan-Gonsalves.jpg",
    role: "Director"
  },
  {
    name: "Mr. Pius John Almeida",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Pius-John-Almeida.jpg",
    role: "Director"
  },
  {
    name: "Mr. Ramsingh Shankar Gavit",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Ramsingh-Shankar-Gavit.jpg",
    role: "Director"
  },
  {
    name: "Mr. Anand Francis Mastan",
    image: "https://www.bccb.bank.in/wp-content/uploads/2022/12/Anand-Francis-Mastan-1.jpg",
    role: "Director"
  },
  {
    name: "Mr. Joy Dias",
    image: "https://bccb.bank.in/wp-content/uploads/2026/04/joy-1-1.jpg",
    role: "Banking Expert"
  },
  {
    name: "Mr. Anthony Gonsalves",
    image: "https://bccb.bank.in/wp-content/uploads/2026/04/Anthony-Gonsalves-e1776403706871.jpg",
    role: "Banking Expert"
  },
  {
    name: "Mr. Mahesh Phadke",
    image: "https://bccb.bank.in/wp-content/uploads/2026/01/Mr.-Mahesh-Phadke_Picture-1_page-0001-e1767952243856.jpg",
    role: "CEO"
  }
];

function BoardPage() {
  return (
    <>
      <section className="bg-navy py-24">
        <Container>
          <h1 className="font-display text-gold text-4xl md:text-5xl font-bold">Board of Directors</h1>
          <p className="text-white/80 mt-3 max-w-2xl">The experienced leaders guiding BCCB with integrity and vision.</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start bg-white rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <div className="flex flex-col items-center">
              <div className="h-40 w-40 rounded-full overflow-hidden border-[3px] border-gold ring-8 ring-gold-pale">
                <img src="https://www.bccb.bank.in/wp-content/uploads/2022/12/12_Benold_Dias_resized.jpg" alt="Chairman" className="w-full h-full object-cover" />
              </div>
              <div className="font-display font-bold text-navy mt-4 text-center">Mr. Benauld Patrick Dias</div>
              <div className="text-gold text-sm text-center">Chairman</div>
            </div>
            <div>
              <Quote className="text-gold" size={28} />
              <p className="font-display italic text-navy text-xl md:text-2xl mt-3 leading-relaxed">
                "For 80 years, BCCB has stood for trust. As we step into the digital era, we hold on to the values that built us — community, faith, and the dignity of every member."
              </p>
              <div className="text-text-body mt-5 space-y-3 text-base">
                <p>Welcome to Bassein Catholic Co-operative Bank. Whether you are saving for a milestone, growing your business, or planning a home — we are here to walk every step with you.</p>
                <p>Our board remains committed to the highest standards of governance, compliance and member-first service.</p>
              </div>
              <div className="font-display italic text-navy mt-6 text-lg">— Benauld Patrick Dias</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container>
          <SectionTitle title="Our Directors" subtitle="A diverse team of leaders, professionals and community advocates." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition border border-transparent hover:border-gold/40 flex flex-col items-center text-center">
                <div className="h-28 w-28 rounded-full overflow-hidden border-[3px] border-gold ring-[6px] ring-gold-pale">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="font-display font-bold text-navy mt-4 text-lg">{d.name}</div>
                <div className="text-gold text-sm font-medium">{d.role}</div>
                <a href="#" aria-label="LinkedIn" className="mt-4 h-9 w-9 rounded-full bg-bg-subtle text-navy hover:bg-gold hover:text-navy flex items-center justify-center transition">
                  <Linkedin size={15} />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle title="Committees" subtitle="Specialist sub-committees that drive our governance." />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              ["Audit Committee", "Mr. Simon Louis Soares", 5],
              ["Risk Management", "Mr. Joy Dias", 4],
              ["Credit Committee", "Mr. Pius John Almeida", 6],
              ["IT Strategy", "Dr. Allan Victor Rodrigues", 4],
            ].map(([n, c, m]) => (
              <div key={n as string} className="bg-bg-subtle border border-border rounded-xl p-5">
                <div className="font-display font-bold text-navy">{n}</div>
                <div className="text-sm text-text-body mt-2">Chair: <span className="text-navy font-medium">{c}</span></div>
                <div className="text-xs text-text-muted mt-1">{m} members</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}