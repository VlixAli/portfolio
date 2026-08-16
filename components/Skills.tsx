import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Skills
      </h2>
      <div className="mt-10 space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-zinc-500">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
