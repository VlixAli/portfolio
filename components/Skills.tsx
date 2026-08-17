import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-line px-6 py-24"
    >
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        <span className="mr-3 text-accent">&#9657;</span>skills
      </h2>
      <div className="mt-14 space-y-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {group.items.map((item) => (
                <span key={item} className="font-mono text-sm text-foreground/80">
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
