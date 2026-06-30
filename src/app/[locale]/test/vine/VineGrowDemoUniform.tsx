"use client";

import { useState, type CSSProperties } from "react";
import styles from "./vine.module.css";
import { B1_LINE_MAIN, B1_LINE_FORK, B2_LINE, leaves } from "./VineGrowDemo";

// Uniform-width branches synthesized purely from the centerlines:
// a thick body stroke + a wider dark outline stroke, both grown via dashoffset.
// No silhouette / mask needed — proves a branch can be generated from the line alone.

const OUTLINE = "#3f2a18";
const BODY = "#a4763f";

type Branch = { d: string; w: number; d_: number; dur: number };

const branches: Branch[] = [
  { d: B1_LINE_MAIN, w: 15, d_: 0, dur: 1.7 },
  { d: B1_LINE_FORK, w: 11, d_: 0.95, dur: 1 },
  { d: B2_LINE, w: 13, d_: 0.25, dur: 1.2 },
];

export function VineGrowDemoUniform() {
  const [runId, setRunId] = useState(0);

  return (
    <div className={styles.stageWrap}>
      <div className={styles.stage}>
        <svg
          key={runId}
          className={styles.vine}
          viewBox="0 0 429 283"
          fill="none"
          role="img"
          aria-label="由中轴线生成的匀宽枝干生长动画"
        >
          {/* outlines first, then body on top — both grow together */}
          {branches.map((b, i) => (
            <path
              key={`outline-${i}`}
              className={styles.uniStroke}
              d={b.d}
              pathLength={1}
              stroke={OUTLINE}
              strokeWidth={b.w + 3}
              style={{ "--d": `${b.d_}s`, "--dur": `${b.dur}s` } as CSSProperties}
            />
          ))}
          {branches.map((b, i) => (
            <path
              key={`body-${i}`}
              className={styles.uniStroke}
              d={b.d}
              pathLength={1}
              stroke={BODY}
              strokeWidth={b.w}
              style={{ "--d": `${b.d_}s`, "--dur": `${b.dur}s` } as CSSProperties}
            />
          ))}

          {leaves.map((leaf, i) => (
            <g
              key={`leaf-${i}`}
              className={styles.leaf}
              style={{ "--d": `${leaf.d_}s` } as CSSProperties}
            >
              <path d={leaf.d} fill={leaf.fill} stroke={leaf.stroke} strokeLinejoin="round" />
              {leaf.outline ? (
                <path d={leaf.outline} fill="none" stroke={leaf.stroke} strokeLinejoin="round" />
              ) : null}
            </g>
          ))}
        </svg>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.replay} onClick={() => setRunId((n) => n + 1)}>
          ↻ 重播
        </button>
      </div>
    </div>
  );
}
