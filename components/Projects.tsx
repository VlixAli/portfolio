import Reveal from "@/components/Reveal";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { profile, projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Projects
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Featured Projects
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Things I&apos;ve built with Spring Boot, Laravel, and everything in
            between — from enterprise sales systems to full e-commerce
            platforms.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    0{index + 1}
                  </span>
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-zinc-400 transition-colors hover:text-brand-600"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
                  >
                    View on GitHub
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <a
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              View All Projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
