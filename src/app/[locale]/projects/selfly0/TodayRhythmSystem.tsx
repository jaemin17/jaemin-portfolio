"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./selfly0.module.css";

const focusSlides = [
  {
    id: "empty",
    src: assetPath("/images/selfly0/today-empty.webp"),
    alt: "Selfly Today 空态：三个待添加任务槽位",
    phase: "空态",
    caption: "3 个槽位，克制入口",
  },
  {
    id: "active",
    src: assetPath("/images/selfly0/today-active.webp"),
    alt: "Selfly Today 进行中：Top 3 展示三项聚焦任务，一项已完成",
    phase: "进行中",
    caption: "每日只盯少数几件",
  },
  {
    id: "done",
    src: assetPath("/images/selfly0/today-done.webp"),
    alt: "Selfly Today 已完成：Top 3 全部完成并显示祝贺反馈",
    phase: "已完成",
    caption: "完成有反馈",
  },
] as const;

const flowSlides = [
  {
    id: "today",
    src: assetPath("/images/selfly0/today-rhythm-today-annotated-zh.webp"),
    alt: "Selfly 今日重要 Top 3：标注明日草稿和其他待办分流入口",
    phase: "今日聚焦",
    caption: "今天只处理重点",
  },
  {
    id: "tomorrow",
    src: assetPath("/images/selfly0/today-rhythm-tomorrow-zh.webp"),
    alt: "Selfly 明日重要 Top 3：提前写好明日草稿",
    phase: "明日草稿",
    caption: "跨日后进入 Today",
  },
  {
    id: "backlog",
    src: assetPath("/images/selfly0/today-rhythm-backlog-zh.webp"),
    alt: "Selfly 其他待办：Backlog 保留暂不处理的事项",
    phase: "其他待办",
    caption: "暂不处理但保留",
  },
] as const;

const INTERVAL_MS = 3400;

type Slide = (typeof focusSlides)[number] | (typeof flowSlides)[number];

function PhoneCarousel({
  title,
  description,
  ariaLabel,
  slides,
  activeIndex,
  onSelect,
}: {
  title: string;
  description: string;
  ariaLabel: string;
  slides: readonly Slide[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const active = slides[activeIndex];

  return (
    <div className={styles.todayRhythmSystemPanel}>
      <div className={styles.todayRhythmSystemPanelCopy}>
        <p className={styles.todayRhythmSystemPanelTitle}>{title}</p>
        <p className={styles.todayRhythmSystemPanelDescription}>{description}</p>
      </div>

      <div className={styles.todayRhythmSystemPhoneStage}>
        <div className={styles.todayTop3PhoneBezel}>
          <div className={styles.todayTop3PhoneFrame}>
            <div className={styles.todayTop3PhoneScreen}>
              {slides.map((slide, index) => (
                <Image
                  key={slide.id}
                  src={slide.src}
                  alt={slide.alt}
                  width={470}
                  height={1024}
                  className={`${styles.todayTop3CarouselImage} ${
                    index === activeIndex ? styles.todayTop3CarouselImageActive : ""
                  }`}
                  sizes="(max-width: 760px) 58vw, 210px"
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.todayRhythmSystemTabs} role="tablist" aria-label={ariaLabel}>
        {slides.map((slide, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={[
                styles.todayRhythmSystemTab,
                selected ? styles.todayRhythmSystemTabActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect(index)}
            >
              <span>{slide.phase}</span>
            </button>
          );
        })}
      </div>

      <p className={styles.todayTop3CarouselLive} aria-live="polite">
        {active.phase}：{active.caption}
      </p>
    </div>
  );
}

export function TodayRhythmSystem() {
  const [focusIndex, setFocusIndex] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);

  const goToFocus = useCallback((index: number) => {
    setFocusIndex(index % focusSlides.length);
  }, []);

  const goToFlow = useCallback((index: number) => {
    setFlowIndex(index % flowSlides.length);
  }, []);

  useEffect(() => {
    if (hoverPaused) return;
    const timer = window.setInterval(() => {
      setFocusIndex((current) => (current + 1) % focusSlides.length);
      setFlowIndex((current) => (current + 1) % flowSlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [hoverPaused]);

  return (
    <figure
      className={styles.todayRhythmSystemFigure}
      aria-label="Selfly Today 节奏系统：Top 3 状态与 Today、Tomorrow、Backlog 分流"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={() => setHoverPaused(false)}
    >
      <div className={styles.todayRhythmSystemGrid}>
        <PhoneCarousel
          title="限制今天"
          description="Top 3 压低首页容量，让用户只盯少数重点。"
          ariaLabel="Top 3 状态"
          slides={focusSlides}
          activeIndex={focusIndex}
          onSelect={goToFocus}
        />
        <PhoneCarousel
          title="安放未来"
          description="Tomorrow 和 Backlog 承接非今日事项，不挤占今天。"
          ariaLabel="每日节奏容器"
          slides={flowSlides}
          activeIndex={flowIndex}
          onSelect={goToFlow}
        />
      </div>
    </figure>
  );
}
