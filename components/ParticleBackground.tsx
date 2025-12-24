import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../ThemeContext';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useAppContext();

  useEffect(() => {
    // Performance: Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // Optimize for alpha
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    // Check if device is mobile to reduce load
    const isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 2 + 0.5; // Smaller particles
        this.speedX = Math.random() * 0.4 - 0.2; // Slower speed
        this.speedY = Math.random() * 0.4 - 0.2; // Slower speed
        
        // Colors adapted for theme
        const isDark = document.documentElement.classList.contains('dark');
        const colors = isDark 
          ? ['rgba(0, 177, 79, 0.15)', 'rgba(255, 255, 255, 0.1)', 'rgba(16, 60, 110, 0.15)']
          : ['rgba(0, 177, 79, 0.15)', 'rgba(16, 60, 110, 0.1)', 'rgba(0, 144, 64, 0.15)'];
          
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Subtle Mouse interaction - Only on desktop to save performance
        if (!isMobile) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 0.5;
            const directionY = forceDirectionY * force * 0.5;
            this.x -= directionX;
            this.y -= directionY;
          }
        }

        if (this.x > (canvas?.width || 0)) this.x = 0;
        else if (this.x < 0) this.x = (canvas?.width || 0);
        if (this.y > (canvas?.height || 0)) this.y = 0;
        else if (this.y < 0) this.y = (canvas?.height || 0);
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      // Performance: Reduce number of particles drastically for mobile
      const density = isMobile ? 40000 : 20000; 
      const maxParticles = isMobile ? 15 : 50; 
      const numberOfParticles = Math.min((window.innerWidth * window.innerHeight) / density, maxParticles);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseX = e.x;
        mouseY = e.y;
      }
    };

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY);
        particles[i].draw();
        
        // Performance: Skip connection drawing on mobile completely to save CPU
        if (!isMobile) { 
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            // Simplified distance check (square distance is faster than sqrt)
            const distSq = dx * dx + dy * dy;
            
            if (distSq < 6400) { // 80 * 80
              ctx.beginPath();
              const distance = Math.sqrt(distSq);
              ctx.strokeStyle = `rgba(16, 60, 110, ${0.05 - distance/2000})`; 
              ctx.lineWidth = 0.3;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
      style={{ willChange: 'transform' }}
    />
  );
};

export default ParticleBackground;