"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/50 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#home"
          aria-label="Home"
          className="text-foreground transition-colors hover:text-accent"
        >
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
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={`font-mono text-[13px] tracking-wide transition-colors hover:text-foreground ${
                  active === link.href.slice(1) ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-wide text-muted transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <svg
            className="h-5 w-5 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-background/95 backdrop-blur-xl md:hidden"
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
                  className={`block py-3 font-mono text-sm tracking-wide transition-colors hover:text-foreground ${
                    active === link.href.slice(1) ? "text-accent" : "text-muted"
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
                className="block py-3 font-mono text-sm tracking-wide text-muted transition-colors hover:text-foreground"
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
