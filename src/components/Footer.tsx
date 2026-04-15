import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050a18] pt-20 pb-8 overflow-hidden z-10 border-t border-white/[0.05]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -mt-32 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Pre-Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-white/[0.08] mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Ready to scale your vision?</h3>
            <p className="text-lg text-slate-400">Join top companies building the future with AdhritVerse.</p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.1]">
                <img src="/logo.png" alt="AdhritVerse Logo" className="h-8 w-auto object-contain" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">AdhritVerse</span>
            </Link>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              India's premier technology agency specializing in AI solutions, cybersecurity, and enterprise-grade web development.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Linkedin} link="https://www.linkedin.com/company/adhritverse" hoverColor="hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:border-[#0077b5]/50" />
              <SocialLink icon={Instagram} link="https://www.instagram.com/adhritverse?igsh=MXgwN2swanRvNmZtYQ==" hoverColor="hover:bg-[#E1306C]/20 hover:text-[#E1306C] hover:border-[#E1306C]/50" />
              <SocialLink icon={Twitter} link="https://twitter.com/adhritverse" hoverColor="hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50" />
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">App Development</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">AI / ML Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Cybersecurity (VAPT)</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li><Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Portfolio</Link></li>
              <li><Link href="/team" className="hover:text-white hover:translate-x-1 inline-block transition-all">Meet The Team</Link></li>
              <li><Link href="/blog" className="hover:text-white hover:translate-x-1 inline-block transition-all">Insights & Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white hover:translate-x-1 inline-block transition-all">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-5 text-base text-slate-400">
              <li>
                <a href="mailto:contact@adhritverse.in" className="group flex items-start gap-4 hover:text-white transition-colors">
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:text-primary transition-all shrink-0">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 mb-0.5">Email</span>
                    contact@adhritverse.in
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918462802086" className="group flex items-start gap-4 hover:text-white transition-colors">
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:text-primary transition-all shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 mb-0.5">Phone</span>
                    +91 84628 02086
                  </div>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Vijay+Nagar+Indore+Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 hover:text-white transition-colors">
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:text-primary transition-all shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div className="leading-relaxed">
                    <span className="block text-sm text-slate-500 mb-0.5">Office</span>
                    Vijay Nagar, Indore<br />
                    Madhya Pradesh 452010
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} AdhritVerse (AV Technologies). All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, hoverColor, link = "#" }: { icon: any; hoverColor: string; link?: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 ${hoverColor} transition-all duration-300`}
    >
      <Icon size={20} strokeWidth={1.5} />
    </a>
  );
}
