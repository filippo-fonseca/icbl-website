"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const drawNode = (node: Node, time: number) => {
      const pulseScale = 1 + Math.sin(node.pulse + time * node.pulseSpeed) * 0.3;
      const alpha = 0.5 + Math.sin(node.pulse + time * node.pulseSpeed) * 0.3;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * pulseScale * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 150, 200, ${alpha})`;
      ctx.fill();

      // Outer glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * pulseScale * 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 150, 200, ${alpha * 0.2})`;
      ctx.fill();
    };

    const drawConnection = (node1: Node, node2: Node, distance: number, maxDistance: number) => {
      const alpha = (1 - distance / maxDistance) * 0.3;
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = `rgba(100, 150, 200, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const updateNode = (node: Node) => {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges with padding
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

      // Keep in bounds
      node.x = Math.max(0, Math.min(canvas.width, node.x));
      node.y = Math.max(0, Math.min(canvas.height, node.y));
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const maxDistance = 150;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            drawConnection(nodes[i], nodes[j], distance, maxDistance);
          }
        }
      }

      // Draw and update nodes
      for (const node of nodes) {
        drawNode(node, time * 0.001);
        updateNode(node);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      initNodes();
    };

    resize();
    initNodes();
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
