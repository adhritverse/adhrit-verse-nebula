import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Web Development, AI, Cybersecurity & Cloud · Indore",
  description:
    "AdhritVerse offers 15+ tech services in Indore: custom web development, mobile apps, AI/ML solutions, cybersecurity (VAPT), cloud DevOps & startup consulting. Best software company in Vijay Nagar, Indore, MP.",
  alternates: { canonical: "https://adhritverse.in/services" },
  openGraph: {
    title: "Tech Services in Indore | AdhritVerse – Web, AI, Cybersecurity & Cloud",
    description:
      "15+ specialized tech services for startups & enterprises in Indore. Web dev, AI/ML, cybersecurity, cloud DevOps, mobile apps & more from AdhritVerse, Vijay Nagar, Indore.",
    url: "https://adhritverse.in/services",
  },
};

const SERVICES_DATA = [
  {
    category: "Strategy & Consulting",
    icon: "fas fa-lightbulb",
    color: "primary",
    items: [
      "Digital Strategy",
      "Business Consulting",
      "Product Strategy",
      "Go-to-Market Strategy",
      "Growth Strategy",
      "Market Research",
      "Competitor Analysis"
    ]
  },
  {
    category: "Web Design & Development",
    icon: "fas fa-globe",
    color: "secondary",
    items: [
      "Website Design (UI/UX)",
      "Custom Web Development",
      "CMS Development (WordPress, Webflow)",
      "E-commerce Website Development",
      "Landing Page Development",
      "Website Maintenance"
    ]
  },
  {
    category: "Mobile & Software Development",
    icon: "fas fa-mobile-alt",
    color: "accent",
    items: [
      "Mobile App Development (Android/iOS)",
      "Cross-Platform App Development",
      "SaaS Development",
      "Custom Software Development",
      "API Development & Integration",
      "Enterprise Software Solutions"
    ]
  },
  {
    category: "Branding & Creative Services",
    icon: "fas fa-paint-brush",
    color: "rose-400",
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Graphic Design",
      "Motion Graphics",
      "Video Production",
      "Creative Campaigns",
      "Packaging Design"
    ]
  },
  {
    category: "Digital Marketing",
    icon: "fas fa-bullhorn",
    color: "emerald-400",
    items: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing (SMM)",
      "Content Marketing",
      "Influencer Marketing",
      "Video Marketing",
      "Affiliate Marketing"
    ]
  },
  {
    category: "Marketing & CRM",
    icon: "fas fa-envelope-open-text",
    color: "blue-400",
    items: [
      "Email Marketing",
      "Marketing Automation",
      "CRM Setup & Management",
      "Lead Generation",
      "Conversion Rate Optimization (CRO)"
    ]
  },
  {
    category: "Data, Analytics & AI",
    icon: "fas fa-chart-line",
    color: "violet-400",
    items: [
      "Data Analytics",
      "Business Intelligence (BI)",
      "Dashboard Development",
      "Predictive Analytics",
      "AI/ML Solutions",
      "Chatbot Development"
    ]
  },
  {
    category: "Cybersecurity & IT Services",
    icon: "fas fa-shield-alt",
    color: "red-400",
    items: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Security Audits",
      "Network Security",
      "Cloud Security",
      "Compliance (ISO, GDPR)",
      "Secure Code Review"
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "fas fa-cloud",
    color: "cyan-400",
    items: [
      "Cloud Migration (AWS, Azure, GCP)",
      "DevOps Implementation",
      "CI/CD Pipeline Setup",
      "Docker & Kubernetes",
      "Server Management"
    ]
  },
  {
    category: "E-commerce Services",
    icon: "fas fa-shopping-cart",
    color: "orange-400",
    items: [
      "Shopify / WooCommerce Development",
      "Marketplace Management (Amazon, Flipkart)",
      "Product Listing Optimization",
      "E-commerce Marketing",
      "Conversion Optimization"
    ]
  },
  {
    category: "Automation & CRM Solutions",
    icon: "fas fa-robot",
    color: "indigo-400",
    items: [
      "Workflow Automation",
      "Business Process Automation",
      "Chatbots & AI Assistants",
      "CRM Implementation (HubSpot, Salesforce)",
      "Sales Automation"
    ]
  },
  // {
  //   category: "EdTech & LMS",
  //   icon: "fas fa-graduation-cap",
  //   color: "yellow-400",
  //   items: [
  //     "LMS Development",
  //     "Course Platform Development",
  //     "Online Exam Systems",
  //     "Skill Assessment Platforms",
  //     "Learning Analytics"
  //   ]
  // },
  {
    category: "Blockchain & Web3",
    icon: "fas fa-link",
    color: "teal-400",
    items: [
      "Smart Contract Development",
      "NFT Platform Development",
      "Web3 Applications",
      "Crypto Integrations"
    ]
  },
  {
    category: "AR/VR & Emerging Tech",
    icon: "fas fa-vr-cardboard",
    color: "fuchsia-400",
    items: [
      "Augmented Reality (AR)",
      "Virtual Reality (VR)",
      "Metaverse Development"
    ]
  },
  {
    category: "Product & Startup Services",
    icon: "fas fa-rocket",
    color: "lime-400",
    items: [
      "MVP Development",
      "Tech Co-founder Support",
      "Product Scaling",
      "Architecture Consulting",
      "Investor Tech Support"
    ]
  },
  {
    category: "Operations & Support",
    icon: "fas fa-user-tie",
    color: "slate-400",
    items: [
      "IT Support",
      "Technical Maintenance",
      "Dedicated Development Teams",
      "Helpdesk Services",
      "Outsourcing Services"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 text-center px-6" aria-label="Services Overview">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 sm:mb-6">
            <i className="fas fa-map-marker-alt text-primary text-[10px] sm:text-xs"></i>
            <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-wide uppercase">Vijay Nagar, Indore · MP · India</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] md:leading-tight">
            Tech Services in <span className="text-gradient block sm:inline">Indore & Beyond</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            AdhritVerse offers <strong className="text-slate-200">15+ specialized tech services</strong> — from web development & AI/ML to cybersecurity & cloud DevOps. Indore&apos;s most comprehensive startup tech partner, serving businesses across India and globally.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              category={service.category}
              items={service.items}
              color={service.color}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 relative z-10" aria-label="Contact AdhritVerse Indore">
        <div className="max-w-3xl mx-auto text-center">
            <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden glass-card border-white/5">
                <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.4), transparent 70%)' }}></div>
                <div className="relative z-10">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Build Something Extraordinary?</h2>
                    <p className="text-sm sm:text-base text-slate-400 mb-2 sm:mb-3">Get a <strong className="text-white">free consultation</strong> with Indore&apos;s top AI-powered tech team. Projects from ₹50K–₹10L+.</p>
                    <p className="text-xs text-slate-500 mb-6 sm:mb-8">📍 Based in Vijay Nagar, Indore · Serving startups across India & globally</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href="/contact" id="services-cta-consultation" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-white font-medium text-sm sm:text-lg">
                          Get Free Consultation <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
                      </Link>
                      <a href="tel:+918462802086" className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-white font-medium text-sm sm:text-lg">
                          <i className="fas fa-phone-alt text-xs"></i> +91 8462802086
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCard({ icon, category, items, color }: { icon: string; category: string; items: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    'primary': 'text-primary bg-primary/10 border-primary/20',
    'secondary': 'text-secondary bg-secondary/10 border-secondary/20',
    'accent': 'text-accent bg-accent/10 border-accent/20',
    'red-400': 'text-red-400 bg-red-400/10 border-red-400/20',
    'emerald-400': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'cyan-400': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    'rose-400': 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    'blue-400': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    'violet-400': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    'orange-400': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    'indigo-400': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    'yellow-400': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    'teal-400': 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    'fuchsia-400': 'text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20',
    'lime-400': 'text-lime-400 bg-lime-400/10 border-lime-400/20',
    'slate-400': 'text-slate-400 bg-slate-400/10 border-slate-400/20',
  };

  const activeColor = colorMap[color] || colorMap['primary'];
  const textColor = activeColor.split(' ')[0];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 group relative overflow-hidden transition-all duration-500 hover:border-white/20 flex flex-col h-full hover:translate-y-[-4px]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl ${activeColor} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 border`}>
          <i className={icon}></i>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 leading-tight">{category}</h2>
        
        <ul className="space-y-3 mt-auto">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${activeColor.split(' ')[1]} shrink-0 border border-white/10`}></span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Decorative dot */}
      <div className={`absolute bottom-6 right-6 w-1 h-1 rounded-full ${activeColor.split(' ')[1]} opacity-50 group-hover:scale-[10] transition-transform duration-700`}></div>
    </div>
  );
}
