"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

interface Project {
  img: string;
  title: string;
  desc: string;
  href: string;
  tags: string[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-full snap-center"
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} project`}
        className="block h-full"
      >
        <div className="h-full rounded-[2rem] bg-slate-900/50 backdrop-blur-xl border border-white/[0.06] overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)]">
          {/* Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-950/40">
            <img
              src={project.img}
              alt={`${project.title} – AV Technologies Project`}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 z-10" />

            {/* External link icon */}
            <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <ExternalLink size={16} className="text-white" />
              </div>
            </div>

            {/* Tags */}
            <div className="absolute bottom-4 left-5 flex flex-wrap gap-2 z-20">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 border border-white/10 backdrop-blur-md text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-7 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors">
              {project.desc}
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.15em] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              View Project <ArrowRight size={12} className="animate-pulse" />
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </a>
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover/badge:text-slate-200 transition-colors">
                Innovation Showcase
              </span>
              <span className="w-12 h-px bg-white/5 group-hover/badge:w-24 group-hover/badge:bg-primary/20 transition-all duration-700" />
            </div>
            <h2
              id="projects-heading"
              className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold text-white mb-3"
            >
              Innovation in <span className="text-gradient">Action</span>
            </h2>
            <p className="hidden sm:block text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
              A curated portfolio of secure, high-performing applications — built
              by AV Technologies for clients across India and the world.
            </p>
          </motion.div>
          <Link
            href="/projects"
            className="btn-outline px-6 py-3 rounded-full text-white text-sm font-medium w-max shrink-0"
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
