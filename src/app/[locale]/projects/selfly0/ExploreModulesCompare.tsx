import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import styles from "../[slug]/project.module.css";

const beforeSrc = "/images/selfly0/positioning-phone-1.png";
const afterSrc = "/images/selfly0/explore-modules-after.png";
const afterFilePath = path.join(process.cwd(), "public/images/selfly0/explore-modules-after.png");

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

export function ExploreModulesCompare() {
  const hasAfterImage = fs.existsSync(afterFilePath);

  return (
    <figure
      className={styles.positioningDiagram}
      aria-label="Explore 模块化记录：从功能名称入口到四种记录容器"
    >
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造前</span>
          <span className={styles.positioningDiagramCaption}>一组功能名称入口</span>
          <div className={styles.positioningPhoneFrame}>
            <span className={styles.positioningDynamicIsland} aria-hidden="true" />
            <Image
              src={beforeSrc}
              alt="改造前：价值观、优势测试等独立功能入口"
              width={360}
              height={780}
              className={styles.positioningDiagramPhone}
            />
          </div>
        </div>
        <div className={styles.positioningDiagramArrow} aria-hidden="true">
          {positioningArrow}
        </div>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造后</span>
          <span className={styles.positioningDiagramCaption}>四种记录容器</span>
          <div className={styles.positioningPhoneFrame}>
            <span className={styles.positioningDynamicIsland} aria-hidden="true" />
            {hasAfterImage ? (
              <Image
                src={afterSrc}
                alt="改造后：List、Plan、Board、Journal 四种记录容器与场景模板"
                width={360}
                height={780}
                className={styles.positioningDiagramPhone}
              />
            ) : (
              <div className={styles.exploreModulesAfterPending} aria-hidden="true">
                <span>待替换截图</span>
                <code>public/images/selfly0/explore-modules-after.png</code>
              </div>
            )}
          </div>
        </div>
      </div>
    </figure>
  );
}
