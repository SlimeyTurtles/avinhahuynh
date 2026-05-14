"use client";

import { useEffect, useRef } from "react";

const ParticleNetwork = ({
  density = 0.00012,
  linkDistance = 140,
  speed = 0.25,
  pointColor = "rgba(251, 146, 60, 0.9)",
  linkColor = "251, 146, 60",
  lineWidth = 1.2
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const spawn = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * 1.4 + 0.6
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.max(40, Math.min(140, Math.round(width * height * density)));
      const current = particlesRef.current;
      if (current.length === 0) {
        for (let i = 0; i < target; i++) {
          current.push(spawn());
        }
      } else if (current.length < target) {
        while (current.length < target) current.push(spawn());
      } else if (current.length > target) {
        current.length = target;
      }

      if (reducedMotion.matches) draw(false);
    };

    const draw = (animate) => {
      ctx.clearRect(0, 0, width, height);
      const parts = particlesRef.current;
      const ptr = pointerRef.current;

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (animate) {
          if (ptr.active) {
            const dx = p.x - ptr.x;
            const dy = p.y - ptr.y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < 9000) {
              const f = (9000 - dist2) / 9000;
              const d = Math.sqrt(dist2) || 1;
              p.vx += (dx / d) * f * 0.025;
              p.vy += (dy / d) * f * 0.025;
            }
          }

          p.vx *= 0.97;
          p.vy *= 0.97;
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = width + 20;
          else if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          else if (p.y > height + 20) p.y = -20;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();
      }

      const linkSq = linkDistance * linkDistance;
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkSq) {
            const alpha = (1 - d2 / linkSq) * 0.5;
            ctx.strokeStyle = `rgba(${linkColor}, ${alpha})`;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const step = () => {
      draw(true);
      rafRef.current = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      if (reducedMotion.matches) {
        draw(false);
      } else {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
      pointerRef.current.active = true;
    };
    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    start();

    reducedMotion.addEventListener("change", start);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      reducedMotion.removeEventListener("change", start);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      particlesRef.current = [];
    };
  }, [density, linkDistance, speed, pointColor, linkColor, lineWidth]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;
