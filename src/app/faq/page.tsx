import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | AV Technologies",
  description: "Frequently Asked Questions about AV Technologies - India's leading AI-powered tech agency.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      {/* ── Hero Header ── */}
      <section className="pt-32 sm:pt-40 pb-10 text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-[10px] sm:text-xs text-slate-400 tracking-widest uppercase">
          <i className="fas fa-question-circle text-primary" />
          Knowledge Base
        </div>
        <h1 className="font-display text-[26px] sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Have <span className="text-gradient">Questions?</span>
        </h1>
        <p className="text-xs sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Everything you need to know about partnering with AV Technologies.
        </p>
      </section>

      {/* ── FAQ List ── */}
      <FAQ hideTitle={true} />

      <Footer />
    </main>
  );
}
