import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";
import { 
  Lightbulb, 
  Globe, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Mail, 
  Cpu, 
  Shield, 
  Cloud, 
  ShoppingCart, 
  Zap, 
  Link as LinkIcon, 
  Layers, 
  Rocket, 
  Briefcase,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Web Development, AI, Cybersecurity & Cloud",
  description:
    "AdhritVerse offers 15+ tech services: custom web development, mobile apps, AI/ML solutions, cybersecurity (VAPT), cloud DevOps & startup consulting.",
  alternates: { canonical: "https://adhritverse.in/services" },
  openGraph: {
    title: "Tech Services | AdhritVerse – Web, AI, Cybersecurity & Cloud",
    description:
      "15+ specialized tech services for startups & enterprises. Web dev, AI/ML, cybersecurity, cloud DevOps, mobile apps & more from AdhritVerse.",
    url: "https://adhritverse.in/services",
  },
};

const SERVICE_GROUPS = [
  {
    title: "Software & Technology",
    description: "Building the digital backbone of your business with cutting-edge stack and scalable architectures.",
    services: [
      {
        category: "Web Design & Development",
        icon: Globe,
        color: "blue-400",
        items: ["UI/UX Design", "Custom Web Apps", "CMS (WordPress, Webflow)", "E-commerce", "Performance Optimization"]
      },
      {
        category: "Mobile & Software Development",
        icon: Smartphone,
        color: "indigo-400",
        items: ["iOS & Android Apps", "Cross-Platform", "SaaS Platforms", "Custom Software", "API Integrations"]
      },
      {
        category: "Data, Analytics & AI",
        icon: Cpu,
        color: "violet-400",
        items: ["AI/ML Solutions", "Predictive Analytics", "Business Intelligence", "Custom Dashboards", "Chatbots"]
      },
      {
        category: "Cloud & DevOps",
        icon: Cloud,
        color: "cyan-400",
        items: ["Cloud Migration", "CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Serverless"]
      },
      {
        category: "Blockchain & Web3",
        icon: LinkIcon,
        color: "teal-400",
        items: ["Smart Contracts", "NFT Marketplaces", "DApps", "Tokenomics", "Web3 Integration"]
      },
      {
        category: "AR/VR & Emerging Tech",
        icon: Layers,
        color: "fuchsia-400",
        items: ["Augmented Reality", "Virtual Reality", "Metaverse Dev", "Unity/Unreal Engine", "Mixed Reality"]
      }
    ]
  },
  {
    title: "Marketing & Growth",
    description: "Driving visibility and conversion through data-driven marketing and automation strategies.",
    services: [
      {
        category: "Digital Marketing",
        icon: Megaphone,
        color: "emerald-400",
        items: ["SEO Excellence", "PPC Advertising", "Social Media", "Content Strategy", "Growth Hacking"]
      },
      {
        category: "Marketing & CRM",
        icon: Mail,
        color: "blue-400",
        items: ["Email Marketing", "Marketing Automation", "CRM Setup", "Lead Scoring", "Lifecycle Campaigns"]
      },
      {
        category: "E-commerce Services",
        icon: ShoppingCart,
        color: "orange-400",
        items: ["Conversion CRO", "Marketplace Ads", "Product Listing", "Shopify/WooCommerce", "Inventory Sync"]
      },
      {
        category: "Automation Solutions",
        icon: Zap,
        color: "yellow-400",
        items: ["Workflow Automation", "Process Optimization", "Zapier/Make Integrations", "AI Assistants"]
      }
    ]
  },
  {
    title: "Business & Strategy",
    description: "Aligning technology with business goals for sustainable growth and market leadership.",
    services: [
      {
        category: "Strategy & Consulting",
        icon: Lightbulb,
        color: "primary",
        items: ["Digital Transformation", "Business Strategy", "Product Market Fit", "Go-to-Market", "Scale Planning"]
      },
      {
        category: "Branding & Creative",
        icon: Palette,
        color: "rose-400",
        items: ["Logo & Identity", "Visual Language", "Motion Graphics", "Video Production", "Brand Guidelines"]
      },
      {
        category: "Product & Startup Support",
        icon: Rocket,
        color: "lime-400",
        items: ["MVP Development", "Tech Co-founder", "Investor Readiness", "Architecture Review", "Scaling Support"]
      },
      {
        category: "Operations & IT",
        icon: Briefcase,
        color: "slate-400",
        items: ["Managed IT Services", "Tech Support", "Resource Augmentation", "Vendor Management", "Helpdesk"]
      },
      {
        category: "Cybersecurity (VAPT)",
        icon: Shield,
        color: "red-400",
        items: ["Penetration Testing", "Security Audits", "Compliance", "Network Security", "Risk Mitigation"]
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <BlobBackground />

      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-20 text-center px-6 relative" aria-label="Services Header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white whitespace-nowrap select-none">
             SERVICES
           </span>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your <span className="text-gradient">Digital Potential</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From visionary strategy to high-performance execution, we provide the full-spectrum technology services required to build, scale, and dominate in the modern market.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             {SERVICE_GROUPS.map((group, idx) => (
               <a 
                 key={idx} 
                 href={`#${group.title.toLowerCase().replace(/\s+/g, '-')}`}
                 className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-slate-300 hover:text-white transition-colors"
               >
                 {group.title}
               </a>
             ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-10 px-6 max-w-7xl mx-auto relative z-10 mb-20">
        {SERVICE_GROUPS.map((group, gIdx) => (
          <div 
            key={gIdx} 
            id={group.title.toLowerCase().replace(/\s+/g, '-')}
            className={`mb-24 last:mb-0 transition-all duration-1000`}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Service Pillar 0{gIdx + 1}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-display">{group.title}</h2>
                <p className="text-slate-400 md:text-lg">{group.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.services.map((service, sIdx) => {
                const Icon = service.icon;
                const colorClasses: Record<string, string> = {
                  'blue-400': 'bg-blue-400/10 border-blue-400/20 text-blue-400',
                  'indigo-400': 'bg-indigo-400/10 border-indigo-400/20 text-indigo-400',
                  'violet-400': 'bg-violet-400/10 border-violet-400/20 text-violet-400',
                  'cyan-400': 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
                  'teal-400': 'bg-teal-400/10 border-teal-400/20 text-teal-400',
                  'fuchsia-400': 'bg-fuchsia-400/10 border-fuchsia-400/20 text-fuchsia-400',
                  'emerald-400': 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
                  'orange-400': 'bg-orange-400/10 border-orange-400/20 text-orange-400',
                  'yellow-400': 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400',
                  'rose-400': 'bg-rose-400/10 border-rose-400/20 text-rose-400',
                  'lime-400': 'bg-lime-400/10 border-lime-400/20 text-lime-400',
                  'slate-400': 'bg-slate-400/10 border-slate-400/20 text-slate-400',
                  'red-400': 'bg-red-400/10 border-red-400/20 text-red-400',
                  'primary': 'bg-primary/10 border-primary/20 text-primary',
                };
                const activeClasses = colorClasses[service.color] || colorClasses['primary'];

                return (
                  <div 
                    key={sIdx}
                    className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
                  >
                    {/* Decorative Background */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${activeClasses.split(' ').slice(0, 2).join(' ')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-7 h-7 ${activeClasses.split(' ')[2]}`} />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.category}</h3>
                      
                      <ul className="space-y-3 mb-8">
                        {service.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-300 transition-colors text-sm sm:text-base">
                            <CheckCircle2 size={14} className="text-primary/60 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5 relative z-10 flex justify-between items-center group-hover:border-primary/10 transition-colors">
                      <Link href="/contact" className="text-sm font-semibold text-primary inline-flex items-center gap-2 group/btn">
                        Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <ChevronRight size={18} className="text-slate-600 group-hover:text-primary/40 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 relative z-10 bg-slate-950/50 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px] -ml-64 -mb-64"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Let&apos;s Architect Your Success</h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Ready to deploy world-class technology for your business? Get a detailed roadmap and estimate from our expert consulting team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <a href="tel:+918462802086" className="px-10 py-4 rounded-full border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Phone size={20} /> Talk to Expert
            </a>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">Fast response within 24 hours · Global Service Delivery</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

