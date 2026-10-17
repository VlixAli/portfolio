"use client";

import { useEffect, useState } from "react";
import { GithubIcon } from "@/components/icons";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "technologies", href: "#technologies" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        setActive((prev) => {
          const intersecting = entries.find((entry) => entry.isIntersecting);
          if (intersecting) return intersecting.target.id;
          if (prev && entries.some((entry) => entry.target.id === prev)) return "";
          return prev;
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Home" className="text-white transition-colors hover:text-brand-400">
          <svg
            width="8rem"
            height="2rem"
            viewBox="0 0 400 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-auto"
            aria-hidden="true"
          >
            {/* A */}
            <path
              d="M2 169.5L70 1H112L180 169.5H132L120 139.5H62L50 169.5H2ZM75 105H107L91 63L75 105Z"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* L */}
            <path
              d="M195 1H241.5V127H315V169.5H195V1Z"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* I */}
            <path
              d="M335 1H381.5V169.5H335V1Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`border-b-2 pb-1 text-sm font-medium capitalize transition-colors duration-200 ${
                  isActive
                    ? "border-brand-400 text-brand-400"
                    : "border-transparent text-zinc-300 hover:border-zinc-500 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Resume
          </a>
          <a
            href="https://github.com/VlixAli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-300 transition-colors duration-200 hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 12h16M4 19h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col items-center gap-1 py-4">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="animate-menu-item w-full text-center"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm font-medium capitalize transition-colors ${
                    active === link.href.slice(1) ? "text-brand-400" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              className="animate-menu-item w-full text-center"
              style={{ animationDelay: `${navLinks.length * 40}ms` }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
