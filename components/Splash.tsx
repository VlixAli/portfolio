"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const SPLASH_KEY = "splash-seen";
const SPLASH_DURATION = 1100;
const FADE_DURATION = 550;

export default function Splash({
  children,
  onDone,
}: {
  children: ReactNode;
  onDone?: () => void;
}) {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);
  const dismissedRef = useRef(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  const dismiss = useCallback((persist = true) => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    try {
      if (persist) sessionStorage.setItem(SPLASH_KEY, "1");
    } catch {}
    const reduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.setAttribute("data-splash", "off");
      setHidden(true);
      setMounted(false);
      onDoneRef.current?.();
      return;
    }
    setHidden(true);
    window.setTimeout(() => {
      setMounted(false);
      onDoneRef.current?.();
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SPLASH_KEY) === "1";
    } catch {}

    if (seen) {
      // Pre-paint script already hid the overlay via CSS. Re-apply here so
      // React's Strict Mode remount in development cannot clear it.
      // Deferred to a microtask to avoid synchronous setState in effect body.
      document.documentElement.setAttribute("data-splash", "off");
      dismissedRef.current = true;
      queueMicrotask(() => {
        setHidden(true);
        setMounted(false);
        onDoneRef.current?.();
      });
      return;
    }

    const reduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      queueMicrotask(() => dismiss(true));
      return;
    }

    const timer = window.setTimeout(() => dismiss(true), SPLASH_DURATION);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss(true);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [dismiss]);

  return (
    <>
      {mounted && (
        <div
          data-splash-overlay=""
          role="status"
          aria-label="Loading portfolio"
          aria-hidden={hidden}
          onClick={() => dismiss(true)}
          className={`splash-overlay fixed inset-0 z-[70] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-background transition-opacity duration-500 ${
            hidden ? "invisible pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <span className="sr-only">Loading portfolio. Click or press Escape to skip.</span>
          <span className="h-px w-full animate-fade-left animate-glow bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
          <h1 className="my-12 animate-splash-title whitespace-nowrap text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-9xl">
            Ali Eldiasty
          </h1>
          <p className="mt-8 animate-fade-in font-mono text-sm uppercase tracking-widest text-muted md:text-base">
            Software Engineer
          </p>
          <span className="mt-12 h-px w-full animate-fade-right animate-glow bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
        </div>
      )}
      {children}
    </>
  );
}
