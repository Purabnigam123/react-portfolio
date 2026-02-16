import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0,
        canvas.height * Math.sin(t),
        canvas.width,
        canvas.height
      );

      gradient.addColorStop(0, "#0d2763");
      gradient.addColorStop(0.5, "#70a7ff");
      gradient.addColorStop(1, "#0c2764");

      ctx.globalAlpha = 0.4;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};

export default AuroraBackground;
