"use client";

import { assetPath } from "@/i18n/assets";
import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./visual.module.css";

type VisualProject = {
  title: string;
  body: string;
  tags: string[];
  path?: string;
  video?: string;
  image?: string;
  accentColor?: string;
};

type Props = {
  projects: VisualProject[];
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

export function VisualCarousel({ projects, locale }: Props) {
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

  const prefix = locale === "en" ? "/en" : `/${locale}`;

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
          {projects.map((project, i) => {
            const isActive = i === active;
            const cardClass = `${styles.card} ${getCardClass(i, active, total)}`;
            const accent = project.accentColor;

            const inner = (
              <>
                <div className={styles.cardMedia}>
                  {project.image ? (
                    <img
                      src={assetPath(project.image)}
                      alt={project.title}
                    />
                  ) : (
                    <video
                      src={project.video ? assetPath(project.video) : undefined}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.cardName}>{project.title}</span>
                  {project.path ? (
                    <span className={styles.cardMeta}>
                      <span>查看详情</span>
                      <span className={styles.cardMetaBadge}>→</span>
                    </span>
                  ) : (
                    <span className={styles.cardMeta}>
                      <span>即将开放</span>
                      <span className={styles.cardMetaBadge}>+</span>
                    </span>
                  )}
                </div>
              </>
            );

            const accentStyle = accent
              ? ({ "--active-accent": accent } as React.CSSProperties)
              : undefined;

            return (
              <article
                key={project.title}
                className={cardClass}
                style={accentStyle}
                onClick={() => {
                  if (wasDrag.current) return;
                  if (isActive && project.path) {
                    router.push(`${prefix}${project.path}`);
                  } else {
                    setActive(i);
                  }
                }}
              >
                {inner}
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={(event) => {
            event.stopPropagation();
            prev();
          }}
          aria-label="上一个"
        >
          ←
        </button>
        <div className={styles.dots}>
          {projects.map((project, i) => (
            <button
              type="button"
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              style={i === active && project.accentColor ? { background: project.accentColor } : undefined}
              onClick={(event) => {
                event.stopPropagation();
                setActive(i);
              }}
              aria-label={`切换到第 ${i + 1} 个`}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
          aria-label="下一个"
        >
          →
        </button>
      </div>
    </div>
  );
}
