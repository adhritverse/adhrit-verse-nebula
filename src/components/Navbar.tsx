"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`
            w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${scrolled
              ? "mt-4 max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0a0f1e]/90 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] px-8 py-4"
              : "max-w-7xl px-8 py-8 bg-transparent"
            }
          `}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo — Left */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-12 h-12 relative flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] group-hover:border-primary/40 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="AV Technologies Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                AV Technologies
              </span>
            </Link>

            {/* Nav Links — Center */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                      ${isActive
                        ? "text-white bg-white/[0.1]"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA — Right */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://api.whatsapp.com/send/?phone=918462802086&text=Hello+AdhritVerse%2C+I+want+to+request+a+quote.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center px-8 py-3.5 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-500 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
              >
                Get a Quote
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Menu ─── */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#050a18]/98 backdrop-blur-2xl z-[60] transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col border-l border-white/[0.06]`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/[0.06]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08]">
              <img src="/logo.png" alt="AV Technologies" className="h-7 w-auto object-contain" />
            </div>
            <span className="font-display font-bold text-xl text-white">AV Technologies</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-2 px-5 py-8 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  flex items-center gap-4 px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300
                  ${isActive
                    ? "text-white bg-primary/10 border border-primary/20"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }
                `}
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="px-5 pb-8 pt-4 border-t border-white/[0.06]">
          <a
            href="https://api.whatsapp.com/send/?phone=918462802086&text=Hello+AdhritVerse%2C+I+want+to+request+a+quote.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full px-6 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-500 transition-all"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+918462802086"
            className="flex items-center justify-center gap-2 w-full mt-3 px-6 py-4 rounded-xl text-base font-medium text-slate-400 border border-white/[0.06] hover:text-white transition-all"
          >
            <i className="fas fa-phone text-sm text-primary" />
            +91 8462802086
          </a>
        </div>
      </div>
    </>
  );
}
