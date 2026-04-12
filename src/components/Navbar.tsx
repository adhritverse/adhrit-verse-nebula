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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 h-20 flex items-center ${scrolled ? "glass-nav scrolled" : "glass-nav"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
              <img
                src="/logo.png"
                alt="AdhritVerse Logo"
                className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
              AdhritVerse
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${pathname === link.href ? "text-white active-link" : "text-slate-300 hover:text-white"
                  } relative nav-link`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-white btn-primary"
            >
              Request a Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-darker/98 backdrop-blur-xl z-[60] transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-slate-300 hover:text-white p-2 focus:outline-none"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`text-2xl font-medium transition-colors ${pathname === link.href ? "text-white" : "text-slate-300 hover:text-white"
              }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-full text-lg font-medium text-white btn-primary"
        >
          Request a Quote
        </Link>
      </div>

    </>
  );
}

