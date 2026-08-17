"use client";

import { useEffect, useState, useCallback } from "react";

const lines = [
  'const Ali = (name, passion) => {',
  '  return `${name} builds ${passion}`;',
  '};',
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;

export default function TypeWriter() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    if (isPaused) return;

    const currentLine = lines[lineIndex];

    if (!isDeleting) {
      if (charIndex < currentLine.length) {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      } else {
        if (lineIndex < lines.length - 1) {
          setIsPaused(true);
          setTimeout(() => {
            setLineIndex((l) => l + 1);
            setCharIndex(0);
            setIsPaused(false);
          }, 200);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, PAUSE_AFTER_TYPE);
        }
      }
    } else {
      if (charIndex > 0) {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex - 1);
          return next;
        });
        setCharIndex((c) => c - 1);
      } else {
        if (lineIndex > 0) {
          setIsPaused(true);
          setTimeout(() => {
            setLineIndex((l) => l - 1);
            setCharIndex(lines[lineIndex - 1].length);
            setIsPaused(false);
          }, 100);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(false);
            setIsPaused(false);
          }, PAUSE_AFTER_DELETE);
        }
      }
    }
  }, [lineIndex, charIndex, isDeleting, isPaused]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <div className="mt-8 font-mono text-xs sm:text-sm text-muted/80">
      {displayedLines.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-8 select-none text-right text-muted/40 mr-3">
            {i + 1}
          </span>
          <span>
            <span className="text-[#c792ea]">{line.slice(0, 6)}</span>
            <span className="text-foreground">
              {line.slice(6, lineIndex === i ? charIndex + 1 : undefined)}
            </span>
          </span>
          {i === lineIndex && !isPaused && (
            <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-foreground/70" />
          )}
        </div>
      ))}
    </div>
  );
}
