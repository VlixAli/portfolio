import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Experience
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            My Professional Journey
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            2+ years delivering scalable Java microservices for enterprise
            flight booking platforms. From API development to NATIVE image
            optimization, I&apos;ve grown through hands-on roles taking on more
            ownership and technical leadership at every step.
          </p>
        </Reveal>

        <ol className="relative mt-14 space-y-14 border-l-2 border-brand-100 pl-8">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.role}-${job.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-brand-500 shadow-[0_0_0_4px_var(--brand-50)]"
                style={{ animationDelay: `${index * 120}ms` }}
              />
              <Reveal delay={index * 120}>
                <p className="text-sm font-semibold text-brand-600">{job.period}</p>
                <h3 className="mt-1.5 text-2xl font-bold text-zinc-900">{job.role}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {job.company}
                  {job.location ? ` — ${job.location}` : ""}
                </p>
                <p className="mt-4 leading-7 text-muted">{job.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
