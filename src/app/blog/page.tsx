import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Hub | AV Technologies",
  description:
    "Insights, strategies, and deeply technical articles on AI, Cybersecurity, web development, and startup growth from the AV Technologies engineering team.",
  alternates: { canonical: "https://adhritverse.in/blog" },
};

const POSTS = [
  {
    slug: "scaling-nextjs-startups",
    title: "How to Scale a Next.js MVP to 100K Users",
    description:
      "A deep dive into performance bottlenecks, caching strategies, and database indexing when your Next.js application suddenly hits hypergrowth.",
    date: "Aug 12, 2026",
    author: "AV Tech Team",
    category: "Modern Web",
    image: "/projectimg/project-1.png",
    featured: true,
  },
  {
    slug: "ai-cybersecurity-trends",
    title: "AI in Cybersecurity: Friend or Foe?",
    description:
      "Understanding how AI is reshaping both offensive and defensive cybersecurity landscapes for tech startups.",
    date: "Jul 28, 2026",
    author: "Arjun S.",
    category: "Cybersecurity",
    image: "/projectimg/project2.png",
    featured: false,
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native: The 2026 Verdict",
    description:
      "Which framework should you choose for your startup's mobile app? We compare performance, developer experience, and ecosystem maturity.",
    date: "Jul 15, 2026",
    author: "Sneha V.",
    category: "Mobile",
    image: "/projectimg/Project-3.png",
    featured: false,
  },
  {
    slug: "building-ai-agents",
    title: "Architecting Autonomous AI Agents",
    description:
      "A technical walkthrough of building context-aware AI agents using LangChain, vector databases, and GPT-4o.",
    date: "Jun 30, 2026",
    author: "AV Tech Team",
    category: "AI/ML",
    image: "/projectimg/project-1.png",
    featured: false,
  },
  {
    slug: "startup-security-audit",
    title: "The Ultimate Pre-Launch Security Checklist",
    description:
      "Don't let a data breach ruin your launch day. Follow this comprehensive security audit checklist designed specifically for early-stage startups.",
    date: "Jun 10, 2026",
    author: "Karan M.",
    category: "Cybersecurity",
    image: "/projectimg/project2.png",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = POSTS.find((p) => p.featured) || POSTS[0];
  const regularPosts = POSTS.filter((p) => p !== featuredPost);

  return (
    <main className="min-h-screen relative" itemScope itemType="https://schema.org/Blog">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The <span className="text-gradient">Knowledge Hub</span>
            </h1>
            <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Engineering deep dives, startup strategies, and insights on shipping world-class digital products.
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Featured Post */}
            <article className="group relative rounded-3xl overflow-hidden glass-card border border-white/[0.08] hover:border-primary/30 transition-all duration-500">
              <Link href={`/blog/${featuredPost.slug}`} className="absolute inset-0 z-20">
                <span className="sr-only">Read {featuredPost.title}</span>
              </Link>
              
              <div className="grid md:grid-cols-2 gap-0 relative z-10">
                {/* Fallback pattern if image is missing */}
                <div className="relative h-64 md:h-full bg-slate-800/50 min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 mesh-gradient opacity-30" />
                </div>
                
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {featuredPost.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-primary font-bold">
                        {featuredPost.author[0]}
                      </div>
                      {featuredPost.author}
                    </div>
                    <span className="flex items-center justify-center gap-2 text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Grid Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col h-full rounded-2xl glass-card border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20">
                    <span className="sr-only">Read {post.title}</span>
                  </Link>
                  
                  <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
                        <Tag size={12} />
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-white/[0.05] mt-auto">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center justify-center gap-1 text-sm font-medium text-white group-hover:text-primary transition-colors">
                        Read
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
