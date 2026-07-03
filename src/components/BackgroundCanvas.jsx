import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Grid configuration
    const gridSize = 45; // grid cell size in pixels
    const characters = ['+', '-', '/', 'x', 'o', '1', '0', '•', '[ ]', '::'];
    
    // Grid point states for animating indicators
    const gridPoints = [];
    const cols = Math.ceil(width / gridSize) + 1;
    const rows = Math.ceil(height / gridSize) + 1;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        // Only animate a subset of grid intersections to keep it clean and performant
        if (Math.random() < 0.12) {
          gridPoints.push({
            x: c * gridSize,
            y: r * gridSize,
            char: characters[Math.floor(Math.random() * characters.length)],
            opacity: Math.random() * 0.4,
            speed: 0.005 + Math.random() * 0.015,
            direction: Math.random() > 0.5 ? 1 : -1,
          });
        }
      }
    }

    // Animation Loop
    const draw = () => {
      ctx.fillStyle = '#0c0c0e';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Lines (extremely subtle)
      ctx.strokeStyle = 'rgba(245, 245, 247, 0.04)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      // Verticals
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      // Horizontals
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // Draw active intersections with micro text-glyphs
      ctx.font = '9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      gridPoints.forEach((point) => {
        // Animate opacity up and down
        point.opacity += point.speed * point.direction;
        if (point.opacity > 0.35) {
          point.direction = -1;
        } else if (point.opacity < 0.01) {
          point.direction = 1;
          point.char = characters[Math.floor(Math.random() * characters.length)];
        }

        ctx.fillStyle = `rgba(245, 245, 247, ${Math.max(0, point.opacity)})`;
        ctx.fillText(point.char, point.x, point.y);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
