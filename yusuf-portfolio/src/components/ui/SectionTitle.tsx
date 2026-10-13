import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-5 text-3xl font-bold tracking-tight">{children}</h2>;
}