import type { ReactNode } from "react";
import { TopUtilityBar } from "./TopUtilityBar";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { ChatWidget } from "./ChatWidget";
import { BackToTop } from "./BackToTop";
import { CookieBanner } from "./CookieBanner";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopUtilityBar />
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
      <BackToTop />
      <CookieBanner />
    </div>
  );
}