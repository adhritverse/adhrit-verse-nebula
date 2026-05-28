import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
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
import { projects } from "@/data/projects";
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



const PROJECTS = projects.map(p => ({
  id: p.id,
  img: p.img,
  title: p.title,
  desc: p.desc,
  href: p.link,
  tags: p.tags.slice(0, 2),
}));

const TESTIMONIALS = [
  {
    name: "Aakash Sharma",
    role: "Founder, FinTech Startup",
    location: "India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    quote: (
      <>
        AV Technologies transformed our MVP into a{" "}
        <span className="text-primary font-semibold">production-grade AI platform</span>{" "}
        in just <span className="text-primary font-semibold">8 weeks</span>. Their cybersecurity
        audit saved us from a critical vulnerability before launch. Absolute best tech team — period.
      </>
    ),
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "CEO, EdTech Company",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote: (
      <>
        We tried 3 agencies before AV Technologies. The difference is night and day. They actually
        understand <span className="text-primary font-semibold">startup growth</span>, not just code.
        Our app went from <span className="text-primary font-semibold">0 to 50K users in 4 months</span>.
      </>
    ),
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Co-Founder, SaaS Platform",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    quote: (
      <>
        The AI/ML integration they built for our platform reduced our customer{" "}
        <span className="text-primary font-semibold">churn by 34%</span>. These guys are not an
        agency — they're a <span className="text-primary font-semibold">genuine tech growth partner</span>.
      </>
    ),
    rating: 5,
  },
  {
    name: "Ananya Desai",
    role: "CTO, HealthTech Innovators",
    location: "Pune",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    quote: (
      <>
        Working with AV Technologies to revamp our healthcare portal was the{" "}
        <span className="text-primary font-semibold">best decision</span>. Their focus on{" "}
        <span className="text-primary font-semibold">compliance and user experience</span> is
        unmatched in the industry.
      </>
    ),
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, AgriTech Solutions",
    location: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    quote: (
      <>
        They delivered an IoT dashboard that helped our farmers track soil health in real time. The{" "}
        <span className="text-primary font-semibold">precision and scalability</span> of their cloud
        architecture are brilliant.
      </>
    ),
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "VP Product, E-commerce Network",
    location: "Delhi NCR",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    quote: (
      <>
        AV Technologies implemented a custom recommendation engine that boosted our average order
        value by <span className="text-primary font-semibold">21%</span>. Their engineers operate
        like an <span className="text-primary font-semibold">extension of our own team</span>.
      </>
    ),
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
      style={{ background: "var(--bg-base)" }}
    >
      <Navbar />
      <BlobBackground />

      <HeroSection />

      {/* ── Services ── Overlaps into hero with negative margin */}
      <section
        id="services"
        className="py-20 md:py-28 relative z-10 -mt-8 md:-mt-12"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/ItemList"
        style={{ background: "var(--bg-base)" }}
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
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="hidden sm:block text-base md:text-lg max-w-3xl md:mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              From AI-powered web apps to enterprise cybersecurity — AV Technologies is India&apos;s
              most comprehensive{" "}
              <strong style={{ color: "var(--text-primary)" }}>startup tech partner</strong>, not just another digital
              agency.
            </p>
          </HomeClient>

          <ServicesGrid />

          <HomeClient type="reveal" className="text-center mt-10 hidden sm:block">
            <Link
              href="/services"
              className="btn-outline px-8 py-4 rounded-full font-medium text-base inline-flex items-center gap-2"
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
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="process-heading"
        style={{ background: "var(--bg-elevated)" }}
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
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              From Idea to{" "}
              <span className="text-gradient">Launch</span>
            </h2>
            <p className="hidden sm:block text-base md:text-lg max-w-2xl md:mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A proven <strong style={{ color: "var(--text-primary)" }}>6-step process</strong> that takes your product from concept to production — securely,
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
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full pointer-events-none" />

          <HomeClient type="reveal">
            <div
              className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
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
                  className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8"
                  style={{ color: "var(--text-primary)" }}
                >
                  Let&apos;s Build Something <span className="text-gradient">Great</span>
                </h2>
                <p className="hidden sm:block text-sm sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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
                    className="btn-outline px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium w-full sm:w-auto text-sm sm:text-lg whitespace-nowrap flex items-center justify-center gap-2"
                    aria-label="Call AV Technologies now"
                  >
                    <Phone className="w-4 h-4 sm:w-[20px] sm:h-[20px]" />
                    Book a Strategy Call
                  </a>
                </div>

                {/* Location trust strip */}
                <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 border-t border-[var(--border)] pt-6">
                  <a
                    href="mailto:contact@adhritverse.in"
                    className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors duration-200"
                    aria-label="Email AV Technologies"
                  >
                    <i className="fas fa-envelope text-primary" aria-hidden="true" />
                    contact@adhritverse.in
                  </a>
                  <a
                    href="tel:+918462802086"
                    className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors duration-200"
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
