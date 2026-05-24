"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 100, className = "" }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className} role="text" aria-label={text}>
      <span aria-hidden="true">{displayed}</span>
      <span aria-hidden="true" className={`inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle ${done ? "animate-cursor-blink" : "animate-pulse"}`} />
    </span>
  );
}
