import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-line px-6 py-24 pb-32"
    >
      <Reveal>
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          <span className="mr-3 text-accent">&#9657;</span>contact
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-14 max-w-xl leading-8 text-muted">
          I&apos;m always open to interesting conversations and opportunities.
          Feel free to reach out.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block font-mono text-xl tracking-tight text-foreground transition-colors hover:text-accent md:text-3xl"
        >
          {profile.email}
        </a>
      </Reveal>
    </section>
  );
}
