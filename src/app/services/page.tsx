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
import ServiceToggleCardComponent from "@/components/ServiceToggleCard";

export const metadata: Metadata = {
  title: "Services | Web Development, AI, Cybersecurity & Cloud",
  description:
    "AV Technologies offers 15+ tech services: custom web development, mobile apps, AI/ML solutions, cybersecurity (VAPT), cloud DevOps & startup consulting.",
  alternates: { canonical: "https://adhritverse.in/services" },
  openGraph: {
    title: "Tech Services | AV Technologies – Web, AI, Cybersecurity & Cloud",
    description:
      "15+ specialized tech services for startups & enterprises. Web dev, AI/ML, cybersecurity, cloud DevOps, mobile apps & more from AV Technologies.",
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
        icon: "globe",
        color: "blue-400",
        items: ["UI/UX Design", "Custom Web Apps", "CMS (WordPress, Webflow)", "E-commerce", "Performance Optimization"]
      },
      {
        category: "Mobile & Software Development",
        icon: "smartphone",
        color: "indigo-400",
        items: ["iOS & Android Apps", "Cross-Platform", "SaaS Platforms", "Custom Software", "API Integrations"]
      },
      {
        category: "Data, Analytics & AI",
        icon: "cpu",
        color: "violet-400",
        items: ["AI/ML Solutions", "Predictive Analytics", "Business Intelligence", "Custom Dashboards", "Chatbots"]
      },
      {
        category: "Cloud & DevOps",
        icon: "cloud",
        color: "cyan-400",
        items: ["Cloud Migration", "CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Serverless"]
      },
      {
        category: "Blockchain & Web3",
        icon: "link",
        color: "teal-400",
        items: ["Smart Contracts", "NFT Marketplaces", "DApps", "Tokenomics", "Web3 Integration"]
      },
      {
        category: "AR/VR & Emerging Tech",
        icon: "layers",
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
        icon: "megaphone",
        color: "emerald-400",
        items: ["SEO Excellence", "PPC Advertising", "Social Media", "Content Strategy", "Growth Hacking"]
      },
      {
        category: "Marketing & CRM",
        icon: "mail",
        color: "blue-400",
        items: ["Email Marketing", "Marketing Automation", "CRM Setup", "Lead Scoring", "Lifecycle Campaigns"]
      },
      {
        category: "E-commerce Services",
        icon: "shopping-cart",
        color: "orange-400",
        items: ["Conversion CRO", "Marketplace Ads", "Product Listing", "Shopify/WooCommerce", "Inventory Sync"]
      },
      {
        category: "Automation Solutions",
        icon: "zap",
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
        icon: "lightbulb",
        color: "primary",
        items: ["Digital Transformation", "Business Strategy", "Product Market Fit", "Go-to-Market", "Scale Planning"]
      },
      {
        category: "Branding & Creative",
        icon: "palette",
        color: "rose-400",
        items: ["Logo & Identity", "Visual Language", "Motion Graphics", "Video Production", "Brand Guidelines"]
      },
      {
        category: "Product & Startup Support",
        icon: "rocket",
        color: "lime-400",
        items: ["MVP Development", "Tech Co-founder", "Investor Readiness", "Architecture Review", "Scaling Support"]
      },
      {
        category: "Operations & IT",
        icon: "briefcase",
        color: "slate-400",
        items: ["Managed IT Services", "Tech Support", "Resource Augmentation", "Vendor Management", "Helpdesk"]
      },
      {
        category: "Cybersecurity (VAPT)",
        icon: "shield",
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
      <section className="pt-24 md:pt-44 pb-12 md:pb-20 text-center px-6 relative" aria-label="Services Header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white whitespace-nowrap select-none">
             SERVICES
           </span>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-display text-3xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Elevate Your <span className="text-gradient">Digital Potential</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From visionary strategy to high-performance execution, we provide the full-spectrum technology services required to build, scale, and dominate in the modern market.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
             {SERVICE_GROUPS.map((group, idx) => (
               <a 
                 key={idx} 
                 href={`#${group.title.toLowerCase().replace(/\s+/g, '-')}`}
                 className="px-4 py-2 rounded-full glass-card text-[11px] sm:text-sm font-medium text-slate-300 hover:text-white transition-colors capitalize"
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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/5 pb-6 md:pb-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2 block">Service Pillar 0{gIdx + 1}</span>
                <h2 className="text-[22px] sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 font-display">{group.title}</h2>
                <p className="text-slate-400 text-sm md:text-lg">{group.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.services.map((service, sIdx) => (
                <ServiceToggleCardComponent 
                  key={sIdx}
                  category={service.category}
                  iconName={service.icon}
                  color={service.color}
                  items={service.items}
                />
              ))}
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
          <h2 className="font-display text-[22px] sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">Let&apos;s Architect Your Success</h2>
          <p className="text-sm md:text-xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Ready to deploy world-class technology for your business? Get a detailed roadmap and estimate from our expert consulting team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-primary text-white font-bold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <a href="tel:+918462802086" className="px-8 py-3 sm:px-10 sm:py-4 rounded-full border border-white/10 text-white font-bold text-base sm:text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> Talk to Expert
            </a>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">Fast response within 24 hours · Global Service Delivery</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

