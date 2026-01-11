import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../ThemeContext';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // For Intersection Observer
  const { theme } = useAppContext();
  const [isInView, setIsInView] = useState(true);

  // Intersection Observer Setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 } // Trigger as soon as 1px is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // If not in view or reduced motion is on, don't run animation loop
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    const isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        initParticles();
      }
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
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        
        const isDark = document.documentElement.classList.contains('dark');
        const colors = isDark 
          ? ['rgba(0, 177, 79, 0.15)', 'rgba(255, 255, 255, 0.1)', 'rgba(16, 60, 110, 0.15)']
          : ['rgba(0, 177, 79, 0.15)', 'rgba(16, 60, 110, 0.1)', 'rgba(0, 144, 64, 0.15)'];
          
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (!isMobile && mouseX !== 0 && mouseY !== 0) {
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
      const density = isMobile ? 40000 : 20000; 
      const maxParticles = isMobile ? 15 : 50; 
      const numberOfParticles = Math.min(((canvas?.width || window.innerWidth) * (canvas?.height || window.innerHeight)) / density, maxParticles);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        // Get mouse pos relative to canvas
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      }
    };

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY);
        particles[i].draw();
        
        if (!isMobile) { 
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;
            
            if (distSq < 6400) { 
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
  }, [theme, isInView]); // Re-run when theme changes or visibility changes

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-60"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default ParticleBackground;