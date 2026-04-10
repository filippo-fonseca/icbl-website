"use client";

import { useEffect, useState, useRef } from "react";

const words = [
  "biomechanics",
  "mutations",
  "inherited diseases",
  "sarcomeres",
  "arrythmias",
];


export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[currentIndex];

    const tick = () => {
      if (isPaused) {
        // Pause before starting to delete
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2500);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          timeoutRef.current = setTimeout(tick, 40);
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing characters
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, 80);
        } else {
          // Word complete, pause
          setIsPaused(true);
          timeoutRef.current = setTimeout(tick, 0);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? 40 : 80);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, isPaused, currentIndex]);

  return (
    <span
      className="inline-block"
      style={{
        minWidth: "5.5em",
        background:
          "linear-gradient(135deg, #14365d 0%, #4a9eff 50%, #14365d 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {displayText}
      <span
        className="animate-blink ml-[2px] inline-block w-[3px] h-[0.9em] align-middle"
        style={{
          backgroundColor: "#4a9eff",
          WebkitTextFillColor: "initial",
        }}
      />
    </span>
  );
}
