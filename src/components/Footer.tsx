import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-darker pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="AdhritVerse Logo" className="h-8 w-auto object-contain" />
              <span className="font-display font-bold text-xl tracking-tight text-white">AdhritVerse</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Cyber & Web Innovation Consultancy. Delivering secure, scalable, and cutting-edge solutions.
            </p>
            <div className="flex gap-4">
              <SocialLink icon="fab fa-linkedin-in" link="https://www.linkedin.com/company/adhritverse" hoverColor="hover:bg-primary/20" />
              <SocialLink icon="fab fa-github" link="https://github.com/adhritverse" hoverColor="hover:bg-slate-700" />
              <SocialLink icon="fab fa-instagram" link="https://www.instagram.com/adhritverse?igsh=MXgwN2swanRvNmZtYQ==" hoverColor="hover:bg-accent/20" />
              <SocialLink icon="fab fa-twitter" link="https://twitter.com/adhritverse" hoverColor="hover:bg-cyan-500/20" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-white font-bold mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
             </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:contact@adhritverse.in" className="hover:text-white transition-colors">contact@adhritverse.in</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-primary"></i>
                <a href="tel:+918462802086" className="hover:text-white transition-colors">+91 8462802086</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span>Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>

           {/* Newsletter / CTA */}
           <div>
             <h4 className="text-white font-bold mb-6">Stay Connected</h4>
             <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for insights on cyber innovation.</p>
             <form className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary/50 text-white"
                />
                <button type="submit" className="absolute right-2 top-2 bottom-2 px-4 rounded-full bg-primary text-white text-xs font-semibold hover:bg-blue-600 transition-colors">
                  Join
                </button>
             </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} AdhritVerse. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, hoverColor, link = "#" }: { icon: string; hoverColor: string; link?: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white ${hoverColor} transition-all`}
    >
      <i className={icon}></i>
    </a>
  );
}
