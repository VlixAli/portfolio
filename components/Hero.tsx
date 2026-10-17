import Reveal from "@/components/Reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden bg-zinc-950 pb-16 lg:pb-0"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 right-0 h-[34rem] w-[34rem] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-10rem] h-[24rem] w-[24rem] rounded-full bg-brand-500/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 lg:px-8 lg:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <Reveal delay={100}>
              <h1 className="mb-3 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mb-6 text-xl font-semibold text-brand-400 sm:text-2xl">
                {profile.heroLine}
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="mx-auto mb-8 max-w-xl text-lg italic text-zinc-300 lg:mx-0">
                &ldquo;{profile.slogan}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={550}>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="rounded-lg bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand-400 hover:text-brand-400"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>
            <Reveal delay={700}>
              <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-400"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-400"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-400"
                >
                  <MailIcon className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Decorative code panel */}
          <Reveal delay={500} className="hidden lg:block">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-brand-500/80" />
              </div>
              <pre className="font-mono text-sm leading-7 text-zinc-300">
                <code>
                  <span className="text-brand-400">const</span>{" "}
                  <span className="text-zinc-100">engineer</span> = {"{"}
                  {"\n"}  name: <span className="text-amber-300/90">&quot;{profile.name}&quot;</span>,
                  {"\n"}  role: <span className="text-amber-300/90">&quot;{profile.title}&quot;</span>,
                  {"\n"}  core: [<span className="text-sky-300/90">&quot;Java&quot;</span>,{" "}
                  <span className="text-sky-300/90">&quot;Spring Boot&quot;</span>,{" "}
                  <span className="text-sky-300/90">&quot;Quarkus&quot;</span>],
                  {"\n"}  cloud: [<span className="text-sky-300/90">&quot;AWS&quot;</span>,{" "}
                  <span className="text-sky-300/90">&quot;Azure&quot;</span>],
                  {"\n"}  motivation: <span className="text-amber-300/90">&quot;{profile.slogan}&quot;</span>,
                  {"\n"}
                  {"  "}available: <span className="text-brand-300">true</span>,
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
