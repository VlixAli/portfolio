"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function Splash({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] flex flex-col items-center justify-center overflow-hidden bg-background transition-opacity duration-500 ${
          hidden ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="h-px w-full animate-fade-left animate-glow bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
        <h1 className="my-12 animate-splash-title whitespace-nowrap text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-9xl">
          Ali Eldiasty
        </h1>
        <p className="mt-8 animate-fade-in font-mono text-sm uppercase tracking-widest text-muted md:text-base">
          Software Engineer
        </p>
        <span className="mt-12 h-px w-full animate-fade-right animate-glow bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
      </div>
      {children}
    </>
  );
}
