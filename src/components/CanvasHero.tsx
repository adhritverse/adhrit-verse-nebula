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

      tl.to('.hero-title-line span', { y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 })
        .to('.hero-sub', { opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .to('.hero-btns', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15 }, '-=0.3')
        .to('.hero-right', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8');

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
        this.x += this.vx;
        this.y += this.vy;

        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST) {
          const force = (MOUSE_DIST - d) / MOUSE_DIST * 2;
          this.x += (dx / d) * force;
          this.y += (dy / d) * force;
        }

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

      {/* Cinematic ambient glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-accent/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center">
        {/* Centered Content */}
        <div className="pt-16 lg:pt-28 max-w-4xl mx-auto flex flex-col items-center relative z-20">

          {/* Subtle Coded Accent */}
          <div className="hero-sub opacity-0 mb-3 flex items-center justify-center font-mono text-[9px] tracking-[0.3em] text-primary/40 uppercase">
            <span>/* protocol_init_v3 */</span>
          </div>

          {/* Headline — Commanding Presence */}
          <h1 className="font-display tracking-[-0.04em] text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-bold text-white leading-[1.05] mb-5 relative text-ai-glow">
            <div className="hero-title-line overflow-hidden pb-1">
              <span className="block translate-y-[100%]">
                Cyber & Web
              </span>
            </div>
            <div className="hero-title-line overflow-hidden pb-1">
              <span className="block translate-y-[100%]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent text-gradient">Innovation Consultancy</span><span className="text-primary">.</span>
              </span>
            </div>
          </h1>


          {/* Capability Strip — Typewriter */}
          <div className="hero-sub opacity-0 mb-7 flex items-center justify-center gap-3 font-mono-tech tracking-[0.2em]">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-primary/50"></span>
            <span className="text-slate-500">{">"}</span>
            <span className="text-primary font-bold min-w-[200px] sm:min-w-[240px] text-left">{displayText}<span style={{ animation: 'blink 1s step-end infinite' }} className="text-primary/70 ml-0.5">|</span></span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-primary/50"></span>
          </div>

          {/* Subtitle — Tight & Purposeful */}
          <p className="hero-sub opacity-0 text-lg sm:text-xl font-normal text-slate-400 mb-12 max-w-2xl leading-relaxed mx-auto">
            From bleeding-edge AI to bulletproof cybersecurity — we architect, build, and ship the technology that scales your vision.
          </p>

          {/* CTAs — Business-Aligned */}
          <div className="hero-btns opacity-0 translate-y-[30px] flex flex-col sm:flex-row items-center gap-4 w-full justify-center sm:w-auto">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute transition-all duration-500 rounded-xl -inset-[1px] bg-gradient-to-r from-primary via-blue-400 to-accent opacity-50 group-hover:opacity-100 blur-sm group-hover:blur-md"></div>
              <Link href="/contact" className="relative flex items-center justify-center gap-2.5 px-9 py-4 sm:px-12 sm:py-[18px] text-base sm:text-lg font-bold text-white bg-[#050a18] border border-white/[0.08] rounded-xl hover:bg-[#0a1128] transition-all w-full sm:w-auto tracking-wide">
                <i className="fas fa-calendar-check text-primary"></i>
                Get Free Consultation
              </Link>
            </div>
            <Link href="/projects" className="flex items-center justify-center gap-2.5 px-9 py-4 sm:px-12 sm:py-[18px] text-base sm:text-lg font-medium text-slate-300 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:bg-white/[0.07] hover:text-white hover:border-white/[0.15] transition-all w-full sm:w-auto group">
              <span className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                <i className="fas fa-arrow-right text-[9px] text-slate-400 group-hover:text-primary transition-colors"></i>
              </span>
              Explore Our Work
            </Link>
          </div>

          {/* Social Proof Strip — Hard Metrics */}
          <div className="hero-btns opacity-0 translate-y-[30px] mt-14 sm:mt-20 flex flex-col items-center w-full">
            <div className="w-full max-w-2xl mx-auto">
              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-slate-600">Proven Track Record</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex flex-col items-center gap-1.5 group/stat cursor-default">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight group-hover/stat:text-primary transition-colors">50<span className="text-primary">+</span></span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">Projects Shipped</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 group/stat cursor-default">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight group-hover/stat:text-emerald-400 transition-colors">99.9<span className="text-emerald-400">%</span></span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">Uptime SLA</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 group/stat cursor-default">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight group-hover/stat:text-amber-400 transition-colors">4.9<span className="text-amber-400">★</span></span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">Client Rating</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 group/stat cursor-default">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight group-hover/stat:text-blue-400 transition-colors">24<span className="text-blue-400">/7</span></span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">Support Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual — Dashboard Mockup */}
        <div className="hero-right opacity-0 translate-y-[60px] mt-16 sm:mt-24 relative w-full flex justify-center pb-12 origin-top pointer-events-none">
          {/* Faded bottom gradient overlay for depth */}
          <div className="absolute inset-x-0 bottom-[-20px] h-48 bg-gradient-to-t from-darker via-darker/80 to-transparent z-30 pointer-events-none"></div>
          <DashboardMockup />
        </div>
      </div>

      <style jsx>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes floatCard {
            0%,100%{ transform: translateY(0px); }
            50%{ transform: translateY(-10px); }
        }
        @keyframes floatCardReverse {
            0%,100%{ transform: translateY(0px); }
            50%{ transform: translateY(8px); }
        }
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        @keyframes barGrow {
            0% { transform: scaleY(0); }
            100% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}

/* ─── Premium SaaS Dashboard Mockup ─── */
function DashboardMockup() {
  const barHeights = [40, 65, 45, 80, 55, 90, 70, 100, 60, 75, 50, 85];

  return (
    <div className="relative w-full max-w-5xl mx-auto pointer-events-auto" style={{ perspective: '2000px' }}>
      {/* Main Window */}
      <div
        className="w-full rounded-2xl border border-slate-700/60 bg-[#080C18]/90 backdrop-blur-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col transition-transform duration-700 hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15),0_0_1px_rgba(255,255,255,0.1)]"
        style={{ transform: 'rotateX(8deg)', transformOrigin: 'center top' }}
      >
        {/* macOS-style Header Bar */}
        <div className="h-11 border-b border-white/[0.06] bg-white/[0.02] w-full flex items-center px-4 gap-2 shrink-0">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]"></div>
          </div>
          <div className="mx-auto flex items-center gap-2 px-4 py-1 bg-white/[0.04] rounded-md border border-white/[0.06] text-[11px] text-slate-500 font-mono">
            <i className="fas fa-lock text-[9px] text-emerald-500/70"></i>
            <span>dashboard.adhritverse.com</span>
          </div>
          <div className="text-[10px] text-slate-600 font-mono hidden sm:block">v2.1.0</div>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 p-3 sm:p-6 flex flex-col gap-4 sm:gap-5 relative overflow-hidden min-h-[280px] sm:min-h-[380px]">
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Top Stats Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 relative z-10">
            {/* Stat 1 */}
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 sm:p-5">
              <div className="text-slate-500 text-[10px] sm:text-xs font-mono mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Revenue
              </div>
              <div className="text-lg sm:text-3xl font-display font-bold text-white tracking-tight">$42.8k</div>
              <div className="text-emerald-400 text-[10px] sm:text-xs mt-1.5 flex items-center gap-1 font-medium">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                24.5%
              </div>
            </div>
            {/* Stat 2 */}
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 sm:p-5">
              <div className="text-slate-500 text-[10px] sm:text-xs font-mono mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Users
              </div>
              <div className="text-lg sm:text-3xl font-display font-bold text-white tracking-tight">8,249</div>
              <div className="text-blue-400 text-[10px] sm:text-xs mt-1.5 flex items-center gap-1 font-medium">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                12.3%
              </div>
            </div>
            {/* Stat 3 — Gradient card */}
            <div className="rounded-xl bg-gradient-to-br from-primary/15 via-blue-600/10 to-accent/15 border border-primary/20 p-3 sm:p-5 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/30 blur-2xl rounded-full"></div>
              <div className="text-white/60 text-[10px] sm:text-xs font-mono mb-1 relative z-10 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                Uptime
              </div>
              <div className="text-lg sm:text-3xl font-display font-bold text-white tracking-tight relative z-10">99.99<span className="text-base text-primary/80">%</span></div>
            </div>
          </div>

          {/* Bottom Row — Code + Chart */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 relative z-10">
            {/* Code Panel */}
            <div className="flex-1 rounded-xl bg-[#0d1117] border border-slate-800/80 p-3 sm:p-4 font-mono text-[10px] sm:text-xs text-slate-400 flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 text-slate-500 mb-2 border-b border-slate-800/60 pb-2 text-[10px]">
                <i className="fas fa-code text-primary/50"></i>
                <span>deploy.config.ts</span>
                <span className="ml-auto px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[9px] font-bold">LIVE</span>
              </div>
              <div><span className="text-purple-400">import</span> {`{ deployService }`} <span className="text-purple-400">from</span> <span className="text-green-300">&apos;@adhrit/core&apos;</span>;</div>
              <div className="mt-2"><span className="text-purple-400">await</span> deployService({`{`}</div>
              <div className="pl-4">environment: <span className="text-green-300">&apos;production&apos;</span>,</div>
              <div className="pl-4">autoScaling: <span className="text-blue-400">true</span>,</div>
              <div className="pl-4">regions: [<span className="text-green-300">&apos;us-east-1&apos;</span>, <span className="text-green-300">&apos;eu-west-1&apos;</span>],</div>
              <div className="pl-4">replicaCount: <span className="text-emerald-400">5</span></div>
              <div>{`});`}</div>
              <div className="mt-auto pt-3 text-emerald-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {`Build successful · 1.2s`}
              </div>
            </div>

            {/* Chart Panel */}
            <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.06] p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="text-slate-500 text-[10px] sm:text-xs font-mono">Traffic Analytics</div>
                <div className="flex gap-1">
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[9px] font-bold border border-primary/30">7D</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-slate-500 text-[9px] border border-white/5">30D</span>
                </div>
              </div>
              <div className="flex-1 relative flex items-end gap-[3px] sm:gap-1.5">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm origin-bottom"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, rgba(59,130,246,0.6), rgba(139,92,246,0.4))`,
                      animation: `barGrow 0.8s ease-out ${i * 0.08}s both`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[9px] text-slate-600 font-mono">
                <span>Mon</span><span>Thu</span><span>Sun</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Floating Breakout Cards ─── */}
      {/* Left card */}
      <div
        className="absolute -left-3 sm:-left-10 top-[30%] w-44 sm:w-52 rounded-xl border border-white/10 bg-[#0C1222]/95 backdrop-blur-xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
        style={{ animation: 'floatCard 6s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">WAF Status</div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Protected
            </div>
          </div>
        </div>
      </div>

      {/* Right card */}
      <div
        className="absolute -right-3 sm:-right-10 top-[55%] w-44 sm:w-52 rounded-xl border border-white/10 bg-[#0C1222]/95 backdrop-blur-xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
        style={{ animation: 'floatCardReverse 5s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm">
            <i className="fas fa-bolt"></i>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">Edge Latency</div>
            <div className="text-xs sm:text-sm font-bold text-white">12ms <span className="text-emerald-400 text-[10px] font-normal">avg</span></div>
          </div>
        </div>
      </div>

      {/* Background glow behind dashboard */}
      <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-3xl -z-10 rounded-[3rem] pointer-events-none"></div>
    </div>
  );
}
