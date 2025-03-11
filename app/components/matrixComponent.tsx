"use client"


import { useEffect, useRef } from "react";

export default function AnotherPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet =  nums + latin + katakana;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops = new Array(columns).fill(1);

    const draw = () => {
      context.fillStyle = "rgba(246, 246, 246, 0.5)"; // Background TV disini
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#0F0";
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas ref={canvasRef} className= "top-0 left-0 bg-media responsive-width"></canvas>
  );
}