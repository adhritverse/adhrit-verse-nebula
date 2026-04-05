"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";

const projects = [
  {
    id: 1,
    title: "Deforastration",
    desc: "A cutting-edge web experience focusing on environmental awareness and digital innovation.",
    img: "/projectimg/project-1.png",
    category: "cybersecurity",
    tags: ["Next.js", "Tailwind", "GSAP"],
    link: "https://deforastration.vercel.app/",
    type: "Modern Web"
  },
  {
    id: 2,
    title: "GSAP Creative Portfolio",
    desc: "A high-fidelity developer portfolio showcasing advanced GSAP animations, smooth scroll interactions, and modern UI design.",
    img: "/projectimg/project2.png",
    category: "portfolio",
    tags: ["GSAP", "Frontend", "UX"],
    link: "https://gsap-portfolio-puce.vercel.app/",
    type: "Portfolio"
  },
  {
    id: 3,
    title: "Luxe Premium Store",
    desc: "A premium luxury shopping destination featuring high-end aesthetics, smooth transitions, and a focus on visual storytelling.",
    img: "/projectimg/Project-3.png",
    category: "ecommerce",
    tags: ["E-Commerce", "Premium", "UX/UI"],
    link: "https://luxe-vert-eta.vercel.app/",
    type: "E-Commerce"
  },
  {
    id: 4,
    title: "Green Haven",
    desc: "A beautifully curated botanical showcase bringing nature to the digital realm with soft aesthetics and plant e-commerce.",
    img: "/projectimg/Project-4.png",
    category: "ecommerce",
    tags: ["E-Commerce", "Design", "Botany"],
    link: "https://warm-mermaid-8441d2.netlify.app/",
    type: "E-Commerce"
  },
  {
    id: 5,
    title: "Lumière",
    desc: "An elegant, refined minimal e-commerce experience tailored for premium skincare products, highlighting minimalist visuals.",
    img: "/projectimg/Project5.png",
    category: "ecommerce",
    tags: ["Skincare", "E-Commerce", "Minimal"],
    link: "https://reliable-centaur-fbf40f.netlify.app/",
    type: "Minimalist"
  },
  {
    id: 6,
    title: "OG Editor",
    desc: "A powerful, intuitive Open Graph image editor and generator designed to streamline digital asset creation.",
    img: "/projectimg/project-6.png",
    category: "webapp",
    tags: ["Utility", "Editor", "SaaS"],
    link: "https://ogeditor2.onrender.com/",
    type: "Web App"
  },
  {
    id: 7,
    title: "DevMarket",
    desc: "A modern marketplace platform tailored for developers to discover, share, and exchange essential tools and code assets.",
    img: "/projectimg/Project-7.png",
    category: "ecommerce",
    tags: ["Marketplace", "SaaS", "Next.js"],
    link: "https://devmarket-three.vercel.app/",
    type: "E-Commerce"
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "portfolio", label: "Portfolio" },
    { id: "webapp", label: "Web Apps" },
  ];

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      <section className="pt-24 sm:pt-36 pb-8 sm:pb-12 text-left sm:text-center px-6 relative z-10">
        <div className="max-w-3xl mx-0 sm:mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 sm:mb-6">
            <i className="fas fa-rocket text-primary text-[10px] sm:text-xs"></i>
            <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-wide uppercase">Our Portfolio</span>
          </div>
          <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-tight">
            Innovation <span className="text-gradient block sm:inline">in Action</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-0 sm:mx-auto leading-relaxed px-0">
            A curated showcase of projects where we&apos;ve delivered secure, scalable, and impactful digital solutions.
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 border ${
                filter === cat.id 
                  ? "bg-gradient-to-r from-primary/30 to-secondary/30 border-primary/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                  : "bg-slate-900/60 border-white/5 text-slate-400 hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-12 px-6 pb-20 sm:pb-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group mx-auto w-full max-w-[85%] sm:max-w-none">
              <div className="relative h-36 sm:h-56 overflow-hidden rounded-t-2xl">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="flex gap-2 sm:gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href={project.link} target="_blank" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i className="fas fa-external-link-alt text-[8px] sm:text-sm"></i>
                      </a>
                      <a href="#" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-slate-700 transition-colors">
                        <i className="fab fa-github text-[8px] sm:text-sm"></i>
                      </a>
                   </div>
                </div>
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/90 text-white backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-8 glass-card border-none rounded-t-none rounded-b-2xl">
                <h3 className="text-base sm:text-xl font-bold font-display text-white mb-1.5 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-400 leading-snug sm:leading-relaxed mb-3 sm:mb-6 min-h-0 sm:min-h-[4em]">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] sm:text-[10px] font-medium px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:border-primary/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
