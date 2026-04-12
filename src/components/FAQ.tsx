"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  // About AV Technologies
  {
    category: "About Us",
    q: "What is AV Technologies?",
    a: "AV Technologies (also known as AV Technologies) is an AI-powered tech consultancy and startup growth partner. Founded by Hritik Jaiswal, we specialize in web development, mobile app development, cybersecurity, AI/ML solutions, and cloud DevOps services for startups and enterprises across India.",
  },
  {
    category: "About Us",
    q: "Is AV Technologies one of the best tech agencies in India?",
    a: "AV Technologies is recognized as one of India's leading tech agencies, specializing in AI-powered solutions and cybersecurity — areas where most agencies lack depth. We serve clients across India and globally, with projects ranging from ₹50K to ₹10L+.",
  },
  {
    category: "About Us",
    q: "Where is AV Technologies located?",
    a: "AV Technologies is headquartered in India. We work with clients remotely across India and globally, delivering world-class tech solutions regardless of location.",
  },
  {
    category: "About Us",
    q: "Who founded AV Technologies?",
    a: "AV Technologies was founded by Hritik Jaiswal, a tech entrepreneur and cybersecurity expert. The agency was built with the vision of becoming India's most trusted AI-powered startup tech partner.",
  },

  // Services
  {
    category: "Services",
    q: "What services does AV Technologies offer?",
    a: "AV Technologies offers: Web Development (MERN, Next.js), Mobile App Development (Flutter, React Native), UI/UX Design, Cybersecurity & Ethical Hacking (VAPT), AI/ML Solutions, and Cloud & DevOps (AWS, Azure, GCP). All services are available to businesses remotely across India and globally.",
  },
  {
    category: "Services",
    q: "Does AV Technologies offer cybersecurity services?",
    a: "Yes. AV Technologies provides full-stack cybersecurity services including Vulnerability Assessment & Penetration Testing (VAPT), ethical hacking audits, threat modeling, and security architecture consulting. This is a core differentiator — we're one of the very few agencies in India with deep cybersecurity expertise.",
  },
  {
    category: "Services",
    q: "Can AV Technologies build AI-powered applications?",
    a: "Absolutely. AI/ML is central to what we do. We build custom AI chatbots, recommendation engines, predictive analytics dashboards, computer vision systems, and LLM-integrated SaaS products. We use OpenAI, Hugging Face, LangChain, and custom-trained models depending on your use case.",
  },
  {
    category: "Services",
    q: "Do you offer cloud & DevOps services?",
    a: "Yes — we are AWS, Azure, and GCP practitioners. Our DevOps team handles cloud architecture setup, CI/CD pipelines, Docker & Kubernetes container orchestration, auto-scaling infrastructure, and 24/7 monitoring. We help startups scale from MVP to enterprise-grade systems without infrastructure headaches.",
  },

  // Pricing
  {
    category: "Pricing",
    q: "How much does a website or app cost at AV Technologies?",
    a: "Project pricing at AV Technologies starts at ₹50,000 for a professional website. Mobile apps begin at ₹1.5L, and enterprise/AI solutions start at ₹3L. We offer flexible packages tailored for startups and SMEs across India. Contact us for a free consultation and custom quote.",
  },
  {
    category: "Pricing",
    q: "Do you offer flexible payment plans for startups?",
    a: "Yes. We understand startup cash flow constraints. AV Technologies offers milestone-based payment plans — typically 40% upfront, 40% at mid-delivery, and 20% on final deployment. We also offer equity-for-services arrangements for select early-stage startups with strong traction.",
  },
  {
    category: "Pricing",
    q: "Is there a free consultation before starting a project?",
    a: "Yes — we offer a free 30-minute strategy consultation for all new inquiries. During this call, we understand your requirements, assess technical feasibility, and recommend the best technology stack and approach. Book your free session via our contact page or call +91 8462802086.",
  },

  // Startups
  {
    category: "For Startups",
    q: "Does AV Technologies work with startups?",
    a: "Yes — startups are our primary focus. We act as a 'Startup Tech Partner', helping Indian and global startups build their MVPs, scale their products, and integrate AI. We've supported startups from idea-stage to ₹10L+ funded ventures.",
  },
  {
    category: "For Startups",
    q: "Can you help build an MVP quickly?",
    a: "Yes. Our rapid MVP development methodology leverages Next.js, Firebase/Supabase, and cloud-native architecture to ship a production-ready MVP in 4–8 weeks. We prioritize speed without sacrificing code quality, security, or scalability.",
  },
  {
    category: "For Startups",
    q: "What makes AV Technologies different from other agencies?",
    a: "Three key differentiators: (1) We combine AI, cybersecurity, and full-stack engineering under one roof — most agencies only do web/app. (2) We treat clients as co-founders, not just buyers — deep involvement in product strategy. (3) We have real startup experience and understand growth, not just code.",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(FAQ_DATA.map((f) => f.category)))];

