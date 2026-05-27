import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import React from "react";

// Mock data fetcher for the specific post
function getPost(slug: string) {
  return {
    slug,
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " - A Technical Deep Dive",
    description: "An in-depth look at modern engineering practices, scalable architecture, and why this matters for your startup's long-term success.",
    date: "Aug 12, 2026",
    author: "AV Tech Team",
    category: "Engineering",
    content: `
      <h2>The Challenge of Scale</h2>
      <p>When your startup starts growing, the initial architecture that helped you launch the MVP will inevitably start showing its limits. At AV Technologies, we've helped dozens of startups transition from monolithic, quick-and-dirty MVP codebases to microservices-oriented, highly available systems capable of serving millions of concurrent users.</p>
      
      <h3>Defining the Bottlenecks</h3>
      <p>Performance bottlenecks usually manifest in three primary areas:</p>
      <ul>
        <li><strong>Database Queries:</strong> Unindexed fields, N+1 query problems, and lock contention.</li>
        <li><strong>Compute layer:</strong> Sync operations blocking the event loop or simply not enough RAM/CPU allocated per worker.</li>
        <li><strong>Network/Latency:</strong> Large payload sizes, lack of CDN caching, and heavy client-side rendering burdens.</li>
      </ul>

      <h2>Our Methodology</h2>
      <p>Instead of blind tech migrations, we favor a data-driven approach. Establish comprehensive telemetry using tools like Datadog or Prometheus. Identify the exact endpoints causing high p99 latencies, and optimize those systematically.</p>

      <div class="glass-card p-6 my-8 rounded-2xl border border-primary/20 bg-primary/[0.03]">
        <h4 class="text-primary font-bold text-lg mb-2">Pro Tip</h4>
        <p class="text-sm text-[var(--text-secondary)]">Always optimize your database indexes before refactoring code. A missing index on a frequently queried table can cause a 10x performance drop, yet is fixable with a single SQL command.</p>
      </div>

      <h2>Conclusion</h2>
      <p>Scaling isn't just about handling more traffic—it's about ensuring reliability, security, and developer velocity as the team grows. If your startup is facing growing pains, AV Technologies offers comprehensive architecture audits to get you back on the fast track.</p>
    `,
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);
  return {
    title: `${post.title} | AV Technologies Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  return (
    <main className="min-h-screen relative" itemScope itemType="https://schema.org/BlogPosting" style={{ background: "var(--bg-base)" }}>
      <Navbar />

      {/* Global backgrounds */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/[0.04] to-transparent pointer-events-none" />

      <article className="pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Back button */}
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors mb-10 group"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="group-hover:text-[var(--text-primary)] transition-colors">Back to all articles</span>
          </Link>

          {/* Header */}
          <header className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                {post.category}
              </span>
              <span className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
                <Calendar size={12} />
                {post.date}
              </span>
            </div>
            
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>
              {post.title}
            </h1>
            
            <p className="text-xl leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {post.description}
            </p>

            <div className="flex items-center justify-between py-6 border-y border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold text-lg" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                  {post.author[0]}
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>{post.author}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>Engineering</div>
                </div>
              </div>
              <button 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors border border-[var(--border)] cursor-pointer"
                style={{ color: "var(--text-secondary)" }}
                aria-label="Share article"
              >
                <Share2 size={16} />
              </button>
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--text-primary)] prose-a:text-primary hover:prose-a:text-primary-light prose-strong:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-li:text-[var(--text-secondary)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Footer */}
          <div className="mt-20 pt-10 border-t border-[var(--border)]">
            <div className="p-8 md:p-12 glass-card rounded-3xl border border-[var(--border)] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ color: "var(--text-primary)" }}>Facing technical challenges?</h3>
              <p className="mb-8 max-w-lg mx-auto relative z-10 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
                Our engineering team has helped dozens of startups scale successfully. Let's discuss your architecture and chart a path forward.
              </p>
              <Link
                href="/contact"
                className="btn-primary relative z-10 px-8 py-3.5 rounded-full text-white font-medium text-sm inline-flex items-center gap-2"
              >
                Consult with our Experts
              </Link>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
