"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, Layers, ShoppingBag, Shield, Globe, Code2, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const categoryIcons: Record<string, React.ReactNode> = {
  cybersecurity: <Shield size={14} />,
  ecommerce: <ShoppingBag size={14} />,
  portfolio: <Layers size={14} />,
  webapp: <Code2 size={14} />,
};

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
    <main className="min-h-screen relative" style={{ background: "var(--bg-base)" }}>
      <Navbar />
      <BlobBackground />

      {/* ── Hero Header ── */}
      <section className="pt-24 sm:pt-40 pb-4 sm:pb-10 text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-[10px] sm:text-xs tracking-widest uppercase" style={{ background: "rgba(15,23,42,0.05)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
          <Sparkles size={10} className="text-primary" />
          AV Technologies · Project Portfolio
        </div>
        <h1 className="font-display text-[26px] sm:text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
          Work that <span className="text-gradient">speaks for itself</span>
        </h1>
        <p className="text-xs sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/20 hover:text-[var(--text-primary)]"
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
              <div
                className="group relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 mb-12"
                style={{ borderColor: "var(--border)", background: "var(--bg-surface)", minHeight: "500px" }}
              >
                {/* Content Section (Left side) */}
                <div className="lg:col-span-5 relative z-30 flex flex-col justify-center p-8 sm:p-14 lg:p-16 order-2 lg:order-1" style={{ background: "var(--bg-surface)" }}>
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] border backdrop-blur-md shadow-2xl"
                        style={{ color: featuredProject.accent, borderColor: `${featuredProject.accent}40`, background: `${featuredProject.accent}10` }}
                      >
                        {categoryIcons[featuredProject.category]}
                        {featuredProject.type}
                      </div>
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[var(--border)] text-[10px] sm:text-[11px] text-[var(--text-secondary)] uppercase tracking-[0.1em] font-bold backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Featured
                      </div>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.05] tracking-tight transition-all duration-500" style={{ color: "var(--text-primary)" }}>
                      {featuredProject.title}
                    </h2>
                    
                    <p className="text-sm sm:text-lg leading-relaxed mb-10 max-w-sm" style={{ color: "var(--text-secondary)" }}>
                      {featuredProject.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-12">
                      {featuredProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-slate-100 border border-[var(--border)] backdrop-blur-xl group-hover:border-primary/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${featuredProject.id}`}
                      className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full text-sm font-bold text-white transition-all duration-500 hover:opacity-90 hover:scale-[1.02] hover:-translate-y-0.5 group w-fit cursor-pointer shadow-lg"
                      style={{
                        background: featuredProject.accent,
                        boxShadow: `0 10px 20px -5px ${featuredProject.accent}50`
                      }}
                    >
                      View Case Study <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual Section (Right side) */}
                <div className="lg:col-span-7 relative min-h-[350px] lg:h-full w-full order-1 lg:order-2 overflow-hidden bg-slate-950 flex items-center justify-center p-6 sm:p-10 lg:p-12">
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
                  
                  {/* Dynamic glow bleed */}
                  <div 
                    className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 pointer-events-none transition-all duration-700 group-hover:opacity-30"
                    style={{ background: featuredProject.accent }}
                  />

                  {/* Browser Mockup Window */}
                  <div className="relative w-full rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:border-white/20">
                    {/* Browser Header Bar */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-slate-950/40">
                      <div className="flex gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      {/* Search Bar / Address bar */}
                      <div className="flex-1 mx-4 bg-slate-950/40 rounded-md border border-white/5 py-1 text-[9px] text-slate-400 text-center truncate select-none">
                        {featuredProject.link}
                      </div>
                    </div>
                    {/* Browser Content */}
                    <div className="relative w-full overflow-hidden flex items-center justify-center">
                      <img
                        src={featuredProject.img}
                        alt={featuredProject.title}
                        className="w-full h-auto transition-transform duration-[1.5s] ease-out group-hover:scale-102"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Other Projects — Vertical Stack on Mobile, Grid on Desktop ── */}
            {otherProjects.length > 0 && (
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 pb-6 sm:pb-0">
                {otherProjects.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group relative w-full flex flex-col rounded-[1.5rem] overflow-hidden border transition-all duration-500 hover:border-primary/30 cursor-pointer"
                    style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
                  >
                    {/* Image Section */}
                    <div className="relative h-44 sm:h-56 overflow-hidden bg-slate-950/40">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700"
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
                    <div className="p-6 sm:p-7 flex flex-col relative z-20 -mt-8 mx-4 mb-4 rounded-2xl backdrop-blur-2xl border shadow-2xl group-hover:border-primary/20 transition-all duration-500" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors leading-tight" style={{ color: "var(--text-primary)" }}>
                          {project.title}
                        </h3>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 border border-[var(--border)] group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg"
                        >
                          <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed mb-4 line-clamp-2 font-light" style={{ color: "var(--text-secondary)" }}>
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-slate-100 border border-[var(--border)] text-[var(--text-secondary)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
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
