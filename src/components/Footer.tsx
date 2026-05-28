import Link from "next/link";
import {
  Mail, Phone, MapPin,
  Linkedin, Instagram, Twitter, Facebook, Globe, MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden z-10"
      style={{
        background: "var(--bg-elevated)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -mt-32 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Pre-footer CTA strip */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 mb-16"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <h3
              className="text-3xl md:text-4xl font-display font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Ready to scale your vision?
            </h3>
            <p style={{ color: "var(--text-secondary)" }} className="text-lg">
              Join top companies building the future with AdhritVerse.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-white btn-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-strong)" }}
              >
                <img src="/logo.png" alt="AdhritVerse Logo" className="h-8 w-auto object-contain" />
              </div>
              <span
                className="font-display font-bold text-2xl tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                AdhritVerse
              </span>
            </Link>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              India's premier technology agency specializing in AI solutions,
              cybersecurity, and enterprise-grade web development.
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialLink icon={Linkedin}      link="https://www.linkedin.com/company/adhritverse/"                                         hoverColor="hover:bg-[#0077b5]/10 hover:text-[#0077b5] hover:border-[#0077b5]/40" />
              <SocialLink icon={Instagram}     link="https://www.instagram.com/avtechnologies_?igsh=c3JkZGx1MnRwaDFt"                    hoverColor="hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:border-[#E1306C]/40" />
              <SocialLink icon={Twitter}       link="https://x.com/adhritverse"                                                            hoverColor="hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40" />
              <SocialLink icon={Facebook}      link="https://www.facebook.com/adhritverse"                                                 hoverColor="hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/40" />
              <SocialLink icon={Globe}         link="https://adhritverse.in/"                                                              hoverColor="hover:bg-primary/10 hover:text-primary hover:border-primary/40" />
              <SocialLink icon={MessageCircle} link="https://api.whatsapp.com/send/?phone=918462802086&text=Hello+AdhritVerse%2C+I+want+to+request+a+quote.&type=phone_number&app_absent=0" hoverColor="hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/40" />
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-bold text-lg mb-6" style={{ color: "var(--text-primary)" }}>Services</h4>
            <ul className="space-y-4 text-base" style={{ color: "var(--text-secondary)" }}>
              {["Web Development","App Development","AI / ML Solutions","Cybersecurity (VAPT)","Cloud & DevOps"].map(item => (
                <li key={item}>
                  <Link href="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-bold text-lg mb-6" style={{ color: "var(--text-primary)" }}>Company</h4>
            <ul className="space-y-4 text-base" style={{ color: "var(--text-secondary)" }}>
              {[
                { label: "Our Portfolio",  href: "/projects" },
                { label: "Meet The Team", href: "/team" },
                { label: "Insights & Blog", href: "/blog" },
                { label: "FAQ",            href: "/faq" },
                { label: "Contact Us",     href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6" style={{ color: "var(--text-primary)" }}>Get in Touch</h4>
            <ul className="space-y-5 text-base" style={{ color: "var(--text-secondary)" }}>
              <li>
                <a href="mailto:contact@adhritverse.in" className="group flex items-start gap-4 hover:text-primary transition-colors">
                  <ContactIcon icon={<Mail size={14} />} />
                  <div>
                    <span className="block text-sm mb-0.5" style={{ color: "var(--text-muted)" }}>Email</span>
                    contact@adhritverse.in
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918462802086" className="group flex items-start gap-4 hover:text-primary transition-colors">
                  <ContactIcon icon={<Phone size={14} />} />
                  <div>
                    <span className="block text-sm mb-0.5" style={{ color: "var(--text-muted)" }}>Phone</span>
                    +91 84628 02086
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Vijay+Nagar+Indore+Madhya+Pradesh"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-start gap-4 hover:text-primary transition-colors"
                >
                  <ContactIcon icon={<MapPin size={14} />} />
                  <div className="leading-relaxed">
                    <span className="block text-sm mb-0.5" style={{ color: "var(--text-muted)" }}>Office</span>
                    Vijay Nagar, Indore<br />
                    Madhya Pradesh 452010
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            &copy; {currentYear} AdhritVerse (AV Technologies). All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <Link href="/privacy" className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div
      className="mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        color: "var(--text-muted)",
      }}
    >
      {icon}
    </div>
  );
}

function SocialLink({
  icon: Icon,
  hoverColor,
  link = "#",
}: {
  icon: React.ElementType;
  hoverColor: string;
  link?: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${hoverColor}`}
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-strong)",
        color: "var(--text-muted)",
      }}
    >
      <Icon size={20} strokeWidth={1.5} />
    </a>
  );
}
