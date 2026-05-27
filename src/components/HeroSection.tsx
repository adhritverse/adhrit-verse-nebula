"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── Utility ──────────────────────────────────────────────────────────────────
const cn = (...inputs: Parameters<typeof clsx>) => twMerge(clsx(inputs));

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Floating Bottom Navbar ───────────────────────────────────────────────────
function FloatingNav() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
      <motion.nav
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease }}
        className={cn(
          "flex items-center gap-1",
          "bg-white/90 backdrop-blur-2xl",
          "px-1.5 py-1.5 rounded-full",
          "shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
          "border border-slate-200/40"
        )}
      >
        {/* Star logo mark */}
        <div
          className={cn(
            "w-9 h-9 rounded-full shrink-0",
            "bg-white border border-slate-100 shadow-sm",
            "flex items-center justify-center",
            "text-[#0a1b33] text-sm font-bold select-none"
          )}
        >
          ✦
        </div>

        {/* Nav links */}
        <Link
          href="/projects"
          className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors rounded-full"
        >
          Products
        </Link>
        <Link
          href="/faq"
          className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors rounded-full"
        >
          Docs
        </Link>

        {/* Get in touch CTA */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className={cn(
              "flex items-center gap-1",
              "bg-white px-5 py-2 rounded-full",
              "text-[12px] font-semibold text-[#0a1b33]",
              "border border-slate-200/60 shadow-sm",
              "hover:border-slate-300 transition-all"
            )}
          >
            Get in touch
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
}

// ─── Main Hero Section ────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 pt-28 pb-12" style={{ background: "#f9fafb" }}>

      {/* ── Hero container ── */}
      <div
        className={cn(
          "relative w-full max-w-[1400px] mx-auto",
          "rounded-[48px] bg-white",
          "border border-slate-200/50",
          "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]",
          "overflow-hidden h-[600px] flex flex-col"
        )}
      >
        {/* ── Video background (z-0) ── */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>

        {/* ── Hero text content (z-20) ── */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="flex flex-col items-start gap-5 max-w-2xl"
          >
            {/* Pre-headline Badge */}
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border shadow-sm select-none"
              style={{ borderColor: "var(--border)", background: "rgba(10, 21, 45, 0.03)", color: "#0a1b33" }}
            >
              Secure Web Apps<span className="animate-pulse-slow">|</span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold tracking-tight text-[40px] md:text-[52px] leading-[1.1]"
              style={{ color: "#0a1b33" }}
            >
              Cyber & Web
              <br />
              Innovation Consultancy.
            </h1>

            {/* Subheadline */}
            <p
              className="font-sans text-[14px] md:text-[15px] leading-[1.75] max-w-[480px]"
              style={{ color: "#64748b" }}
            >
              From bleeding-edge AI to bulletproof cybersecurity — we architect, build, and ship the technology that scales your vision.
            </p>

            {/* Contact Us button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              onClick={() => (window.location.href = "/contact")}
              className={cn(
                "inline-flex items-center gap-2",
                "bg-[#0a152d] text-white",
                "px-6 py-3 rounded-full",
                "text-[13px] font-semibold",
                "transition-all duration-300",
                "shadow-[0_8px_32px_rgba(10,21,45,0.25)]",
                "hover:shadow-[0_12px_40px_rgba(10,21,45,0.35)]"
              )}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* ── Floating bottom navbar ── */}
        <FloatingNav />
      </div>
    </section>
  );
}
