import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanvasHero from "@/components/CanvasHero";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack";
import WorkflowVisual from "@/components/WorkflowVisual";
import { 
  Code, Smartphone, Palette, ShieldCheck, Brain, Cloud, 
  Rocket, Star, Layers, IndianRupee, Trophy, ArrowRight, 
  MessageSquare, Compass, GitBranch, CloudUpload, Play, 
  CalendarCheck, Phone, Mail, ExternalLink, Handshake, Globe
} from "lucide-react";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "AV Technologies | AI-Powered Startup Tech Partner",
  description:
    "AV Technologies is India's leading AI-powered tech agency. We deliver web development, mobile apps, cybersecurity & AI solutions for startups & enterprises across India. Get a free consultation today.",
  alternates: { canonical: "https://adhritverse.in" },
  openGraph: {
    title: "AV Technologies | AI-Powered Startup Tech Partner",
    description:
      "India's leading AI-powered tech partner for startups & enterprises. Web development, cybersecurity, AI/ML & cloud DevOps.",
    url: "https://adhritverse.in",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    desc: "MERN Stack & Next.js specialists. We build SEO-optimized, high-performance web apps that convert visitors into customers — tailored for startups and global SaaS.",
    color: "text-primary",
    bg: "bg-primary/5",
    glow: "rgba(59,130,246,0.1)",
  },
  {
    icon: Smartphone,
    title: "App Development",
    slug: "app-development",
    desc: "Cross-platform mobile apps using Flutter & React Native. Ship to iOS and Android simultaneously — faster go-to-market for your startup.",
    color: "text-primary",
    bg: "bg-primary/5",
    glow: "rgba(59,130,246,0.1)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "uiux-design",
    desc: "Premium user-centered design, prototyping & design systems. Interfaces that delight, engage, and drive measurable business results.",
    color: "text-primary",
    bg: "bg-primary/5",
    glow: "rgba(59,130,246,0.1)",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Ethical Hacking",
    slug: "cybersecurity",
    desc: "VAPT, penetration testing & security audits. We identify vulnerabilities before attackers do — essential for every modern startup in India.",
    color: "text-primary",
    bg: "bg-primary/5",
    glow: "rgba(59,130,246,0.1)",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    slug: "ai-ml",
    desc: "Custom AI chatbots, predictive analytics & intelligent automation. Give your product the competitive edge of artificial intelligence.",
    color: "text-primary",
    bg: "bg-primary/5",
    glow: "rgba(59,130,246,0.1)",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "AWS / Azure / GCP cloud setup, CI/CD pipelines & Kubernetes. Scale from MVP to enterprise without breaking your infrastructure.",
    color: "text-primary",
    bg: "bg-primary/5",
    glow: "rgba(59,130,246,0.1)",
  },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    color: "text-blue-400",
    bg: "bg-blue-400/5",
    border: "border-blue-400/10",
    title: "Cybersecurity-First Mindset",
    desc: "Every product we build undergoes security review. We're one of the very few agencies in India with in-house ethical hackers.",
  },
  {
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/10",
    title: "AI Integrated by Default",
    desc: "We don't bolt on AI as an afterthought — intelligent automation and ML are core to our engineering process.",
  },
  {
    icon: Rocket,
    color: "text-cyan-400",
    bg: "bg-cyan-400/5",
    border: "border-cyan-400/10",
    title: "Startup Speed, Enterprise Quality",
    desc: "MVPs in 4–8 weeks without sacrificing scalability, performance, or code maintainability.",
  },
  {
    icon: Handshake,
    color: "text-indigo-400",
    bg: "bg-indigo-400/5",
    border: "border-indigo-400/10",
    title: "Co-Founder Mentality",
    desc: "We invest in your product's success — not just the sprint. Deep product thinking, not just task execution.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    desc: "Free 30-min consultation. We map your goals, constraints, and competitive landscape to define the right tech roadmap.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Design & Architecture",
    desc: "UI/UX wireframes, system design, database schema, and API contracts — all reviewed with with you before a line of code is written.",
  },
  {
    step: "03",
    icon: GitBranch,
    title: "Agile Development",
    desc: "2-week sprints with weekly demos. Full transparency via GitHub, Notion, and daily standups.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Security & QA",
    desc: "Automated testing, manual QA, and a security audit on every release — before it touches production.",
  },
  {
    step: "05",
    icon: CloudUpload,
    title: "Launch & Scale",
    desc: "Zero-downtime deployment on AWS/GCP, CI/CD pipelines, monitoring dashboards — and ongoing support post-launch.",
  },
];




