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
  const words = ['Secure Web Apps', 'Mobile Solutions', 'AI Integrations', 'Cloud Infrastructure', 'Pen Testing Tools', 'UI/UX Experiences'];
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
    const COLORS = ['#3b82f6','#8b5cf6','#06b6d4','#ec4899','#10b981'];
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
    if(canvas.parentElement) {
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
        const d = Math.sqrt(dx*dx + dy*dy);
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
              const d = Math.sqrt(dx*dx + dy*dy);
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
      if(canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative flex items-center pt-24 pb-16 overflow-hidden min-h-[calc(100vh-0px)]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />
      
      {/* Decorative tags */}
      <div className="hero-tag hidden xl:block absolute top-[18%] right-[2%] animate-[floatTag_4s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }}>🤖 AI Integration</div>
      <div className="hero-tag hidden xl:block absolute bottom-[22%] right-[3%] animate-[floatTag_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>☁️ Cloud & DevOps</div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 opacity-0 translate-y-[20px]" style={{background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.25)'}}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase">Trusted by Startups & Enterprises</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5">
              <div className="hero-title-line overflow-hidden"><span className="block translate-y-[100%]">Cyber & Web</span></div>
              <div className="hero-title-line overflow-hidden">
                <span className="block translate-y-[100%] text-gradient relative inline-block after:content-[''] after:absolute after:-bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:rounded-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:bg-[length:200%] after:animate-[gradientSlide_3s_linear_infinite]">
                  Innovation
                </span>
              </div>
              <div className="hero-title-line overflow-hidden"><span className="block translate-y-[100%]">Consultancy</span></div>
            </h1>

            <p className="hero-sub opacity-0 text-base md:text-lg text-slate-400 mb-4 max-w-xl leading-relaxed">
              Delivering <strong className="text-slate-200">secure</strong>, 
              <strong className="text-slate-200">scalable</strong>, and 
              <strong className="text-slate-200">high-performance</strong> digital solutions 
              for startups and enterprises. We architect your growth.
            </p>

            <p className="text-sm text-blue-400 font-mono mb-5 flex items-center h-[20px]">
              We build &gt; <span className="ml-1 text-blue-400 after:content-['|'] after:animate-[blink_0.9s_step-end_infinite] after:ml-[2px] after:text-primary">{displayText}</span>
            </p>

            <div className="hero-btns opacity-0 translate-y-[30px] flex flex-col sm:flex-row flex-wrap gap-3 mb-7">
              <Link href="/contact" className="btn-primary px-7 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 text-sm w-full sm:w-auto">
                Request a Quote <i className="fas fa-arrow-right text-xs"></i>
              </Link>
              <Link href="/projects" className="btn-outline px-7 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 text-sm w-full sm:w-auto hover:border-primary hover:bg-primary/10 transition-all">
                <i className="fas fa-play text-xs"></i> View Our Work
              </Link>
            </div>

            <div className="hero-btns opacity-0 translate-y-[30px] grid grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-xl" style={{background:'rgba(15,23,42,0.6)', border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="font-display text-2xl font-bold text-white stat-num font-[tabular-nums]" data-target="40">0</div>
                <div className="text-xs text-slate-400 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center p-3 rounded-xl" style={{background:'rgba(15,23,42,0.6)', border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="font-display text-2xl font-bold text-white">100<span className="text-primary text-base">%</span></div>
                <div className="text-xs text-slate-400 mt-1">Client Focused</div>
              </div>
            </div>
          </div>

          {/* Right Orbit */}
          <div className="hero-right hidden lg:flex justify-center items-center opacity-0 translate-x-[60px]">
            <OrbitalSystem />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <Link href="#services" className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <i className="fas fa-chevron-down text-base"></i>
          </Link>
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
      `}</style>
    </section>
  );
}

function OrbitalSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbits = [
      {
          id: 'orbit1', radius: 100, speed: 14,
          icons: [
              { icon: 'fa-shield-alt', bg: 'rgba(239,68,68,0.2)', color: '#f87171', label: 'Security' },
              { icon: 'fa-code', bg: 'rgba(59,130,246,0.2)', color: '#60a5fa', label: 'Web' },
          ]
      },
      {
          id: 'orbit2', radius: 150, speed: 22,
          icons: [
              { icon: 'fa-brain', bg: 'rgba(16,185,129,0.2)', color: '#34d399', label: 'AI/ML' },
              { icon: 'fa-mobile-alt', bg: 'rgba(139,92,246,0.2)', color: '#a78bfa', label: 'App' },
              { icon: 'fa-cloud', bg: 'rgba(6,182,212,0.2)', color: '#22d3ee', label: 'Cloud' },
          ]
      },
      {
          id: 'orbit3', radius: 190, speed: 30,
          icons: [
              { icon: 'fa-paint-brush', bg: 'rgba(236,72,153,0.2)', color: '#f472b6', label: 'Design' },
              { icon: 'fa-lock', bg: 'rgba(245,158,11,0.2)', color: '#fbbf24', label: 'Pentest' },
              { icon: 'fa-cogs', bg: 'rgba(99,102,241,0.2)', color: '#818cf8', label: 'DevOps' },
              { icon: 'fa-database', bg: 'rgba(52,211,153,0.2)', color: '#34d399', label: 'DB' },
          ]
      }
    ];

    const center = 190; 
    let rafId: number;
    let angleOffsets = Array.from({length: orbits.length}, () => 0); 

    const animate = () => {
      if(!containerRef.current) return;
      
      orbits.forEach((o, orbitIndex) => {
        angleOffsets[orbitIndex] += (Math.PI * 2) / (o.speed * 60);
        const container = containerRef.current!.querySelector(`#${o.id}`);
        if(container) {
          const angleStep = (Math.PI * 2) / o.icons.length;
          const icons = container.querySelectorAll('.orbit-icon');
          const labels = container.querySelectorAll('.orbit-label');
          
          icons.forEach((el, idx) => {
            const angle = angleStep * idx + angleOffsets[orbitIndex];
            const x = center + o.radius * Math.cos(angle) - 23;
            const y = center + o.radius * Math.sin(angle) - 23;
            
            (el as HTMLElement).style.left = `${x}px`;
            (el as HTMLElement).style.top = `${y}px`;
            
            const lbl = labels[idx] as HTMLElement;
            if(lbl) {
              lbl.style.left = `${x + 23}px`;
              lbl.style.top = `${y + 50}px`;
            }
          });
        }
      });
      
      rafId = requestAnimationFrame(animate);
    };
    
    rafId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="orbit-wrap" ref={containerRef}>
      {/* Rings */}
      <div className="orbit-ring orbit-ring-1"></div>
      <div className="orbit-ring orbit-ring-2"></div>
      <div className="orbit-ring orbit-ring-3"></div>

      {/* Center Logo */}
      <div className="orbit-center">
          <img src="/logo.png" alt="AdhritVerse" className="w-14 h-14 object-contain drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]" />
          {/* Pulse rings */}
          <div className="pulse-ring w-[110px] h-[110px] top-0 left-0 absolute" style={{animationDelay: '0s'}}></div>
          <div className="pulse-ring w-[110px] h-[110px] top-0 left-0 absolute" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Rings containers */}
      <div id="orbit1">
        {[
          { icon: 'fa-shield-alt', bg: 'rgba(239,68,68,0.2)', color: '#f87171', label: 'Security' },
          { icon: 'fa-code', bg: 'rgba(59,130,246,0.2)', color: '#60a5fa', label: 'Web' },
        ].map((item, i) => <OrbitIconItem key={i} item={item} />)}
      </div>
      <div id="orbit2">
        {[
          { icon: 'fa-brain', bg: 'rgba(16,185,129,0.2)', color: '#34d399', label: 'AI/ML' },
          { icon: 'fa-mobile-alt', bg: 'rgba(139,92,246,0.2)', color: '#a78bfa', label: 'App' },
          { icon: 'fa-cloud', bg: 'rgba(6,182,212,0.2)', color: '#22d3ee', label: 'Cloud' },
        ].map((item, i) => <OrbitIconItem key={i} item={item} />)}
      </div>
      <div id="orbit3">
        {[
          { icon: 'fa-paint-brush', bg: 'rgba(236,72,153,0.2)', color: '#f472b6', label: 'Design' },
          { icon: 'fa-lock', bg: 'rgba(245,158,11,0.2)', color: '#fbbf24', label: 'Pentest' },
          { icon: 'fa-cogs', bg: 'rgba(99,102,241,0.2)', color: '#818cf8', label: 'DevOps' },
          { icon: 'fa-database', bg: 'rgba(52,211,153,0.2)', color: '#34d399', label: 'DB' },
        ].map((item, i) => <OrbitIconItem key={i} item={item} />)}
      </div>

    </div>
  );
}

function OrbitIconItem({ item }: { item: any }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div 
        className="orbit-icon absolute w-[46px] h-[46px] rounded-full flex items-center justify-center text-[18px] backdrop-blur-[8px] border border-white/10"
        style={{ background: item.bg, color: item.color, boxShadow: `0 0 12px ${item.bg}` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <i className={`fas ${item.icon}`}></i>
      </div>
      <div 
        className="orbit-label absolute text-[9px] font-bold tracking-[0.08em] uppercase pointer-events-none whitespace-nowrap"
        style={{ color: item.color, opacity: hover ? 1 : 0, transition: 'opacity 0.2s', transform: 'translate(-50%, 0)' }}
      >
        {item.label}
      </div>
    </>
  )
}
