"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    q: "What services does AV Technologies offer?",
    a: "We offer a full spectrum of tech services: Web Development (Next.js, MERN), Mobile App Development (Flutter, React Native), UI/UX Design, Cybersecurity & Ethical Hacking, AI/ML Integrations, and Cloud & DevOps. We're your one-stop tech partner.",
  },
  {
    q: "How long does a typical project take?",
    a: "MVPs typically take 4–8 weeks. Full-scale applications range from 3–6 months depending on complexity. We follow agile sprints with weekly demos so you see progress in real-time.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We prioritize your intellectual property. We are happy to sign a Non-Disclosure Agreement before any initial discovery calls or code audits to ensure your startup's core ideas remain strictly confidential.",
  },
  {
    q: "How do you handle data privacy in AI models?",
    a: "We implement robust privacy-preserving AI techniques. Any data processed by custom LLMs or machine learning models is anonymized, securely stored within isolated cloud instances, and strictly compliant with modern data protection regulations.",
  },
  {
    q: "Do you work with startups or enterprises?",
    a: "Both. We've helped early-stage startups ship their first product and scaled enterprise systems handling millions of users. Our process adapts to your stage and budget.",
  },
  {
    q: "What makes AV Technologies different from other agencies?",
    a: "We combine AI engineering, cybersecurity audits, and full-stack development under one roof. Every product we ship undergoes a security review — something most agencies can't offer.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Absolutely. We offer maintenance packages that include performance monitoring, security patches, feature updates, and 24/7 critical issue support.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute strategy call. We'll discuss your goals, assess feasibility, and provide a detailed roadmap with timeline and cost estimate — no strings attached.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl border transition-all duration-500 overflow-hidden"
      style={{
        background: isOpen ? "var(--bg-surface)" : "var(--bg-elevated)",
        borderColor: isOpen ? "rgba(59,130,246,0.25)" : "var(--border)",
        boxShadow: isOpen ? "0 4px 20px rgba(59,130,246,0.06)" : "none",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span
          className="text-sm sm:text-base font-semibold transition-colors duration-300"
          style={{ color: isOpen ? "var(--text-primary)" : "var(--text-secondary)" }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300"
          style={{
            background: isOpen ? "rgba(59,130,246,0.10)" : "rgba(15,23,42,0.05)",
            color: isOpen ? "var(--color-primary)" : "var(--text-muted)",
          }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.3, delay: 0.1 },
            }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AnimatedFAQ({
  limit,
  showMoreLink,
}: {
  limit?: number;
  showMoreLink?: boolean;
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const items = limit ? FAQ_DATA.slice(0, limit) : FAQ_DATA;

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 relative z-10"
      aria-labelledby="faq-heading"
    >
      {/* Noise layer */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[130px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="faq-badge">
              <span className="faq-badge-dot" />
              <span className="faq-badge-text">FAQ</span>
            </span>
          </div>
          <h2
            id="faq-heading"
            className="font-display text-[22px] sm:text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="hidden sm:block text-sm md:text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Everything you need to know about working with AV Technologies.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <FAQAccordionItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleItem(i)}
            />
          ))}
        </div>

        {showMoreLink && limit && limit < FAQ_DATA.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              href="/faq"
              className="btn-outline px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <HelpCircle size={14} />
              View All Questions
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
