"use client";

import { useEffect, useRef } from "react";

export default function AnatomicalHeart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
    >
      {/* Heart Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] object-cover scale-125"
      >
        <source src="/heart_loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
