import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}