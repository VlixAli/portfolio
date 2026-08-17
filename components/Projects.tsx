import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-line px-6 py-24"
    >
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        <span className="mr-3 text-accent">&#9657;</span>projects
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 leading-7 text-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5">
              {project.tech.map((tech) => (
                <span key={tech} className="font-mono text-xs text-muted">
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
