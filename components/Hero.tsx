import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-sm font-medium text-blue-600">Hi, I&apos;m {profile.name}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
        {profile.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        {profile.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#experience"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          View experience
        </a>
        <a
          href="#contact"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
