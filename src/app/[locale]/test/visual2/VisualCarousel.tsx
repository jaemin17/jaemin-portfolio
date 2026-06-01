"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import styles from "./visual.module.css";

type VisualProject = {
  title: string;
  body: string;
  tags: string[];
  path?: string;
  video?: string;
  image?: string;
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

  const prefix = locale === "en" ? "/en" : `/${locale}`;

  return (
    <div className={styles.carouselSection}>
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

            const inner = (
              <>
                <div className={styles.cardMedia}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  ) : (
                    <video
                      src={project.video}
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

            if (project.path && isActive) {
              return (
                <Link
                  key={project.title}
                  className={cardClass}
                  href={`${prefix}${project.path}`}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <article
                key={project.title}
                className={cardClass}
                onClick={() => setActive(i)}
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
          {projects.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
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
