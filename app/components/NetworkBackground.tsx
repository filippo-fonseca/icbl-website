"use client";

import { useEffect, useRef } from "react";

interface Cell {
  x: number;
  y: number;
  width: number;
  height: number;
  phase: number;
  activated: boolean;
  activationTime: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const animationRef = useRef<number>(0);
  const waveOriginRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellWidth = 80;
    const cellHeight = 20;
    const gap = 3;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initCells = () => {
      cellsRef.current = [];
      const cols = Math.ceil(canvas.width / (cellWidth + gap)) + 2;
      const rows = Math.ceil(canvas.height / (cellHeight + gap)) + 2;

      for (let row = 0; row < rows; row++) {
        const offset = (row % 2) * (cellWidth / 2); // Brick pattern offset
        for (let col = 0; col < cols; col++) {
          cellsRef.current.push({
            x: col * (cellWidth + gap) + offset - cellWidth,
            y: row * (cellHeight + gap) - cellHeight,
            width: cellWidth,
            height: cellHeight,
            phase: Math.random() * Math.PI * 2,
            activated: false,
            activationTime: 0,
          });
        }
      }
    };

    const startNewWave = (time: number) => {
      // Start wave from random edge point (simulating SA node or pacemaker)
      const side = Math.floor(Math.random() * 4);
      let x, y;
      switch (side) {
        case 0: x = 0; y = Math.random() * canvas.height; break;
        case 1: x = canvas.width; y = Math.random() * canvas.height; break;
        case 2: x = Math.random() * canvas.width; y = 0; break;
        default: x = Math.random() * canvas.width; y = canvas.height;
      }
      waveOriginRef.current = { x, y, time };
    };

    const drawSarcomere = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      contraction: number,
      activation: number
    ) => {
      const baseAlpha = 0.08 + activation * 0.25;
      const contractedWidth = width * (0.85 + contraction * 0.15);
      const xOffset = (width - contractedWidth) / 2;

      // Cell membrane
      ctx.fillStyle = `rgba(100, 160, 220, ${baseAlpha * 0.3})`;
      ctx.fillRect(x + xOffset, y, contractedWidth, height);

      // Sarcomere bands (Z-lines and A-bands)
      const bandCount = 6;
      const bandWidth = contractedWidth / bandCount;

      for (let i = 0; i < bandCount; i++) {
        const bandX = x + xOffset + i * bandWidth;

        // Z-line (thin dark line)
        if (i > 0) {
          ctx.fillStyle = `rgba(60, 120, 180, ${baseAlpha * 0.8})`;
          ctx.fillRect(bandX - 1, y + 2, 2, height - 4);
        }

        // A-band (darker middle region)
        const aBandWidth = bandWidth * 0.5;
        const aBandX = bandX + (bandWidth - aBandWidth) / 2;
        ctx.fillStyle = `rgba(80, 140, 200, ${baseAlpha * 0.5})`;
        ctx.fillRect(aBandX, y + 3, aBandWidth * (0.7 + contraction * 0.3), height - 6);
      }

      // Activation glow
      if (activation > 0) {
        ctx.shadowColor = "rgba(100, 180, 255, 0.5)";
        ctx.shadowBlur = 10 * activation;
        ctx.strokeStyle = `rgba(120, 180, 255, ${activation * 0.4})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + xOffset, y, contractedWidth, height);
        ctx.shadowBlur = 0;
      }
    };

    const drawConductionPath = (
      ctx: CanvasRenderingContext2D,
      origin: { x: number; y: number },
      radius: number,
      alpha: number
    ) => {
      // Draw expanding wave front
      const gradient = ctx.createRadialGradient(
        origin.x, origin.y, radius * 0.8,
        origin.x, origin.y, radius
      );
      gradient.addColorStop(0, `rgba(100, 180, 255, 0)`);
      gradient.addColorStop(0.5, `rgba(100, 180, 255, ${alpha * 0.15})`);
      gradient.addColorStop(1, `rgba(100, 180, 255, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(origin.x, origin.y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    let lastWaveTime = 0;
    const waveCooldown = 3000; // New wave every 3 seconds
    const waveSpeed = 0.3; // pixels per ms

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Start new conduction wave periodically
      if (time - lastWaveTime > waveCooldown) {
        startNewWave(time);
        lastWaveTime = time;
      }

      const wave = waveOriginRef.current;
      const waveRadius = (time - wave.time) * waveSpeed;
      const maxRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);

      // Draw conduction wave
      if (waveRadius < maxRadius && waveRadius > 0) {
        const waveAlpha = 1 - waveRadius / maxRadius;
        drawConductionPath(ctx, wave, waveRadius, waveAlpha);
      }

      // Draw and update cells
      for (const cell of cellsRef.current) {
        // Check if wave has reached this cell
        const dx = cell.x + cell.width / 2 - wave.x;
        const dy = cell.y + cell.height / 2 - wave.y;
        const distToWave = Math.sqrt(dx * dx + dy * dy);

        if (distToWave < waveRadius && distToWave > waveRadius - 100) {
          cell.activated = true;
          cell.activationTime = time;
        }

        // Calculate activation decay
        const timeSinceActivation = time - cell.activationTime;
        const activationDuration = 800;
        const activation = cell.activated
          ? Math.max(0, 1 - timeSinceActivation / activationDuration)
          : 0;

        if (activation <= 0) {
          cell.activated = false;
        }

        // Calculate contraction (follows activation with slight delay)
        const contractionDelay = 100;
        const contractionDuration = 600;
        const contractionPhase = Math.max(0, timeSinceActivation - contractionDelay);
        const contraction = cell.activated || contractionPhase < contractionDuration
          ? Math.sin((contractionPhase / contractionDuration) * Math.PI) * 0.3
          : 0;

        // Base rhythm (subtle)
        const baseRhythm = Math.sin(time * 0.001 + cell.phase) * 0.05 + 0.05;

        drawSarcomere(
          ctx,
          cell.x,
          cell.y,
          cell.width,
          cell.height,
          contraction + baseRhythm,
          activation
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      initCells();
    };

    resize();
    initCells();
    startNewWave(0);
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
