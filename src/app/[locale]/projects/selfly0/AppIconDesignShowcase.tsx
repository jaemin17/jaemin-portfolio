"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../[slug]/project.module.css";

const bookDrafts = [
  { id: "v1", src: "/images/selfly0/icon-design/draft-02-book-v1.png", label: "v1", alt: "书本隐喻迭代 v1" },
  { id: "v2", src: "/images/selfly0/icon-design/draft-03-book-v2.png", label: "v2", alt: "书本隐喻迭代 v2" },
  { id: "v3", src: "/images/selfly0/icon-design/draft-04-book-v3.png", label: "v3", alt: "书本隐喻迭代 v3" },
  { id: "v4", src: "/images/selfly0/icon-design/draft-05-book-v4.png", label: "v4", alt: "书本隐喻迭代 v4" },
] as const;

const finalVersions = [
  {
    id: "flat",
    src: "/images/selfly0/icon-design/final-flat.png",
    title: "浅色扁平版",
    detail: "白底高对比，用于 App Store 上架",
    shipped: true,
    alt: "Selfly 最终图标：浅色扁平版",
  },
  {
    id: "gradient",
    src: "/images/selfly0/icon-design/final-gradient.png",
    title: "渐变深色版",
    detail: "橙紫渐变与深色底，用于品牌延展",
    shipped: false,
    alt: "Selfly 最终图标：渐变深色版",
  },
] as const;

const BOOK_INTERVAL_MS = 3200;

function BookDraftCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);

  useEffect(() => {
    if (hoverPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % bookDrafts.length);
    }, BOOK_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [hoverPaused]);

  return (
    <div
      className={styles.iconDesignBookCarousel}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={() => setHoverPaused(false)}
    >
      <div className={styles.iconDesignBookCarouselStage}>
        {bookDrafts.map((draft, index) => (
          <Image
            key={draft.id}
            src={draft.src}
            alt={draft.alt}
            width={200}
            height={200}
            className={`${styles.iconDesignBookCarouselImage} ${
              index === activeIndex ? styles.iconDesignBookCarouselImageActive : ""
            }`}
          />
        ))}
      </div>

      <div className={styles.iconDesignBookCarouselControls}>
        {bookDrafts.map((draft, index) => (
          <button
            key={draft.id}
            type="button"
            className={[
              styles.iconDesignBookCarouselTab,
              index === activeIndex ? styles.iconDesignBookCarouselTabActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={`查看书本隐喻 ${draft.label}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {draft.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function FinalVersionsShowcase() {
  return (
    <div className={styles.iconDesignFinalPicker}>
      <p className={styles.iconDesignFinalHeading}>最终方案</p>

      <div className={styles.iconDesignFinalDual} aria-label="最终图标：浅色与深色两版并排展示">
        {finalVersions.map((version) => (
          <figure key={version.id} className={styles.iconDesignFinalCard}>
            <Image
              src={version.src}
              alt={version.alt}
              width={200}
              height={200}
              className={styles.iconDesignFinalIcon}
              priority={version.id === "flat"}
            />
            <figcaption>
              <span className={styles.iconDesignFinalCardTitle}>
                <strong>{version.title}</strong>
                {version.shipped ? (
                  <span className={styles.iconDesignShippedBadge}>App Store</span>
                ) : null}
              </span>
              <span>{version.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function AppIconDesignShowcase() {
  return (
    <figure className={styles.iconDesignShowcase} aria-label="Selfly 应用图标设计演变">
      <p className={styles.selfly0EvidenceTitle}>设计演变</p>

      <ol className={styles.iconDesignEvolutionStrip}>
        <li className={styles.iconDesignEvolutionStep}>
          <div className={styles.iconDesignEvolutionVisual}>
            <Image
              src="/images/selfly0/icon-design/draft-01-sketch.png"
              alt="Selfly 图标草图：橙色手绘书本与紫色蝴蝶"
              width={200}
              height={200}
              className={styles.iconDesignEvolutionIcon}
            />
          </div>
          <div className={styles.iconDesignEvolutionCopy}>
            <span className={styles.iconDesignEvolutionIndex}>01 · 草图捕捉第一直觉</span>
            <p>再收敛为「打开的书 + 蝴蝶」——记录与成长的视觉隐喻。</p>
          </div>
        </li>

        <li className={styles.iconDesignEvolutionStep}>
          <div className={styles.iconDesignEvolutionVisual}>
            <BookDraftCarousel />
          </div>
          <div className={styles.iconDesignEvolutionCopy}>
            <span className={styles.iconDesignEvolutionIndex}>02 · 平衡手绘与精稿</span>
            <p>保留手绘温度，同时收束线条、比例与构图，让符号在小尺寸仍可读。</p>
          </div>
        </li>

        <li className={styles.iconDesignEvolutionStep}>
          <div className={styles.iconDesignEvolutionVisual}>
            <Image
              src="/images/selfly0/icon-design/draft-06-frame.png"
              alt="Selfly 图标抽象化方案：橙色开放边框与双色蝴蝶"
              width={200}
              height={200}
              className={styles.iconDesignEvolutionIcon}
            />
          </div>
          <div className={styles.iconDesignEvolutionCopy}>
            <span className={styles.iconDesignEvolutionIndex}>03 · 符号抽象</span>
            <p>书本退化为开放「框」，蝴蝶飞出边界。</p>
          </div>
        </li>
      </ol>

      <FinalVersionsShowcase />

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>应用图标</span>
        <span>从书本隐喻到开放边框，浅色扁平版用于 App Store 上架</span>
      </figcaption>
    </figure>
  );
}
