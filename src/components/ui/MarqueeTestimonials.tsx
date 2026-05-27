"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] group">
      <div
        className="relative h-full p-6 md:p-8 rounded-3xl border overflow-hidden transition-all duration-500 group-hover:scale-[1.02] hover:-translate-y-2"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Accent glow on hover */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {/* Glow dot bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Decorative quote */}
        <div className="absolute top-0 right-4 text-[100px] font-serif leading-none pointer-events-none select-none" style={{ color: "var(--border)" }}>
          &rdquo;
        </div>

        <div className="relative z-10 flex flex-col h-full gap-4">
          {/* Rating */}
          <div className="flex gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                className="fill-amber-400 text-amber-400 w-3.5 h-3.5"
              />
            ))}
          </div>

          <blockquote className="text-sm leading-relaxed italic flex-1" style={{ color: "var(--text-secondary)" }}>
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary font-bold text-sm shrink-0" style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
              {t.name[0]}
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{t.name}</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                {t.role} · {t.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MarqueeTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  // Duplicate items for seamless loop
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative z-10 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Noise layer */}
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      {/* Mesh gradient bleed */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2
            id="testimonials-heading"
            className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
          >
            Trusted by{" "}
            <span className="text-gradient">Founders</span>
          </h2>
          <p className="hidden sm:block text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Real results from real clients — startups, enterprises, and funded
            ventures who chose AV Technologies.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative group">
        {/* Fade edges — matches light bg */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />

        <div className="overflow-hidden flex">
          <div className="flex gap-6 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
            {items.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
