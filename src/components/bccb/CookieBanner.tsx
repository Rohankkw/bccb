import { useEffect, useState } from "react";
export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("bccb-cookie")) setTimeout(() => setShow(true), 1200);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-navy-dark text-white/90 border-t border-gold/40">
      <div className="mx-auto max-w-[1320px] px-4 py-3 flex flex-col sm:flex-row items-center gap-3 justify-between text-sm">
        <p>We use cookies to enhance your experience. View our <a href="/privacy" className="text-gold underline">Privacy Policy</a>.</p>
        <button
          onClick={() => { localStorage.setItem("bccb-cookie", "1"); setShow(false); }}
          className="px-5 h-9 rounded-md bg-gold text-navy font-semibold hover:bg-gold-light transition"
        >Accept</button>
      </div>
    </div>
  );
}