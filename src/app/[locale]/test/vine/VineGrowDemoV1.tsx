"use client";

import { useState, type CSSProperties } from "react";
import styles from "./vine.module.css";

// The very first prototype, before any real SVG was provided:
// hand-drawn uniform-width strokes that grow via stroke-dashoffset.

type Leaf = { x: number; y: number; r: number; s: number; d: number };
type Flower = { x: number; y: number; s: number; d: number };

const LEAF = "M0 0C5 -7 14 -8 20 -2C14 4 5 5 0 0Z";

const leaves: Leaf[] = [
  { x: 60, y: 332, r: 168, s: 1, d: 0.35 },
  { x: 90, y: 288, r: 18, s: 0.9, d: 0.55 },
  { x: 96, y: 262, r: -34, s: 1.05, d: 0.7 },
  { x: 122, y: 224, r: 26, s: 0.95, d: 0.95 },
  { x: 138, y: 186, r: 150, s: 1, d: 1.1 },
  { x: 150, y: 150, r: -22, s: 1.05, d: 1.25 },
  { x: 186, y: 116, r: 40, s: 0.95, d: 1.5 },
  { x: 214, y: 94, r: -8, s: 0.9, d: 1.65 },
  { x: 72, y: 250, r: 196, s: 0.9, d: 0.95 },
  { x: 44, y: 224, r: 214, s: 1, d: 1.15 },
  { x: 198, y: 150, r: 8, s: 0.9, d: 1.35 },
  { x: 244, y: 158, r: -16, s: 1, d: 1.55 },
];

const flowers: Flower[] = [
  { x: 250, y: 68, s: 1, d: 1.85 },
  { x: 274, y: 154, s: 0.78, d: 1.7 },
];

const petalAngles = [0, 72, 144, 216, 288];

export function VineGrowDemoV1() {
  const [runId, setRunId] = useState(0);

  return (
    <div className={styles.stageWrap}>
      <div className={styles.stage}>
        <svg
          key={runId}
          className={styles.vine}
          viewBox="0 0 320 410"
          role="img"
          aria-label="第一版占位生长动画"
        >
          <path
            className={`${styles.strokeV1} ${styles.stemV1}`}
            pathLength={1}
            style={{ "--d": "0s", "--dur": "1.5s" } as CSSProperties}
            d="M48 392C60 330 110 320 96 262C84 214 150 196 150 150C150 104 210 96 250 70"
          />
          <path
            className={`${styles.strokeV1} ${styles.branchV1}`}
            pathLength={1}
            style={{ "--d": "0.7s", "--dur": "0.8s" } as CSSProperties}
            d="M96 262C76 252 48 246 30 210"
          />
          <path
            className={`${styles.strokeV1} ${styles.branchV1}`}
            pathLength={1}
            style={{ "--d": "1.15s", "--dur": "0.8s" } as CSSProperties}
            d="M150 150C196 150 226 166 274 156"
          />

          {leaves.map((leaf, i) => (
            <g key={`leaf-${i}`} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}>
              <path
                className={styles.leafV1}
                d={LEAF}
                style={{ "--d": `${leaf.d}s`, "--s": leaf.s } as CSSProperties}
              />
            </g>
          ))}

          {flowers.map((flower, i) => (
            <g key={`flower-${i}`} transform={`translate(${flower.x} ${flower.y})`}>
              <g
                className={styles.flower}
                style={{ "--d": `${flower.d}s`, "--s": flower.s } as CSSProperties}
              >
                {petalAngles.map((a) => (
                  <ellipse
                    key={a}
                    className={styles.petal}
                    cx={0}
                    cy={-8}
                    rx={4.6}
                    ry={8}
                    transform={`rotate(${a})`}
                  />
                ))}
                <circle className={styles.flowerCore} r={4.2} />
              </g>
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
