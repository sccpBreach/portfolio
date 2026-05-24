"use client";

import { useEffect, useRef, useState } from "react";

const chars = "</>{}()[]=>constletvarfuncreturnifelsetrycatchmaptypeinterfaceclassimportexportfromextendsuperthisawaitasyncthrow";
const fontSize = 14;

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
  charIndex: number;
}

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Kurangi jumlah kolom di layar kecil untuk performa
    const columns = window.innerWidth < 768 ? 30 : 60;
    const colSpacing = Math.max(canvas.width / columns, fontSize);

    const drops: Drop[] = [];
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * colSpacing,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.5,
        length: 5 + Math.floor(Math.random() * 15),
        charIndex: Math.floor(Math.random() * chars.length),
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const drop of drops) {
        const alpha = 0.025 + Math.random() * 0.02;
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        for (let i = 0; i < drop.length; i++) {
          const char = chars[(drop.charIndex + i) % chars.length];
          ctx.fillText(char, drop.x, drop.y - i * fontSize);
        }

        drop.y += drop.speed;

        if (drop.y - drop.length * fontSize > canvas.height) {
          drop.y = 0;
          drop.x = Math.floor(Math.random() * columns) * colSpacing;
          drop.charIndex = Math.floor(Math.random() * chars.length);
          drop.speed = 0.3 + Math.random() * 0.5;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
