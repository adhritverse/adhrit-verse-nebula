import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Shield, ShoppingBag, Layers, Code2, Globe, Sparkles } from "lucide-react";
import { getProjectById, Project } from "@/data/projects";

const categoryIcons: Record<string, React.ReactNode> = {
  cybersecurity: <Shield size={14} />,
  ecommerce: <ShoppingBag size={14} />,
  portfolio: <Layers size={14} />,
  webapp: <Code2 size={14} />,
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);
  if (!project) {
    return {
      title: "Project Not Found | AV Technologies",
      description: "The requested project portfolio detail page was not found.",
    };
  }
  return {
    title: `${project.title} – Case Study & Live Demo | AV Technologies`,
    description: project.desc,
    openGraph: {
      title: `${project.title} – Case Study & Live Demo | AV Technologies`,
      description: project.desc,
      images: [{ url: project.img }],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen relative" style={{ background: "var(--bg-base)" }}>
      <Navbar />
      <BlobBackground />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none z-0" />

      <section className="pt-32 pb-24 md:pt-40 md:pb-36 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border mb-8 sm:mb-12 cursor-pointer group"
          style={{ 
            borderColor: "var(--border)", 
            background: "var(--bg-surface)", 
            color: "var(--text-secondary)" 
          }}
        >
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1 text-primary" />
          <span className="group-hover:text-[var(--text-primary)] transition-colors">Back to Portfolio</span>
        </Link>

        {/* Dynamic Project Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Project Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] border backdrop-blur-md"
                style={{ 
                  color: project.accent, 
                  borderColor: `${project.accent}40`, 
                  background: `${project.accent}10` 
                }}
              >
                {categoryIcons[project.category] || <Globe size={14} />}
                {project.type}
              </div>
              
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[var(--border)] text-[10px] sm:text-[11px] text-[var(--text-secondary)] uppercase tracking-[0.1em] font-bold backdrop-blur-md">
                Project Case
              </div>
            </div>

            {/* Title */}
            <h1 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.05] tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h1>

            {/* Accent Highlight divider */}
            <div 
              className="w-16 h-1 rounded-full mb-8"
              style={{ background: project.accent }}
            />

            {/* Short Tagline */}
            <p 
              className="text-lg sm:text-xl font-medium leading-relaxed mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {project.desc}
            </p>

            {/* Deep Description */}
            <p 
              className="text-sm sm:text-base leading-relaxed mb-10 font-light" 
              style={{ color: "var(--text-secondary)" }}
            >
              {project.longDesc}
            </p>

            {/* Tech Tags */}
            <div className="mb-10 sm:mb-12">
              <h3 
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-300 hover:border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Live Link (if exists) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full text-sm font-bold text-white transition-all duration-500 hover:opacity-90 hover:scale-[1.02] hover:-translate-y-0.5 group w-fit cursor-pointer shadow-lg"
                style={{ 
                  background: project.accent,
                  boxShadow: `0 10px 20px -5px ${project.accent}50`
                }}
              >
                Launch Live Project 
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

          </div>

          {/* Right: Mockup Section */}
          <div className="lg:col-span-7 relative flex items-center justify-center w-full min-h-[300px] sm:min-h-[450px] p-4 sm:p-8 overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-slate-950">
            
            {/* Dynamic theme glow bleed */}
            <div 
              className="absolute w-[350px] h-[350px] rounded-full blur-[120px] opacity-25 pointer-events-none z-0"
              style={{ background: project.accent }}
            />

            {/* Browser Mockup Window */}
            <div className="relative w-full rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl overflow-hidden z-10 transition-all duration-500 hover:border-white/20 hover:scale-[1.01]">
              
              {/* Browser Header Bar */}
              <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-white/5 bg-slate-950/40">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                {/* Simulated URL bar */}
                <div className="flex-1 mx-4 bg-slate-950/40 rounded-md border border-white/5 py-1 text-[10px] text-slate-400 text-center truncate select-none">
                  {project.link || `https://adhritverse.in/projects/${project.id}`}
                </div>
              </div>

              {/* Mockup preview */}
              <div className="relative w-full overflow-hidden flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto transition-transform duration-[2s] hover:scale-102"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}
