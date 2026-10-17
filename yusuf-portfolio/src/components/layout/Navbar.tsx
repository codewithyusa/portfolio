import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/cn";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const menuOpen = open && !isDesktop;
  const close = useCallback(() => setOpen(false), []);

  // Escape closes the mobile menu (scroll lock is handled in MobileMenu)
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link to="/" onClick={close} className="text-2xl font-extrabold tracking-tight">
  YUSA.
</Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-[15px] font-medium transition hover:text-fg",
                    isActive
                      ? "text-fg underline decoration-accent decoration-2 underline-offset-[10px]"
                      : "text-muted"
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full transition hover:bg-border md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={close} />
    </header>
  );
}