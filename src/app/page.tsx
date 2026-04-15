import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanvasHero from "@/components/CanvasHero";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";
import AnimatedFAQ from "@/components/ui/AnimatedFAQ";
import TechStack from "@/components/TechStack";
import WorkflowVisual from "@/components/WorkflowVisual";
import ServicesGrid from "@/components/ui/ServicesGrid";
import HorizontalProjectCarousel from "@/components/ui/HorizontalProjectCarousel";
import MarqueeTestimonials from "@/components/ui/MarqueeTestimonials";
import StackingWhyUs from "@/components/ui/StackingWhyUs";
import HomeClient from "@/components/HomeClient";
import {
  ArrowRight,
  Compass, Play,
  CalendarCheck, Phone,
} from "lucide-react";

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



const PROJECTS = [
  {
    img: "/projectimg/project-1.png",
    title: "Deforastration",
    desc: "A cutting-edge web experience for environmental awareness — GSAP animations, WebGL, and modern UI engineering.",
    href: "https://deforastration.vercel.app/",
    tags: ["Modern Web", "Innovation"],
  },
  {
    img: "/projectimg/project2.png",
    title: "GSAP Creative Portfolio",
    desc: "A high-fidelity developer portfolio showcasing advanced animation techniques and premium dark UI design.",
    href: "https://gsap-portfolio-puce.vercel.app/",
    tags: ["GSAP", "Creative"],
  },
  {
    img: "/projectimg/Project-3.png",
    title: "Luxe Premium Store",
    desc: "A premium luxury e-commerce platform with smooth UX, high-end aesthetics, and performance-first architecture.",
    href: "https://luxe-vert-eta.vercel.app/",
    tags: ["E-Commerce", "Premium"],
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
  },
  {
    name: "Priya Verma",
    role: "CEO, EdTech Company",
    location: "Mumbai",
    quote:
      "We tried 3 agencies before AV Technologies. The difference is night and day. They actually understand startup growth, not just code. Our app went from 0 to 50K users in 4 months.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Co-Founder, SaaS Platform",
    location: "Bangalore",
    quote:
      "The AI/ML integration they built for our platform reduced our customer churn by 34%. These guys are not an agency — they're a genuine tech growth partner.",
    rating: 5,
  },
  {
    name: "Ananya Desai",
    role: "CTO, HealthTech Innovators",
    location: "Pune",
    quote:
      "Working with AV Technologies to revamp our healthcare portal was the best decision. Their focus on compliance and user experience is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, AgriTech Solutions",
    location: "Hyderabad",
    quote:
      "They delivered an IoT dashboard that helped our farmers track soil health in real time. The precision and scalability of their cloud architecture are brilliant.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "VP Product, E-commerce Network",
    location: "Delhi NCR",
    quote:
      "AV Technologies implemented a custom recommendation engine that boosted our average order value by 21%. Their engineers operate like an extension of our own team.",
    rating: 5,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main
      className="min-h-screen relative overflow-x-clip"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <BlobBackground />

      {/* ── Hero ── */}
      <CanvasHero />

      {/* ── Services ── Overlaps into hero with negative margin */}
      <section
        id="services"
        className="py-20 md:py-28 relative z-10 -mt-8 md:-mt-12 section-glow-top"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Noise layer */}
        <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
        {/* Mesh gradient bleed */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <HomeClient
            type="reveal"
            className="text-left md:text-center mb-10 sm:mb-14"
          >
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="hidden sm:block text-base md:text-lg text-slate-400 max-w-3xl md:mx-auto leading-relaxed">
              From AI-powered web apps to enterprise cybersecurity — AV Technologies is India&apos;s
              most comprehensive{" "}
              <strong className="text-slate-200">startup tech partner</strong>, not just another digital
              agency.
            </p>
          </HomeClient>

          <ServicesGrid />

          <HomeClient type="reveal" className="text-center mt-10 hidden sm:block">
            <Link
              href="/services"
              className="btn-outline px-8 py-4 rounded-full text-white font-medium text-base inline-flex items-center gap-2"
              aria-label="View all services offered by AV Technologies"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </HomeClient>
        </div>
      </section>

      {/* ── Why AV Technologies — Stacking Cards ── */}
      <StackingWhyUs />

      {/* ── Process ── */}
      <section
        id="process"
        className="py-20 md:py-28 relative z-10 section-glow-top"
        aria-labelledby="process-heading"
      >
        <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none mesh-gradient" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <HomeClient type="reveal" className="text-left md:text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-start md:justify-center gap-4 mb-6 group/badge">
              <span className="w-12 h-px bg-white/10 group-hover/badge:w-20 group-hover/badge:bg-primary/30 transition-all duration-500" />
              <div className="flex items-center gap-2 px-1">
                <Compass size={14} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover/badge:text-primary transition-colors">
                  Operational Strategy
                </span>
              </div>
              <span className="w-12 h-px bg-white/10 group-hover/badge:w-20 group-hover/badge:bg-primary/30 transition-all duration-500" />
            </div>
            <h2
              id="process-heading"
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              From Idea to{" "}
              <span className="text-gradient">Launch</span>
            </h2>
            <p className="hidden sm:block text-base md:text-lg text-slate-400 max-w-2xl md:mx-auto leading-relaxed">
              A proven <strong className="text-white">6-step process</strong> that takes your product from concept to production — securely,
              on time, and at startup speed.
            </p>
          </HomeClient>

          <WorkflowVisual />

          <HomeClient type="reveal" className="text-center mt-12 relative z-10">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-full text-white font-medium text-base inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] transition-all duration-500"
              aria-label="Start your project with AV Technologies"
            >
              <Play size={16} fill="white" />
              Start Your Project
            </Link>
          </HomeClient>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Projects — Horizontal Carousel ── */}
      <HorizontalProjectCarousel projects={PROJECTS} />

      {/* ── Testimonials — Marquee ── */}
      <MarqueeTestimonials testimonials={TESTIMONIALS} />

      {/* ── FAQ — Animated Accordion ── */}
      <AnimatedFAQ limit={3} showMoreLink={true} />

      {/* ── Final CTA ── */}
      <section
        id="contact"
        className="py-12 md:py-32 relative z-10 flex flex-col items-center justify-center"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full pointer-events-none" />

          <HomeClient type="reveal">
            <div
              className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl text-center border-t border-white/20 relative overflow-hidden"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              {/* Inner noise */}
              <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

              <meta itemProp="name" content="AV Technologies" />
              <meta itemProp="telephone" content="+91-8462802086" />
              <meta itemProp="email" content="contact@adhritverse.in" />

              <div className="relative z-10">
                <div className="avail-badge scale-90 mb-6" aria-label="Currently available for new projects">
                  <span className="avail-badge-live" aria-hidden="true" />
                  <span className="avail-badge-text">Available for New Projects · Worldwide &amp; Remote</span>
                </div>

                <h2
                  id="cta-heading"
                  className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8"
                >
                  Let&apos;s Build Something <span className="text-gradient">Great</span>
                </h2>
                <p className="hidden sm:block text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                  Partner with AV Technologies — India&apos;s AI-powered startup tech partner. From MVP to
                  scale, we architect your growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8">
                  <Link
                    href="/contact"
                    id="cta-free-consultation"
                    className="btn-primary px-6 sm:px-10 py-3 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-sm sm:text-lg whitespace-nowrap flex items-center justify-center gap-2"
                    aria-label="Get a free consultation from AV Technologies"
                  >
                    <CalendarCheck className="w-4 h-4 sm:w-[20px] sm:h-[20px]" />
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+918462802086"
                    id="cta-call-now"
                    className="btn-outline px-6 sm:px-10 py-3 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-sm sm:text-lg whitespace-nowrap flex items-center justify-center gap-2"
                    aria-label="Call AV Technologies now"
                  >
                    <Phone className="w-4 h-4 sm:w-[20px] sm:h-[20px]" />
                    Book a Strategy Call
                  </a>
                </div>

                {/* Location trust strip */}
                <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 border-t border-white/5 pt-6">
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
          </HomeClient>
        </div>
      </section>

      <Footer />
    </main>
  );
}
