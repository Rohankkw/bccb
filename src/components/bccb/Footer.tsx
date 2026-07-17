import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 mt-24">
      <div className="mx-auto max-w-[1320px] px-4 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Serving Western Maharashtra with faith, integrity and financial excellence since 1939.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-full border border-gold/60 text-gold flex items-center justify-center hover:bg-gold hover:text-navy transition">
                <Icon size={15} />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/50">RBI License No: UBD.MH.1234</p>
        </div>

        <FCol title="Personal Banking" links={[
          ["Savings Account", "/personal-banking"],
          ["Current Account", "/personal-banking"],
          ["Fixed Deposits", "/deposits"],
          ["Recurring Deposits", "/deposits"],
          ["NRI Services", "/personal-banking"],
        ]} />
        <FCol title="Loans" links={[
          ["Home Loan", "/loans"],
          ["Personal Loan", "/loans"],
          ["Business Loan", "/loans"],
          ["Vehicle Loan", "/loans"],
          ["Education Loan", "/loans"],
          ["Gold Loan", "/loans"],
        ]} />
        <FCol title="Quick Links" links={[
          ["About Us", "/about"],
          ["Board of Directors", "/board-of-directors"],
          ["Interest Rates", "/interest-rates"],
          ["Grievance Redressal", "/grievance"],
          ["Careers", "/careers"],
          ["Privacy Policy", "/privacy"],
        ]} />

        <div>
          <h4 className="text-white font-display text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={15} className="text-gold mt-0.5 shrink-0" /> BCCB House, Vasai Road (West), Palghar - 401202</li>
            <li className="flex gap-2"><Phone size={15} className="text-gold mt-0.5 shrink-0" /> 1800-000-0000 (Toll Free)</li>
            <li className="flex gap-2"><Mail size={15} className="text-gold mt-0.5 shrink-0" /> info@bccb.co.in</li>
            <li className="flex gap-2"><Clock size={15} className="text-gold mt-0.5 shrink-0" /> Mon–Sat 9:30am–4:30pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2025 Bassein Catholic Co-operative Bank Ltd. · Regulated by RBI · DICGC Member · All Rights Reserved</p>
          <p>Website by <span className="text-gold">WrotX</span></p>
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-white font-display text-base mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map(([l, to]) => (
          <li key={l}>
            <Link to={to} className="hover:text-gold transition">{l}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}