import Reveal from "@/components/Reveal";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-line px-6 py-24"
    >
      <Reveal>
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          <span className="mr-3 text-accent">&#9657;</span>projects
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 120}>
            <article className="group flex h-full flex-col rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {(project.links?.github || project.links?.live) && (
                  <div className="flex items-center gap-3 text-muted">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="transition-colors hover:text-accent"
                      >
                        <GithubIcon className="h-[18px] w-[18px]" />
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="transition-colors hover:text-accent"
                      >
                        <ExternalLinkIcon className="h-[18px] w-[18px]" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{project.description}</p>
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
