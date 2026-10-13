import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps {
  to: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({ to, variant = "primary", children }: ButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition hover:-translate-y-0.5",
        variant === "primary"
          ? "bg-fg text-bg hover:opacity-90"
          : "border border-border bg-surface text-fg hover:bg-border"
      )}
    >
      {children}
    </Link>
  );
}