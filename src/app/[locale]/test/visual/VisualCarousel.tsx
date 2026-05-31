"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import styles from "./visual.module.css";

type VisualProject = {
  title: string;
  body: string;
  tags: string[];
  path?: string;
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

  const activeProject = projects[active];
  const prefix = locale === "en" ? "/en" : `/${locale}`;

  return (
    <div className={styles.carouselSection}>
      <div className={styles.carouselViewport}>
        <div className={styles.carouselTrack}>
          {projects.map((project, i) => {
            const isActive = i === active;
            const cardClass = `${styles.card} ${getCardClass(i, active, total)}`;

            const inner = (
              <>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>Visual</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.body}</p>
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.cardName}>{project.title}</span>
                  {project.path ? (
                    <span className={styles.cardAction}>
                      查看详情
                      <span className={styles.cardActionBadge}>→</span>
                    </span>
                  ) : (
                    <span className={styles.cardAction}>
                      即将开放
                      <span className={styles.cardActionBadge}>+</span>
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
