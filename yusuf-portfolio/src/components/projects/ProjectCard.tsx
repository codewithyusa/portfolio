import { memo } from "react";
import type { Project } from "../../types";

function ProjectCard({ label, title, description, tags, gradient, github }: Project) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
      <div
        className="relative grid h-52 place-items-center text-5xl font-extrabold tracking-tight text-white"
        style={{ background: gradient }}
      >
        {label}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white/75 px-5 py-2.5 text-sm font-medium text-black opacity-0 backdrop-blur transition group-hover:opacity-100"
        >
          View on GitHub
        </a>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-border px-3 py-1 text-xs font-medium">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default memo(ProjectCard);