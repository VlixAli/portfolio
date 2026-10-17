import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";
import { TECH_META, techChipStyle } from "@/lib/techIcons";

export default function Skills() {
  return (
    <section id="technologies" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Technologies
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Technologies I Work With
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            I use these technologies both professionally and personally across
            all my projects, choosing the right tool for the job depending on
            scope.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 100} className="h-full">
              <div className="h-full rounded-[5px] border border-line bg-white p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-brand-600"
                    aria-hidden="true"
                  >
                    <path d="m16 18 6-6-6-6" />
                    <path d="m8 6-6 6 6 6" />
                  </svg>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const meta = TECH_META[item];
                    return (
                      <span
                        key={item}
                        style={meta ? techChipStyle(meta.color) : undefined}
                        className="inline-flex items-center gap-1.5 rounded-[5px] border px-3 py-1 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        {meta?.icon && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={meta.icon}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="h-3.5 w-3.5 object-contain"
                          />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
