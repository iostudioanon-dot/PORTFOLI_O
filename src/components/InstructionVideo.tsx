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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startVideo();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", startVideo);

    if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      startVideo();
    } else {
      video.addEventListener("canplay", startVideo, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", startVideo);
      document.removeEventListener("visibilitychange", startVideo);
      observer.disconnect();
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
