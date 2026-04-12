"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CanvasHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtitle Typewriter
  const [displayText, setDisplayText] = useState("");
  const words = ['AI Integrations', 'Secure Web Apps', 'Mobile Solutions', 'Cloud Infrastructure', 'Cybersecurity Systems', 'Startup MVPs'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);



  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) return currentWord.substring(0, prev.length - 1);
          return currentWord.substring(0, prev.length + 1);
        });
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to('.hero-badge', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
        .to('.hero-title-line span', { y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }, '-=0.5')
        .to('.hero-sub', { opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .to('.hero-btns', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15 }, '-=0.3')
        .to('.hero-right', { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }, '-=0.8');

      // Stats numbers
      document.querySelectorAll(".stat-num").forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(el, { textContent: 0 }, {
          textContent: target, duration: 2, ease: 'power2.out', delay: 1.5,
          snap: { textContent: 1 },
          onUpdate() { el.textContent = Math.round(Number(el.textContent)) + '+'; }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };
    const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'];
    const NUM = 90, CONN_DIST = 130, MOUSE_DIST = 160;
    let animationFrameId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", resize);
    if (canvas.parentElement) {
      canvas.parentElement.addEventListener('mousemove', handleMouseMove);
      canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);
    }

    class Particle {
      x: number; y: number; vx: number; vy: number; r: number; color: string; alpha: number;
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 2.5 + 1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        // Continuous gentle move
        this.x += this.vx;
        this.y += this.vy;

        // Mouse repulsion
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST) {
          const force = (MOUSE_DIST - d) / MOUSE_DIST * 2;
          this.x += (dx / d) * force;
          this.y += (dy / d) * force;
        }

        // Wrap around boundaries
        if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
      }
    }

    function drawHexGrid() {
      ctx!.strokeStyle = 'rgba(59,130,246,0.025)';
      ctx!.lineWidth = 1;
      const size = 40;
      const cols = Math.ceil(W / (size * 1.5)) + 2;
      const rows = Math.ceil(H / (size * Math.sqrt(3))) + 2;
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const x = c * size * 1.5;
          const y = r * size * Math.sqrt(3) + (c % 2 === 0 ? 0 : size * Math.sqrt(3) / 2);
          ctx!.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 180 * (60 * i - 30);
            const hx = x + size * Math.cos(angle);
            const hy = y + size * Math.sin(angle);
            i === 0 ? ctx!.moveTo(hx, hy) : ctx!.lineTo(hx, hy);
          }
          ctx!.closePath(); ctx!.stroke();
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < NUM; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx!.clearRect(0, 0, W, H);
      drawHexGrid();

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN_DIST) {
            const alpha = (1 - d / CONN_DIST) * 0.35;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(99,102,241,${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.alpha;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative flex items-center pt-24 pb-16 overflow-hidden min-h-[calc(100vh-0px)]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />




      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6 group/badge animate-fade-in opacity-0" 
                 style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <span className="w-8 h-px bg-primary/50 group-hover/badge:w-12 transition-all duration-500"></span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.2em] uppercase leading-tight">
                Trusted by Startups & Enterprises
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5">
              <div className="hero-title-line overflow-hidden"><span className="block translate-y-[100%] pb-1">Cyber &amp; Web</span></div>
              <div className="hero-title-line overflow-hidden pb-1">
                <span className="block translate-y-[100%] text-gradient relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] sm:after:h-[3px] after:rounded-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:bg-[length:200%] after:animate-[gradientSlide_3s_linear_infinite]">
                  Innovation
                </span>
              </div>
              <div className="hero-title-line overflow-hidden mt-1"><span className="block translate-y-[100%]">Consultancy</span></div>
            </h1>

            <p className="hero-sub opacity-0 text-sm sm:text-base md:text-lg text-slate-400 mb-5 max-w-xl leading-relaxed">
              Delivering <strong className="text-slate-200">secure</strong>,{" "}
              <strong className="text-slate-200">scalable</strong>, and{" "}
              <strong className="text-slate-200">high-performance</strong> digital solutions for startups and enterprises. We architect your growth.
            </p>

            <p className="text-xs sm:text-sm text-blue-400 font-mono mb-6 flex flex-wrap items-center gap-1 min-h-[24px]">
              <span>We build &gt;</span> <span className="text-blue-400 after:content-['|'] after:animate-[blink_0.9s_step-end_infinite] after:ml-[2px] after:text-primary">{displayText}</span>
            </p>

            <div className="hero-btns opacity-0 translate-y-[30px] flex flex-col sm:flex-row flex-wrap gap-3 mb-7">
              <Link href="/contact" className="btn-primary px-6 py-3 sm:px-7 rounded-full text-white font-semibold flex items-center justify-center gap-2 text-sm w-full sm:w-auto">
                Get Free Consultation <i className="fas fa-arrow-right text-xs"></i>
              </Link>
              <Link href="/projects" className="btn-outline px-6 py-3 sm:px-7 rounded-full text-white font-semibold flex items-center justify-center gap-2 text-sm w-full sm:w-auto hover:border-primary hover:bg-primary/10 transition-all">
                <i className="fas fa-play text-xs"></i> View Our Work
              </Link>
            </div>

            <div className="hero-btns opacity-0 translate-y-[30px] grid grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-xl" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="font-display text-xl sm:text-2xl font-bold text-white stat-num font-[tabular-nums]" data-target="40">0</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center p-3 rounded-xl" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="font-display text-xl sm:text-2xl font-bold text-white">100<span className="text-primary text-sm sm:text-base">%</span></div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Client Focused</div>
              </div>
            </div>
          </div>

          {/* Right Orbit */}
          <div className="hero-right hidden lg:flex justify-center items-center opacity-0 translate-x-[60px]">
            <OrbitalSystem />
          </div>
        </div>
      </div>



      <style jsx>{`
        .hero-tag {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(15,23,42,0.7);
          color: #cbd5e1;
          pointer-events: none;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes floatTag {
            0%,100%{ transform: translateY(0px); }
            50%{ transform: translateY(-8px); }
        }
        @keyframes gradientSlide {
            0%{ background-position: 0% } 100%{ background-position: 200% }
        }
        @keyframes orbital-spin {
            from { transform: rotateZ(0deg); }
            to { transform: rotateZ(360deg); }
        }
      `}</style>
    </section>
  );
}

