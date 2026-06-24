"use client";

import { assetPath } from "@/i18n/assets";
import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./tools4.module.css";

type Project = {
  title: string;
  caption: string;
  video: string;
  tags?: string[];
  href?: string;
  coming?: boolean;
};

type CarouselProps = {
  projects: Project[];
  locale: string;
};

function getCardClass(index: number, active: number, total: number) {
  const diff = ((index - active) % total + total) % total;
  if (diff === 0) return styles.cardActive;
  if (diff === 1) return styles.cardNext;
  if (diff === total - 1) return styles.cardPrev;
  if (diff === 2) return styles.cardFarNext;
  if (diff === total - 2) return styles.cardFarPrev;
  return styles.cardHidden;
}

export function Carousel({ projects, locale }: CarouselProps) {
  const [active, setActive] = useState(0);
  const total = projects.length;
  const router = useRouter();
  const dragStartX = useRef<number | null>(null);
  const wasDrag = useRef(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    wasDrag.current = false;
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) {
      wasDrag.current = true;
      if (delta < 0) next();
      else prev();
    }
    dragStartX.current = null;
  }, [next, prev]);

  const handleMouseLeave = useCallback(() => {
    dragStartX.current = null;
  }, []);

  return (
    <div
      className={styles.carouselSection}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "grab" }}
    >
      <nav className={styles.projectNav}>
        {projects.map((project, i) => (
          <button
            key={project.title}
            className={`${styles.projectNavBtn} ${i === active ? styles.projectNavBtnActive : ""}`}
            onClick={() => setActive(i)}
          >
            {project.title}
          </button>
        ))}
      </nav>
      <div className={styles.carouselViewport}>
        <div className={styles.carouselTrack}>
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`${styles.card} ${getCardClass(i, active, total)} ${project.coming ? styles.cardComing : ""}`}
              onClick={() => {
                if (wasDrag.current) return;
                if (project.coming) return;
                if (i === active && project.href) {
                  router.push(`/${locale}${project.href}`);
                } else {
                  setActive(i);
                }
              }}
            >
              <div className={styles.cardMedia}>
                <video
                  src={assetPath(project.video)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardName}>{project.title}</span>
                <div className={styles.cardMeta}>
                  <span>{project.caption}</span>
                  <span className={styles.cardMetaBadge}>
                    {project.coming ? "暂不开放" : "+"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={prev} aria-label="上一个">
          ←
        </button>
        <div className={styles.dots}>
          {projects.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`切换到第 ${i + 1} 个`}
            />
          ))}
        </div>
        <button className={styles.controlBtn} onClick={next} aria-label="下一个">
          →
        </button>
      </div>
    </div>
  );
}
