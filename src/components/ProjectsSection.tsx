"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/content/projects";
import styles from "./ProjectsSection.module.css";

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ProjectsSection({
  projects,
  title = "项目",
  subtitle,
}: {
  projects: Project[];
  title?: string;
  subtitle?: string;
}) {
  const [seed, setSeed] = useState(0);

  const view = useMemo(() => {
    if (seed === 0) return projects;
    return shuffle(projects);
  }, [projects, seed]);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.h2}>{title}</h2>
          {subtitle ? <p className={styles.sub}>{subtitle}</p> : null}
        </div>

        <button
          type="button"
          className="buttonGhost"
          onClick={() => setSeed((s) => s + 1)}
          aria-label="随机重排项目"
        >
          Shuffle 一下
        </button>
      </div>

      <div className={styles.grid}>
        {view.map((p, idx) => (
          <Link key={p.slug} className={styles.card} href={`/projects/${p.slug}`}>
            <div className={styles.cardTop}>
              <span className={styles.index}>#{String(idx + 1).padStart(2, "0")}</span>
              <span className="chip">{p.timeframe}</span>
            </div>
            <h3 className={styles.h3}>{p.title}</h3>
            <p className={styles.desc}>{p.subtitle}</p>
            <div className={styles.tags} aria-label="标签">
              {p.tags.slice(0, 4).map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <p className={styles.more}>点我看过程 →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

