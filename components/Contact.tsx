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
        <div className="mt-10 flex flex-col gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block font-mono text-xl tracking-tight text-foreground transition-colors hover:text-accent md:text-3xl"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-block w-fit font-mono text-base tracking-tight text-muted transition-colors hover:text-accent md:text-xl"
          >
            {profile.phone}
          </a>
          <p className="font-mono text-sm tracking-wide text-muted">
            {profile.location}
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
