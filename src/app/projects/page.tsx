"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import { ExternalLink, Github, ArrowUpRight, Layers, ShoppingBag, Shield, Globe, Code2, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  cybersecurity: <Shield size={14} />,
  ecommerce: <ShoppingBag size={14} />,
  portfolio: <Layers size={14} />,
  webapp: <Code2 size={14} />,
};

const projects = [
  {
    id: 1,
    title: "Deforestration",
    desc: "A cutting-edge web experience focusing on environmental awareness and digital innovation.",
    img: "/projectimg/project-1.png",
    category: "cybersecurity",
    tags: ["Next.js", "Tailwind", "GSAP"],
    link: "https://deforastration.vercel.app/",
    type: "Modern Web",
    accent: "#22c55e",
    featured: false,
  },
  {
    id: 2,
    title: "GSAP Creative Portfolio",
    desc: "A high-fidelity developer portfolio showcasing advanced GSAP animations, smooth scroll interactions, and modern UI design.",
    img: "/projectimg/project2.png",
    category: "portfolio",
    tags: ["GSAP", "Frontend", "UX"],
    link: "https://gsap-portfolio-puce.vercel.app/",
    type: "Portfolio",
    accent: "#a78bfa",
    featured: false,
  },
  {
    id: 3,
    title: "Luxe Premium Store",
    desc: "A premium luxury shopping destination featuring high-end aesthetics, smooth transitions, and visual storytelling.",
    img: "/projectimg/Project-3.png",
    category: "ecommerce",
    tags: ["E-Commerce", "Premium", "UX/UI"],
    link: "https://luxe-vert-eta.vercel.app/",
    type: "E-Commerce",
    accent: "#f59e0b",
    featured: false,
  },
  {
    id: 4,
    title: "Green Haven",
    desc: "A beautifully curated botanical showcase bringing nature to the digital realm with plant e-commerce.",
    img: "/projectimg/Project-4.png",
    category: "ecommerce",
    tags: ["E-Commerce", "Design", "Botany"],
    link: "https://warm-mermaid-8441d2.netlify.app/",
    type: "E-Commerce",
    accent: "#4ade80",
    featured: false,
  },
  {
    id: 5,
    title: "Lumière",
    desc: "An elegant, refined minimal e-commerce experience tailored for premium skincare products.",
    img: "/projectimg/Project5.png",
    category: "ecommerce",
    tags: ["Skincare", "E-Commerce", "Minimal"],
    link: "https://reliable-centaur-fbf40f.netlify.app/",
    type: "Minimalist",
    accent: "#f472b6",
    featured: false,
  },
  {
    id: 6,
    title: "OG Editor",
    desc: "A powerful, intuitive Open Graph image editor and generator designed to streamline digital asset creation.",
    img: "/projectimg/project-6.png",
    category: "webapp",
    tags: ["Utility", "Editor", "SaaS"],
    link: "https://ogeditor2.onrender.com/",
    type: "Web App",
    accent: "#38bdf8",
    featured: false,
  },
  {
    id: 7,
    title: "DevMarket",
    desc: "A modern marketplace platform for developers to discover, share, and exchange essential tools and code assets.",
    img: "/projectimg/Project-7.png",
    category: "ecommerce",
    tags: ["Marketplace", "SaaS", "Next.js"],
    link: "https://devmarket-three.vercel.app/",
    type: "E-Commerce",
    accent: "#fb923c",
    featured: true,
  },
  {
    id: 8,
    title: "Ashielder",
    desc: "Advanced AI-powered phishing detection and prevention system with real-time threat analysis.",
    img: "/projectimg/project8.png",
    category: "cybersecurity",
    tags: ["AI", "Security", "SaaS"],
    link: "https://ashielder.vercel.app/",
    type: "Cybersecurity",
    accent: "#3b82f6",
    featured: false,
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter || p.title === "Deforestration");

  const categories = [
    { id: "all", label: "All Projects", icon: <Globe size={13} /> },
    { id: "cybersecurity", label: "Cybersecurity", icon: <Shield size={13} /> },
    { id: "ecommerce", label: "E-Commerce", icon: <ShoppingBag size={13} /> },
    { id: "portfolio", label: "Portfolio", icon: <Layers size={13} /> },
    { id: "webapp", label: "Web Apps", icon: <Code2 size={13} /> },
  ];

  const featuredProject = filteredProjects.find(p => p.featured) ?? filteredProjects[0];
  const otherProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      {/* ── Hero Header ── */}
      <section className="pt-24 sm:pt-40 pb-4 sm:pb-10 text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-[10px] sm:text-xs text-slate-400 tracking-widest uppercase">
          <Sparkles size={10} className="text-primary" />
          AV Technologies · Project Portfolio
        </div>
        <h1 className="font-display text-[26px] sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Work that <span className="text-gradient">speaks for itself</span>
        </h1>
        <p className="text-xs sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          40+ projects delivered across startups and enterprises — from AI platforms to premium e-commerce experiences.
        </p>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-6 px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-row lg:flex-wrap overflow-x-auto lg:overflow-visible gap-3 pb-2 lg:pb-0 scrollbar-hide snap-x justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex-shrink-0 snap-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-500 border backdrop-blur-md ${
                filter === cat.id
                  ? "bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  : "bg-transparent border-white/5 text-slate-400 hover:bg-white/5 hover:border-white/10 hover:text-slate-200"
              }`}
            >
              <span className={`${filter === cat.id ? "text-primary" : "text-slate-500"} transition-colors duration-300`}>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Main Bento Layout ── */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 pb-24 sm:pb-36 max-w-7xl mx-auto relative z-10">

        {filteredProjects.length === 0 && (
          <div className="text-center text-slate-500 py-24 text-sm">No projects in this category yet.</div>
        )}

        {filteredProjects.length > 0 && (
          <div className="flex flex-col gap-8">

            {/* ── Featured / Hero Card ── */}
            {featuredProject && (
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all duration-700 hover:border-primary/20 hover:shadow-[0_0_80px_rgba(0,0,0,0.4)] grid grid-cols-1 lg:grid-cols-12 mb-12"
                style={{ minHeight: "500px" }}
              >
                {/* Content Section (Left side) */}
                <div className="lg:col-span-5 relative z-30 flex flex-col justify-center p-8 sm:p-14 lg:p-16 order-2 lg:order-1 bg-gradient-to-br from-slate-900 via-slate-900/90 to-transparent">
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] border backdrop-blur-md shadow-2xl"
                        style={{ color: featuredProject.accent, borderColor: `${featuredProject.accent}40`, background: `${featuredProject.accent}10` }}
                      >
                        {categoryIcons[featuredProject.category]}
                        {featuredProject.type}
                      </div>
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-[0.1em] font-bold backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Featured
                      </div>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight transition-all duration-500 group-hover:text-primary/10 group-hover:stroke-text">
                      {featuredProject.title}
                    </h2>
                    
                    <p className="text-slate-400 text-sm sm:text-lg leading-relaxed mb-10 max-w-sm">
                      {featuredProject.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-12">
                      {featuredProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-xl text-[11px] font-bold text-slate-300 bg-white/5 border border-white/10 backdrop-blur-xl group-hover:border-primary/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full text-sm font-bold text-white transition-all duration-500 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:translate-x-1 group/btn">
                      View Project <ArrowUpRight size={18} className="transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </div>
                  </div>
                </div>

                {/* Visual Section (Right side) */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full w-full order-1 lg:order-2 overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/20 to-transparent pointer-events-none" />
                  <img
                    src={featuredProject.img}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                </div>
              </a>
            )}

            {/* ── Other Projects — Vertical Stack on Mobile, Grid on Desktop ── */}
            {otherProjects.length > 0 && (
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 pb-6 sm:pb-0">
                {otherProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full flex flex-col rounded-[1.5rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 sm:h-56 overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg"
                          style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}15` }}
                        >
                          {categoryIcons[project.category]}
                          {project.type}
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Floating Overlap Look */}
                    <div className="p-6 sm:p-7 flex flex-col relative z-20 -mt-8 mx-4 mb-4 rounded-2xl bg-slate-800/80 backdrop-blur-2xl border border-white/5 shadow-2xl group-hover:border-primary/20 transition-all duration-500">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg"
                        >
                          <ArrowUpRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2 font-light">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-white/5 border border-white/5 text-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
