import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

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
    image: "/projectimg/nextjs_scaling_hero.png",
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
    image: "/projectimg/ai_cybersecurity_card.png",
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
    image: "/projectimg/mobile_frameworks_card.png",
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
    image: "/projectimg/ai_agents_card.png",
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
    image: "/projectimg/security_audit_card.png",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen relative" itemScope itemType="https://schema.org/Blog" style={{ background: "var(--bg-base)" }}>
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              The <span className="text-gradient">Knowledge Hub</span>
            </h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Engineering deep dives, startup strategies, and insights on shipping world-class digital products.
            </p>
          </div>

          <BlogList posts={POSTS} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
