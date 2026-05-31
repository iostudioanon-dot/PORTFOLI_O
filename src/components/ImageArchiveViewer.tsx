"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ImageRecord } from "@/data/imageRegistry";

type ImageArchiveViewerProps = {
  images: ImageRecord[];
  label?: string;
};

export function ImageArchiveViewer({
  images,
  label = "VISUAL RECORDS",
}: ImageArchiveViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const imageCountLabel = useMemo(
    () => `IMAGE ${String(activeIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`,
    [activeIndex, images.length],
  );

  if (!activeImage) {
    return null;
  }

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  }

  function goTo(index: number) {
    setActiveIndex(index);
  }

  return (
    <section
      aria-label={label}
      className="image-archive-viewer"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
      tabIndex={0}
    >
      <div className="image-archive-viewer__meta">
        <span>{label}</span>
        <span>{imageCountLabel}</span>
      </div>

      <div className="image-archive-viewer__stage">
        <Image
          alt={`${activeImage.title} visual archive record`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 78vw, 960px"
          src={activeImage.url}
          style={{ objectFit: "contain" }}
          unoptimized
        />
      </div>

      {images.length > 1 ? (
        <div className="image-archive-viewer__rail" aria-label="Visual record index">
          {images.map((image, index) => (
            <button
              aria-current={activeIndex === index ? "true" : undefined}
              aria-label={`Open visual record ${index + 1}: ${image.title}`}
              className="image-archive-viewer__rail-button io-button io-glitch-hover"
              data-active={activeIndex === index}
              key={image.id}
              onClick={() => goTo(index)}
              type="button"
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      ) : null}

      <div className="image-archive-viewer__controls" aria-label="Image archive controls">
        <button
          aria-label="Previous visual record"
          className="image-archive-viewer__button io-button io-glitch-hover"
          onClick={() => move(-1)}
          type="button"
        >
          PREV
        </button>
        <div className="image-archive-viewer__caption">
          <span>{activeImage.title}</span>
          <small>{activeImage.folder}</small>
        </div>
        <button
          aria-label="Next visual record"
          className="image-archive-viewer__button io-button io-glitch-hover"
          onClick={() => move(1)}
          type="button"
        >
          NEXT
        </button>
      </div>
    </section>
  );
}
