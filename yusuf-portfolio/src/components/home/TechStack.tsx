import { memo, useMemo, useState } from "react";
import { techStack } from "../../data/techStack";
import type { TechCategory, TechItem } from "../../types";
import { cn } from "../../utils/cn";

type Filter = "All Tech" | TechCategory;

const filters: Filter[] = ["All Tech", "Frontend", "Mobile", "Backend & API", "Database & Tools"];

const TechCard = memo(function TechCard({ name, level, icon: Icon, color }: TechItem) {
  return (
    <li className="rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="grid size-11 place-items-center rounded-xl bg-bg">
            <Icon size={22} color={color} aria-hidden />
          </span>
          <span className="font-semibold">{name}</span>
        </div>
        <span className="font-mono text-xs font-semibold text-muted">{level}%</span>
      </div>

      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="bar-grow h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </li>
  );
});

export default function TechStack() {
  const [active, setActive] = useState<Filter>("All Tech");

  const items = useMemo(
    () => (active === "All Tech" ? techStack : techStack.filter((t) => t.category === active)),
    [active]
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
        Skills &amp; Tech Stack
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted">
        Tools, frameworks, and technologies I use to turn ideas into secure, fast web and mobile
        products.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "rounded-xl px-5 py-2.5 text-sm font-medium transition",
              active === filter
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "bg-border text-muted hover:text-fg"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <TechCard key={`${active}-${item.name}`} {...item} />
        ))}
      </ul>
    </section>
  );
}