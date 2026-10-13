import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { cn } from "../../utils/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 top-[72px] -z-10 bg-black/30 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className="absolute left-0 right-0 top-full border-b border-border bg-bg shadow-lg md:hidden"
      >
        <ul className="mx-auto max-w-6xl px-6 py-4">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "block border-b border-border py-4 text-lg font-medium last:border-0",
                    isActive ? "text-accent" : "text-fg"
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}