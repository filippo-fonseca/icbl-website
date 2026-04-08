"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NavigationSound() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Skip sound on first render (initial page load)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Create pop sound using Web Audio API
    const playPop = () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }
        const ctx = audioContextRef.current;

        // Create oscillator for the pop
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Pop sound characteristics
        oscillator.frequency.setValueAtTime(600, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);

        gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
      } catch (e) {
        // Audio not supported or blocked
      }
    };

    playPop();
  }, [pathname]);

  return null;
}
