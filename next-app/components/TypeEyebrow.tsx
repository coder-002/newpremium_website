"use client";

import { useEffect, useState } from "react";

/** Hero eyebrow that types itself out once. Server-rendered with the full text for SEO and no-JS. */
export default function TypeEyebrow({ text }: { text: string }) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      setShown(text.slice(0, i));
      if (i < text.length) {
        i += 1;
        timer = setTimeout(tick, 55);
      }
    };
    timer = setTimeout(() => {
      setShown("");
      timer = setTimeout(tick, 350);
    }, 0);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className="type-text" aria-label={text}>
      {shown}
    </span>
  );
}
