import { useEffect } from "react";
import { navLinks } from "../data/navLinks";

export function usePageTitle(pathname: string) {
  useEffect(() => {
    const label = navLinks.find((link) => link.to === pathname)?.label;
    const name =
      pathname === "/" ? "Full-Stack & Mobile Developer" : (label ?? "Page not found");
    document.title = `Yusuf Umer | ${name}`;
  }, [pathname]);
}