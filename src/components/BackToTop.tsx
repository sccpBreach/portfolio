"use client";

import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 size-11 rounded-full bg-accent text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-accent/90 hover:-translate-y-1 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <HiArrowUp className="size-5" />
    </button>
  );
}
