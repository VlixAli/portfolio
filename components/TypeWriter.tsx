"use client";

import { useEffect, useState } from "react";

const lines = [
  'const Ali = (name, passion) => {',
  '  return `${name} builds ${passion}`;',
  '};',
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;
const LINE_PAUSE = 200;
const DELETE_LINE_PAUSE = 100;

export default function TypeWriter() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
  const [cursorLine, setCursorLine] = useState(0);
  const [cursorChar, setCursorChar] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const setLine = (index: number, value: string) => {
      setDisplayedLines((prev) => {
        const next = [...prev];
        if (index >= next.length) next.push("");
        next[index] = value;
        return next;
      });
    };

    const step = (line: number, char: number, deleting: boolean) => {
      if (cancelled) return;

      const text = lines[line];

      if (!deleting && char < text.length) {
        const next = char + 1;
        setCursorChar(next);
        setLine(line, text.slice(0, next));
        timer = setTimeout(() => step(line, next, false), TYPING_SPEED);
        return;
      }

      if (!deleting) {
        setIsPaused(true);
        if (line < lines.length - 1) {
          timer = setTimeout(() => {
            if (cancelled) return;
            setIsPaused(false);
            setCursorLine(line + 1);
            setCursorChar(0);
            step(line + 1, 0, false);
          }, LINE_PAUSE);
        } else {
          timer = setTimeout(() => {
            if (cancelled) return;
            setIsPaused(false);
            step(line, char, true);
          }, PAUSE_AFTER_TYPE);
        }
        return;
      }

      if (char > 0) {
        const next = char - 1;
        setCursorChar(next);
        setLine(line, text.slice(0, next));
        timer = setTimeout(() => step(line, next, true), DELETING_SPEED);
        return;
      }

      setIsPaused(true);
      if (line > 0) {
        timer = setTimeout(() => {
          if (cancelled) return;
          setIsPaused(false);
          const prevLine = line - 1;
          setCursorLine(prevLine);
          setCursorChar(lines[prevLine].length);
          step(prevLine, lines[prevLine].length, true);
        }, DELETE_LINE_PAUSE);
      } else {
        timer = setTimeout(() => {
          if (cancelled) return;
          setIsPaused(false);
          step(0, 0, false);
        }, PAUSE_AFTER_DELETE);
      }
    };

    step(0, 0, false);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mt-8 font-mono text-xs sm:text-sm text-muted/80">
      <span className="sr-only">{`Ali builds with passion.`}</span>
      <div aria-hidden="true">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 select-none text-right text-muted/40 mr-3">
              {i + 1}
            </span>
            <span>
              <span className="text-accent">{line.slice(0, 6)}</span>
              <span className="text-foreground">
                {line.slice(6, cursorLine === i ? cursorChar + 1 : undefined)}
              </span>
            </span>
            {i === cursorLine && !isPaused && (
              <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-foreground/70" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
