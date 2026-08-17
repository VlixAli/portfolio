import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-line px-6 py-24"
    >
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        <span className="mr-3 text-accent">&#9657;</span>experience
      </h2>
      <ol className="mt-14 space-y-16">
        {experience.map((job) => (
          <li key={job.company}>
            <div className="flex flex-col gap-4 md:flex-row md:gap-12">
              <p className="shrink-0 pt-1 font-mono text-xs tracking-widest text-muted md:w-44">
                {job.period}
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="mt-1 text-muted">{job.company}</p>
                <p className="mt-5 leading-7 text-foreground/75">
                  {job.summary}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-4 text-foreground/70"
                    >
                      <span className="mt-3 h-px w-4 shrink-0 bg-current opacity-40" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