const TESTIMONIALS = [
  {
    name: "Aakash Sharma",
    role: "Founder, FinTech Startup",
    location: "India",
    quote:
      "AV Technologies transformed our MVP into a production-grade AI platform in just 8 weeks. Their cybersecurity audit saved us from a critical vulnerability before launch. Absolute best tech team — period.",
    rating: 5,
    date: "2024-09",
  },
  {
    name: "Priya Verma",
    role: "CEO, EdTech Company",
    location: "Mumbai",
    quote:
      "We tried 3 agencies before AV Technologies. The difference is night and day. They actually understand startup growth, not just code. Our app went from 0 to 50K users in 4 months.",
    rating: 5,
    date: "2024-11",
  },
  {
    name: "Rahul Mehta",
    role: "Co-Founder, SaaS Platform",
    location: "Bangalore",
    quote:
      "The AI/ML integration they built for our platform reduced our customer churn by 34%. These guys are not an agency — they're a genuine tech growth partner.",
    rating: 5,
    date: "2025-01",
  },
];

const TRUST_STATS = [
  { value: "40+", label: "Projects Delivered", icon: "fas fa-rocket" },
  { value: "100%", label: "Client Satisfaction", icon: "fas fa-star" },
  { value: "6+", label: "Service Domains", icon: "fas fa-layer-group" },
  { value: "₹50K+", label: "Average Project Value", icon: "fas fa-rupee-sign" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main
      className="min-h-screen relative"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <BlobBackground />

      {/* ── Hero ── */}
      <CanvasHero />

      {/* ── Trust Bar — commented out ── */}
      {/* <section
        aria-label="AV Technologies at a glance"
        className="py-8 relative z-10 border-y border-white/5 bg-slate-900/40 backdrop-blur-sm"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2 group py-2"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-sm group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <i className={stat.icon} aria-hidden="true" />
                </div>
                <div className="font-display text-2xl font-bold text-white" itemProp="numberOfEmployees">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Services ── */}
      <section
        id="services"
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left md:text-center mb-10 sm:mb-14">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <i className="fas fa-map-marker-alt text-primary text-xs" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                Vijay Nagar, Indore · MP · India
              </span>
            </div> */}
            <h2
              id="services-heading"
              className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold text-white mb-4"
            >
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="hidden sm:block text-sm md:text-base text-slate-400 max-w-2xl md:mx-auto leading-relaxed">
              From AI-powered web apps to enterprise cybersecurity — AV Technologies is India&apos;s
              most comprehensive{" "}
              <strong className="text-slate-200">startup tech partner</strong>, not just another digital
              agency.
            </p>
          </div>

          <ServicesList>
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.title} index={idx + 1} {...s} />
            ))}
          </ServicesList>

          <div className="text-center mt-10 hidden sm:block">
            <Link
              href="/services"
              className="btn-outline px-8 py-3.5 rounded-full text-white font-medium text-sm inline-flex items-center gap-2"
              aria-label="View all services offered by AV Technologies"
            >
              View All Services <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why AV Technologies ── */}
      <section
        id="why-us"
        className="py-20 md:py-28 relative z-10 bg-slate-900/40 overflow-hidden"
        aria-labelledby="why-heading"
      >
        {/* bg accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="flex items-center gap-3 mb-6 group/badge">
                <div className="flex items-center justify-center text-primary">
                  <Trophy size={14} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">
                  Value Proposition
                </span>
                <span className="w-12 h-px bg-white/10 group-hover/badge:w-20 group-hover/badge:bg-primary/30 transition-all duration-500"></span>
              </div>
              <h2
                id="why-heading"
                className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
              >
                The Ultimate{" "}
                <span className="text-gradient">Full-Stack</span>{" "}
                Tech Partner
              </h2>
              <p className="hidden sm:block text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Most agencies pick one lane — design <em>or</em> development <em>or</em> security.
                AV Technologies is the only firm that unites{" "}
                <strong className="text-slate-200">AI engineering</strong>,{" "}
                <strong className="text-slate-200">cybersecurity</strong>, and{" "}
                <strong className="text-slate-200">full-stack product development</strong> under one
                roof — so your startup never needs to juggle multiple vendors.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                aria-label="Meet the AV Technologies team"
              >
                Meet the team <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-2xl p-5 border ${item.border} ${item.bg} hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-3`}
                    aria-hidden="true"
                  >
                    <item.icon className={item.color} size={16} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="hidden sm:block text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section
        id="process"
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left md:text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-start md:justify-center gap-4 mb-6 group/badge">
              <span className="w-12 h-px bg-white/10 group-hover/badge:w-20 group-hover/badge:bg-primary/30 transition-all duration-500"></span>
              <div className="flex items-center gap-2 px-1">
                <Compass size={14} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover/badge:text-primary transition-colors">
                  Operational Strategy
                </span>
              </div>
              <span className="w-12 h-px bg-white/10 group-hover/badge:w-20 group-hover/badge:bg-primary/30 transition-all duration-500"></span>
            </div>
            <h2
              id="process-heading"
              className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold text-white mb-4"
            >
              From Idea to{" "}
              <span className="text-gradient">Launch</span>
            </h2>
            <p className="hidden sm:block text-sm md:text-base text-slate-400 max-w-xl md:mx-auto leading-relaxed">
              A proven <strong className="text-white">6-step process</strong> that takes your product from concept to production — securely,
              on time, and at startup speed.
            </p>
          </div>

          <WorkflowVisual />

          <div className="text-center mt-12 relative z-10">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-full text-white font-medium text-sm inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] transition-all duration-500"
              aria-label="Start your project with AV Technologies"
            >
              <Play size={14} fill="white" />
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-5 group/badge">
                <Layers size={14} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover/badge:text-slate-200 transition-colors">
                  Innovation Showcase
                </span>
                <span className="w-12 h-px bg-white/5 group-hover/badge:w-24 group-hover/badge:bg-primary/20 transition-all duration-700"></span>
              </div>
              <h2
                id="projects-heading"
                className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold text-white mb-3"
              >
                Innovation in <span className="text-gradient">Action</span>
              </h2>
              <p className="hidden sm:block text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
                A curated portfolio of secure, high-performing applications — built by AV Technologies for
                 clients across India and the world.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-outline px-6 py-3 rounded-full text-white text-sm font-medium w-max shrink-0"
              aria-label="View all AV Technologies projects"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              img="/projectimg/project-1.png"
              title="Deforastration"
              desc="A cutting-edge web experience for environmental awareness — GSAP animations, WebGL, and modern UI engineering."
              href="https://deforastration.vercel.app/"
              tags={["Modern Web", "Innovation"]}
            />
            <ProjectCard
              img="/projectimg/project2.png"
              title="GSAP Creative Portfolio"
              desc="A high-fidelity developer portfolio showcasing advanced animation techniques and premium dark UI design."
              href="https://gsap-portfolio-puce.vercel.app/"
              tags={["GSAP", "Creative"]}
            />
            <ProjectCard
              img="/projectimg/Project-3.png"
              title="Luxe Premium Store"
              desc="A premium luxury e-commerce platform with smooth UX, high-end aesthetics, and performance-first architecture."
              href="https://luxe-vert-eta.vercel.app/"
              tags={["E-Commerce", "Premium"]}
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="py-20 md:py-28 relative z-10 bg-slate-900/40"
        aria-labelledby="testimonials-heading"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Aggregate rating for schema */}
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" className="hidden">
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="reviewCount" content="3" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-5">
              {[1,2,3,4,5].map(i => (
                <i key={i} className="fas fa-star text-amber-400 text-[10px]" aria-hidden="true" />
              ))}
              <span className="text-xs font-semibold text-amber-300 ml-1">5.0 · 40+ Projects</span>
            </div> */}
            <h2
              id="testimonials-heading"
              className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Trusted by <span className="text-gradient">Founders</span>
            </h2>
            <p className="hidden sm:block text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Real results from real clients — startups, enterprises, and funded ventures who chose
              AV Technologies as their tech partner.
            </p>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.name} 
                className="w-[75vw] md:w-auto shrink-0 snap-center relative transition-transform duration-300 md:hover:-translate-y-2"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ limit={3} showMoreLink={true} />

      {/* ── Final CTA ── */}
      <section
        id="contact"
        className="py-12 md:py-32 relative z-10 flex flex-col items-center justify-center"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-6 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full pointer-events-none" />
          <div
            className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl text-center border-t border-white/20"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content="AV Technologies" />
            <meta itemProp="telephone" content="+91-8462802086" />
            <meta itemProp="email" content="contact@adhritverse.in" />

            <div className="avail-badge scale-90 mb-6" aria-label="Currently available for new projects">
              <span className="avail-badge-live" aria-hidden="true" />
              <span className="avail-badge-text">Available for New Projects · Worldwide &amp; Remote</span>
            </div>

            <h2
              id="cta-heading"
              className="font-display text-2xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            >
              Let&apos;s Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="hidden sm:block text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
              Partner with AV Technologies — India&apos;s AI-powered startup tech partner. From MVP to
              scale, we architect your growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/contact"
                id="cta-free-consultation"
                className="btn-primary px-6 sm:px-10 py-2.5 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-xs sm:text-base whitespace-nowrap flex items-center justify-center gap-2"
                aria-label="Get a free consultation from AV Technologies"
              >
                <CalendarCheck className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+918462802086"
                id="cta-call-now"
                className="btn-outline px-6 sm:px-10 py-2.5 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-xs sm:text-base whitespace-nowrap flex items-center justify-center gap-2"
                aria-label="Call AV Technologies now"
              >
                <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                Book a Strategy Call
              </a>
            </div>

            {/* Location trust strip */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 border-t border-white/5 pt-6">
              {/* <a
                href="https://www.google.com/maps?q=Vijay+Nagar+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200"
                aria-label="AV Technologies location on Google Maps"
              >
                <i className="fas fa-map-marker-alt text-primary" aria-hidden="true" />
                Vijay Nagar, Indore, MP
              </a> */}
              <a
                href="mailto:contact@adhritverse.in"
                className="flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200"
                aria-label="Email AV Technologies"
              >
                <i className="fas fa-envelope text-primary" aria-hidden="true" />
                contact@adhritverse.in
              </a>
              <a
                href="tel:+918462802086"
                className="flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200"
                aria-label="Call AV Technologies"
              >
                <i className="fas fa-phone text-primary" aria-hidden="true" />
                +91 8462802086
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ── Components ────────────────────────────────────────────────────────────────

function ServiceCard({
  icon: Icon, title, slug, desc, color, bg, glow, index,
}: {
  icon: any; title: string; slug: string; desc: string;
  color: string; bg: string; glow: string; index: number;
}) {
  return (
    <article
      className="glass-card p-4 sm:p-7 rounded-2xl sm:rounded-3xl group cursor-pointer relative overflow-hidden transition-all duration-500"
      itemScope
      itemType="https://schema.org/Service"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content={String(index)} />
      <div
        className="absolute top-0 right-0 -mr-8 -mt-8 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
        style={{ background: glow }}
        aria-hidden="true"
      />
      
      <div className="flex items-center gap-3 sm:block mb-3 sm:mb-0">
        <div
          className={`w-10 h-10 shrink-0 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${bg} flex items-center justify-center ${color} sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/5`}
          aria-hidden="true"
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </div>
        <h3
          className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 sm:mb-2"
          itemProp="name"
        >
          {title}
        </h3>
      </div>
      
      <p
        className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-1 sm:line-clamp-3 group-hover:text-slate-200 transition-colors duration-300"
        itemProp="description"
      >
        {desc}
      </p>
      <Link
        href={`/services#${slug}`}
        className={`${color} group-hover:translate-x-2 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300`}
        itemProp="url"
        aria-label={`Learn more about ${title} at AV Technologies`}
      >
        Explore Service <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </Link>
    </article>
  );
}

function ProjectCard({
  img, title, desc, href, tags,
}: {
  img: string; title: string; desc: string; href: string; tags: string[];
}) {
  return (
    <article
      className="group relative h-full flex flex-col bg-slate-900/20 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project by AV Technologies`}
        itemProp="url"
        className="flex flex-col h-full"
      >
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={img}
            alt={`${title} – AV Technologies Project`}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            loading="lazy"
            itemProp="image"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 z-10" />
          
          <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <ExternalLink size={20} className="text-white" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 border border-white/10 backdrop-blur-md text-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 pb-10 flex flex-col flex-grow relative z-20">
          <div className="mb-4">
            <h3
              className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-500 leading-tight mb-3"
              itemProp="name"
            >
              {title}
            </h3>
            <p
              className="text-[15px] text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-500 line-clamp-1 sm:line-clamp-2"
              itemProp="description"
            >
              {desc}
            </p>
          </div>
          
          <div className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
            Learn More <ArrowRight size={14} className="animate-pulse" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </a>
    </article>
  );
}

function TestimonialCard({
  name, role, location, quote, rating, date,
}: {
  name: string; role: string; location: string; quote: string; rating: number; date: string;
}) {
  return (
    <article
      className="glass-card bg-slate-900/95 p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-4 group hover:border-primary/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] sm:shadow-none relative overflow-hidden h-full"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Decorative Quote */}
      <div className="absolute top-2 right-4 text-[80px] font-serif text-white/[0.03] leading-none pointer-events-none select-none z-0 mix-blend-screen">
        &rdquo;
      </div>

      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Rating */}
        <div
          className="flex gap-1"
          itemProp="reviewRating"
          itemScope
          itemType="https://schema.org/Rating"
        >
          <meta itemProp="ratingValue" content={String(rating)} />
          <meta itemProp="bestRating" content="5" />
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
          ))}
          <span className="sr-only">{rating} out of 5 stars</span>
        </div>

        {/* Quote */}
        <blockquote
          className="text-xs sm:text-sm text-slate-300 leading-relaxed italic flex-1"
          itemProp="reviewBody"
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div
          className="flex items-center gap-3 mt-auto border-t border-white/5 pt-3 sm:pt-4"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px] sm:text-base shrink-0" aria-hidden="true">
            {name[0]}
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold text-[11px] sm:text-sm" itemProp="name">{name}</div>
            <div className="text-slate-500 text-[9px] sm:text-xs">
              <span itemProp="jobTitle">{role}</span>
              <span className="hidden sm:inline">{" · "}</span>
              <span className="sm:hidden text-[8px] mx-0.5">•</span>
              <span itemProp="addressLocality">{location}</span>
            </div>
          </div>
          <time
            dateTime={date}
            className="ml-auto text-[10px] text-slate-600 font-mono hidden sm:block"
            itemProp="datePublished"
          >
            {date}
          </time>
        </div>
      </div>
    </article>
  );
}

