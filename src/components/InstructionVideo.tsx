"use client";

import { useEffect, useRef } from "react";

type InstructionVideoProps = {
  caption: string;
  src: string;
};

export function InstructionVideo({ caption, src }: InstructionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const startVideo = () => {
      void video.play().catch(() => {
        video.controls = true;
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      startVideo();
      return;
    }

    video.addEventListener("canplay", startVideo, { once: true });

    return () => {
      video.removeEventListener("canplay", startVideo);
    };
  }, []);

  return (
    <figure className="instruction-video" aria-labelledby="instruction-video-caption">
      <div className="instruction-video__frame">
        <video
          aria-label={caption}
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support this instruction video.
        </video>
      </div>
      <figcaption id="instruction-video-caption">{caption}</figcaption>
    </figure>
  );
}
