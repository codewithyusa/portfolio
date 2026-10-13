import { memo } from "react";
import { timeline } from "../../data/timeline";

function Timeline() {
  return (
    <ul className="space-y-4">
      {timeline.map(({ year, title, subtitle }) => (
        <li
          key={title}
          className="flex gap-5 rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="pt-0.5 text-sm font-semibold text-accent">{year}</span>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default memo(Timeline);