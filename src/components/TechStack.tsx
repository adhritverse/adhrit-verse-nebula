"use client";

import { useState } from "react";
import { 
  Palette, Server, Brain, Cloud, Settings, 
  Cpu, Zap, Layers, Globe, Shield
} from "lucide-react";

const TECH_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Palette,
    color: "text-blue-400",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    techs: [
      { name: "React", img: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", img: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", img: "https://skillicons.dev/icons?i=ts" },
      { name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
      { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Three.js", img: "https://skillicons.dev/icons?i=threejs" },
      { name: "GSAP", img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
      { name: "Vue.js", img: "https://skillicons.dev/icons?i=vue" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "text-emerald-400",
    glow: "shadow-[0_0_40px_rgba(52,211,153,0.15)]",
    techs: [
      { name: "Node.js", img: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Python", img: "https://skillicons.dev/icons?i=py" },
      { name: "Django", img: "https://skillicons.dev/icons?i=django" },
      { name: "FastAPI", img: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Go", img: "https://skillicons.dev/icons?i=go" },
      { name: "Rust", img: "https://skillicons.dev/icons?i=rust" },
      { name: "GraphQL", img: "https://skillicons.dev/icons?i=graphql" },
      { name: "PostgreSQL", img: "https://skillicons.dev/icons?i=postgres" },
    ],
  },
  {
    id: "ai-mobile",
    label: "AI & Mobile",
    icon: Brain,
    color: "text-pink-400",
    glow: "shadow-[0_0_40px_rgba(244,114,182,0.15)]",
    techs: [
      { name: "Flutter", img: "https://skillicons.dev/icons?i=flutter" },
      { name: "React Native", img: "https://skillicons.dev/icons?i=react" },
      { name: "TensorFlow", img: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "PyTorch", img: "https://skillicons.dev/icons?i=pytorch" },
      { name: "OpenAI", img: "https://latestlogo.com/wp-content/uploads/2024/01/openai-icon.png" },
      { name: "Android", img: "https://skillicons.dev/icons?i=androidstudio" },
      { name: "Swift", img: "https://skillicons.dev/icons?i=swift" },
      { name: "Kotlin", img: "https://skillicons.dev/icons?i=kotlin" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Ops",
    icon: Cloud,
    color: "text-cyan-400",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.15)]",
    techs: [
      { name: "AWS", img: "https://skillicons.dev/icons?i=aws" },
      { name: "Docker", img: "https://skillicons.dev/icons?i=docker" },
      { name: "Kubernetes", img: "https://skillicons.dev/icons?i=kubernetes" },
      { name: "Firebase", img: "https://skillicons.dev/icons?i=firebase" },
      { name: "Vercel", img: "https://skillicons.dev/icons?i=vercel" },
      { name: "GCP", img: "https://skillicons.dev/icons?i=gcp" },
      { name: "Redis", img: "https://skillicons.dev/icons?i=redis" },
      { name: "Nginx", img: "https://skillicons.dev/icons?i=nginx" },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(TECH_CATEGORIES[0].id);

  const activeCategory = TECH_CATEGORIES.find((c) => c.id === activeTab) || TECH_CATEGORIES[0];

  return (
    <section id="tech" className="py-16 md:py-24 relative overflow-hidden bg-darker">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Technical Arsenal</span>
            </div>
            <h2 className="font-display text-[22px] sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Technologies We <span className="text-gradient">Master</span>
            </h2>
            <p className="hidden sm:block text-slate-400 text-sm md:text-xl leading-relaxed">
              We leverage the most advanced stacks to build secure, scalable, and high-performance digital ecosystems for the next generation of startups and to drive the digital transformation of traditional businesses.
            </p>
          </div>
          <div className="hidden lg:block pb-2">
             <div className="flex items-center gap-8 text-slate-500 font-mono text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-xl tracking-tighter">40+</span>
                  <span>PROJECTS</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-xl tracking-tighter">50+</span>
                  <span>TOOLS</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bento Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Side Menu (Bento Left) */}
          <div className="lg:col-span-4 flex flex-row overflow-x-auto lg:flex-col gap-3 lg:gap-4 pb-4 lg:pb-0 scrollbar-hide snap-x">
            {TECH_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex-shrink-0 snap-start p-3 px-5 lg:p-6 rounded-2xl lg:rounded-3xl text-left transition-all duration-500 group overflow-hidden border ${
                    isActive 
                    ? `bg-white/5 border-white/10 ${cat.glow}` 
                    : "bg-transparent border-white/5 hover:bg-white/5"
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-center lg:justify-start gap-3 lg:gap-5">
                    <div className={`transition-all duration-500 ${isActive ? cat.color : "text-slate-500 group-hover:text-slate-300"}`}>
                      <Icon className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`font-bold whitespace-nowrap transition-all duration-300 ${isActive ? "text-white text-sm lg:text-lg" : "text-slate-500 text-sm lg:text-base"}`}>
                        {cat.label}
                      </h3>
                      <p className={`hidden lg:block text-[10px] uppercase tracking-widest font-medium transition-all duration-300 ${isActive ? cat.color : "opacity-0"}`}>
                        Experience & Mastery
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-primary animate-pulse">
                      <Zap size={16} fill="currentColor" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Visualizer (Bento Right) */}
          <div className="lg:col-span-8 relative min-h-[400px]">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden">
              
              {/* Dynamic Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              <div className="relative h-full w-full p-8 sm:p-12 flex flex-col items-center justify-center">
                
                {/* Active Category Heading */}
                <div key={activeCategory.id + "-title"} className="absolute top-10 left-10 flex items-center gap-3 animate-fade-in">
                  <activeCategory.icon className={`${activeCategory.color} opacity-40`} size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    Active Stack: {activeCategory.label}
                  </span>
                </div>

                {/* Floating Tech Icons Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-y-7 gap-x-4 sm:gap-10 w-full max-w-2xl px-2 sm:px-4 mt-8 sm:mt-0">
                  {activeCategory.techs.map((tech, idx) => (
                    <div 
                      key={activeCategory.id + "-" + tech.name}
                      className="group relative flex flex-col items-center gap-2 sm:gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="relative w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-500 
                                      group-hover:scale-110 group-hover:-translate-y-3 cursor-pointer">
                        
                        {/* Stealthy border glow on hover */}
                        <div className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${activeCategory.color.replace('text', 'bg')}/20`}></div>
                        
                        <img 
                          src={tech.img} 
                          alt={tech.name} 
                          className="w-8 h-8 sm:w-14 sm:h-14 object-contain relative z-10 transition-all duration-500 grayscale-[40%] group-hover:grayscale-0 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
                        />
                      </div>
                      <span className="text-[9px] sm:text-xs font-bold text-slate-500 group-hover:text-white transition-all uppercase tracking-widest text-center max-w-full overflow-hidden text-ellipsis whitespace-nowrap px-1">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="hidden sm:flex absolute bottom-10 right-10 items-center gap-6 text-[10px] font-mono text-slate-600">
                   <div className="flex items-center gap-2">
                      <Cpu size={12} /> <span>READY</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield size={12} /> <span>SECURE</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Floating Badges for WOW factor */}
        <div className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
           {[
             { label: 'REST API', icon: Globe },
             { label: 'Blockchain', icon: Layers },
             { label: 'Cybersecurity', icon: Shield },
             { label: 'Web3', icon: Cpu },
           ].map((badge, bIdx) => (
             <div key={bIdx} className="flex items-center gap-2 text-slate-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase">
                <badge.icon size={14} />
                <span>{badge.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

