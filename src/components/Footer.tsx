import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-darker pt-12 sm:pt-16 pb-6 sm:pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* Branding */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="AdhritVerse – Tech Agency in Indore" className="h-8 w-auto object-contain" />
              <span className="font-display font-bold text-xl tracking-tight text-white">AdhritVerse</span>
            </Link>
            <p className="text-sm text-slate-400 mb-2">
              AI-Powered Startup Tech Partner. Indore’s leading tech agency for web development, cybersecurity & AI solutions.
            </p>
            <p className="text-xs text-slate-500 mb-6 flex items-center gap-1.5">
              <MapPin className="text-primary" size={12} /> Vijay Nagar, Indore, Madhya Pradesh 452010
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Linkedin} link="https://www.linkedin.com/company/adhritverse" hoverColor="hover:bg-primary/20" />
              <SocialLink icon={Instagram} link="https://www.instagram.com/adhritverse?igsh=MXgwN2swanRvNmZtYQ==" hoverColor="hover:bg-accent/20" />
              <SocialLink icon={Twitter} link="https://twitter.com/adhritverse" hoverColor="hover:bg-cyan-500/20" />
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">AI / ML Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity (VAPT)</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={16} />
                <a href="mailto:contact@adhritverse.in" className="hover:text-white transition-colors">contact@adhritverse.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={16} />
                <a href="tel:+918462802086" className="hover:text-white transition-colors">+91 8462802086</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={16} />
                <a href="https://maps.google.com/?q=Vijay+Nagar+Indore+Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Vijay Nagar, Indore<br />
                  Madhya Pradesh 452010, India
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6">Stay Connected</h4>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">Subscribe to our newsletter for insights on cyber innovation.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-primary/50 text-white"
              />
              <button type="submit" className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 px-3 sm:px-4 rounded-full bg-primary text-white text-[10px] sm:text-xs font-semibold hover:bg-blue-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <div>
            <p className="text-[10px] sm:text-xs text-slate-500">
              &copy; {currentYear} AdhritVerse (AV Technologies). All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 mt-1">Best Tech Agency in Indore · Vijay Nagar, Madhya Pradesh · India</p>
          </div>
          <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
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
      className={`w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white ${hoverColor} transition-all`}
    >
      <Icon size={18} strokeWidth={1.5} />
    </a>
  );
}
