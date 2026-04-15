"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Brain, Rocket, Handshake, ArrowRight,
} from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    accent: "#3b82f6",
    title: "Cybersecurity-First Mindset",
    desc: "Every product we build undergoes a full security review. We're one of the very few agencies in India with in-house ethical hackers — your product ships fortified, not just functional.",
    stat: "100%",
    statLabel: "Products security-audited",
  },
  {
    icon: <Brain size={22} strokeWidth={1.5} />,
    accent: "#8b5cf6",
    title: "AI Integrated by Default",
    desc: "We don't bolt on AI as an afterthought — intelligent automation and ML are baked into our engineering process from day one. Smarter products, faster decisions.",
    stat: "3x",
    statLabel: "Faster with AI pipelines",
  },
  {
    icon: <Rocket size={22} strokeWidth={1.5} />,
    accent: "#06b6d4",
    title: "Startup Speed, Enterprise Quality",
    desc: "MVPs in 4–8 weeks without sacrificing scalability, performance, or code maintainability. We move fast and build things that last.",
    stat: "4–8w",
    statLabel: "Average MVP delivery",
  },
  {
    icon: <Handshake size={22} strokeWidth={1.5} />,
    accent: "#10b981",
    title: "Co-Founder Mentality",
    desc: "We invest in your product's success — not just the sprint. Deep product thinking with strategic advisory, not just task execution.",
    stat: "92%",
    statLabel: "Long-term partnerships",
  },
];

function StackCard({
  card,
  index,
  totalCards,
}: {
  card: (typeof CARDS)[0];
  index: number;
  totalCards: number;
}) {
  return (
    <div
      style={{
        top: `calc(7rem + ${index * 1.5}rem)`,
        zIndex: totalCards - index,
      }}
      className="sticky will-change-transform"
    >
      <div
        className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.06] backdrop-blur-xl transition-all duration-500 group"
        style={{
          background: `linear-gradient(135deg, rgba(2,6,23,0.95), rgba(2,6,23,0.85))`,
          boxShadow: `0 ${20 + index * 8}px ${40 + index * 15}px -10px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.04)`,
        }}
      >
        {/* Noise texture */}
        <div className="absolute inset-0 noise-bg opacity-40 pointer-events-none" />

        {/* Accent gradient bleed */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700"
          style={{ background: card.accent }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-[80px] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700"
          style={{ background: card.accent }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] opacity-40"
          style={{
            background: `linear-gradient(90deg, transparent, ${card.accent}60, transparent)`,
          }}
        />

        <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          {/* Left: Icon + Number */}
          <div className="flex md:flex-col items-center gap-4 md:gap-3 shrink-0">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${card.accent}15, ${card.accent}05)`,
                border: `1px solid ${card.accent}25`,
                color: card.accent,
              }}
            >
              {card.icon}
            </div>
            <span
              className="text-xs font-black tracking-widest opacity-30 md:text-center"
              style={{ color: card.accent }}
            >
              0{index + 1}
            </span>
          </div>

          {/* Center: Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
              {card.title}
            </h3>
            <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors max-w-2xl">
              {card.desc}
            </p>
          </div>

          {/* Right: Big Stat */}
          <div className="shrink-0 text-right md:text-center hidden sm:block">
            <div
              className="text-3xl md:text-4xl font-black tracking-tight mb-1"
              style={{ color: card.accent }}
            >
              {card.stat}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold max-w-[120px]">
              {card.statLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StackingWhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="why-us"
      className="relative z-10"
      aria-labelledby="why-heading"
    >
      {/* Full-bleed dark texture background */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 noise-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="pt-20 md:pt-28 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1px] bg-primary/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/70">
                  Why AV Technologies
                </span>
              </div>
              <h2
                id="why-heading"
                className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                The Ultimate{" "}
                <span className="text-gradient">Full-Stack</span>{" "}
                <br className="hidden md:block" />
                Tech Partner
              </h2>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-primary text-base font-semibold hover:gap-3 transition-all duration-300 shrink-0 mb-1"
            >
              Meet the team <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Stacking cards scroll container */}
        <div
          ref={containerRef}
          className="pb-20 md:pb-28"
          style={{ minHeight: `${CARDS.length * 220 + 200}px` }}
        >
          <div className="flex flex-col gap-5">
            {CARDS.map((card, i) => (
              <StackCard
                key={card.title}
                card={card}
                index={i}
                totalCards={CARDS.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
