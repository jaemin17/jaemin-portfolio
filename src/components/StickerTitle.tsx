import styles from "./StickerTitle.module.css";

export function StickerTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1 className={[styles.wrap, className].filter(Boolean).join(" ")} aria-label={text}>
      <svg
        className={styles.svg}
        viewBox="-60 0 960 220"
        role="img"
        aria-hidden="true"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <filter id="stickerShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="0"
              floodColor="#000"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* Outer black outline */}
        <text
          x="0"
          y="52%"
          dominantBaseline="middle"
          fontSize="170"
          fontWeight="900"
          fontFamily="var(--font-kalam), var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          fill="#0b0b0b"
          stroke="#0b0b0b"
          strokeWidth="38"
          strokeLinejoin="round"
          paintOrder="stroke fill"
          filter="url(#stickerShadow)"
        >
          {text}
        </text>

        {/* Inner white outline */}
        <text
          x="0"
          y="52%"
          dominantBaseline="middle"
          fontSize="170"
          fontWeight="900"
          fontFamily="var(--font-kalam), var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          fill="#0b0b0b"
          stroke="#ffffff"
          strokeWidth="28"
          strokeLinejoin="round"
          paintOrder="stroke fill"
        >
          {text}
        </text>

        {/* Top fill to keep the fill crisp */}
        <text
          x="0"
          y="52%"
          dominantBaseline="middle"
          fontSize="170"
          fontWeight="900"
          fontFamily="var(--font-kalam), var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          fill="#0b0b0b"
        >
          {text}
        </text>
      </svg>
    </h1>
  );
}

