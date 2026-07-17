import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/bccb/PageHero";
import { Container } from "@/components/bccb/Container";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BCCB" },
      { name: "description", content: "Reach Bassein Catholic Co-operative Bank — addresses, phone numbers, email and WhatsApp." },
      { property: "og:title", content: "Contact BCCB" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Reach us through any of these channels."
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
        crumbs={[{ label: "Contact" }]}
      />
      <section className="py-20">
        <Container className="grid lg:grid-cols-2 gap-10">
          <form className="bg-white p-8 rounded-2xl border border-border shadow-soft space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
            <h3 className="font-display text-2xl text-navy font-bold">Send us a message</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Name" className="h-11 px-4 rounded-md border border-border" />
              <input required type="email" placeholder="Email" className="h-11 px-4 rounded-md border border-border" />
            </div>
            <input required placeholder="Phone" className="w-full h-11 px-4 rounded-md border border-border" />
            <input placeholder="Subject" className="w-full h-11 px-4 rounded-md border border-border" />
            <textarea required rows={5} placeholder="Message" className="w-full p-3 rounded-md border border-border" />
            <button className="w-full h-11 rounded-md bg-navy text-gold font-semibold">Send Message</button>
          </form>

          <div className="space-y-5">
            {[
              [MapPin, "Registered Office", "BCCB House, Vasai Road (West), Palghar District, Maharashtra - 401202"],
              [Phone, "Phone", "General: 1800-000-0000\nLoans: 1800-111-1111\nNRI Helpdesk: +91-250-2345678"],
              [Mail, "Email", "info@bccb.co.in · loans@bccb.co.in · nri@bccb.co.in"],
              [Clock, "Working Hours", "Mon–Sat: 9:30 AM – 4:30 PM · Sunday: Closed"],
              [MessageCircle, "WhatsApp Business", "+91 70000 00000"],
            ].map(([Icon, t, d]) => (
              <div key={t as string} className="bg-bg-subtle p-5 rounded-xl border border-border flex gap-4">
                <Icon className="text-gold mt-1 shrink-0" size={22} />
                <div>
                  <div className="font-semibold text-navy">{t as string}</div>
                  <p className="text-text-body text-sm mt-1 whitespace-pre-line">{d as string}</p>
                </div>
              </div>
            ))}
            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-border">
              <iframe title="map" src="https://www.google.com/maps?q=Vasai,Maharashtra&output=embed" className="w-full h-full" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}