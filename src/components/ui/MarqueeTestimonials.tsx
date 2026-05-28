"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string | React.ReactNode;
  rating: number;
  avatar?: string;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] group">
      <div
        className="relative h-full p-6 md:p-8 rounded-3xl border overflow-hidden transition-all duration-500 group-hover:scale-[1.01] group-hover:-translate-y-1.5"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.03)",
        }}
      >
        {/* Decorative corner ambient light */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/15 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Card Header: Rating & Quote Icon */}
        <div className="relative z-10 flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="fill-amber-400 text-amber-400 w-3.5 h-3.5 sm:w-4 sm:h-4"
                />
              ))}
            </div>
            <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100/50">
              <BadgeCheck size={11} className="stroke-[2.5]" />
              Verified
            </span>
          </div>
          <Quote size={20} className="text-primary/10 group-hover:text-primary/30 transition-colors duration-300 transform -scale-x-100" />
        </div>

        {/* Card Body: Quote text */}
        <blockquote className="relative z-10 text-xs sm:text-sm md:text-[14px] leading-relaxed text-slate-600 font-normal mb-6 flex-1">
          {t.quote}
        </blockquote>

        {/* Card Footer: User details */}
        <div className="relative z-10 flex items-center gap-3.5 pt-4 border-t border-[var(--border)]">
          <div className="leading-tight">
            <h4 className="font-semibold text-xs sm:text-sm text-slate-800">{t.name}</h4>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
              {t.role} <span className="mx-1 text-slate-300">•</span> {t.location}
            </p>
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
  // Repeat items enough times to span screen width seamlessly without cuts
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

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
        <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Wall of Love</span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Trusted by <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Real results from real clients — startups, enterprises, and funded
            ventures who chose AV Technologies.
          </p>
        </motion.div>
      </div>

      {/* Single Marquee container */}
      <div className="relative group">
        {/* Fade edges — matches light bg base */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-20 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-20 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />

        {/* Marquee Track */}
        <div className="overflow-hidden flex">
          <div className="flex gap-6 marquee-track group-hover:[animation-play-state:paused] w-max py-2">
            {marqueeItems.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
