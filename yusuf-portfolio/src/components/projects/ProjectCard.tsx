import { memo } from "react";
import type { Project } from "../../types";

const pill =
  "whitespace-nowrap rounded-full bg-white/85 px-5 py-2.5 text-sm font-medium text-black backdrop-blur transition hover:bg-white";

function ProjectCard({
  label,
  title,
  description,
  tags,
  gradient,
  image,
  github,
  live,
}: Project) {
  const hasLinks = Boolean(github || live);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
      <div
        className="relative grid h-52 place-items-center overflow-hidden text-5xl font-extrabold tracking-tight text-white"
        style={image ? undefined : { background: gradient }}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          label
        )}

        {hasLinks && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/45 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className={pill}>
                Live demo
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={pill}>
                GitHub
              </a>
            )}
          </div>
        )}
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