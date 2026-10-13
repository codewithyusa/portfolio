import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import ErrorBoundary from "../ui/ErrorBoundary";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();
  usePageTitle(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    </div>
  );
}