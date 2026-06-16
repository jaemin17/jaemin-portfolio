"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FinalLayoutCarousel.module.css";

type ImageSlide = { src: string; alt: string; label: string; description?: string };
type ContentSlide = { content: React.ReactNode; label: string; description?: string };
type Slide = ImageSlide | ContentSlide;

type Props = {
  slides: Slide[];
  caption?: string;
};

export function FinalLayoutCarousel({ slides, caption }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.frame}>
      <div className={styles.canvas}>
        {slides.map((slide, i) =>
          "content" in slide ? (
            <div
              key={`content-${i}`}
              className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}
            >
              {slide.content}
            </div>
          ) : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={1440}
              height={778}
              className={`${styles.image} ${i === active ? styles.imageActive : ""}`}
            />
          )
        )}
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
      {(slides[active].description ?? caption) && (
        <p className={styles.caption}>{slides[active].description ?? caption}</p>
      )}
    </div>
  );
}
