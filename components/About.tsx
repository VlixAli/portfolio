"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  CodeIcon,
  LightbulbIcon,
  RocketIcon,
} from "@/components/icons";
import { profile } from "@/lib/data";

const highlights = [
  {
    icon: LightbulbIcon,
    label: "Problem Solver",
    description: "Untangling concurrency and reliability issues in distributed systems.",
  },
  {
    icon: CodeIcon,
    label: "Clean Code",
    description: "Readable, tested, maintainable services over clever hacks.",
  },
  {
    icon: RocketIcon,
    label: "Continuous Learning",
    description: "Always chasing the next stack, framework, or cloud tool to master.",
  },
];

export default function About() {
  const [failed, setFailed] = useState(false);
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="about" className="border-t border-zinc-900 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            About Me
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Passionate about
            <br />
            building great software
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={200}>
            <div className="space-y-5 text-base leading-7 text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            {!failed && (
              <div className="relative mx-auto w-full max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -z-10 rounded-2xl bg-brand-50"
                />
                <Image
                  src={profile.photo}
                  alt={`Illustration of ${profile.name}`}
                  width={692}
                  height={458}
                  onError={() => setFailed(true)}
                  className="h-full max-h-[26rem] w-full rounded-2xl border border-line bg-white object-contain p-4 shadow-lg"
                />
              </div>
            )}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {highlights.map((highlight, index) => (
            <Reveal key={highlight.label} delay={index * 120}>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <highlight.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {highlight.label}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
