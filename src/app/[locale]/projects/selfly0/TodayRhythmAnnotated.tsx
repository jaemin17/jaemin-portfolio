import Image from "next/image";
import styles from "../[slug]/project.module.css";

const SCREEN_W = 470;
const SCREEN_H = 1024;
/** Left gutter (px) for outside labels. */
const GUTTER_LEFT = 112;
const STAGE_W = SCREEN_W + GUTTER_LEFT;
const STAGE_H = SCREEN_H;

/** Positions in stage pixels (phone offset by GUTTER_LEFT on X). */
const hotspots = [
  {
    id: "tomorrow",
    name: "Tomorrow",
    caption: "明日草稿",
    anchor: { x: GUTTER_LEFT + 50, y: 138 },
    label: { x: 104, y: 138 },
    lineStart: { x: 104, y: 138 },
    labelAlign: "right" as const,
  },
  {
    id: "backlog",
    name: "其他任务",
    caption: "Backlog · 暂不处理",
    anchor: { x: GUTTER_LEFT + 235, y: 572 },
    label: { x: 104, y: 578 },
    lineStart: { x: 104, y: 578 },
    labelAlign: "right" as const,
  },
] as const;

function stagePctX(px: number) {
  return `${(px / STAGE_W) * 100}%`;
}

function stagePctY(px: number) {
  return `${(px / STAGE_H) * 100}%`;
}

export function TodayRhythmAnnotated() {
  return (
    <figure
      className={styles.todayRhythmAnnotated}
      aria-label="Selfly Today 页：Tomorrow 与其他任务（Backlog）入口"
    >
      <div className={styles.todayRhythmAnnotatedInner}>
        <div className={styles.todayRhythmPhoneStage}>
          <div
            className={styles.todayRhythmCalloutStage}
            style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}
          >
            <div className={styles.todayRhythmPhoneShell}>
              <span className={styles.positioningDynamicIsland} aria-hidden="true" />
              <Image
                src="/images/selfly0/today-active.png"
                alt="Selfly Today 页，标注 Top 3、Tomorrow 与 Backlog 入口"
                width={470}
                height={1024}
                className={styles.todayRhythmScreenshot}
                sizes="(max-width: 760px) 72vw, 280px"
              />
            </div>

            <svg
              className={styles.todayRhythmCalloutSvg}
              viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="todayRhythmArrowhead"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffa84a" />
                </marker>
              </defs>
              {hotspots.map((spot) => (
                <line
                  key={spot.id}
                  className={styles.todayRhythmCalloutLine}
                  x1={spot.lineStart.x}
                  y1={spot.lineStart.y}
                  x2={spot.anchor.x}
                  y2={spot.anchor.y}
                  markerEnd="url(#todayRhythmArrowhead)"
                />
              ))}
            </svg>

            {hotspots.map((spot) => (
              <div key={spot.id} className={styles.todayRhythmCallout}>
                <span
                  className={styles.todayRhythmCalloutAnchor}
                  style={{
                    left: stagePctX(spot.anchor.x),
                    top: stagePctY(spot.anchor.y),
                  }}
                  aria-hidden="true"
                />
                <span
                  className={`${styles.todayRhythmCalloutLabel} ${styles[`todayRhythmCalloutLabel_${spot.labelAlign}`]}`}
                  style={{
                    left: stagePctX(spot.label.x),
                    top: stagePctY(spot.label.y),
                  }}
                >
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
