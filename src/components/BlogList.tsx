"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Tag, Search, BookOpen } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  featured: boolean;
}

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Modern Web", "Cybersecurity", "Mobile", "AI/ML"];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Determine if we should show the featured hero layout
  // Only show it when we are on "All" category and search is empty
  const showFeaturedHero = activeCategory === "All" && searchQuery === "";
  
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const displayPosts = showFeaturedHero
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <div className="flex flex-col gap-12">
      {/* ── Search & Filter Controls ── */}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between border-b border-[var(--border)] pb-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 border backdrop-blur-md cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/20 hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-4 h-4" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
          />
        </div>
      </div>

      {/* ── Featured Post Hero Layout ── */}
      {showFeaturedHero && featuredPost && (
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-[2rem] overflow-hidden border transition-all duration-500 hover:border-primary/30 grid grid-cols-1 lg:grid-cols-12"
          style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
        >
          <Link href={`/blog/${featuredPost.slug}`} className="absolute inset-0 z-20">
            <span className="sr-only">Read {featuredPost.title}</span>
          </Link>

          {/* Left Side: Image */}
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-slate-900/10">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Blends image to the content background */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-[var(--bg-surface)] z-10 pointer-events-none" />
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10" style={{ background: "var(--bg-surface)" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                {featuredPost.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                <Calendar size={13} />
                {featuredPost.date}
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight" style={{ color: "var(--text-primary)" }}>
              {featuredPost.title}
            </h2>
            <p className="leading-relaxed mb-8 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
              {featuredPost.description}
            </p>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border)]">
              <div className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold text-xs" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                  {featuredPost.author[0]}
                </div>
                {featuredPost.author}
              </div>
              <span className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </motion.article>
      )}

      {/* ── Empty State ── */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 border border-dashed border-[var(--border)] rounded-2xl"
        >
          <BookOpen className="mx-auto w-12 h-12 text-[var(--text-muted)] mb-4 stroke-1" />
          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>No articles found</h3>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Try adjusting your search keywords or selecting another category.</p>
        </motion.div>
      )}

      {/* ── Grid List ── */}
      {displayPosts.length > 0 && (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden glass-card border border-[var(--border)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20">
                  <span className="sr-only">Read {post.title}</span>
                </Link>

                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-[var(--bg-surface)]/20 to-transparent z-10 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-4">
                    <Tag size={12} className="text-primary/70" />
                    {post.category}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug" style={{ color: "var(--text-primary)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-light" style={{ color: "var(--text-secondary)" }}>
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-[var(--border)] mt-auto">
                    <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
