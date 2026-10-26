import { useEffect, useRef } from 'react';

export default function BackgroundLattice() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setupCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    // Particle nodes with depth layering for parallax
    const particleCount = Math.min(Math.floor((width * height) / 19000), 40);
    const particles = [];

    const isLightMode = () => document.documentElement.classList.contains('light');

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0,
        baseY: 0,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        depth: Math.random() * 0.6 + 0.4, // Layered depth factor (0.4 to 1.0)
      });
    }

    const mouse = { x: -1000, y: -1000, radius: 150 };
    let isPageVisible = true;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      setupCanvasSize();
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      if (!isPageVisible) return;

      ctx.clearRect(0, 0, width, height);

      const light = isLightMode();
      const nodeColor = light ? 'rgba(15, 23, 42, 0.16)' : 'rgba(255, 255, 255, 0.22)';
      const lineColor = light ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.035)';
      const limeLineColor = light ? 'rgba(101, 163, 13, 0.28)' : 'rgba(132, 204, 22, 0.24)';

      // Restrained lime cursor glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.8
        );
        gradient.addColorStop(0, light ? 'rgba(132, 204, 22, 0.07)' : 'rgba(132, 204, 22, 0.055)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles with depth parallax
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Parallax offset relative to mouse center
        let drawX = p.x;
        let drawY = p.y;
        if (!prefersReducedMotion && mouse.x > 0) {
          const offsetX = ((mouse.x - width / 2) / (width / 2)) * 6 * p.depth;
          const offsetY = ((mouse.y - height / 2) / (height / 2)) * 6 * p.depth;
          drawX += offsetX;
          drawY += offsetY;
        }

        // Draw node
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius * p.depth, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          let p2X = p2.x;
          let p2Y = p2.y;

          if (!prefersReducedMotion && mouse.x > 0) {
            p2X += ((mouse.x - width / 2) / (width / 2)) * 6 * p2.depth;
            p2Y += ((mouse.y - height / 2) / (height / 2)) * 6 * p2.depth;
          }

          const dx = drawX - p2X;
          const dy = drawY - p2Y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const distToMouse = Math.hypot(drawX - mouse.x, drawY - mouse.y);
            const isNearMouse = distToMouse < mouse.radius;

            ctx.strokeStyle = isNearMouse ? limeLineColor : lineColor;
            ctx.lineWidth = isNearMouse ? 1.1 : 0.6;
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(p2X, p2Y);
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-lattice opacity-40 dark:opacity-20" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Top ambient spotlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-lime-500/5 dark:bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
