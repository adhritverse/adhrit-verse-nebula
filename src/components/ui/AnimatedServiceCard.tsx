"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: any;
  title: string;
  slug: string;
  desc: string;
  color: string;
  bg: string;
  glow: string;
  index: number;
}

export default function AnimatedServiceCard({
  icon: Icon,
  title,
  slug,
  desc,
  color,
  bg,
  glow,
  index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Slight rotations for "controlled chaos" on each card
  const rotations = [-0.8, 0.6, -0.4, 0.9, -0.6, 0.5];
  const rotation = rotations[index % rotations.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        rotate: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      className="relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/[0.06] transition-colors duration-500 hover:border-primary/25 group"
      itemScope
      itemType="https://schema.org/Service"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content={String(index)} />

      {/* Mouse-tracking glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            width: 280,
            height: 280,
            left: mousePos.x - 140,
            top: mousePos.y - 140,
            background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
            opacity: 0.6,
          }}
        />
      )}

      {/* Corner accent glow */}
      <div
        className="absolute top-0 right-0 -mr-8 -mt-8 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
        style={{ background: glow }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 sm:block mb-3 sm:mb-0">
          <div
            className={`w-11 h-11 shrink-0 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${bg} flex items-center justify-center ${color} sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/5`}
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
      </div>
    </motion.article>
  );
}
