import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";
import { resolveSelfly0Screenshot, selfly0Screenshots } from "./selfly0Screenshots";

const positioningArrow = (
  <svg width="101" height="24" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 8.83373C2.57145 8.83373 2.64291 8.83373 18.6572 8.86261C34.6715 8.89149 66.6266 8.94925 82.8399 8.92303C99.0533 8.89681 98.5567 8.78487 94.2751 7.46963C89.9935 6.15438 81.9419 3.63923 79.0663 2.52903C78.3106 2.23727 87.2513 4.13874 95.8585 7.27645C98.634 8.28827 97.9217 8.763 94.7819 10.3823C91.6421 12.0016 86.0312 14.9151 82.3691 16.9772C78.707 19.0393 77.1636 20.1618 75.3912 21.4138"
      stroke="#FFA84A"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

type ExploreTemplatesSwitcherProps = {
  locale?: Locale;
};

export function ExploreTemplatesSwitcher({ locale = "zh" }: ExploreTemplatesSwitcherProps) {
  const beforeSrc = resolveSelfly0Screenshot(selfly0Screenshots.exploreCreate.before, locale);
  const afterSrc = resolveSelfly0Screenshot(selfly0Screenshots.exploreCreate.after, locale);
  const beforeFilePath = path.join(process.cwd(), "public", beforeSrc.replace(/^\//, ""));
  const hasBeforeImage = fs.existsSync(beforeFilePath);

  const beforeAlt =
    locale === "en"
      ? "Before: create a list by filling title, description, icon, and quantity first"
      : "改造前：创建清单时需先填写标题、说明、图标和数量";
  const afterAlt =
    locale === "en"
      ? "After: choose a type to create and start from inspiration templates"
      : "改造后：选择创建类型与从灵感开始的场景模板列表";

  return (
    <figure
      className={styles.positioningDiagram}
      aria-label="Explore 创建体验：从空白配置到场景模板"
    >
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造前</span>
          <span className={styles.positioningDiagramCaption}>空白配置表单</span>
          <div className={styles.positioningPhoneFrame}>
            {hasBeforeImage ? (
              <Image
                src={assetPath(beforeSrc)}
                alt={beforeAlt}
                width={470}
                height={1024}
                className={styles.positioningDiagramPhone}
              />
            ) : (
              <div className={styles.exploreModulesAfterPending} aria-hidden="true">
                <span>待替换截图</span>
                <code>public{beforeSrc}</code>
              </div>
            )}
          </div>
        </div>
        <div className={styles.positioningDiagramArrow} aria-hidden="true">
          {positioningArrow}
        </div>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造后</span>
          <span className={styles.positioningDiagramCaption}>类型选择 + 场景模板</span>
          <div className={styles.positioningPhoneFrame}>
            <Image
              src={assetPath(afterSrc)}
              alt={afterAlt}
              width={470}
              height={1024}
              className={styles.positioningDiagramPhone}
            />
          </div>
        </div>
      </div>
    </figure>
  );
}
