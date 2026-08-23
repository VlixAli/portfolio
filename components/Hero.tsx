import { profile } from "@/lib/data";
import TypeWriter from "@/components/TypeWriter";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-5xl scroll-mt-24 flex-col items-center justify-center px-6 py-32 text-center"
    >
      <Reveal>
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-9xl">
          {profile.name}.
        </h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 text-2xl font-medium tracking-tight text-muted sm:text-3xl md:text-4xl">
          {profile.slogan}
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="mx-auto mt-6 max-w-2xl font-mono text-sm uppercase leading-relaxed tracking-widest text-muted md:text-base">
          {profile.tagline}
        </p>
      </Reveal>
      <Reveal delay={360}>
        <TypeWriter />
      </Reveal>
      <Reveal delay={480}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 font-mono text-sm">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
          >
            <span className="h-px w-6 bg-current opacity-40 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
            about
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
          >
            <span className="h-px w-6 bg-current opacity-40 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
            get in touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
