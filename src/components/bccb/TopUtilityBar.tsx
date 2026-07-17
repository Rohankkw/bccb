export function TopUtilityBar() {
  const ticker =
    "Current FD Rate: 7.5% p.a.  ·  Savings Account: 4% p.a.  ·  Home Loan from 8.75% p.a.  ·  Senior Citizen FD: 8.0% p.a.  ·  ";
  return (
    <div className="bg-navy-dark text-white/90 text-xs">
      <div className="mx-auto max-w-[1320px] px-4 h-9 flex items-center justify-between gap-6">
        <div className="hidden md:block whitespace-nowrap">
          <span className="text-gold">●</span> RBI Regulated &nbsp;|&nbsp; DICGC Insured &nbsp;|&nbsp; Est. 1939
        </div>
        <div className="flex-1 overflow-hidden mx-4 hidden sm:block">
          <div className="ticker-track inline-flex whitespace-nowrap">
            <span className="pr-12">{ticker.repeat(3)}</span>
            <span className="pr-12">{ticker.repeat(3)}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="hidden sm:inline">Customer Care: <span className="text-gold font-medium">1800-000-0000</span></span>
          <span className="text-white/40">|</span>
          <span className="cursor-pointer hover:text-gold transition">EN</span>
          <span className="text-white/40">·</span>
          <span className="cursor-pointer hover:text-gold transition">हिं</span>
          <span className="text-white/40">·</span>
          <span className="cursor-pointer hover:text-gold transition">मरा</span>
        </div>
      </div>
    </div>
  );
}