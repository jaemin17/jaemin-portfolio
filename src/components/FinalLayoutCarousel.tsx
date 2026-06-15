"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FinalLayoutCarousel.module.css";

type Slide = {
  src: string;
  alt: string;
  label: string;
};

type Props = {
  slides: Slide[];
  caption?: string;
};

export function FinalLayoutCarousel({ slides, caption }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.frame}>
      <div className={styles.canvas}>
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1440}
            height={778}
            className={`${styles.image} ${i === active ? styles.imageActive : ""}`}
            priority={i === 0}
          />
        ))}
      </div>
      <div className={styles.tabs}>
        {slides.map((slide, i) => (
          <button
            key={i}
            className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={slide.label}
          >
            <span className={styles.tabLabel}>{slide.label}</span>
          </button>
        ))}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
