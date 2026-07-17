import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const quick = ["Check FD Rates", "Find nearest branch", "Apply for loan", "Talk to human"];
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[340px] max-w-[calc(100vw-2.5rem)] rounded-xl bg-white shadow-pop border border-border overflow-hidden">
          <div className="bg-navy text-white p-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gold flex items-center justify-center text-navy">
              <Bot size={18} />
            </div>
            <div className="flex-1">
              <div className="font-display text-base leading-tight">BCCB Assistant</div>
              <div className="text-[11px] text-gold-light">Online · Replies in seconds</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="close" className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 bg-bg-subtle min-h-[180px]">
            <div className="bg-white rounded-lg p-3 text-sm text-text-body shadow-soft">
              Hi! I'm BCCB Assistant. Ask me about accounts, loans, rates, or branches.
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {quick.map((q) => (
                <button key={q} className="text-xs px-3 py-1.5 rounded-full bg-white border border-gold/50 text-navy hover:bg-gold hover:text-navy transition">
                  {q}
                </button>
              ))}
            </div>
          </div>
          <div className="p-3 flex items-center gap-2 border-t border-border">
            <input
              type="text"
              placeholder="Type your question…"
              className="flex-1 h-10 px-3 rounded-md bg-bg-subtle text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="h-10 w-10 rounded-md bg-navy text-gold flex items-center justify-center hover:bg-navy-light">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="relative h-14 w-14 rounded-full bg-navy text-gold flex items-center justify-center shadow-pop pulse-ring hover:bg-navy-light transition"
      >
        {open ? <X size={22} /> : <Bot size={24} />}
      </button>
    </div>
  );
}