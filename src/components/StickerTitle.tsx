import type { CSSProperties, ReactNode } from "react";
import styles from "./StickerTitle.module.css";

const titleHeight = 220;
const displayHeight = 128;
const wordOverlap = -18;

function getWordBoxWidth(word: string) {
  const extraRightSpace = word === "Jiamin" ? 42 : word === "Li" ? 16 : 0;

  return Math.max(224, word.length * 81 + 68 + extraRightSpace);
}

export function StickerTitle({
  text,
  className,
  renderWord,
}: {
  text: string;
  className?: string;
  renderWord?: (word: string, index: number, wordNode: ReactNode) => ReactNode;
}) {
  const words = text.split(" ").filter(Boolean);
  const wordItems = words.map((word) => {
    const boxWidth = getWordBoxWidth(word);
    const displayWidth = Math.round((boxWidth / titleHeight) * displayHeight);

    return { word, boxWidth, displayWidth };
  });
  const titleWidth =
    wordItems.reduce((total, item) => total + item.displayWidth, 0) +
    wordOverlap * Math.max(0, wordItems.length - 1);

  return (
    <h1
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      aria-label={text}
      style={{ "--title-width": `${titleWidth}px` } as CSSProperties}
    >
      <span className={styles.inner}>
        {wordItems.map(({ word, boxWidth, displayWidth }, index) => {
          const wordNode = (
            <svg
              className={styles.svg}
              viewBox={`-72 0 ${boxWidth} ${titleHeight}`}
              role="img"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id={`stickerShadow-${index}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow
                    dx="0"
                    dy="12"
                    stdDeviation="0"
                    floodColor="#000"
                    floodOpacity="0.18"
                  />
                </filter>
              </defs>

              <text
                x="0"
                y="52%"
                dominantBaseline="middle"
                fontSize="170"
                fontWeight="700"
                fontFamily="var(--font-kalam), var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                fill="#0b0b0b"
                stroke="#0b0b0b"
                strokeWidth="48"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                filter={`url(#stickerShadow-${index})`}
              >
                {word}
              </text>

              <text
                x="0"
                y="52%"
                dominantBaseline="middle"
                fontSize="170"
                fontWeight="700"
                fontFamily="var(--font-kalam), var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                fill="#0b0b0b"
                stroke="#ffffff"
                strokeWidth="40"
                strokeLinejoin="round"
                paintOrder="stroke fill"
              >
                {word}
              </text>

              <text
                x="0"
                y="52%"
                dominantBaseline="middle"
                fontSize="170"
                fontWeight="700"
                fontFamily="var(--font-kalam), var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                fill="#0b0b0b"
              >
                {word}
              </text>
            </svg>
          );

          return (
            <span
              key={`${word}-${index}`}
              className={styles.wordWrap}
              style={{ "--word-width": `${displayWidth}px` } as CSSProperties}
            >
              {renderWord ? renderWord(word, index, wordNode) : wordNode}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
