"use client";

import { useEffect, useRef } from "react";

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    let mouseX = 0.5;
    let mouseY = 0.4;
    let targetX = 0.5;
    let targetY = 0.4;
    const t0 = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX / width;
      targetY = event.clientY / height;
    };

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const cx = width * (0.72 + (mouseX - 0.5) * 0.08);
      const cy = height * (0.38 + (mouseY - 0.5) * 0.08);

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.55);
      glow.addColorStop(0, "rgba(59, 130, 246, 0.16)");
      glow.addColorStop(0.35, "rgba(59, 130, 246, 0.05)");
      glow.addColorStop(1, "rgba(5, 5, 5, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const rings = 5;
      for (let i = 0; i < rings; i += 1) {
        const pulse = Math.sin(t * 0.55 + i * 0.7) * 0.5 + 0.5;
        const radius = 90 + i * 70 + pulse * 10;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${0.035 + pulse * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      const nodes = 28;
      for (let i = 0; i < nodes; i += 1) {
        const angle = (i / nodes) * Math.PI * 2 + t * 0.08;
        const orbit = 140 + (i % 5) * 38;
        const x = cx + Math.cos(angle) * orbit;
        const y = cy + Math.sin(angle) * orbit * 0.62;
        const alpha = 0.15 + ((i % 4) / 4) * 0.25;
        ctx.beginPath();
        ctx.arc(x, y, i % 3 === 0 ? 1.8 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`;
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
