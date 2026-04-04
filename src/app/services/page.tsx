import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      <section className="pt-36 pb-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <i className="fas fa-cogs text-primary text-xs"></i>
            <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">What We Deliver</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From secure web platforms to intelligent AI integrations — we craft every layer of your digital ecosystem with precision and purpose.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceDetailCard 
            id="web"
            icon="fas fa-code" 
            title="Web Development" 
            desc="Scalable, high-performance web apps using the latest frontend and backend technologies, tailored to your business needs."
            color="primary"
            stats={[
              { label: "Frontend", value: "React, Next.js, TS" },
              { label: "Backend", value: "Node.js, Express" },
              { label: "Focus", value: "Performance" },
              { label: "Stack", value: "MERN / Next.js" }
            ]}
            tags={["Next.js", "React", "Node.js", "MongoDB", "Express.js"]}
          />
          <ServiceDetailCard 
            id="app"
            icon="fas fa-mobile-alt" 
            title="App Development" 
            desc="Cross-platform mobile applications using Flutter and React Native, delivering native feel on both iOS and Android."
            color="secondary"
            stats={[
              { label: "Platform", value: "iOS & Android" },
              { label: "Frameworks", value: "Flutter, React Native" },
              { label: "Backend", value: "Firebase / APIs" },
              { label: "Delivery", value: "App Stores" }
            ]}
            tags={["Flutter", "React Native", "Dart", "Firebase"]}
          />
          <ServiceDetailCard 
            id="design"
            icon="fas fa-paint-brush" 
            title="UI/UX Design" 
            desc="User-centered design that converts. We craft prototypes, wireframes, and visual design systems that delight users."
            color="accent"
            stats={[
              { label: "Research", value: "User Personas" },
              { label: "Prototyping", value: "Wireframes" },
              { label: "Systems", value: "Design Tokens" },
              { label: "Visual", value: "Modern & Accessible" }
            ]}
            tags={["Figma", "Adobe XD", "Framer", "WCAG 2.1"]}
          />
          <ServiceDetailCard 
            id="cyber"
            icon="fas fa-shield-alt" 
            title="Ethical Hacking & Cybersecurity" 
            desc="Proactive security testing and auditing that finds vulnerabilities before attackers do. Protect your digital assets."
            color="red-400"
            stats={[
              { label: "Pen Testing", value: "Web & Network" },
              { label: "Assessment", value: "Audit Reports" },
              { label: "Audit", value: "Code Review" },
              { label: "Compliance", value: "OWASP" }
            ]}
            tags={["Kali Linux", "Burp Suite", "Metasploit", "Nmap", "OWASP"]}
          />
          <ServiceDetailCard 
            id="ai"
            icon="fas fa-brain" 
            title="AI/ML Integrations" 
            desc="Bring intelligence to your applications with custom chatbots, predictive analytics, and AI-powered automation."
            color="emerald-400"
            stats={[
              { label: "Chatbots", value: "AI-Powered NLP" },
              { label: "Analytics", value: "Predictive" },
              { label: "Automation", value: "Intelligent" },
              { label: "Integration", value: "API First" }
            ]}
            tags={["Python", "TensorFlow", "OpenAI API", "LangChain"]}
          />
          <ServiceDetailCard 
            id="cloud"
            icon="fas fa-cloud" 
            title="Cloud & DevOps" 
            desc="Modern cloud infrastructure, CI/CD pipelines, and containerization to ensure your systems scale and ship fast."
            color="cyan-400"
            stats={[
              { label: "Providers", value: "AWS / Azure / GCP" },
              { label: "CI/CD", value: "GitHub Actions" },
              { label: "Containers", value: "Docker / K8s" },
              { label: "Monitoring", value: "Grafana" }
            ]}
            tags={["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]}
          />
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
            <div className="relative p-12 rounded-3xl overflow-hidden glass-card border-white/5">
                <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.4), transparent 70%)' }}></div>
                <div className="relative z-10">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-slate-400 mb-8">Let&apos;s discuss your project and craft the perfect digital solution for your business.</p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-medium text-lg">
                        Request a Quote <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceDetailCard({ id, icon, title, desc, color, stats, tags }: { id: string; icon: string; title: string; desc: string; color: string; stats: any[]; tags: string[] }) {
  const colorMap: any = {
    'primary': 'text-primary bg-primary/20',
    'secondary': 'text-secondary bg-secondary/20',
    'accent': 'text-accent bg-accent/20',
    'red-400': 'text-red-400 bg-red-400/20',
    'emerald-400': 'text-emerald-400 bg-emerald-400/20',
    'cyan-400': 'text-cyan-400 bg-cyan-400/20',
  };

  return (
    <div id={id} className="glass-card rounded-3xl p-8 md:p-10 group relative overflow-hidden transition-all duration-500 hover:border-primary/30">
      <div className="flex items-start gap-6 mb-8">
        <div className={`w-16 h-16 rounded-2xl ${colorMap[color].split(' ')[1]} flex items-center justify-center ${colorMap[color].split(' ')[0]} text-3xl shrink-0 group-hover:scale-110 transition-transform`}>
          <i className={icon}></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-display text-white mb-2">{title}</h2>
          <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
            <div className={`${colorMap[color].split(' ')[0]} text-[10px] font-bold uppercase tracking-widest mb-1`}>{stat.label}</div>
            <p className="text-slate-300 text-sm font-medium">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 group-hover:border-primary/20 group-hover:text-white transition-colors`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
