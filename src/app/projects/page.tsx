"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

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
          {/* <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 sm:mb-6">
            <i className="fas fa-map-marker-alt text-primary text-[10px] sm:text-xs"></i>
            <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-wide uppercase">Projects by AdhritVerse · Indore, India</span>
          </div> */}
          <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-tight">
            Our <span className="text-gradient block sm:inline">Project Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-0 sm:mx-auto leading-relaxed px-0">
            AdhritVerse has delivered <strong className="text-slate-200">40+ projects</strong> for startups and enterprises across India — from custom web apps and AI platforms to e-commerce and cybersecurity tools.
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 transform hover:scale-105 border ${filter === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary border-transparent text-white shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:border-primary/50 hover:text-white backdrop-blur-md"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-16 px-6 pb-20 sm:pb-32 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer flex flex-col h-full bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-500">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[3px] z-30">
                  <div className="flex gap-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                    <a href={project.link} target="_blank" className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all shadow-lg">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-slate-700 hover:scale-110 transition-all shadow-lg">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Tag Overlay Bottom Left */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 pr-4">
                  <span className="px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-full bg-primary/90 text-white backdrop-blur-md shadow-lg">
                    {project.type}
                  </span>
                </div>

                {/* Smooth Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/20 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow relative bg-slate-900/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ChevronRight size={14} className="text-slate-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300 line-clamp-3">
                  {project.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-pill bg-white/5 border-white/10 text-[10px] sm:text-xs">
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
