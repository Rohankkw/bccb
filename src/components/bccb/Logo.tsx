import logoUrl from "@/assets/logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex items-center">
      <img
        src={logoUrl}
        alt="Bassein Catholic Co-operative Bank Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}