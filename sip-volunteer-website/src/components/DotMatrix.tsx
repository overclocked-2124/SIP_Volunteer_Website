"use client";
import React, { useRef, useEffect } from 'react';

const DotMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dots: { x: number; y: number; size: number }[] = [];
    const mouse = { x: 0, y: 0 };

    const dotCount = 1000;
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
      });
    }

    const mouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', mouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.fillStyle = 'rgba(249, 115, 22, 0.8)'; // Orange
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // White
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default DotMatrix;