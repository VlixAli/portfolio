"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import {
  BriefcaseIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "@/components/icons";
import { profile } from "@/lib/data";

const contactTiles = [
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: profile.location,
    href: null as string | null,
  },
  {
    icon: BriefcaseIcon,
    label: "Availability",
    value: profile.availability,
    href: null as string | null,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Message from ${form.name || "your portfolio"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

  return (
    <section id="contact" className="bg-zinc-50 py-20 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Contact
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Let&apos;s Work Together
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Whether you have a project in mind, need an extra pair of hands on
            an existing team, or just want to talk through an idea, I&apos;m
            happy to chat. I usually reply within a day or two.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Info tiles */}
          <Reveal delay={200}>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactTiles.map((tile) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <tile.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        {tile.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold text-zinc-900">
                        {tile.value}
                      </p>
                    </div>
                  </>
                );
                return tile.href ? (
                  <a
                    key={tile.label}
                    href={tile.href}
                    className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-shadow hover:shadow-md"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={tile.label}
                    className="flex items-start gap-4 rounded-xl border border-line bg-white p-5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              <DownloadIcon className="h-5 w-5" />
              Download Resume
            </a>
          </Reveal>

          {/* Message form */}
          <Reveal delay={300}>
            <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-zinc-900">Drop me a message</h3>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  <SendIcon className="h-4 w-4" />
                  Send Message
                </button>
                {sent && (
                  <p className="text-center text-sm text-brand-600">
                    Your email app should open with the message ready to send.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
