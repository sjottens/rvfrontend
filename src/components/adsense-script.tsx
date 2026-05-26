"use client";

import { useEffect } from "react";

export function AdSenseScript() {
  useEffect(() => {
    // Create and inject AdSense script without data-nscript attribute
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016673566357322";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
