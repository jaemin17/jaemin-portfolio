import Image from "next/image";
import styles from "../[slug]/project.module.css";

/** Hotspot positions are percentages of the phone screenshot (470×1024). */
const hotspots = [
  {
    id: "tomorrow",
    name: "Tomorrow",
    caption: "明日草稿",
    left: 14,
    top: 11.5,
    width: 12,
    height: 7,
  },
  {
    id: "backlog",
    name: "其他任务",
    caption: "Backlog · 暂不处理",
    left: 50,
    top: 70,
    width: 50,
    height: 7.5,
  },
] as const;

export function TodayRhythmAnnotated() {
  return (
    <figure
      className={styles.todayRhythmAnnotated}
      aria-label="Selfly Today 页：Tomorrow 与其他任务（Backlog）入口"
    >
      <div className={styles.todayRhythmAnnotatedInner}>
        <div className={styles.todayRhythmPhoneStage}>
          <div className={styles.todayRhythmPhoneShell}>
            <span className={styles.positioningDynamicIsland} aria-hidden="true" />
            <Image
              src="/images/selfly0/today-active.png"
              alt="Selfly Today 页，标注 Top 3、Tomorrow 与 Backlog 入口"
              width={470}
              height={1024}
              className={styles.todayRhythmScreenshot}
              sizes="(max-width: 760px) 58vw, 280px"
            />
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className={`${styles.todayRhythmHotspot} ${styles[`todayRhythmHotspot_${spot.id}`]}`}
                style={{
                  left: `${spot.left}%`,
                  top: `${spot.top}%`,
                  width: `${spot.width}%`,
                  height: `${spot.height}%`,
                }}
              >
                <span className={styles.todayRhythmHotspotRing} aria-hidden="true" />
                <span className={styles.todayRhythmHotspotLabel}>
                  <strong>{spot.name}</strong>
                  <em>{spot.caption}</em>
                </span>
              </div>
            ))}
          </div>
        </div>
        <figcaption className={styles.todayRhythmLegend}>
          <p className={styles.todayRhythmLegendTitle}>分流非今日事项，减轻 Top 3 压力</p>
          <ul>
            {hotspots.map((spot) => (
              <li key={spot.id}>
                <span className={styles.todayRhythmLegendName}>{spot.name}</span>
                <span>{spot.caption}</span>
              </li>
            ))}
          </ul>
        </figcaption>
      </div>
    </figure>
  );
}
