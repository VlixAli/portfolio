import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Experience
      </h2>
      <ol className="relative mt-10 space-y-12 border-l border-zinc-200 pl-8">
        {experience.map((job) => (
          <li key={job.company}>
            <div className="relative">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-950 ring-4 ring-white" />
              <h3 className="text-lg font-semibold text-zinc-950">{job.role}</h3>
              <p className="mt-1 text-sm text-zinc-500">
                {job.company} &middot; {job.period}
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-700">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-zinc-600">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="list-disc">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
