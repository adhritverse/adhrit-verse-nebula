"use client";

// ── MarqueeScroller ─────────────────────────────────────────────────────────
// Pure-CSS infinite marquee with gradient fade masks and hover glow cards.

interface LogoItem {
  src: string;
  alt: string;
  gradient: { from: string; to: string };
}

const LOGOS: LogoItem[] = [
  {
    src: "https://svgl.app/library/procure.svg",
    alt: "Procure",
    gradient: { from: "#3b82f6", to: "#2563eb" },
  },
  {
    src: "https://svgl.app/library/shopify.svg",
    alt: "Shopify",
    gradient: { from: "#f59e0b", to: "#d97706" },
  },
  {
    src: "https://svgl.app/library/blender.svg",
    alt: "Blender",
    gradient: { from: "#60a5fa", to: "#3b82f6" },
  },
  {
    src: "https://svgl.app/library/figma.svg",
    alt: "Figma",
    gradient: { from: "#a855f7", to: "#7c3aed" },
  },
  {
    src: "https://svgl.app/library/spotify.svg",
    alt: "Spotify",
    gradient: { from: "#f472b6", to: "#ef4444" },
  },
  {
    src: "https://svgl.app/library/lottielab.svg",
    alt: "Lottielab",
    gradient: { from: "#fbbf24", to: "#84cc16" },
  },
  {
    src: "https://svgl.app/library/google_cloud.svg",
    alt: "Google Cloud",
    gradient: { from: "#7dd3fc", to: "#38bdf8" },
  },
  {
    src: "https://svgl.app/library/bing.svg",
    alt: "Bing",
    gradient: { from: "#22d3ee", to: "#14b8a6" },
  },
];

function LogoCard({ item }: { item: LogoItem }) {
  return (
    <div className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden">
      {/* Gradient hover fill */}
      <div
        className="absolute inset-0 rounded-full opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${item.gradient.from}, ${item.gradient.to})`,
        }}
      />
      {/* Logo image */}
      <img
        src={item.src}
        alt={item.alt}
        width={64}
        height={64}
        loading="lazy"
        className="relative z-10 h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    </div>
  );
}

export default function MarqueeScroller() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <div className="mt-10 w-full overflow-hidden">
      {/* Gradient masks on left + right */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Scrolling track — render list twice for seamless loop */}
        <div className="marquee-track flex gap-5 w-max">
          {doubled.map((item, i) => (
            <LogoCard key={`${item.alt}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