function OrbitalSystem() {
  const orbits = [
    {
      id: 'orbit1', radius: 105, duration: 25, reverse: false,
      icons: [
        { icon: 'fa-shield-alt', bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.4)', color: '#f87171', label: 'Security' },
        { icon: 'fa-code', bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)', color: '#60a5fa', label: 'Web Apps' },
      ]
    },
    {
      id: 'orbit2', radius: 175, duration: 35, reverse: true,
      icons: [
        { icon: 'fa-brain', bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.4)', color: '#34d399', label: 'AI/ML' },
        { icon: 'fa-mobile-alt', bg: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.4)', color: '#a78bfa', label: 'Mobile' },
        { icon: 'fa-cloud', bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.4)', color: '#22d3ee', label: 'Cloud' },
      ]
    },
    {
      id: 'orbit3', radius: 250, duration: 45, reverse: false,
      icons: [
        { icon: 'fa-paint-brush', bg: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.4)', color: '#f472b6', label: 'Design' },
        { icon: 'fa-lock', bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.4)', color: '#fbbf24', label: 'Pentest' },
        { icon: 'fa-cogs', bg: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.4)', color: '#818cf8', label: 'DevOps' },
        { icon: 'fa-database', bg: 'rgba(52,211,153,0.15)', border: 'rgba(52,211,153,0.4)', color: '#34d399', label: 'Data' },
      ]
    }
  ];

  return (
    <div className="relative flex items-center justify-center w-[520px] h-[520px] pointer-events-auto" style={{ perspective: '1200px' }}>

      {/* 3D Plane Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateX(60deg)', transformStyle: 'preserve-3d' }}>

        {/* Center Shield logo - counter rotated to face camera */}
        <div className="absolute z-20 flex items-center justify-center w-[110px] h-[110px] rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.25)] group cursor-pointer transition-all hover:scale-105 duration-500"
          style={{ transform: 'translateZ(40px) rotateX(-60deg)', transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-[-10px] rounded-full border border-blue-400/10 animate-spin" style={{ animationDuration: '10s' }}></div>
          <img src="/logo.png" alt="AV Technologies Base Core" className="w-[60px] h-[60px] object-contain z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all duration-500" />
        </div>

        {/* Orbits */}
        {orbits.map((o) => (
          <div key={o.id} className="absolute top-1/2 left-1/2 rounded-full border border-slate-600/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]"
            style={{
              width: o.radius * 2, height: o.radius * 2,
              marginLeft: -o.radius, marginTop: -o.radius,
              transformStyle: 'preserve-3d',
              animation: `orbital-spin ${o.duration}s linear infinite ${o.reverse ? 'reverse' : 'normal'}`
            }}>
            {o.icons.map((item, idx) => {
              const angle = (360 / o.icons.length) * idx;
              return (
                <div key={idx} className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transform: `rotateZ(${angle}deg) translateX(${o.radius}px)`, transformStyle: 'preserve-3d' }}>
                  <div className="absolute flex items-center justify-center"
                    style={{
                      width: 48, height: 48, left: -24, top: -24,
                      transformStyle: 'preserve-3d',
                      animation: `orbital-spin ${o.duration}s linear infinite ${o.reverse ? 'normal' : 'reverse'}`
                    }}>
                    <div style={{ transform: `rotateZ(-${angle}deg) rotateX(-60deg)` }} className="w-full h-full flex flex-col items-center justify-center group/icon">
                      <div className="relative w-[48px] h-[48px] rounded-full flex items-center justify-center text-[20px] transition-all duration-300 group-hover/icon:scale-125 group-hover/icon:shadow-[0_0_30px_var(--icon-bg)] cursor-pointer overflow-hidden"
                        style={{ '--icon-bg': item.color, background: `radial-gradient(circle at 30% 30%, ${item.color}50, rgba(10,15,30,0.95))`, color: item.color, border: `1px solid ${item.color}40`, boxShadow: `inset -3px -3px 8px rgba(0,0,0,0.6), inset 2px 2px 6px rgba(255,255,255,0.2), 0 0 15px ${item.bg}` } as any}>
                        {/* Glass sphere glare effect */}
                        <div className="absolute top-[3px] left-[8px] w-[18px] h-[8px] bg-white/30 rounded-full rotate-[-40deg] blur-[0.5px]"></div>
                        <i className={`fas ${item.icon} relative z-10 drop-shadow-[0_0_8px_currentColor]`}></i>
                      </div>
                      {/* Hover Label */}
                      <div className="absolute top-[55px] px-2.5 py-1 bg-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-md text-[10px] uppercase font-bold tracking-widest whitespace-nowrap opacity-0 group-hover/icon:opacity-100 group-hover/icon:-translate-y-1 transition-all duration-300 pointer-events-none z-30" style={{ color: item.color, boxShadow: `0 4px 12px ${item.bg}` }}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
