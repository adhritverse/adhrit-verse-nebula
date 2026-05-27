"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  closed: {
    x: "100%",
    transition: { type: "spring", stiffness: 400, damping: 40 } as const,
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 38,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    } as const,
  },
} as const;

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 } as const,
  },
} as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",     href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Team",     href: "/team" },
    { name: "Blog",     href: "/blog" },
    { name: "FAQ",      href: "/faq" },
  ];

  return (
    <>
      {/* ── Desktop header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`
            w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${scrolled
              ? "max-w-5xl rounded-2xl border bg-white/90 backdrop-blur-xl shadow-[var(--shadow-nav)] px-6 py-3"
              : "max-w-7xl rounded-2xl border border-transparent bg-transparent px-8 py-5"
            }
          `}
          style={scrolled ? { borderColor: "var(--border)" } : {}}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div
                className="w-10 h-10 relative flex items-center justify-center rounded-xl transition-all duration-500"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <img
                  src="/logo.png"
                  alt="AV Technologies Logo"
                  className="h-7 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -inset-0.5 bg-primary/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="font-display font-bold text-xl tracking-tight transition-colors duration-300 group-hover:text-primary"
                  style={{ color: "var(--text-primary)" }}
                >
                  AV Technologies
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
            </Link>

            {/* Nav Links — Center */}
            <div
              className="hidden lg:flex items-center gap-1 p-1.5 rounded-full"
              style={{
                background: "rgba(15,23,42,0.04)",
                border: "1px solid var(--border)",
              }}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-5 py-2 rounded-full text-[15px] font-medium transition-colors duration-300 font-display`}
                    style={{
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full shadow-sm"
                        style={{
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border-strong)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {hoveredIndex === index && !isActive && (
                      <motion.span
                        layoutId="hoverTab"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(15,23,42,0.04)" }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA — Right */}
            <div className="flex items-center gap-4 shrink-0">
              <motion.a
                href="https://api.whatsapp.com/send/?phone=918462802086&text=Hello+AdhritVerse%2C+I+want+to+request+a+quote.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white btn-primary group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm backdrop-blur-2xl z-[60] lg:hidden flex flex-col shadow-2xl"
              style={{
                background: "var(--bg-surface)",
                borderLeft: "1px solid var(--border)",
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 py-6"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl"
                    style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                  >
                    <img src="/logo.png" alt="AV Technologies" className="h-7 w-auto object-contain" />
                  </div>
                  <span className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                    AV Technologies
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 flex flex-col gap-2 px-5 py-8 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-base font-medium transition-all duration-300 font-display"
                        style={{
                          color: isActive ? "var(--color-primary)" : "var(--text-secondary)",
                          background: isActive ? "rgba(59,130,246,0.06)" : "transparent",
                          border: isActive
                            ? "1px solid rgba(59,130,246,0.2)"
                            : "1px solid transparent",
                        }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobileActiveIndicator"
                            className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                          />
                        )}
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTAs */}
              <motion.div
                variants={itemVariants}
                className="px-5 pb-8 pt-4 flex flex-col gap-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=918462802086&text=Hello+AdhritVerse%2C+I+want+to+request+a+quote.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-base font-semibold text-white btn-primary"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+918462802086"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-medium btn-outline"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 8462802086</span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
