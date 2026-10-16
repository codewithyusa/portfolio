import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToTop from "../ui/BackToTop";
import ErrorBoundary from "../ui/ErrorBoundary";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname, hash } = useLocation();
  usePageTitle(pathname);

  useLayoutEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center">
        <ErrorBoundary key={pathname}>
          <div key={pathname} className="page-enter w-full">
            <Outlet />
          </div>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}