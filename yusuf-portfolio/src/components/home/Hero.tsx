import Button from "../ui/Button";
import AvailabilityBadge from "./AvailabilityBadge";
import CodeCard from "./CodeCard";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
      <div>
        <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
          Full-Stack | Mobile | .NET
        </span>

        <h1 className="mt-4 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
          Hi, I'm Yusuf Umer.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          A full-stack and mobile developer from Addis Ababa. I build secure, fast web and
          mobile apps with Angular, ASP.NET Core, React, NestJS and Flutter.
        </p>

        <div className="mt-8">
          <AvailabilityBadge />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/resume">
            View Resume
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
          <Button to="/contact" variant="secondary">
            Let's Talk
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 md:items-end">
        <img
          src="/yusuf.jpg"
          alt="Yusuf Umer"
          className="hero-blob size-56 object-cover shadow-2xl"
        />
        <CodeCard />
      </div>
    </section>
  );
}