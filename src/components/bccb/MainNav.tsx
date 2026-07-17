import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, MapPin, ChevronDown, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";

type MenuItem = { label: string; to: string; desc?: string };
type MegaMenu = { title: string; items: MenuItem[] };

const menus: Record<string, MegaMenu> = {
  "Personal Banking": {
    title: "Personal Banking",
    items: [
      { label: "Savings Account", to: "/personal-banking", desc: "Everyday savings with great rates" },
      { label: "Fixed Deposits", to: "/deposits", desc: "Up to 7.5% p.a." },
      { label: "Recurring Deposit", to: "/deposits", desc: "Build a habit, build wealth" },
      { label: "Salary Account", to: "/personal-banking", desc: "Zero balance for salaried" },
      { label: "NRI Account", to: "/personal-banking", desc: "Banking from anywhere" },
      { label: "Net Banking", to: "/net-banking", desc: "Bank online, 24x7" },
    ],
  },
  "Business Banking": {
    title: "Business Banking",
    items: [
      { label: "Current Account", to: "/business-banking", desc: "For your everyday business" },
      { label: "MSME Loans", to: "/business-banking", desc: "Mudra, CGTMSE & more" },
      { label: "Working Capital", to: "/business-banking", desc: "Keep cash flowing" },
      { label: "Trade Finance", to: "/business-banking", desc: "LC & BG support" },
      { label: "Business FD", to: "/deposits", desc: "Park surplus, earn more" },
      { label: "Cash Management", to: "/business-banking", desc: "Collections & payouts" },
    ],
  },
  Loans: {
    title: "Loans",
    items: [
      { label: "Home Loan", to: "/loans", desc: "From 8.75% p.a." },
      { label: "Personal Loan", to: "/loans", desc: "Quick approval" },
      { label: "Vehicle Loan", to: "/loans", desc: "2 & 4 wheelers" },
      { label: "Education Loan", to: "/loans", desc: "For India & abroad" },
      { label: "Gold Loan", to: "/loans", desc: "Instant against gold" },
      { label: "EMI Calculator", to: "/loans#calculator", desc: "Plan your repayment" },
    ],
  },
  "About Us": {
    title: "About Us",
    items: [
      { label: "Our Story", to: "/about", desc: "Since 1939" },
      { label: "Board of Directors", to: "/board-of-directors", desc: "Leadership & governance" },
      { label: "Careers", to: "/careers", desc: "Grow with BCCB" },
      { label: "Interest Rates", to: "/interest-rates", desc: "Live deposit & loan rates" },
      { label: "Grievance", to: "/grievance", desc: "We're here to help" },
      { label: "Contact", to: "/contact", desc: "Reach out anytime" },
    ],
  },
};

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dark = document.documentElement.classList.contains("dark") || 
                 localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy/85 backdrop-blur-xl border-b border-white/10"
          : "bg-white border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-4 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0" onClick={() => setOpen(null)}>
          <Logo variant={scrolled ? "light" : "dark"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {Object.keys(menus).map((label) => (
            <div key={label} className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === label ? null : label);
                }}
                className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition ${
                  open === label
                    ? "text-gold"
                    : scrolled
                    ? "text-white hover:text-gold"
                    : "text-navy hover:text-gold"
                }`}
              >
                {label}
                <ChevronDown
                  size={14}
                  className={`opacity-70 transition-transform duration-200 ${
                    open === label ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ))}
          <Link
            to="/news"
            onClick={() => setOpen(null)}
            className={`px-3 py-2 text-sm font-medium transition ${
              scrolled ? "text-white hover:text-gold" : "text-navy hover:text-gold"
            }`}
          >
            News
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-all duration-300 ${
              scrolled
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-border text-navy hover:bg-bg-subtle"
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            to="/branches"
            onClick={() => setOpen(null)}
            className={`inline-flex items-center gap-1.5 h-10 px-4 rounded-md border text-sm font-medium transition ${
              scrolled
                ? "border-gold/70 text-gold hover:bg-gold hover:text-navy"
                : "border-gold text-navy hover:bg-gold-pale"
            }`}
          >
            <MapPin size={14} /> Find Branch
          </Link>
          <Link
            to="/net-banking"
            onClick={() => setOpen(null)}
            className="inline-flex items-center gap-1.5 h-10 px-5 rounded-md bg-gold text-navy text-sm font-semibold hover:bg-gold-light transition shadow-soft"
          >
            Net Banking →
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-white" : "text-navy"}`}
          onClick={() => {
            setOpen(null);
            setMobile(true);
          }}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mega menu */}
      {open && menus[open] && (
        <div
          className="absolute left-0 right-0 top-full bg-white border-t-2 border-gold shadow-pop"
        >
          <div className="mx-auto max-w-[1320px] px-4 py-8 grid grid-cols-3 gap-x-8 gap-y-4">
            {menus[open].items.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                onClick={() => setOpen(null)}
                className="group p-3 rounded-md hover:bg-bg-subtle transition"
              >
                <div className="font-semibold text-navy group-hover:text-gold transition">{it.label}</div>
                {it.desc && <div className="text-xs text-text-muted mt-0.5">{it.desc}</div>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-50 bg-navy text-white">
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <Logo variant="light" />
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setMobile(false)} aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
          </div>
          <div className="p-6 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
            {Object.entries(menus).map(([k, m]) => (
              <details key={k} className="border-b border-white/10 py-2">
                <summary className="flex items-center justify-between py-2 cursor-pointer text-lg font-display">
                  {k} <ChevronDown size={18} />
                </summary>
                <div className="pl-3 py-2 space-y-2">
                  {m.items.map((it) => (
                    <Link
                      key={it.label}
                      to={it.to}
                      onClick={() => setMobile(false)}
                      className="block text-sm text-white/80 hover:text-gold"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link to="/news" onClick={() => setMobile(false)} className="block py-3 text-lg font-display border-b border-white/10">News</Link>
            <div className="pt-6 flex flex-col gap-3">
              <Link to="/branches" onClick={() => setMobile(false)} className="h-12 rounded-md border border-gold text-gold flex items-center justify-center font-medium">Find Branch</Link>
              <Link to="/net-banking" onClick={() => setMobile(false)} className="h-12 rounded-md bg-gold text-navy flex items-center justify-center font-semibold">Net Banking →</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}