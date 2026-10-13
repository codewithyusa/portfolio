import { memo } from "react";
import type { Service } from "../../types";

function ServiceCard({ title, description, tags }: Service) {
  return (
    <article className="flex flex-col rounded-3xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full bg-border px-3 py-1 text-xs font-medium">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default memo(ServiceCard);