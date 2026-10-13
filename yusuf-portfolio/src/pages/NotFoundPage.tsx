import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="mx-auto px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mb-8 mt-3 text-muted">The page you are looking for does not exist.</p>
      <Button to="/">Back home</Button>
    </div>
  );
}