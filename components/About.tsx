import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-line px-6 py-24"
    >
      <Reveal>
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          <span className="mr-3 text-accent">&#9657;</span>about
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-14 flex flex-col items-start gap-10 md:flex-row md:gap-16">
          <Avatar />
          <div className="max-w-2xl space-y-4 text-base leading-7 text-foreground/75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
