import type { ReactNode } from "react";
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1320px] px-4 ${className}`}>{children}</div>;
}