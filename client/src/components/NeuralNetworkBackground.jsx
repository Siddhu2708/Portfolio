import { useEffect, useRef } from 'react';

/**
 * Subtle neural-network background — sky-blue dots + faint lines on dark navy
 * (matches original portfolio / reference screenshot)
 */
export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let w = 0;
    let h = 0;

    const isMobile = window.innerWidth < 768;
    const isSmall = window.innerWidth < 480;
    const count = isSmall ? 15 : isMobile ? 30 : 80;
    const linkDist = 150;
    const R = 56;
    const G = 189;
    const B = 248;

    const mouse = { x: null, y: null, active: false };
    let particles = [];

    const spawn = () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.6),
        vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.6),
        size: Math.random() * 2 + 1.5,
      }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      if (particles.length === 0) particles = spawn();
    };

    const onMove = (e) => {
      if (isMobile) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    resize();
    window.addEventListener('resize', resize);
    if (!isMobile) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseleave', onLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      if (!isSmall) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < linkDist) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${R}, ${G}, ${B}, ${0.1 * (1 - dist / linkDist)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }

          if (mouse.active && mouse.x != null) {
            const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
            if (dist < 140) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${R}, ${G}, ${B}, ${0.35 * (1 - dist / 140)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${R}, ${G}, ${B}, 0.25)`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[#0f172a]"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 15% 40%, rgba(56, 189, 248, 0.1), transparent 55%),
            radial-gradient(ellipse 60% 45% at 50% 0%, rgba(56, 189, 248, 0.06), transparent 50%),
            linear-gradient(180deg, #0c1424 0%, #0f172a 50%, #0a0f1a 100%)
          `,
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
