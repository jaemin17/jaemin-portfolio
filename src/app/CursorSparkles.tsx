"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./page.module.css";

const shapes = ["✦", "★", "✸", "✺", "✿", "✽", "✼"] as const;
const colors = ["#ff6a00", "#ff3f8e", "#7c4dff", "#ff9f00", "#00a878"] as const;

type CursorSparkle = {
  id: number;
  shape: (typeof shapes)[number];
  color: (typeof colors)[number];
  x: number;
  y: number;
  size: number;
  rotation: number;
};

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<CursorSparkle[]>([]);
  const lastCreatedAt = useRef(0);
  const nextId = useRef(0);
  const timeoutIds = useRef<number[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reduceMotion.matches || coarsePointer.matches) return undefined;

    function addSparkle(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;

      const now = window.performance.now();
      if (now - lastCreatedAt.current < 120 || Math.random() > 0.38) return;

      lastCreatedAt.current = now;

      const sparkle: CursorSparkle = {
        id: nextId.current,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        x: event.clientX,
        y: event.clientY,
        size: 20 + Math.floor(Math.random() * 12),
        rotation: -18 + Math.random() * 36,
      };

      nextId.current += 1;
      setSparkles((current) => [...current.slice(-18), sparkle]);

      const timeoutId = window.setTimeout(() => {
        setSparkles((current) => current.filter((item) => item.id !== sparkle.id));
      }, 720);
      timeoutIds.current.push(timeoutId);
    }

    window.addEventListener("pointermove", addSparkle, { passive: true });

    return () => {
      window.removeEventListener("pointermove", addSparkle);
      timeoutIds.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutIds.current = [];
    };
  }, []);

  return (
    <div className={styles.cursorSparkles} aria-hidden="true">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className={styles.cursorSparkle}
          style={{
            "--cursor-sparkle-color": sparkle.color,
            "--cursor-sparkle-size": `${sparkle.size}px`,
            "--cursor-sparkle-x": `${sparkle.x}px`,
            "--cursor-sparkle-y": `${sparkle.y}px`,
            "--cursor-sparkle-rotation": `${sparkle.rotation}deg`,
          } as CSSProperties}
        >
          {sparkle.shape}
        </span>
      ))}
    </div>
  );
}
