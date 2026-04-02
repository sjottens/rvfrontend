"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

import { getMessages } from "@/data/i18n";
import { useLanguage } from "@/components/language-provider";

const STORAGE_KEY = "rvfrontend-background-audio";
const AUDIO_SRC = "/audio/bg-music.MP3";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(STORAGE_KEY) === "on";
  });
  const { language } = useLanguage();
  const t = getMessages(language);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = 0.18;

    if (!enabled) {
      audio.pause();
      window.localStorage.setItem(STORAGE_KEY, "off");
      return;
    }

    const playAudio = async () => {
      try {
        await audio.play();
        window.localStorage.setItem(STORAGE_KEY, "on");
      } catch {
        setEnabled(false);
      }
    };

    void playAudio();
  }, [enabled]);

  function toggleAudio() {
    setEnabled((current) => !current);
  }

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />

      <div className="fixed bottom-5 right-5 z-[90]">
        <button
          type="button"
          onClick={toggleAudio}
          className="flex items-center gap-3 rounded-full border border-white/20 bg-[#050812]/75 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl transition hover:border-white/35 hover:bg-[#0b1120]/88"
          aria-pressed={enabled}
          aria-label={enabled ? t.audio.pauseAria : t.audio.playAria}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cyan">
            {enabled ? <Pause size={16} /> : <Play size={16} className="translate-x-[1px]" />}
          </span>
          <span className="hidden sm:block">
            {enabled ? t.audio.on : t.audio.off}
          </span>
          <span className="sm:hidden">{enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}</span>
        </button>

      </div>
    </>
  );
}
