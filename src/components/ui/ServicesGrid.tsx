"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Animated SVG Icons ─────────────────────────────────────────────────────

function WebDevIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <motion.rect
        x="6" y="8" width="36" height="28" rx="4"
        stroke="currentColor" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <motion.circle cx="11" cy="12" r="1.5" fill="#ef4444"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="16" cy="12" r="1.5" fill="#eab308"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      />
      <motion.circle cx="21" cy="12" r="1.5" fill="#22c55e"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      {/* Code lines */}
      <motion.path
        d="M14 22L18 26L14 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.3 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      />
      <motion.line x1="22" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.line x1="22" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
      />
      <motion.rect x="14" y="38" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

function AppDevIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <motion.rect
        x="14" y="4" width="20" height="40" rx="4"
        stroke="currentColor" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.line x1="14" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <motion.line x1="14" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <motion.circle cx="24" cy="40" r="2" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* App grid */}
      <motion.rect x="18" y="16" width="5" height="5" rx="1" fill="currentColor" opacity="0.2"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.rect x="25" y="16" width="5" height="5" rx="1" fill="currentColor" opacity="0.2"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.rect x="18" y="24" width="5" height="5" rx="1" fill="currentColor" opacity="0.2"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
      <motion.rect x="25" y="24" width="5" height="5" rx="1" fill="currentColor" opacity="0.2"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
      />
    </svg>
  );
}

function UIUXIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <motion.circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      />
      {/* Pen tool */}
      <motion.path
        d="M20 34L14 28L28 14L34 20L20 34Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
      />
      <motion.path d="M14 28L12 36L20 34" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6" />
      {/* Cursor */}
      <motion.circle cx="34" cy="14" r="3" fill="currentColor" opacity="0.15"
        animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function CyberIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <motion.path
        d="M24 4L40 12V24C40 33.6 33 41 24 44C15 41 8 33.6 8 24V12L24 4Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Lock */}
      <motion.rect x="19" y="22" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"
        animate={{ y: [22, 21, 22] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path d="M21 22V18C21 16.3 22.3 15 24 15C25.7 15 27 16.3 27 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.circle cx="24" cy="26.5" r="1" fill="currentColor"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Pulse rings */}
      <motion.circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="0.5" opacity="0.15"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}

function AIMLIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      {/* Brain outline */}
      <motion.path
        d="M24 8C18 8 14 12 14 16C12 16 10 18 10 21C10 24 12 26 14 26C14 30 18 34 24 34C30 34 34 30 34 26C36 26 38 24 38 21C38 18 36 16 34 16C34 12 30 8 24 8Z"
        stroke="currentColor" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      />
      {/* Neural connections */}
      {[
        { cx: 20, cy: 16 }, { cx: 28, cy: 16 },
        { cx: 17, cy: 22 }, { cx: 24, cy: 20 }, { cx: 31, cy: 22 },
        { cx: 20, cy: 28 }, { cx: 28, cy: 28 },
      ].map((n, i) => (
        <motion.circle
          key={i} cx={n.cx} cy={n.cy} r="1.5" fill="currentColor"
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
      {/* Spark */}
      <motion.path d="M24 36V42M20 40L24 42L28 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function CloudDevOpsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <motion.path
        d="M14 32C10 32 8 29 8 26C8 23 10 20.5 13 20C13 15 17 12 22 12C26 12 29 14 30.5 17C31 17 31.5 17 32 17C36 17 40 20 40 24C40 28 37 32 32 32H14Z"
        stroke="currentColor" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Upload arrow */}
      <motion.path d="M24 26V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path d="M20 30L24 26L28 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Dots */}
      <motion.circle cx="18" cy="24" r="1" fill="currentColor"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="24" cy="22" r="1" fill="currentColor"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
      <motion.circle cx="30" cy="24" r="1" fill="currentColor"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
      />
    </svg>
  );
}

const ICON_MAP: Record<string, () => ReturnType<typeof WebDevIcon>> = {
  "web-development": WebDevIcon,
  "app-development": AppDevIcon,
  "uiux-design": UIUXIcon,
  "cybersecurity": CyberIcon,
  "ai-ml": AIMLIcon,
  "cloud-devops": CloudDevOpsIcon,
};

// ── Service Data ───────────────────────────────────────────────────────────

const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "MERN Stack & Next.js specialists. We build SEO-optimized, high-performance web apps that convert visitors into customers — tailored for startups and global SaaS.",
    accent: "#3b82f6",
  },
  {
    slug: "app-development",
    title: "App Development",
    desc: "Cross-platform mobile apps using Flutter & React Native. Ship to iOS and Android simultaneously — faster go-to-market for your startup.",
    accent: "#8b5cf6",
  },
  {
    slug: "uiux-design",
    title: "UI/UX Design",
    desc: "Premium user-centered design, prototyping & design systems. Interfaces that delight, engage, and drive measurable business results.",
    accent: "#ec4899",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    desc: "VAPT, penetration testing & security audits. We identify vulnerabilities before attackers do — essential for every modern startup.",
    accent: "#ef4444",
  },
  {
    slug: "ai-ml",
    title: "AI/ML Solutions",
    desc: "Custom AI chatbots, predictive analytics & intelligent automation. Give your product the competitive edge of artificial intelligence.",
    accent: "#10b981",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "AWS / Azure / GCP cloud setup, CI/CD pipelines & Kubernetes. Scale from MVP to enterprise without breaking your infrastructure.",
    accent: "#06b6d4",
  },
];

// ── Card Component ─────────────────────────────────────────────────────────

function ServiceCard({
  slug, title, desc, accent, index,
}: {
  slug: string; title: string; desc: string; accent: string; index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = ICON_MAP[slug];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      className="relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl group"
      itemScope
      itemType="https://schema.org/Service"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content={String(index + 1)} />

      {/* Card background with gradient border */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, ${accent}20, transparent 60%)`,
        }}
      />

      {/* Mouse-tracking spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: 300, height: 300,
            left: mousePos.x - 150, top: mousePos.y - 150,
            background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10 p-5 sm:p-7 bg-slate-900/50 backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl transition-colors duration-500 group-hover:border-white/[0.12] h-full flex flex-col">
        {/* Icon */}
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accent}12, ${accent}05)`,
            border: `1px solid ${accent}20`,
            color: accent,
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(circle at 30% 30%, ${accent}25, transparent)` }}
          />
          <div className="w-8 h-8 sm:w-9 sm:h-9 relative z-10">
            <IconComponent />
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 tracking-wide"
          itemProp="name"
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed line-clamp-3 lg:line-clamp-4 group-hover:text-slate-300 transition-colors duration-300 flex-1"
          itemProp="description"
        >
          {desc}
        </p>

        {/* CTA */}
        <Link
          href={`/services#${slug}`}
          className="font-semibold text-base sm:text-lg flex items-center gap-3 transition-all duration-300 group-hover:gap-4 mt-auto tracking-wide"
          style={{ color: accent }}
          itemProp="url"
          aria-label={`Learn more about ${title}`}
        >
          Explore Service <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </motion.article>
  );
}

// ── Grid ────────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {SERVICES.map((s, idx) => (
        <ServiceCard key={s.slug} index={idx} {...s} />
      ))}
    </div>
  );
}
