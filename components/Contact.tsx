import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Contact
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700">
        I&apos;m always open to interesting conversations and opportunities.
        Feel free to reach out.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Email me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
