import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanvasHero from "@/components/CanvasHero";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />
      
      {/* Hero */}
      <CanvasHero />

      {/* Services Preview */}
      <section id="services" className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">What We Deliver</h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto">Comprehensive digital solutions combining cutting-edge engineering with robust cybersecurity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon="fas fa-code" 
              title="Web Development" 
              desc="MERN Stack and Next.js focused. We build scalable, high-performance web applications tailored to your business needs." 
              color="text-primary"
              bg="bg-primary/20"
            />
            <ServiceCard 
              icon="fas fa-mobile-alt" 
              title="App Development" 
              desc="Cross-platform mobile applications using Flutter and React Native. Reach your users natively on iOS and Android." 
              color="text-secondary"
              bg="bg-secondary/20"
            />
            <ServiceCard 
              icon="fas fa-paint-brush" 
              title="UI/UX Design" 
              desc="User-centered design, advanced prototyping, wireframing, and visual design systems that engage and convert." 
              color="text-accent"
              bg="bg-accent/20"
            />
            <ServiceCard 
              icon="fas fa-shield-alt" 
              title="Cybersecurity" 
              desc="Ethical hacking, penetration testing, vulnerability assessment, and comprehensive security audits for peace of mind." 
              color="text-red-500"
              bg="bg-red-500/20"
            />
            <ServiceCard 
              icon="fas fa-brain" 
              title="AI/ML Integrations" 
              desc="Intelligent automation, chatbots, and predictive analytics to give your application smart capabilites." 
              color="text-emerald-500"
              bg="bg-emerald-500/20"
            />
            <ServiceCard 
              icon="fas fa-cloud" 
              title="Cloud & DevOps" 
              desc="AWS/Azure/GCP cloud setup, CI/CD pipelines, and containerization via Docker & Kubernetes." 
              color="text-cyan-500"
              bg="bg-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-16 md:py-24 relative z-10 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4 md:gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Innovation in Action</h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl">A glimpse into our portfolio of secured, high-performing applications.</p>
            </div>
            <Link href="/projects" className="btn-outline px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white text-xs sm:text-sm font-medium w-max shrink-0">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              img="/projectimg/project-1.png" 
              title="Deforastration" 
              desc="A cutting-edge web experience focusing on environmental awareness and digital innovation."
              href="https://deforastration.vercel.app/"
              tags={["Modern Web", "Innovation"]}
            />
            <ProjectCard 
              img="/projectimg/project2.png" 
              title="GSAP Creative Portfolio" 
              desc="A high-fidelity developer portfolio showcasing advanced animations and modern UI design."
              href="https://gsap-portfolio-puce.vercel.app/"
              tags={["GSAP", "Creative"]}
            />
            <ProjectCard 
              img="/projectimg/Project-3.png" 
              title="Luxe Premium Store" 
              desc="A premium luxury shopping destination featuring high-end aesthetics and smooth UX."
              href="https://luxe-vert-eta.vercel.app/"
              tags={["E-Commerce", "Premium"]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 md:py-32 relative z-10 flex flex-col items-center justify-center">
        <div className="w-[90vw] flex justify-center mb-10 md:mb-16 relative z-20">
          <img src="/image copy.png" alt="Let's Collaborate" className="w-full object-contain rounded-xl drop-shadow-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full"></div>
          
          <div className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center border-t border-white/20">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Let&apos;s Collaborate</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10">Ready to transform your ideas into reality? Partner with AdhritVerse to architect a secure and innovative digital future for your business.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <a href="mailto:contact@adhritverse.in" className="btn-primary px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-sm sm:text-base md:text-lg whitespace-nowrap">
                Request a Quote
              </a>
              <a href="tel:+918462802086" className="btn-outline px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-sm sm:text-base md:text-lg whitespace-nowrap flex items-center justify-center gap-2">
                <i className="fas fa-phone-alt text-xs sm:text-sm"></i> Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCard({ icon, title, desc, color, bg }: { icon: string; title: string; desc: string; color: string; bg: string }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl group cursor-pointer">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${bg} flex items-center justify-center ${color} text-xl sm:text-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
        <i className={icon}></i>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-5 sm:mb-6 line-clamp-3">{desc}</p>
      <Link href="/services" className={`${color} hover:text-white font-medium text-xs sm:text-sm flex items-center gap-1 transition-colors`}>
        Learn More <i className="fas fa-long-arrow-alt-right"></i>
      </Link>
    </div>
  );
}

function ProjectCard({ img, title, desc, href, tags }: { img: string; title: string; desc: string; href: string; tags: string[] }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2">
      <div className="h-40 sm:h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/20 transition-colors duration-300"></div>
        <div className="absolute flex-wrap bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-1.5 sm:gap-2 pr-3">
          {tags.map((tag) => (
            <span key={tag} className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium rounded bg-primary/80 text-white backdrop-blur-sm">{tag}</span>
          ))}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </a>
  );
}
