import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Projects
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300"
          >
            <h3 className="font-semibold text-zinc-950">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
