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
        {projects.map((project, index) => {
          const href = project.links?.github ?? project.links?.live;
          return (
          <Reveal key={project.title} delay={(index % 2) * 120} className="h-full">
            <article className="group relative flex h-full flex-col rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 focus-within:border-accent/60 has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {(project.links?.github || project.links?.live) && (
                  <div className="relative z-10 flex items-center gap-3 text-muted">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="rounded transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
                        className="rounded transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        <ExternalLinkIcon className="h-[18px] w-[18px]" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — open GitHub repository`}
                    className="rounded after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:outline-none"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
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
          );
        })}
      </div>
    </section>
  );
}
