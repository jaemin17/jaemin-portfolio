"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../[slug]/project.module.css";

const tabs = [
  {
    id: "list",
    label: "List",
    src: "/images/selfly0/explore-templates-list.png",
    alt: "场景模板：List 类型，如 My Values、My core strengths",
  },
  {
    id: "plan",
    label: "Plan",
    src: "/images/selfly0/explore-templates-plan.png",
    alt: "场景模板：Plan 类型，如 Places to Visit、Yearly Focus",
  },
  {
    id: "journal",
    label: "Journal",
    src: "/images/selfly0/explore-templates-journal.png",
    alt: "场景模板：Journal 类型，如 Happiness Journal、Gratitude",
  },
  {
    id: "board",
    label: "Board",
    src: "/images/selfly0/explore-templates-board.png",
    alt: "场景模板：Board 类型，如 Vision Board、Ideal self",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ExploreTemplatesSwitcher() {
  const [activeId, setActiveId] = useState<TabId>("list");
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <figure className={styles.exploreTemplatesSwitcher} aria-label="Explore 场景模板：按记录类型切换">
      <p className={styles.exploreTemplatesSwitcherTitle}>Start with inspiration</p>
      <div className={styles.exploreTemplatesTabs} role="tablist" aria-label="记录类型">
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={[
                styles.exploreTemplatesTab,
                selected ? styles.exploreTemplatesTabActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className={styles.exploreTemplatesPhoneStage}>
        <div className={styles.exploreTemplatesPhoneShell}>
          <span className={styles.positioningDynamicIsland} aria-hidden="true" />
          <Image
            key={activeTab.id}
            src={activeTab.src}
            alt={activeTab.alt}
            width={470}
            height={1024}
            className={styles.exploreTemplatesScreenshot}
            sizes="(max-width: 760px) 58vw, 300px"
            priority
          />
        </div>
      </div>
      <figcaption className={styles.exploreTemplatesCaption}>
        <span className={styles.exploreTemplatesCaptionLabel}>{activeTab.label}</span>
        <span>用场景解释模块，一键创建</span>
      </figcaption>
    </figure>
  );
}
