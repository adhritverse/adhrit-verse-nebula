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
      <section className="pt-28 sm:pt-40 pb-6 sm:pb-10 text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-xs text-slate-400 tracking-widest uppercase">
          <Sparkles size={11} className="text-primary" />
          AdhritVerse · Project Portfolio
        </div>
        <h1 className="font-display text-[2.4rem] sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-[1.1]">
          Work that <span className="text-gradient">speaks for itself</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          40+ projects delivered across startups and enterprises — from AI platforms to premium e-commerce experiences.
        </p>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-6 px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-500 border backdrop-blur-md ${
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
                className="group relative w-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-5"
                style={{ minHeight: "460px" }}
              >
                {/* Visual Section (Right side on desktop, top on mobile) */}
                <div className="lg:col-span-3 lg:col-start-3 relative h-64 lg:h-full w-full order-1 lg:order-2 overflow-hidden bg-slate-950 rounded-r-[2rem]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent pointer-events-none" />
                  <img
                    src={featuredProject.img}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover object-left-top"
                  />
                </div>

                {/* Content Section (Left side on desktop, bottom on mobile) */}
                <div className="lg:col-span-2 lg:col-start-1 relative z-30 flex flex-col justify-center h-full p-8 sm:p-12 lg:pr-0 order-2 lg:order-1 bg-slate-900 lg:bg-transparent lg:bg-gradient-to-r from-slate-900 via-slate-900 to-transparent">
                  <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md"
                        style={{ color: featuredProject.accent, borderColor: `${featuredProject.accent}30`, background: `${featuredProject.accent}15` }}
                      >
                        {categoryIcons[featuredProject.category]}
                        {featuredProject.type}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium flex items-center gap-1.5">
                        <span className="block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: featuredProject.accent }}></span>
                        Featured
                      </span>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight group-hover:text-white/90 transition-colors">
                      {featuredProject.title}
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                      {featuredProject.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {featuredProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] shadow-lg hover:-translate-y-0.5"
                      style={{ background: `linear-gradient(135deg, ${featuredProject.accent}20, ${featuredProject.accent}10)`, border: `1px solid ${featuredProject.accent}50`, boxShadow: `0 4px 20px ${featuredProject.accent}15` }}>
                      Explore Project <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </a>
            )}

            {/* ── Other Projects — Numbered Row List ── */}
            {otherProjects.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1.5"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-950">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Very thin gradient just for top edge blending if needed, otherwise no overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Top Bar (Index & Badge) */}
                      <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-start z-20">
                        <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg"
                          style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}15` }}
                        >
                          {categoryIcons[project.category]}
                          {project.type}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-slate-900/80 to-slate-900">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-white/90 transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 shadow-lg"
                          style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
                        >
                          <ArrowUpRight size={14} style={{ color: project.accent }} />
                        </div>
                      </div>

                      <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2 group-hover:text-slate-300 transition-colors font-light">
                        {project.desc}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 border border-white/5 text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent glow bar */}
                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out z-30"
                      style={{ background: `linear-gradient(to right, ${project.accent}, ${project.accent}80)` }}
                    />
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
