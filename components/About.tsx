import { profile } from "@/lib/data";

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        About
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-zinc-700">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
