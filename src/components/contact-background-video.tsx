"use client";

import { useEffect, useRef } from "react";

type ContactBackgroundVideoProps = {
  src: string;
  className?: string;
  playbackRate?: number;
};

export function ContactBackgroundVideo({
  src,
  className,
  playbackRate = 0.25
}: ContactBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const applySpeed = () => {
      video.playbackRate = playbackRate;
    };

    applySpeed();
    video.addEventListener("loadedmetadata", applySpeed);

    return () => {
      video.removeEventListener("loadedmetadata", applySpeed);
    };
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="High-tech contact achtergrondvideo"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
