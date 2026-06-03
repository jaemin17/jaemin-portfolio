import Image from "next/image";
import styles from "../[slug]/project.module.css";

const states = [
  {
    id: "empty",
    src: "/images/selfly0/today-empty.png",
    alt: "Selfly Today 空态：三个待添加任务槽位",
    phase: "空态",
    caption: "3 个槽位，克制入口",
  },
  {
    id: "active",
    src: "/images/selfly0/today-active.png",
    alt: "Selfly Today 进行中：Top 3 展示三项聚焦任务，一项已完成",
    phase: "进行中",
    caption: "每日只盯少数几件",
  },
  {
    id: "done",
    src: "/images/selfly0/today-done.png",
    alt: "Selfly Today 已完成：Top 3 全部完成并显示祝贺反馈",
    phase: "已完成",
    caption: "完成有反馈",
  },
] as const;

export function TodayTop3States() {
  return (
    <figure
      className={styles.positioningDiagram}
      aria-label="Selfly Today 页 Top 3：空态、进行中与完成反馈"
    >
      <div className={`${styles.positioningDiagramFlow} ${styles.todayTop3Flow}`}>
        {states.map((state) => (
          <div key={state.id} className={styles.positioningDiagramCol}>
            <span className={styles.positioningDiagramPhase}>{state.phase}</span>
            <span className={styles.positioningDiagramCaption}>{state.caption}</span>
            <div className={styles.positioningPhoneFrame}>
              <span className={styles.positioningDynamicIsland} aria-hidden="true" />
              <Image
                src={state.src}
                alt={state.alt}
                width={360}
                height={780}
                className={styles.positioningDiagramPhone}
              />
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
