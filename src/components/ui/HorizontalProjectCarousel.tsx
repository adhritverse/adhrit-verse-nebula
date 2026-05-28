"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight, Layers, Shield, ShoppingBag, Code2, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Project {
  id: number;
  img: string;
  title: string;
  desc: string;
  href: string;
  tags: string[];
  accent: string;
  category: string;
  type: string;
}

const categoryIcons: Record<string, React.ReactNode> = {
  cybersecurity: <Shield size={11} />,
  ecommerce: <ShoppingBag size={11} />,
  portfolio: <Layers size={11} />,
  webapp: <Code2 size={11} />,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-full snap-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/projects/${project.id}`}
        aria-label={`View ${project.title} project`}
        className="group relative w-full flex flex-col rounded-[1.5rem] overflow-hidden border transition-all duration-500 hover:border-primary/30 cursor-pointer block h-full"
        style={{ 
          borderColor: isHovered ? `${project.accent}35` : "var(--border)", 
          background: "var(--bg-surface)",
          boxShadow: isHovered 
            ? `0 20px 40px -15px ${project.accent}25, 0 0 0 1px ${project.accent}15` 
            : "var(--shadow-card)",
          transform: isHovered ? "translateY(-12px)" : "translateY(0)"
        }}
      >
        {/* Image Section */}
        <div className="relative h-44 sm:h-56 overflow-hidden bg-slate-950/40">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-contain sm:object-cover transition-transform duration-700"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          
          {/* Floating Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg"
              style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}15` }}
            >
              {categoryIcons[project.category] || <Globe size={11} />}
              {project.type}
            </div>
          </div>
        </div>

        {/* Content Section - Floating Overlap Look */}
        <div 
          className="p-6 sm:p-7 flex flex-col relative z-20 -mt-8 mx-4 mb-4 rounded-2xl backdrop-blur-2xl border shadow-2xl transition-all duration-500 flex-1" 
          style={{ 
            background: "var(--bg-elevated)", 
            borderColor: isHovered ? `${project.accent}20` : "var(--border)" 
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 
              className="font-display text-lg font-bold transition-colors leading-tight" 
              style={{ color: isHovered ? project.accent : "var(--text-primary)" }}
            >
              {project.title}
            </h3>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: isHovered ? project.accent : "var(--bg-surface)",
                borderColor: isHovered ? project.accent : "var(--border)"
              }}
            >
              <ArrowUpRight 
                size={14} 
                className="transition-colors" 
                style={{ color: isHovered ? "#fff" : "var(--text-secondary)" }}
              />
            </div>
          </div>

          <p className="text-xs leading-relaxed mb-4 line-clamp-2 font-light" style={{ color: "var(--text-secondary)" }}>
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.slice(0, 3).map(tag => (
              <span 
                key={tag} 
                className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-slate-100 border border-[var(--border)] text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function HorizontalProjectCarousel({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative z-10 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Noise layer */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

      {/* Mesh accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5 group/badge">
              <Layers size={14} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover/badge:text-[var(--text-primary)] transition-colors">
                Innovation Showcase
              </span>
              <span className="w-12 h-px bg-slate-200 group-hover/badge:w-24 group-hover/badge:bg-primary/20 transition-all duration-700" />
            </div>
            <h2
              id="projects-heading"
              className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Innovation in <span className="text-gradient">Action</span>
            </h2>
            <p className="hidden sm:block text-sm md:text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A curated portfolio of secure, high-performing applications — built
              by AV Technologies for clients across India and the world.
            </p>
          </motion.div>
          <Link
            href="/projects"
            className="btn-outline px-6 py-3 rounded-full text-sm font-medium w-max shrink-0"
            aria-label="View all projects"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 pt-4 scrollbar-hide snap-x snap-mandatory">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
