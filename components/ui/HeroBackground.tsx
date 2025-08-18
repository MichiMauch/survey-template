'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
        // Mix of blue particles with different shades
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246,' : 'rgba(96, 165, 250,';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen
        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.x < 0) this.x = (canvas?.width || 0);
        if (this.y > (canvas?.height || 0)) this.y = 0;
        if (this.y < 0) this.y = (canvas?.height || 0);

        // Fade effect
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0) {
          this.opacity = Math.random() * 0.5 + 0.2;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Neural network connections
    class Connection {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
      opacity: number;

      constructor() {
        this.startX = Math.random() * (canvas?.width || 0);
        this.startY = Math.random() * (canvas?.height || 0);
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        this.endX = this.startX + Math.cos(angle) * distance;
        this.endY = this.startY + Math.sin(angle) * distance;
        this.progress = 0;
        this.speed = Math.random() * 0.02 + 0.01;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.startX = Math.random() * (canvas?.width || 0);
          this.startY = Math.random() * (canvas?.height || 0);
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 200 + 100;
          this.endX = this.startX + Math.cos(angle) * distance;
          this.endY = this.startY + Math.sin(angle) * distance;
          this.progress = 0;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity * (1 - Math.abs(this.progress - 0.5) * 2);
        
        // Draw connection line
        const gradient = ctx.createLinearGradient(this.startX, this.startY, this.endX, this.endY);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
        gradient.addColorStop(this.progress, 'rgba(59, 130, 246, 0.8)');
        gradient.addColorStop(Math.min(this.progress + 0.1, 1), 'rgba(59, 130, 246, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
        
        // Draw pulse at current position
        const currentX = this.startX + (this.endX - this.startX) * this.progress;
        const currentY = this.startY + (this.endY - this.startY) * this.progress;
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create connections
    const connections: Connection[] = [];
    const connectionCount = 15;
    for (let i = 0; i < connectionCount; i++) {
      connections.push(new Connection());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      if (ctx) {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y);
            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 100) * 0.2 * particle.opacity * otherParticle.opacity;
              ctx.strokeStyle = 'rgba(59, 130, 246, 1)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        });
      }

      // Update and draw neural connections
      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
        filter: 'blur(0.5px)'
      }}
    />
  );
}