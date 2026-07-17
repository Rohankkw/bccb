import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { SectionTitle } from "@/components/bccb/SectionTitle";
import { Send, Receipt, FileDown, PiggyBank, FileText, ShieldCheck, KeyRound, Clock, Lock } from "lucide-react";

export const Route = createFileRoute("/net-banking")({
  head: () => ({
    meta: [
      { title: "Net Banking & Mobile App — BCCB" },
      { name: "description", content: "Bank from anywhere with BCCB Net Banking and Mobile App. UPI, NEFT, RTGS, statement download." },
      { property: "og:title", content: "Net Banking — BCCB" },
      { property: "og:description", content: "Bank online, 24x7." },
    ],
  }),
  component: NetBanking,
});

function NetBanking() {
  const feats = [
    [Send, "Fund Transfer", "NEFT, RTGS, IMPS, UPI."],
    [Receipt, "Bill Payment", "Electricity, mobile, DTH, gas."],
    [FileDown, "Statement Download", "PDF & Excel for any period."],
    [PiggyBank, "FD Booking", "Open an FD online in 60 sec."],
    [FileText, "Loan Account", "Check EMIs and dues."],
    [FileText, "Tax Documents", "Form 16A, Interest certificates."],
  ];
  return (
    <>
      <PageHero
        eyebrow="Digital banking"
        title="Bank from Anywhere"
        subtitle="Secure, fast and built for everyday life."
        image="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Net Banking" }]}
      />

      <section className="py-20">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="Everything in one place" subtitle="From transfers to tax documents — manage it all in your BCCB account." />
            <div className="grid sm:grid-cols-2 gap-4">
              {feats.map(([Icon, t, d]) => (
                <div key={t as string} className="flex gap-3 p-4 rounded-xl bg-bg-subtle border border-border">
                  <Icon className="text-gold shrink-0" size={22} />
                  <div>
                    <div className="font-semibold text-navy text-sm">{t as string}</div>
                    <div className="text-xs text-text-body mt-0.5">{d as string}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-light shadow-pop p-6 flex items-center justify-center">
              <div className="w-full bg-white rounded-xl shadow-card overflow-hidden">
                <div className="bg-navy text-white p-4 flex justify-between items-center text-sm">
                  <span>Hello, Joseph</span><span className="text-gold">●</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-xs text-text-muted">Available Balance</div>
                  <div className="font-display text-3xl text-navy font-bold">₹1,24,560.50</div>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                    {["Send", "Pay Bills", "FD"].map((a) => (
                      <div key={a} className="bg-bg-subtle p-3 rounded text-center text-navy font-medium">{a}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-subtle">
        <Container className="text-center">
          <SectionTitle center title="BCCB Mobile App" subtitle="Download for iOS and Android" />
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="px-6 h-14 rounded-md bg-navy text-white flex items-center gap-3"><div className="text-2xl"></div><div className="text-left text-xs">Download on the<br /><span className="text-base font-semibold">App Store</span></div></a>
            <a href="#" className="px-6 h-14 rounded-md bg-navy text-white flex items-center gap-3"><div className="text-2xl">▶</div><div className="text-left text-xs">Get it on<br /><span className="text-base font-semibold">Google Play</span></div></a>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy text-white">
        <Container>
          <SectionTitle eyebrow="Security" title="Your Security is Our Priority" light center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[[ShieldCheck, "2-Factor Auth"], [KeyRound, "Secure OTP"], [Clock, "Session Timeout"], [Lock, "256-bit Encryption"]].map(([Icon, t]) => (
              <div key={t as string} className="text-center p-6 rounded-xl bg-white/5">
                <Icon className="text-gold mx-auto" size={32} />
                <div className="font-display mt-3">{t as string}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}