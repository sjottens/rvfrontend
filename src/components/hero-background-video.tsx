"use client";

import { useEffect, useRef, useState } from "react";

type HeroBackgroundVideoProps = {
  src: string;
  className?: string;
  ariaLabel: string;
};

const VIDEO_LOAD_DELAY_MS = 1100;

export function HeroBackgroundVideo({ src, className, ariaLabel }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startLoading = () => setShouldLoad(true);
    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof browserWindow.requestIdleCallback === "function") {
      const idleId = browserWindow.requestIdleCallback(startLoading, { timeout: VIDEO_LOAD_DELAY_MS });
      return () => browserWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = setTimeout(startLoading, VIDEO_LOAD_DELAY_MS);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    const reveal = () => setIsVisible(true);
    video.addEventListener("loadeddata", reveal, { once: true });

    return () => {
      video.removeEventListener("loadeddata", reveal);
    };
  }, [shouldLoad]);

  if (!shouldLoad) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      className={`${className ?? ""} transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