export default function FAQ({ limit, showMoreLink, hideTitle }: { limit?: number; showMoreLink?: boolean; hideTitle?: boolean } = {}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllItems, setShowAllItems] = useState(false);

  const filtered = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const displayedFiltered = showMoreLink && limit ? filtered.slice(0, limit) : filtered;

  return (
    <section
      id="faq"
      className={`relative z-10 bg-slate-900/30 ${hideTitle ? 'pb-20 md:pb-28' : 'py-20 md:py-28'}`}
      aria-label="Frequently Asked Questions about AV Technologies"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        {!hideTitle && (
          <div className="text-left md:text-center mb-10 md:mb-14">
            <div className="faq-badge mb-5">
              <span className="faq-badge-dot" />
              <span className="faq-badge-text">FAQ · Quick Answers</span>
            </div>
            <h2 className="font-display text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="hidden sm:block text-sm md:text-base text-slate-400 max-w-2xl md:mx-auto leading-relaxed">
              Everything you need to know about AV Technologies — India&apos;s leading AI-powered tech agency.
              Can&apos;t find your answer?{" "}
              <a
                href="/contact"
                className="text-primary hover:text-accent underline underline-offset-2 transition-colors duration-200"
              >
                Ask us directly
              </a>
              .
            </p>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            <i className="fas fa-search text-sm" />
          </div>
          <input
            type="search"
            id="faq-search"
            placeholder="Search frequently asked questions…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null);
            }}
            aria-label="Search FAQ"
            className="w-full bg-slate-800/60 border border-white/8 rounded-2xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 backdrop-blur-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
            >
              <i className="fas fa-times text-xs" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="FAQ Categories"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "bg-white/5 text-slate-400 border-white/10 hover:border-primary/40 hover:text-white hover:bg-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Count */}
        {filtered.length > 0 ? (
          <p className="text-xs text-slate-500 mb-6 font-mono">
            Showing {filtered.length} question{filtered.length !== 1 ? "s" : ""}{" "}
            {activeCategory !== "All" ? `in "${activeCategory}"` : ""}
            {searchQuery ? ` matching "${searchQuery}"` : ""}
          </p>
        ) : (
          <div className="text-center py-12">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-slate-500 text-xl" />
            </div>
            <p className="text-slate-400 font-medium">No questions found.</p>
            <p className="text-slate-500 text-sm mt-1">
              Try a different keyword or{" "}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-primary underline"
              >
                clear filters
              </button>
              .
            </p>
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-3" role="list">
          {displayedFiltered.map((item, i) => {
            const isOpen = openIndex === i;
            // If showMoreLink is active, we don't apply the arbitrary hidden mobile logic
            const isHiddenMobile = !showMoreLink && !showAllItems && i >= 3;
            
            return (
              <div
                key={`${item.category}-${i}`}
                role="listitem"
                itemScope
                itemType="https://schema.org/Question"
                className={`faq-item rounded-2xl border transition-all duration-300 overflow-hidden ${isHiddenMobile ? "hidden sm:block" : "block"} ${isOpen
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                    : "border-white/6 bg-slate-900/50 hover:border-white/15 hover:bg-slate-800/40"
                  }`}
              >
                {/* Question Button */}
                <button
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-4 p-5 sm:p-6 text-left group"
                >
                  {/* Icon */}
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${isOpen
                        ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }`}
                    aria-hidden="true"
                  >
                    <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"} text-[10px]`} />
                  </span>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 block mb-1">
                      {item.category}
                    </span>
                    <h3
                      className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
                        }`}
                      itemProp="name"
                    >
                      {item.q}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <span
                    className={`shrink-0 text-slate-500 transition-transform duration-300 mt-1 ${isOpen ? "rotate-180 text-primary" : "group-hover:text-slate-300"
                      }`}
                    aria-hidden="true"
                  >
                    <i className="fas fa-chevron-down text-xs" />
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                  style={{
                    maxHeight: isOpen ? "600px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.5rem] sm:pl-[4.75rem]">
                    <div className="h-px bg-primary/10 mb-4" />
                    <p
                      className="text-slate-300 text-sm leading-relaxed"
                      itemProp="text"
                    >
                      {item.a}
                    </p>
                    {/* CTA inside answer */}
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary mt-3 transition-colors duration-200 font-medium"
                    >
                      Learn more or get a free consultation{" "}
                      <i className="fas fa-arrow-right text-[9px]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Load More Button or Link */}
        {showMoreLink && limit && filtered.length > limit ? (
          <div className="text-center mt-8 px-4">
            <Link
              href="/faq"
              className="inline-flex max-sm:w-full items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 border border-white/10 text-white rounded-2xl py-4 px-8 font-semibold text-sm transition-all active:scale-[0.98]"
            >
              Show More <i className="fas fa-chevron-right text-[10px]" />
            </Link>
          </div>
        ) : (
          !showAllItems && filtered.length > 3 && (
            <div className="text-center mt-8 sm:hidden px-4">
              <button
                onClick={() => setShowAllItems(true)}
                className="w-full bg-slate-800/80 hover:bg-slate-800 border border-white/10 text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-semibold text-sm transition-all active:scale-[0.98]"
              >
                Load More Questions <i className="fas fa-chevron-down text-[10px]" />
              </button>
            </div>
          )
        )}

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-block glass-card rounded-2xl p-6 sm:p-8 border border-white/5 w-full max-w-lg">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-comments text-primary text-sm" />
              </div>
              <p className="text-white font-semibold text-sm mb-1">Still have questions?</p>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                Our team of experts is here to help. Book a free 30-minute strategy call.
              </p>
              <a
                href="/contact"
                id="faq-cta-consult"
                className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium"
              >
                <i className="fas fa-calendar-check text-xs" />
                Get Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
