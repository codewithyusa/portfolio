import ProjectList from "../components/projects/ProjectList";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="mb-12 text-5xl font-extrabold tracking-tight md:text-6xl">
        Selected Works.
      </h1>
      <ProjectList />
    </section>
  );
}