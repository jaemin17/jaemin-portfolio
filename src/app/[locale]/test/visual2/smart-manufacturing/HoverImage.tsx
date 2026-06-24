"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

type HoverSwapImageProps = {
  src: string;
  hoverSrc: string;
  width: number;
  height: number;
  alt: string;
};

export function HoverSwapImage({ src, hoverSrc, width, height, alt }: HoverSwapImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", overflow: "hidden", aspectRatio: `${width}/${height}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={assetPath(src)}
        width={width}
        height={height}
        alt={alt}
        loading="eager"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "auto",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      />
      <Image
        src={assetPath(hoverSrc)}
        width={width}
        height={height}
        alt={`${alt} alternate`}
        loading="eager"
        unoptimized={hoverSrc.endsWith(".gif")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "auto",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
}

type CarouselItem = { type: "image"; src: string } | { type: "video"; src: string };

type AutoCarouselProps = {
  items: readonly CarouselItem[];
  alt: string;
  width: number;
  height: number;
  interval?: number;
};

export function AutoCarousel({ items, alt, width, height, interval = 3500 }: AutoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveIndex((index) => (index + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [interval, items.length]);

  return (
    <div style={{ position: "relative", overflow: "hidden", aspectRatio: `${width}/${height}`, background: "#0f1117" }}>
      {items.map((item, index) => (
        item.type === "video" ? (
          <video
            key={item.src}
            src={assetPath(item.src)}
            autoPlay loop muted playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: activeIndex === index ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          />
        ) : (
          <Image
            key={item.src}
            src={assetPath(item.src)}
            width={width}
            height={height}
            alt={index === 0 ? alt : `${alt} (${index + 1})`}
            loading="eager"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "auto",
              opacity: activeIndex === index ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          />
        )
      ))}
    </div>
  );
}
