"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselItem = { type: "image"; src: string } | { type: "video"; src: string };

type AutoCarouselProps = {
  items: CarouselItem[];
  alt: string;
  width: number;
  height: number;
  interval?: number;
};

export function AutoCarousel({ items, alt, width, height, interval = 3500 }: AutoCarouselProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowOverlay((v) => !v), interval);
    return () => clearInterval(id);
  }, [interval]);

  const base = items[0];
  const overlay = items[1];

  return (
    <div style={{ position: "relative", overflow: "hidden", aspectRatio: `${width}/${height}`, background: "#0f1117" }}>
      {base.type === "video" ? (
        <video
          src={base.src}
          autoPlay loop muted playsInline
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <Image
          src={base.src}
          width={width}
          height={height}
          alt={alt}
          loading="eager"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      )}

      {overlay && (
        overlay.type === "video" ? (
          <video
            src={overlay.src}
            autoPlay loop muted playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: showOverlay ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          />
        ) : (
          <Image
            src={overlay.src}
            width={width}
            height={height}
            alt={`${alt} (2)`}
            loading="eager"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "auto",
              opacity: showOverlay ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          />
        )
      )}
    </div>
  );
}
